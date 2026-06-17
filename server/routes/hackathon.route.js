import express from "express";

import { isLoggedIn } from "../middlewares/userAuth.js";
import { createHackathonController } from "../controllers/hackathon.controller.js";
import { createHackathonSchema } from "../validators/hackathon.validator.js";
import { isOrganizer } from "../middlewares/organizerAuth.js";
import { uploadEventImage } from "../middlewares/multer.js";
import { validateHackathon } from "../middlewares/validate.middleware.js";

const hackathonRouter = express.Router({ mergeParams: true });

hackathonRouter.post(
  "/",
  isLoggedIn,
  isOrganizer,
  uploadEventImage,
  validateHackathon(createHackathonSchema),
  createHackathonController,
);

export default hackathonRouter;