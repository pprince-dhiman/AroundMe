import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Reviews() {
    const reviews = [
        {
            id: 1,
            name: "Aarav Sharma",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
            review:
                "The hackathon experience was amazing. Everything from event management to mentorship was perfectly organized. I learned a lot and made great connections."
        },
        {
            id: 2,
            name: "Priya Verma",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
            review:
                "I attended the UI/UX workshop and honestly it exceeded my expectations. The sessions were practical and beginner friendly."
        },
        {
            id: 3,
            name: "Rohan Mehta",
            image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
            review:
                "Very smooth registration process and excellent event updates. I found teammates for my project and even got internship opportunities."
        },
        {
            id: 4,
            name: "Ananya Patel",
            image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
            review:
                "One of the cleanest platforms to discover tech events. I really liked how easy it was to filter hackathons and workshops nearby."
        },
        {
            id: 5,
            name: "Kabir Singh",
            image:
                "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=400&auto=format&fit=crop",
            review:
                "The event atmosphere was energetic and inspiring. Speakers were knowledgeable and the networking opportunities were valuable."
        },
        {
            id: 6,
            name: "Sneha Kapoor",
            image:
                "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop",
            review:
                "I joined an online coding workshop through this platform and the experience was seamless. Definitely attending more events from here."
        },
    ];

    // =========================================
    // Current Active Index
    // =========================================
    const [activeIndex, setActiveIndex] = useState(0);

    // =========================================
    // Previous Slide
    // =========================================
    const prevSlide = () => {
        setActiveIndex((prev) =>
            prev === 0 ? reviews.length - 1 : prev - 1
        );
    };

    // =========================================
    // Next Slide
    // =========================================
    const nextSlide = () => {
        setActiveIndex((prev) =>
            prev === reviews.length - 1 ? 0 : prev + 1
        );
    };

    // =========================================
    // Dynamic Cards
    // =========================================
    const leftIndex =
        activeIndex === 0
            ? reviews.length - 1
            : activeIndex - 1;

    const rightIndex =
        activeIndex === reviews.length - 1
            ? 0
            : activeIndex + 1;

    return (
        <section className="w-full py-24 bg-[#F2F5FF] overflow-hidden">

            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-[#333333] mb-16">
                    Reviews
                </h2>

                {/* Slider Wrapper */}
                <div className="relative h-85 flex items-center justify-center">

                    {/* LEFT CARD */}
                    <div
                        className="hidden md:block absolute left-0 top-20 w-75 bg-[#DFE9F4] rounded-3xl p-6 opacity-40 scale-95
                        transition-all duration-700 ease-in-out"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={reviews[leftIndex].image}
                                alt={reviews[leftIndex].name}
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <h3 className="font-semibold text-[#333333]">
                                {reviews[leftIndex].name}
                            </h3>
                        </div>

                        <p className="text-sm text-[#666666] leading-6 line-clamp-4">
                            {reviews[leftIndex].review}
                        </p>
                    </div>

                    {/* CENTER ACTIVE CARD */}
                    <div
                        key={activeIndex}
                        className="relative z-10 w-full max-w-2xl bg-[#DFE9F4]
                        rounded-[30px] px-10 py-10 shadow-lg
                        animate-[fade_0.6s_ease]"
                    >

                        {/* Avatar */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                            <img
                                src={reviews[activeIndex].image}
                                alt={reviews[activeIndex].name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-[#F2F5FF]
                                transition-all duration-500"
                            />
                        </div>

                        {/* Left Arrow */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2
                            w-10 h-10 rounded-full bg-black text-white
                            flex items-center justify-center
                            hover:scale-110 transition duration-300"
                        >
                            <FaChevronLeft size={14} />
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2
                            w-10 h-10 rounded-full bg-black text-white
                            flex items-center justify-center
                            hover:scale-110 transition duration-300"
                        >
                            <FaChevronRight size={14} />
                        </button>

                        {/* Content */}
                        <div className="mt-10 text-center">

                            <h3
                                className="text-2xl font-bold text-[#333333]
                                mb-5 transition-all duration-500"
                            >
                                {reviews[activeIndex].name}
                            </h3>

                            <p
                                className="text-[#333333] leading-8 text-[15px]
                                max-w-xl mx-auto transition-all duration-500"
                            >
                                {reviews[activeIndex].review}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div
                        className="hidden md:block absolute right-0 top-20 w-75 bg-[#DFE9F4] rounded-3xl p-6 opacity-40 scale-95
                        transition-all duration-700 ease-in-out"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={reviews[rightIndex].image}
                                alt={reviews[rightIndex].name}
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <h3 className="font-semibold text-[#333333]">
                                {reviews[rightIndex].name}
                            </h3>
                        </div>

                        <p className="text-sm text-[#666666] leading-6 line-clamp-4">
                            {reviews[rightIndex].review}
                        </p>
                    </div>
                </div>

                {/* Bottom Dots */}
                <div className="flex justify-center gap-3 mt-10">

                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300
                                ${activeIndex === index
                                    ? "bg-[#054C73] scale-125"
                                    : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>


            <style>
                {`
                    @keyframes fade {
                        0% {
                            opacity: 0;
                            transform: translateY(20px) scale(0.96);
                        }

                        100% {
                            opacity: 1;
                            transform: translateY(0px) scale(1);
                        }
                    }
                `}
            </style>
        </section>
    );
}