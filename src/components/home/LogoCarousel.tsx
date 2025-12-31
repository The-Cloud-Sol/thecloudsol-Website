"use client";

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface LogoCarouselProps {
  title: string;
  images: string[];
  className?: string;
}

export function LogoCarousel({ title, images, className }: LogoCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollerContent = Array.from(scroller.children);
    const totalWidth = scroller.scrollWidth / 2;

    const animation = scroller.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(calc(-${totalWidth}px))` }
      ],
      {
        duration: 40000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.play();

    scroller.addEventListener('mouseenter', handleMouseEnter);
    scroller.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      animation.cancel();
      scroller.removeEventListener('mouseenter', handleMouseEnter);
      scroller.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [images]);

  return (
    <section className={cn("relative w-full py-24 overflow-hidden", className)}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-white/70">
            <Sparkles className="h-4 w-4" />
            {title.includes('Clients') ? 'Clients' : 'Partners'}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_8px_32px_rgba(14,165,233,0.45)]">
            {title.split(' ').map((word, index) => (
              <span key={index}>
                {word === 'Our' || word === 'Valued' || word === 'Trusted' ? (
                  word
                ) : (
                  <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                    {word}
                  </span>
                )}{' '}
              </span>
            ))}
          </h2>
        </div>
        
        <div className="relative w-full overflow-hidden">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
          
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
          
          <div 
            ref={scrollerRef}
            className="flex gap-12 md:gap-20 items-center w-max px-24 md:px-32"
          >
            {[...images, ...images].map((img, idx) => (
              <div 
                key={idx}
                className="group flex-shrink-0 flex items-center justify-center w-32 md:w-40 h-20 md:h-24 px-4 transition-all duration-500 hover:scale-110"
              >
                <img
                  src={img}
                  alt={`${title} logo`}
                  className="h-full w-auto max-w-full object-contain transition-all duration-500 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
