import { Card } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";
import { Eye, Heart } from "lucide-react";
import { useState } from "react";

interface ArtworkCardProps {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  status: "available" | "reserved" | "sold";
  category?: string;
  views?: number;
  likes?: number;
  onClick?: () => void;
}

export function ArtworkCard({
  id,
  title,
  artist,
  imageUrl,
  status,
  category,
  views = 0,
  likes = 0,
  onClick,
}: ArtworkCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    console.log(`Artwork ${id} ${isLiked ? 'unliked' : 'liked'}`);
  };

  return (
    <Card
      className="group overflow-visible hover-lift cursor-pointer transition-smooth border-2 border-muted"
      onClick={onClick}
      data-testid={`card-artwork-${id}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted p-2">
        <div className="relative w-full h-full overflow-hidden rounded-sm">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 className="font-display text-2xl font-bold mb-2 text-background transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {title}
              </h3>
              <p className="text-background/90 text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                by {artist}
              </p>
              {category && (
                <p className="text-primary text-sm uppercase tracking-wider mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {category}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <StatusBadge status={status} />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold mb-1 truncate">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">by {artist}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{views}</span>
            </div>
            <button
              onClick={handleLike}
              className="flex items-center gap-1 hover-elevate transition-smooth"
              data-testid={`button-like-${id}`}
            >
              <Heart className={`w-4 h-4 transition-all ${isLiked ? 'fill-primary text-primary scale-110' : ''}`} />
              <span>{likeCount}</span>
            </button>
          </div>
          {category && (
            <span className="text-xs uppercase tracking-wider text-primary font-medium">
              {category}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
