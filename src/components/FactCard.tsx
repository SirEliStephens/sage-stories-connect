
import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Fact, Comment } from '@/types/funFacts';
import { ThumbsUp, ThumbsDown, Bookmark, MessageSquare, Send } from 'lucide-react';
import { likeFact, dislikeFact, bookmarkFact, addComment } from '@/services/factsService';
import { useToast } from '@/hooks/use-toast';

interface FactCardProps {
  fact: Fact;
  onFactUpdate: (updatedFact: Fact) => void;
}

const FactCard: React.FC<FactCardProps> = ({ fact, onFactUpdate }) => {
  const { toast } = useToast();
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLike = async () => {
    await likeFact(fact.id);
    // Update the fact in local state
    onFactUpdate({
      ...fact,
      likes: fact.userLiked ? fact.likes - 1 : fact.likes + 1,
      dislikes: fact.userDisliked ? fact.dislikes - 1 : fact.dislikes,
      userLiked: !fact.userLiked,
      userDisliked: false,
    });
  };

  const handleDislike = async () => {
    await dislikeFact(fact.id);
    onFactUpdate({
      ...fact,
      dislikes: fact.userDisliked ? fact.dislikes - 1 : fact.dislikes + 1,
      likes: fact.userLiked ? fact.likes - 1 : fact.likes,
      userDisliked: !fact.userDisliked,
      userLiked: false,
    });
  };

  const handleBookmark = async () => {
    await bookmarkFact(fact.id);
    onFactUpdate({
      ...fact,
      bookmarks: fact.userBookmarked ? fact.bookmarks - 1 : fact.bookmarks + 1,
      userBookmarked: !fact.userBookmarked,
    });
    toast({
      title: fact.userBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: fact.userBookmarked ? "This fact has been removed from your bookmarks" : "This fact has been added to your bookmarks",
    });
  };

  const handleSubmitComment = async () => {
    if (!commentText.trim()) return;
    
    setIsSubmitting(true);
    const newComment = await addComment(fact.id, commentText);
    setIsSubmitting(false);
    
    if (newComment) {
      onFactUpdate({
        ...fact,
        comments: [...fact.comments, newComment]
      });
      setCommentText('');
      setIsCommenting(false);
      toast({
        title: "Comment added",
        description: "Your comment has been added successfully",
      });
    }
  };

  return (
    <Card className="w-full bg-white shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
            {fact.category.replace('-', ' ')}
          </span>
          {fact.source && (
            <span className="text-xs text-gray-500">Source: {fact.source}</span>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-lg font-medium">{fact.content}</p>
        
        {/* Comments section */}
        {(fact.comments.length > 0 || isCommenting) && (
          <div className="mt-4 border-t pt-4">
            <h4 className="text-sm font-semibold mb-2">Comments</h4>
            
            {fact.comments.map((comment) => (
              <div key={comment.id} className="pb-2 mb-2 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{comment.username}</span>
                  <span className="text-xs text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm mt-1">{comment.text}</p>
              </div>
            ))}
            
            {isCommenting && (
              <div className="mt-2">
                <Textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Add your comment..."
                  className="mb-2"
                />
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setIsCommenting(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={handleSubmitComment} 
                    disabled={isSubmitting || !commentText.trim()}
                    className="flex items-center gap-1"
                  >
                    <Send className="h-3 w-3" /> Submit
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t">
        <div className="flex space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLike}
            className={`flex items-center gap-1 ${fact.userLiked ? 'text-green-600' : ''}`}
          >
            <ThumbsUp className="h-4 w-4" /> {fact.likes}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleDislike}
            className={`flex items-center gap-1 ${fact.userDisliked ? 'text-red-600' : ''}`}
          >
            <ThumbsDown className="h-4 w-4" /> {fact.dislikes}
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsCommenting(!isCommenting)}
            className="flex items-center gap-1"
          >
            <MessageSquare className="h-4 w-4" /> 
            {fact.comments.length > 0 && fact.comments.length}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleBookmark}
            className={`flex items-center gap-1 ${fact.userBookmarked ? 'text-blue-600' : ''}`}
          >
            <Bookmark className="h-4 w-4" /> {fact.bookmarks}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FactCard;
