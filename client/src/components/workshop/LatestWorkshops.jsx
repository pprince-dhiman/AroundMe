import WorkshopCard from "./cards/WorkshopCard";
import Loading from "../Loading";
import { useSelector } from "react-redux";

export default function LatestWorkshops() {
  const workshops = useSelector(state => state.workshop.allWorkshops);

  return (
    <section className="py-16">
      <div className="flex items-center justify-between">
        <div className="mb-10">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Latest Workshops
          </h2>

          {/* Description */}
          <p className="max-w-3xl text-[#666666] leading-8 text-base md:text-lg">
            Explore the newest workshops on web development, AI, design,
            cybersecurity, and emerging technologies. Learn directly from
            industry experts through hands-on sessions and practical real-world
            projects.
          </p>
        </div>

        {workshops && (
          <button className="px-6 py-2 border border-[#054C73] rounded-md cursor-pointer">
            View All
          </button>
        )}
      </div>

      {/* All latest workshops */}
      {workshops ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {workshops.slice(0, 3).map((workshop) => (
            <WorkshopCard workshop={workshop} key={workshop._id} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}
