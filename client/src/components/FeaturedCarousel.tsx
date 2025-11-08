import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Artwork {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  description: string;
}

interface FeaturedCarouselProps {
  artworks: Artwork[];
}

export function FeaturedCarousel({ artworks }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
    console.log('Next artwork');
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
    console.log('Previous artwork');
  };

  const current = artworks[currentIndex];

  return (
    <div className="relative" data-testid="carousel-featured">
      <Card className="overflow-visible">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted">
            <img
              src={current.imageUrl}
              alt={current.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm text-primary font-semibold mb-2">FEATURED ARTWORK</p>
            <h3 className="font-display text-4xl font-bold mb-4">{current.title}</h3>
            <p className="text-lg text-muted-foreground mb-2">by {current.artist}</p>
            <p className="text-foreground/80 mb-6">{current.description}</p>
            <div className="flex gap-2">
              {artworks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted'
                  }`}
                  data-testid={`carousel-dot-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Card>
      
      <Button
        size="icon"
        variant="outline"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={previous}
        data-testid="button-carousel-previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        size="icon"
        variant="outline"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={next}
        data-testid="button-carousel-next"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
}
