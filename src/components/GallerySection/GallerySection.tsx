import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { GALLERY_IMAGES } from "./constant";

const GallerySection = () => {
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const thumbsSwiperRef = useRef<SwiperType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full max-w-container mx-auto py-[32px] pc:py-[48px]">
      <h2 className="text-[32px] pc:text-[48px] text-purple px-[16px] pc:px-[48px] mb-[24px]">
        다온스테이 갤러리
      </h2>

      {/* 상단 메인 이미지 Swiper */}
      <div className="relative w-full aspect-[390/450] pc:aspect-[1104/600] mb-6 px-0 pc:px-[48px]">
        <Swiper
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            const index = swiper.realIndex;
            setSelectedIndex(index);
            thumbsSwiperRef.current?.slideToLoop(index); // ✅ 하단도 스크롤
          }}
          loop={true}
          className="rounded-[0px] pc:rounded-[12px] overflow-hidden w-full h-full"
        >
          {GALLERY_IMAGES.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`main-${idx}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 하단 썸네일 Swiper */}
      <div className="w-full px-[16px] pc:px-[48px]">
        <Swiper
          onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
          watchSlidesProgress
          loop={true}
          slidesPerView="auto"
          spaceBetween={16}
          className="w-full"
        >
          {GALLERY_IMAGES.map((img, idx) => (
            <SwiperSlide
              key={idx}
              className="!w-[103px] pc:!w-[137px] flex-shrink-0"
              onClick={() => {
                mainSwiperRef.current?.slideToLoop(idx); // ✅ 메인 슬라이드 이동
                thumbsSwiperRef.current?.slideToLoop(idx); // ✅ 하단도 스크롤 (중복 클릭 보정)
              }}
            >
              <div className="w-full aspect-square">
                <img
                  src={img}
                  alt={`thumb-${idx}`}
                  className={`w-full h-full object-cover rounded-[6px] p-[2px] box-border cursor-pointer transition-all duration-200
                    ${
                      selectedIndex === idx
                        ? "border-2 border-purple"
                        : "border border-transparent"
                    }
                  `}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySection;
