import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions";

export const useCreateSession = () => {
  const result = useMutation({
    mutationKey: ["createSession"],
    mutationFn: sessionApi.createSession,
    onSuccess: () => toast.success("Session created successfully!"),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to create room"),
  });

  return result;
};

export const useActiveSessions = () => {
  const result = useQuery({
    queryKey: ["activeSessions"],
    queryFn: sessionApi.getActiveSessions,
  });

  return result;
};

export const useMyRecentSessions = () => {
  const result = useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: sessionApi.getMyRecentSessions,
  });

  return result;
};

export const useSessionById = (id) => {
  const result = useQuery({
    queryKey: ["session", id],
    queryFn: () => sessionApi.getSessionById(id),
    enabled: !!id,
    refetchInterval: 5000, // refetch every 5 seconds to detect session status changes
  });

  return result;
};

export const useJoinSession = () => {
  const result = useMutation({
    mutationKey: ["joinSession"],
    mutationFn: sessionApi.joinSession,
    onSuccess: () => toast.success("Joined session successfully!"),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to join session"),
  });

  return result;
};

export const useEndSession = () => {
  const result = useMutation({
    mutationKey: ["endSession"],
    mutationFn: sessionApi.endSession,
    onSuccess: () => toast.success("Session ended successfully!"),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to end session"),
  });

  return result;
};

export const useRequestJoin = () => {
  const result = useMutation({
    mutationKey: ["requestJoin"],
    mutationFn: sessionApi.requestJoin,
    onSuccess: () => toast.success("Join request sent! Waiting for host to accept."),
    onError: (error) => {
      console.error("Join request error:", error);
      console.error("Error response:", error.response);
      const msg = error.response?.data?.message || error.message || "Failed to send join request";
      toast.error(`${msg} (${error.response?.status || "network error"})`);
    },
  });

  return result;
};

export const useJoinRequests = (id) => {
  const result = useQuery({
    queryKey: ["joinRequests", id],
    queryFn: () => sessionApi.getJoinRequests(id),
    enabled: !!id,
    refetchInterval: 3000,
  });

  return result;
};

export const useAcceptJoin = () => {
  const result = useMutation({
    mutationKey: ["acceptJoin"],
    mutationFn: ({ sessionId, userId }) => sessionApi.acceptJoin(sessionId, userId),
    onSuccess: () => toast.success("Participant accepted!"),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to accept"),
  });

  return result;
};

export const useRejectJoin = () => {
  const result = useMutation({
    mutationKey: ["rejectJoin"],
    mutationFn: ({ sessionId, userId }) => sessionApi.rejectJoin(sessionId, userId),
    onSuccess: () => toast.success("Join request rejected"),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to reject"),
  });

  return result;
};