import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Loading from "../Loading";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { USER_BACKEND_API } from "../../utils/constant";

export default function AllOrganizers() {
  const [organizers, setOrganizers] = useState(null);

  useEffect(() => {
    const getOrganizers = async () => {
      try {
        const res = await axios.get(`${USER_BACKEND_API}/organizers`);

        if (res.data.success) {
          setOrganizers(res.data.organizers);
        } else {
          console.log(res.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getOrganizers();
  }, []);

  return (
    <section className="w-full py-10">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-black">Explore Organizers</h2>
        </div>
      </div>

      {/* Swiper Container */}
      <div className="relative bg-[#F2F5FF] border border-[#DFE9F4] rounded px-16 py-10 overflow-hidden shadow-sm">
        {/* Left Navigation */}
        <button className="organizer-prev absolute left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-[#DFE9F4] flex items-center justify-center text-[#054C73] hover:bg-[#054C73] hover:text-white shadow-md transition-all duration-300">
          <FaChevronLeft />
        </button>

        {/* Right Navigation */}
        <button className="organizer-next absolute right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-[#DFE9F4] flex items-center justify-center text-[#054C73] hover:bg-[#054C73] hover:text-white shadow-md transition-all duration-300">
          <FaChevronRight />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".organizer-prev",
            nextEl: ".organizer-next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 4,
            },

            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {organizers ? (
            organizers.map((organizer) => (
              <SwiperSlide key={organizer._id}>
                <div className="flex flex-col items-center text-center group cursor-pointer ">
                  {/* Profile Image */}
                  <div className="relative mb-4 group/image">
                    {/* Image Container */}
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300">
                      {/* Actual Image */}
                      <img
                        src={
                          organizer?.profile_url ||
                          "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        }
                        alt={organizer?.name}
                        className="w-full h-full object-cover group-hover/image:scale-110 transition-all duration-500"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/image:opacity-100 rounded-full transition-all duration-300">
                        <span className="text-white text-sm font-medium">
                          More Info...
                        </span>
                      </div>
                    </div>

                    {/* Online Badge */}
                    <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white"></div>
                  </div>

                  {/* Owner */}
                  <p className="text-[#666666] text-sm font-medium mt-1 line-clamp-1">
                    {organizer?.name}
                  </p>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <Loading />
          )}
        </Swiper>
      </div>
    </section>
  );
}
