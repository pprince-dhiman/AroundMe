import { useEffect } from "react";
import axios from "axios";
import { EVENT_BACKEND_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useUser } from "@clerk/react";
import { setAllCulturalEvents } from "../features/culturalEvent/culturalEventSlice";

export default function useGetAllCulturalEvents() {
  const dispatch = useDispatch();
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    const fetchAllCulturalEvents = async () => {
      try {
        const res = await axios.get(`${EVENT_BACKEND_API}/cultural-events`);
        console.log(res.data.allCulturalEvents);
        if (res.data.success) {
          dispatch(setAllCulturalEvents(res.data.allCulturalEvents));
        }
      } catch (err) {
        console.log("Error in cultural event hook: ", err);
      }
    };
    fetchAllCulturalEvents();
  }, [dispatch, user, isSignedIn]);
}
