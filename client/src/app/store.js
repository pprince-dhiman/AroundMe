import { configureStore } from '@reduxjs/toolkit';
import EventReducers from "../features/event/eventSlice.js";

export const store = configureStore({
  reducer: {
    event: EventReducers,
  },
})