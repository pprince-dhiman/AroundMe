import express from "express"
import { becomeOrganizer, getDashboardData, getDashboardEvent, getOrganizers, getUserData, getUserRegisteredEvents } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/userAuth.js";
import { isOrganizer } from "../middlewares/organizerAuth.js";
const userRouter = express.Router();

userRouter.post("/become-organizer", isLoggedIn, becomeOrganizer);
userRouter.get("/", isLoggedIn, getUserData);
userRouter.get("/organizers", getOrganizers);
userRouter.get("/dashboard", isLoggedIn, isOrganizer, getDashboardData);
userRouter.get("/dashboard/events/:eventId", isLoggedIn, isOrganizer, getDashboardEvent);
userRouter.get("/registered-events", isLoggedIn, getUserRegisteredEvents);

export default userRouter;