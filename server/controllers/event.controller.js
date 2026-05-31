import Event from "../models/event.js";

export const getAllEvents = async (req, res) => {
  try {
    const event = await Event.find({}).sort({ createdAt: -1 });

    res.json({ success: true, eventData: event });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findById(eventId)
      .populate("specificEvent")
      .populate({
        path: "organization",
        populate: {
          path: "owner",
        },
      });

    res.json({ success: true, event });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const getAllHackathons = async (req, res) => {
  try {
    const allHackathons = await Event.find({ category: "Hackathon" })
      .populate("specificEvent")
      .sort({ createdAt: -1 });

    res.json({ success: true, allHackathons });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const getAllWorkshops = async (req, res) => {
  try {
    const allWorkshops = await Event.find({ category: "Workshop" })
      .populate("specificEvent")
      .sort({ createdAt: -1 });

    res.json({ success: true, allWorkshops });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const getAllCulturalEvents = async (req, res) => {
  try {
    const allCulturalEvents = await Event.find({ category: "CulturalEvent" })
      .populate("specificEvent")
      .sort({ createdAt: -1 });

    res.json({ success: true, allCulturalEvents });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};
