// Using in event details page for specific event detail

import { FaUserTie, FaCheckCircle, FaSignal, FaClock } from "react-icons/fa";
import { profileImg } from "../../utils/constant";

const EventWorkshopDetail = ({ workshop }) => {
  const instructorImg = workshop?.instructor?.image;

  return (
    <section className="mt-16 space-y-12">
      {/* Section Title */}
      <div>
        <h2 className="text-3xl font-bold text-[#054C73]">Workshop Details</h2>

        <p className="text-gray-600 mt-2">
          Learn directly from industry professionals through hands-on sessions,
          discussions, and practical demonstrations.
        </p>
      </div>

      {/* Instructor */}
      <div className="bg-white border rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
          <FaUserTie className="text-[#054C73]" />
          Instructor
        </h3>

        <div className="flex flex-col md:flex-row gap-5 items-start">
          <img
            src={instructorImg ? instructorImg : profileImg}
            alt={workshop?.instructor?.name}
            className="w-24 h-24 rounded-full object-cover border"
          />

          <div>
            <h4 className="text-xl font-bold">{workshop?.instructor?.name}</h4>

            <p className="text-gray-600 mt-2 leading-relaxed">
              {workshop?.instructor?.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Skill Level */}
      <div className="bg-white p-6 md:flex md:items-center md:justify-around">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaSignal className="text-[#054C73]" />
            Skill Level
          </h3>

          <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium capitalize">
            {workshop.skillLevel}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Prerequisites</h3>

          <div className="space-y-3">
            {workshop.prerequisites.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 shrink-0" />

                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workshop Agenda */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Workshop Schedule</h3>

        <div className="space-y-5">
          {workshop.agenda.map((item, index) => (
            <div key={item._id} className="relative pl-12">
              {/* Timeline Line */}
              {index !== workshop.agenda.length - 1 && (
                <div className="absolute left-5 top-10 w-[2px] h-full bg-gray-200" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full border flex items-center justify-center font-semibold">
                {index + 1}
              </div>

              <div className="bg-white border rounded-2xl shadow-sm p-5">
                <h4 className="font-semibold text-lg">{item.title}</h4>

                <div className="mt-2 flex items-center gap-2 text-gray-500">
                  <FaClock />

                  <span>
                    {item.startTime} - {item.endTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventWorkshopDetail;
