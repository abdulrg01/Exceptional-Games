import { Promotions } from "@/components/sections/promotions";
import { ServiceDepartment } from "@/components/sections/service-department";
import HomeHero from "@/components/sections/home-hero";
import FeaturedSection from "@/components/FeaturedSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HomeHero />
        <FeaturedSection />
        {/* <Promotions />
        <ServiceDepartment /> */}
      </main>
    </div>
  );
}

export const runtime = "edge";
