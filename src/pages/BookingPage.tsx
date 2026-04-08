import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AppPromoBanner from "@/components/sections/AppPromoBanner";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BookingStepper from "@/components/booking/BookingStepper";
import FoodPreferenceCard from "@/components/booking/FoodPreferenceCard";
import { bookingSteps, foodItems, mealTypes, timeSlots } from "@/data/booking";

export default function BookingPage() {
  // Visual-only stepper state in this static mock.
  const currentStep = 1;
  const [selectedMeal, setSelectedMeal] = useState("Dinner");
  const [selectedTime, setSelectedTime] = useState("7:00 PM");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-6 py-8 max-w-3xl">
        <BookingStepper steps={bookingSteps} currentStep={currentStep} />

        <div className="flex items-center gap-3 mb-6">
          <Link
            to="/restaurant/1"
            className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors"
          >
            <ArrowLeft className="h-4 w-4 text-foreground" />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-foreground">Complete Your Booking</h1>
            <p className="text-xs text-muted-foreground">Add details to reserve your buffet at Barbecue World</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-extrabold text-foreground">Barbecue Nation</h2>
          <p className="text-base font-bold text-foreground">17th March, 2026</p>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Offer Available</p>
          <div className="flex gap-2">
            {mealTypes.map((meal) => (
              <button
                key={meal}
                onClick={() => setSelectedMeal(meal)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  selectedMeal === meal
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:bg-muted"
                }`}
              >
                {meal}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Slots With Deal</p>
          <div className="flex gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedTime(slot)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${
                  selectedTime === slot
                    ? "bg-foreground text-card border-foreground"
                    : "bg-card border-border text-foreground hover:bg-muted"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-4">Guest & Food Preference</h3>
        <div className="space-y-4 mb-6">
          {foodItems.map((item, idx) => (
            <FoodPreferenceCard key={idx} item={item} />
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border pt-6">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Total Guest</p>
            <p className="text-lg font-extrabold text-primary">2 Adults & 1 Kid</p>
          </div>
          <Link
            to="#"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Proceed
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <AppPromoBanner />
        <Footer />
      </div>
    </div>
  );
}
