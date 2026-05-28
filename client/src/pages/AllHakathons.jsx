// HackathonsPage.jsx

import {
    FaCode,
    FaMapMarkerAlt,
} from "react-icons/fa";
import LatestHackathons from "../components/hackathon/LatestHackathons";
import useGetAllHackathons from "../hooks/useGetAllHackathons";
import TrendingHackathons from "../components/hackathon/TrendingHackathons";
import UpcomingHackathons from "../components/hackathon/UpcomingHackathons";

export default function HackathonsPage() {
    useGetAllHackathons();

    return (
        <section className="min-h-screen bg-[#F2F5FF]">
            <div className="w-full h-80 md:h-105 overflow-hidden relative">
                {/* Banner Image */}
                <img
                    src="./hackathon-banner.png"
                    alt="Hackathon Banner"
                    className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* INTRO SECTION  */}
            <div className="max-w-7xl mx-auto px-6 py-14">

                {/* Heading */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <FaCode className="text-[#054C73] text-3xl" />

                        <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
                            Discover Hackathons
                        </h2>
                    </div>

                    <p className="max-w-4xl text-[#666666] text-base md:text-lg leading-8">
                        Hackathons are collaborative coding events where
                        developers, designers, and innovators come together to
                        solve real-world problems within a limited time.
                        Participate in AI challenges, web development contests,
                        open-source collaborations, startup ideation events, and
                        more. Whether you are a beginner or an experienced
                        developer, hackathons provide an excellent opportunity
                        to learn, network, and showcase your skills.
                    </p>
                </div>

                {/* SEARCH BAR */}
                <div className="max-w-4xl mx-auto mt-12">

                    <div className="bg-[#DFE9F4] border rounded border-[#d0dbe5] p-4 shadow-2xl">

                        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_auto] gap-4">

                            {/* Location Input */}
                            <div className="flex items-center gap-3 bg-white border border-[#cdd9e3] px-4 py-4 rounded">

                                <FaMapMarkerAlt className="text-[#054C73] text-sm" />

                                <input
                                    type="text"
                                    placeholder="Find by location"
                                    className="w-full bg-transparent outline-none text-[#333333] placeholder:text-[#777]"
                                />
                            </div>

                            {/* Button */}
                            <button className="bg-[#054C73] hover:bg-[#043954] transition-colors duration-300 text-white px-8 py-4 font-medium tracking-wide rounded">

                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* IF LOCATION WAS PROVIDED BY USER, THEN SHOW NEARBY LOCATION HACKATHONS FIRST */}
                {/* 
                    NearBy hackathons 
                        otherwise show
                    Enter location to see hackathons near you.
                */}

                {/* Latest Hackathons */}
                <LatestHackathons />

                {/* Trending Hackathons */}
                <TrendingHackathons />

                {/* Upcoming Hackathons */}
                <UpcomingHackathons />

            </div>
        </section>
    );
}