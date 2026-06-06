export default function InfoSection({ event }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Event Information
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Info label="Category" value={event.category} />
        <Info label="Mode" value={event.mode} />
        <Info label="Status" value={event.status} />
        <Info label="Organizer" value={event.organizer?.name} />
      </div>

      {event.tags?.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 font-medium">
            Tags
          </p>

          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="font-medium">
        {value || "-"}
      </p>
    </div>
  );
}