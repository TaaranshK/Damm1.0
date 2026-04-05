import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, ThumbsUp, Flag, Edit } from "lucide-react";
import Navbar from "@/components/Navbar";
import AppPromoBanner from "@/components/AppPromoBanner";
import Footer from "@/components/Footer";
import restaurantHero from "@/assets/restaurant-hero.jpg";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import menuImg from "@/assets/menu-1.jpg";
import { Link } from "react-router-dom";

const tabs = ["About", "Menu", "Photos", "Reviews"];

const reviews = [
  {
    name: "Anant Sharma",
    rating: 5,
    date: "Dec 2025",
    text: "Have a nice spread and big space. Liked poha, khamand, idli, have good desserts option. Khushhal and Rajesh, Santu provided great service.",
    likes: 5,
  },
  {
    name: "Anant Sharma",
    rating: 5,
    date: "Dec 2025",
    text: "Have a nice spread and big space, liked poha, idli.",
    likes: 0,
  },
  {
    name: "Anant Sharma",
    rating: 5,
    date: "Dec 2025",
    text: "Have a nice spread and big space. Liked poha, khamand, idli, have good desserts option. Khushhal and Rajesh, Santu provided great service.",
    likes: 5,
  },
];

const RestaurantDetail = () => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-6 py-8">
        {/* Header Card */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Info */}
            <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-8 bg-primary rounded-full" />
                <div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-semibold text-foreground">4.5</span>
                    <span className="text-sm text-muted-foreground">(129 Reviews)</span>
                  </div>
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">Barbeques Nation</h1>
              <p className="text-sm text-muted-foreground mb-4">Near Rehman Sweets, South Delhi-110019</p>

              <div className="mb-4">
                <p className="text-sm font-bold text-foreground">Last Minutes Deal</p>
                <p className="text-lg font-extrabold text-foreground">Grab 70% Off on Dinner</p>
                <p className="text-sm text-urgency font-semibold mt-1">Deal Ends in 17:45 Mins</p>
              </div>

              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-foreground text-card px-6 py-3 rounded-lg font-bold text-sm w-fit hover:opacity-90 transition-opacity"
              >
                Book Table 🪑
              </Link>
            </div>

            {/* Right Images */}
            <div className="md:w-1/2 p-4">
              <div className="rounded-xl overflow-hidden aspect-[16/10]">
                <img src={restaurantHero} alt="Barbeques Nation" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 mt-8 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-semibold transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* About */}
        <div className="py-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="text-sm font-medium text-foreground mt-2 underline">View more</button>
        </div>

        {/* Menu Section */}
        <div className="py-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Menu</h2>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {[menuImg, menuImg, menuImg, menuImg].map((img, idx) => (
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

        {/* Photos Section */}
        <div className="py-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[food1, food2, food3, restaurantHero].map((img, idx) => (
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

        {/* Reviews Section */}
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
              <div key={idx} className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{review.name}</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                      <span className="text-xs text-muted-foreground ml-2">· {review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{review.text}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <ThumbsUp className="h-3.5 w-3.5" /> {review.likes}
                  </button>
                  <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <Flag className="h-3.5 w-3.5" /> Report
                  </button>
                </div>
              </div>
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
};

export default RestaurantDetail;
