import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-buffet.jpg";

const slides = [heroImg, heroImg, heroImg, heroImg];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[280px] md:h-[400px] overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground text-center px-4 drop-shadow-xl leading-tight">
          Grab 70% Of On your Favorite Cuisines
        </h1>
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              idx === current ? "bg-primary-foreground" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
