import { ArtworkCard } from "@/components/ArtworkCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

import abstractArt from "@assets/generated_images/Contemporary_abstract_artwork_sample_6d7353f2.png";
import portrait from "@assets/generated_images/Classical_portrait_artwork_sample_489c646b.png";
import sculpture from "@assets/generated_images/Sculpture_artwork_sample_24bc8330.png";
import mandala from "@assets/generated_images/Mandala_pattern_artwork_sample_c47e4510.png";
import landscape from "@assets/generated_images/Landscape_painting_sample_e609da98.png";

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
      category: "abstract",
    },
    {
      id: "2",
      title: "Sacred Geometry",
      artist: "Priya Sharma",
      imageUrl: mandala,
      status: "available" as const,
      views: 312,
      likes: 45,
      category: "traditional",
    },
    {
      id: "3",
      title: "Golden Horizons",
      artist: "Vincent Laurent",
      imageUrl: landscape,
      status: "reserved" as const,
      views: 189,
      likes: 28,
      category: "landscape",
    },
    {
      id: "4",
      title: "Classical Portrait",
      artist: "Leonardo Rossi",
      imageUrl: portrait,
      status: "sold" as const,
      views: 567,
      likes: 94,
      category: "portrait",
    },
    {
      id: "5",
      title: "Modern Forms",
      artist: "Yuki Tanaka",
      imageUrl: sculpture,
      status: "available" as const,
      views: 423,
      likes: 61,
      category: "sculpture",
    },
    {
      id: "6",
      title: "Digital Fusion",
      artist: "John Chen",
      imageUrl: abstractArt,
      status: "available" as const,
      views: 298,
      likes: 37,
      category: "digital",
    },
    {
      id: "7",
      title: "Urban Poetry",
      artist: "Elena Rodriguez",
      imageUrl: landscape,
      status: "reserved" as const,
      views: 276,
      likes: 41,
      category: "landscape",
    },
    {
      id: "8",
      title: "Renaissance Echo",
      artist: "Leonardo Rossi",
      imageUrl: portrait,
      status: "available" as const,
      views: 398,
      likes: 58,
      category: "portrait",
    },
    {
      id: "9",
      title: "Cosmic Balance",
      artist: "Priya Sharma",
      imageUrl: mandala,
      status: "sold" as const,
      views: 445,
      likes: 72,
      category: "traditional",
    },
  ];

  const filteredArtworks = artworks.filter((artwork) => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          artwork.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || artwork.category === categoryFilter;
    const matchesStatus = statusFilter === "all" || artwork.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="font-display text-5xl font-bold mb-4">Explore Gallery</h1>
          <p className="text-xl text-muted-foreground">
            Browse our extensive collection of artworks from talented artists worldwide
          </p>
        </div>

        <div className="mb-8 bg-card p-6 rounded-lg border">
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search artworks or artists..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-explore"
                />
              </div>
            </div>
            
            <div className="w-48">
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger data-testid="select-category">
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

            <div className="w-48">
              <label className="text-sm font-medium mb-2 block">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger data-testid="select-status">
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

            <Button variant="outline" size="icon" data-testid="button-filters">
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing {filteredArtworks.length} of {artworks.length} artworks
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
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
            <p className="text-xl text-muted-foreground">No artworks found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
