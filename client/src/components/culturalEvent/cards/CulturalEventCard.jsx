// CulturalEventCard.jsx

import {
  FaCalendarAlt,
  FaGlobe,
  FaMapMarkerAlt,
  FaRupeeSign,
} from "react-icons/fa";
import {
  calculateAmount,
  getRegistrationDeadline,
} from "../../../utils/constant";

export default function CulturalEventCard({ culturalEvent }) {
  const firstPerformer =
    culturalEvent.specificEvent.performers.length > 0
      ? `${culturalEvent.specificEvent.performers[0].name}, ${culturalEvent.specificEvent.performers[0].role}`
      : `-NA-`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#DFE9F4] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Event Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={culturalEvent.thumbnail}
          alt={culturalEvent.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Free / Paid Badge */}
        <div className="absolute top-4 right-4 bg-yellow-700/70 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
          {culturalEvent.pricing.isFree ? (
            "Free"
          ) : (
            <div className="flex items-center font-medium">
              <FaRupeeSign size={12} className="font-medium"/>
              <span>
                {calculateAmount({
                  amount: culturalEvent.pricing.amount,
                  discount: culturalEvent.pricing.discount,
                })}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        {/* Title */}
        <div>
          <h2 className="text-xl font-bold text-[#333333] line-clamp-1">
            {culturalEvent.title}
          </h2>

          <p className="text-[#666666] text-sm mt-2 line-clamp-2">
            {culturalEvent.description}
          </p>
        </div>

        {/* Event Details */}
        <div className="flex flex-col gap-3 text-sm text-[#555555]">
          {/* Registration deadline */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1 text-gray-600">
              <FaCalendarAlt className="text-[#054C73]" />
              <span>Reg. Deadline</span>
            </div>
            <span>
              {getRegistrationDeadline(culturalEvent.registrationDeadline)}
            </span>
          </div>

          {/* Mode */}
          <div className="flex items-center gap-3">
            {culturalEvent.mode === "online" ? (
              <FaGlobe className="text-[#054C73]" />
            ) : (
              <FaMapMarkerAlt className="text-[#054C73]" />
            )}

            <span className="capitalize">{culturalEvent.mode} Event</span>
          </div>

          {/* Performer */}
          <div className="text-black font-medium">
            <span className="text-gray-600 text-sm">Featuring</span>{" "}
            {firstPerformer}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[#DFE9F4]">
          <span className="text-sm text-[#666666]">
            {culturalEvent.currentParticipants} Joined
          </span>
        </div>
      </div>
    </div>
  );
}
