import express from "express";
import { isLoggedIn } from "../middlewares/auth.js";
import { createOrganization } from "../controllers/org.controller.js";
const orgRouter = express.Router();

orgRouter.post("/", isLoggedIn, createOrganization);

export default orgRouter;