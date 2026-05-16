import { clerkClient } from "@clerk/express"
import User from "../models/user.js";

export const becomeOrganizer = async (req, res) => {
    try {
        const { userId } = req.auth();
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: 'organizer'
            }
        })

        res.json({ success: true, message: "You can register your organization now" });
    }
    catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}

export const getUserData = async (req, res) => {
    try {
        const { userId } = req.auth();
        const user = await User.findById(userId);
        
        if(!user){
            return res.json({ success: false, message: "User not found, Please register."});
        }

        res.json({ success: true, user });
    }
    catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}