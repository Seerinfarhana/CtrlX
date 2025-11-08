import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, Heart, MessageCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Link, useParams } from "wouter";
import type { Artwork, Comment } from "@shared/schema";
import { formatDistanceToNow } from "date-fns";

export default function ArtworkDetailPage() {
  const { id } = useParams();
  const { toast } = useToast();
  const artistId = "temp-artist-id";
  const [commentText, setCommentText] = useState("");

  const { data: artwork, isLoading: artworkLoading } = useQuery<Artwork>({
    queryKey: [`/api/artworks/${id}`],
  });

  const { data: comments, isLoading: commentsLoading } = useQuery<Comment[]>({
    queryKey: [`/api/comments/artwork/${id}`],
  });

  const commentMutation = useMutation({
    mutationFn: async (comment: string) => {
      const res = await apiRequest("POST", "/api/comments", {
        artworkId: id,
        artistId,
        comment,
      });
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`/api/comments/artwork/${id}`] });
      toast({
        title: "Comment added!",
        description: "Your comment has been posted successfully.",
      });
      setCommentText("");
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to add comment",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    commentMutation.mutate(commentText);
  };

  if (artworkLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16 text-muted-foreground">Loading artwork...</div>
      </div>
    );
  }

  if (!artwork) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="p-12 text-center">
          <h2 className="font-display text-2xl font-bold mb-2">Artwork not found</h2>
          <p className="text-muted-foreground mb-4">
            The artwork you're looking for doesn't exist.
          </p>
          <Link href="/explore">
            <Button data-testid="button-back-explore">Back to Explore</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/dashboard">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <Card className="overflow-visible">
              <div className="aspect-square overflow-hidden bg-muted p-4">
                <div className="relative w-full h-full overflow-hidden rounded-sm">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                    data-testid="img-artwork"
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="font-display text-4xl font-bold mb-2" data-testid="text-artwork-title">
                {artwork.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {artwork.category} • {artwork.status}
              </p>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  <span data-testid="text-views">{artwork.views} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  <span data-testid="text-likes">{artwork.likes} likes</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span data-testid="text-comment-count">{comments?.length || 0} comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Add a Comment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitComment} className="space-y-4">
                  <div>
                    <Label htmlFor="comment">Your Comment</Label>
                    <Textarea
                      id="comment"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Share your thoughts about this artwork..."
                      rows={4}
                      data-testid="textarea-comment"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={commentMutation.isPending || !commentText.trim()}
                    data-testid="button-submit-comment"
                  >
                    {commentMutation.isPending ? "Posting..." : "Post Comment"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              Comments ({comments?.length || 0})
            </h2>
            {commentsLoading ? (
              <div className="text-center py-8 text-muted-foreground">Loading comments...</div>
            ) : comments && comments.length > 0 ? (
              <div className="space-y-4">
                {comments.map((comment) => (
                  <Card key={comment.id} data-testid={`card-comment-${comment.id}`}>
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">Artist</span>
                            <span className="text-sm text-muted-foreground">
                              {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                            </span>
                          </div>
                          <p className="text-sm" data-testid={`text-comment-${comment.id}`}>
                            {comment.comment}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
