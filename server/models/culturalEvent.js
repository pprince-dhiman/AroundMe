import mongoose from "mongoose";

const culturalEventSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        unique: true,
        required: true,
    },
    performers: {
        type: [{
            name: {
                type: String,
                required: true,
                trim: true
            },
            image: {
                type: String,
                default: "",
            },
            role: {
                type: String,
                required: true,
                trim: true
            }
        }],
        required: true
    },
    dressCode: {
        type: String,
        enum: ['formal', 'semi-formal', 'casual', 'traditional', 'partywear', 'any'],
        default: 'any'
    },
    // Pass -> VIP/General/student 
    passes: [{
        name: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        soldCount: {
            type: Number,
            default: 0
        },
        isSoldOut: {
            type: Boolean,
            default: false
        }
    }]
}, { timestamps: true });

const CulturalEvent = mongoose.model('CulturalEvent', culturalEventSchema);
export default CulturalEvent;