import mongoose from "mongoose";
import Event from "../models/event.js";
import Workshop from "../models/workshop.js";
import Organization from "../models/organization.js";
import { getDataURI } from "../utils/DataUri.js";
import cloudinary from "../utils/cloudinary.js";

export const createWorkshopService = async (body, orgId, userId, file) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const fileURI = getDataURI(file);
    const res = await cloudinary.uploader.upload(fileURI.content, {
      resource_type: "image",
      folder: "AroundMe/Workshop/Thumbnails",
    });

    const organization = await Organization.findById(orgId).session(session);

    if (!organization) {
      throw new Error("Registered organization not found.");
    }

    // base event session
    const event = await Event.create(
      [
        {
          title: body.title,
          description: body.description,
          organization: orgId,
          organizer: userId,
          category: "Workshop",
          thumbnail: res.secure_url,
          mode: body.mode,
          startDateTime: body.startDateTime,
          endDateTime: body.endDateTime,
          registrationDeadline: body.registrationDeadline,
          maxParticipants: body.maxParticipants,
          pricing: body.pricing,
          sponsors: body.sponsors,
          FAQs: body.FAQs,
          status: "draft",
        },
      ],
      { session },
    );

    // online link,
    if (body && body.mode === "online") {
      event[0].onlineLink = body.onlineLink;
    }
    // venue,
    if (body && body.mode === "offline") {
      event[0].venue = body.venue;
    }

    // workshop session
    const workshop = await Workshop.create(
      [
        {
          eventId: event[0]._id,
          instructor: body.instructor,
          skillLevel: body.skillLevel,
          prerequisites: body.prerequisites,
          agenda: body.agenda,
        },
      ],
      { session },
    );

    //specific event.
    event[0].specificEvent = workshop[0]._id;

    await event[0].save({ session });
    await session.commitTransaction();

    return {
      event: event[0],
      workshop: workshop[0],
    };
  } catch (err) {
    await session.abortTransaction();
    throw err;
  } finally {
    session.endSession();
  }
};
