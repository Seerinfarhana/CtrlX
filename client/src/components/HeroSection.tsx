import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Museum_gallery_hero_background_c07094b2.png";

interface HeroSectionProps {
  onRoleSelect: (role: string) => void;
}

export function HeroSection({ onRoleSelect }: HeroSectionProps) {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Museum gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Preserving Art & Culture
            <span className="block text-primary mt-3 relative inline-block">
              Digitally
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Where Art Meets Recognition. Join the digital museum that connects artists, 
            organizations, and art lovers around the world.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="glass-morphic text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 h-auto transition-smooth"
            onClick={() => onRoleSelect('artist')}
            data-testid="button-join-artist"
          >
            <span className="font-semibold">Join as Artist</span>
          </Button>
          <Button
            size="lg"
            className="glass-morphic text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 h-auto transition-smooth"
            onClick={() => onRoleSelect('user')}
            data-testid="button-join-user"
          >
            <span className="font-semibold">Join as Art Lover</span>
          </Button>
          <Button
            size="lg"
            className="gradient-gold text-foreground border-0 hover:shadow-2xl text-lg px-8 py-6 h-auto font-semibold transition-smooth hover-lift"
            onClick={() => onRoleSelect('organization')}
            data-testid="button-join-organization"
          >
            Join as Organization
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-12 text-white/80">
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-white">1,247</div>
            <div className="text-sm uppercase tracking-wider mt-1">Artworks</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-white">384</div>
            <div className="text-sm uppercase tracking-wider mt-1">Artists</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-white">45.2K</div>
            <div className="text-sm uppercase tracking-wider mt-1">Views</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
