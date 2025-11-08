import { ArtworkCard } from "@/components/ArtworkCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

import abstractArt from "@assets/generated_images/Contemporary_abstract_artwork_sample_721374da.png";
import portrait from "@assets/generated_images/Classical_portrait_artwork_sample_f641f68f.png";
import sculpture from "@assets/generated_images/Sculpture_artwork_sample_03515192.png";
import mandala from "@assets/generated_images/Mandala_pattern_artwork_sample_6dd93c38.png";
import landscape from "@assets/generated_images/Landscape_painting_sample_d124f625.png";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const artworks = [
    {
      id: "1",
      title: "Abstract Dreams",
      artist: "Maria Santos",
      imageUrl: abstractArt,
      status: "available" as const,
      views: 245,
      likes: 32,
      category: "Abstract",
    },
    {
      id: "2",
      title: "Sacred Geometry",
      artist: "Priya Sharma",
      imageUrl: mandala,
      status: "available" as const,
      views: 312,
      likes: 45,
      category: "Traditional",
    },
    {
      id: "3",
      title: "Golden Horizons",
      artist: "Vincent Laurent",
      imageUrl: landscape,
      status: "reserved" as const,
      views: 189,
      likes: 28,
      category: "Landscape",
    },
    {
      id: "4",
      title: "Classical Portrait",
      artist: "Leonardo Rossi",
      imageUrl: portrait,
      status: "sold" as const,
      views: 567,
      likes: 94,
      category: "Portrait",
    },
    {
      id: "5",
      title: "Modern Forms",
      artist: "Yuki Tanaka",
      imageUrl: sculpture,
      status: "available" as const,
      views: 423,
      likes: 61,
      category: "Sculpture",
    },
    {
      id: "6",
      title: "Digital Fusion",
      artist: "John Chen",
      imageUrl: abstractArt,
      status: "available" as const,
      views: 298,
      likes: 37,
      category: "Digital",
    },
    {
      id: "7",
      title: "Urban Poetry",
      artist: "Elena Rodriguez",
      imageUrl: landscape,
      status: "reserved" as const,
      views: 276,
      likes: 41,
      category: "Landscape",
    },
    {
      id: "8",
      title: "Renaissance Echo",
      artist: "Leonardo Rossi",
      imageUrl: portrait,
      status: "available" as const,
      views: 398,
      likes: 58,
      category: "Portrait",
    },
    {
      id: "9",
      title: "Cosmic Balance",
      artist: "Priya Sharma",
      imageUrl: mandala,
      status: "sold" as const,
      views: 445,
      likes: 72,
      category: "Traditional",
    },
  ];

  const filteredArtworks = artworks.filter((artwork) => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          artwork.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || artwork.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesStatus = statusFilter === "all" || artwork.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="font-display text-6xl font-bold mb-4">Explore Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse our extensive collection of artworks from talented artists worldwide
          </p>
        </div>

        <div className="mb-8 bg-card p-6 rounded-lg border-2 shadow-lg">
          <div className="flex gap-4 items-end flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <label className="text-sm font-medium mb-2 block">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search artworks or artists..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 h-12 text-base"
                  data-testid="input-search-explore"
                />
              </div>
            </div>
            
            <div className="w-56">
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="h-12" data-testid="select-category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="abstract">Abstract</SelectItem>
                  <SelectItem value="portrait">Portrait</SelectItem>
                  <SelectItem value="landscape">Landscape</SelectItem>
                  <SelectItem value="sculpture">Sculpture</SelectItem>
                  <SelectItem value="digital">Digital Art</SelectItem>
                  <SelectItem value="traditional">Traditional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-56">
              <label className="text-sm font-medium mb-2 block">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-12" data-testid="select-status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="reserved">Reserved</SelectItem>
                  <SelectItem value="sold">Sold</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="outline" size="icon" className="h-12 w-12" data-testid="button-filters">
              <SlidersHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-lg text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredArtworks.length}</span> of <span className="font-semibold text-foreground">{artworks.length}</span> artworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              {...artwork}
              onClick={() => console.log("Artwork clicked:", artwork.id)}
            />
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <p className="text-2xl font-display font-semibold mb-2">No artworks found</p>
            <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
}
