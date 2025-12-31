import DarkVeil from "@/components/home/DarkVeil";
import aboutHeroImage from "@/assets/vitaly-gariev-8gAbl776pc0-unsplash.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, Globe, ShieldCheck, Sparkles } from "lucide-react";

const stats = [
  { value: "500+", label: "Transformations Delivered" },
  { value: "150+", label: "Enterprise & Scale-Ups" },
  { value: "24h", label: "Critical Response Window" },
  { value: "99.9%", label: "Uptime SLA" },
];

const storyHighlights = [
  {
    title: "Cloud Strategy & Innovative Solutions",
    description:
      "We empower teams with secure, scalable, and future-ready architectures across Azure, AWS, and Google Cloud.",
    accent: "Strategy · Architecture · Governance",
  },
  {
    title: "Our Journey Toward Cloud Excellence",
    description:
      "From startups to enterprises, we bridge business goals and modern tech through research-backed playbooks and certified squads.",
    accent: "Research · Workshops · Modernization",
  },
];

const expertise = [
  "Cloud Migration & Modernization",
  "Cloud Security & Compliance",
  "Cloud-Native Application Development",
  "Microsoft 365 + Security Workloads",
];

const values = [
  { icon: Target, title: "Precision Delivery", description: "Methodical approaches that land programs on time, every time." },
  { icon: Heart, title: "Customer Obsession", description: "We immerse ourselves in your operating model to design relevant solutions." },
  { icon: Award, title: "Innovation Culture", description: "We iterate with AI, automation, and telemetry to keep your estate evolving." },
  { icon: Users, title: "Trusted Partnership", description: "Transparent governance and embedded teams who feel internal from day one." },
];

import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="bg-slate-950 text-white overflow-x-hidden">
      <header className="relative pt-24 min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0">
          <DarkVeil
            hueShift={36}
            noiseIntensity={0.08}
            scanlineIntensity={0.15}
            scanlineFrequency={0.65}
            warpAmount={0.2}
            speed={0.5}
            resolutionScale={1.1}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/50 via-slate-950/90 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-sky-400/5 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 w-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid gap-12 lg:gap-8 xl:gap-16 lg:grid-cols-2 items-center w-full"
            >
              <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8 w-full text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-sky-400 animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-medium text-sky-300">Cloud Computing Company India</span>
                </div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-100 to-cyan-200 mx-auto md:mx-0 max-w-4xl"
                >
                  Leading Cloud Solutions <span className="block sm:inline">Provider in <span className="text-sky-400">India</span></span>
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed w-full mx-auto md:mx-0">
                  The Cloud Sol is a premier cloud computing company in India, specializing in Azure, AWS, Google Cloud, and Microsoft 365 solutions. 
                  We provide enterprise cloud migration, cloud security, and digital transformation services with 99.9% uptime guarantee and 24/7 expert support.
                </motion.p>
              </motion.div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    } 
                  }
                }}
                className="relative mt-8 lg:mt-0"
              >
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-sky-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-slate-800/30 backdrop-blur-xl shadow-2xl">
                  <img 
                    src={aboutHeroImage} 
                    alt="Cloud technology infrastructure" 
                    className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-white text-sm sm:text-base truncate">Cloud Solutions</p>
                        <p className="text-xs text-slate-300">Transforming businesses</p>
                      </div>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl -z-10 rotate-12 opacity-20"></div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="container mx-auto px-6 mt-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="relative">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm"></div>
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"></div>
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4">
                  <div className="h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent shadow-lg shadow-sky-500/30"></div>
                </div>
              </div>
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-100 to-cyan-200">
                  Our Core Values
                </h2>
                <p className="text-lg text-slate-300">
                  Guiding principles that shape our approach to delivering exceptional cloud solutions
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="group relative h-full p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-sky-500/30 transition-all duration-300 flex flex-col"
                >
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex-1 flex flex-col">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center mb-4 sm:mb-6">
                      <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Our Mission</h3>
                    <p className="text-slate-300 leading-relaxed">
                      At The Cloud Sol, our mission is to empower businesses with comprehensive cloud solutions that enable them to thrive in today's competitive digital landscape. We bridge the gap between organizations and cutting-edge technology by providing expert consultation, implementation, and support services.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex-1 flex flex-col">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 sm:mb-6">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Our Vision</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Our vision is to become the most trusted cloud technology partner, recognized for delivering innovative solutions that transform business operations and enhance productivity across all industries. We strive to be at the forefront of cloud innovation, helping businesses navigate their digital transformation journey with confidence.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <section className="relative py-12 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-sky-400/10 blur-[140px]" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[160px]" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-8">
            <div className="space-y-6">
              {storyHighlights.map((item, index) => (
                <div 
                  key={item.title} 
                  className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all duration-300 hover:border-white/20 ${index === 0 ? 'mb-6' : ''}`}
                >
                  <p className="text-xs font-medium uppercase tracking-widest text-sky-300 mb-3">{item.accent}</p>
                  <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-3">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Our Expertise</h3>
                <div className="space-y-3">
                  {expertise.map((item) => (
                    <div key={item} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                          <ShieldCheck className="h-3 w-3 text-emerald-400" />
                        </div>
                      </div>
                      <span className="text-slate-300 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-sky-400">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Our Journey</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6">
                  We combine research-driven roadmaps with on-the-ground delivery pods to migrate, secure, and automate cloud estates. Every program is shaped by operational telemetry and co-created with your leadership.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 text-center hover:bg-white/10 transition-colors">
                      <p className="text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-slate-400 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-purple-400">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Trusted Across Industries</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  FinServ · Healthcare · Manufacturing · Public Sector · Energy · Media
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Azure', 'AWS', 'Google Cloud', 'Microsoft 365', 'Security'].map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950/60 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm sm:text-base font-medium uppercase tracking-[0.2em] text-sky-300 mb-4">Our Core Values</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-100 to-cyan-200">
              Principles That Shape Our Work
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              These values drive every engagement—from discovery workshops to 24/7 operations and beyond.
            </p>
          </div>
          
          <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <motion.div 
                key={value.title}
                whileHover={{ y: -8 }}
                className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur transition-all duration-300 hover:border-sky-500/30"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 mb-6">
                  <value.icon className="h-6 w-6 text-sky-300 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
