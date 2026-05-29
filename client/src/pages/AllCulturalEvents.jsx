import { FaCode } from "react-icons/fa";
import useGetAllCulturalEvents from "../hooks/useGetAllCulturalEvents";
import LatestCulturalEvents from "../components/culturalEvent/LatestCulturalEvents";
import TrendingCulturalEvents from "../components/culturalEvent/TrendingCulturalEvents";
import UpcomingCulturalEvents from "../components/culturalEvent/UpcomingCulturalEvents";

const AllCulturalEvents = () => {
  useGetAllCulturalEvents();
  
  return (
    <section className="min-h-screen bg-[#F2F5FF]">
      <div className="w-full h-80 md:h-105 overflow-hidden relative">
        {/* Banner Image */}
        <img
          src="./cutural-banner.png"
          alt="Cultural Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* INTRO SECTION  */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <FaCode className="text-[#054C73] text-3xl" />

            <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
              Discover Cutural Events
            </h2>
          </div>

          <p className="max-w-4xl text-[#666666] text-base md:text-lg leading-8">
            Description about cultural events
          </p>
        </div>


        {/* IF LOCATION WAS PROVIDED BY USER, THEN SHOW NEARBY LOCATION HACKATHONS FIRST */}
        {/* 
                    NearBy hackathons 
                        otherwise show
                    Enter location to see Cultural Events near you.
                */}

        {/* Latest Cultural Events */}
        <LatestCulturalEvents />

        {/* Trending Cultural Events */}
        <TrendingCulturalEvents />

        {/* Upcoming Cultural Events */}
        <UpcomingCulturalEvents />

      </div>
    </section>
  )
}

export default AllCulturalEvents;