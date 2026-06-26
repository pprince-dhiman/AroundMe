import mongoose from "mongoose";
import Organization from "../models/organization.js";
import Event from "../models/event.js";
import Hackathon from "../models/hackathon.js";
import { getDataURI } from "../utils/DataUri.js";
import cloudinary from "../utils/cloudinary.js";
import { getCoordinates } from "./geocoding.service.js";

export const createHackathonService = async ({ body, orgId, userId, file }) => {
  // creating a session, bcz I need to work on 2 models at the same time.
  // event(base) + hackathon(detailed) => if 1 fails -> none should save document.
  const session = await mongoose.startSession();
  session.startTransaction();

  //upload thumbnail to cloudinary
  const dataURI = getDataURI(file);
  const fileUrl = await cloudinary.uploader.upload(dataURI.content, {
    resource_type: "image",
    folder: "AroundMe/Hackathon/Thumbnails",
  });
  const thumbnailUrl = fileUrl.secure_url;

  try {
    const organization = await Organization.findById(orgId).session(session);
    if (!organization) {
      throw new Error("Registered organization not found.");
    }

    // Base event session
    const event = await Event.create(
      [
        {
          title: body.title,
          description: body.description,
          organization: orgId,
          organizer: userId,
          category: "Hackathon",
          thumbnail: thumbnailUrl,
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
      const coordinates = await getCoordinates(body.venue);
      const venue = {
        ...body.venue,
        coordinates,
      };
      event[0].venue = venue;
    }

    // Hackathon session
    const hackathon = await Hackathon.create(
      [
        {
          eventId: event[0]._id,
          teamSize: body.teamSize,
          prizes: body.prizes,
          tracks: body.tracks,
          problemStatements: body.problemStatements,
          mentors: body.mentors,
          judges: body.judges,
          judgingCriteria: body.judgingCriteria,
          submissionDeadline: body.submissionDeadline,
          rules: body.rules,
        },
      ],
      { session },
    );

    event[0].specificEvent = hackathon[0]._id;

    await event[0].save({ session });
    await session.commitTransaction();

    return {
      event: event[0],
      hackathon: hackathon[0],
    };
  } catch (err) {
    await session.abortTransaction();
    throw err;
  } finally {
    session.endSession();
  }
};
