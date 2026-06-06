
export default function WorkshopSection({
  data,
}) {
  if (!data) return null;

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Workshop Details
      </h2>

      <div className="flex gap-4">
        <img
          src={data.instructor.image}
          alt={data.instructor.name}
          className="h-20 w-20 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold">
            {data.instructor.name}
          </h3>

          <p className="text-gray-600">
            {data.instructor.bio}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p>
          <strong>Skill Level:</strong>{" "}
          {data.skillLevel}
        </p>
      </div>

      {data.prerequisites?.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-3 font-semibold">
            Prerequisites
          </h3>

          <ul className="list-disc pl-5">
            {data.prerequisites.map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
      )}

      {data.agenda?.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-3 font-semibold">
            Agenda
          </h3>

          <div className="space-y-3">
            {data.agenda.map(
              (session, index) => (
                <div
                  key={index}
                  className="rounded-lg border p-4"
                >
                  <h4 className="font-medium">
                    {session.title}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {session.startTime} -{" "}
                    {session.endTime}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}