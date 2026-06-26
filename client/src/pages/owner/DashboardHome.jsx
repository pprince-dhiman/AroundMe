import { FiCode, FiTool, FiMusic, FiDollarSign } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import {
  calculateRevenue,
  calulateAllCulturalEvents,
  calulateAllHackathons,
  calulateAllWorkshops,
} from "../../utils/dashboardConstant";
import Loading from "../../components/Loading";

const DashboardHome = () => {
  const { dashboardData } = useSelector((state) => state.dashboard);
  const allhackathons = calulateAllHackathons(dashboardData?.allOrgs || null);
  const allworkshops = calulateAllWorkshops(dashboardData?.allOrgs || null);
  const allculturalEvents = calulateAllCulturalEvents(
    dashboardData?.allOrgs || null,
  );
  const revenue = calculateRevenue(dashboardData?.allOrgs || null);

  const upcomingEvents = dashboardData?.allEvents?.filter(
    (event) => event.status === "upcoming",
  );

  const stats = [
    {
      title: "Hackathons",
      value: allhackathons,
      icon: FiCode,
    },
    {
      title: "Workshops",
      value: allworkshops,
      icon: FiTool,
    },
    {
      title: "Cultural Events",
      value: allculturalEvents,
      icon: FiMusic,
    },
    {
      title: "Total Revenue",
      value: revenue,
      icon: FiDollarSign,
    },
  ];

  const statusBadge = {
    draft: "bg-gray-100 text-gray-700",
    upcoming: "bg-blue-100 text-blue-700",
    open: "bg-green-100 text-green-700",
    ongoing: "bg-purple-100 text-purple-700",
    ended: "bg-red-100 text-red-700",
  };

  const categoryBadge = {
    Hackathon: "bg-indigo-100 text-indigo-700",
    Workshop: "bg-amber-100 text-amber-700",
    CulturalEvent: "bg-pink-100 text-pink-700",
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <section className="bg-white rounded-xl p-6 border">
        <h1 className="text-2xl font-bold text-[#333333]">
          Dashboard Overview
        </h1>

        <p className="text-[#666666] mt-1 text-sm">
          Monitor events, participants, engagement and organization activity.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white border rounded-xl p-5 hover:shadow-sm transition"
            >
              <div className="flex items-center justify-around">
                <div className="w-12 h-12 rounded-lg bg-[#DFE9F4] flex items-center justify-center">
                  <Icon size={22} className="text-[#054C73]" />
                </div>

                <div>
                  <p className="text-sm text-[#666666]">{item.title}</p>

                  <h2 className="text-2xl font-bold mt-2 text-[#333333] flex items-center gap-1">
                    {item.title === "Total Revenue" ? <MdCurrencyRupee /> : ""}{" "}
                    {dashboardData ? item.value : "..."}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Middle Section */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <div className="xl:col-span-2 bg-white border rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-lg">Upcoming Events</h2>

            <Link
              to="/organizer/events"
              className="text-[#054C73] text-sm font-medium"
            >
              View All
            </Link>
          </div>

          {/* upcoming events */}
          {dashboardData ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {upcomingEvents?.slice(0, 4)?.map((event) => (
                <div
                  key={event._id}
                  className="bg-white border border-[#DFE9F4] rounded-xl p-4 shadow-sm transition"
                >
                  {/* Event Type */}
                  <div className="flex justify-between items-start mb-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        categoryBadge[event?.category]
                      }`}
                    >
                      {event?.category}
                    </span>

                    <span className="text-xs text-[#666666]">
                      {new Date(event?.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Event Name */}
                  <h3 className="text-lg font-semibold text-[#333333] line-clamp-2 mb-3">
                    {event?.title}
                  </h3>

                  {/* Organization Details */}
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-[#666666]">Organization</p>
                      <p className="font-medium text-[#333333]">
                        {event?.organization?.name}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-[#666666]">
                        Organization Type
                      </p>
                      <p className="font-medium text-[#333333] capitalize">
                        {event?.organization?.organizationType}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-4 pt-3 border-t border-[#DFE9F4]">
                    <p className="text-sm text-[#666666]">
                      Participants:{" "}
                      <span className="font-medium text-[#333333]">
                        {event?.currentParticipants}/{event?.maxParticipants}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Recent Events */}
        <div className="xl:col-span-2 bg-white border rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-lg">Recent Events</h2>

            <Link
              to="/dashboard/events"
              className="text-[#054C73] text-sm font-medium"
            >
              Manage Events
            </Link>
          </div>
          {dashboardData ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3 font-medium">Event</th>
                    <th className="pb-3 font-medium">Organization</th>
                    <th className="pb-3 font-medium">Bookmarks</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {dashboardData?.allEvents?.slice(0, 3)?.map((event) => (
                    <tr key={event?._id} className="border-b last:border-0">
                      <td className="py-4">
                        <div>
                          <p className="font-medium">{event?.title}</p>

                          <p className="text-sm text-[#666666]">
                            {event?.category}
                          </p>
                        </div>
                      </td>

                      <td>{event?.organization?.name}</td>

                      <td>{event?.bookmarks}</td>

                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            statusBadge[event?.status]
                          }`}
                        >
                          {event?.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;
