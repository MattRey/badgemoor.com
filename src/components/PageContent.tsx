import { ReactNode } from 'react';

interface PageContentProps {
  children: ReactNode;
}

export default function PageContent({ children }: PageContentProps) {
  return (
    <div 
      id="content" 
      className="min-h-[650px] w-screen relative bg-[var(--background)]"
      style={{
        backgroundImage: 'url(/bg_logo.png)',
        backgroundPosition: 'bottom left',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        {children}
      </div>
    </div>
  );
} 