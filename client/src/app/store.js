import { configureStore } from '@reduxjs/toolkit';
import EventReducers from "../features/event/eventSlice.js";
import HackathonReducers from "../features/hackathon/hackathonSlice.js";

export const store = configureStore({
  reducer: {
    event: EventReducers,
    hackathon: HackathonReducers,
  },
});