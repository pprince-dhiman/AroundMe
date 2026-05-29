import { useSelector } from "react-redux";
import CulturalEventCard from "./cards/CulturalEventCard";
import Loading from "../Loading";

const UpcomingCulturalEvents = () => {
  const culturalEvents = useSelector((state) => state.culturalEvent.allCulturalEvents);

  // Sort by nearest upcoming date
  const upcomingCulturalEvents = culturalEvents
    ? culturalEvents.filter((culturalEvent) => culturalEvent.status === "upcoming")
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

        {culturalEvents && (
          <button className="px-6 py-2 border border-[#054C73] rounded-md cursor-pointer">
            View All
          </button>
        )}
      </div>

      {/* Upcoming Workshops */}
      {upcomingCulturalEvents ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {upcomingCulturalEvents.length === 0
            ? <span className="text-4xl text-gray-800/70 w-full">NO UPCOMING CULTURAL EVENTS</span>
            : upcomingCulturalEvents
                .slice(0, 3)
                .map((culturalEvent) => (
                  <CulturalEventCard key={culturalEvent._id} culturalEvent={culturalEvent} />
                ))}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default UpcomingCulturalEvents