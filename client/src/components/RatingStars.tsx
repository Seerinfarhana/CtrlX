import { Star } from "lucide-react";
import { useState } from "react";

interface RatingStarsProps {
  value?: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
}

export function RatingStars({ value = 0, onChange, readonly = false, size = "md" }: RatingStarsProps) {
  const [hoverRating, setHoverRating] = useState(0);
  
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const handleClick = (rating: number) => {
    if (!readonly && onChange) {
      onChange(rating);
      console.log(`Rating changed to: ${rating}`);
    }
  };

  const displayRating = hoverRating || value;

  return (
    <div className="flex gap-1" data-testid="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleClick(star)}
          onMouseEnter={() => !readonly && setHoverRating(star)}
          onMouseLeave={() => !readonly && setHoverRating(0)}
          className={`${readonly ? 'cursor-default' : 'cursor-pointer hover-elevate'} transition-colors`}
          disabled={readonly}
          data-testid={`star-${star}`}
        >
          <Star
            className={`${sizeClasses[size]} ${
              star <= displayRating
                ? "fill-primary text-primary"
                : "fill-none text-muted-foreground"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
