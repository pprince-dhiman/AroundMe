import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allHackathons: null,
}

const hackathonSlice = createSlice({
    name: 'hackathon',
    initialState,
    reducers: {
        setAllHackathons: (state, action) => {
            state.allHackathons = action.payload;
        }
    }
});

export const { setAllHackathons } = hackathonSlice.actions;
export default hackathonSlice.reducer;