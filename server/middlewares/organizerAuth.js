import { clerkClient } from "@clerk/express";

export const isOrganizer = async (req, res, next) => {
  try {
    const { userId } = req;
    const user = await clerkClient.users.getUser(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found." });
    }

    const { role } = user.publicMetadata;
    if (role === "user") {
      return res.json({
        success: false,
        message: "Permission Denied! Become Organizer first.",
      });
    }

    next(); 
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};
