import { useState } from "react";
import { useNavigate } from "react-router";
import EmptyState from "../../EmptyState";
import EventCard from "../card/EventCard";

const OrganizationEvents = ({ events, org }) => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#333333]">
          Events ({events?.length})
        </h2>

        <div className="relative">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="rounded-lg bg-[#054C73] px-4 py-2 text-white"
          >
            + Create Event
          </button>

          {showMenu && (
            <div className="absolute right-0 z-10 mt-2 w-48 overflow-hidden rounded-lg border bg-white shadow-lg">
              <button
                onClick={() => navigate(`/organizer/organizations/${org._id}/event/hackathon/new`)}
                className="block w-full px-4 py-3 text-left hover:bg-gray-100"
              >
                Hackathon
              </button>

              <button
                onClick={() => navigate(`/organizer/organizations/${org._id}/event/workshop/new`)}
                className="block w-full px-4 py-3 text-left hover:bg-gray-100"
              >
                Workshop
              </button>

              <button
                onClick={() => navigate(`/organizer/organizations/${org._id}/event/cultural-event/new`)}
                className="block w-full px-4 py-3 text-left hover:bg-gray-100"
              >
                Cultural Event
              </button>
            </div>
          )}
        </div>
      </div>

      {events.length === 0 ? (
        <EmptyState text="No event created yet..." />
      ) : (
        <div className="grid max-h-[700px] grid-cols-1 gap-4 overflow-y-auto md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <div
              key={event._id}
              className="rounded-2xl border border-[#DFE9F4] p-4"
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrganizationEvents;