import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { FiGlobe, FiMail, FiPhone } from "react-icons/fi";
import useGetOrgById from "../hooks/useGetOrgById";
import Loading from "../components/Loading";
import EventCard from "../components/event/card/EventCard";
import Map from "../components/Map";

const OrgDetail = () => {
  const { orgId } = useParams();

  useGetOrgById(orgId);

  const orgDetails = useSelector(state => state.orgs.orgById)

  const org = orgDetails?.organization;
  const events = orgDetails?.events || [];

  if (!org) return <Loading />;

  const totalEvents =
    org.totalHackathons +
    org.totalWorkshops +
    org.totalCulturalEvents;

  const lat = org.location?.coordinates?.lat;
  const lon = org.location?.coordinates?.lon;

  return (
    <div className="min-h-screen bg-[#F2F5FF]">
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6">

        {/* HERO */}
        <section className="overflow-hidden rounded-3xl bg-white shadow-sm">

          <div className="relative h-56 md:h-72">
            <img
              src={org.banner}
              alt={org.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative px-6 pb-6">

            <div className="-mt-14 mb-4">
              <img
                src={org.logo}
                alt={org.name}
                className="h-28 w-28 rounded-full border-4 border-white object-cover"
              />
            </div>

            <h1 className="text-3xl font-bold text-[#333333]">
              {org.name}
            </h1>

            <p className="mt-2 text-[#666666] capitalize">
              {org.organizationType}
            </p>

            <p className="mt-2 text-[#666666]">
              {org.location.city}, {org.location.state},{" "}
              {org.location.country}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#666666]">
              <span>Founded {org.foundedYear}</span>
              <span>{totalEvents} Events</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-[#333333]">
            About Organization
          </h2>

          <p className="leading-relaxed text-[#666666]">
            {org.description}
          </p>
        </section>

        {/* CONTACT */}
        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold text-[#333333]">
            Contact Information
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <FiMail className="text-[#054C73]" />
              <span className="text-[#666666]">{org.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-[#054C73]" />
              <span className="text-[#666666]">{org.phone}</span>
            </div>

            {org.website && (
              <div className="flex items-center gap-3">
                <FiGlobe className="text-[#054C73]" />

                <a
                  href={org.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#054C73] hover:underline"
                >
                  Visit Website
                </a>
              </div>
            )}
          </div>
        </section>

        {/* EVENTS */}
        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-[#333333]">
            All Events ({events.length})
          </h2>

          {events.length === 0 ? (
            <p className="text-[#666666]">
              No events available.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {events.map((event) => (
                <div
                  key={event._id}
                  className="rounded-2xl border border-[#DFE9F4] p-4"
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* MAP */}
        {lat && lon && (
          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-[#333333]">
              Location
            </h2>

            <Map lat={lat} lon={lon} />
          </section>
        )}
      </div>
    </div>
  );
};

export default OrgDetail;