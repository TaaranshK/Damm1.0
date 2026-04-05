import { Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface DealCardProps {
  image: string;
  name: string;
  location: string;
  rating: number;
  dishes: string;
  dessert: string;
  day: string;
  meal: string;
  tablesLeft: number;
  dealEndMins: string;
  discount: string;
}

const DealCard = ({
  image,
  name,
  location,
  rating,
  dishes,
  dessert,
  day,
  meal,
  tablesLeft,
  dealEndMins,
  discount,
}: DealCardProps) => {
  return (
    <Link to="/restaurant/1" className="block">
      <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover-scale cursor-pointer group">
        {/* Image with overlay */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 p-3">
            <span className="text-sm font-medium text-primary-foreground bg-primary/80 px-2 py-0.5 rounded">Grab</span>
            <p className="text-xl font-extrabold text-primary-foreground drop-shadow-lg">{discount}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-foreground text-sm">{name}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span className="text-sm font-semibold text-foreground">{rating}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">{location}</p>

          {/* Tags */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">{dishes}</span>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">{dessert}</span>
          </div>

          <p className="text-xs text-muted-foreground">· {day}, {meal}</p>

          {/* Urgency Strip */}
          <div className="flex items-center justify-between bg-muted rounded-lg px-3 py-2 mt-2">
            <span className="text-xs font-bold text-success">{tablesLeft} table{tablesLeft > 1 ? "s" : ""} Left!</span>
            <span className="text-xs font-bold text-urgency flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Deal Ends in {dealEndMins} mins
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DealCard;
