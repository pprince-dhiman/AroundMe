import { createCulturalEventService } from "../services/culturalEvent.service.js";

export const createCulturalEventController = async (req, res) => {
    try {
        const { orgId } = req.params;
        const { mode, onlineLink, venue, pricing } = req.body;

        if (mode === 'online' && !onlineLink) {
            return res.json({ success: false, message: "Provide meeting link for online event." });
        }
        if (mode === 'offline' && (!venue || !venue.address || !venue.city || !venue.state || !venue.country)) {
            return res.json({ success: false, message: "Complete the venue information for offline event." });
        }
        if (pricing.isFree === false && pricing.amount <= 10) {
            return res.json({ success: false, message: "Amount should be more than \u20B910 for paid cultural events" });
        }

        const result = await createCulturalEventService({ body: req.body, orgId });

        res.json({ success: true, message: "New Cultural event created successfully.", data: result });
    }
    catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}