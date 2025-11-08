import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArtworkCard } from "@/components/ArtworkCard";
import { MapPin, Link as LinkIcon, Mail, Award, Users, Eye } from "lucide-react";
import { useParams } from "wouter";

import abstractArt from "@assets/generated_images/Contemporary_abstract_artwork_sample_721374da.png";
import portrait from "@assets/generated_images/Classical_portrait_artwork_sample_f641f68f.png";
import sculpture from "@assets/generated_images/Sculpture_artwork_sample_03515192.png";
import mandala from "@assets/generated_images/Mandala_pattern_artwork_sample_6dd93c38.png";
import landscape from "@assets/generated_images/Landscape_painting_sample_d124f625.png";

export default function ArtistProfilePage() {
  const params = useParams();
  const artistId = params.id || "1";

  const artistsData: Record<string, any> = {
    "1": {
      id: "1",
      name: "Maria Santos",
      specialty: "Abstract Expressionism",
      bio: "Maria Santos is a contemporary abstract artist known for her vibrant use of color and bold brushstrokes. Her work explores the intersection of emotion and form, creating pieces that challenge traditional boundaries while maintaining a deep connection to classical techniques. With over 15 years of experience, Maria has exhibited in galleries across Europe and North America.",
      location: "Barcelona, Spain",
      website: "mariasantos.art",
      email: "contact@mariasantos.art",
      followers: 3420,
      totalViews: 45200,
      verified: true,
      joined: "March 2022",
      achievements: ["Featured Artist 2024", "Top Rated Seller", "Rising Star Award"],
    },
    "2": {
      id: "2",
      name: "John Chen",
      specialty: "Digital Art",
      bio: "John Chen is a pioneering digital artist who seamlessly blends technology with traditional artistic principles. His innovative approach to digital media has earned him recognition in the contemporary art world. Based in Tokyo, John creates immersive digital experiences that challenge our perception of reality and art.",
      location: "Tokyo, Japan",
      website: "johnchen.digital",
      email: "hello@johnchen.digital",
      followers: 2890,
      totalViews: 38500,
      verified: false,
      joined: "June 2022",
      achievements: ["Digital Artist of the Year", "Innovation Award"],
    },
    "3": {
      id: "3",
      name: "Elena Rodriguez",
      specialty: "Contemporary Sculpture",
      bio: "Elena Rodriguez is a celebrated contemporary sculptor whose works have been exhibited in major museums worldwide. Her sculptures explore themes of identity, transformation, and the human condition through innovative use of materials and form. Elena's work pushes the boundaries of traditional sculpture.",
      location: "Mexico City, Mexico",
      website: "elenarodriguez.mx",
      email: "studio@elenarodriguez.mx",
      followers: 4156,
      totalViews: 52300,
      verified: true,
      joined: "January 2021",
      achievements: ["Sculpture Excellence Award", "Museum Featured Artist", "International Recognition"],
    },
    "4": {
      id: "4",
      name: "Leonardo Rossi",
      specialty: "Classical Portrait",
      bio: "Leonardo Rossi is a master of classical portraiture who brings centuries-old techniques into the modern era. His portraits capture not just the physical likeness but the essence and soul of his subjects. Trained in the finest art academies of Italy, Leonardo has created portraits for distinguished collectors worldwide.",
      location: "Florence, Italy",
      website: "leonardorossi.it",
      email: "info@leonardorossi.it",
      followers: 3780,
      totalViews: 41200,
      verified: true,
      joined: "September 2020",
      achievements: ["Classical Masters Award", "Portrait Excellence", "European Art Prize"],
    },
    "5": {
      id: "5",
      name: "Priya Sharma",
      specialty: "Traditional Art",
      bio: "Priya Sharma is a traditional artist who draws inspiration from the rich cultural heritage of India. Her work incorporates ancient techniques with contemporary themes, creating a unique bridge between past and present. Priya's art celebrates the beauty of traditional craftsmanship in the modern world.",
      location: "Mumbai, India",
      website: "priyasharma.art",
      email: "contact@priyasharma.art",
      followers: 2650,
      totalViews: 31800,
      verified: false,
      joined: "April 2023",
      achievements: ["Traditional Art Award", "Cultural Heritage Prize"],
    },
    "6": {
      id: "6",
      name: "Yuki Tanaka",
      specialty: "Contemporary Sculpture",
      bio: "Yuki Tanaka creates minimalist sculptures that explore the relationship between space, form, and viewer. Her work is characterized by clean lines and thoughtful use of negative space. Yuki's sculptures invite contemplation and have been featured in prestigious galleries across Asia and Europe.",
      location: "Kyoto, Japan",
      website: "yukitanaka.jp",
      email: "studio@yukitanaka.jp",
      followers: 3120,
      totalViews: 39400,
      verified: true,
      joined: "November 2021",
      achievements: ["Minimalist Art Prize", "Emerging Artist Award", "Gallery Featured"],
    },
    "7": {
      id: "7",
      name: "Vincent Laurent",
      specialty: "Landscape Painting",
      bio: "Vincent Laurent is a landscape painter who captures the sublime beauty of nature with masterful technique. His paintings transport viewers to breathtaking vistas and serene natural settings. Working en plein air whenever possible, Vincent brings an authentic connection to his subjects that resonates with collectors.",
      location: "Provence, France",
      website: "vincentlaurent.fr",
      email: "atelier@vincentlaurent.fr",
      followers: 2890,
      totalViews: 35600,
      verified: false,
      joined: "February 2022",
      achievements: ["Landscape Excellence Award", "Nature Artist Prize"],
    },
    "8": {
      id: "8",
      name: "Sophia Kim",
      specialty: "Digital Art",
      bio: "Sophia Kim is a cutting-edge digital artist who creates stunning visual experiences using the latest technology and software. Her work explores themes of technology, identity, and the digital age. Sophia's innovative approach has made her a sought-after artist for both galleries and digital platforms.",
      location: "Seoul, South Korea",
      website: "sophiakim.art",
      email: "hello@sophiakim.art",
      followers: 3340,
      totalViews: 43700,
      verified: true,
      joined: "May 2021",
      achievements: ["Digital Innovation Award", "Tech Art Prize", "Featured Creator"],
    },
    "9": {
      id: "9",
      name: "Ahmed Hassan",
      specialty: "Abstract Expressionism",
      bio: "Ahmed Hassan is an abstract expressionist whose powerful canvases convey deep emotion and cultural narratives. His work combines bold gestures with subtle color harmonies to create pieces that are both visually striking and emotionally resonant. Ahmed's art bridges Eastern and Western artistic traditions.",
      location: "Cairo, Egypt",
      website: "ahmedhassan.art",
      email: "contact@ahmedhassan.art",
      followers: 2980,
      totalViews: 37100,
      verified: false,
      joined: "August 2022",
      achievements: ["Abstract Art Award", "Cultural Ambassador"],
    },
  };

  const artist = artistsData[artistId] || artistsData["1"];

  const artworks = [
    {
      id: "1",
      title: "Abstract Dreams",
      artist: artist.name,
      imageUrl: abstractArt,
      status: "available" as const,
      category: "Abstract",
      views: 245,
      likes: 32,
    },
    {
      id: "2",
      title: "Cosmic Harmony",
      artist: artist.name,
      imageUrl: mandala,
      status: "sold" as const,
      category: "Abstract",
      views: 567,
      likes: 94,
    },
    {
      id: "3",
      title: "Urban Reflections",
      artist: artist.name,
      imageUrl: landscape,
      status: "available" as const,
      category: "Landscape",
      views: 312,
      likes: 45,
    },
    {
      id: "4",
      title: "Renaissance Echo",
      artist: artist.name,
      imageUrl: portrait,
      status: "reserved" as const,
      category: "Portrait",
      views: 189,
      likes: 28,
    },
    {
      id: "5",
      title: "Modern Forms",
      artist: artist.name,
      imageUrl: sculpture,
      status: "available" as const,
      category: "Sculpture",
      views: 423,
      likes: 61,
    },
    {
      id: "6",
      title: "Digital Fusion",
      artist: artist.name,
      imageUrl: abstractArt,
      status: "available" as const,
      category: "Digital",
      views: 298,
      likes: 37,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="gradient-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,166,100,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Avatar className="w-32 h-32 ring-4 ring-primary/50 shadow-2xl">
              <AvatarImage src="" alt={artist.name} />
              <AvatarFallback className="text-5xl font-display bg-primary/20 text-primary">
                {artist.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-white">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="font-display text-5xl font-bold">{artist.name}</h1>
                    {artist.verified && (
                      <Badge className="bg-primary text-foreground border-0">
                        <Award className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-xl text-primary mb-3">{artist.specialty}</p>
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{artist.location}</span>
                    </div>
                    <span>•</span>
                    <span>Joined {artist.joined}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mb-6">
                {artist.achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/10 text-white border-white/20">
                    {achievement}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-white">{artist.followers.toLocaleString()}</div>
                  <div className="text-sm text-white/70 uppercase tracking-wider">Followers</div>
                </div>
                <div className="w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-white">{artworks.length}</div>
                  <div className="text-sm text-white/70 uppercase tracking-wider">Artworks</div>
                </div>
                <div className="w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-white">{(artist.totalViews / 1000).toFixed(1)}K</div>
                  <div className="text-sm text-white/70 uppercase tracking-wider">Views</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="gradient-gold text-foreground border-0 hover:shadow-xl transition-smooth" data-testid="button-follow">
                  <Users className="w-4 h-4 mr-2" />
                  Follow Artist
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                {artist.website && (
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-website">
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Website
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="portfolio" className="w-full">
          <TabsList className="mb-8 border-b w-full justify-start bg-transparent h-auto p-0 gap-8">
            <TabsTrigger 
              value="portfolio" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent px-0 pb-3"
              data-testid="tab-portfolio"
            >
              <span className="text-lg font-semibold">Portfolio</span>
            </TabsTrigger>
            <TabsTrigger 
              value="about" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent px-0 pb-3"
              data-testid="tab-about"
            >
              <span className="text-lg font-semibold">About</span>
            </TabsTrigger>
            <TabsTrigger 
              value="reviews" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent px-0 pb-3"
              data-testid="tab-reviews"
            >
              <span className="text-lg font-semibold">Reviews</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio" className="mt-0">
            <div className="grid grid-cols-3 gap-6">
              {artworks.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  {...artwork}
                  onClick={() => console.log("Artwork clicked:", artwork.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-0">
            <Card className="p-8 max-w-4xl">
              <h2 className="font-display text-3xl font-bold mb-6">About the Artist</h2>
              <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                {artist.bio}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Abstract Art</Badge>
                    <Badge variant="secondary">Contemporary</Badge>
                    <Badge variant="secondary">Mixed Media</Badge>
                    <Badge variant="secondary">Oil Painting</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">Contact Information</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{artist.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LinkIcon className="w-4 h-4" />
                      <span>{artist.website}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{artist.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-0">
            <Card className="p-8 max-w-4xl">
              <h2 className="font-display text-3xl font-bold mb-6">Reviews & Recognition</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-4">
                  <p className="text-lg italic mb-3">
                    "{artist.name.split(' ')[0]}'s work is absolutely stunning. The way {artist.name.split(' ')[0]} captures emotion through artistic forms is truly remarkable."
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-secondary/20 text-secondary">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-muted-foreground">Art Collector</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <p className="text-lg italic mb-3">
                    "One of the most talented contemporary artists I've had the pleasure of working with."
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-secondary/20 text-secondary">SG</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Sarah Gallery</p>
                      <p className="text-sm text-muted-foreground">Gallery Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
