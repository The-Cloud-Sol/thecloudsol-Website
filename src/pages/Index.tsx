import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicePillars } from "@/components/home/ServicePillars";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { LogoCarousel } from "@/components/home/LogoCarousel";
import { InfrastructureSection } from "@/components/home/InfrastructureSection";

// Client logos
const clientLogos = [
  "/assets/Clients Logo/0000122_seca-logo-en.png",
  "/assets/Clients Logo/Final Wht Tr (1).png",
  "/assets/Clients Logo/Integra Engineering.png",
  "/assets/Clients Logo/Mahi System Pvt Ltd.png",
  "/assets/Clients Logo/logo-bulwark-systems.png",
  "/assets/Clients Logo/logo.png",
  "/assets/Clients Logo/logo1.png",
  "/assets/Clients Logo/newl.png",
  "/assets/Clients Logo/seastarr_international_logo.jpg",
  "/assets/Clients Logo/shrihari.png",
  "/assets/Clients Logo/tmpqdn9_n_2.webp",
  "/assets/Clients Logo/208f3b_1b7dd7d71cdc4b8c81cfc6886bebec52~mv2_d_1200_1200_s_2.jpg",
  "/assets/Clients Logo/Technoprism-Logo-Transparent-BG-1.webp",
  "/assets/Clients Logo/infotech-header.png",
  "/assets/Clients Logo/uvr-logo-nav-Bgw2IkTx.webp"
];

// Partner logos from assets/Partners directory
const partnerLogos = [
  "/assets/Partners/Partners/67096ed995c868888ed718321b136a68.png",
  "/assets/Partners/Partners/PikPng.com_google-logo-png_1836434.png",
  "/assets/Partners/Partners/PikPng.com_run-dmc-png_5240809.png",
  "/assets/Partners/Partners/PikPng.com_thundercats-logo-png_2735611.png",
  "/assets/Partners/Partners/image (1).png",
  "/assets/Partners/Partners/image (2).png",
  "/assets/Partners/Partners/image (3).png",
  "/assets/Partners/Partners/image (4).png",
  "/assets/Partners/Partners/image (5).png",
  "/assets/Partners/Partners/image (6).png",
  "/assets/Partners/Partners/image (7).png",
  "/assets/Partners/Partners/image (8).png",
  "/assets/Partners/Partners/image (9).png",
  "/assets/Partners/Partners/image.png",
  "/assets/Partners/Partners/microsoft-sharepoint-logo-png_seeklogo-375997.png"
];

const Index = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <InfrastructureSection />
      <div className="relative bg-gradient-to-b from-slate-950 via-slate-950/98 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-slate-950/30 to-transparent" />
        <LogoCarousel 
          title="Our Trusted Partners" 
          images={partnerLogos} 
          className="py-16 relative z-10" 
        />
      </div>
      <ServicePillars />
      <div className="relative bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950">
        <LogoCarousel 
          title="Our Valued Clients" 
          images={clientLogos} 
          className="py-16" 
        />
      </div>
      <AboutSection />
      <TestimonialsCarousel />
    </div>
  );
};

export default Index;
