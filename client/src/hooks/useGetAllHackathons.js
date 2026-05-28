import { useEffect } from "react"
import axios from "axios"
import { EVENT_BACKEND_API } from "../utils/constant"
import { useDispatch } from "react-redux"
import { setAllHackathons } from "../features/hackathon/hackathonSlice"

const useGetAllHackathons = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllHackathons = async() => {
            try{
                const res = await axios.get(`${EVENT_BACKEND_API}/hackathons`);
                console.log(res)

                if(res.data.success){
                    dispatch(setAllHackathons(res.data.allHackathons));
                }
                else{
                    console.log(res.data.message);
                }
            }
            catch(err){
                console.log("Error in Hackathons hook: ", err);
            }
        }
        fetchAllHackathons();
    }, [dispatch]);
}

export default useGetAllHackathons;