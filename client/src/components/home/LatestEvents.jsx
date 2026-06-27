import LatestEventsCard from "./cards/LatestEventsCard";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import { useNavigate } from "react-router";

export default function LatestEvents() {
  const events = useSelector((state) => state.event.AllEvents);
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 bg-[#F2F5FF]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-[#333333]">Latest Events</h2>

          <button
            onClick={() => {
              navigate("/events");
              scrollTo(0, 0);
            }}
            className="font-medium hover:underline border rounded px-3 py-1 hover:bg-gray-700 hover:text-white"
          >
            View All
          </button>
        </div>

        {/* Events Grid */}
        {events ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.slice(0, 4).map((event) => (
              <LatestEventsCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
}
