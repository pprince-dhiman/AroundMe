import express from "express";
import { isLoggedIn } from "../middlewares/userAuth.js";
import { validateCulturalEvent } from "../middlewares/validate.middleware.js";
import { createCulturalEventSchema } from "../validators/culturalEvent.validator.js";
import { createCulturalEventController } from "../controllers/culturalEvent.controller.js";
import { isOrganizer } from "../middlewares/organizerAuth.js";
import { uploadEventImage } from "../middlewares/multer.js";

const culturalEventRouter = express.Router({ mergeParams: true });

culturalEventRouter.post(
  "/",
  isLoggedIn,
  isOrganizer,
  uploadEventImage,
  validateCulturalEvent(createCulturalEventSchema),
  createCulturalEventController,
);

export default culturalEventRouter;
