import { Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import RestaurantDetail from "@/pages/RestaurantDetail";
import BookingPage from "@/pages/BookingPage";
import NotFound from "@/pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
