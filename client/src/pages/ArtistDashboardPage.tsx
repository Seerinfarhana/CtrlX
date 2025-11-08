import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, Image as ImageIcon, Eye, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Artwork } from "@shared/schema";

export default function ArtistDashboardPage() {
  const { toast } = useToast();
  const artistId = "temp-artist-id";
  
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    category: "",
    status: "available",
  });

  const { data: artworks, isLoading } = useQuery<Artwork[]>({
    queryKey: [`/api/artworks/artist/${artistId}`],
  });

  const uploadMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await apiRequest("POST", "/api/artworks", {
        ...data,
        artistId,
      });
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`/api/artworks/artist/${artistId}`] });
      toast({
        title: "Success!",
        description: "Your artwork has been uploaded successfully.",
      });
      setFormData({
        title: "",
        imageUrl: "",
        category: "",
        status: "available",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    uploadMutation.mutate(formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-4xl font-bold mb-8">Artist Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card>
            <CardHeader className="gap-1 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Artworks
              </CardTitle>
              <div className="text-3xl font-bold" data-testid="text-total-artworks">
                {artworks?.length || 0}
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="gap-1 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Views
              </CardTitle>
              <div className="text-3xl font-bold" data-testid="text-total-views">
                {artworks?.reduce((sum, a) => sum + a.views, 0) || 0}
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="gap-1 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Likes
              </CardTitle>
              <div className="text-3xl font-bold" data-testid="text-total-likes">
                {artworks?.reduce((sum, a) => sum + a.likes, 0) || 0}
              </div>
            </CardHeader>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload New Artwork
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Artwork Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter artwork title"
                  required
                  data-testid="input-title"
                />
              </div>

              <div>
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  required
                  data-testid="input-image-url"
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  required
                >
                  <SelectTrigger id="category" data-testid="select-category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Abstract">Abstract</SelectItem>
                    <SelectItem value="Landscape">Landscape</SelectItem>
                    <SelectItem value="Portrait">Portrait</SelectItem>
                    <SelectItem value="Sculpture">Sculpture</SelectItem>
                    <SelectItem value="Digital">Digital</SelectItem>
                    <SelectItem value="Photography">Photography</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger id="status" data-testid="select-status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="reserved">Reserved</SelectItem>
                    <SelectItem value="sold">Sold</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={uploadMutation.isPending}
                data-testid="button-upload"
              >
                {uploadMutation.isPending ? "Uploading..." : "Upload Artwork"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div>
          <h2 className="font-display text-2xl font-bold mb-4">My Artworks</h2>
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">Loading...</div>
          ) : artworks && artworks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks.map((artwork) => (
                <Card key={artwork.id} className="overflow-visible" data-testid={`card-artwork-${artwork.id}`}>
                  <div className="aspect-[4/3] overflow-hidden bg-muted p-2">
                    <div className="relative w-full h-full overflow-hidden rounded-sm">
                      <img
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-display text-lg font-semibold mb-1">
                      {artwork.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {artwork.category} • {artwork.status}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{artwork.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{artwork.likes}</span>
                      </div>
                      <a
                        href={`/artworks/${artwork.id}`}
                        className="flex items-center gap-1 hover-elevate"
                        data-testid={`link-comments-${artwork.id}`}
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>View Comments</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <ImageIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-display text-xl font-semibold mb-2">No artworks yet</h3>
              <p className="text-muted-foreground">
                Upload your first artwork using the form above
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
