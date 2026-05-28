import { getToken } from "@clerk/react"
import { toast } from "react-toastify"
import Hero from "../components/home/Hero"
import Category from "../components/home/Category"
import PopularEvents from "../components/home/PopularEvents"
import CTA from "../components/home/CTA"
import FeaturedEvents from "../components/home/FeaturedEvents"
import Reviews from "../components/home/Reviews"
import LatestEvents from "../components/home/LatestEvents"
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