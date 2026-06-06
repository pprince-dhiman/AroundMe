import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardData: null,
  eventDetail: null,
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboardData: (state, action) => {
      state.dashboardData = action.payload;
    },
    setDashboardEvent: (state, action) => {
      state.eventDetail = action.payload;
    }
  }
});

export const { setDashboardData, setDashboardEvent } = dashboardSlice.actions;
export default dashboardSlice.reducer;