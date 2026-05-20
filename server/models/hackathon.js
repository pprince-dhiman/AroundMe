import mongoose from "mongoose";

const hackathonSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        unique: true,
        required: true,
    },
    teamSize: {
        min: { type: Number, required: true },
        max: { type: Number, required: true }
    },
    prizes: [{
        position: { type: String, required: true },
        reward: { type: String, required: true }
    }],
    tracks: [
        { type: String, required: true }
    ],
    problemStatements: [{
        type: String, required: true
    }],
    mentors: [{
        name: { type: String, required: true, trim: true, },
        image: { type: String, default: "", },
        role: {
            type: String,
            enum: [
                "",
                "Software Engineer",
                "Senior Developer",
                "Tech Lead",
                "Founder",
                "Mentor",
                "AI Engineer",
                "Product Manager",
                "Designer",
            ],
            default: "",
        }
    }],

    judges: [{
        name: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            default: "",
        },
        role: {
            type: String,
            trim: true,
            default: "",
        },
    }],
    judgingCriteria: [
      {
        type: String,
        trim: true,
      },
    ],
    submissionDeadline: {
      type: Date,
      required: true,
    },
    rules: [
      {
        type: String,
        trim: true,
      },
    ],
});

const Hackathon = mongoose.model('Hackathon', hackathonSchema);
export default Hackathon;