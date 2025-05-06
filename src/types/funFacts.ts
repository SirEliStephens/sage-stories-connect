
export type FactCategory = 
  | 'history'
  | 'math'
  | 'science'
  | 'chemistry'
  | 'politics'
  | 'current-events';

export interface Comment {
  id: string;
  userId: string;
  username: string;
  text: string;
  createdAt: string;
}

export interface Fact {
  id: string;
  category: FactCategory;
  content: string;
  source?: string;
  likes: number;
  dislikes: number;
  bookmarks: number;
  userLiked?: boolean;
  userDisliked?: boolean;
  userBookmarked?: boolean;
  comments: Comment[];
}
