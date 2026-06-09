import { FiEdit2, FiTrash2 } from "react-icons/fi";

const OrganizationHero = ({ onEdit, org }) => {
  return (
    <section className="overflow-hidden rounded-3xl bg-white shadow-sm">
      {/* Banner */}
      <div className="relative h-56">
        <img
          src={org.banner}
          alt="banner"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative px-6 pb-6">
        {/* Logo */}

        <div className="-mt-14 mb-4">
          <img
            src={org.logo}
            alt="logo"
            className="h-28 w-28 rounded-full border-4 border-white object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          {/* Left */}
          <div>
            <h1 className="text-3xl font-bold text-[#333333]">{org.name}</h1>

            <p className="mt-1 text-[#666666]">
              {org.location.address}, {org.location.city}, {org.location.state},{" "}
              {org.location.country}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#666666]">
              <span>{org.members.length} Members</span>
              <span>
                {org.totalHackathons +
                  org.totalWorkshops +
                  org.totalCulturalEvents}{" "}
                Events
              </span>
              <span>Founded {org.foundedYear}</span>
            </div>
          </div>

          {/* Actions */}

          <div className="flex gap-3">
            <button
              onClick={onEdit}
              className="flex items-center gap-2 rounded-lg bg-[#054C73] px-4 py-2 text-white"
            >
              <FiEdit2 />
              Edit
            </button>

            <button className="flex items-center gap-2 rounded-lg border border-red-500 px-4 py-2 text-red-500">
              <FiTrash2 />
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationHero;
