import Event from "../models/event.js";

export const getAllEvents = async (req, res) => {
    try {
        const event = await Event.find({}).sort({ createdAt: -1 });

        res.json({ success: true, eventData: event });
    }
    catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}

export const getAllHackathons = async (req, res) => {
    try {
        const allHackathons = await Event.find({ category: 'Hackathon' })
            .populate('specificEvent')
            .sort({ createdAt: -1 });
            
        res.json({ success: true, allHackathons });
    }
    catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}