import { useEffect } from "react";
import axios from "axios";
import { getToken, useUser } from "@clerk/react";
import { useDispatch } from "react-redux";
import { USER_BACKEND_API } from "../utils/constant";
import { setDashboardData } from "../features/dashboard/dashboardSlice";

export default function useGetDashboardData() {
  const dispatch = useDispatch();
  const user = useUser();
  
  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = await getToken();
      try {
        const res = await axios.get(`${USER_BACKEND_API}/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(res.data);

        if (res.data.success) {
          dispatch(setDashboardData(res.data.dashboardData));
        } else {
          console.log(res.data.message);
        }
      } catch (err) {
        console.log("Error in dashboard hook: ", err);
      }
    };

    fetchDashboardData();
  }, [dispatch, user]);
}
