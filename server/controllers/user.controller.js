import { clerkClient } from "@clerk/express"

export const becomeOrganizer = async(req, res) => {
    try {
        const { userId } = req.auth();
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: 'organizer'
            }
        })

        res.json({ success: true, message: "You can register your organization now"});
    }
    catch(err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}