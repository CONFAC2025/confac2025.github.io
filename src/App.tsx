import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ApplicantListSection,
  FormSection,
  GallerySection,
  GrowthPotentialSection,
  Header,
  HeroSection,
  ROIAnalysisSection,
  TouristStatsSection,
  VideoSection,
  WhyInvestSection,
} from "./components";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 헤더 영역 */}
      <Header />
      <main>
        {/* 최상단 */}
        <HeroSection />
        {/* 펜션 홍보 영상 */}
        <VideoSection />
        {/* 왜 여기에 투자해야 하는가? */}
        <WhyInvestSection />
        {/* 동해시 관광객 현황 */}
        <TouristStatsSection />
        {/* 실제 수익률 분석 */}
        <ROIAnalysisSection />
        {/* 향후 성장동력 */}
        <GrowthPotentialSection />

        {/* 관광인프라 */}
        {/* TODO 해야함 */}

        {/* 다온스테이 갤러리 */}
        <GallerySection />

        {/* 상담 신청 폼 */}
        <FormSection />

        {/* 지원자 목록 테이블 */}
        <ApplicantListSection />
        {/*  */}
      </main>
      {/* 푸터 영역 */}
    </QueryClientProvider>
  );
};

export default App;
