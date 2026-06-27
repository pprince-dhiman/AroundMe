import { useState } from "react";
import { FaTicketAlt, FaHeart, FaBars, FaTimes, FaBuilding, FaCalendarAlt } from "react-icons/fa";

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
        navigate("organizer/dashboard");
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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      {/* NAVBAR CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
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

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/organizations"
              className="text-gray-700 font-semibold hover:text-[#054C73] transition-colors"
            >
              Organizations
            </Link>

            <Link
              to="/events"
              className="text-gray-700 font-semibold hover:text-[#054C73] transition-colors"
            >
              Events
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-4">
            {user && (
              <>
                {/* ORGANIZER BUTTON */}
                <button
                  onClick={
                    user.publicMetadata.role === "user"
                      ? becomeOrganizerFn
                      : dashboardFn
                  }
                  className="px-5 py-2.5 border border-[#054C73] rounded-lg hover:bg-[#054C73] hover:text-white font-medium transition-colors"
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
                    <SignInButton className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition cursor-pointer" />

                    {/* Sign Up */}
                    <SignUpButton className="px-4 py-2 rounded-lg bg-[#054C73] text-white hover:bg-[#04344e] transition cursor-pointer" />
                  </div>
                </Show>

                <Show when="signed-in">
                  <div className="border border-gray-200 rounded-full p-1">
                    <UserButton>
                      <UserButton.MenuItems>
                        <UserButton.Link
                          label="My Tickets"
                          labelIcon={<FaTicketAlt />}
                          href="/my-tickets"
                        />

                        <UserButton.Link
                          label="Saved"
                          labelIcon={<FaHeart />}
                          href="/saved"
                        />
                      </UserButton.MenuItems>
                    </UserButton>
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
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-4">
            {/* SIGNED OUT */}
            {!user && (
              <div className="flex flex-col gap-3">
                <SignInButton className="w-full py-3 rounded-xl bg-[#054C73] text-white font-semibold" />

                <SignUpButton className="w-full py-3 rounded-xl border border-[#054C73] text-[#054C73] font-semibold" />
              </div>
            )}

            {/* SIGNED IN */}
            {user && (
              <>
                {/* PRIMARY ACTION */}
                <button
                  onClick={
                    user.publicMetadata.role === "user"
                      ? becomeOrganizerFn
                      : dashboardFn
                  }
                  className="w-full py-4 rounded-2xl border border-[#054C73] font-semibold hover:bg-[#054C73] hover:text-white"
                >
                  {user.publicMetadata.role === "user"
                    ? isLoading
                      ? "Updating..."
                      : "Become Organizer"
                    : "Dashboard"}
                </button>

                {/* NAVIGATION */}
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    to="/organizations"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-gray-50 transition"
                  >
                    <FaBuilding className="text-[#054C73]" />
                    <span>Organizations</span>
                  </Link>

                  <Link
                    to="/events"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-gray-50 transition"
                  >
                    <FaCalendarAlt className="text-[#054C73]" />
                    <span>Events</span>
                  </Link>

                  <Link
                    to="/my-tickets"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-gray-50 transition"
                  >
                    <FaTicketAlt className="text-[#054C73]" />
                    <span>My Tickets</span>
                  </Link>

                  <Link
                    to="/saved"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-gray-50 transition"
                  >
                    <FaHeart className="text-[#054C73]" />
                    <span>Saved Events</span>
                  </Link>
                </div>

                {/* DIVIDER */}
                <div className="my-4 border-t border-gray-200" />

                {/* PROFILE */}
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm font-medium text-gray-500">
                    Account
                  </span>

                  <UserButton />
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