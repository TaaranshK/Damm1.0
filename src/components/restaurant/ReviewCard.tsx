import { Flag, Star, ThumbsUp } from "lucide-react";

interface ReviewCardProps {
  review: {
    name: string;
    rating: number;
    date: string;
    text: string;
    likes: number;
  };
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="border border-border rounded-xl p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{review.name}</p>
          <div className="flex items-center gap-1">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-primary text-primary" />
            ))}
            <span className="text-xs text-muted-foreground ml-2">· {review.date}</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{review.text}</p>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
          <ThumbsUp className="h-3.5 w-3.5" /> {review.likes}
        </button>
        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
          <Flag className="h-3.5 w-3.5" /> Report
        </button>
      </div>
    </div>
  );
}
