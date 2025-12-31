import { Share2, Zap, Users, Mail, BarChart3, Shield, FileSpreadsheet, Workflow, Cloud, Lock, RefreshCw, ArrowRight, Calendar, MessageSquare, FileText, Cpu, Database, Sparkles, PhoneCall, Phone, CheckCircle, HelpCircle, Plus } from "lucide-react";
import DarkVeil from "@/components/home/DarkVeil";
import { Button } from "@/components/ui/button";

/* ---------------- TYPES ---------------- */

type Service = {
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
  features: string[];
};

type FAQ = {
  question: string;
  answer: string;
};

/* ---------------- DATA ---------------- */

const services: Service[] = [
  {
    icon: Share2,
    color: "text-blue-400",
    title: "SharePoint Online",
    description: "Modern intranet and document management solutions for seamless collaboration.",
    features: [
      "Custom intranet portals",
      "Document management",
      "Team sites & communication",
      "Workflow automation"
    ]
  },
  {
    icon: Zap,
    color: "text-yellow-400",
    title: "Power Platform",
    description: "Build custom business applications with low-code/no-code solutions.",
    features: [
      "Power Apps development",
      "Power Automate workflows",
      "Power BI analytics",
      "Power Virtual Agents"
    ]
  },
  {
    icon: Users,
    color: "text-purple-400",
    title: "Microsoft Teams",
    description: "Unified communication and collaboration platform for modern workplaces.",
    features: [
      "Team collaboration",
      "Video conferencing",
      "File sharing & storage",
      "Third-party app integration"
    ]
  },
  {
    icon: Mail,
    color: "text-green-400",
    title: "Exchange Online",
    description: "Enterprise-grade email, calendar, and contacts in the cloud.",
    features: [
      "Business-class email",
      "Shared calendars",
      "50GB mailbox storage",
      "Advanced threat protection"
    ]
  },
  {
    icon: Shield,
    color: "text-red-400",
    title: "Security & Compliance",
    description: "Comprehensive security and compliance solutions for your data.",
    features: [
      "Data loss prevention",
      "eDiscovery & legal hold",
      "Information protection",
      "Advanced threat analytics"
    ]
  },
  {
    icon: BarChart3,
    color: "text-cyan-400",
    title: "Microsoft Viva",
    description: "Employee experience platform that brings together communications, knowledge, learning, and resources.",
    features: [
      "Viva Connections",
      "Viva Learning",
      "Viva Topics",
      "Viva Insights"
    ]
  }
];

const benefits = [
  {
    icon: Cloud,
    title: "Cloud-First Approach",
    description: "Access your work from anywhere, on any device, with Microsoft's secure cloud infrastructure."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Built-in security features and compliance standards to protect your organization's data."
  },
  {
    icon: RefreshCw,
    title: "Always Up-to-Date",
    description: "Automatic updates ensure you always have the latest features and security patches."
  },
  {
    icon: Workflow,
    title: "Seamless Integration",
    description: "Works perfectly with other Microsoft products and third-party applications."
  }
];

const faqs: FAQ[] = [
  {
    question: "Why should businesses choose your Microsoft 365 services?",
    answer: "We deliver end-to-end Microsoft 365 solutions that improve productivity, collaboration, and security. From strategy and migration to customization and ongoing support, we help businesses fully unlock the power of Microsoft 365."
  },
  {
    question: "Do you provide secure Microsoft 365 migration services?",
    answer: "Yes. We specialize in seamless Microsoft 365 migrations from Gmail, Yahoo, on-prem Exchange, and legacy SharePoint with minimal downtime, zero data loss, and enterprise-grade security."
  },
  {
    question: "Can you automate our business processes using Power Platform?",
    answer: "Absolutely. Our experts build custom PowerApps, Power Automate workflows, Power BI dashboards, and chatbots that streamline operations, reduce manual work, and improve decision-making."
  },
  {
    question: "How do you ensure data security and compliance in Microsoft 365?",
    answer: "We implement advanced security controls including identity management, access governance, data loss prevention (DLP), conditional access, and compliance policies tailored to your industry."
  },
  {
    question: "Do you offer Microsoft 365 training and ongoing support?",
    answer: "Yes. We provide user training, admin support, and continuous optimization to ensure maximum adoption, performance, and ROI from your Microsoft 365 investment."
  }
];

export default function Microsoft365() {
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
                  PRODUCTIVITY SUITE
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_8px_32px_rgba(14,165,233,0.45)]">
                  Transform Your Business with
                  <span className="block mt-3 bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                    Microsoft 365
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80">
                  Comprehensive productivity and collaboration tools to empower your workforce and drive business growth.
                </p>
              </div>

              {/* Right Column - 3 Divisions */}
              <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Productivity</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Office Apps</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Word, Excel, PowerPoint, and more for business productivity.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Collaboration</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Teams & SharePoint</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Seamless collaboration and document management solutions.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Security</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Enterprise Security</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Advanced security and compliance features for data protection.
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
          <div className="absolute inset-0 bg-[url('/path-digital-tR0jvlsmCuQ-unsplash.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Microsoft 365 Solutions
            </h2>
            <p className="text-slate-300">
              Comprehensive solutions to help you get the most out of your Microsoft 365 investment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-slate-800/50 backdrop-blur-sm p-8 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-6`}>
                    <Icon className="h-6 w-6 text-white" />
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
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Microsoft 365?
            </h2>
            <p className="text-slate-400">
              Enterprise-grade tools that help your business grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-blue-500/20"
                  >
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/office.png')] opacity-5"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-blue-300 mb-6">
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
              Everything you need to know about Microsoft 365 services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
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
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20">
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
              BOOST PRODUCTIVITY
            </p>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform with
              <span className="block mt-2 bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent">
                Microsoft 365?
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Empower your team with the world's leading productivity suite. 
              Let our Microsoft 365 experts optimize your workflow and collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/contact" className="group relative inline-flex items-center justify-center">
                <Button className="bg-blue-500/20 backdrop-blur-md text-white hover:bg-blue-500/30 px-8 py-4 text-lg font-semibold rounded-3xl shadow-2xl shadow-black/20 hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105 border-0">
                  <PhoneCall className="mr-3 h-5 w-5" />
                  Get Free M365 Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <a 
                href="tel:+1234567890" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-slate-800/30 backdrop-blur-md text-white font-semibold rounded-3xl border-0 shadow-lg shadow-black/20 hover:bg-slate-800/40 transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                Call M365 Experts
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free Setup Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Team Training</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Migration Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
