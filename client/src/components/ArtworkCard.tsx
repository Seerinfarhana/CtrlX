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
      className="group overflow-visible hover-elevate cursor-pointer transition-all duration-300"
      onClick={onClick}
      data-testid={`card-artwork-${id}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <StatusBadge status={status} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-background">
            <h3 className="font-display text-xl font-semibold mb-1">{title}</h3>
            <p className="text-sm text-background/90">by {artist}</p>
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{views}</span>
          </div>
          <button
            onClick={handleLike}
            className="flex items-center gap-1 hover-elevate"
            data-testid={`button-like-${id}`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            <span>{likeCount}</span>
          </button>
        </div>
      </div>
    </Card>
  );
}
