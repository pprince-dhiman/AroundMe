import {
    FaArrowRight,
} from "react-icons/fa";
import PopularEventsCard from "./cards/PopularEventsCard";
import { useSelector } from "react-redux";
import Loading from "../Loading";

export default function PopularEvents() {
    const events = useSelector((state) => state.event.AllEvents);
    const popularEvents = events && [...events].sort((a, b) => b.views - a.views);

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

                    {
                        events && <button className="hidden md:flex items-center gap-2 text-sm font-medium transition-colors duration-200  border rounded px-3 py-1 hover:bg-gray-700 hover:text-white">
                            View All
                            <FaArrowRight className="text-xs" />
                        </button>
                    }
                </div>

                {/* Events Grid */}
                {
                    events ?
                        (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {
                                popularEvents?.slice(0, 4)?.map((event) => <PopularEventsCard event={event} key={event._id} />)
                            }
                        </div>) :
                        <Loading />
                }


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