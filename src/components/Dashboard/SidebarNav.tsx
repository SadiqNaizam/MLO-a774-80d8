import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Newspaper,
  MessageSquareText,
  PlaySquare,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  ListChecks,
  HeartHandshake,
  ChevronDown,
  ChevronUp,
  Settings,
  CircleHelp // Using CircleHelp for generic 'Create' items as per image, or just text
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  active?: boolean;
  isSectionTitle?: boolean;
  children?: NavItem[];
}

const mainNavItems: NavItem[] = [
  { id: 'newsFeed', label: 'News Feed', icon: Newspaper, href: '#', active: true },
  { id: 'messenger', label: 'Messenger', icon: MessageSquareText, href: '#' },
  { id: 'watch', label: 'Watch', icon: PlaySquare, href: '#' },
  { id: 'marketplace', label: 'Marketplace', icon: Store, href: '#' },
];

const shortcutsItems: NavItem[] = [
  { id: 'shortcutsTitle', label: 'Shortcuts', icon: Settings /* Placeholder icon */, href: '#', isSectionTitle: true },
  { id: 'farmville2', label: 'FarmVille 2', icon: Gamepad2, href: '#' },
];

const exploreItems: NavItem[] = [
  { id: 'events', label: 'Events', icon: CalendarDays, href: '#' },
  { id: 'pages', label: 'Pages', icon: Flag, href: '#' },
  { id: 'groups', label: 'Groups', icon: Users, href: '#' },
  { id: 'friendLists', label: 'Friend Lists', icon: ListChecks, href: '#' },
  { id: 'fundraisers', label: 'Fundraisers', icon: HeartHandshake, href: '#' },
];

const createItems: NavItem[] = [
  { id: 'ad', label: 'Ad', icon: CircleHelp, href: '#' }, // Simplified create links as per image context
  { id: 'page', label: 'Page', icon: CircleHelp, href: '#' },
  { id: 'group', label: 'Group', icon: CircleHelp, href: '#' },
  { id: 'event', label: 'Event', icon: CircleHelp, href: '#' },
  { id: 'fundraiserCreate', label: 'Fundraiser', icon: CircleHelp, href: '#' },
];

const SidebarNav: React.FC = () => {
  const [isExploreOpen, setIsExploreOpen] = React.useState(false);

  const renderNavItem = (item: NavItem) => (
    <Button
      key={item.id}
      variant={item.active ? 'secondary' : 'ghost'}
      className={cn(
        'w-full justify-start text-sm font-medium h-9 px-3',
        item.active
          ? 'bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        item.isSectionTitle && 'text-sidebar-muted-foreground pointer-events-none px-2 font-semibold uppercase text-xs tracking-wider mt-2 mb-1'
      )}
      asChild={!item.isSectionTitle}
    >
      {item.isSectionTitle ? (
        <span>{item.label}</span>
      ) : (
        <a href={item.href} className="flex items-center">
          <item.icon className="mr-3 h-5 w-5" />
          {item.label}
        </a>
      )}
    </Button>
  );

  return (
    <nav className="fixed top-0 left-0 flex h-screen w-64 flex-col bg-sidebar text-sidebar-foreground p-2 z-20">
      <div className="p-2 mb-2">
        <Button variant="ghost" className="w-full justify-start h-auto px-2 py-2 hover:bg-sidebar-accent">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src="https://i.pravatar.cc/40?u=OlennaMason" alt="Olenna Mason" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-sidebar-foreground">Olenna Mason</span>
        </Button>
      </div>
      
      <ScrollArea className="flex-grow">
        <div className="space-y-0.5">
          {mainNavItems.map(renderNavItem)}
        </div>

        <Separator className="my-3 bg-sidebar-border" />

        <div className="space-y-0.5">
          {shortcutsItems.map(renderNavItem)}
        </div>

        <Separator className="my-3 bg-sidebar-border" />
        
        <Collapsible open={isExploreOpen} onOpenChange={setIsExploreOpen}>
          <div className='px-2 text-sidebar-muted-foreground font-semibold uppercase text-xs tracking-wider mt-2 mb-1'>Explore</div>
          {exploreItems.slice(0, 3).map(renderNavItem)} 
          <CollapsibleContent className="space-y-0.5">
            {exploreItems.slice(3).map(renderNavItem)}
          </CollapsibleContent>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-start text-sm font-medium h-9 px-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              {isExploreOpen ? <ChevronUp className="mr-3 h-5 w-5" /> : <ChevronDown className="mr-3 h-5 w-5" />}
              {isExploreOpen ? 'See Less' : 'See More...'}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>

        <Separator className="my-3 bg-sidebar-border" />

        <div className="space-y-0.5">
           <div className='px-2 text-sidebar-muted-foreground font-semibold uppercase text-xs tracking-wider mt-2 mb-1'>Create</div>
          {createItems.map(item => (
             <Button
              key={item.id}
              variant='link'
              className='w-full justify-start text-sm font-normal h-7 px-3 text-sidebar-muted-foreground hover:text-sidebar-foreground no-underline hover:no-underline'
              asChild
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </nav>
  );
};

export default SidebarNav;
