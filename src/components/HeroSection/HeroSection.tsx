import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-container">
      {/* swiper */}
      <div className="relative w-full h-[313px] pc:h-[510px]">
        <Swiper
          slidesPerView={1}
          loop
          spaceBetween={0}
          className="h-full w-full"
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000 }}
          navigation={{
            prevEl: ".custom-swiper-prev",
            nextEl: ".custom-swiper-next",
          }}
        >
          {Array.from({ length: 15 }, (_, i) => (
            <SwiperSlide className="h-full w-full">
              <img
                src={`${import.meta.env.VITE_BASE}images/image-${i + 1}.jpg`}
                className="object-cover h-full w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* only pc absolute box */}
        <div className="absolute left-[107px] top-[74px] p-[32px] bg-[rgba(255,255,255,0.8)] z-10 hidden pc:flex flex-col rounded-[8px] text-[48px] font-medium leading-14 w-[460px]">
          <p>자연과 수익,</p>
          <p className="mb-[8px]">그 사이의 투자처</p>

          <p className="text-[22px] font-light mb-[32px] leading-10">
            동해 바다 위 프리미엄 풀빌라 분양
          </p>

          {/* button */}
          <button
            className="p-[14px_16px_12px_16px] font-light text-[20px] w-fit border-purple border-[1px] leading-10 bg-white rounded-[4px] text-purple tracking-wider cursor-pointer h-[46px] flex items-center justify-center"
            onClick={scrollToForm}
          >
            상담 신청하기
          </button>
        </div>

        {/* controller */}
        <button
          className="custom-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[24px] h-[24px] pc:w-[48px] pc:h-[48px] bg-[rgba(255,255,255,0.6)] flex items-center justify-center rounded-tr-[8px] rounded-br-[8px] cursor-pointer"
          ref={prevRef}
        >
          {/* 왼쪽 화살표 아이콘 또는 텍스트 */}
          <span className="material-symbols-outlined text-purple w-full !text-[20px] pc:!text-[40px] !font-medium">
            keyboard_arrow_left
          </span>
        </button>

        <button
          className="custom-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[24px] h-[24px] pc:w-[48px] pc:h-[48px] bg-[rgba(255,255,255,0.6)] flex items-center justify-end rounded-tl-[8px] rounded-bl-[8px] cursor-pointer"
          ref={nextRef}
        >
          {/* 오른쪽 화살표 아이콘 또는 텍스트 */}
          <span className="material-symbols-outlined text-purple !text-[20px] pc:!text-[40px] !font-medium">
            keyboard_arrow_right
          </span>
        </button>
      </div>

      {/* only mobile hero box */}
      <div className="pc:hidden flex flex-col w-full border-[1px] border-border-gray p-[32px] rounded-bl-[8px] rounded-br-[8px] shadow-sm">
        <div className="font-medium text-[32px] leading-9 mb-[8px]">
          <p>자연과 수익,</p>
          <p>그 사이의 투자처</p>
        </div>

        <p className="font-light mb-[32px]">
          동해 바다 위 프리미엄 풀빌라 분양
        </p>

        <button
          className="pt-[14px] pb-[12px] text-[16px] w-full border-purple border-[1px] leading-10 bg-white rounded-[4px] text-purple tracking-wider cursor-pointer h-[46px] flex items-center justify-center"
          onClick={scrollToForm}
        >
          상담 신청하기
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
