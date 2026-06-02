import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";
import { deleteStreamUser, upsertStreamUser } from "./stream.js";

export const inngest = new Inngest({ id: "talent-iq" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    try {
      console.log("===== CLERK USER CREATED EVENT =====");
      console.log(JSON.stringify(event.data, null, 2));

      await connectDB();

      const { id, email_addresses, first_name, last_name, image_url } =
        event.data;

      const newUser = {
        clerkId: id,
        email: email_addresses?.[0]?.email_address,
        name: `${first_name || ""} ${last_name || ""}`.trim(),
        profileImage: image_url,
      };

      console.log("Creating/Updating Mongo User:", newUser);

      const user = await User.findOneAndUpdate(
        { clerkId: newUser.clerkId },
        newUser,
        {
          upsert: true,
          new: true,
        },
      );

      console.log("Mongo User Success:", user);

      console.log("Creating Stream User...");

      await upsertStreamUser({
        id: newUser.clerkId.toString(),
        name: newUser.name,
        image: newUser.profileImage,
      });

      console.log("Stream User Success");

      return { success: true };
    } catch (error) {
      console.error("SYNC USER ERROR");
      console.error(error);
      console.error(error?.stack);

      throw error;
    }
  },
);

const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user-from-db" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    try {
      await connectDB();

      const { id } = event.data;

      console.log("Deleting Mongo User:", id);

      await User.deleteOne({ clerkId: id });

      console.log("Deleting Stream User:", id);

      await deleteStreamUser(id.toString());

      console.log("User Deleted Successfully");

      return { success: true };
    } catch (error) {
      console.error("DELETE USER ERROR");
      console.error(error);
      console.error(error?.stack);

      throw error;
    }
  },
);

export const functions = [syncUser, deleteUserFromDB];
