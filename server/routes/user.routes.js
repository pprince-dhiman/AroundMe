import express from "express"
import { becomeOrganizer } from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.post("/become-organizer", becomeOrganizer);

export default userRouter;