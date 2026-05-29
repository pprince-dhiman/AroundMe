import exprpess from "express";
import { getAllCulturalEvents, getAllEvents, getAllHackathons, getAllWorkshops } from "../controllers/event.controller.js";

// mergeParams => need dynamic value (:orgId) from complete path, 
// otherwise req.params.orgId is undefined.
const eventRouter = exprpess.Router();

eventRouter.get('/', getAllEvents);
eventRouter.get('/hackathons', getAllHackathons);
eventRouter.get('/workshops', getAllWorkshops);
eventRouter.get('/cultural-events', getAllCulturalEvents);

export default eventRouter;