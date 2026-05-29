import { FaCode } from "react-icons/fa";
import LatestWorkshops from "../components/workshop/LatestWorkshops"
import useGetAllWorkshops from "../hooks/useGetAllWorkshops";
import TrendingWorkshops from "../components/workshop/TrendingWorkshops";
import UpcomingWorkshops from "../components/workshop/UpcomingWorkshops";

const AllWorkshops = () => {
  useGetAllWorkshops();

  return (
    <section className="min-h-screen bg-[#F2F5FF]">
      <div className="w-full h-80 md:h-105 overflow-hidden relative">
        {/* Banner Image */}
        <img
          src="./workshop-banner.png"
          alt="Workshop Banner"
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
              Discover Workshops
            </h2>
          </div>

          <p className="max-w-4xl text-[#666666] text-base md:text-lg leading-8">
            Workshops are intensive, hands-on learning sessions designed to
            equip participants with practical skills, tools, and knowledge to
            build impactful projects during the hackathon. Led by industry
            experts and experienced mentors, these workshops cover a wide range
            of topics — from Artificial Intelligence and Full-Stack Development
            to UI/UX Design, Blockchain, Cloud Computing, and more. Whether
            you're a complete beginner or a seasoned developer, our workshops
            provide the perfect foundation to learn new technologies, refine
            your ideas, and confidently turn them into working prototypes.
          </p>
        </div>

        {/* IF LOCATION WAS PROVIDED BY USER, THEN SHOW NEARBY LOCATION HACKATHONS FIRST */}
        {/* 
                    NearBy hackathons 
                        otherwise show
                    Enter location to see workshops near you.
                */}

        {/* Latest Workshops */}
        <LatestWorkshops />

        {/* Trending Workshops */}
        <TrendingWorkshops />

        {/* Upcoming Workshops */}
        <UpcomingWorkshops />

      </div>
    </section>
  );
};

export default AllWorkshops;
