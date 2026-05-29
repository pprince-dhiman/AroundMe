import { useSelector } from "react-redux";
import WorkshopCard from "./cards/WorkshopCard";
import Loading from "../Loading";

export default function UpcomingWorkshops() {
  const workshops = useSelector((state) => state.workshop.allWorkshops);

  // Sort by nearest upcoming date
  const upcomingWorkshops = workshops
    ? workshops.filter((workshop) => workshop.status === "upcoming")
    : null;

  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Upcoming Workshops
          </h2>

          {/* Description */}
          <p className="max-w-3xl text-[#666666] leading-8 text-base md:text-lg">
            Stay updated with upcoming workshops and reserve your spot early to
            learn new technologies, tools, and industry skills from experienced
            mentors.
          </p>
        </div>

        {workshops && (
          <button className="px-6 py-2 border border-[#054C73] rounded-md cursor-pointer">
            View All
          </button>
        )}
      </div>

      {/* Upcoming Workshops */}
      {upcomingWorkshops ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {upcomingWorkshops.length === 0
            ? <span className="text-4xl text-gray-800/70 w-full">NO UPCOMING WORKSHOPS</span>
            : upcomingWorkshops
                .slice(0, 3)
                .map((workshop) => (
                  <WorkshopCard key={workshop._id} workshop={workshop} />
                ))}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}
