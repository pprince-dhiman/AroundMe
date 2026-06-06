export default function OrganizationSection({ event }) {
  const org = event.organization;

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Organization
      </h2>

      <div className="flex items-center gap-4">
        <img
          src={org.logo}
          alt={org.name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold">
            {org.name}
          </h3>

          <p className="text-gray-600">
            {org.email}
          </p>
        </div>
      </div>
    </div>
  );
}