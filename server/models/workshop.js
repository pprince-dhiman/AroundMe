import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        unique: true,
        required: true,
    },
    instructor: {
        name: { type: String, required: true, trim: true },
        image: { type: String, default: "", },
        bio: { type: String, required: true, trim: true }
    },
    skillLevel: {
        type: String,
        enum: ["beginner", "intermediate", "advanced"],
        default: "beginner"
    },
    prerequisites: {
        type: [String],
        default: [],
    },
    agenda: {
        type: [{
            title: {
                type: String,
                trim: true,
                required: true
            },
            startTime: {
                type: String,
                required: true
            },
            endTime: {
                type: String,
                required: true
            }
        }],
        default: []
    },
}, { timestamps: true });

const Workshop = mongoose.model('Workshop', workshopSchema);
export default Workshop;