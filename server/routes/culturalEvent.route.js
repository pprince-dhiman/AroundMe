import express from "express"
import { isLoggedIn } from "../middlewares/userAuth.js";
import validate from "../middlewares/validate.middleware.js";
import { createCulturalEventSchema } from "../validators/culturalEvent.validator.js";
import { createCulturalEventController } from "../controllers/culturalEvent.controller.js";

const culturalEventRouter = express.Router({ mergeParams: true });

culturalEventRouter.post('/', isLoggedIn, validate(createCulturalEventSchema), createCulturalEventController);

export default culturalEventRouter;