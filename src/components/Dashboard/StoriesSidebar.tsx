import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  PlusCircle,
  Archive,
  Settings2 as Settings // Using Settings2 for consistency if Settings is used elsewhere
} from 'lucide-react';

interface StoryItem {
  id: string;
  userName: string;
  avatarUrl: string;
  storyImageUrl: string;
  viewed?: boolean;
}

const storiesData: StoryItem[] = [
  // Example stories - real app would fetch this
  { id: 'story1', userName: 'John Doe', avatarUrl: 'https://i.pravatar.cc/40?u=JohnStory', storyImageUrl: 'https://via.placeholder.com/100x150/FFA07A/000000?text=Story+1', viewed: false },
  { id: 'story2', userName: 'Jane Smith', avatarUrl: 'https://i.pravatar.cc/40?u=JaneStory', storyImageUrl: 'https://via.placeholder.com/100x150/ADD8E6/000000?text=Story+2', viewed: true },
  { id: 'story3', userName: 'Mike Brown', avatarUrl: 'https://i.pravatar.cc/40?u=MikeStory', storyImageUrl: 'https://via.placeholder.com/100x150/90EE90/000000?text=Story+3', viewed: false },
];

interface StoriesSidebarProps {
  className?: string;
}

const StoriesSidebar: React.FC<StoriesSidebarProps> = ({ className }) => {
  return (
    <Card className={cn('h-full w-full bg-card text-card-foreground p-3 flex flex-col shadow-none border-none rounded-none', className)}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-card-foreground">Stories</h2>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary px-2">
            <Archive className="mr-1 h-4 w-4" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary px-2">
            <Settings className="mr-1 h-4 w-4" /> Settings
          </Button>
        </div>
      </div>

      <Separator className="mb-3 bg-border" />

      <Button variant="outline" className="w-full h-auto p-3 mb-4 border-dashed border-primary text-primary hover:bg-primary/10 hover:text-primary">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
            <PlusCircle className="h-6 w-6 text-primary" />
          </div>
          <span className="text-sm font-medium">Add to Your Story</span>
          <span className="text-xs text-muted-foreground text-center">Share a photo, video or write something.</span>
        </div>
      </Button>
      
      {/* Placeholder for actual stories list if needed based on a fuller design */}
      {/* For now, the image mainly shows the 'Add to Story' part */}
      {/* <ScrollArea className="flex-grow">
        <div className="grid grid-cols-2 gap-2">
          {storiesData.map(story => (
            <div key={story.id} className="relative aspect-[2/3] rounded-lg overflow-hidden cursor-pointer group">
              <img src={story.storyImageUrl} alt={`${story.userName}'s story`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <Avatar className={cn('absolute top-2 left-2 h-8 w-8 border-2', story.viewed ? 'border-muted-foreground' : 'border-primary')}>
                <AvatarImage src={story.avatarUrl} alt={story.userName} />
                <AvatarFallback>{story.userName.substring(0,1)}</AvatarFallback>
              </Avatar>
              <p className="absolute bottom-2 left-2 text-xs font-medium text-white group-hover:underline">{story.userName}</p>
            </div>
          ))}
        </div>
      </ScrollArea> */}

    </Card>
  );
};

export default StoriesSidebar;
