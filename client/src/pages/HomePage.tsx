import { HeroSection } from "@/components/HeroSection";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { TrendingArtists } from "@/components/TrendingArtists";
import { RoleCard } from "@/components/RoleCard";
import { MissionSection } from "@/components/MissionSection";
import { StatsCard } from "@/components/StatsCard";
import { Palette, Users, Building, Eye, Heart } from "lucide-react";
import { useLocation } from "wouter";

import abstractArt from "@assets/generated_images/Contemporary_abstract_artwork_sample_6d7353f2.png";
import portrait from "@assets/generated_images/Classical_portrait_artwork_sample_489c646b.png";
import sculpture from "@assets/generated_images/Sculpture_artwork_sample_24bc8330.png";

export default function HomePage() {
  const [, setLocation] = useLocation();

  const featuredArtworks = [
    {
      id: "1",
      title: "Contemporary Visions",
      artist: "Maria Santos",
      imageUrl: abstractArt,
      description: "A stunning exploration of color and form that challenges traditional boundaries.",
    },
    {
      id: "2",
      title: "Classical Portrait",
      artist: "Leonardo Rossi",
      imageUrl: portrait,
      description: "An exquisite oil painting capturing the essence of renaissance portraiture.",
    },
    {
      id: "3",
      title: "Modern Sculpture",
      artist: "Yuki Tanaka",
      imageUrl: sculpture,
      description: "A contemporary piece blending traditional techniques with modern aesthetics.",
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

  return (
    <div>
      <HeroSection onRoleSelect={(role) => setLocation(`/signup?role=${role}`)} />

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
              onArtistClick={(id) => setLocation(`/artists/${id}`)}
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
          <div className="grid md:grid-cols-3 gap-8">
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
              onJoin={() => setLocation("/signup?role=artist")}
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
              onJoin={() => setLocation("/signup?role=user")}
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
              onJoin={() => setLocation("/signup?role=organization")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
