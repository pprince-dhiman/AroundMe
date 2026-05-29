// components/sections/UpcomingHackathons.jsx

import { useSelector } from "react-redux";
import HackathonCard from "./cards/HackathonCard";
import Loading from "../Loading";

export default function UpcomingHackathons() {
  const hackathons = useSelector((state) => state.hackathon.allHackathons);

  const upcomingHackathons =
    hackathons &&
    hackathons.filter((hackathon) => hackathon.status === "upcoming");

  return (
    <section className="py-16">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
          Upcoming Hackathons
        </h2>

        <p className="max-w-3xl text-[#666666] leading-8 text-base md:text-lg">
          Prepare for exciting upcoming hackathons organized by colleges,
          startups, and tech communities. Explore future coding competitions,
          collaborate with innovators, and get ready to build impactful
          projects.
        </p>
      </div>

      {hackathons ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {upcomingHackathons.length === 0 ? (
            <span className="text-4xl text-gray-800/70 w-full">
              NO UPCOMING HACKATHONS
            </span>
          ) : (
            upcomingHackathons
              .slice(0, 3)
              .map((hackathon) => (
                <HackathonCard hackathon={hackathon} key={hackathon._id} />
              ))
          )}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}
