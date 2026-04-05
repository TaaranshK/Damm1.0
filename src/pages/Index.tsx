import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import FilterBar from "@/components/FilterBar";
import DealSection from "@/components/DealSection";
import CategorySection from "@/components/CategorySection";
import AppPromoBanner from "@/components/AppPromoBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <div className="container mx-auto px-6">
        <FilterBar />
        <DealSection title="Live Buffet Deals starting from @599" showTimer />
        <DealSection title="Grab 70% off near you" showTimer />
        <CategorySection />
        <DealSection title="Upcoming deals" />
        <DealSection title="Live Buffet Deals starting from @599" showTimer />
      </div>
      <AppPromoBanner />
      <Footer />
    </div>
  );
};

export default Index;
