// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Image
          className="w-full h-[600px]"
          src="/slider1.jpeg"
          alt="slider1"
          width={1280}
          height={673}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="w-full h-[600px]"
          src="/slider2.jpeg"
          alt="slider1"
          width={1024}
          height={673}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
