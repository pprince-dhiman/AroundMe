import {
    FaMapMarkerAlt,
    FaLaptopCode,
    FaArrowRight,
} from "react-icons/fa"

const PopularEventsCard = ({ event }) => {
    return (
        <div
            className="group bg-white border rounded border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.75"
        >

            {/* Poster */}
            <div className="relative overflow-hidden">
                <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

                {/* Event Type */}
                <div className="absolute top-4 left-4">
                    <div className="flex items-center rounded-2xl gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-800">
                        {event.mode === "online" ? (
                            <>
                                <FaLaptopCode className="text-[10px]" />
                                Online
                            </>
                        ) : (
                            <>
                                <FaMapMarkerAlt className="text-[10px]" />
                                Offline
                            </>
                        )}
                    </div>
                </div>

                {/* Explore Button */}
                <button className="absolute bottom-4 right-4 bg-white text-black text-sm font-medium px-4 py-2 flex items-center gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Explore
                    <FaArrowRight className="text-xs" />
                </button>
            </div>

            {/* Content */}
            <div className="p-5">

                <h3 className="text-[17px] font-semibold text-gray-900 leading-snug mb-3 line-clamp-2">
                    {event.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaMapMarkerAlt className="text-xs opacity-70" />
                    <span className="font-medium uppercase tracking-wide text-gray-800">
                        {event.mode==='online' ? "ONLINE" : `${event.venue.city}, ${event.venue.state}`}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PopularEventsCard