import {
  GrowthPotentialSection,
  Header,
  HeroSection,
  ROIAnalysisSection,
  TouristStatsSection,
  VideoSection,
  WhyInvestSection,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <WhyInvestSection />
        <TouristStatsSection />
        <ROIAnalysisSection />
        <GrowthPotentialSection />
      </main>
    </>
  );
};

export default App;
