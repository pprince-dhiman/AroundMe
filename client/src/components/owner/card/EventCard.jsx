import {
  FaCalendarAlt,
  FaEye,
  FaEllipsisV,
} from "react-icons/fa";
import { Link } from "react-router";

export default function EventCard({ event }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Thumbnail */}
      <div className="p-3">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="h-44 w-full rounded-xl object-cover"
        />
      </div>

      <div className="px-4 pb-4">
        {/* Title + Menu */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-medium text-indigo-600">
              {event.category}
            </span>

            <h3 className="mt-1 line-clamp-2 text-lg font-bold text-gray-900">
              {event.title.length <= 20 ? event.title : `${event.title.slice(0,20)}...`}
            </h3>
          </div>

          <button className="text-gray-500">
            <FaEllipsisV />
          </button>
        </div>

        {/* Status + Mode */}
        <div className="mt-2 flex gap-2">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            {event.status}
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 capitalize">
            {event.mode}
          </span>
        </div>

        {/* End Date */}
        <div className="mt-4 flex items-center gap-2 border-t pt-3 text-sm text-gray-600">
          <FaCalendarAlt />
          <span>Ends:</span>

          <span className="font-medium">
            {new Date(event.endDateTime).toLocaleDateString()}
          </span>
        </div>

        {/* View Button */}
        <Link
          to={`/organizer/events/${event._id}`}
          className="mt-4 flex items-center justify-center rounded-xl border border-gray-300 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          <FaEye className="mr-2" />
          View
        </Link>
      </div>
    </div>
  );
}