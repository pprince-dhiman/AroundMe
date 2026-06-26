import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import EventHeader from "../../components/owner/event/EventHeader";
import InfoSection from "../../components/owner/InfoSection";
import ScheduleSection from "../../components/owner/event/ScheduleSection";
import RegistrationSection from "../../components/owner/event/RegistrationSection";
import LocationSection from "../../components/owner/event/LocationSection";
import OrganizationSection from "../../components/owner/event/OrganizationSection";
import EventActions from "../../components/owner/event/EventActions";
import { useParams } from "react-router";
import useGetDashboardEvent from "../../hooks/useGetDashboardEvent";
import FAQSection from "../../components/owner/event/FAQSection";
import HackathonSection from "../../components/owner/event/HackathonSection";
import WorkshopSection from "../../components/owner/event/WorkshopSection";
import CulturalEventSection from "../../components/owner/event/CulturalEventSection";
import UpdateEvent from "../../components/owner/event/UpdateEvent";
import { useState } from "react";
import AdminMap from "../../components/owner/AdminMap";

export default function ViewEvent() {
  const params = useParams();
  const { eventId } = params;

  useGetDashboardEvent(eventId);

  const event = useSelector((state) => state.dashboard.eventDetail);

  const coordinates = event?.venue?.coordinates;
  const lat = coordinates?.lat;
  const lon = coordinates?.lon;

  console.log("coordinates: ", lat, lon);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  if (!event) {
    return <Loading />;
  }

  return (
    <div className="mx-auto max-w-7xl p-6">
      <EventHeader event={event} />

      <div className="my-6 grid gap-6 lg:grid-cols-[1fr_280px]">
        {/* Main Content */}
        <div className="space-y-6">
          <InfoSection event={event} />
          <ScheduleSection event={event} />
          <RegistrationSection event={event} />
          <LocationSection event={event} />
          <OrganizationSection event={event} />

          <FAQSection faqs={event.FAQs} />

          {event.category === "Hackathon" && (
            <HackathonSection data={event.specificEvent} />
          )}

          {event.category === "Workshop" && (
            <WorkshopSection data={event.specificEvent} />
          )}

          {event.category === "CulturalEvent" && (
            <CulturalEventSection data={event.specificEvent} />
          )}
        </div>

        {/* Sticky Sidebar */}
        <EventActions onUpdate={() => setIsUpdateModalOpen(true)} />

        <UpdateEvent
          isOpen={isUpdateModalOpen}
          onClose={() => setIsUpdateModalOpen(false)}
          event={event}
        />
      </div>

      {/* Event location map */}
      <AdminMap lat={lat} lon={lon} />
    </div>
  );
}
