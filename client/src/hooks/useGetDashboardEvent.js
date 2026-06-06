import axios from "axios";
import { useEffect } from "react";
import { USER_BACKEND_API } from "../utils/constant";
import { getToken } from "@clerk/react";
import { useDispatch } from "react-redux";
import { setDashboardEvent } from "../features/dashboard/dashboardSlice";

export default function useGetDashboardEvent( eventId ){
  const dispatch = useDispatch();

  useEffect(()=> {
    const fetchDashboardEvent = async() => {
      const token = await getToken();

      try{
        const res = await axios.get(`${USER_BACKEND_API}/dashboard/events/${eventId}`, {
          headers: { Authorization: `Bearer ${token}`}
        });
        console.log("Hook event: ",res.data.event);

        if(res.data.success){
          dispatch(setDashboardEvent(res.data.event));
        } else {
          console.log(res.data.message);
        }
      }
      catch(err){
        console.log("Error in dashboard event hook: ",err);
      }
    }

    fetchDashboardEvent();
  }, [dispatch, eventId]);
}