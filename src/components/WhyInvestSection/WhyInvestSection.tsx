import type { PropsWithChildren } from "react";

const WhyInvestSection = () => {
  return (
    <div className="max-w-container w-full">
      {/* title */}
      <div className="pt-[32px] pc:pt-[48px] px-[48px] mb-[32px] pc:mb-[48px]">
        <h2 className="text-[48px] text-purple hidden pc:block">
          왜 여기에 투자해야 하는가?
        </h2>

        <h2 className="text-[32px] text-purple pc:hidden">
          왜 여기에
          <br />
          투자해야 하는가?
        </h2>
      </div>

      {/* content */}
      <ul className="flex flex-col gap-[32px] pc:gap-[48px] px-[16px] pc:px-[140px]">
        <TourItem
          name="무릉계곡 (국가명승 제37호)"
          image={`${
            import.meta.env.VITE_BASE
          }images/tourist-spot/MUREUNG_VALLEY.jpg`}
          location="강원도 동해시 삼화로 584"
        >
          <TourItemDescription
            title="특징"
            content="두타산과 청옥산을 배경으로 한 4km 석회암 계곡"
          />
          <TourItemDescription
            title="주요 볼거리"
            content={["무릉반석", "삼화사", "쌍폭포", "용추폭포", "선녀탕"]}
          />
        </TourItem>

        <TourItem
          name="대진해수욕장 (서핑 명소)"
          image={`${
            import.meta.env.VITE_BASE
          }images/tourist-spot/DAEJIN_BEACH.jpg`}
          location="강원도 동해시 대진동"
        >
          <TourItemDescription
            title="특징"
            content="낮은 수심과 적당한 파도로 서핑 최적지"
          />
          <TourItemDescription
            title="서핑 강습"
            content="라라서프 등 여러 서핑샵 운영"
          />
          <TourItemDescription
            title="주요 시설"
            content={["SURFING DAEJIN 포토존", "샤워실", "편의점"]}
          />
        </TourItem>

        <TourItem
          name="천곡황금박쥐동굴"
          image={`${
            import.meta.env.VITE_BASE
          }images/tourist-spot/CHEONGOK_CAVE.jpg`}
          location="강원도 동해시 동굴로 50"
        >
          <TourItemDescription
            title="특징"
            content="4~5억년 전 생성된 석회암 동굴, 황금박쥐 서식지, 국내 유일 도심 천연동굴"
          />
          <TourItemDescription
            title="관람구간"
            content="810m (총 길이 1,510m)"
          />
        </TourItem>

        <TourItem
          name="망상해수욕장 (국민관광지)"
          image={`${
            import.meta.env.VITE_BASE
          }images/tourist-spot/MANGSANG_BEACH.jpg`}
          location="강원도 동해시 동해대로 6270-10"
        >
          <TourItemDescription
            title="특징"
            content="2km 백사장, 얕은 수심(0.5~1.5m)의 가족 해수욕장"
          />
          <TourItemDescription
            title="주요 시설"
            content={["망상오토캠핑리조트", "한옥마을", "해뜰책뜰"]}
          />
          <TourItemDescription content="2018년 열린관광지 선정 (무장애 시설 완비)" />
        </TourItem>

        <TourItem
          name="어달해수욕장"
          image={`${
            import.meta.env.VITE_BASE
          }images/tourist-spot/EODAL_BEACH.jpg`}
          location="강원도 동해시 일출로 일대"
        >
          <TourItemDescription
            title="특징"
            content="조용한 해변, 오션뷰 카페와 펜션 밀집"
          />
          <TourItemDescription
            title="주요 시설"
            content={["어쩌다어달(카페&펜션)", "신비호텔 등"]}
          />
          <TourItemDescription
            title="주변 명소"
            content={["어달항", "묵호항"]}
          />
        </TourItem>

        <TourItem
          name="도째비골 스카이밸리"
          image={`${
            import.meta.env.VITE_BASE
          }images/tourist-spot/DOJJAEBIGOL_SKYVALLEY.jpg`}
          location="강원도 동해시 묵호진동 (묵호등대 옆)"
        >
          <TourItemDescription
            title="체험시설"
            content="스카이워크 59m 높이 하늘산책로"
          />
          <TourItemDescription
            title="스카이사이클"
            content="케이블 자전거 (15,000원)"
          />
          <TourItemDescription
            title="자이언트슬라이드"
            content="27m 미끄럼틀 (3,000원)"
          />
        </TourItem>

        <TourItem
          name="묵호등대 (해맞이 명소)"
          image={`${
            import.meta.env.VITE_BASE
          }images/tourist-spot/MUKHO_LIGHTHOUSE.jpg`}
          location="강원도 동해시 해맞이길 289"
        >
          <TourItemDescription
            title="특징"
            content="1963년 점등, 해발 67m 위치"
          />
          <TourItemDescription
            title="전망"
            content="동해바다, 두타산, 청옥산 조망"
          />
          <TourItemDescription
            title="영화 촬영지"
            content="‘미워도 다시 한번’, ‘찬란한 유산’"
          />
        </TourItem>

        <TourItem
          name="논골담길 (벽화마을)"
          image={`${
            import.meta.env.VITE_BASE
          }images/tourist-spot/NONGOL_MURAL_VILLAGE.jpg`}
          location="강원도 동해시 논골1길 일대"
        >
          <TourItemDescription
            title="특징"
            content="2010년부터 조성된 감성 스토리 마을"
          />
          <TourItemDescription
            title="코스"
            content={["등대오름길", "논골 1~3길"]}
          />
          <TourItemDescription
            title="주요 볼거리"
            content={["벽화", "바람의언덕", "까막바위"]}
          />
        </TourItem>
      </ul>
    </div>
  );
};

export default WhyInvestSection;

const TourItemDescription = ({
  title,
  content,
}: {
  title?: string;
  content?: string | string[];
}) => {
  if (!content) return;

  content = Array.isArray(content) ? content.join(", ") : content;

  return (
    <span className="text-[16px]">
      {title && <span className="font-[600]">{`${title}: `}</span>}
      <span>{content}</span>
    </span>
  );
};

const TourItem = ({
  name,
  image,
  location,
  children,
}: PropsWithChildren<{ name: string; image: string; location: string }>) => {
  return (
    <li key={name} className="flex flex-col gap-[16px]">
      <div className="w-full aspect-[358/500] pc:aspect-[920/500] rounded-[8px] overflow-hidden shadow-2xl">
        <img src={image} alt={name} className="w-full h-full object-fill" />
      </div>

      <p className="text-[28px] pc:text-[36px] font-light">{name}</p>

      <TourItemDescription title="위치" content={location} />

      {children}
    </li>
  );
};
