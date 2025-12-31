import { motion } from "framer-motion";
import aboutImage from "@/assets/about us.jpg";
import { ArrowUpRight, Sparkles, Cloud, Lock, Zap, BarChart2 } from "lucide-react";

import { Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const highlights = [
  {
    icon: <Cloud className="h-5 w-5" />,
    text: "Secure migration playbooks for Azure, AWS & Google Cloud"
  },
  {
    icon: <Zap className="h-5 w-5" />,
    text: "Microsoft 365 automation pods for modern work"
  },
  {
    icon: <Lock className="h-5 w-5" />,
    text: "Security fabric aligned to Zero Trust and compliance"
  }
];

const advantages = [
  {
    icon: <BarChart2 className="h-6 w-6" />,
    title: "Cloud-first Architects",
    description: "Azure, AWS, and Google Cloud certified teams embed governance, security, and automation from day one.",
    metric: "45+ enterprise go-lives",
    color: "from-sky-500 to-cyan-400"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Operational Transparency",
    description: "Real-time observability dashboards, shared SLAs, and weekly executive reviews so you always know status.",
    metric: "99.95% managed uptime",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Velocity & Control",
    description: "Blueprinted landing zones, repeatable playbooks, and FinOps guardrails help you scale without runaway spend.",
    metric: "30% faster deployments",
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Embedded Security",
    description: "Zero Trust patterns, identity baselines, and compliance-aligned controls woven through every engagement.",
    metric: "12+ regulated industries",
    color: "from-amber-500 to-orange-500"
  }
];

export function AboutSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950 -mt-16 pt-16">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url(/path-digital-tR0jvlsmCuQ-unsplash.jpg)',
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
      </div>

      <section className="relative pt-16 pb-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="mx-auto max-w-7xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Header */}
            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500/20 to-cyan-500/20 px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-sky-400">
                <Sparkles className="h-4 w-4" />
                About The Cloud Sol
              </span>
              <h2 className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                Cloud Excellence,<br />
                <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text">
                  Engineered for Scale
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                We deliver secure, scalable, and cost-optimized cloud platforms across Azure, AWS, and GCP, 
                helping businesses transform and thrive in the digital era.
              </p>
            </motion.div>

            {/* Content Grid */}
            <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              {/* Left Column - Highlights */}
              <motion.div variants={fadeInUp}>
                <div className="space-y-6">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-white/[0.01] p-6 backdrop-blur-sm transition-all hover:border-sky-500/30"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500/20 to-cyan-500/20 text-sky-400">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-base font-medium text-white/90">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div 
                className="relative"
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-0.5">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 opacity-50 blur-xl" />
                  <img
                    src={aboutImage}
                    alt="Cloud solutions team"
                    className="relative z-10 h-full w-full rounded-[1.25rem] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>

            {/* Why Choose Us */}
            <motion.div 
              className="relative mt-24 overflow-hidden rounded-3xl py-16 px-6"
              variants={fadeInUp}
            >
              {/* Background Image with Gradient Blend */}
              <div className="absolute inset-0 -z-10">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/src/assets/scott-rodgerson-PSpf_XgOM5w-unsplash.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    opacity: 0.2
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-950/80 to-slate-950/85" />
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-purple-500/10 to-amber-500/10 mix-blend-overlay" />
              </div>
              
              <div className="relative z-10 container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-white/70">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-4 w-4">
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                      <path d="M20 3v4"></path>
                      <path d="M22 5h-4"></path>
                      <path d="M4 17v2"></path>
                      <path d="M5 18H3"></path>
                    </svg>
                    Advantages
                  </span>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_8px_32px_rgba(14,165,233,0.45)]">
                    Why Choose <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">The Cloud Sol</span>?
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/80">
                    We deliver measurable business outcomes through our cloud expertise and commitment to excellence.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-6 w-6"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>,
                      title: "Scalable Solutions",
                      description: "Grow your infrastructure seamlessly as your business expands, with flexible cloud resources.",
                      color: "from-emerald-500 to-teal-400"
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock h-6 w-6"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
                      title: "Enterprise Security",
                      description: "Advanced security protocols and compliance standards to protect your sensitive data.",
                      color: "from-sky-500 to-blue-400"
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-6 w-6"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
                      title: "99.9% Uptime",
                      description: "Reliable cloud services with guaranteed availability and disaster recovery options.",
                      color: "from-amber-500 to-orange-400"
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-6 w-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
                      title: "Expert Team",
                      description: "Certified professionals with deep expertise across all major cloud platforms.",
                      color: "from-purple-500 to-violet-400"
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-6 w-6"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>,
                      title: "Seamless Migration",
                      description: "Smooth transition to the cloud with minimal disruption to your operations.",
                      color: "from-green-500 to-emerald-400"
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones h-6 w-6"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>,
                      title: "24/7 Support",
                      description: "Round-the-clock support to ensure your cloud infrastructure runs smoothly.",
                      color: "from-pink-500 to-rose-400"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-all hover:border-sky-500/30 hover:bg-white/10"
                      variants={fadeInUp}
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute right-6 top-6 opacity-10 transition-opacity group-hover:opacity-20">
                        <div className={`h-24 w-24 rounded-full bg-gradient-to-br ${item.color} opacity-50 blur-3xl`}></div>
                      </div>
                      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-sm text-white/75">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}