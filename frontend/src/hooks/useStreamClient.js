import { useState, useEffect, useRef } from "react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../lib/stream";
import { sessionApi } from "../api/sessions";

function useStreamClient(session, loadingSession, isHost, isParticipant) {
  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);
  const callId = session?.callId;

  const callRef = useRef(null);
  const chatRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const initCall = async () => {
      if (!session?.callId) { setIsInitializingCall(false); return; }
      if (!isHost && !isParticipant) { setIsInitializingCall(false); return; }
      if (session.status === "completed") { setIsInitializingCall(false); return; }

      try {
        if (callRef.current) {
          await callRef.current.leave().catch(() => {});
          callRef.current = null;
        }

        const { token, userId, userName, userImage } =
          await sessionApi.getStreamToken();

        if (cancelled) return;

        const client = await initializeStreamClient(
          { id: userId, name: userName, image: userImage },
          token,
        );

        if (cancelled) return;
        setStreamClient(client);

        const videoCall = client.call("default", session.callId);
        await videoCall.join();

        if (cancelled) {
          await videoCall.leave().catch(() => {});
          return;
        }

        videoCall.camera.enable().catch(() => {});
        videoCall.microphone.enable().catch(() => {});

        callRef.current = videoCall;
        setCall(videoCall);

        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        const chatInstance = StreamChat.getInstance(apiKey);

        await chatInstance.connectUser(
          { id: userId, name: userName, image: userImage },
          token,
        );

        if (cancelled) {
          await chatInstance.disconnectUser().catch(() => {});
          return;
        }

        chatRef.current = chatInstance;
        setChatClient(chatInstance);

        const chatChannel = chatInstance.channel("messaging", session.callId);
        await chatChannel.watch();
        setChannel(chatChannel);
      } catch (error) {
        if (!cancelled) toast.error("Failed to join video call");
        console.error("Error init call", error);
      } finally {
        if (!cancelled) setIsInitializingCall(false);
      }
    };

    if (session && !loadingSession) initCall();

    return () => {
      cancelled = true;
      const currentCall = callRef.current;
      const currentChat = chatRef.current;
      callRef.current = null;
      chatRef.current = null;

      (async () => {
        if (currentCall) await currentCall.leave().catch(() => {});
        if (currentChat) await currentChat.disconnectUser().catch(() => {});
        await disconnectStreamClient();
      })();
    };
  }, [callId, loadingSession, isHost, isParticipant]);

  return { streamClient, call, chatClient, channel, isInitializingCall };
}

export default useStreamClient;
