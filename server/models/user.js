import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     _id: {
        type: String,
        required: true,
    },
    name: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
    },
    profile_url: {
        type: String, 
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'organizer'],
        default: 'user'
    },
    location: {
        type: String,
        default: ""
    },
    saved_events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;