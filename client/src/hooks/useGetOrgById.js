import { useEffect } from "react";
import axios from "axios";
import { ORG_BACKEND_API } from "../utils/constant";
import { setOrgById } from "../features/organization/orgSlice";
import { useDispatch } from "react-redux";
import { useUser } from "@clerk/react";

export default function useGetOrgById(orgId) {
  const dispatch = useDispatch();
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    const fetchOrgById = async () => {
      try {
        const res = await axios.get(`${ORG_BACKEND_API}/${orgId}`);

        if (res.data.success) {
          dispatch(setOrgById(res.data.orgDetail));
        } else {
          console.log(res.data.message);
        }
      } catch (err) {
        console.log("Error in org by id Hook: ", err);
      }
    };

    fetchOrgById();
  }, [dispatch, orgId, user, isSignedIn]);
}
