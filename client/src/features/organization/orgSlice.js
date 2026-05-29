import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allOrgs: null,
}

const orgSlice = createSlice({
  name: 'orgs',
  initialState,
  reducers: {
    setAllOrgs: (state, action) => {
      state.allOrgs = action.payload;
    }
  }
});

export const { setAllOrgs } = orgSlice.actions;
export default orgSlice.reducer;