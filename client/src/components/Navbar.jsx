import { useState } from "react";
import { FaTicketAlt, FaHeart, FaBars, FaTimes } from "react-icons/fa";

import { useNavigate, Link } from "react-router";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/react";
import { toast } from "react-toastify";
import axios from "axios";
import { USER_BACKEND_API } from "../utils/constant";
import { getToken } from "@clerk/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // state for becoming organizer (becoming...)
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Clerk
  const { isLoaded, user } = useUser();

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Become organizer / dashboard
  const becomeOrganizerFn = async () => {
    try {
      setIsLoading(true);
      const token = await getToken();
      const res = await axios.post(
        `${USER_BACKEND_API}/become-organizer`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.data.success) {
        navigate("org/dashboard");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Navigate to dashboard
  const dashboardFn = () => {
    navigate("/organizer/dashboard");
    scrollTo(0, 0);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#DFE9F4]/80 border-b border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      {/* NAVBAR CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* logo */}
            <div>
              <h1 className="text-2xl font-black tracking-tight text-[#054C73]">
                AroundMe
              </h1>

              <p className="text-xs text-[#666666] -mt-1">
                Explore Local Events
              </p>
            </div>
          </div>

          <Link
            className="text-gray-900 font-medium hover:underline hover:text-[#054C73]"
            to="/organizations"
          >
            Organizations
          </Link>

          <Link
            className="text-gray-900 font-medium hover:underline hover:text-[#054C73]"
            to="/events"
          >
            Events
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-3">
            {user && (
              <>
                {/* My Tickets */}
                <Link
                  to="/my-tickets"
                  className="px-5 py-3 rounded-2xl text-[#333333] font-medium transition-all duration-300 hover:text-[#054C73] hover:shadow-[6px_6px_15px_#c7d0da,-6px_-6px_15px_#ffffff]"
                >
                  <span className="flex items-center gap-2">
                    <FaTicketAlt />
                    My Tickets
                  </span>
                </Link>

                {/* Saved */}
                <Link
                  to="/saved"
                  className="px-5 py-3 rounded-2xl text-[#333333] font-medium transition-all duration-300 hover:text-[#054C73] hover:shadow-[6px_6px_15px_#c7d0da,-6px_-6px_15px_#ffffff]"
                >
                  <span className="flex items-center gap-2">
                    <FaHeart />
                    Saved
                  </span>
                </Link>

                {/* ORGANIZER BUTTON */}
                <button
                  onClick={
                    user.publicMetadata.role === "user"
                      ? becomeOrganizerFn
                      : dashboardFn
                  }
                  className="px-6 py-3 rounded-2xl bg-[#054C73] text-white font-semibold transition-all duration-300 hover:bg-[#04344e] active:scale-95"
                >
                  {user.publicMetadata.role === "user"
                    ? isLoading
                      ? "Updating..."
                      : "Become Organizer"
                    : "Dashboard"}
                </button>
              </>
            )}

            {/* AUTH SECTION */}
            {isLoaded ? (
              <div className="flex items-center gap-3 ml-2">
                <Show when="signed-out">
                  <div className="flex items-center gap-3">
                    {/* Sign In */}
                    <SignInButton className="px-5 py-2.5 rounded-2xl bg-[#054C73] text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer" />

                    {/* Sign Up */}
                    <SignUpButton className="px-5 py-2.5 rounded-2xl border border-[#054C73] text-[#054C73] font-medium transition-all duration-300 hover:bg-[#054C73] hover:text-white cursor-pointer" />
                  </div>
                </Show>

                <Show when="signed-in">
                  <div className="border-2 border-[#054C73]/70 px-1 pt-1 rounded-full">
                    <UserButton />
                  </div>
                </Show>
              </div>
            ) : (
              <div className="px-5 py-2.5 rounded-2xl bg-gray-300 animate-pulse text-gray-500">
                Loading...
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-12 h-12 rounded-2xl bg-[#DFE9F4] flex items-center justify-center text-[#333333] shadow-[6px_6px_15px_#c7d0da,-6px_-6px_15px_#ffffff]"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-150 opacity-100 py-5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6">
          <div className="bg-[#DFE9F4] rounded-4xl p-5 shadow-[12px_12px_25px_#c7d0da,-12px_-12px_25px_#ffffff] space-y-4">
            {/* SIGNED OUT */}
            {!user && (
              <div className="flex flex-col gap-3">
                <SignInButton className="w-full py-3 rounded-2xl bg-[#054C73] text-white font-semibold" />

                <SignUpButton className="w-full py-3 rounded-2xl border border-[#054C73] text-[#054C73] font-semibold" />
              </div>
            )}

            {/* SIGNED IN */}
            {user && (
              <>
                {/* Organizer Button */}
                <button
                  onClick={
                    user.publicMetadata.role === "user"
                      ? becomeOrganizerFn
                      : dashboardFn
                  }
                  className="w-full py-4 rounded-2xl bg-[#054C73] text-white font-semibold"
                >
                  {user.publicMetadata.role === "user"
                    ? isLoading
                      ? "Updating..."
                      : "Become Organizer"
                    : "Dashboard"}
                </button>

                {/* LINKS */}
                <div className="flex flex-col gap-3">
                  <Link
                    to="/my-tickets"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-4 rounded-2xl text-[#333333] font-medium shadow-[6px_6px_15px_#c7d0da,-6px_-6px_15px_#ffffff]"
                  >
                    <FaTicketAlt className="text-[#054C73]" />
                    My Tickets
                  </Link>

                  <Link
                    to="/saved"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-4 rounded-2xl text-[#333333] font-medium shadow-[6px_6px_15px_#c7d0da,-6px_-6px_15px_#ffffff]"
                  >
                    <FaHeart className="text-[#054C73]" />
                    Saved Events
                  </Link>
                </div>

                {/* USER BUTTON */}
                <div className="flex justify-center pt-2">
                  <div className="bg-[#DFE9F4] rounded-2xl p-1 shadow-[6px_6px_15px_#c7d0da,-6px_-6px_15px_#ffffff]">
                    <UserButton />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
