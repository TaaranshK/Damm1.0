import { categoryCards } from "@/data/home";

export default function CategorySection() {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
            The World doesn't lack supply,<br />
            It lacks synchronization.
          </h2>
        </div>

        <div className="md:w-1/2 flex gap-4 overflow-x-auto">
          {categoryCards.map((cat) => (
            <div
              key={cat.name}
              className="flex-shrink-0 w-40 rounded-2xl overflow-hidden shadow-sm border border-border hover-scale cursor-pointer group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p className="text-center py-3 font-bold text-sm text-foreground">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
