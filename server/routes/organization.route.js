import express from "express";
import { isLoggedIn } from "../middlewares/userAuth.js";
import {
  createOrganizationController,
  getAllOrganization,
  getDashboardOrgDetail,
  getMyOrganizations,
  getOrgById,
  getOrgEventsController,
  updateOrg,
} from "../controllers/org.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { createOrgSchema } from "../validators/organization.validator.js";
import { isOrganizer } from "../middlewares/organizerAuth.js";
import { uploadOrgImages } from "../middlewares/multer.js";
import { parseFormDataFields } from "../middlewares/parseFormData.js";
const orgRouter = express.Router();

orgRouter.get("/", getAllOrganization);
orgRouter.get("/my", isLoggedIn, isOrganizer, getMyOrganizations);
orgRouter.get("/:orgId", getOrgById);
orgRouter.get("/:orgId/events", isLoggedIn, getOrgEventsController);
orgRouter.post(
  "/",
  isLoggedIn,
  isOrganizer,
  uploadOrgImages, // formData parsing done
  parseFormDataFields, // JSON string --> JS object
  validate(createOrgSchema),
  createOrganizationController,
);
orgRouter.patch(
  "/:orgId",
  isLoggedIn,
  isOrganizer,
  uploadOrgImages,
  parseFormDataFields,
  // validate(createOrgSchema),
  updateOrg,
);
orgRouter.get(
  "/dashboard/organization/:orgId",
  isLoggedIn,
  isOrganizer,
  getDashboardOrgDetail,
);

export default orgRouter;
