import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allOrgs: null,
  orgById: null,
}

const orgSlice = createSlice({
  name: 'orgs',
  initialState,
  reducers: {
    setAllOrgs: (state, action) => {
      state.allOrgs = action.payload;
    },
    setOrgById: (state, action) => {
      state.orgById = action.payload;
    }
  }
});

export const { setAllOrgs, setOrgById } = orgSlice.actions;
export default orgSlice.reducer;