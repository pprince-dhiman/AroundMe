import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allWorkshops: null,
};

const workshopSlice = createSlice({
  name: "workshop",
  initialState,
  reducers: {
    setAllWorkshops: (state, action) => {
      state.allWorkshops = action.payload;
    },
  },
});

export const { setAllWorkshops } = workshopSlice.actions;
export default workshopSlice.reducer;