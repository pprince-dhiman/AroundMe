import { FaCalendarAlt, FaRupeeSign, FaUserTie } from "react-icons/fa";
import {
  calculateAmount,
  getRegistrationDeadline,
} from "../../../utils/constant";

export default function WorkshopCard({ workshop }) {

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#DFE9F4] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      {/* Thumbnail */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={workshop.thumbnail}
          alt={workshop.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {/* Skill Level */}
          <span className="bg-yellow-700/70 text-white text-xs font-medium px-3 py-1 rounded-full capitalize">
            {workshop.specificEvent.skillLevel}
          </span>

          {/* Mode */}
          <span className="bg-white/90 text-[#333333] text-xs font-medium px-3 py-1 rounded-full capitalize">
            {workshop.mode}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-[#333333] line-clamp-2 mb-3">
          {workshop.title}
        </h2>

        {/* Description */}
        <p className="text-[#666666] text-sm leading-7 line-clamp-2 mb-5">
          {workshop.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#EAF3F8] flex items-center justify-center">
            <FaUserTie className="text-[#054C73]" />
          </div>

          <div>
            <p className="text-xs text-[#666666]">Instructor</p>

            <p className="font-medium text-[#333333] text-sm">
              {workshop.specificEvent.instructor.name}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#E8EEF5]">
          {/* Registration deadline */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1 text-gray-600">
              <FaCalendarAlt className="text-[#054C73]" />
              <span>Reg. Deadline</span>
            </div>
            <span>
              {getRegistrationDeadline(workshop.registrationDeadline)}
            </span>
          </div>

          {/* Pricing */}
          <div>
            {workshop.pricing.isFree ? (
              <span className="text-green-600 font-bold text-lg">Free</span>
            ) : (
              <div className="flex items-center gap-2">
                <span className="flex items-center font-bold text-[#333333] text-lg">
                  <FaRupeeSign size={15} />
                  {calculateAmount({
                    amount: workshop.pricing.amount,
                    discount: workshop.pricing.discount,
                  })}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
