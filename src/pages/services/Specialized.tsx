import { GraduationCap, RefreshCw, Workflow, BarChart3, Target, Briefcase, Shield, Users, Cloud, Cpu, Database, Lightbulb, Sparkles, PhoneCall, ArrowRight, Phone, CheckCircle, HelpCircle, Plus, MessageSquare } from "lucide-react";
import DarkVeil from "@/components/home/DarkVeil";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <GraduationCap className="h-6 w-6 text-secondary" />,
    title: "Cloud Training & Certification",
    description: "Expert-led training programs to help your team master cloud technologies and earn certifications.",
    features: [
      "Microsoft, AWS, and Google certifications",
      "Hands-on lab environments",
      "Custom training curricula",
      "On-site or virtual delivery",
    ],
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-secondary" />,
    title: "Change Management",
    description: "Ensure successful adoption of new cloud technologies with comprehensive change management support.",
    features: [
      "Stakeholder communication",
      "User adoption strategies",
      "Training and enablement",
      "Resistance management",
    ],
  },
  {
    icon: <Workflow className="h-6 w-6 text-secondary" />,
    title: "Workflow Consulting",
    description: "Optimize your business processes with custom workflow automation and process improvement.",
    features: [
      "Process analysis and mapping",
      "Automation opportunities",
      "Power Automate implementation",
      "Continuous improvement",
    ],
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-secondary" />,
    title: "Data-Driven Decisions",
    description: "Leverage analytics and business intelligence to make informed strategic decisions.",
    features: [
      "Power BI implementation",
      "Dashboard development",
      "KPI definition",
      "Data visualization",
    ],
  },
  {
    icon: <Target className="h-6 w-6 text-secondary" />,
    title: "Cloud Strategy Consulting",
    description: "Develop a comprehensive cloud strategy aligned with your business objectives.",
    features: [
      "Cloud readiness assessment",
      "Platform selection guidance",
      "Roadmap development",
      "Cost optimization planning",
    ],
  },
  {
    icon: <Briefcase className="h-6 w-6 text-secondary" />,
    title: "Managed Services",
    description: "Ongoing support and management of your cloud infrastructure by certified professionals.",
    features: [
      "24/7 monitoring",
      "Incident management",
      "Regular health checks",
      "Performance optimization",
    ],
  },
];

const faqs = [
  {
    question: "What specialized IT and cloud services do you offer?",
    answer: "We provide cloud training, user adoption programs, workflow automation, IT consulting, digital strategy, and data-driven decision support."
  },
  {
    question: "Do you offer cloud training and certification programs?",
    answer: "Yes. We deliver customized training for Microsoft, AWS, and Google Cloud to upskill teams and improve cloud adoption."
  },
  {
    question: "How do you support user adoption and change management?",
    answer: "Our structured adoption strategies ensure smooth transitions, high engagement, and long-term success with new technologies."
  },
  {
    question: "Can you build custom automation and workflow solutions?",
    answer: "Yes. We design intelligent workflows that automate processes, improve efficiency, and reduce operational costs."
  },
  {
    question: "Do you help with IT strategy and digital transformation?",
    answer: "Absolutely. We help businesses plan, evaluate, and implement IT strategies aligned with their growth and digital transformation goals."
  }
];

export default function Specialized() {
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
                  EXPERT SOLUTIONS
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_8px_32px_rgba(14,165,233,0.45)]">
                  Specialized Cloud
                  <span className="block mt-3 bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                    Consulting Services
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80">
                  Tailored solutions and expert guidance to help you navigate the complexities of cloud transformation.
                </p>
              </div>

              {/* Right Column - 3 Divisions */}
              <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Expertise</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Cloud Strategy</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Custom cloud roadmaps aligned with your business objectives.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Training</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Certification</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Hands-on training for your team to maximize cloud potential.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Support</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Managed Services</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Ongoing support and optimization for your cloud environment.
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
          <div className="absolute inset-0 bg-[url('/daniil-komov-dma_e1UKkig-unsplash.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Specialized Services
            </h2>
            <p className="text-slate-300">
              Comprehensive solutions tailored to your unique business needs
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon.type;
              return (
                <div 
                  key={index}
                  className="group bg-slate-800/50 border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-opacity-20">
                    <Icon className="h-6 w-6 text-blue-400" />
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
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              Everything you need to know about our specialized services
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
              CUSTOM SOLUTIONS
            </p>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready for Tailored
              <span className="block mt-2 bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent">
                Cloud Solutions?
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let our team of certified professionals guide you through your cloud transformation journey 
              with solutions designed specifically for your unique business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/contact" className="group relative inline-flex items-center justify-center">
                <Button className="bg-blue-500/20 backdrop-blur-md text-white hover:bg-blue-500/30 px-8 py-4 text-lg font-semibold rounded-3xl shadow-2xl shadow-black/20 hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105 border-0">
                  <PhoneCall className="mr-3 h-5 w-5" />
                  Get Custom Cloud Strategy
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <a 
                href="tel:+1234567890" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-slate-800/30 backdrop-blur-md text-white font-semibold rounded-3xl border-0 shadow-lg shadow-black/20 hover:bg-slate-800/40 transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                Call Cloud Consultants
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Custom Roadmap</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Expert Consulting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Long-term Partnership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
