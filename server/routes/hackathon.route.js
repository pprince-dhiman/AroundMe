import express from "express"

import { isLoggedIn } from "../middlewares/userAuth.js";
import { createHackathonController } from "../controllers/hackathon.controller.js";
import { createHackathonSchema } from "../validators/hackathon.validator.js";
import validate from "../middlewares/validate.middleware.js";
import { isOrganizer } from "../middlewares/organizerAuth.js";

const hackathonRouter = express.Router({ mergeParams: true });

hackathonRouter.post('/', isLoggedIn, validate(createHackathonSchema), createHackathonController);


export default hackathonRouter;