import { useEffect } from "react";
import axios from "axios";
import { EVENT_BACKEND_API } from "../utils/constant.js";
import { setAllEvents } from "../features/event/eventSlice.js";
import { useDispatch } from "react-redux";
import { useUser } from "@clerk/react";
import { useNavigate } from "react-router";

export default function useGetAllEvents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useUser();

  useEffect(() => {
    async function getAllEvents() {
      try {
        const res = await axios.get(`${EVENT_BACKEND_API}/`);
        // console.log(res.data);
        if (res.data.success) {
          dispatch(setAllEvents(res.data.eventData));
        } else {
          console.log("useGetAllEvents Failed: ", res.data.messge);
        }
      } catch (err) {
        console.log("Error in useGetAllEvents: ", err);
      }
    }
    getAllEvents();
  }, [dispatch, navigate, user]);
}
