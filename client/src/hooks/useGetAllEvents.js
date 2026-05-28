import { useEffect } from "react";
import axios from "axios";
import { EVENT_BACKEND_API } from "../utils/constant.js";
import { useDispatch } from "react-redux";
import { setAllEvents } from "../features/event/eventSlice.js";

export default function useGetAllEvents() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getAllEvents() {

            try {
                const res = await axios.get(`${EVENT_BACKEND_API}/`);

                if (res.data.success) {
                    dispatch(setAllEvents(res.data.eventData));
                }
                else {
                    console.log("useGetAllEvents Failed: ",res.data.messge);
                }
            }
            catch (err) {
                console.log("Error in useGetAllEvents: ", err);
            }
        }
        getAllEvents();
    }, [dispatch]);
}