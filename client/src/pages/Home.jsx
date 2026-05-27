import Hero from "../components/Hero"
import Category from "../components/Category"
import PopularEvents from "../components/PopularEvents"
import CTA from "../components/CTA"
import FeaturedEvents from "../components/FeaturedEvents"
import Reviews from "../components/Reviews"
import LatestEvents from "../components/LatestEvents"

const Home = () => {
  return (
    <div>
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