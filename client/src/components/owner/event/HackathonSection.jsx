
export default function HackathonSection({ data }) {
  if (!data) return null;

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Hackathon Details
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        
        <InfoCard
          title="Team Size"
          value={`${data.teamSize.min} - ${data.teamSize.max}`}
        />

        <InfoCard
          title="Submission Deadline"
          value={new Date(
            data.submissionDeadline
          ).toLocaleString()}
        />
      </div>

      <Section
        title="Tracks"
        items={data.tracks}
      />

      <Section
        title="Problem Statements"
        items={data.problemStatements}
      />

      <Section
        title="Judging Criteria"
        items={data.judgingCriteria}
      />

      <Section
        title="Rules"
        items={data.rules}
      />

      <PeopleSection
        title="Mentors"
        people={data.mentors}
      />

      <PeopleSection
        title="Judges"
        people={data.judges}
      />

      <div className="mt-6">
        <h3 className="mb-3 font-semibold">
          Prizes
        </h3>

        <div className="grid gap-3 md:grid-cols-3">
          {data.prizes.map((prize, idx) => (
            <div
              key={idx}
              className="rounded-lg border p-4"
            >
              <h4 className="font-semibold">
                {prize.position}
              </h4>

              <p>{prize.reward}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="rounded-lg border p-4">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="font-medium">
        {value}
      </p>
    </div>
  );
}

function Section({ title, items }) {
  if (!items?.length) return null;

  return (
    <div className="mt-6">
      <h3 className="mb-3 font-semibold">
        {title}
      </h3>

      <ul className="list-disc space-y-2 pl-5">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function PeopleSection({
  title,
  people,
}) {
  if (!people?.length) return null;

  return (
    <div className="mt-6">
      <h3 className="mb-3 font-semibold">
        {title}
      </h3>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {people.map((person, index) => (
          <div
            key={index}
            className="rounded-lg border p-4"
          >
            <img
              src={person.image}
              alt={person.name}
              className="mb-3 h-16 w-16 rounded-full object-cover"
            />

            <p className="font-medium">
              {person.name}
            </p>

            <p className="text-sm text-gray-500">
              {person.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}