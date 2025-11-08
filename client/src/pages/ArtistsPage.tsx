import { TrendingArtists } from "@/components/TrendingArtists";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

export default function ArtistsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");

  const artists = [
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
      verified: false,
    },
    {
      id: "3",
      name: "Elena Rodriguez",
      specialty: "Contemporary Sculpture",
      followers: 4156,
      verified: true,
    },
    {
      id: "4",
      name: "Leonardo Rossi",
      specialty: "Classical Portrait",
      followers: 3780,
      verified: true,
    },
    {
      id: "5",
      name: "Priya Sharma",
      specialty: "Traditional Art",
      followers: 2650,
      verified: false,
    },
    {
      id: "6",
      name: "Yuki Tanaka",
      specialty: "Contemporary Sculpture",
      followers: 3120,
      verified: true,
    },
    {
      id: "7",
      name: "Vincent Laurent",
      specialty: "Landscape Painting",
      followers: 2890,
      verified: false,
    },
    {
      id: "8",
      name: "Sophia Kim",
      specialty: "Digital Art",
      followers: 3340,
      verified: true,
    },
    {
      id: "9",
      name: "Ahmed Hassan",
      specialty: "Abstract Expressionism",
      followers: 2980,
      verified: false,
    },
  ];

  const filteredArtists = artists.filter((artist) => {
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = specialtyFilter === "all" || artist.specialty === specialtyFilter;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="font-display text-5xl font-bold mb-4">Discover Artists</h1>
          <p className="text-xl text-muted-foreground">
            Connect with talented creators from around the world
          </p>
        </div>

        <div className="mb-8 bg-card p-6 rounded-lg border">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Search Artists</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-artists"
                />
              </div>
            </div>
            
            <div className="w-64">
              <label className="text-sm font-medium mb-2 block">Specialty</label>
              <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                <SelectTrigger data-testid="select-specialty">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  <SelectItem value="Abstract Expressionism">Abstract Expressionism</SelectItem>
                  <SelectItem value="Digital Art">Digital Art</SelectItem>
                  <SelectItem value="Contemporary Sculpture">Contemporary Sculpture</SelectItem>
                  <SelectItem value="Classical Portrait">Classical Portrait</SelectItem>
                  <SelectItem value="Traditional Art">Traditional Art</SelectItem>
                  <SelectItem value="Landscape Painting">Landscape Painting</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredArtists.length} of {artists.length} artists
          </p>
        </div>

        <TrendingArtists
          artists={filteredArtists}
          onArtistClick={(id) => console.log("Artist clicked:", id)}
        />

        {filteredArtists.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No artists found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
