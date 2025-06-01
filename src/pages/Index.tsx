import React from 'react';
import SidebarNav from '../components/Dashboard/SidebarNav';
import TopHeader from '../components/Dashboard/TopHeader';
import FeedPost, { exampleFeedPostData } from '../components/Dashboard/FeedPost';
import StoriesSidebar from '../components/Dashboard/StoriesSidebar';
import SuggestedGroups from '../components/Dashboard/SuggestedGroups';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Used for the search-like input in MakePost
import { Card } from '@/components/ui/card'; // Used for MakePost section
import { Separator } from '@/components/ui/separator'; // For separating sections in right sidebar
import { Video, Image, Edit3 } from 'lucide-react'; // Icons for MakePost section

// TypeScript interfaces for data structures
interface UserData {
  name: string;
  avatarUrl: string;
}

interface FeedPostData {
  id: string;
  user: UserData;
  postTime: string;
  postAudience?: string;
  contentText?: string;
  contentImageUrl?: string;
  locationTag?: {
    city: string;
    country: string;
  };
  sharedLocationInfo?: string;
  isSponsored?: boolean;
}

// Dummy data for the current user (e.g., for the "Make Post" section)
const currentUserData: UserData = {
  name: 'Olenna Mason',
  avatarUrl: 'https://i.pravatar.cc/40?u=OlennaMason',
} as const;

// Dummy data for multiple feed posts
const feedPostsData: FeedPostData[] = [
  { ...exampleFeedPostData, id: 'post1' }, // Using the imported example data for the first post
  {
    id: 'post2',
    user: { name: 'Alex Green', avatarUrl: 'https://i.pravatar.cc/40?u=AlexGreen' },
    postTime: '5 hrs ago',
    contentText: 'Just enjoyed a wonderful hike this morning! The views were incredible. #nature #hiking 🌲⛰️',
    contentImageUrl: 'https://source.unsplash.com/random/600x400?nature,hike',
    postAudience: 'Friends',
  },
  {
    id: 'post3',
    user: { name: 'Tech Updates Daily', avatarUrl: 'https://i.pravatar.cc/40?u=TechUpdates' },
    postTime: '1 day ago',
    isSponsored: true,
    contentText: '🚀 Discover the new AI-powered CodeScribe X! Boost your team\'s productivity by up to 50%. Visit our website for a limited time offer! #AI #Tech #Productivity #SaaS',
    contentImageUrl: 'https://source.unsplash.com/random/600x350?technology,code',
    postAudience: 'Public',
  },
  {
    id: 'post4',
    user: { name: 'Foodie Corner Reviews', avatarUrl: 'https://i.pravatar.cc/40?u=FoodieCorner' },
    postTime: 'Yesterday at 8:00 PM',
    locationTag: { city: 'Paris', country: 'France' },
    contentText: 'Exquisite dinner at Le Gourmet. The ambiance and food were top-notch! Highly recommend the crème brûlée. 🍮🇫🇷 An unforgettable culinary experience.',
    contentImageUrl: 'https://source.unsplash.com/random/600x350?food,paris',
    sharedLocationInfo: 'Sarah Lee and 5 others recommend this place',
    postAudience: 'Public',
  },
];

const MainFeedPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />
      <TopHeader />

      {/* Main content area wrapper with margins for fixed sidebars */}
      <div className="ml-64 mr-80">
        {/* Main content: mt-16 for fixed header, p-4 for padding */}
        <main className="mt-16 p-4 min-h-[calc(100vh-4rem)]">
          {/* Feed container: centered, max-width, and vertical spacing for posts */}
          <div className="max-w-[600px] mx-auto space-y-6"> {/* Adjusted max-width based on typical feeds */} 
            {/* "Make Post" Card Section */}
            <Card className="p-3 shadow-sm">
              <div className="flex items-center space-x-3 border-b border-border pb-3 mb-3">
                <Avatar>
                  <AvatarImage src={currentUserData.avatarUrl} alt={currentUserData.name} />
                  <AvatarFallback>{currentUserData.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                {/* This button mimics an input field to open a post creation dialog/modal */}
                <Button 
                  variant="ghost"
                  className="flex-grow justify-start h-10 rounded-full bg-secondary hover:bg-muted/80 text-muted-foreground px-4 text-sm w-full"
                >
                  {`What's on your mind, ${currentUserData.name.split(' ')[0]}?`}
                </Button>
              </div>
              <div className="flex justify-around">
                <Button variant="ghost" className="text-muted-foreground hover:bg-accent hover:text-primary flex-1">
                  <Video className="mr-2 h-5 w-5 text-red-500" /> Live Video
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:bg-accent hover:text-primary flex-1">
                  <Image className="mr-2 h-5 w-5 text-green-500" /> Photo/Video
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:bg-accent hover:text-primary flex-1">
                  <Edit3 className="mr-2 h-5 w-5 text-blue-500" /> Post
                </Button>
              </div>
            </Card>

            {/* Feed Posts List */}
            {feedPostsData.map(post => (
              <FeedPost
                key={post.id}
                user={post.user}
                postTime={post.postTime}
                contentText={post.contentText}
                contentImageUrl={post.contentImageUrl}
                locationTag={post.locationTag}
                sharedLocationInfo={post.sharedLocationInfo}
                isSponsored={post.isSponsored}
                postAudience={post.postAudience}
              />
            ))}
          </div>
        </main>
      </div>

      {/* Right Sidebar Area */}
      <aside className="fixed top-0 right-0 h-screen w-80 bg-card border-l border-border flex flex-col overflow-y-auto p-3">
        {/* Components within the right sidebar. `p-3` on aside provides overall padding. */}
        <StoriesSidebar className="mb-4" /> {/* Added margin-bottom for spacing */}
        {/* SuggestedGroups will follow. If more spacing needed, a Separator or margin on SuggestedGroups could be used. */}
        <SuggestedGroups />
      </aside>
    </div>
  );
};

export default MainFeedPage;
