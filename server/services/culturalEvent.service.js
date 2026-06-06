import mongoose from "mongoose"
import Organization from "../models/organization.js";
import Event from "../models/event.js";
import CulturalEvent from "../models/culturalEvent.js";

export const createCulturalEventService = async({ body, orgId, userId }) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const organization = await Organization.findById(orgId).session(session);
        if(!organization){
            throw new Error("Registered organization does not found.");
        }

        // event (base) data
        const event = await Event.create([{
            title: body.title,
            description: body.description,
            organization: orgId,
            organizer: userId,
            category: 'CulturalEvent',
            thumbnail: body.thumbnail,
            tags: body.tags,
            mode: body.mode,
            startDateTime: body.startDateTime,
            endDateTime: body.endDateTime,
            registrationDeadline: body.registrationDeadline,
            maxParticipants: body.maxParticipants,
            pricing: body.pricing,
            sponsors: body.sponsors,
            FAQs: body.FAQs,
            status: 'draft'
        }], { session });

        if(body.mode==='offline'){
            event[0].venue = body.venue;
        }
        if(body.mode==='online'){
            event[0].onlineLink = body.onlineLink;
        }

        // cultural event data
        const culturalEvent = await CulturalEvent.create([{
            eventId: event[0]._id,
            performers: body.performers,
            dressCode: body.dressCode,
            passes: body.passes,
        }], { session });

        event[0].specificEvent = culturalEvent[0]._id;

        await event[0].save({ session });
        await session.commitTransaction();

        return {
            event: event[0],
            culturalEvent: culturalEvent[0],
        }
    }
    catch(err){
        await session.abortTransaction();
        throw err;
    }
    finally {
        session.endSession();
    }
}