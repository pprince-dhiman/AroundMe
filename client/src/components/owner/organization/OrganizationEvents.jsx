import EventCard from "../card/EventCard";

const OrganizationEvents = ({ events }) => {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#333333]">
          Events ({events?.length})
        </h2>

        <button className="rounded-lg bg-[#054C73] px-4 py-2 text-white">
          + Create Event
        </button>
      </div>

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
    </section>
  );
};

export default OrganizationEvents;
