import { RatingStars } from '../RatingStars';
import { useState } from 'react';

export default function RatingStarsExample() {
  const [rating, setRating] = useState(3);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Interactive (click to rate)</p>
        <RatingStars value={rating} onChange={setRating} size="lg" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Read-only</p>
        <RatingStars value={4} readonly size="md" />
      </div>
    </div>
  );
}
