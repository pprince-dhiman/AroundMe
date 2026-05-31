import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllEvents: null,
    event: null,
}

const eventSlice = createSlice({
    name: 'event', 
    initialState,
    reducers: {
        setAllEvents: (state, action) => {
            state.AllEvents = action.payload;
        },
        setEvent: (state, action) => {
            state.event = action.payload;
        }
    }
});

export const { setAllEvents, setEvent } = eventSlice.actions;
export default eventSlice.reducer;