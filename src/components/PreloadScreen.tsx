'use client';

import { useEffect, useState } from 'react';
import { TextType } from '@/components/ui/text-type';

const PreloadScreen = () => {
  const [showPreload, setShowPreload] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreload(false);
      document.body.style.overflow = 'auto';
    }, 4000); // Hide after 4 seconds

    // Prevent scrolling when preload is visible
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!showPreload) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="text-3xl font-bold md:text-5xl">
          <TextType 
            text={["Welcome to TheCloudSol"]}
            typingSpeed={100}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-primary animate-pulse"
            className="text-foreground"
          />
        </div>
      </div>
    </div>
  );
};

export default PreloadScreen;
