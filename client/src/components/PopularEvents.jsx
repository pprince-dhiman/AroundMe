import {
    FaArrowRight,
} from "react-icons/fa";
import PopularEventsCard from "./PopularEventsCard";

const events = [
    {
        _id: 1,
        title: "CodeVerse HackFest 2026",
        location: "Uttar Pradesh",
        type: "offline",
        image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    },
    {
        _id: 2,
        title: "Mega Hackathon 2026",
        location: "Online",
        type: "online",
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    },
    {
        _id: 3,
        title: "Mega Workshop 2026",
        location: "Online",
        type: "online",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
        _id: 4,
        title: "Delhi Night Beats 2026",
        location: "NSUT, New Delhi",
        type: "offline",
        image:
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    },
];

export default function PopularEvents() {
    return (
        <section className="w-full bg-white py-14 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-2">
                            Discover
                        </p>

                        <h2 className="text-3xl font-semibold text-gray-900">
                            Popular Events
                        </h2>
                    </div>

                    <button className="hidden md:flex items-center gap-2 text-sm font-medium transition-colors duration-200  border rounded px-3 py-1 hover:bg-gray-700 hover:text-white">
                        View All
                        <FaArrowRight className="text-xs" />
                    </button>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        events.map((event) => <PopularEventsCard event={event} key={event._id}/>)
                    }
                </div>

                {/* Mobile Button */}
                <div className="mt-8 flex md:hidden justify-center">
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-800 border border-gray-300 px-5 py-3 hover:bg-white transition-colors duration-200">
                        View All
                        <FaArrowRight className="text-xs" />
                    </button>
                </div>
            </div>
        </section>
    );
}