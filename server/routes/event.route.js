import exprpess from "express";
import { getAllEvents, getAllHackathons } from "../controllers/event.controller.js";

// mergeParams => need dynamic value (:orgId) from complete path, 
// otherwise req.params.orgId is undefined.
const eventRouter = exprpess.Router();

eventRouter.get('/', getAllEvents);
eventRouter.get('/hackathons', getAllHackathons);

export default eventRouter;