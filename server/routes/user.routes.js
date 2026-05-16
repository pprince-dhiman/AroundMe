import express from "express"
import { becomeOrganizer, getUserData } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.js";
const userRouter = express.Router();

userRouter.post("/become-organizer", isLoggedIn, becomeOrganizer);
userRouter.get("/", isLoggedIn, getUserData);

export default userRouter;