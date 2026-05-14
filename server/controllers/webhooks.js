import { Webhook } from "svix";

export const clerkWebhooks = async (req, res) => {
    try {
        
    }
    catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}