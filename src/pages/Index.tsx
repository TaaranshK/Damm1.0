import AppPromoBanner from "@/components/sections/AppPromoBanner";
import CategorySection from "@/components/sections/CategorySection";
import DealSection from "@/components/sections/DealSection";
import FilterBar from "@/components/sections/FilterBar";
import HeroCarousel from "@/components/sections/HeroCarousel";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const topDealSections = [
  { title: "Live Buffet Deals starting from @599", showTimer: true },
  { title: "Grab 70% off near you", showTimer: true },
];

const bottomDealSections = [
  { title: "Upcoming deals" },
  { title: "Live Buffet Deals starting from @599", showTimer: true },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <div className="container mx-auto px-6">
        <FilterBar />
        {topDealSections.map((section) => (
          <DealSection key={section.title} title={section.title} showTimer={section.showTimer} />
        ))}
        <CategorySection />
        {bottomDealSections.map((section) => (
          <DealSection key={section.title} title={section.title} showTimer={section.showTimer} />
        ))}
      </div>
      <AppPromoBanner />
      <Footer />
    </div>
  );
}
