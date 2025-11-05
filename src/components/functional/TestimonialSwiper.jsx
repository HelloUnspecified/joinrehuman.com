import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function SwiperComponent({ data }) {
  useEffect(() => {
    import("swiper/css");
    import("swiper/css/navigation");
  }, []);
  return (
    <Swiper slidesPerView={1} loop navigation modules={[Navigation]}>
      {data?.map(
        ({ clientName, clientPosition, clientImage, clientWords }, index) => {
          return (
            <SwiperSlide key={`${clientName}-${index}`}>
              <div class="swiper-slide">
                <div class="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-[90px] xl:gap-[134px] pb-[60px]">
                  <div class="h-64 w-64 overflow-hidden rounded-[10px] lg:h-[431px] lg:w-[416px]">
                    <img
                      src={clientImage}
                      alt="testimonial-img"
                      width="416"
                      height="431"
                      class="h-full w-full object-cover"
                    />
                  </div>
                  <div class="flex-1 text-ColorMidnightMoss">
                    <blockquote class="mb-10 text-xl font-semibold -tracking-[1px] lg:text-2xl xl:text-3xl">
                      {clientWords}
                    </blockquote>
                    <div class="">
                      <span class="block text-xl font-semibold">
                        {clientName}
                      </span>
                      <span class="block">{clientPosition}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        },
      )}
    </Swiper>
  );
}

export default SwiperComponent;
