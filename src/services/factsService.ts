
import { Fact, FactCategory, Comment } from '@/types/funFacts';
import { v4 as uuidv4 } from 'uuid';

// Mock facts data by category
const mockFactsData: Record<FactCategory, Fact[]> = {
  'history': [
    {
      id: uuidv4(),
      category: 'history',
      content: 'The shortest war in history was between Britain and Zanzibar in 1896. It lasted only 38 minutes.',
      source: 'Historical Archives',
      likes: 24,
      dislikes: 3,
      bookmarks: 7,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'Cleopatra lived closer in time to the invention of the iPhone than to the building of the Great Pyramid of Giza.',
      source: 'Archaeological Studies Journal',
      likes: 42,
      dislikes: 5,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'The ancient Romans used human urine as mouthwash.',
      source: 'Ancient Roman Health Practices',
      likes: 18,
      dislikes: 25,
      bookmarks: 4,
      comments: []
    }
  ],
  'math': [
    {
      id: uuidv4(),
      category: 'math',
      content: 'The sum of all numbers on a roulette wheel is 666.',
      source: 'Mathematical Facts Quarterly',
      likes: 31,
      dislikes: 7,
      bookmarks: 9,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'If you shuffle a deck of cards properly, chances are that exact order has never been seen before in the history of the universe.',
      source: 'Probability Studies',
      likes: 56,
      dislikes: 2,
      bookmarks: 21,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'Zero is the only number that cannot be represented by Roman numerals.',
      source: 'Number Theory Journal',
      likes: 27,
      dislikes: 3,
      bookmarks: 7,
      comments: []
    }
  ],
  'science': [
    {
      id: uuidv4(),
      category: 'science',
      content: 'If you could fold a piece of paper 42 times, it would reach the moon.',
      source: 'Physics Today',
      likes: 47,
      dislikes: 8,
      bookmarks: 15,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'There are more trees on Earth than stars in the Milky Way galaxy.',
      source: 'Environmental Science Review',
      likes: 39,
      dislikes: 4,
      bookmarks: 12,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: "Bananas are berries, but strawberries aren't.",
      source: 'Botanical Classification Guide',
      likes: 52,
      dislikes: 7,
      bookmarks: 18,
      comments: []
    }
  ],
  'chemistry': [
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Diamonds and graphite are both made entirely out of carbon.',
      source: 'Materials Chemistry Journal',
      likes: 28,
      dislikes: 2,
      bookmarks: 8,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'The human body contains enough carbon to make 9,000 pencils.',
      source: 'Human Biochemistry',
      likes: 33,
      dislikes: 6,
      bookmarks: 11,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Gold is so malleable that it can be hammered thin enough for light to pass through it.',
      source: 'Materials Science Today',
      likes: 41,
      dislikes: 3,
      bookmarks: 14,
      comments: []
    }
  ],
  'politics': [
    {
      id: uuidv4(),
      category: 'politics',
      content: "The Liberty Bell was last rung on George Washington's birthday in 1846.",
      source: 'American Historical Review',
      likes: 19,
      dislikes: 5,
      bookmarks: 6,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: "The US Constitution doesn't set the number of Supreme Court Justices. Congress decides.",
      source: 'Constitutional Studies',
      likes: 37,
      dislikes: 9,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'Wyoming was the first state to grant women the right to vote in 1869.',
      source: 'American Suffrage History',
      likes: 45,
      dislikes: 4,
      bookmarks: 17,
      comments: []
    }
  ],
  'current-events': [
    {
      id: uuidv4(),
      category: 'current-events',
      content: "More than 90% of the world's data has been created in just the last few years.",
      source: 'Digital Trends Report 2024',
      likes: 29,
      dislikes: 6,
      bookmarks: 10,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'There are more mobile devices in the world than there are people.',
      source: 'Global Technology Survey',
      likes: 36,
      dislikes: 5,
      bookmarks: 11,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'About 8 million tons of plastic enters our oceans every year.',
      source: 'Environmental Protection Agency',
      likes: 48,
      dislikes: 2,
      bookmarks: 20,
      comments: []
    }
  ]
};

// Mock user interaction state
const userInteractions: Record<string, { liked: boolean, disliked: boolean, bookmarked: boolean }> = {};

export const getFactsByCategory = (category: FactCategory): Promise<Fact[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const facts = mockFactsData[category].map(fact => ({
        ...fact,
        userLiked: userInteractions[fact.id]?.liked || false,
        userDisliked: userInteractions[fact.id]?.disliked || false,
        userBookmarked: userInteractions[fact.id]?.bookmarked || false
      }));
      resolve(facts);
    }, 500);
  });
};

export const likeFact = (factId: string): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Find the fact
      for (const category in mockFactsData) {
        const factIndex = mockFactsData[category as FactCategory].findIndex(fact => fact.id === factId);
        
        if (factIndex !== -1) {
          const fact = mockFactsData[category as FactCategory][factIndex];
          
          // Initialize user interaction for this fact if it doesn't exist
          if (!userInteractions[factId]) {
            userInteractions[factId] = { liked: false, disliked: false, bookmarked: false };
          }
          
          // Toggle like status
          if (userInteractions[factId].liked) {
            fact.likes--;
            userInteractions[factId].liked = false;
          } else {
            fact.likes++;
            userInteractions[factId].liked = true;
            
            // Remove dislike if it exists
            if (userInteractions[factId].disliked) {
              fact.dislikes--;
              userInteractions[factId].disliked = false;
            }
          }
          
          resolve({ success: true });
          return;
        }
      }
      
      resolve({ success: false });
    }, 300);
  });
};

export const dislikeFact = (factId: string): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (const category in mockFactsData) {
        const factIndex = mockFactsData[category as FactCategory].findIndex(fact => fact.id === factId);
        
        if (factIndex !== -1) {
          const fact = mockFactsData[category as FactCategory][factIndex];
          
          // Initialize user interaction for this fact if it doesn't exist
          if (!userInteractions[factId]) {
            userInteractions[factId] = { liked: false, disliked: false, bookmarked: false };
          }
          
          // Toggle dislike status
          if (userInteractions[factId].disliked) {
            fact.dislikes--;
            userInteractions[factId].disliked = false;
          } else {
            fact.dislikes++;
            userInteractions[factId].disliked = true;
            
            // Remove like if it exists
            if (userInteractions[factId].liked) {
              fact.likes--;
              userInteractions[factId].liked = false;
            }
          }
          
          resolve({ success: true });
          return;
        }
      }
      
      resolve({ success: false });
    }, 300);
  });
};

export const bookmarkFact = (factId: string): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (const category in mockFactsData) {
        const factIndex = mockFactsData[category as FactCategory].findIndex(fact => fact.id === factId);
        
        if (factIndex !== -1) {
          const fact = mockFactsData[category as FactCategory][factIndex];
          
          // Initialize user interaction for this fact if it doesn't exist
          if (!userInteractions[factId]) {
            userInteractions[factId] = { liked: false, disliked: false, bookmarked: false };
          }
          
          // Toggle bookmark status
          if (userInteractions[factId].bookmarked) {
            fact.bookmarks--;
            userInteractions[factId].bookmarked = false;
          } else {
            fact.bookmarks++;
            userInteractions[factId].bookmarked = true;
          }
          
          resolve({ success: true });
          return;
        }
      }
      
      resolve({ success: false });
    }, 300);
  });
};

export const addComment = (factId: string, text: string): Promise<Comment | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock user data
      const userId = "user-123";
      const username = "DemoUser";
      
      for (const category in mockFactsData) {
        const factIndex = mockFactsData[category as FactCategory].findIndex(fact => fact.id === factId);
        
        if (factIndex !== -1) {
          const newComment: Comment = {
            id: uuidv4(),
            userId,
            username,
            text,
            createdAt: new Date().toISOString()
          };
          
          mockFactsData[category as FactCategory][factIndex].comments.push(newComment);
          
          resolve(newComment);
          return;
        }
      }
      
      resolve(null);
    }, 300);
  });
};
