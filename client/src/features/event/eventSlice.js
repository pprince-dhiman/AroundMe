import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllEvents: null,
}

const eventSlice = createSlice({
    name: 'event', 
    initialState,
    reducers: {
        setAllEvents: (state, action) => {
            state.AllEvents = action.payload;
        }
    }
});

export const { setAllEvents } = eventSlice.actions;
export default eventSlice.reducer;