import express from "express"
import { isLoggedIn } from "../middlewares/userAuth.js";
import validate from "../middlewares/validate.middleware.js";
import { createWorkshopSchema } from "../validators/workshop.validator.js";
import { createWorkshopController } from "../controllers/workshop.controller.js";

const workshopRouter = express.Router({ mergeParams: true });

workshopRouter.post('/', isLoggedIn, validate(createWorkshopSchema), createWorkshopController);

export default workshopRouter;