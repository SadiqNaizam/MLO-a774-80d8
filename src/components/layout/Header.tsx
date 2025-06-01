import React from 'react';
import { cn } from '@/lib/utils';
import TopHeaderContent from '../Dashboard/TopHeader'; // Adjusted import name for clarity

interface HeaderProps {
  children?: React.ReactNode; // Per layout component guidelines, for custom content if needed
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  // TopHeaderContent (from ../Dashboard/TopHeader.tsx) is an organism.
  // It is already a <header> element and handles its own fixed positioning,
  // styling (height, background, z-index, flex properties) as per Layout Requirements
  // and its own provided code. It accepts a 'className' prop.

  // If 'children' are provided, this Header component acts as a generic container.
  // It applies base styles for a fixed header area to wrap the custom children.
  if (children) {
    return (
      <div
        className={cn(
          // Base styles for a generic fixed header container, mirroring TopHeaderContent's fixed nature
          'fixed top-0 left-0 right-80 h-16 z-10', // Sizing and positioning from Layout Requirements. 'right-80' accounts for right sidebar.
          'bg-card', // 'bg-card' is used by TopHeaderContent; var(--card) is noted as PRD surface.
          'flex items-center justify-between px-4', // Flex properties from Layout Requirements.
          'border-b border-border', // Border consistent with TopHeaderContent's appearance.
          className
        )}
      >
        {children}
      </div>
    );
  }

  // Default behavior: render the TopHeaderContent organism.
  // The 'className' prop is passed to TopHeaderContent, which can merge it with its own classes.
  return <TopHeaderContent className={className} />;
};

export default Header;
