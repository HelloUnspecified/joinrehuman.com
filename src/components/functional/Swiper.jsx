import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function SwiperComponent({ data }) {
  useEffect(() => {
    import("swiper/css");
  }, []);
  return (
    <Swiper
      slidesPerView={4}
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        450: {
          slidesPerView: 2,
        },
        842: {
          slidesPerView: 3,
        },
        1100: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 5,
        },
      }}
    >
      {data?.map((image, index) => {
        return (
          <SwiperSlide
            key={`${image}-${index}`}
            className="!flex justify-center sm:px-0 px-5"
          >
            <img
              src={image}
              alt="brand-5"
              width="186"
              height="46"
              className="h-auto w-fit"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperComponent;
