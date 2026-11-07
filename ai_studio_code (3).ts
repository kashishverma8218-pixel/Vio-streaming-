export interface Channel {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  banner: string;
  verified: boolean;
  subscribersCount: number;
  isSubscribed: boolean;
  notificationBell: 'all' | 'personalized' | 'none';
  bio: string;
  joinedDate: string;
  videoCount?: number;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  url: string;
  poster: string;
  channelId: string;
  views: number;
  likes: number;
  dislikes: number;
  publishedAt: string;
  duration: number; // in seconds
  category: string;
  tags: string[];
  visibility?: 'public' | 'unlisted' | 'private';
  hideLikes?: boolean;
  commentsControl?: 'allow_all' | 'hold_inappropriate' | 'disabled';
  notifySubscribers?: boolean;
  ageRestricted?: boolean;
}

export interface Comment {
  id: string;
  videoId: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  userLiked?: boolean;
}