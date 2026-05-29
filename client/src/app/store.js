import { configureStore } from "@reduxjs/toolkit";
import EventReducers from "../features/event/eventSlice.js";
import HackathonReducers from "../features/hackathon/hackathonSlice.js";
import WorkshopReducers from "../features/workshop/workshopSlice.js";
import CulturalEventReducers from "../features/culturalEvent/culturalEventSlice.js";

export const store = configureStore({
  reducer: {
    event: EventReducers,
    hackathon: HackathonReducers,
    workshop: WorkshopReducers,
    culturalEvent: CulturalEventReducers,
  },
});
