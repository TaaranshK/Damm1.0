import { ChevronDown } from "lucide-react";

const filters = ["Sort By", "Last Minute Deal", "Within 4km", "Rating", "Pure Veg", "Vegan"];

const FilterBar = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-4 overflow-x-auto">
      <div className="flex items-center gap-2 flex-shrink-0">
        {filters.map((filter) => (
          <button
            key={filter}
            className="flex items-center gap-1 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground bg-card hover:bg-muted transition-colors whitespace-nowrap"
          >
            {filter}
            {filter === "Sort By" && <ChevronDown className="h-3.5 w-3.5" />}
          </button>
        ))}
      </div>
      <button className="flex items-center gap-1 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground bg-card hover:bg-muted transition-colors whitespace-nowrap flex-shrink-0">
        Mumbai
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default FilterBar;
