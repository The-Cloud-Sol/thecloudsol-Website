import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Server, Database, Code, Box, Sparkles } from "lucide-react";

const services = [
  {
    title: "Microsoft 365 Cloud Solutions",
    description: "Complete Microsoft 365 implementation with SharePoint, PowerApps, Teams, and Exchange. Expert cloud productivity setup for enterprise collaboration and digital workplace transformation.",
    path: "/services/microsoft-365",
    icon: <Box className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Azure Cloud Services",
    description: "Enterprise Azure cloud solutions including IaaS, PaaS, identity security, hybrid cloud architecture, and disaster recovery. Certified Azure architects for seamless cloud migration.",
    path: "/services/azure",
    icon: <Cloud className="h-6 w-6" />,
    color: "from-sky-500 to-blue-400"
  },
  {
    title: "AWS Cloud Computing",
    description: "Professional AWS cloud services with scalable compute, storage, database, and machine learning solutions. Expert AWS consultants for enterprise cloud infrastructure and migration.",
    path: "/services/aws",
    icon: <Server className="h-6 w-6" />,
    color: "from-amber-500 to-orange-400"
  },
  {
    title: "Cloud Web Development",
    description: "Cloud-native web development with modern frameworks, responsive design, and high-performance applications. Full-stack development optimized for cloud deployment and scalability.",
    path: "/services/web-development",
    icon: <Code className="h-6 w-6" />,
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "Cloud Automation Services",
    description: "Intelligent cloud automation solutions with Power Platform, workflow optimization, and business process automation. Reduce manual work and improve operational efficiency with cloud-based tools.",
    path: "/services/workflow-automation",
    icon: <Sparkles className="h-6 w-6" />,
    color: "from-purple-500 to-violet-400"
  },
  {
    title: "Google Cloud Workspace",
    description: "Google Workspace cloud solutions with secure Gmail, Drive, Docs, and Meet integration. Cloud collaboration tools for remote work, team productivity, and enterprise communication.",
    path: "/services/google-workspace",
    icon: <Code className="h-6 w-6" />,
    color: "from-red-500 to-pink-400"
  }
];

export function ServicePillars() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background effects */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(/shamin-haky-Uhx-gHPpCDg-unsplash.jpg)',
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-white/70">
            <Sparkles className="h-4 w-4" />
            Cloud Computing Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_8px_32px_rgba(14,165,233,0.45)]">
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">Enterprise Cloud Solutions & Services</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/80">
            Leading cloud computing company in India offering comprehensive Azure, AWS, Google Cloud, and Microsoft 365 services. 
            Expert cloud migration, security, and automation solutions for digital transformation and business growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-all hover:border-sky-500/30 hover:bg-white/10"
            >
              <div className="absolute right-6 top-6 opacity-10 transition-opacity group-hover:opacity-20">
                <div className={`h-24 w-24 rounded-full bg-gradient-to-br ${service.color} opacity-50 blur-3xl`} />
              </div>
              
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm text-white/75 mb-6">
                {service.description}
              </p>
              
              {/* Hide "Learn more" for Cloud Web Development and Cloud Automation Services */}
              {service.title !== "Cloud Web Development" && service.title !== "Cloud Automation Services" && (
                <div className="mt-auto">
                  <Button asChild variant="link" className="px-0 text-sky-400 hover:text-sky-300 group-hover:pl-2 transition-all duration-300">
                    <Link to={service.path}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
