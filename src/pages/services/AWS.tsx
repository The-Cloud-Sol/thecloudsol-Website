import {
  Server,
  Code2,
  ShieldCheck,
  Database,
  Cpu,
  Network,
  Cloud,
  Lock,
  RefreshCw,
  ArrowRight,
  Zap,
  Sparkles,
  PhoneCall,
  Phone,
  CheckCircle,
  GitBranch,
  BarChart2,
  HelpCircle,
  Plus,
  MessageSquare,
} from "lucide-react";
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
    icon: Cpu,
    color: "text-sky-400",
    title: "Compute Services",
    description:
      "Scalable computing resources with EC2, Lambda, ECS, EKS, and Elastic Beanstalk.",
    features: [
      "Amazon EC2 instances",
      "AWS Lambda serverless",
      "ECS & EKS containers",
      "Elastic Beanstalk PaaS",
    ],
  },
  {
    icon: Database,
    color: "text-cyan-400",
    title: "Storage & Databases",
    description:
      "Reliable storage and database solutions including S3, RDS, DynamoDB, and more.",
    features: [
      "Amazon S3 object storage",
      "RDS managed databases",
      "DynamoDB NoSQL",
      "ElastiCache & Redshift",
    ],
  },
  {
    icon: GitBranch,
    color: "text-purple-400",
    title: "CloudFormation & IaC",
    description:
      "Infrastructure as code with CloudFormation and Terraform for consistent deployments.",
    features: [
      "CloudFormation templates",
      "Terraform integration",
      "CI/CD pipeline setup",
      "Version-controlled infrastructure",
    ],
  },
  {
    icon: Server,
    color: "text-amber-400",
    title: "AWS Migration",
    description:
      "Seamless migration to AWS using proven methodologies and AWS Migration Hub.",
    features: [
      "Migration assessment",
      "AWS Migration Hub",
      "Database Migration Service",
      "Application modernization",
    ],
  },
  {
    icon: BarChart2,
    color: "text-green-400",
    title: "Analytics & Data",
    description:
      "Data analytics and business intelligence with Athena, QuickSight, and EMR.",
    features: [
      "Amazon Athena queries",
      "QuickSight dashboards",
      "EMR big data processing",
      "Kinesis real-time streams",
    ],
  },
  {
    icon: ShieldCheck,
    color: "text-red-400",
    title: "Security & Compliance",
    description:
      "Implement robust security measures with IAM, Cognito, Inspector, and more.",
    features: [
      "IAM roles and policies",
      "Cognito user identity",
      "Inspector vulnerability assessment",
      "Compliance frameworks",
    ],
  },
];

const faqs: FAQ[] = [
  {
    question: "What AWS cloud services do you provide?",
    answer: "We offer complete AWS cloud solutions including infrastructure design, migration, serverless development, containerization, security, and ongoing management."
  },
  {
    question: "Can you migrate applications and data to AWS securely?",
    answer: "Yes. We provide secure and scalable AWS migration services with minimal downtime, ensuring high availability and optimal performance."
  },
  {
    question: "Do you support serverless and microservices architectures on AWS?",
    answer: "Absolutely. We build modern, scalable applications using AWS Lambda, ECS, EKS, and container-based architectures."
  },
  {
    question: "How do you ensure AWS security and compliance?",
    answer: "We implement IAM policies, encryption, logging, monitoring, and compliance frameworks to meet enterprise and regulatory requirements."
  },
  {
    question: "Do you offer AWS cost optimization and managed services?",
    answer: "Yes. We continuously monitor, optimize, and manage AWS environments to ensure cost efficiency, performance, and reliability."
  }
];

/* ---------------- COMPONENT ---------------- */

export default function AWS() {
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
                    AWS Cloud
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80">
                  Expert-led cloud migration, infrastructure modernization, and AI solutions to help your business scale with confidence on AWS.
                </p>
              </div>

              {/* Right Column - 3 Divisions */}
              <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Cloud</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">AWS Migration</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Seamless migration to AWS with minimal downtime and maximum efficiency.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">AI</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">AI & Machine Learning</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Leverage AWS AI/ML services to drive innovation and insights.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Security</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Enterprise Security</h3>
                  <p className="mt-2 text-sm text-white/75">
                    Comprehensive security solutions to protect your AWS infrastructure.
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
          <div className="absolute inset-0 bg-[url('/boitumelo-o_tcYADlSt8-unsplash.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              AWS Cloud Services
            </h2>
            <p className="text-slate-300">
              Enterprise-grade cloud solutions to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-slate-800/50 border border-white/5 rounded-2xl p-6 hover:border-sky-500/30 transition backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-6">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
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
                      <span className="mr-2 text-sky-400">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/office.png')] opacity-5"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-slate-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-slate-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-500/30 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-slate-300 mb-6">
              <HelpCircle className="h-4 w-4" />
              GOT QUESTIONS?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Frequently Asked
              <span className="block mt-2 bg-gradient-to-r from-slate-300 via-gray-200 to-white bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Everything you need to know about AWS cloud services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-slate-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <details className="group/item p-8">
                  <summary className="flex cursor-pointer items-start justify-between text-lg font-semibold text-white group-hover:text-slate-300 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-500/20 flex items-center justify-center group-hover:bg-slate-500/30 transition-colors">
                      <Plus className="h-4 w-4 text-slate-400 group-open:rotate-45 transition-transform" />
                    </div>
                  </summary>
                  
                  <div className="mt-4 text-slate-300 leading-relaxed group-open:animate-in slide-in-from-top-2 duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-500/10 backdrop-blur-sm rounded-full border border-slate-500/20">
              <MessageSquare className="h-5 w-5 text-slate-400" />
              <span className="text-slate-300">Still have questions?</span>
              <a href="/contact" className="text-white font-medium hover:text-slate-300 transition-colors">
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
        <div className="absolute top-10 left-10 w-32 h-32 bg-slate-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-slate-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border-0 bg-slate-500/10 backdrop-blur-sm px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-slate-300">
              <Sparkles className="h-4 w-4" />
              START YOUR JOURNEY
            </p>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Scale with
              <span className="block mt-2 bg-gradient-to-r from-slate-300 via-gray-200 to-white bg-clip-text text-transparent">
                AWS Cloud?
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join millions of businesses trusting AWS for reliability, security, and innovation. 
              Let our certified architects design your cloud infrastructure for maximum performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/contact" className="group relative inline-flex items-center justify-center">
                <Button className="bg-slate-500/20 backdrop-blur-md text-white hover:bg-slate-500/30 px-8 py-4 text-lg font-semibold rounded-3xl shadow-2xl shadow-black/20 hover:shadow-slate-500/30 transition-all duration-300 group-hover:scale-105 border-0">
                  <PhoneCall className="mr-3 h-5 w-5" />
                  Get Free AWS Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <a 
                href="tel:+1234567890" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-slate-800/30 backdrop-blur-md text-white font-semibold rounded-3xl border-0 shadow-lg shadow-black/20 hover:bg-slate-800/40 transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                Call AWS Experts
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
