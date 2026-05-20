import exprpess from "express";
import { createEvent } from "../controllers/event.controller.js";
import { isLoggedIn } from "../middlewares/auth.js";

// mergeParams => need dynamic value (:orgId) from complete path, 
// otherwise req.params.orgId is undefined.
const eventRouter = exprpess.Router();


export default eventRouter;