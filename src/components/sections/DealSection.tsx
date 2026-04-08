import { ChevronRight, Clock } from "lucide-react";
import DealCard from "@/components/cards/DealCard";
import { dealCards } from "@/data/home";

type Deal = (typeof dealCards)[number];

interface DealSectionProps {
  title: string;
  showTimer?: boolean;
  deals?: Deal[];
}

export default function DealSection({ title, showTimer = false, deals = dealCards }: DealSectionProps) {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <h2 className="text-lg md:text-xl font-bold text-foreground">{title}</h2>
          <span className="w-2 h-2 rounded-full bg-success" />
          <ChevronRight className="h-5 w-5 text-foreground" />
        </div>
        {showTimer && (
          <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
            <Clock className="h-4 w-4" />
            29:12 min Left
          </div>
        )}
      </div>
      {/* Static cards for now; the data is already tuned to the design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, idx) => (
          <DealCard key={idx} {...deal} />
        ))}
      </div>
    </section>
  );
}
