import { Mail, Video, FileText, HardDrive, Shield, Settings, Users, Calendar, MessageSquare, FileSpreadsheet, FileBarChart, Cloud, Zap, ArrowRight, Sparkles, PhoneCall, Phone, CheckCircle, HelpCircle, Plus } from "lucide-react";
import DarkVeil from "@/components/home/DarkVeil";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Mail,
    color: "text-red-400",
    title: "Gmail for Business",
    description: "Professional email with your company's domain and 30GB of storage per user.",
    features: [
      "Custom email addresses",
      "99.9% uptime guarantee",
      "Advanced spam filtering",
      "Email delegation"
    ]
  },
  {
    icon: Calendar,
    color: "text-blue-400",
    title: "Google Calendar",
    description: "Smart scheduling and time management for teams of all sizes.",
    features: [
      "Shared calendars",
      "Room and resource booking",
      "Meeting scheduling",
      "Mobile access"
    ]
  },
  {
    icon: MessageSquare,
    color: "text-green-400",
    title: "Google Chat & Meet",
    description: "Secure messaging and video conferencing for your team.",
    features: [
      "HD video meetings",
      "Screen sharing",
      "Chat rooms",
      "Integration with other apps"
    ]
  },
  {
    icon: FileText,
    color: "text-yellow-400",
    title: "Google Docs",
    description: "Create and collaborate on documents in real-time.",
    features: [
      "Real-time collaboration",
      "Offline editing",
      "Version history",
      "Add-ons and templates"
    ]
  },
  {
    icon: FileSpreadsheet,
    color: "text-green-600",
    title: "Google Sheets",
    description: "Powerful spreadsheets with smart features and automation.",
    features: [
      "Formulas and functions",
      "Pivot tables",
      "Data validation",
      "Connected sheets"
    ]
  },
  {
    icon: FileBarChart,
    color: "text-orange-400",
    title: "Google Slides",
    description: "Create beautiful presentations with your team.",
    features: [
      "Real-time collaboration",
      "Presenter notes",
      "Offline access",
      "Built-in templates"
    ]
  },
  {
    icon: HardDrive,
    color: "text-purple-400",
    title: "Google Drive",
    description: "Secure cloud storage for all your files.",
    features: [
      "30GB storage per user",
      "File sharing and permissions",
      "Offline access",
      "Advanced search"
    ]
  },
  {
    icon: Shield,
    color: "text-cyan-400",
    title: "Security & Admin",
    description: "Enterprise-grade security and administrative controls.",
    features: [
      "2-step verification",
      "Single sign-on (SSO)",
      "Mobile device management",
      "Data loss prevention"
    ]
  }
];

const faqs = [
  {
    question: "Why choose your Google Workspace services?",
    answer: "We help businesses maximize productivity and collaboration with fully managed Google Workspace solutions, from setup and migration to security and training."
  },
  {
    question: "Do you provide Google Workspace migration services?",
    answer: "Yes. We securely migrate emails, calendars, contacts, and files from Microsoft 365 or other platforms with zero data loss."
  },
  {
    question: "How do you secure Google Workspace environments?",
    answer: "We configure admin controls, access management, data protection policies, and compliance settings to keep your business data secure."
  },
  {
    question: "Can you organize Google Drive and Shared Drives efficiently?",
    answer: "Absolutely. We design structured Drive and Shared Drive environments with proper permissions to improve collaboration and governance."
  },
  {
    question: "Do you provide Google Workspace training and support?",
    answer: "Yes. We offer user training and ongoing support to help teams work smarter and faster using Google Workspace tools."
  }
];

export default function GoogleWorkspace() {
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
                    Google Workspace
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80">
                  Professional email, shared calendars, online storage, and collaboration tools to help your team work better together.
                </p>
              </div>

              {/* Right Column - 3 Divisions */}
              <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Productivity</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Gmail & Calendar</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Professional email and smart scheduling for your business.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Collaboration</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Docs & Drive</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Real-time document collaboration and secure file storage.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Communication</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Meet & Chat</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Secure video meetings and team messaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/shamin-haky-Uhx-gHPpCDg-unsplash.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Everything Your Business Needs
            </h2>
            <p className="text-slate-300">
              Powerful tools for communication, collaboration, and productivity
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-slate-800/50 border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-6">
                    <Icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex text-sm text-slate-300">
                        <span className="mr-2 text-blue-400">✔</span>
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
              Why Choose Google Workspace?
            </h2>
            <p className="text-slate-400">
              Enterprise-grade tools that help your business grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Boost Productivity</h3>
              <p className="text-slate-400">
                Real-time collaboration means your team can work together from anywhere, on any device.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-slate-400">
                Advanced security features including 2-step verification, single sign-on, and data loss prevention.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                <Cloud className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliable Cloud</h3>
              <p className="text-slate-400">
                99.9% uptime guarantee with 24/7 support and automatic updates.
              </p>
            </div>
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
              Everything you need to know about Google Workspace services
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
              WORK SMARTER
            </p>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Collaborate with
              <span className="block mt-2 bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent">
                Google Workspace?
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform how your team works together with Google's powerful productivity tools. 
              Let our Google Workspace specialists streamline your collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/contact" className="group relative inline-flex items-center justify-center">
                <Button className="bg-blue-500/20 backdrop-blur-md text-white hover:bg-blue-500/30 px-8 py-4 text-lg font-semibold rounded-3xl shadow-2xl shadow-black/20 hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105 border-0">
                  <PhoneCall className="mr-3 h-5 w-5" />
                  Get Free Workspace Setup
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <a 
                href="tel:+1234567890" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-slate-800/30 backdrop-blur-md text-white font-semibold rounded-3xl border-0 shadow-lg shadow-black/20 hover:bg-slate-800/40 transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                Call Workspace Experts
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free Migration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Team Training</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
