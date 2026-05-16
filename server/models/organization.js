import mongoose from "mongoose";

const organizationSchma = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    owner: {
        type: String,
        ref: 'User',
        required: true,
    },
    logo: {
        type: String,
        default: "",
    },
    banner: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    website: {
        type: String,
        default: ""
    },
    location: {
        address: { type: String, required: true, },
        city: { type: String, required: true, },
        state: { type: String, required: true, },
        country: { type: String, required: true, },
    },
    organizationType: {
        type: String,
        enum: ["college", "company", "community", "startup", "ngo", "school", "other"],
        default: "other",
    },
    foundedYear: {
        type: Number,
        required: true,
    },
    members: [{
        user: {
            type: String,
            ref: "User",
        },
        role: {
            type: String,
            enum: ["owner", "admin", "manager"],
            default: "manager",
        },
    }],
    totalWorkshops: {
        type: Number,
        default: 0,
    },
    totalHackathons: {
        type: Number,
        default: 0,
    },
    totalOtherEvents: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

const Organization = mongoose.model('Organization', organizationSchma);
export default Organization;