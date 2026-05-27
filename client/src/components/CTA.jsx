import { FaArrowRight } from "react-icons/fa";

export default function FeaturedBanner() {
    return (
        <section className="w-full bg-[#DFE9F4] px-6 py-12">

            <div className="max-w-7xl mx-auto">

                {/* Main Container */}
                <div className="grid lg:grid-cols-2 overflow-hidden border border-[#d9e4ee]">

                    {/* LEFT IMAGE */}
                    <div className="relative h-[260px] lg:h-[320px] overflow-hidden my-10">

                        {/* Event Image */}
                        <img
                            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop"
                            alt="Event Crowd"
                            className="w-full h-full object-cover rounded"
                        />

                        {/* Floating Mini Card */}
                        <div className="absolute bottom-5 left-5 bg-white/85 backdrop-blur-sm border border-white/40 px-4 py-3 shadow-lg max-w-[220px]">

                            <p className="text-[10px] uppercase tracking-[0.22em] text-[#666666] mb-1">
                                Trending
                            </p>

                            <h3 className="text-sm font-semibold text-[#333333] leading-snug">
                                500+ Events Happening This Month
                            </h3>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex flex-col justify-center px-8 py-8 lg:px-12">


                        {/* Heading */}
                        <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-[#333333] max-w-xl mb-4">

                            Find Events That Actually Match Your Interests
                        </h2>

                        {/* Description */}
                        <p className="text-[15px] lg:text-base leading-relaxed text-[#666666] max-w-lg mb-8">

                            Discover hackathons, workshops, college fests,
                            startup meetups, and tech communities happening
                            near you or online — all in one place.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4">

                            {/* Primary Button */}
                            <button className="group bg-[#054C73] text-white px-6 py-3 text-sm font-medium flex items-center gap-3 hover:bg-[#043a58] transition-colors duration-300">

                                Explore Events

                                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                            </button>

                            {/* Secondary Button */}
                            <button className="border border-[#b9c8d4] bg-white text-[#333333] px-6 py-3 text-sm font-medium hover:bg-[#f7fbff] transition-colors duration-300">

                                Browse Categories
                            </button>
                        </div>

                        {/* Bottom Stats */}
                        <div className="flex items-center gap-8 mt-8 pt-6 border-t border-[#c9d6e0]">

                            <div>
                                <h4 className="text-xl font-semibold text-[#054C73]">
                                    1200+
                                </h4>

                                <p className="text-sm text-[#666666] mt-1">
                                    Active Events
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-[#054C73]">
                                    300+
                                </h4>

                                <p className="text-sm text-[#666666] mt-1">
                                    Organizations
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-[#054C73]">
                                    50K+
                                </h4>

                                <p className="text-sm text-[#666666] mt-1">
                                    Students Joined
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}