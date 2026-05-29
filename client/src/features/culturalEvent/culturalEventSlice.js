import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCulturalEvents: null,
}

const culturalEventSlice = createSlice({
  name: 'culturalEvent', 
  initialState,
  reducers: {
    setAllCulturalEvents: (state, action) => {
      state.allCulturalEvents = action.payload;
    }
  }
});

export const { setAllCulturalEvents } = culturalEventSlice.actions;
export default culturalEventSlice.reducer;