import { ReactNode } from "react";

interface ServiceHeroProps {
  title: string;
  description: string;
  icon?: ReactNode;
  badge?: string;
  className?: string;
  backgroundImage?: string;
}

export function ServiceHero({ 
  title, 
  description, 
  icon, 
  badge, 
  className = "",
  backgroundImage
}: ServiceHeroProps) {
  return (
    <section 
      className={`relative overflow-hidden py-16 lg:py-24 ${className}`}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      } : {
        background: 'linear-gradient(to bottom right, var(--primary), var(--primary)/90)'
      }}
    >
      {/* Background Overlay */}
      {!backgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary rounded-full blur-3xl" />
        </div>
      )}

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              {badge}
            </span>
          )}
          
          {icon && (
            <div className="mb-4 text-secondary">{icon}</div>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
