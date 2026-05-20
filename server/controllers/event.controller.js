import Event from "../models/event.js";
import Organization from "../models/organization.js";

export const createEvent = async (req, res) => {
    try {
        const { title, description, category, mode, venue, onlineLink, startDateTime, endDateTime, registrationDeadline, maxParticipants, pricing, sponsors, FAQs } = req.body;
        


        const newEvent = {
            title, description, organization: orgData._id, category, mode, startDateTime, endDateTime, registrationDeadline, maxParticipants, FAQs, status
        }

        if (mode === 'offline') {
            newEvent.venue = venue;
        } else {
            newEvent.onlineLink = onlineLink;
        }

        if (sponsors.length !== 0) {
            newEvent.sponsors = sponsors;
        }

        // create event and attach it to req
        let event = await Event.create(newEvent);
        req.event = event;
    }
    catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}