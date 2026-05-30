import { useSelector } from "react-redux";
import EventCard from "./card/EventCard";
import Loading from "../Loading";

export default function EventGrid({ eventType, modeType, searchedQry }) {
  const events = useSelector((state) => state.event.AllEvents);

  const filteredEvents = events?.filter((event) => {
    const matchesCategory = !eventType || event.category === eventType;
    const matchesMode = !modeType || event.mode === modeType;
    const matchesName = event.title.toLowerCase().includes(searchedQry.toLowerCase());
  
    return matchesCategory && matchesMode && matchesName;
  });

  return events ? (
    <div>
      <p className="text-right p-5">{filteredEvents.length} Events</p>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
}
