import axios from "axios";
import { useEffect } from "react";
import { ORG_BACKEND_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setAllOrgs } from "../features/organization/orgSlice";

export default function useGetAllOrgs() {
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchAllOrgs = async () => {
      try{
        const res = await axios.get(`${ORG_BACKEND_API}`);
        console.log(res.data);
        if(res.data.success){
          dispatch(setAllOrgs(res.data.organizations));
        }
      }
      catch(err){
        console.log("Error in orgs hook: ", err);
      }
    }

    fetchAllOrgs();
  },[dispatch]);
}