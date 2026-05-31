import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
    category: {
      type: String,
      enum: ["Hackathon", "Workshop", "CulturalEvent"],
      required: true,
    },
    thumbnail: {
      type: String,
    },
    tags: {
      type: [String],
      default: [],
    },
    mode: {
      type: String,
      enum: ["online", "offline"],
      required: true,
    },
    venue: {
      address: String,
      city: String,
      state: String,
      country: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    onlineLink: {
      type: String,
      default: "",
    },
    startDateTime: {
      type: Date,
      required: true,
    },
    endDateTime: {
      type: Date,
      required: true,
    },
    registrationDeadline: {
      type: Date,
      required: true,
    },
    maxParticipants: {
      type: Number,
      min: 10,
      required: true,
    },
    currentParticipants: {
      type: Number,
      default: 0,
    },
    pricing: {
      isFree: { type: Boolean, required: true },
      amount: { type: Number, default: 0 },
      discount: { type: Number, default: 0 },
      currency: { type: String, default: "INR" },
    },
    sponsors: [{ type: String }],
    FAQs: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
    bookmarks: {
      type: Number,
      default: 0,
    },
    specificEvent: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "category",
    },
    status: {
      type: String,
      enum: ["draft", "upcoming", "open", "ongoing", "ended"],
      default: "draft",
    },
  },
  { timestamps: true },
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
