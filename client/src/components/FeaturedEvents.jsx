
import {
    FaArrowRight,
} from "react-icons/fa";
import FeaturedEventsCard from "./FeaturedEventsCard";

const events = [
    {
        _id: 1,
        title: "CodeVerse HackFest 2026",
        description:
            "A 48-hour national-level hackathon focused on AI, Web Development, Cybersecurity and innovation.",
        category: "Hackathon",
        thumbnail:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        mode: "Offline",
        startDate: "20 June 2026",
        endDate: "22 June 2026",
        city: "Noida",
        state: "Uttar Pradesh",
        participants: 500,
        currentParticipants: 120,
        isFree: false,
        amount: 299,
        currency: "INR",
        discount: 20,
        sponsors: ["GitHub", "MongoDB", "Vercel"],
    },
    {
        _id: 2,
        title: "Design Sprint Summit",
        description:
            "Collaborative UI/UX event for designers and frontend developers.",
        category: "Workshop",
        thumbnail:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        mode: "Online",
        startDate: "12 July 2026",
        endDate: "13 July 2026",
        city: "Remote",
        state: "",
        participants: 300,
        currentParticipants: 90,
        isFree: true,
        amount: 0,
        currency: "INR",
        discount: 0,
        sponsors: ["Figma", "Adobe"],
    },
    {
        _id: 3,
        title: "AI Builders Conference",
        description:
            "Learn modern AI engineering, agents, RAG systems and production deployment.",
        category: "Conference",
        thumbnail:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        mode: "Offline",
        startDate: "10 August 2026",
        endDate: "11 August 2026",
        city: "Bangalore",
        state: "Karnataka",
        participants: 1000,
        currentParticipants: 640,
        isFree: false,
        amount: 799,
        currency: "INR",
        discount: 10,
        sponsors: ["OpenAI", "AWS"],
    },
    {
        _id: 4,
        title: "Frontend Fiesta",
        description:
            "A community-driven frontend event focused on React, animations and UI engineering.",
        category: "Meetup",
        thumbnail:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        mode: "Offline",
        startDate: "5 September 2026",
        endDate: "5 September 2026",
        city: "Delhi",
        state: "India",
        participants: 250,
        currentParticipants: 180,
        isFree: true,
        amount: 0,
        currency: "INR",
        discount: 0,
        sponsors: ["Vercel", "Netlify"],
    },
];

export default function FeaturedEvents() {
    return (
        <section className="bg-[#f5f7fb] py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Featured Events
                        </h2>

                        <p className="text-gray-500 mt-2 text-sm">
                            Explore trending hackathons, workshops and tech events.
                        </p>
                    </div>

                    <button className="flex items-center gap-2 text-sm font-medium transition  border rounded px-3 py-1 hover:bg-gray-700 hover:text-white">
                        View All
                        <FaArrowRight className="text-xs" />
                    </button>
                </div>

                {/* GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
                    {events.slice(0,4).map((event) => <FeaturedEventsCard key={event._id} event={event}/>)}
                </div>
            </div>
        </section>
    );
}