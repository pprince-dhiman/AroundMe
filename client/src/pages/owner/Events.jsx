import { useState } from "react";
import { FiBriefcase, FiChevronDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import EventCard from "../../components/owner/card/EventCard";
import Loading from "../../components/Loading";
import { setDashboardOrgId } from "../../features/dashboard/dashboardSlice";
import { useNavigate } from "react-router";

const categories = ["All", "Workshop", "Hackathon", "CulturalEvent"];

export default function Events() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const organizations = useSelector(
    (state) => state.dashboard.dashboardData?.allOrgs,
  );

  const events = useSelector(
    (state) => state.dashboard.dashboardData?.allEvents,
  );

  const { orgId } = useSelector((state) => state.dashboard);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const selectedOrg = organizations?.find((org) => org._id === orgId);

  const orgEvents = events?.filter((event) => event.organization._id === orgId);

  const filteredEvents =
    selectedCategory === "All"
      ? orgEvents
      : orgEvents?.filter((event) => event.category === selectedCategory);

  const handleOrgChange = (e) => {
    dispatch(setDashboardOrgId(e.target.value));

    // Reset category when switching org
    setSelectedCategory("All");
  };

  if (!organizations || !events) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#F2F5FF]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-[#333333]">
            Organization Events
          </h1>

          <p className="mt-1 text-[#666666]">
            Select an organization to view and manage its events.
          </p>

          {/* Organization Select */}
          <div className="relative mt-6 max-w-md">
            <select
              value={orgId || ""}
              onChange={handleOrgChange}
              className=" w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 pr-10 text-[#333333] outline-none transition focus:border-[#054C73] focus:ring-2 focus:ring-[#054C73]/20"
            >
              <option value="">Select Organization</option>

              {organizations.map((org) => (
                <option key={org._id} value={org._id}>
                  {org.name}
                </option>
              ))}
            </select>

            <FiChevronDown
              size={18}
              className=" pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* No Organization Selected */}
        {!orgId ? (
          <div className="mt-6 rounded-2xl bg-white px-6 py-24 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-[#DFE9F4] p-5">
                <FiBriefcase size={40} className="text-[#054C73]" />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-[#333333]">
                Select an Organization
              </h2>

              <p className="mt-3 max-w-md text-[#666666]">
                Choose an organization from the dropdown above to view and
                manage its events.
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Organization Info */}
            <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#333333]">
                  {selectedOrg?.name}
                </h2>

                <p className="text-[#666666]">
                  {orgEvents?.length || 0} Events Found
                </p>
              </div>

              {orgId && (
                <div className="max-lg:text-right">
                  <button
                    onClick={() =>
                      navigate(`/organizer/organizations/${orgId}`)
                    }
                    className="px-5 py-2 rounded bg-[#054C73] text-white cursor-pointer"
                  >
                    + Event
                  </button>
                </div>
              )}

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                      selectedCategory === category
                        ? "bg-[#054C73] text-white"
                        : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Events */}
            <div className="mt-6">
              {filteredEvents?.length > 0 ? (
                <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredEvents.map((event) => (
                    <EventCard key={event._id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl bg-white py-20 text-center shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-700">
                    No Events Found
                  </h3>

                  <p className="mt-2 text-gray-500">
                    No events match the selected category.
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
