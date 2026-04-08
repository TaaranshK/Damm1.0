import { useEffect, useState } from "react";
import { heroSlides } from "@/data/home";

const AUTOPLAY_MS = 5000;

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simple autoplay to match the comp; no pause/hover behavior by design.
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[280px] md:h-[400px] overflow-hidden">
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              idx === currentIndex ? "bg-primary-foreground" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
