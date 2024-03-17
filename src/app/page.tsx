import FeaturedCourses from "../components/FeaturedCourses";
import Herosection from "../components/Herosection";
import MusicSchoolTestimonials from "../components/TestimonialCard";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
    </main>
  );
}
