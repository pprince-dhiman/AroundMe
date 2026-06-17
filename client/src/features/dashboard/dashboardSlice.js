import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardData: null,
  eventDetail: null,
  orgs: null,
  dashboardOrgDetail: null,
  orgId: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardData: (state, action) => {
      state.dashboardData = action.payload;
    },
    setDashboardEvent: (state, action) => {
      state.eventDetail = action.payload;
    },
    setDashboardOrgs: (state, action) => {
      state.orgs = action.payload;
    },
    setDashboardOrgDetails: (state, action) => {
      state.dashboardOrgDetail = action.payload;
    },
    setDashboardOrgId: (state, action) => {
      state.orgId = action.payload;
    }
  },
});

export const {
  setDashboardData,
  setDashboardEvent,
  setDashboardOrgs,
  setDashboardOrgDetails,
  setDashboardOrgId
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
