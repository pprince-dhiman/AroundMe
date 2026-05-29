import { useSelector } from "react-redux";
import WorkshopCard from "./cards/WorkshopCard";
import Loading from "../Loading";

export default function TrendingWorkshops() {
  const workshops = useSelector((state) => state.workshop.allWorkshops);

  // Trending by views
  const trendingWorkshops = workshops
    ? [...workshops].sort((a, b) => b.views - a.views )
    : null;

  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Trending Workshops
          </h2>

          {/* Description */}
          <p className="max-w-3xl text-[#666666] leading-8 text-base md:text-lg">
            Explore the most popular workshops gaining attention from students,
            developers, and creators across different technologies and creative
            domains.
          </p>
        </div>

        {workshops && (
          <button className="px-6 py-2 border border-[#054C73] rounded-md cursor-pointer">
            View All
          </button>
        )}
      </div>

      {/* Trending Workshops */}
      {trendingWorkshops ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {trendingWorkshops.slice(0, 3).map((workshop) => (
            <WorkshopCard key={workshop._id} workshop={workshop} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}
