import { NavLink, useNavigate } from "react-router";
import { FiPlus, FiLogOut, FiChevronDown } from "react-icons/fi";
import { navigation } from "./navigation";
import { toast } from "react-toastify";

const Sidebar = ({ organizations = [], currentOrg }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const isLeave = confirm("Are you sure to leave dashboard.");
    if(!isLeave) return;

    navigate('/');
    toast.success("Welcome Back.");
  }

  return (
    <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-gray-200 h-screen sticky top-0">
      {/* Logo */}
      <div className="px-6 py-6 border-b">
        <h1 onClick={()=>navigate('/')}
        className="text-2xl font-bold text-[#054C73] cursor-pointer">
          AroundMe
        </h1>
      </div>

      {/* Quick add org */}
      <div className="p-4 border-b">
        <button className="mt-3 flex items-center gap-2 text-[#054C73] font-medium hover:opacity-80 px-3 py-1 border-l rounded">
          <FiPlus />
          New Organization
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        {navigation.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="px-6 mb-2 text-xs font-semibold tracking-wider text-gray-400">
              {section.title}
            </h3>

            <div className="space-y-1 px-3">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/dashboard"}
                    className={({ isActive }) =>
                      `
                      flex items-center gap-3
                      px-3 py-2.5 rounded-lg
                      transition-colors
                      ${
                        isActive
                          ? "bg-[#DFE9F4] text-[#054C73] font-medium"
                          : "text-gray-600 hover:bg-[#F2F5FF]"
                      }
                    `
                    }
                  >
                    <Icon size={18} />
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className="border-t p-4">
        <button onClick={handleLogout}
        className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors">
          <FiLogOut />
          Leave Dashboard
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;