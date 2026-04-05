import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import AppPromoBanner from "@/components/AppPromoBanner";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const steps = ["Select Deal", "Checkout", "Payment", "Confirmation"];
const mealTypes = ["Breakfast", "Lunch", "Dinner"];
const timeSlots = ["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"];

const foodItems = [
  { label: "Veg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia...", originalPrice: 1999, price: 899 },
  { label: "Veg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia...", originalPrice: 1999, price: 899 },
  { label: "Veg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia...", originalPrice: 1999, price: 899 },
  { label: "Veg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia...", originalPrice: 1999, price: 899 },
];

const BookingPage = () => {
  const [currentStep] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState("Dinner");
  const [selectedTime, setSelectedTime] = useState("7:00 PM");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-6 py-8 max-w-3xl">
        {/* Progress Stepper */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, idx) => (
            <div key={step} className="flex items-center gap-2 flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                    idx < currentStep
                      ? "bg-foreground text-card border-foreground"
                      : idx === currentStep
                      ? "border-foreground text-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {idx < currentStep ? <Check className="h-4 w-4" /> : idx + 1}
                </div>
                <span className="text-[10px] text-muted-foreground mt-1 whitespace-nowrap">{step}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${idx < currentStep ? "bg-foreground" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link to="/restaurant/1" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors">
            <ArrowLeft className="h-4 w-4 text-foreground" />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-foreground">Complete Your Booking</h1>
            <p className="text-xs text-muted-foreground">Add details to reserve your buffet at Barbecue World</p>
          </div>
        </div>

        {/* Restaurant + Date */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-extrabold text-foreground">Barbecue Nation</h2>
          <p className="text-base font-bold text-foreground">17th March, 2026</p>
        </div>

        {/* Offer + Meal Type */}
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

        {/* Time Slots */}
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

        {/* Guest & Food Preference */}
        <h3 className="text-lg font-bold text-foreground mb-4">Guest & Food Preference</h3>
        <div className="space-y-4 mb-6">
          {foodItems.map((item, idx) => (
            <div key={idx} className="border border-border rounded-xl p-5 flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 border-2 border-success rounded flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-sm bg-success" />
                  </span>
                  <span className="text-sm font-bold text-foreground">{item.label}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-1">{item.desc}</p>
                <button className="text-xs text-primary font-medium">View More</button>
              </div>
              <div className="text-right flex-shrink-0 ml-4">
                <p className="text-xs text-muted-foreground mb-0.5">Last Minutes Deal 70% Discount</p>
                <p className="text-xs text-muted-foreground line-through">₹{item.originalPrice}</p>
                <p className="text-lg font-extrabold text-primary">₹{item.price}</p>
                <button className="mt-1 px-5 py-1.5 border border-border rounded-lg text-sm font-semibold text-foreground hover:bg-muted transition-colors">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
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
};

export default BookingPage;
