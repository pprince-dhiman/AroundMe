import express from "express";
import { isLoggedIn } from "../middlewares/userAuth.js";
import { createOrganizationController, getAllOrganization, getMyOrganizations, getOrgById, updateOrg } from "../controllers/org.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { createOrgSchema } from "../validators/organization.validator.js";
import { isOrganizer } from "../middlewares/organizerAuth.js";
const orgRouter = express.Router();

orgRouter.get("/", getAllOrganization);
orgRouter.get("/my", isLoggedIn, isOrganizer, getMyOrganizations);
orgRouter.get("/:orgId", getOrgById);
orgRouter.post("/", isLoggedIn, isOrganizer, validate(createOrgSchema), createOrganizationController);
orgRouter.patch("/:orgId", isLoggedIn, isOrganizer, updateOrg);

export default orgRouter;