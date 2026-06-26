import { FaCalendarAlt } from "react-icons/fa";
import { getRegistrationDeadline } from "../../../utils/constant";
import { useNavigate } from "react-router";

export default function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div 
    onClick={()=> navigate('/events/'+event._id)} 
    className="relative bg-white border border-[#DFE9F4] rounded-xl overflow-hidden hover:shadow-md  transition">

      <img
        src={event.thumbnail}
        alt={event.title}
        className="h-44 w-full object-cover"
      />

      {/* badges */}
      <div className="absolute top-2 flex items-center justify-around w-full text-white">
        <span className="bg-green-900/70 rounded-2xl text-sm px-1">{event.mode}</span>
        <span className="bg-yellow-900/70 rounded-2xl text-sm px-1">{event.category}</span>
      </div>

      {/* dark overlay */}
      <div className="absolute top-0 w-full bg-black/20 h-[15%]"/>

      <div className="p-4">

        <h3 className="font-semibold text-lg text-[#333333] line-clamp-1">
          {event.title}
        </h3>

        {/* Registration deadline */}
        <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1 text-gray-600">
              <FaCalendarAlt className="text-[#054C73]" />
              <span>Last Reg.</span>
            </div>
            <span>
              {getRegistrationDeadline(event.registrationDeadline)}
            </span>
          </div>

      </div>

    </div>
  );
}