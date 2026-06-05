import axiosInstance from "../lib/axios";

export const sessionApi = {
  createSession: async (data) => {
    const response = await axiosInstance.post("/api/sessions", data);
    return response.data;
  },

  getActiveSessions: async () => {
    const response = await axiosInstance.get("/api/sessions/active");
    return response.data;
  },
  getMyRecentSessions: async () => {
    const response = await axiosInstance.get("/api/sessions/my-recent");
    return response.data;
  },

  getSessionById: async (id) => {
    const response = await axiosInstance.get(`/api/sessions/${id}`);
    return response.data;
  },

  joinSession: async (id) => {
    const response = await axiosInstance.post(`/api/sessions/${id}/join`);
    return response.data;
  },
  endSession: async (id) => {
    const response = await axiosInstance.post(`/api/sessions/${id}/end`);
    return response.data;
  },
  getStreamToken: async () => {
    const response = await axiosInstance.get(`/api/chat/token`);
    return response.data;
  },

  requestJoin: async (id) => {
    const response = await axiosInstance.post(`/api/sessions/${id}/request-join`);
    return response.data;
  },
  getJoinRequests: async (id) => {
    const response = await axiosInstance.get(`/api/sessions/${id}/join-requests`);
    return response.data;
  },
  acceptJoin: async (sessionId, userId) => {
    const response = await axiosInstance.post(
      `/api/sessions/${sessionId}/accept-join/${userId}`,
    );
    return response.data;
  },
  rejectJoin: async (sessionId, userId) => {
    const response = await axiosInstance.post(
      `/api/sessions/${sessionId}/reject-join/${userId}`,
    );
    return response.data;
  },
};