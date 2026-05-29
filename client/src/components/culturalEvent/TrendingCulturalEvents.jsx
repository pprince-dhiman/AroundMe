import { useSelector } from "react-redux";
import CulturalEventCard from "./cards/CulturalEventCard";
import Loading from "../Loading";

export default function TrendingCulturalEvents() {
  const culturalEvents = useSelector(
    (state) => state.culturalEvent.allCulturalEvents,
  );

  // trending => no. of people joinded the event.
  const trendingCulturalEvents = culturalEvents
    ? [...culturalEvents].sort((a, b) => b.views - a.views)
    : null;

  return (
    <section className="py-14">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Trending Cultural Events
          </h2>

          <p className="text-[#666666] mt-2">
            Most popular and highly viewed cultural events.
          </p>
        </div>

        {trendingCulturalEvents && (
          <button className="px-6 py-2 border border-[#054C73] rounded-md cursor-pointer">
            View All
          </button>
        )}
      </div>
      {trendingCulturalEvents ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {trendingCulturalEvents.slice(0, 3).map((culturalEvent) => (
            <CulturalEventCard
              key={culturalEvent._id}
              culturalEvent={culturalEvent}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}
