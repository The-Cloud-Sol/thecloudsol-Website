import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      // Show button when page is scrolled down
      if (scrollPosition > 300) {
        setIsVisible(true);
        
        // Determine if user is closer to top or bottom
        const distanceFromTop = scrollPosition;
        const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);
        
        if (distanceFromBottom < 200) {
          // Near bottom - show up arrow
          setScrollDirection('up');
        } else if (distanceFromTop < 200) {
          // Near top - show down arrow
          setScrollDirection('down');
        } else {
          // In middle - show up arrow (more common use case)
          setScrollDirection('up');
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScroll = () => {
    if (scrollDirection === 'up') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleScroll}
      className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 backdrop-blur-sm text-white/70 transition-all hover:border-sky-500/50 hover:bg-slate-800/90 hover:text-sky-400 hover:scale-110"
      aria-label={scrollDirection === 'up' ? 'Scroll to top' : 'Scroll to bottom'}
    >
      {scrollDirection === 'up' ? (
        <ChevronUp className="h-5 w-5 transition-transform hover:-translate-y-0.5" />
      ) : (
        <ChevronDown className="h-5 w-5 transition-transform hover:translate-y-0.5" />
      )}
    </button>
  );
}
