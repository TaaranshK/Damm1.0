interface FoodPreferenceCardProps {
  item: {
    label: string;
    desc: string;
    originalPrice: number;
    price: number;
  };
}

export default function FoodPreferenceCard({ item }: FoodPreferenceCardProps) {
  return (
    <div className="border border-border rounded-xl p-5 flex items-start justify-between">
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
  );
}
