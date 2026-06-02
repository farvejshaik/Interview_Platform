import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error("STREAM_API_KEY or STREAM_API_SECRET is missing");
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const streamClient = new StreamClient(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    console.log("Upserting Stream User:", userData);

    const response = await chatClient.upsertUser(userData);

    console.log("Stream User Created:", response);

    return response;
  } catch (error) {
    console.error("STREAM UPSERT ERROR");
    console.error(error);
    console.error(error?.stack);

    throw error;
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    console.log("Deleting Stream User:", userId);

    const response = await chatClient.deleteUser(userId);

    console.log("Stream User Deleted:", response);

    return response;
  } catch (error) {
    console.error("STREAM DELETE ERROR");
    console.error(error);
    console.error(error?.stack);

    throw error;
  }
};
