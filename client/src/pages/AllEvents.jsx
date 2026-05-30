import { useState } from "react";
import EventFilters from "../components/event/EventFilter";
import EventGrid from "../components/event/EventGrid.jsx";
import EventSearch from "../components/event/EventSearch";
import useGetAllEvents from "../hooks/useGetAllEvents.js";

export default function AllEvents() {
  useGetAllEvents();

  const [eventType, setEventType] = useState("");
  const [modeType, setModeType] = useState("");
  const [searchedQry, setSearchedQry] = useState("");

  return (
    <section className="bg-[#F2F5FF] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          All Events
        </h1>

        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-2 gap-10">
            {/* Sidebar */}
            <EventFilters
              eventType={eventType}
              setEventType={setEventType}
              modeType={modeType}
              setModeType={setModeType}
            />

            {/* search bar for events */}
            <EventSearch
              searchedQry={searchedQry}
              setSearchedQry={setSearchedQry}
            />

          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="bg-white border border-[#DFE9F4] rounded p-6 shadow-sm h-[900px] overflow-y-auto">
              {/* all events */}
              <EventGrid eventType={eventType} modeType={modeType} searchedQry={searchedQry}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
