
export default function EventFilters({ eventType, setEventType, modeType, setModeType}) {
  const clearFilters = () => {
    setEventType("");
    setModeType("");
  }

  return (
    <aside className="bg-white border border-[#DFE9F4] rounded p-5 shadow-sm h-fit">
      <h2 className="text-xl font-semibold text-[#054C73] mb-5">Filters</h2>

      <div className="flex items-center justify-around">
        {/* Event Type */}
        <div className="mb-6">
          <h3 className="font-medium text-[#333333] mb-3">Event Type</h3>

          <div className="space-y-3">
            {["Hackathon", "Workshop", "CulturalEvent"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="eventType"
                  value={item}
                  checked={eventType === item}
                  onChange={(e) => setEventType(e.target.value)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Mode Type */}
        <div className="mb-6">
          <h3 className="font-medium text-[#333333] mb-3">Mode</h3>

          <div className="space-y-3">
            {["online", "offline"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="modeType"
                  value={item}
                  checked={modeType === item}
                  onChange={(e) => setModeType(e.target.value)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <button onClick={clearFilters}
      className="w-fit mt-4 border cursor-pointer px-5 py-3 rounded-xl hover:bg-red-600/30 transition">
        Clear Filters
      </button>
    </aside>
  );
}
