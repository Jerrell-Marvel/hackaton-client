import Image from "next/image";
import Banner from "@/assets/Promotion Banner [Group].png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Carousel() {
  return (
    <div className="bg-pink-200 relative">
      <div className="absolute top-1/2 z-20 text-3xl text-center left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1>Techno bank</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, nisi.</p>
      </div>

      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
          "--swiper-navigation-size": "28px",
          "--swiper-navigation-padding": "5px",
        }}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full"
      >
        <SwiperSlide className="w-full">
          <div className="w-full">
            <Image
              src={Banner}
              alt="banner"
              className="pointer-events-none w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="w-full">
            <Image
              src={Banner}
              alt="banner"
              className="pointer-events-none w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="w-full">
            <Image
              src={Banner}
              alt="banner"
              className="pointer-events-none w-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
