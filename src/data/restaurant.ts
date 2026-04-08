import restaurantHero from "@/assets/restaurant-hero.jpg";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import menuImg from "@/assets/menu-1.jpg";

export const restaurantInfo = {
  name: "Barbeques Nation",
  rating: 4.5,
  reviewCount: 129,
  address: "Near Rehman Sweets, South Delhi-110019",
  dealLabel: "Last Minutes Deal",
  dealTitle: "Grab 70% Off on Dinner",
  dealEndsIn: "17:45",
  heroImage: restaurantHero,
};

export const detailTabs = ["About", "Menu", "Photos", "Reviews"];

export const menuImages = [menuImg, menuImg, menuImg, menuImg];

export const photoImages = [food1, food2, food3, restaurantHero];

export const reviews = [
  {
    name: "Anant Sharma",
    rating: 5,
    date: "Dec 2025",
    text:
      "Have a nice spread and big space. Liked poha, khamand, idli, have good desserts option. Khushhal and Rajesh, Santu provided great service.",
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
    text:
      "Have a nice spread and big space. Liked poha, khamand, idli, have good desserts option. Khushhal and Rajesh, Santu provided great service.",
    likes: 5,
  },
];
