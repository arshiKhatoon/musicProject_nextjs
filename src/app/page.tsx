import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructor";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home(){
  return(
  <main className="min-h-screen bg-black/[111] antialised bg-grid-white/[0.02]">
  <HeroSection></HeroSection>
  <FeaturedCourses></FeaturedCourses>
  <WhyChooseUs></WhyChooseUs>
  <MusicSchoolTestimonials></MusicSchoolTestimonials>
  <UpcomingWebinars></UpcomingWebinars>
  <Instructors></Instructors>
  </main>)
}