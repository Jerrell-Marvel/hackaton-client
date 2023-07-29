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
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
          "--swiper-navigation-size": "28px",
          "--swiper-navigation-padding": "5px",
        }}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
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
      >
        <SwiperSlide>
          <Image
            src={Banner}
            alt="banner"
            className="mx-auto pointer-events-none"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Banner}
            alt="banner"
            className="mx-auto pointer-events-none"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Banner}
            alt="banner"
            className="mx-auto pointer-events-none"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Banner}
            alt="banner"
            className="mx-auto pointer-events-none"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Banner}
            alt="banner"
            className="mx-auto pointer-events-none"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
