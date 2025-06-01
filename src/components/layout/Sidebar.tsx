import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNavContent from '../Dashboard/SidebarNav'; // Adjusted import name for clarity

interface SidebarProps {
  children?: React.ReactNode; // Per layout component guidelines, for custom content if needed
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
  // SidebarNavContent (from ../Dashboard/SidebarNav.tsx) is an organism that handles
  // its own fixed positioning, styling (width, height, background, z-index)
  // as per the project's Layout Requirements and its own provided code.
  // The original SidebarNav.tsx in the context does not accept a `className` prop.
  // This Sidebar component acts as a semantic wrapper (<aside>) and a designated
  // slot in the layout structure.
  // If 'children' are provided, they are rendered. Otherwise, SidebarNavContent is the default.
  // The 'className' prop applies to the <aside> element itself.
  return (
    <aside className={cn(className)}>
      {children ? children : <SidebarNavContent />}
    </aside>
  );
};

export default Sidebar;
