// components/events/EventHeader.jsx

// NEW:
// Displays thumbnail and high-level metrics.

import {
  FaUsers,
  FaEye,
  FaBookmark,
} from "react-icons/fa";

export default function EventHeader({ event }) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <div className="grid lg:grid-cols-[350px_1fr]">
        
        {/* Thumbnail */}
        <img
          src={event.thumbnail}
          alt={event.title}
          className="h-72 w-full object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
              {event.category}
            </span>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
              {event.mode}
            </span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
              {event.status}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold">
            {event.title}
          </h1>

          <p className="mt-3 text-gray-600">
            {event.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <FaUsers />
              <span>
                {event.currentParticipants}/
                {event.maxParticipants}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FaEye />
              <span>{event.views}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaBookmark />
              <span>{event.bookmarks}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}