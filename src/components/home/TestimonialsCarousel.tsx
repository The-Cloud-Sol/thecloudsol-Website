import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    quote: "The Cloud Sol transformed our entire IT infrastructure. Their Azure expertise helped us reduce costs by 40% while improving performance significantly.",
    company: "TechVentures Inc.",
    rating: 4
  },
  {
    quote: "Their Microsoft 365 implementation was flawless. Our team's collaboration has never been better, and the training they provided was exceptional.",
    company: "Global Finance Corp",
    rating: 5
  },
  {
    quote: "We migrated to AWS with The Cloud Sol's guidance, and the results exceeded our expectations. Professional, knowledgeable, and always available.",
    company: "HealthPlus",
    rating: 3
  },
  {
    quote: "The specialized training programs helped our team become cloud-certified. The Cloud Sol is a true partner in our digital transformation journey.",
    company: "EduTech Solutions",
    rating: 5
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-white/70">
            <Sparkles className="h-4 w-4" />
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_8px_32px_rgba(14,165,233,0.45)]">
            What Our <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/80">
            Trusted by businesses across industries for cloud transformation success.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-8 md:p-12">
            <div className="absolute right-8 top-8 opacity-10">
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 opacity-50 blur-3xl" />
            </div>
            
            <Quote className="h-12 w-12 text-sky-400 mb-6" />
            <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-sky-300">
                    {testimonials[currentIndex].company.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">{testimonials[currentIndex].company}</p>
                </div>
              </div>
              {/* 5-Star Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < testimonials[currentIndex].rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-sky-500/50 backdrop-blur"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-sky-400 w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-sky-500/50 backdrop-blur"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
