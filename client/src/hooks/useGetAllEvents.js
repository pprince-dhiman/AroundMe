import { useEffect } from "react";
import axios from "axios";
import { EVENT_BACKEND_API } from "../utils/constant.js";
import { getToken } from "@clerk/react";
import { useDispatch } from "react-redux";
import { setAllEvents } from "../features/event/eventSlice.js";

export default function useGetAllEvents() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getAllEvents() {
            const token = await getToken();

            try {
                const res = await axios.get(`${EVENT_BACKEND_API}/`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

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