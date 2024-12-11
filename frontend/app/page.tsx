
import HeroSection from "./components/HeroSection";
import BannerComponent from "./components/home/BannerComponent";
import ClickableSlider from "./components/home/ClickableSlider";
import CompaniesSection from "./components/home/CompaniesSection";
import CourseCards from "./components/home/CourseCards";
import FreeSeminarSection from "./components/home/FreeSeminarSection";
import ITExpertSection from "./components/home/ITExpertSection";

export default function Home() {
  return (
    <div>
      <BannerComponent />
      <ClickableSlider />
      <CourseCards />
      <FreeSeminarSection />
      <ITExpertSection />
      <CompaniesSection />
      {/* <HeroSection /> */}
    </div>
  );
}
