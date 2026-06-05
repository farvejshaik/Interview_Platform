import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  acceptJoinRequest,
  createSession,
  endSession,
  getActiveSessions,
  getJoinRequests,
  getMyRecentSessions,
  getSessionById,
  joinSession,
  rejectJoinRequest,
  requestJoinSession,
} from "../controllers/sessionController.js";

const router = express.Router();

router.post("/", protectRoute, createSession);
router.get("/active", protectRoute, getActiveSessions);
router.get("/my-recent", protectRoute, getMyRecentSessions);

router.get("/:id", protectRoute, getSessionById);
router.post("/:id/join", protectRoute, joinSession);
router.post("/:id/end", protectRoute, endSession);

router.post("/:id/request-join", protectRoute, requestJoinSession);
router.get("/:id/join-requests", protectRoute, getJoinRequests);
router.post("/:id/accept-join/:userId", protectRoute, acceptJoinRequest);
router.post("/:id/reject-join/:userId", protectRoute, rejectJoinRequest);

export default router;
