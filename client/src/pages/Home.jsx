import axios from "axios"
import { USER_BACKEND_API } from "../utils/constant"
import { getToken } from "@clerk/react"
import { toast } from "react-toastify"

const Home = () => {
  const handleClick = async() => {
    try{
      const token = await getToken();
      console.log(token);
      // const res = await axios.get(`${USER_BACKEND_API}/registered-events`, {
      //   headers: { Authorization: `Bearer ${token}`}
      // });

      // if(res.data.success){
      //   console.log(res.data.registeredEvents);
      // }
      // else{
      //   toast.error(res.data.message);
      // }
    }
    catch(err){
      console.log(err);
      toast.error(err.message);
    }
  }

  return (
    <div>
      <button onClick={handleClick}
      className="border px-4 py-2 m-10 active:scale-95">
        get user data
      </button>
    </div>
  )
}

export default Home