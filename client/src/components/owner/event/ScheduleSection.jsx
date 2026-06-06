export default function ScheduleSection({ event }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Schedule
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        <DateItem
          label="Start Date"
          value={event.startDateTime}
        />

        <DateItem
          label="End Date"
          value={event.endDateTime}
        />

        <DateItem
          label="Registration Deadline"
          value={event.registrationDeadline}
        />
      </div>
    </div>
  );
}

function DateItem({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="font-medium">
        {new Date(value).toLocaleString()}
      </p>
    </div>
  );
}