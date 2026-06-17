import { FiMail, FiMapPin, FiCalendar } from "react-icons/fi";
import { useNavigate } from "react-router";

const OrganizationCard = ({ organization }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <div className="flex gap-4">
        {/* Logo */}
        <img
          src={organization.logo}
          alt={organization.name}
          className="w-16 h-16 rounded-lg object-cover border"
        />

        {/* Main Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#333333]">
            {organization.name}
          </h3>

          <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-[#DFE9F4] text-[#054C73] capitalize">
            {organization.organizationType}
          </span>

          <div className="mt-3 space-y-1 text-sm text-[#666666]">
            <div className="flex items-center gap-2">
              <FiMapPin size={14} />
              <span>
                {organization.location?.city}, {organization.location?.country}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FiCalendar size={14} />
              <span>Founded {organization.foundedYear}</span>
            </div>

            <div className="flex items-center gap-2">
              <FiMail size={14} />
              <span>{organization.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#F2F5FF] rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-[#054C73]">
              {organization?.totalWorkshops || 0}
            </p>
            <p className="text-xs text-[#666666]">Workshops</p>
          </div>

          <div className="bg-[#F2F5FF] rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-[#054C73]">
              {organization?.totalHackathons || 0}
            </p>
            <p className="text-xs text-[#666666]">Hackathons</p>
          </div>

          <div className="bg-[#F2F5FF] rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-[#054C73]">
              {organization?.totalCulturalEvents || 0}
            </p>
            <p className="text-xs text-[#666666]">Events</p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            onClick={() =>
              navigate("/organizer/organizations/" + organization._id)
            }
            className="px-10 py-3 border rounded "
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCard;
