import { CommentSection } from '../CommentSection';
import { useState } from 'react';

export default function CommentSectionExample() {
  const [comments, setComments] = useState([
    {
      id: '1',
      author: 'Sarah Johnson',
      content: 'This artwork is absolutely stunning! The use of color is masterful.',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      author: 'Michael Lee',
      content: 'I love how this piece captures emotion. Truly remarkable work.',
      timestamp: '5 hours ago',
    },
  ]);

  const handleAddComment = (content: string) => {
    const newComment = {
      id: String(comments.length + 1),
      author: 'You',
      content,
      timestamp: 'Just now',
    };
    setComments([newComment, ...comments]);
  };

  return <CommentSection comments={comments} onAddComment={handleAddComment} />;
}
