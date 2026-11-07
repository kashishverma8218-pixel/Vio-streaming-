import { Channel, VideoItem, Comment } from '../types/video';

export const CHANNELS: Record<string, Channel> = {
  'channel-blender': {
    id: 'channel-blender',
    name: 'Blender Open Studio',
    handle: '@blenderopen',
    avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    verified: true,
    subscribersCount: 1420000,
    isSubscribed: true,
    notificationBell: 'all',
    bio: 'Pioneering open source 4K 3D animation and cinema masterpieces.',
    joinedDate: 'Joined March 2018',
    videoCount: 42,
  },
  'channel-vfx': {
    id: 'channel-vfx',
    name: 'CineMatrix VFX Labs',
    handle: '@cinematrix_vfx',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    banner: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    verified: true,
    subscribersCount: 890000,
    isSubscribed: false,
    notificationBell: 'personalized',
    bio: 'Photorealistic compositing, volumetric shaders, and camera tracking breakdown.',
    joinedDate: 'Joined January 2021',
    videoCount: 28,
  },
};

export const INITIAL_VIDEOS: VideoItem[] = [
  {
    id: 'video-bbb',
    title: 'Big Buck Bunny (4K Ultra HD Remaster)',
    description: 'A large, lovable rabbit deals with forest bullies in this landmark open-source animation masterpiece.',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    channelId: 'channel-blender',
    views: 3420000,
    likes: 184000,
    dislikes: 1200,
    publishedAt: '2 days ago',
    duration: 596,
    category: 'Animation',
    tags: ['4K', 'Animation', 'Blender', 'CGI'],
    visibility: 'public',
  },
  {
    id: 'video-tears-of-steel',
    title: 'Tears of Steel: Sci-Fi Visual Effects Breakdown',
    description: 'Set in a dystopian future where VFX animators fight cybernetic legions in Neo-Amsterdam.',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    channelId: 'channel-vfx',
    views: 1250000,
    likes: 92000,
    dislikes: 640,
    publishedAt: '1 week ago',
    duration: 734,
    category: 'Sci-Fi',
    tags: ['VFX', 'Sci-Fi', 'Cinema', 'CGI'],
    visibility: 'public',
  },
];

export const INITIAL_COMMENTS: Record<string, Comment[]> = {
  'video-bbb': [
    {
      id: 'c1',
      videoId: 'video-bbb',
      authorName: 'Alex Turner',
      authorHandle: '@alexturner',
      authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      content: 'The lighting model and fur rendering in this remaster are breathtaking!',
      timestamp: '1 day ago',
      likes: 342,
      userLiked: true,
    },
  ],
};