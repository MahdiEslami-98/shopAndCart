import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiArrowNarrowRight } from "react-icons/hi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="">
      <Outlet />
      <Swiper
        className="!fixed bottom-0 left-0 right-0 top-0 z-0"
        spaceBetween={5}
        slidesPerView={1}
        // autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide className="relative">
          <div className="absolute left-[15%] top-1/3 ">
            <p className="font-serif text-xl font-bold md:text-8xl">Welcome</p>
            <p className="pl-6 font-mono text-2xl">
              You can find every thing you need!!!
            </p>
            <Link
              to={"/products"}
              className="ml-6 mt-4 inline-flex items-center gap-x-4 rounded-md bg-orange-400 px-6 py-2 font-mono text-2xl text-white"
            >
              Get Start <HiArrowNarrowRight />
            </Link>
          </div>
          <img src="/girl-yellow.jpg" alt="" className="h-screen w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute left-[15%] top-1/3 ">
            <p className="max-w-lg font-serif text-xl font-bold md:text-6xl">
              Fast Delivery & Lowest Price
            </p>
            <p className="mt-4 max-w-lg pl-6 font-mono text-2xl">
              Get your shops in fastest ways & Lowest price you can find
            </p>
            <Link
              to={"/products"}
              className="ml-6 mt-4 inline-flex items-center gap-x-4 rounded-md bg-rose-400 px-6 py-2 font-mono text-2xl text-white"
            >
              Get Start <HiArrowNarrowRight />
            </Link>
          </div>
          <img src="/paper-bag.jpg" alt="" className="h-screen w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute left-[15%] top-1/3 text-white">
            <p className="max-w-lg font-serif text-xl font-bold md:text-6xl">
              We are open any hour of day
            </p>
            <p className="mt-4 max-w-lg pl-6 font-mono text-2xl">
              You can order 24 Hour of day and 7 days of week
            </p>
            <Link
              to={"/products"}
              className="ml-6 mt-4 inline-flex items-center gap-x-4 rounded-md bg-cyan-400 px-6 py-2 font-mono text-2xl text-white"
            >
              Get Start <HiArrowNarrowRight />
            </Link>
          </div>
          <img src="/open.jpg" alt="" className="h-screen w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomePage;
