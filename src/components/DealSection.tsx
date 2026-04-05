import { ChevronRight, Clock } from "lucide-react";
import DealCard from "./DealCard";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";

const images = [food1, food2, food3];

interface DealSectionProps {
  title: string;
  showTimer?: boolean;
  showFullCards?: boolean;
}

const DealSection = ({ title, showTimer = false, showFullCards = true }: DealSectionProps) => {
  const deals = [0, 1, 2].map((i) => ({
    image: images[i],
    name: "Barbecue World",
    location: "Gulmohar Street, Mumbai",
    rating: 4.5,
    dishes: "50+ dishes",
    dessert: "Dessert included",
    day: "Tuesday",
    meal: "Dinner",
    tablesLeft: 2,
    dealEndMins: "17:45",
    discount: "70% Discount",
  }));

  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <h2 className="text-lg md:text-xl font-bold text-foreground">{title}</h2>
          <span className="w-2 h-2 rounded-full bg-success" />
          <ChevronRight className="h-5 w-5 text-foreground" />
        </div>
        {showTimer && (
          <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
            <Clock className="h-4 w-4" />
            29:12 min Left
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, idx) => (
          <DealCard key={idx} {...deal} />
        ))}
      </div>
    </section>
  );
};

export default DealSection;
