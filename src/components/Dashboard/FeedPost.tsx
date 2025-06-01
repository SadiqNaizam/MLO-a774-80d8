import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import {
  MoreHorizontal,
  Globe,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  MapPin
} from 'lucide-react';

interface UserData {
  name: string;
  avatarUrl: string;
}

interface FeedPostProps {
  className?: string;
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

const FeedPost: React.FC<FeedPostProps> = ({
  className,
  user,
  postTime,
  postAudience = 'Public',
  contentText,
  contentImageUrl,
  locationTag,
  sharedLocationInfo,
  isSponsored = false,
}) => {
  return (
    <Card className={cn('w-full bg-card text-card-foreground shadow-sm', className)}>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-card-foreground">
                {user.name} 
                {locationTag && <span className="font-normal text-muted-foreground"> is in <span className='font-medium text-card-foreground'>{locationTag.city}, {locationTag.country}</span>.</span>}
              </p>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <span>{postTime}</span>
                <span>·</span>
                <Globe className="h-3 w-3" />
                {isSponsored && <><span>·</span><span>Sponsored</span></>}
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-accent">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Hide post</DropdownMenuItem>
              <DropdownMenuItem>Report post</DropdownMenuItem>
              <DropdownMenuItem>Save post</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {contentText && <p className="px-4 pb-3 text-sm text-card-foreground whitespace-pre-wrap">{contentText}</p>}
        {contentImageUrl && (
          <div className="aspect-[16/9] bg-muted overflow-hidden">
             <img src={contentImageUrl} alt="Post content" className="w-full h-full object-cover" />
          </div>
        )}
      </CardContent>

      {(sharedLocationInfo || locationTag) && contentImageUrl && (
        <div className="px-4 py-3 border-t border-border flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <div className="p-2 bg-secondary rounded-full">
                    <MapPin className="h-5 w-5 text-primary"/>
                </div>
                <div>
                    <p className="text-sm font-medium text-card-foreground">{locationTag?.city}, {locationTag?.country}</p>
                    <p className="text-xs text-muted-foreground">{sharedLocationInfo || 'City · United States'}</p>
                </div>
            </div>
            <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/10">
                Save
            </Button>
        </div>
      )}

      <Separator className='mx-4 w-auto my-0' />

      <CardFooter className="p-2 flex justify-around">
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent hover:text-primary">
          <ThumbsUp className="mr-2 h-5 w-5" /> Like
        </Button>
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent hover:text-primary">
          <MessageSquare className="mr-2 h-5 w-5" /> Comment
        </Button>
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-accent hover:text-primary">
          <Share2 className="mr-2 h-5 w-5" /> Share
        </Button>
      </CardFooter>
    </Card>
  );
};

// Example Usage Data for FeedPost (would be passed as props)
export const exampleFeedPostData = {
  user: {
    name: 'Julia Fillory',
    avatarUrl: 'https://i.pravatar.cc/40?u=JuliaFillory',
  },
  postTime: '2 hrs ago',
  locationTag: {
    city: 'Raleigh',
    country: 'North Carolina',
  },
  contentText: 'Checking out some new stores downtown!',
  contentImageUrl: 'https://via.placeholder.com/600x350/ddeeff/555555?text=Map+of+Raleigh+Area',
  sharedLocationInfo: 'Bryan Durand and 2 others have been here',
};

export default FeedPost;
