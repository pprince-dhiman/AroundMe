import axios from "axios";
import { useEffect } from "react";
import { ORG_BACKEND_API } from "../utils/constant";
import { getToken } from "@clerk/react";
import { useDispatch } from "react-redux";
import { useUser } from "@clerk/react";
import { setDashboardOrgs } from "../features/dashboard/dashboardSlice";

export default function useGetAllDashboardOrgs() {
  const dispatch = useDispatch();
  const user = useUser();

  useEffect(() => {
    const fetchAllDashboardOrgs = async () => {
      const token = await getToken();

      try {
        const res = await axios.get(`${ORG_BACKEND_API}/my`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.success) {
          dispatch(setDashboardOrgs(res.data.myOrgs));
        } else {
          console.log(res.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllDashboardOrgs();
  }, [dispatch, user]);
}
