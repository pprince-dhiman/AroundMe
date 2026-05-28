import {
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaUsers,
} from "react-icons/fa";
import { getRegistrationDeadline } from "../../../utils/constant";

export default function HackathonCard({ hackathon }) {

    return (
        <div
            className=" group bg-white rounded-2xl overflow-hidden border border-[#DFE9F4] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full "
        >

            {/* =====================================
                THUMBNAIL
            ====================================== */}
            <div className="relative overflow-hidden h-52">

                {/* Image */}
                <img
                    src={hackathon.thumbnail}
                    alt={hackathon.title}
                    className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-500
                    "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Mode Badge */}
                <div className="absolute top-4 right-4">
                    <span className=" bg-yellow-700/70 text-white text-xs font-semibold px-3 py-1 rounded-full capitalize shadow ">
                        {hackathon.mode}
                    </span>
                </div>
            </div>

            {/* =====================================
                CONTENT
            ====================================== */}
            <div className="flex flex-col grow p-6">

                {/* Title */}
                <h2
                    className="
                        text-xl
                        font-bold
                        text-[#333333]
                        line-clamp-2
                        mb-3
                    "
                >
                    {hackathon.title}
                </h2>
                <hr className="mb-3" />

                {/* =====================================
                    DETAILS
                ====================================== */}
                {/* Registration Deadline */}
                <div className="flex items-center gap-3 text-sm mb-3">
                    <FaCalendarAlt className="text-[#054C73]" />

                    <span className="text-[#666666]">
                        Registration Ends:
                    </span>

                    <span className="font-medium text-[#333333]">
                        {getRegistrationDeadline(hackathon.registrationDeadline)}
                    </span>
                </div>

                <div className="flex items-end justify-between w-full">
                    <div className="space-y-3 ">

                        {/* Location */}
                        <div className="flex items-center gap-3 text-sm">
                            <FaMapMarkerAlt className="text-[#054C73]" />

                            <span className="text-[#666666]">
                                {
                                    hackathon.mode === 'online' ?
                                        "ONLINE" :
                                        `${hackathon.venue.city}, ${hackathon.venue.state}`
                                }
                            </span>
                        </div>

                        {/* Prize + Team */}
                        <div className="flex items-center justify-between gap-4 pt-2">

                            {/* Team Size */}
                            <div className="flex items-center gap-2">
                                <FaUsers className="text-[#054C73]" />

                                <div>
                                    <p className="text-xs text-[#666666]">
                                        Team Size
                                    </p>

                                    <p className="font-semibold text-[#333333] text-sm">
                                        {hackathon.specificEvent.teamSize.min} - {hackathon.specificEvent.teamSize.max}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}