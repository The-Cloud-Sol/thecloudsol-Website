import { useState } from "react";
import DarkVeil from "@/components/home/DarkVeil";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, CheckCircle, Shield, Workflow, Layers3, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  { id: "microsoft 365 Solutions", label: "Microsoft 365 Solutions" },
  { id: "Azure Landing Zones", label: "Azure Landing Zones" },
  { id: "AWS Modernization", label: "AWS Modernization" },
  { id: "Google Workspace", label: "Google Workspace" },
  { id: "Automation & AI", label: "Automation & AI" },
  { id: "Security & Compliance", label: "Security & Compliance" },
  { id: "Cloud Migration", label: "Cloud Migration" },
  { id: "Managed Cloud Ops", label: "Managed Cloud Ops" },
];

const assuranceBadges = [
  { icon: Shield, label: "Security & compliance-first delivery" },
  { icon: Workflow, label: "Program governance & reporting" },
  { icon: Layers3, label: "Multi-cloud certified teams" },
  { icon: Rocket, label: "Accelerated launch playbooks" },
];

export default function Quote() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Quote Request Received!",
          description: "Our architects will review your brief and respond with a tailored plan within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          designation: "",
          message: "",
        });
        setSelectedServices([]);
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to submit quote request. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Unable to connect to server. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]
    );
  };

  return (
    <main className="bg-slate-950 text-white">
      <header className="relative pt-24 min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <DarkVeil
            hueShift={34}
            noiseIntensity={0.08}
            scanlineIntensity={0.18}
            scanlineFrequency={0.7}
            warpAmount={0.22}
            speed={0.6}
            resolutionScale={1.1}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/75 to-slate-950" />
        </div>
        <div className="relative z-10 flex min-h-[70vh] items-center">
          <div className="container mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-white/70">
                  Request A Quote
                </p>
                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight drop-shadow-[0_8px_32px_rgba(14,165,233,0.45)]">
                  Design a cloud program with measurable ROI, governed launches, and trusted talent.
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-white/80">
                  Share your targets, complexity, and timeline. Our solution architects respond with scope, sprint plans,
                  and investment ranges across migrations, automation, Microsoft 365, and managed cloud operations.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
                  {assuranceBadges.map((badge) => (
                    <div key={badge.label} className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                      <badge.icon className="h-4 w-4 text-sky-300" />
                      {badge.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/5 p-6 text-left backdrop-blur">
                <p className="text-xs font-mono uppercase tracking-[0.35em] text-sky-200">How It Works</p>
                <ul className="mt-4 space-y-4 text-sm text-white/80">
                  <li>1. Submit your requirements and priorities.</li>
                  <li>2. Join an architecture workshop within 48 hours.</li>
                  <li>3. Receive a detailed plan covering cost, timeline, and success metrics.</li>
                </ul>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm text-white/75">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">Average kickoff</p>
                    <p className="mt-2 text-2xl font-semibold text-white">10 business days</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">Engagement scope</p>
                    <p className="mt-2 text-2xl font-semibold text-white">₹2.5k — ₹500k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-6 top-0 h-56 w-56 rounded-full bg-sky-500/15 blur-[160px]" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-[180px]" />
        </div>

        <div className="container relative z-10 mx-auto grid gap-10 px-6 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.4em] text-sky-200">Engagement Snapshot</p>
              <p className="mt-4 text-white/80">
                Use this quote to align leadership, procurement, and delivery squads. We tailor every plan to your industry controls,
                regulatory requirements, and modernization maturity.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm text-white/75">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">Operating model</p>
                  <p className="mt-2 text-lg font-semibold">Managed or co-managed</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">Available pods</p>
                  <p className="mt-2 text-lg font-semibold">Strategy · Build · Operate</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.4em] text-sky-200">Need help scoping?</p>
              <p className="mt-3 text-white/80">
                Email <a href="mailto:info@thecloudsol.com" className="text-sky-200 underline">info@thecloudsol.com</a> or call{" "}
                <a href="tel:+1234567890" className="text-sky-200 underline">+1 (234) 567-890</a> for guided intake.
              </p>
            </div>
          </div>

          <Card className="rounded-[32px] border border-white/10 bg-white/5 text-white backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Project Brief</CardTitle>
              <CardDescription className="text-white/70">
                Tell us about your project so we can craft a tailored quote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jordan Avery"
                      required
                      className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jordan@company.com"
                      required
                      className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      required
                      className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="The Cloud Sol"
                      required
                      className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="designation">Designation/Position</Label>
                  <Input
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="e.g. Project Manager, CTO, IT Director"
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <Label className="text-sm font-semibold">Services Needed</Label>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                        <Checkbox
                          id={service.id}
                          checked={selectedServices.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                          className="border-white/40 data-[state=checked]:bg-white data-[state=checked]:text-slate-900"
                        />
                        <Label htmlFor={service.id} className="cursor-pointer text-sm text-white/80">
                          {service.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Description *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Outline your objectives, success metrics, current platforms, and any blockers..."
                    rows={6}
                    required
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white/90 text-slate-900 hover:bg-white"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" /> Submit Quote Request
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
