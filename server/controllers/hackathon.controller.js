import { createHackathonService } from "../services/hackathon.service.js";

export const createHackathonController = async (req, res) => {
  try {
    const { pricing, mode, venue, onlineLink } = req.body;
    const { orgId } = req.params;
    const { userId } = req;
    const file = req.file;

    if (!file) {
      return res.json({
        success: false,
        message: "Thumbnail is not uploaded.",
      });
    }

    // isFree->false : amount should be exists
    if (pricing.isFree === false && pricing.amount <= 10) {
      return res.json({
        success: false,
        message: "For paid course, Price should be more than \u20B910",
      });
    }

    // check for onlineLink OR vanue's address, city....
    if (mode === "online" && !onlineLink) {
      return res.json({
        success: false,
        message: "Provide meeting link for online event.",
      });
    }
    if (
      mode === "offline" &&
      (!venue ||
        !venue.address ||
        !venue.city ||
        !venue.state ||
        !venue.country)
    ) {
      return res.json({
        success: false,
        message: "Complete the venue information for offline event.",
      });
    }

    // hackathon service => All business logic for hackathon.
    const result = await createHackathonService({
      body: req.body,
      orgId,
      userId,
      file
    });

    res.json({
      success: true,
      data: result,
      message: `${req.body.title}, created successfully.`,
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};
