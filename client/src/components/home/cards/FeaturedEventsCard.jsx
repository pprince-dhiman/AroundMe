import {
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaUsers,
    FaTag,
} from "react-icons/fa";
import { calculateAmount, getStartDateTime } from "../../../utils/constant.js";

const FeaturedEventsCard = ({ event }) => {
    const { startDate } = getStartDateTime({ startDateTime: event.startDateTime });

    return (
        <div
            className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 group"
        >
            {/* IMAGE */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* CATEGORY */}
                <div className="absolute top-4 left-4">
                    <span className="bg-black/80 text-white text-xs px-3 py-1 rounded-full">
                        {event.category}
                    </span>
                </div>

                {/* PRICE */}
                <div className="absolute top-4 right-4">
                    {event.pricing.isFree ? (
                        <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            Free
                        </span>
                    ) : (
                        <span className="bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow">
                            ₹{calculateAmount({ amount: event.pricing.amount, discount: event.pricing.discount })}
                        </span>
                    )}
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-5 space-y-4 group">

                {/* TITLE */}
                <div>
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-1">
                        {event.title}
                    </h3>

                    {/* <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                        {event.description}
                    </p> */}
                </div>

                {/* INFO */}
                <div className="space-y-3 text-sm text-gray-600 group-hover:text-black">

                    <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-gray-400 group-hover:text-[#054C73]" />
                        <span>
                            {startDate}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-gray-400 group-hover:text-[#054C73]" />
                        <span>
                            {event.mode === 'online' ? 'ONLINE' : `${event.venue?.city}, ${event.venue?.state}`}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaUsers className="text-gray-400 group-hover:text-[#054C73]" />
                        <span>
                            {event.currentParticipants}/
                            {event.maxParticipants} Joined
                        </span>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-yellow-900">
                        <FaTag />
                        <span>{event.mode}</span>
                    </div>

                    <button className="text-sm font-semibold text-black hover:underline">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedEventsCard;