import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">

            {/* BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-110"
                style={{
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=')",
                }}
            />

            {/* FULL IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-[#04131d]/75 backdrop-blur-xs" />

            {/* MAIN CONTAINER */}
            <div className="relative z-10 w-full max-w-7xl px-6 py-14 lg:px-16 lg:py-20">

                {/* HEADING */}
                <div className="max-w-3xl mx-auto text-center">

                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white mb-6">
                        Find Local
                        <span className="block text-[#8cc6e4]">
                            Tech Events
                        </span>
                    </h1>

                    <p className="text-[#b6c9d6] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">

                        Explore hackathons, workshops, meetups,
                        college fests, and developer communities
                        happening around your city.
                    </p>
                </div>

                {/* SEARCH BAR */}
                <div className="max-w-4xl mx-auto mt-12">

                    <div className="bg-[#DFE9F4] border rounded border-[#d0dbe5] p-4 shadow-2xl">

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4">

                            {/* Search Input */}
                            <div className="flex items-center gap-3 bg-white border border-[#cdd9e3] px-4 py-4 rounded">

                                <FaSearch className="text-[#054C73] text-sm" />

                                <input
                                    type="text"
                                    placeholder="Search events, hackathons, workshops..."
                                    className="w-full bg-transparent outline-none text-[#333333] placeholder:text-[#777]"
                                />
                            </div>

                            {/* Location Input */}
                            <div className="flex items-center gap-3 bg-white border border-[#cdd9e3] px-4 py-4 rounded">

                                <FaMapMarkerAlt className="text-[#054C73] text-sm" />

                                <input
                                    type="text"
                                    placeholder="Enter your location"
                                    className="w-full bg-transparent outline-none text-[#333333] placeholder:text-[#777]"
                                />
                            </div>

                            {/* Button */}
                            <button className="bg-[#054C73] hover:bg-[#043954] transition-colors duration-300 text-white px-8 py-4 font-medium tracking-wide rounded">

                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* STATS */}
                <div className="flex flex-wrap items-center justify-center gap-10 mt-12 text-center">

                    <div>
                        <h3 className="text-2xl font-semibold text-white">
                            1200+
                        </h3>

                        <p className="text-sm text-[#9fb5c3] mt-1">
                            Active Events
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-white">
                            300+
                        </h3>

                        <p className="text-sm text-[#9fb5c3] mt-1">
                            Organizations
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-white">
                            50K+
                        </h3>

                        <p className="text-sm text-[#9fb5c3] mt-1">
                            Students Joined
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}