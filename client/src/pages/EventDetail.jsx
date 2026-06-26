import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaUsers,
  FaStar,
  FaClock,
  FaLocationArrow,
  FaTag,
} from "react-icons/fa";
import { useParams } from "react-router";
import useGetEventById from "../hooks/useGetEventById";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import CulturalEventDetail from "../components/event/CulturalEventDetail";
import EventWorkshopDetail from "../components/event/EventWorkshopDetail";
import EventHackathonDetail from "../components/event/EventHackathonDetail";
import {
  calculateAmount,
  getEndDateTime,
  getRegistrationDeadline,
  getStartDateTime,
  getTotalEvents,
} from "../utils/constant";
import Map from "../components/Map";

const EventDetail = () => {
  const params = useParams();
  const { eventId } = params;

  useGetEventById(eventId);

  const event = useSelector((state) => state.event.event);

  const coordinates = event?.venue?.coordinates;
  const lat = coordinates?.lat;
  const lon = coordinates?.lon;

  const category = event?.category;

  return event ? (
    <div className="bg-white min-h-screen">
      {/* ================= HERO IMAGE ================= */}
      <section className="relative max-w-7xl mx-auto px-4 pt-8">
        <div className="overflow-hidden rounded-2xl h-[500px]">
          <img
            src={event?.thumbnail}
            alt={event?.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-10 left-10 flex items-center gap-5">
          <div className=" bg-yellow-500/70 px-4 py-2 rounded-xl font-bold">
            {event.category.toUpperCase()}
          </div>
          <div className=" bg-yellow-500/70 px-4 py-2 rounded-xl font-bold">
            {event.mode.toUpperCase()}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-[1fr_350px] gap-10">
          {/* LEFT CONTENT */}
          <div>
            {/* Title */}
            <h1 className="text-4xl font-bold text-[#333333] mt-4">
              {event?.title}
            </h1>

            {/* Organizer */}
            <div className="flex items-center gap-4 mt-8 bg-[#054C73]/5 px-5 py-2 rounded-xl">
              <img
                src={event?.organization?.logo}
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />

              <div className="">
                <h3 className="font-semibold text-lg">
                  {event?.organization?.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {event?.organization?.followers} followers •{" "}
                  {getTotalEvents(event.organization)} events
                </p>
              </div>

              <button className="ml-auto border px-5 py-2 rounded">
                Follow
              </button>
            </div>

            {/* Quick Details */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>
                  {event?.mode === "online"
                    ? "Online Event"
                    : `${event?.venue?.address}, ${event?.venue?.city}, ${event?.venue?.state}`}
                </span>
              </div>

              {event && (
                <div className="flex items-center gap-3">
                  <FaCalendarAlt />
                  <span>{getStartDateTime(event)}</span>
                </div>
              )}
            </div>

            {/* ================= OVERVIEW ================= */}
            <section className="mt-14">
              <h2 className="text-2xl font-bold text-[#333333] mb-5">
                About this event
              </h2>

              <p className="text-[#555] text-[15px] leading-[1.85] m-0">
                {event?.description}
              </p>
            </section>

            {/* ================= GOOD TO KNOW ================= */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Good To Know</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-10 gap-4">
                <div className="border rounded-xl py-3 px-5 lg:col-span-3">
                  <div className="flex items-center gap-1 mb-2">
                    <FaClock />
                    <h4 className="font-semibold">Duration</h4>
                  </div>
                  <p>{getStartDateTime(event)}</p>
                  <p className="pl-5">to</p>
                  <p>{getEndDateTime(event)}</p>
                </div>

                <div className="border rounded-xl py-3 px-5 lg:col-span-2">
                  <div className="flex items-center gap-1 mb-2">
                    <FaGlobe />
                    <h4 className="font-semibold">Mode</h4>
                  </div>
                  <p>{event?.mode.toUpperCase()}</p>
                </div>

                <div className="border rounded-xl py-3 px-5 lg:col-span-3">
                  <div className="flex items-center gap-1 mb-2">
                    <FaUsers />
                    <h4 className="font-semibold">Registration Deadline</h4>
                  </div>
                  <p>{getRegistrationDeadline(event.registrationDeadline)}</p>
                </div>

                <div className="border rounded-xl py-3 px-5 lg:col-span-2">
                  <div className="flex items-center gap-1 mb-2">
                    <FaStar />
                    <h4 className="font-semibold">Event</h4>
                  </div>
                  <p>{event?.category}</p>
                </div>
              </div>
            </section>

            {/* ================= HACKATHON ================= */}
            {category === "Hackathon" && (
              <EventHackathonDetail hackathon={event.specificEvent} />
            )}

            {/* ================= WORKSHOP ================= */}
            {category === "Workshop" && (
              <EventWorkshopDetail workshop={event.specificEvent} />
            )}

            {/* ================= CULTURAL EVENT ================= */}
            {category === "CulturalEvent" && (
              <CulturalEventDetail culturalEvent={event.specificEvent} />
            )}

            {/* ================= LOCATION ================= */}
            <section className="mt-16">
              <div className="flex items-center gap-2 mb-3">
                <FaLocationArrow />
                <h2 className="text-2xl font-bold">Location</h2>
              </div>

              <div className="font-bold">
                {event.mode === "online"
                  ? "ONLINE EVENT"
                  : `${event.venue.address}, ${event.venue.city}, ${event.venue.state}, ${event.venue.country}`}
              </div>

              {
                event.mode==='offline' ? <Map lat={lat} lon={lon} /> : ""
              }
            </section>

            {/* ================= ORGANIZER ================= */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-5">Organized By</h2>

              <div className="bg-[#F2F5FF] rounded-2xl p-6 flex items-center gap-6">
                <img
                  src={event.organization.logo}
                  alt=""
                  className="w-20 h-20 rounded-full"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {event.organization.name}
                  </h3>

                  <p className="text-gray-500">
                    {getTotalEvents(event.organization)} events
                  </p>
                </div>

                <div className="ml-auto flex gap-3">
                  <button className="border px-5 py-2 rounded-lg">
                    Contact
                  </button>

                  <button className="bg-[#054C73] text-white px-5 py-2 rounded-lg">
                    Follow
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* ================= STICKY TICKET CARD ================= */}
          <div>
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              {/* Price Section */}
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    Registration Fee
                  </span>

                  {event.pricing.discount > 0 && (
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {event.pricing.discount}% OFF
                    </span>
                  )}
                </div>

                <div className="mt-3 flex items-end gap-3">
                  <h3 className="text-4xl font-bold text-[#054C73]">
                    {event.pricing.isFree
                      ? "FREE"
                      : `₹ ${calculateAmount(event.pricing)}`}
                  </h3>

                  {event.pricing.discount > 0 && (
                    <span className="text-lg text-gray-400 line-through">
                      ₹{event.pricing.amount}
                    </span>
                  )}
                </div>

                {event.pricing.discount > 0 && (
                  <div className="mt-2 flex items-center gap-2 text-green-600 text-sm font-medium">
                    <FaTag />
                    Save ₹
                    {event.pricing.amount - calculateAmount(event.pricing)}
                  </div>
                )}
              </div>

              {/* Event Info */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-red-500/70 text-sm font-semibold">
                    Registration Deadline
                  </p>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaCalendarAlt className="text-red-500/70" />
                    <span>
                      {getRegistrationDeadline(event.registrationDeadline)}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-[#054C73] hover:bg-[#043a58] transition-all duration-300 text-white py-3.5 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg">
                  Register Now
                </button>

                <p className="text-center text-xs text-gray-500">
                  Secure booking • Instant confirmation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <Loading />
  );
};

export default EventDetail;
