// components/events/LocationSection.jsx

export default function LocationSection({
  event,
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Location
      </h2>

      {event.mode === "online" ? (
        <div>
          <p className="text-sm text-gray-500">
            Meeting Link
          </p>

          <a
            href={event.onlineLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            {event.onlineLink}
          </a>
        </div>
      ) : (
        <div className="space-y-2">
          <p>{event.venue?.address}</p>
          <p>
            {event.venue?.city},{" "}
            {event.venue?.state}
          </p>
          <p>{event.venue?.country}</p>
        </div>
      )}
    </div>
  );
}