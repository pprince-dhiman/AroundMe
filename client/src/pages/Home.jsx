import Hero from "../components/home/Hero"
import Category from "../components/home/Category"
import PopularEvents from "../components/home/PopularEvents"
import CTA from "../components/home/CTA"
import FeaturedEvents from "../components/home/FeaturedEvents"
import Reviews from "../components/home/Reviews"
import LatestEvents from "../components/home/LatestEvents"
import useGetAllEvents from "../hooks/useGetAllEvents"

const Home = () => {

  return (
    <div>
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