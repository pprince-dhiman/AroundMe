import exprpess from "express";
import { getAllEvents } from "../controllers/event.controller.js";
import { isLoggedIn } from "../middlewares/userAuth.js";

// mergeParams => need dynamic value (:orgId) from complete path, 
// otherwise req.params.orgId is undefined.
const eventRouter = exprpess.Router();

eventRouter.get('/', getAllEvents);

export default eventRouter;