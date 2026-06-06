export default function RegistrationSection({
  event,
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Registration
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        <Info
          label="Current Participants"
          value={event.currentParticipants}
        />

        <Info
          label="Maximum Capacity"
          value={event.maxParticipants}
        />

        <Info
          label="Pricing"
          value={
            event.pricing?.isFree
              ? "Free"
              : `₹${event.pricing?.amount}`
          }
        />
      </div>
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
        {value}
      </p>
    </div>
  );
}