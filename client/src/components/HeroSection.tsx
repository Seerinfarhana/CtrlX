import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Museum_gallery_hero_background_165535d5.png";

interface HeroSectionProps {
  onRoleSelect: (role: string) => void;
}

export function HeroSection({ onRoleSelect }: HeroSectionProps) {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Museum gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-display text-6xl md:text-7xl font-bold text-background mb-6">
          Preserving Art & Culture
          <span className="block text-primary mt-2">Digitally</span>
        </h1>
        <p className="text-xl md:text-2xl text-background/90 mb-12 max-w-3xl mx-auto">
          Where Art Meets Recognition. Join the digital museum that connects artists, 
          organizations, and art lovers around the world.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background/20"
            onClick={() => onRoleSelect('artist')}
            data-testid="button-join-artist"
          >
            Join as Artist
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background/20"
            onClick={() => onRoleSelect('user')}
            data-testid="button-join-user"
          >
            Join as User
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background/20"
            onClick={() => onRoleSelect('organization')}
            data-testid="button-join-organization"
          >
            Join as Organization
          </Button>
        </div>
      </div>
    </section>
  );
}
