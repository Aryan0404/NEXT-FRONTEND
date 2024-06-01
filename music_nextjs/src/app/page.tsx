import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import Why_chhose_us from "./components/Why_chhose_us";
import InfiniteMovingCardsDemo from "./components/TestimonialCards";
import UpcomingWebinars from "./components/Upcoming_Webinars";
import Instructors from "./components/InstructorsPath";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="  bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCourses />
        <Why_chhose_us />
        <InfiniteMovingCardsDemo />
        <UpcomingWebinars />
        <Instructors />
        <Footer />
      </main>
    </>
  );
}
