import { CheckCircle, TrendingUp, Users, Lock, Clock, Headphones, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Grow your infrastructure seamlessly as your business expands, with flexible cloud resources.",
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Advanced security protocols and compliance standards to protect your sensitive data.",
    color: "from-sky-500 to-blue-400"
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Reliable cloud services with guaranteed availability and disaster recovery options.",
    color: "from-amber-500 to-orange-400"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with deep expertise across all major cloud platforms.",
    color: "from-purple-500 to-violet-400"
  },
  {
    icon: CheckCircle,
    title: "Seamless Migration",
    description: "Smooth transition to the cloud with minimal disruption to your operations.",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your cloud infrastructure runs smoothly.",
    color: "from-pink-500 to-rose-400"
  },
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-white/70">
            <Sparkles className="h-4 w-4" />
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
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-all hover:border-sky-500/30 hover:bg-white/10"
            >
              <div className="absolute right-6 top-6 opacity-10 transition-opacity group-hover:opacity-20">
                <div className={`h-24 w-24 rounded-full bg-gradient-to-br ${benefit.color} opacity-50 blur-3xl`} />
              </div>
              
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.color} text-white`}>
                <benefit.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-sm text-white/75">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
