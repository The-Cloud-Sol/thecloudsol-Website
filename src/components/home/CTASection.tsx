import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import DarkVeil from "./DarkVeil";

export function CTASection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0 w-full h-full">
        <div className="h-full w-full">
          <DarkVeil
            hueShift={39}
            noiseIntensity={0}
            scanlineIntensity={0}
            scanlineFrequency={0.8}
            warpAmount={0.25}
            speed={0.65}
            resolutionScale={1.2}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-slate-950 to-slate-950" />
      </div>
      
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 text-center text-white">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-white/70">
            <Sparkles className="h-4 w-4" />
            Get Started
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_8px_32px_rgba(14,165,233,0.45)]">
            Ready to <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">Transform</span> Your Cloud Infrastructure?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl text-white/80">
            Let's discuss how The Cloud Sol can help you achieve your digital transformation goals. Get a personalized consultation today.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white border-0 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/quote">
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur rounded-full px-8 py-6 text-lg font-medium transition-all duration-300">
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" /> Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
