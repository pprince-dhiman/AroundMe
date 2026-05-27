import { FaArrowRight } from "react-icons/fa";

// ============================================
// LatestEventsCard.jsx
// ============================================

export default function LatestEventsCard({ event }) {
    return (
        <div
            className="
                bg-[#eff4f9]
                rounded-md
                overflow-hidden
                flex
                flex-col
                h-105
                transition-all
                duration-300
                shadow-sm
                hover:-translate-y-2
                hover:shadow-md
            "
        >
            <div className="h-[40%] w-full overflow-hidden">

                <img
                    src={event.image}
                    alt={event.title}
                    className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-110
                    "
                />
            </div>

            {/* ============================================ */}
            {/* CONTENT SECTION (60%) */}
            {/* ============================================ */}
            <div
                className="
                    h-[60%]
                    p-6
                    flex
                    flex-col
                    justify-between
                "
            >

                {/* Text Content */}
                <div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#333333] mb-4 line-clamp-2">
                        {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#666666] text-sm leading-7 line-clamp-5">
                        {event.description}
                    </p>
                </div>

                {/* Read More */}
                <div className="flex justify-end mt-6">

                    <button
                        className="
                            text-[#054C73]
                            font-semibold
                            text-sm
                            hover:underline
                            flex items-center gap-1
                        "
                    >
                        Read More <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}