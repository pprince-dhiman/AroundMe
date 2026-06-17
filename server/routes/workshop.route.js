import express from "express";
import { isLoggedIn } from "../middlewares/userAuth.js";
import { validateWorkshop } from "../middlewares/validate.middleware.js";
import { createWorkshopSchema } from "../validators/workshop.validator.js";
import { createWorkshopController } from "../controllers/workshop.controller.js";
import { isOrganizer } from "../middlewares/organizerAuth.js";
import { uploadEventImage } from "../middlewares/multer.js";

const workshopRouter = express.Router({ mergeParams: true });

workshopRouter.post(
  "/",
  isLoggedIn,
  isOrganizer,
  uploadEventImage,
  validateWorkshop(createWorkshopSchema),
  createWorkshopController,
);

export default workshopRouter;
