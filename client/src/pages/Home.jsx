import { getToken } from "@clerk/react"
import { toast } from "react-toastify"
import Hero from "../components/Hero"
import Category from "../components/Category"
import PopularEvents from "../components/PopularEvents"
import CTA from "../components/CTA"
import FeaturedEvents from "../components/FeaturedEvents"
import Reviews from "../components/Reviews"
import LatestEvents from "../components/LatestEvents"
import useGetAllEvents from "../hooks/useGetAllEvents"

const Home = () => {
  const handleClick = async () => {
    try {
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
    catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  }

  return (
    <div>
      <button onClick={handleClick}
        className="border px-4 py-2 m-10 active:scale-95">
        GetToken
      </button>
      {
        useGetAllEvents()
      }
      <Hero />
      <Category />
      <PopularEvents />
      <CTA />
      <FeaturedEvents />
      <Reviews />
      <LatestEvents />
    </div>
  )
}

export default Home