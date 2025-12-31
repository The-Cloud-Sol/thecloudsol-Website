import { Suspense, lazy } from "react";
import { Hero } from "@/components/home/Hero";
import { ServicePillars } from "@/components/home/ServicePillars";

// Lazy load below-the-fold components with proper named export handling
const AboutSection = lazy(() => import("@/components/home/AboutSection").then(module => ({ default: module.AboutSection })));
const TestimonialsCarousel = lazy(() => import("@/components/home/TestimonialsCarousel").then(module => ({ default: module.TestimonialsCarousel })));
const LogoCarousel = lazy(() => import("@/components/home/LogoCarousel").then(module => ({ default: module.LogoCarousel })));
const InfrastructureSection = lazy(() => import("@/components/home/InfrastructureSection").then(module => ({ default: module.InfrastructureSection })));

// Loading fallback for lazy components
const ComponentLoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500"></div>
  </div>
);

// Client logos
const clientLogos = [
  "/src/assets/Clients Logo/0000122_seca-logo-en.png",
  "/src/assets/Clients Logo/Final Wht Tr (1).png",
  "/src/assets/Clients Logo/Integra Engineering.png",
  "/src/assets/Clients Logo/Mahi System Pvt Ltd.png",
  "/src/assets/Clients Logo/decon-Logo.png",
  "/src/assets/Clients Logo/logo EP.png",
  "/src/assets/Clients Logo/logo-bulwark-systems.png",
  "/src/assets/Clients Logo/logo.png",
  "/src/assets/Clients Logo/logo1.png",
  "/src/assets/Clients Logo/newl.png",
  "/src/assets/Clients Logo/seastarr_international_logo.jpg",
  "/src/assets/Clients Logo/shrihari.png",
  "/src/assets/Clients Logo/tmpqdn9_n_2.webp"
];

// Partner logos from src/assets/Partners directory
const partnerLogos = [
  "/src/assets/Partners/67096ed995c868888ed718321b136a68.png",
  "/src/assets/Partners/PikPng.com_google-logo-png_1836434.png",
  "/src/assets/Partners/PikPng.com_run-dmc-png_5240809.png",
  "/src/assets/Partners/PikPng.com_thundercats-logo-png_2735611.png",
  "/src/assets/Partners/image (1).png",
  "/src/assets/Partners/image (2).png",
  "/src/assets/Partners/image (3).png",
  "/src/assets/Partners/image (4).png",
  "/src/assets/Partners/image (5).png",
  "/src/assets/Partners/image (6).png",
  "/src/assets/Partners/image (7).png",
  "/src/assets/Partners/image (8).png",
  "/src/assets/Partners/image (9).png",
  "/src/assets/Partners/image.png",
  "/src/assets/Partners/microsoft-sharepoint-logo-png_seeklogo-375997.png"
];

const Index = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Suspense fallback={<ComponentLoadingFallback />}>
        <InfrastructureSection />
      </Suspense>
      <div className="relative bg-gradient-to-b from-slate-950 via-slate-950/98 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-slate-950/30 to-transparent" />
        <Suspense fallback={<ComponentLoadingFallback />}>
          <LogoCarousel 
            title="Our Trusted Partners" 
            images={partnerLogos} 
            className="py-16 relative z-10" 
          />
        </Suspense>
      </div>
      <ServicePillars />
      <div className="relative bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950">
        <Suspense fallback={<ComponentLoadingFallback />}>
          <LogoCarousel 
            title="Our Valued Clients" 
            images={clientLogos} 
            className="py-16 relative z-10" 
          />
        </Suspense>
      </div>
      <Suspense fallback={<ComponentLoadingFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<ComponentLoadingFallback />}>
        <TestimonialsCarousel />
      </Suspense>
    </div>
  );
};

export default Index;
