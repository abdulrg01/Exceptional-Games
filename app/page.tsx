import { Promotions } from "@/components/sections/promotions";
import { ServiceDepartment } from "@/components/sections/service-department";
import HomeHero from "@/components/sections/home-hero";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
     <NavBar />

      <main>
        <HomeHero />
        <FeaturedSection />
        {/* <Promotions />
        <ServiceDepartment /> */}
      </main>

      <Footer />
    </div>
  );
}

export const runtime = "edge";
