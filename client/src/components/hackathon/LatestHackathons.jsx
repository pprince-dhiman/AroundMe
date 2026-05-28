import { useSelector } from "react-redux";
import HackathonCard from "./cards/HackathonCard";
import Loading from "../Loading";

export default function LatestHackathons() {
    const hackathons = useSelector(state => state.hackathon.allHackathons)

    return (
        <section className="py-16">

            {/* =========================
                SECTION HEADER
            ========================== */}
            <div className="flex items-center justify-between">
                <div className="mb-10">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                        Latest Hackathons
                    </h2>

                    {/* Description */}
                    <p className="max-w-3xl text-[#666666] leading-8 text-base md:text-lg">
                        Discover newly announced hackathons from colleges,
                        startups, and tech communities. Participate in exciting
                        coding challenges, collaborate with talented innovators,
                        and build impactful projects.
                    </p>
                </div>

                { hackathons && <button className="px-6 py-2 border border-[#054C73] rounded-md cursor-pointer">
                    View All
                </button> }
            </div>

            {/* All latest hackathons */}
            {
                hackathons ?
                    <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 " >
                        {
                            hackathons.slice(0, 3).map((hackathon) => <HackathonCard hackathon={hackathon} key={hackathon._id} />)
                        }
                    </div> :
                    <Loading />
            }

        </section>
    );
}