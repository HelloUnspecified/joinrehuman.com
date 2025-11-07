import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

function TestimonialSlide({ clientName, clientPosition, clientImage, clientWords }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 350;
  const shouldTruncate = clientWords?.length > characterLimit;
  const displayText = isExpanded || !shouldTruncate
    ? clientWords
    : `${clientWords.substring(0, characterLimit)}...`;

  return (
    <div className="swiper-slide">
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-[90px] xl:gap-[134px] pb-[60px]">
        <div className="h-64 w-64 overflow-hidden rounded-[10px] lg:h-[431px] lg:w-[416px] shrink-0">
          <img
            src={clientImage}
            alt="testimonial-img"
            width="416"
            height="431"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 text-ColorMidnightMoss">
          <blockquote className="mb-6 text-xl font-semibold -tracking-[1px] lg:text-2xl xl:text-3xl">
            {displayText}
          </blockquote>
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mb-8 text-base font-semibold text-ColorMidnightMoss/70 hover:text-ColorMidnightMoss transition-colors underline"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
          <div className="">
            <span className="block text-xl font-semibold">
              {clientName}
            </span>
            <span className="block">{clientPosition}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SwiperComponent({ data }) {
  useEffect(() => {
    import("swiper/css");
    import("swiper/css/navigation");
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      loop
      navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
    >
      {data?.map(
        ({ clientName, clientPosition, clientImage, clientWords }, index) => {
          return (
            <SwiperSlide key={`${clientName}-${index}`}>
              <TestimonialSlide
                clientName={clientName}
                clientPosition={clientPosition}
                clientImage={clientImage}
                clientWords={clientWords}
              />
            </SwiperSlide>
          );
        },
      )}
    </Swiper>
  );
}

export default SwiperComponent;
