import { clerkClient } from "@clerk/express";
import User from "../models/user.js";
import Organization from "../models/organization.js";
import Event from "../models/event.js";

export const becomeOrganizer = async (req, res) => {
  try {
    const { userId } = req;
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: "organizer",
      },
    });

    // update role in DB
    await User.findByIdAndUpdate(userId, { role: "organizer" });

    res.json({
      success: true,
      message: "You can register your organization now",
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const getUserData = async (req, res) => {
  try {
    const { userId } = req;
    const user = await User.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "User not found, Please register.",
      });
    }

    res.json({ success: true, user });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const getOrganizers = async (req, res) => {
  try {
    const organizers = await User.find({ role: "organizer" });
    res.json({ success: true, organizers });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const getUserRegisteredEvents = async (req, res) => {
  try {
    const { userId } = req;
    const user = await User.findById(userId).populate("registered_events");
    if (!user) {
      return res.json({
        success: false,
        message: "User not found, Please register.",
      });
    }

    res.json({ success: true, registeredEvents: user.registered_events });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const getDashboardData = async (req, res) => {
  try {
    const { userId } = req;
    const allOrgs = await Organization.find({ owner: userId }).sort({
      createdAt: -1,
    });
    const allEvents = await Event.find({ organizer: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "organization",
        select: "name organizationType",
      });

    const dashboardData = { allOrgs, allEvents };

    res.json({ success: true, dashboardData });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const getDashboardEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findById(eventId)
      .populate("organization")
      .populate("specificEvent")
      .populate({ path: "organizer", select: "name"});
      
    if (!event) {
      return res.json({ success: false, message: "Event not found." });
    }

    res.json({ success: true, event });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};
