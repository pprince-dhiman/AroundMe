import { FaMapMarkerAlt, FaCalendarAlt, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function OrganizationCard({ organization }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/organizations/" + organization._id)}
      className="bg-white rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      {/* Banner */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={
            organization.banner ||
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          }
          alt={organization.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="p-5 relative">
        {/* Logo */}
        <div className="absolute -top-10 left-5">
          <img
            src={organization.logo || "https://via.placeholder.com/80"}
            alt={organization.name}
            className="w-20 h-20 rounded-2xl border-4 border-white object-cover shadow-md bg-white"
          />
        </div>

        {/* Spacer for logo */}
        <div className="h-10"></div>

        {/* Name + Type */}
        <div className="mb-3">
          <h2 className="text-xl font-bold text-[#111827] line-clamp-1">
            {organization.name}
          </h2>

          <p className="text-sm capitalize text-[#667085] mt-1">
            {organization.organizationType}
          </p>
        </div>

        {/* Info */}
        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-sm text-[#667085]">
            <FaMapMarkerAlt className="text-[#2563EB]/80" />
            <span>
              {organization.location.city}, {organization.location.country}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#667085]">
            <FaCalendarAlt className="text-[#2563EB]/80" />
            <span>Since {organization.foundedYear}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#667085]">
            <FaGlobe className="text-[#2563EB]/80" />
            <span>{organization.website}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
