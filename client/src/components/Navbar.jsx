import { useState } from "react";
import {
    FaTicketAlt,
    FaHeart,
    FaBars,
    FaTimes,
} from "react-icons/fa";

import { useNavigate, Link } from "react-router";
import { Show, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/react'
import { toast } from "react-toastify";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // state for becoming organizer (becoming...)
    const [isLoading, setIsLoading] = useState(false);
    // temporary user state

    const navigate = useNavigate();

    // Clerk
    const { isLoaded, user } = useUser();

    // Mobile menu toggle
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Become organizer / dashboard
    const becomeOrganizerFn = async () => {
        toast.success("You become an organiser.");
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        }, 2000);
    };

    // Navigate to dashboard
    const dashboardFn = () => {
        navigate("/organizer/dashboard");
        scrollTo(0, 0);
    };

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div
                        className="px-4 py-2 rounded-2xl font-bold text-2xl tracking-tight cursor-pointer hover:scale-105 transition-transform"
                        style={{ color: "#054C73" }}
                        onClick={() => navigate("/")}
                    >
                        AroundMe
                    </div>
                    {/* nav bar links for desktop */}
                    {user && (
                        <div className="hidden md:flex items-center gap-8">

                            {/* Organizer Button */}
                            <button
                                onClick={
                                    user.publicMetadata.role === "user"
                                        ? becomeOrganizerFn
                                        : dashboardFn
                                }
                                className="px-5 py-2.5 rounded-xl font-medium transition-all duration-200 hover:shadow-md active:scale-95 border border-[#054C73] cursor-pointer hover:text-white hover:bg-[#054C73]"
                            >
                                {user.publicMetadata.role === "user"
                                    ? isLoading
                                        ? "Updating..."
                                        : "Become Organizer"
                                    : "Dashboard"}
                            </button>

                            {/* My Tickets */}
                            <Link
                                to="/my-tickets"
                                className="flex items-center gap-2 text-[#333333] hover:text-[#054C73] font-medium transition-colors"
                            >
                                <FaTicketAlt className="text-lg" />
                                My Tickets
                            </Link>

                            {/* Saved */}
                            <Link
                                to="/saved"
                                className="flex items-center gap-2 text-[#333333] hover:text-[#054C73] font-medium transition-colors"
                            >
                                <FaHeart className="text-lg" />
                                Saved
                            </Link>
                        </div>
                    )}
                    {
                        isLoaded ?
                            (
                                <div className="hidden md:flex items-center gap-4">
                                    <Show when="signed-out">
                                        <SignInButton className="px-5 py-2 rounded-xl font-medium bg-[#054C73] transition-all duration-200 hover:shadow-md active:scale-95 border cursor-pointer text-white hover:bg-[#023e5e]" />
                                        <SignUpButton className="px-5 py-2 rounded-xl font-medium transition-all duration-200 hover:shadow-md active:scale-95 border border-[#054C73] cursor-pointer hover:text-white hover:bg-[#054C73]" />
                                    </Show>
                                    <Show when="signed-in">
                                        <UserButton />
                                    </Show>
                                </div>
                            )
                            :
                            (
                                <div
                                    className="px-5 py-2 rounded-xl font-medium bg-gray-300/60 cursor-not-allowed text-gray-600"
                                >
                                    Loading...
                                </div>
                            )

                    }


                    {/* MOBILE MENU BUTTON */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-2xl text-[#333333] p-2"
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t flex flex-col items-center justify-center gap-2">
                    <div className="mt-2">
                        {/* Clerk User Button in Mobile */}
                        {user ?
                            (
                                <div>User</div>
                            ) :
                            (
                                <SignInButton
                                    className="my-2 mx-5 py-2 px-10 rounded-2xl text-lg font-medium bg-[#054C73] text-white"
                                />
                            )
                        }
                    </div>

                    <div className="px-4 py-6 space-y-5">

                        {user && (
                            <>
                                {/* Organizer Button */}
                                <button
                                    onClick={
                                        user.publicMetadata.role === "user"
                                            ? becomeOrganizerFn
                                            : dashboardFn
                                    }
                                    className="w-full py-3 rounded-2xl text-lg font-medium bg-[#054C73] text-white"
                                >
                                    {user.publicMetadata.role === "user"
                                        ? isLoading
                                            ? "Updating..."
                                            : "Become Organizer"
                                        : "Dashboard"}
                                </button>

                                {/* Links */}
                                <div className="flex flex-col gap-4 text-[#333333]">

                                    <Link
                                        to="/my-tickets"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 py-3 text-lg hover:text-[#054C73]"
                                    >
                                        <FaTicketAlt />
                                        My Tickets
                                    </Link>

                                    <Link
                                        to="/saved"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 py-3 text-lg hover:text-[#054C73]"
                                    >
                                        <FaHeart />
                                        Saved
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;