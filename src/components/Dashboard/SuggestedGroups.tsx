import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Users,
  Plus,
  X
} from 'lucide-react';

interface GroupSuggestion {
  id: string;
  name: string;
  tagline?: string;
  members: number;
  imageUrl: string;
  userAvatars: string[]; // URLs for small avatars overlaid on image
}

const suggestedGroupsData: GroupSuggestion[] = [
  {
    id: 'group1',
    name: 'Mad Men (MADdicts)',
    members: 6195,
    imageUrl: 'https://via.placeholder.com/300x100/6B8E23/FFFFFF?text=Mad+Men+Banner',
    userAvatars: [
      'https://i.pravatar.cc/20?u=user1',
      'https://i.pravatar.cc/20?u=user2',
      'https://i.pravatar.cc/20?u=user3',
      'https://i.pravatar.cc/20?u=user4',
    ],
  },
  {
    id: 'group2',
    name: 'Dexter Morgan',
    members: 6984,
    imageUrl: 'https://via.placeholder.com/300x100/A52A2A/FFFFFF?text=Dexter+Banner',
    userAvatars: [
      'https://i.pravatar.cc/20?u=user5',
      'https://i.pravatar.cc/20?u=user6',
      'https://i.pravatar.cc/20?u=user7',
    ],
  },
  {
    id: 'group3',
    name: 'Tech Innovators Hub',
    members: 12034,
    imageUrl: 'https://via.placeholder.com/300x100/1E90FF/FFFFFF?text=Tech+Hub',
    userAvatars: [
      'https://i.pravatar.cc/20?u=user8',
      'https://i.pravatar.cc/20?u=user9',
      'https://i.pravatar.cc/20?u=user10',
      'https://i.pravatar.cc/20?u=user11',
      'https://i.pravatar.cc/20?u=user12',
    ],
  },
];

interface SuggestedGroupsProps {
  className?: string;
}

const SuggestedGroups: React.FC<SuggestedGroupsProps> = ({ className }) => {
  const [groups, setGroups] = React.useState(suggestedGroupsData);

  const handleDismiss = (groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
  };

  return (
    <Card className={cn('w-full bg-card text-card-foreground p-0 shadow-none border-none rounded-none', className)}>
      <CardHeader className="flex flex-row items-center justify-between p-3 border-b border-border">
        <h2 className="text-md font-semibold text-card-foreground">Suggested Groups</h2>
        <Button variant="link" className="text-sm text-primary p-0 h-auto hover:underline">
          See All
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh_-_200px)]"> {/* Adjust height as needed */}
          <div className="divide-y divide-border">
            {groups.map((group) => (
              <div key={group.id} className="p-3 hover:bg-accent/50 relative group/item">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover/item:opacity-100 transition-opacity text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => handleDismiss(group.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <div className="flex items-start space-x-3">
                  <div className="relative w-full aspect-[16/7] rounded overflow-hidden mb-2">
                    <img src={group.imageUrl} alt={group.name} className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 left-2 flex space-x-[-8px]">
                      {group.userAvatars.slice(0, 5).map((avatarUrl, index) => (
                        <Avatar key={index} className="h-5 w-5 border-2 border-card">
                          <AvatarImage src={avatarUrl} />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground hover:underline cursor-pointer">{group.name}</h3>
                  <p className="text-xs text-muted-foreground">{group.members.toLocaleString()} members</p>
                </div>
                <Button variant="outline" className="w-full mt-2 h-8 text-sm border-border hover:border-primary hover:bg-primary/10 hover:text-primary">
                  <Plus className="mr-1.5 h-4 w-4" /> Join
                </Button>
              </div>
            ))}
            {groups.length === 0 && (
                <p className="p-4 text-sm text-muted-foreground text-center">No more group suggestions.</p>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default SuggestedGroups;
