import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

interface Artist {
  id: string;
  name: string;
  avatar?: string;
  specialty: string;
  followers: number;
  verified?: boolean;
}

interface TrendingArtistsProps {
  artists: Artist[];
  onArtistClick?: (id: string) => void;
}

export function TrendingArtists({ artists, onArtistClick }: TrendingArtistsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="section-trending-artists">
      {artists.map((artist) => (
        <Card
          key={artist.id}
          className="p-6 hover-elevate cursor-pointer transition-all duration-300"
          onClick={() => {
            onArtistClick?.(artist.id);
            console.log(`Artist ${artist.id} clicked`);
          }}
          data-testid={`card-artist-${artist.id}`}
        >
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-24 h-24 mb-4 ring-2 ring-primary/20">
              <AvatarImage src={artist.avatar} alt={artist.name} />
              <AvatarFallback className="text-2xl font-display bg-primary/10 text-primary">
                {artist.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-display text-xl font-semibold">{artist.name}</h3>
              {artist.verified && (
                <Badge variant="default" className="text-xs">
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-3">{artist.specialty}</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{artist.followers.toLocaleString()} followers</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
