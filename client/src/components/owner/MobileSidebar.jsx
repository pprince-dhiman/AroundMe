// src/components/dashboard/MobileSidebar.jsx

import { NavLink } from "react-router";
import { FiX } from "react-icons/fi";
import { navigation } from "./navigation.js";

const MobileSidebar = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed left-0 top-0 h-screen w-72 bg-white z-50 shadow-xl">
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-bold text-[#054C73]">
            AroundMe
          </h2>

          <button onClick={() => setOpen(false)}>
            <FiX size={22} />
          </button>
        </div>

        <div className="py-4">
          {navigation.map((section) => (
            <div key={section.title} className="mb-5">
              <h3 className="px-5 mb-2 text-xs text-gray-400">
                {section.title}
              </h3>

              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `
                      mx-3 flex items-center gap-3
                      px-3 py-2 rounded-lg
                      ${
                        isActive
                          ? "bg-[#DFE9F4] text-[#054C73]"
                          : "text-gray-600"
                      }
                    `
                    }
                  >
                    <Icon />
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;