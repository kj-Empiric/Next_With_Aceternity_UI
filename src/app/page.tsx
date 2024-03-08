import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import { BackgroundBoxesDemo } from "@/components/backgroundBoxes";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs/>
      <TestimonialCard/>
      <UpcomingWebinar/>
      <Instructors/>
      <BackgroundBoxesDemo/>
      <Footer/>
    </main>
  );
}
