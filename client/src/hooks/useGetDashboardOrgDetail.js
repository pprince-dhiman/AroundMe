import { useEffect } from "react";
import axios from "axios";
import { getToken, useUser } from "@clerk/react";
import { ORG_BACKEND_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setDashboardOrgDetails } from "../features/dashboard/dashboardSlice";

export default function useGetDashboardOrgDetail(orgId){
  const dispatch = useDispatch();
  const user = useUser();

  useEffect(() => {
    const fetchOrgDetail = async() => {
      const token = await getToken();

      const res = await axios.get(`${ORG_BACKEND_API}/dashboard/organization/${orgId}`, {
        headers: { Authorization: `Bearer ${token}`}
      });

      if(res.data.success){
        dispatch(setDashboardOrgDetails(res.data.orgDetails));
      }
    }

    fetchOrgDetail();
  }, [user, dispatch, orgId]);
}