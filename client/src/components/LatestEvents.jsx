import LatestEventsCard from "./LatestEventsCard";
import { useSelector } from "react-redux";
import Loading from "./Loading";

export default function LatestEvents() {

    // const events = [
    //     {
    //         _id: 1,
    //         title: "AI Innovation Hackathon",
    //         description:
    //             "Build innovative AI solutions, collaborate with developers, and compete for exciting prizes in this 48-hour national level hackathon.",
    //         image:
    //             "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    //     },
    //     {
    //         _id: 2,
    //         title: "Frontend Bootcamp Workshop",
    //         description:
    //             "Learn React, Tailwind CSS, animations, and scalable frontend development with practical hands-on sessions.",
    //         image:
    //             "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    //     },
    //     {
    //         _id: 3,
    //         title: "Cyber Security Summit",
    //         description:
    //             "Explore ethical hacking, cybersecurity trends, and data protection strategies with industry experts and professionals.",
    //         image:
    //             "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop",
    //     },
    //     {
    //         _id: 4,
    //         title: "Startup Networking Meetup",
    //         description:
    //             "Connect with startup founders, investors, and tech enthusiasts while discussing innovative business ideas.",
    //         image:
    //             "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    //     },
    // ];
    const events = useSelector((state) => state.event.AllEvents);

    return (
        <section className="w-full py-20 bg-[#F2F5FF]">

            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="flex items-center justify-between mb-12">

                    <h2 className="text-3xl font-bold text-[#333333]">
                        Latest Events
                    </h2>

                    <button className="font-medium hover:underline border rounded px-3 py-1 hover:bg-gray-700 hover:text-white">
                        View All
                    </button>
                </div>

                {/* Events Grid */}
                {
                    events ?
                        (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                {events.slice(0, 4).map((event) => (
                                    <LatestEventsCard
                                        key={event._id}
                                        event={event}
                                    />
                                ))}
                            </div>
                        ) :
                        <Loading />
                }

            </div>
        </section>
    );
}