import heroImg from "@/assets/hero-buffet.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import lunchImg from "@/assets/lunch.jpg";
import dinnerImg from "@/assets/dinner.jpg";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";

export const heroSlides = [heroImg, heroImg, heroImg, heroImg];

export const filterChips = ["Sort By", "Last Minute Deal", "Within 4km", "Rating", "Pure Veg", "Vegan"];

export const categoryCards = [
  { name: "Break Fast", image: breakfastImg },
  { name: "Lunch", image: lunchImg },
  { name: "Dinner", image: dinnerImg },
];

const baseDeal = {
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
};

export const dealCards = [
  { ...baseDeal, image: food1 },
  { ...baseDeal, image: food2 },
  { ...baseDeal, image: food3 },
];
