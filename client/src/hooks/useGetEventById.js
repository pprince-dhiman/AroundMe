import { useEffect } from "react";
import axios from "axios";
import { EVENT_BACKEND_API } from "../utils/constant";
import {useDispatch} from "react-redux";
import { useUser } from "@clerk/react";
import { setEvent } from "../features/event/eventSlice";

export default function useGetEventById( eventId ){
  const dispatch = useDispatch();
  const { isSignedIn, user } = useUser();

  useEffect(()=> {
    const fetchEvent = async() => {
      try{
        const res = await axios.get(`${EVENT_BACKEND_API}/${eventId}`);
        console.log(res.data.event);
        if(res.data.success){
          dispatch(setEvent(res.data.event));
        }
        else{
          console.log(res.data.message);
        }
      }
      catch(err){
        console.log("Error in event Hook: ", err);
      }
    }

    fetchEvent();
  }, [dispatch, eventId, user, isSignedIn]);
}