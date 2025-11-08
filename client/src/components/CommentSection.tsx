import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface Comment {
  id: string;
  author: string;
  avatar?: string;
  content: string;
  timestamp: string;
}

interface CommentSectionProps {
  comments: Comment[];
  onAddComment?: (content: string) => void;
}

export function CommentSection({ comments, onAddComment }: CommentSectionProps) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = () => {
    if (newComment.trim() && onAddComment) {
      onAddComment(newComment);
      setNewComment("");
      console.log('Comment submitted:', newComment);
    }
  };

  return (
    <div className="space-y-6" data-testid="section-comments">
      <div>
        <h3 className="font-display text-2xl font-semibold mb-4">
          Comments ({comments.length})
        </h3>
        <Card className="p-4">
          <Textarea
            placeholder="Share your thoughts about this artwork..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-3 min-h-[100px]"
            data-testid="input-comment"
          />
          <Button
            onClick={handleSubmit}
            disabled={!newComment.trim()}
            data-testid="button-submit-comment"
          >
            Post Comment
          </Button>
        </Card>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id} className="p-4" data-testid={`comment-${comment.id}`}>
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src={comment.avatar} alt={comment.author} />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {comment.author[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">{comment.author}</span>
                  <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
                </div>
                <p className="text-foreground/90">{comment.content}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
