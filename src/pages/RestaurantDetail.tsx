import { useState } from "react";
import { ChevronLeft, ChevronRight, Edit, Star } from "lucide-react";
import { Link } from "react-router-dom";
import AppPromoBanner from "@/components/sections/AppPromoBanner";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ReviewCard from "@/components/restaurant/ReviewCard";
import TabBar from "@/components/restaurant/TabBar";
import { detailTabs, menuImages, photoImages, restaurantInfo, reviews } from "@/data/restaurant";

export default function RestaurantDetail() {
  const [activeTab, setActiveTab] = useState(detailTabs[0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-8 bg-primary rounded-full" />
                <div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-semibold text-foreground">{restaurantInfo.rating}</span>
                    <span className="text-sm text-muted-foreground">({restaurantInfo.reviewCount} Reviews)</span>
                  </div>
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">{restaurantInfo.name}</h1>
              <p className="text-sm text-muted-foreground mb-4">{restaurantInfo.address}</p>

              <div className="mb-4">
                <p className="text-sm font-bold text-foreground">{restaurantInfo.dealLabel}</p>
                <p className="text-lg font-extrabold text-foreground">{restaurantInfo.dealTitle}</p>
                <p className="text-sm text-urgency font-semibold mt-1">Deal Ends in {restaurantInfo.dealEndsIn} Mins</p>
              </div>

              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-foreground text-card px-6 py-3 rounded-lg font-bold text-sm w-fit hover:opacity-90 transition-opacity"
              >
                Book Table 🪑
              </Link>
            </div>

            <div className="md:w-1/2 p-4">
              <div className="rounded-xl overflow-hidden aspect-[16/10]">
                <img src={restaurantInfo.heroImage} alt={restaurantInfo.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs are visual for now; content stays static */}
        <TabBar tabs={detailTabs} activeTab={activeTab} onChange={setActiveTab} />

        <div className="py-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="text-sm font-medium text-foreground mt-2 underline">View more</button>
        </div>

        <div className="py-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Menu</h2>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {menuImages.map((img, idx) => (
                <div key={idx} className="flex-shrink-0 w-48 rounded-xl overflow-hidden shadow-sm border border-border">
                  <img src={img} alt={`Menu ${idx + 1}`} className="w-full h-64 object-cover" loading="lazy" />
                </div>
              ))}
            </div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center border border-border hover:bg-muted transition-colors">
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center border border-border hover:bg-muted transition-colors">
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>

        <div className="py-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {photoImages.map((img, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer">
                <img
                  src={img}
                  alt={`Photo ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                {idx === 3 && (
                  <div className="absolute inset-0 bg-foreground/50 flex flex-col items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">231+ images</span>
                    <span className="text-primary-foreground text-sm underline">View all</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Reviews</h2>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
              <Edit className="h-4 w-4" />
              Write a review
            </button>
          </div>
          <div className="space-y-4">
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </div>
          <button className="mt-4 text-sm font-medium text-foreground hover:text-primary transition-colors">
            See all (131) reviews →
          </button>
        </div>
      </div>

      <AppPromoBanner />
      <Footer />
    </div>
  );
}
