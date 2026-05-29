import axios from "axios";
import { useEffect } from "react";
import { EVENT_BACKEND_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setAllWorkshops } from "../features/workshop/workshopSlice";

const useGetAllWorkshops = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllWorkshops = async () => {
      try {
        const res = await axios.get(`${EVENT_BACKEND_API}/workshops`);
        console.log(res.data)
        if (res.data.success) {
          dispatch(setAllWorkshops(res.data.allWorkshops));
        }
      } catch (err) {
        console.log("Error in all workshop hook: ", err);
      }
    };
    fetchAllWorkshops();
  }, [dispatch]);
};

export default useGetAllWorkshops;
