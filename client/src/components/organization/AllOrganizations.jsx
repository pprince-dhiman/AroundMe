import { useState } from "react";
import OrgCard from "./cards/OrganizationCard";
import { useSelector } from "react-redux";
import Loading from "../Loading";

export default function AllOrganizations() {
  const [showAll, setShowAll] = useState(false);

  const organizations = useSelector((state) => state.orgs.allOrgs);

  // First 6 organizations
  const visibleOrganizations = showAll
    ? organizations
    : organizations?.slice(0, 9);

  return (
    <section className="w-full py-12">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Explore Organizations
          </h2>

          <p className="text-[#667085] mt-3 max-w-2xl leading-relaxed">
            Discover colleges, startups, communities, NGOs, and tech
            organizations hosting workshops, hackathons, and cultural events.
          </p>
        </div>

        {/* Optional count */}
        <div className="text-sm text-[#667085] font-medium">
          {organizations?.length} Organizations
        </div>
      </div>

      {/* Scrollable Container */}
      <div className="max-h-[1500px] overflow-y-auto pr-2 custom-scrollbar">
        {/* Grid */}
        {organizations ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {visibleOrganizations.map((organization) => (
              <OrgCard key={organization._id} organization={organization} />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>

      {/* Show More Button */}
      {organizations && organizations.length > 9 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-xl bg-[#054C73] hover:bg-black text-white font-medium transition-all duration-300 cursor-pointer"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
