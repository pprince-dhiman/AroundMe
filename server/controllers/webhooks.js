import { Webhook } from "svix";
import User from "../models/user.js";
import { clerkClient } from "@clerk/express";

export const clerkWebhooks = async (req, res) => {
    try {
        const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
        if (!WEBHOOK_SECRET) {
            console.error('Missing WEBHOOK_SECRET');
            return res.status(500).json({ error: 'Server misconfigured' });
        }

        const payload = req.body;
        const headers = req.headers;

        const whook = new Webhook(WEBHOOK_SECRET);

        // Throws on error, returns the verified content on success
        const event = await whook.verify(payload, headers);

        const { data, type } = event;

        switch (type) {
            case 'user.created': {
                // set default role to user in clerk
                await clerkClient.users.updateUserMetadata(data.id, {
                    publicMetadata : {
                        role: 'user'
                    }
                });

                // sync new user with own DB.
                const newUser = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    profile_url: data.image_url,
                }

                await User.create(newUser);
                res.json({});
                break;
            }

            case 'user.updated': {
                const userData = {
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    profile_url: data.image_url,
                }

                await User.findByIdAndUpdate(data.id, userData);
                res.json({});
                break;
            }

            case 'user.deleted': {
                await User.findByIdAndDelete(data.id);
                res.json({});
                break;
            }

            default: break;
        }
    }
    catch (err) {
        console.log("Webhooks ", err);
        res.json({ success: false, message: err.message });
    }
}