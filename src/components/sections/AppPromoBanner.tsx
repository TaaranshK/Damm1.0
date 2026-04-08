import phoneMockup from "@/assets/phone-mockup.png";

export default function AppPromoBanner() {
  return (
    <section className="bg-promo overflow-hidden">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 md:w-64 flex-shrink-0">
          <img src={phoneMockup} alt="Mobile App" className="w-full h-auto drop-shadow-2xl" loading="lazy" />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground leading-tight">
            Our Mobile<br />App is Live now!
          </h2>
          <p className="text-primary-foreground/80 mt-3 text-base">Use our App & get discount!</p>
          <button className="mt-6 bg-card text-foreground font-extrabold px-8 py-3 rounded-lg text-sm tracking-wider hover:bg-muted transition-colors">
            DOWNLOAD THE APP!
          </button>
        </div>
      </div>
    </section>
  );
}
