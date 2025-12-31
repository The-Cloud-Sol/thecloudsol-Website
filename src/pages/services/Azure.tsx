import { Server, Code2, ShieldCheck, Database, Cpu, Network, Cloud, Lock, RefreshCw, ArrowRight, Zap, Sparkles, PhoneCall, Phone, CheckCircle, HelpCircle, Plus, MessageSquare } from "lucide-react";
import DarkVeil from "@/components/home/DarkVeil";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Server,
    color: "text-blue-400",
    title: "Infrastructure as a Service (IaaS)",
    description: "Deploy and manage virtual machines, networking, and storage on Azure's global infrastructure.",
    features: [
      "Virtual machine deployment",
      "Virtual network configuration",
      "Load balancers and traffic management",
      "Azure Storage solutions"
    ]
  },
  {
    icon: Code2,
    color: "text-indigo-400",
    title: "Platform as a Service (PaaS)",
    description: "Build, run, and manage applications without managing underlying infrastructure.",
    features: [
      "Azure App Services",
      "Azure Functions (serverless)",
      "Container services (AKS)",
      "Azure SQL and Cosmos DB"
    ]
  },
  {
    icon: Database,
    color: "text-cyan-400",
    title: "Database Solutions",
    description: "Fully managed database services with built-in high availability and security.",
    features: [
      "Azure SQL Database",
      "Cosmos DB (NoSQL)",
      "Database migration services",
      "Data warehousing"
    ]
  },
  {
    icon: ShieldCheck,
    color: "text-green-400",
    title: "Security & Compliance",
    description: "Protect your cloud resources with Azure Active Directory and advanced security solutions.",
    features: [
      "Azure Active Directory setup",
      "Multi-factor authentication",
      "Conditional access policies",
      "Azure Sentinel SIEM",
    ],
  },
  {
    icon: Zap,
    color: "text-yellow-400",
    title: "Hybrid Cloud Solutions",
    description: "Connect your on-premises infrastructure with Azure for seamless hybrid operations.",
    features: [
      "Azure Arc management",
      "Hybrid networking (VPN/ExpressRoute)",
      "Azure Stack solutions",
      "Hybrid identity management",
    ],
  },
  {
    icon: Database,
    color: "text-purple-400",
    title: "Backup & Recovery",
    description: "Comprehensive data protection and disaster recovery solutions for your Azure workloads.",
    features: [
      "Azure Backup",
      "Azure Site Recovery setup",
      "Automated backup policies",
      "Geo-redundant storage",
      "Business continuity planning",
    ],
  },
  {
    icon: Network,
    color: "text-blue-400",
    title: "Networking",
    description: "Secure and reliable networking services for your cloud applications.",
    features: [
      "Virtual Networks",
      "Load Balancers",
      "Application Gateway",
      "Azure DNS"
    ],
  },
  {
    icon: RefreshCw,
    color: "text-secondary",
    title: "Azure Migration",
    description: "Seamlessly migrate your workloads to Azure with minimal downtime and risk.",
    features: [
      "Migration assessment",
      "Lift-and-shift migration",
      "Application modernization",
      "Database migration services",
    ],
  },
];

const faqs = [
  {
    question: "How can your Azure cloud services help my business grow?",
    answer: "Our Microsoft Azure services provide scalable, secure, and cost-efficient cloud infrastructure that helps businesses modernize applications, improve performance, and scale with confidence."
  },
  {
    question: "Do you offer Azure migration and modernization services?",
    answer: "Yes. We migrate on-premise servers and workloads to Azure with minimal downtime while optimizing performance, security, and cost efficiency."
  },
  {
    question: "How do you manage security and identity in Azure?",
    answer: "We implement Azure Active Directory, multi-factor authentication, conditional access, identity governance, and continuous security monitoring to protect your cloud environment."
  },
  {
    question: "Can you design high-availability and disaster recovery solutions on Azure?",
    answer: "Absolutely. We build resilient Azure architectures with backup, disaster recovery, geo-redundancy, and high availability to ensure business continuity."
  },
  {
    question: "Do you help optimize Azure cloud costs?",
    answer: "Yes. Our Azure optimization services help reduce cloud spend while improving performance through resource right-sizing and continuous monitoring."
  }
];

export default function Azure() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <header className="relative pt-28 lg:pt-32 min-h-screen w-full overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full">
          <div className="h-full w-full">
            <DarkVeil
              hueShift={28}
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
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Hero Content */}
              <div className="text-left">
                <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-white/70">
                  CLOUD INNOVATION
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_8px_32px_rgba(14,165,233,0.45)]">
                  Transform Your Business with
                  <span className="block mt-3 bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                    Microsoft Azure
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80">
                  Expert-led cloud migration, infrastructure modernization, and AI solutions to help your business scale with confidence.
                </p>
              </div>

              {/* Right Column - 3 Divisions */}
              <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Cloud</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Azure Migration</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Seamless migration to Azure with minimal downtime and maximum efficiency.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">AI</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">AI Solutions</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Harness the power of Azure AI to drive innovation and insights.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Security</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Enterprise Security</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Comprehensive security solutions to protect your cloud infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SOLUTIONS */}
      <section id="solutions" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/kevin-ache-2JJ3wBHu4_0-unsplash.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Azure Cloud Solutions
            </h2>
            <p className="text-slate-300">
              Comprehensive cloud services to power your digital transformation
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-slate-800/30 backdrop-blur-md border-0 rounded-3xl p-8 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/40"
                >
                  <div className={`w-12 h-12 rounded-xl ${service.color.replace('text-', 'bg-')}/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-opacity-20`}>
                    <Icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-300">
                        <span className="mr-2 text-blue-400 mt-0.5">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Azure Cloud?
            </h2>
            <p className="text-slate-300">
              Enterprise-grade cloud platform with unmatched capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Cloud,
                title: "Global Infrastructure",
                description: "Deploy across 60+ regions with enterprise-grade infrastructure and hybrid capabilities."
              },
              {
                icon: ShieldCheck,
                title: "Security & Compliance",
                description: "Built-in security controls and compliance with industry standards."
              },
              {
                icon: Cpu,
                title: "AI & Machine Learning",
                description: "Harness AI and advanced analytics to drive business innovation."
              },
              {
                icon: Database,
                title: "Data Solutions",
                description: "Comprehensive data services including SQL, NoSQL, and big data solutions."
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="group bg-slate-800/30 backdrop-blur-md p-8 rounded-3xl border-0 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/40"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-blue-500/20">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-300">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/office.png')] opacity-5"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border-0 bg-blue-500/10 backdrop-blur-sm px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-blue-300 mb-6">
              <HelpCircle className="h-4 w-4" />
              GOT QUESTIONS?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Frequently Asked
              <span className="block mt-2 bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Everything you need to know about Microsoft Azure services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/30 backdrop-blur-md rounded-3xl border-0 shadow-2xl shadow-black/20 transition-all duration-300 overflow-hidden hover:bg-slate-800/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <details className="group/item p-8">
                  <summary className="flex cursor-pointer items-start justify-between text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <Plus className="h-4 w-4 text-blue-400 group-open:rotate-45 transition-transform" />
                    </div>
                  </summary>
                  
                  <div className="mt-4 text-slate-300 leading-relaxed group-open:animate-in slide-in-from-top-2 duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full border-0 shadow-lg shadow-black/10">
              <MessageSquare className="h-5 w-5 text-blue-400" />
              <span className="text-blue-300">Still have questions?</span>
              <a href="/contact" className="text-white font-medium hover:text-blue-300 transition-colors">
                Contact our experts →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-950/50 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/office.png')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-transparent to-slate-950/80"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border-0 bg-blue-500/10 backdrop-blur-sm px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-blue-300">
              <Sparkles className="h-4 w-4" />
              START YOUR JOURNEY
            </p>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform with
              <span className="block mt-2 bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent">
                Microsoft Azure?
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses leveraging Azure's power for innovation, scalability, and growth. 
              Let our certified experts guide your cloud transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/contact" className="group relative inline-flex items-center justify-center">
                <Button className="bg-blue-500/20 backdrop-blur-md text-white hover:bg-blue-500/30 px-8 py-4 text-lg font-semibold rounded-3xl shadow-2xl shadow-black/20 hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105 border-0">
                  <PhoneCall className="mr-3 h-5 w-5" />
                  Get Free Azure Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <a 
                href="tel:+1234567890" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-slate-800/30 backdrop-blur-md text-white font-semibold rounded-3xl border-0 shadow-lg shadow-black/20 hover:bg-slate-800/40 transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                Call Our Experts
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free Migration Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Cost Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
