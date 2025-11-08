import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { TrendingArtists } from "@/components/TrendingArtists";
import { RoleCard } from "@/components/RoleCard";
import { MissionSection } from "@/components/MissionSection";
import { StatsCard } from "@/components/StatsCard";
import { ArtworkCard } from "@/components/ArtworkCard";
import { QueryForm } from "@/components/QueryForm";
import { Footer } from "@/components/Footer";
import { Palette, Users, Building, Eye, Heart, Sparkles } from "lucide-react";

import abstractArt from "@assets/generated_images/Contemporary_abstract_artwork_sample_6d7353f2.png";
import portrait from "@assets/generated_images/Classical_portrait_artwork_sample_489c646b.png";
import sculpture from "@assets/generated_images/Sculpture_artwork_sample_24bc8330.png";
import mandala from "@assets/generated_images/Mandala_pattern_artwork_sample_c47e4510.png";
import landscape from "@assets/generated_images/Landscape_painting_sample_e609da98.png";

export default function LandingPage() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    console.log("Dark mode toggled:", !isDark);
  };

  const featuredArtworks = [
    {
      id: "1",
      title: "Contemporary Visions",
      artist: "Maria Santos",
      imageUrl: abstractArt,
      description: "A stunning exploration of color and form that challenges traditional boundaries and invites viewers into a world of abstract expressionism.",
    },
    {
      id: "2",
      title: "Classical Portrait",
      artist: "Leonardo Rossi",
      imageUrl: portrait,
      description: "An exquisite oil painting capturing the essence of renaissance portraiture with masterful technique and timeless beauty.",
    },
    {
      id: "3",
      title: "Modern Sculpture",
      artist: "Yuki Tanaka",
      imageUrl: sculpture,
      description: "A contemporary piece blending traditional techniques with modern aesthetics, creating a dialogue between past and present.",
    },
  ];

  const trendingArtists = [
    {
      id: "1",
      name: "Maria Santos",
      specialty: "Abstract Expressionism",
      followers: 3420,
      verified: true,
    },
    {
      id: "2",
      name: "John Chen",
      specialty: "Digital Art",
      followers: 2890,
    },
    {
      id: "3",
      name: "Elena Rodriguez",
      specialty: "Contemporary Sculpture",
      followers: 4156,
      verified: true,
    },
  ];

  const galleryArtworks = [
    {
      id: "1",
      title: "Abstract Dreams",
      artist: "Maria Santos",
      imageUrl: abstractArt,
      status: "available" as const,
      views: 245,
      likes: 32,
    },
    {
      id: "2",
      title: "Sacred Geometry",
      artist: "Priya Sharma",
      imageUrl: mandala,
      status: "available" as const,
      views: 312,
      likes: 45,
    },
    {
      id: "3",
      title: "Golden Horizons",
      artist: "Vincent Laurent",
      imageUrl: landscape,
      status: "reserved" as const,
      views: 189,
      likes: 28,
    },
    {
      id: "4",
      title: "Classical Portrait",
      artist: "Leonardo Rossi",
      imageUrl: portrait,
      status: "sold" as const,
      views: 567,
      likes: 94,
    },
    {
      id: "5",
      title: "Modern Forms",
      artist: "Yuki Tanaka",
      imageUrl: sculpture,
      status: "available" as const,
      views: 423,
      likes: 61,
    },
    {
      id: "6",
      title: "Digital Fusion",
      artist: "John Chen",
      imageUrl: abstractArt,
      status: "available" as const,
      views: 298,
      likes: 37,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar
        onSearch={(query) => console.log("Search:", query)}
        isDark={isDark}
        onToggleDark={toggleDark}
      />

      <HeroSection onRoleSelect={(role) => console.log("Selected role:", role)} />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-6 mb-20" data-testid="section-stats">
            <StatsCard
              title="Total Artworks"
              value="1,247"
              icon={Palette}
              trend="+12% this month"
              trendUp={true}
            />
            <StatsCard
              title="Artists"
              value="384"
              icon={Users}
              trend="+8% this month"
              trendUp={true}
            />
            <StatsCard
              title="Total Views"
              value="45.2K"
              icon={Eye}
              trend="+24% this month"
              trendUp={true}
            />
            <StatsCard
              title="Likes"
              value="12.8K"
              icon={Heart}
              trend="+18% this month"
              trendUp={true}
            />
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-display text-5xl font-bold mb-4">Featured Artworks</h2>
              <p className="text-xl text-muted-foreground">
                Discover our handpicked selection of exceptional works
              </p>
            </div>
            <FeaturedCarousel artworks={featuredArtworks} />
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-display text-5xl font-bold mb-4">Trending Artists</h2>
              <p className="text-xl text-muted-foreground">
                Meet the creators making waves in the art community
              </p>
            </div>
            <TrendingArtists
              artists={trendingArtists}
              onArtistClick={(id) => console.log("Artist clicked:", id)}
            />
          </div>
        </div>
      </section>

      <MissionSection />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl font-bold mb-4">Join CULTURA</h2>
            <p className="text-xl text-muted-foreground">
              Choose your role and start your journey in the digital art world
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <RoleCard
              title="Artist"
              description="Showcase your work and connect with organizations"
              icon={Palette}
              features={[
                "Upload unlimited artworks",
                "Build your portfolio",
                "Get recognized by organizations",
                "Track engagement analytics",
              ]}
              onJoin={() => console.log("Join as Artist clicked")}
            />
            <RoleCard
              title="User"
              description="Explore and engage with amazing artworks"
              icon={Users}
              features={[
                "Discover curated art collections",
                "Like and comment on artworks",
                "Rate and review pieces",
                "Save favorite artworks",
              ]}
              onJoin={() => console.log("Join as User clicked")}
            />
            <RoleCard
              title="Organization"
              description="Find talent and collaborate with artists"
              icon={Building}
              features={[
                "Browse artist portfolios",
                "Post collaboration requests",
                "Recognize talented artists",
                "Access analytics dashboard",
              ]}
              onJoin={() => console.log("Join as Organization clicked")}
            />
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-display text-5xl font-bold mb-4">Explore Gallery</h2>
              <p className="text-xl text-muted-foreground">
                Browse our extensive collection of artworks from talented artists worldwide
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {galleryArtworks.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  {...artwork}
                  onClick={() => console.log("Artwork clicked:", artwork.id)}
                />
              ))}
            </div>
          </div>

          <div className="py-20">
            <div className="text-center mb-12">
              <h2 className="font-display text-5xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">
                Have questions? We're here to help
              </p>
            </div>
            <QueryForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
