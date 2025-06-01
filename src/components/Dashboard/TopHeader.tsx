import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Facebook,
  Search,
  Home,
  UsersRound, // For Find Friends
  UserPlus, // For Friend Requests
  MessageCircle, // For Messages
  Bell,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-80 h-16 bg-card text-card-foreground border-b border-border',
        'flex items-center justify-between px-4 z-10',
        className
      )}
    >
      {/* Left Section: Logo and Search */}
      <div className="flex items-center">
        <Facebook className="h-10 w-10 text-primary" />
        <div className="relative ml-2">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search"
            className="h-10 w-[240px] rounded-full bg-secondary pl-10 text-sm focus-visible:ring-primary"
          />
        </div>
      </div>

      {/* Center Section: Navigation (simplified based on image) */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="px-3 py-2 text-primary hover:bg-accent h-auto min-w-[80px] flex flex-col items-center space-y-1 rounded-none border-b-2 border-primary">
          <Home className="h-6 w-6" />
          {/* <span className="text-xs">Home</span> Hidden as per image */}
        </Button>
        <Button variant="ghost" className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent h-auto min-w-[80px] flex flex-col items-center space-y-1 rounded-none">
          <UsersRound className="h-6 w-6" />
           {/* <span className="text-xs">Find Friends</span> Hidden as per image */}
        </Button>
      </div>

      {/* Right Section: User Profile and Actions */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="rounded-full font-semibold px-3 py-1.5 h-auto hover:bg-accent">
          <Avatar className="h-7 w-7 mr-2">
            <AvatarImage src="https://i.pravatar.cc/30?u=OlennaMason" alt="Olenna Mason" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          Olenna
        </Button>
        
        <div className="flex items-center space-x-1">
          {[UserPlus, MessageCircle, Bell].map((Icon, index) => (
            <Button key={index} variant="secondary" size="icon" className="rounded-full w-10 h-10 bg-secondary hover:bg-muted relative">
              <Icon className="h-5 w-5 text-card-foreground" />
              {Icon === UserPlus && <Badge className="absolute -top-1 -right-1 h-4 px-1 text-xs justify-center bg-red-600 text-white">8</Badge>}
              {Icon === Bell && <Badge className="absolute -top-1 -right-1 h-4 px-1 text-xs justify-center bg-red-600 text-white">36</Badge>}
            </Button>
          ))}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full w-10 h-10 bg-secondary hover:bg-muted">
              <ChevronDown className="h-5 w-5 text-card-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
         <Button variant="secondary" size="icon" className="rounded-full w-10 h-10 bg-secondary hover:bg-muted">
            <HelpCircle className="h-5 w-5 text-card-foreground" />
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;
