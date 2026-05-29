import {
    FaCode,
    FaLaptopCode,
    FaUsers,
    FaMicrophone,
    FaArrowCircleRight,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const categories = [
    {
        id: 1,
        title: "Hackathons",
        description: "Compete, build and innovate with developers.",
        icon: FaCode,
        path: "/hackathons"
    },
    {
        id: 2,
        title: "Workshops",
        description: "Learn new skills from industry experts.",
        icon: FaLaptopCode,
        path: "/workshops"
    },
    {
        id: 3,
        title: "Cultural Events",
        description: "Enjoy cultural, tech and fun college events.",
        icon: FaUsers,
        path: "/cultural-events"
    },
    {
        id: 4,
        title: "Tech Meetups",
        description: "Connect with local tech communities.",
        icon: FaMicrophone,
        path: "/"
    },
];

const Category = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-linear-to-b from-[#DFE9F4] to-white py-20 px-6">

            {/* SECTION HEADER */}
            <div className="max-w-7xl mx-auto text-center mb-14">

                <p className="text-[#054C73] font-semibold tracking-wide uppercase">
                    Explore Categories
                </p>

                <h2 className="mt-3 text-2xl md:text-5xl font-black text-[#333333]">
                    Browse By Category
                </h2>

                <p className="mt-5 max-w-2xl mx-auto text-[#666666] text-lg leading-relaxed">
                    Find hackathons, workshops, meetups and exciting local
                    events happening around you.
                </p>
            </div>


            {/* CATEGORY GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <div
                            key={category.id}
                            onClick={()=>navigate(category.path)}
                            className="group bg-[#F2F5FF] rounded-xl p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl border border-white/40 select-none"
                        >

                            {/* ICON */}
                            <div className="w-16 h-16 rounded-2xl bg-[#054C73] flex items-center justify-center text-white text-2xl shadow-lg">
                                <Icon />
                            </div>

                            {/* TEXT */}
                            <div className="mt-6">
                                <h3 className="text-2xl font-bold text-[#333333] group-hover:text-[#054C73] transition-colors">
                                    {category.title}
                                </h3>

                                <p className="mt-3 text-[#666666] leading-relaxed">
                                    {category.description}
                                </p>
                            </div>

                            {/* BUTTON */}
                            <button
                                onClick={() => {
                                    navigate(category.path);
                                    scrollTo(0, 0);
                                }}
                                className="mt-6 text-[#054C73] font-semibold hover:underline cursor-pointer flex items-center gap-2">
                                Explore <FaArrowCircleRight />
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Category;