import { FiMenu } from "react-icons/fi";
import { useUser } from "@clerk/react";

const Header = ({ setSidebarOpen }) => {
  const { user } = useUser();

  return (
    <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
          <FiMenu size={22} />
        </button>

        <div>
          <h2 className="font-semibold text-lg text-[#333333]">Welcome back</h2>

          <p className="text-sm text-[#666666]">
            Manage your events and organizations
          </p>
        </div>
      </div>

      {user ? (
        <div className="flex items-center gap-3">
          <img
            src={user.imageUrl}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="hidden sm:block">
            <p className="font-medium">{user?.fullName}</p>
            <p className="text-sm text-gray-500">Organizer</p>
          </div>
        </div>
      ) : (
        <div className="px-5 py-2.5 rounded-2xl bg-gray-300 animate-pulse text-gray-500">
          Loading...
        </div>
      )}
    </header>
  );
};

export default Header;
