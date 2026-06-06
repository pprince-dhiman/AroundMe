import { useState } from "react";
import { useSelector } from "react-redux";
import EventCard from "../../components/owner/card/EventCard";
import Loading from "../../components/Loading";

const categories = ["All", "Workshop", "Hackathon", "CulturalEvent"];

export default function Events() {
  const events = useSelector(
    (state) => state.dashboard.dashboardData?.allEvents,
  );
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events?.filter((event) => event?.category === selectedCategory);

  return (
    <div className="h-full w-full rounded-xl border bg-white p-6">
      {/* Filters */}
      <div className="mb-6 max-md:flex-col flex justify-around items-center">
        <h2 className="text-center my-5 text-3xl font-bold text-gray-700">
          Events Organized
        </h2>

        <div className="flex flex-wrap gap-2 rounded-lg border p-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-md px-4 py-2 text-sm transition ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Cards Section */}
      {events ? (
        <div
          className="overflow-y-auto pr-2 h-[750px] border-t border-gray-300 rounded-xl"
        >
          <div
            className="
            grid
            gap-6
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
          "
          >
            {filteredEvents?.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
