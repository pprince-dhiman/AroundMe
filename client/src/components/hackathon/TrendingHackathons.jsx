import { useSelector } from "react-redux";
import HackathonCard from "./cards/HackathonCard";
import Loading from "../Loading";

export default function TrendingHackathons() {

    const hackathons = useSelector((state) => state.hackathon.allHackathons);

    // trending => based on views
    const trendingHackathons = hackathons && [...hackathons].sort((a, b) => b.views - a.views);

    return (
        <section className="py-16">
            <div className="flex items-center justify-between">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                        Trending Hackathons
                    </h2>

                    <p className="max-w-3xl text-[#666666] leading-8 text-base md:text-lg">
                        Explore the most popular hackathons currently gaining
                        attention from developers, students, and innovators across
                        the community. Join exciting competitions, build impactful
                        projects, and compete with talented teams.
                    </p>
                </div>
                <button className="px-6 py-2 border border-[#054C73] rounded-md cursor-pointer">
                    View All
                </button>
            </div>

            {
                hackathons ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                        {
                            trendingHackathons.slice(0, 3).map((hackathon) => (
                                <HackathonCard
                                    hackathon={hackathon}
                                    key={hackathon._id}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <Loading />
                )
            }
        </section>
    );
}