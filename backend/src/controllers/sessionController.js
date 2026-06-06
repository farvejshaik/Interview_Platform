import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.js";
import User from "../models/User.js";

export async function createSession(req, res) {
  try {
    const { problem, difficulty } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if (!problem || !difficulty) {
      return res
        .status(400)
        .json({ message: "Problem and difficulty are required" });
    }

    // generate a unique call id for stream video
    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // create session in db
    const session = await Session.create({
      problem,
      difficulty,
      host: userId,
      callId,
    });

    // create stream video call
    await streamClient.video.call("default", callId).getOrCreate({
      data: {
        created_by_id: clerkId,
        custom: { problem, difficulty, sessionId: session._id.toString() },
      },
    });

    // chat messaging
    const channel = chatClient.channel("messaging", callId, {
      name: `${problem} Session`,
      created_by_id: clerkId,
      members: [clerkId],
    });

    await channel.create();

    res.status(201).json({ session });
  } catch (error) {
    console.log("Error in createSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getActiveSessions(req, res) {
  try {
    const userId = req.user._id;

    const sessions = await Session.find({
      status: "active",
      $or: [{ host: userId }, { participant: userId }],
    })
      .populate("host", "name profileImage email clerkId")
      .populate("participant", "name profileImage email clerkId")
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.log("Error in getActiveSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMyRecentSessions(req, res) {
  try {
    const userId = req.user._id;

    // get sessions where user is either host or participant
    const sessions = await Session.find({
      status: "completed",
      $or: [{ host: userId }, { participant: userId }],
    })
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.log("Error in getMyRecentSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getSessionById(req, res) {
  try {
    const { id } = req.params;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId")
      .populate("joinRequests.user", "name email profileImage clerkId");

    if (!session) return res.status(404).json({ message: "Session not found" });

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in getSessionById controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function joinSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.status !== "active") {
      return res
        .status(400)
        .json({ message: "Cannot join a completed session" });
    }

    if (session.host.toString() === userId.toString()) {
      return res
        .status(400)
        .json({ message: "Host cannot join their own session as participant" });
    }

    // check if session is already full - has a participant
    if (session.participant)
      return res.status(409).json({ message: "Session is full" });

    session.participant = userId;
    await session.save();

    const channel = chatClient.channel("messaging", session.callId);
    await channel.addMembers([clerkId]);

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in joinSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function requestJoinSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.status !== "active") {
      return res
        .status(400)
        .json({ message: "Cannot join a completed session" });
    }

    if (session.host.toString() === userId.toString()) {
      return res
        .status(400)
        .json({ message: "Host cannot request to join their own session" });
    }

    if (session.participant) {
      return res.status(409).json({ message: "Session is full" });
    }

    const requests = session.joinRequests || [];
    const existingRequest = requests.find(
      (r) => r.user.toString() === userId.toString(),
    );

    if (existingRequest) {
      if (existingRequest.status === "accepted") {
        return res.status(400).json({ message: "Already accepted" });
      }
      if (existingRequest.status === "pending") {
        return res
          .status(400)
          .json({ message: "Join request already submitted" });
      }
      // if rejected, allow re-request
      existingRequest.status = "pending";
    } else {
      if (!session.joinRequests) session.joinRequests = [];
      session.joinRequests.push({ user: userId, status: "pending" });
    }

    await session.save();

    res.status(200).json({ message: "Join request submitted" });
  } catch (error) {
    console.log("Error in requestJoinSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function acceptJoinRequest(req, res) {
  try {
    const { id, userId } = req.params;
    const hostId = req.user._id;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.host.toString() !== hostId.toString()) {
      return res
        .status(403)
        .json({ message: "Only the host can accept requests" });
    }

    if (session.participant) {
      return res.status(409).json({ message: "Session already has a participant" });
    }

    const joinRequest = (session.joinRequests || []).find(
      (r) => r.user.toString() === userId,
    );

    if (!joinRequest) {
      return res.status(404).json({ message: "Join request not found" });
    }

    if (joinRequest.status !== "pending") {
      return res
        .status(400)
        .json({ message: `Request already ${joinRequest.status}` });
    }

    joinRequest.status = "accepted";
    session.participant = userId;

    await session.save();

    // add participant to stream chat channel
    const participantUser = await User.findById(userId);
    if (participantUser) {
      const channel = chatClient.channel("messaging", session.callId);
      await channel.addMembers([participantUser.clerkId]);
    }

    const populatedSession = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId");

    res.status(200).json({ session: populatedSession });
  } catch (error) {
    console.log("Error in acceptJoinRequest controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function rejectJoinRequest(req, res) {
  try {
    const { id, userId } = req.params;
    const hostId = req.user._id;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.host.toString() !== hostId.toString()) {
      return res
        .status(403)
        .json({ message: "Only the host can reject requests" });
    }

    const joinRequest = (session.joinRequests || []).find(
      (r) => r.user.toString() === userId,
    );

    if (!joinRequest) {
      return res.status(404).json({ message: "Join request not found" });
    }

    joinRequest.status = "rejected";
    await session.save();

    res.status(200).json({ message: "Join request rejected" });
  } catch (error) {
    console.log("Error in rejectJoinRequest controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getJoinRequests(req, res) {
  try {
    const { id } = req.params;
    const hostId = req.user._id;

    const session = await Session.findById(id).populate(
      "joinRequests.user",
      "name email profileImage clerkId",
    );

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.host.toString() !== hostId.toString()) {
      return res.status(403).json({ message: "Only the host can view requests" });
    }

    res.status(200).json({ joinRequests: session.joinRequests || [] });
  } catch (error) {
    console.log("Error in getJoinRequests controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function endSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    // check if user is the host
    if (session.host.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "Only the host can end the session" });
    }

    // check if session is already completed
    if (session.status === "completed") {
      return res.status(400).json({ message: "Session is already completed" });
    }

    // delete stream video call
    const call = streamClient.video.call("default", session.callId);
    await call.delete({ hard: true });

    // delete stream chat channel
    const channel = chatClient.channel("messaging", session.callId);
    await channel.delete();

    session.status = "completed";
    await session.save();

    res.status(200).json({ session, message: "Session ended successfully" });
  } catch (error) {
    console.log("Error in endSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
