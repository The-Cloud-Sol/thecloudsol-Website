import { useState } from "react";
import DarkVeil from "@/components/home/DarkVeil";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, Shield, Building2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getApiUrl, useEmailFallback } from '@/config/api';

const contactHighlights = [
  {
    label: "Global Locations",
    description: "Cloud delivery hubs in Seattle, London, Bengaluru, and Sydney.",
    icon: Building2,
  },
  {
    label: "Security-First Response",
    description: "Dedicated cloud responders on-call 24/7 for critical SLAs.",
    icon: Shield,
  },
  {
    label: "Advisory Workshops",
    description: "Executive roadmaps for modernization, AI, and automation adoption.",
    icon: Sparkles,
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if we should use email fallback for static deployment
      if (useEmailFallback()) {
        // Create email content for fallback
        const emailContent = `
          New Contact Message from ${formData.name}
          
          Email: ${formData.email}
          Phone: ${formData.phone}
          Company: ${formData.company}
          
          Message: ${formData.message}
        `;
        
        // Open email client with pre-filled content
        const subject = encodeURIComponent('Contact Message - The Cloud Sol');
        const body = encodeURIComponent(emailContent);
        window.location.href = `mailto:tech.thecloudsol@gmail.com?subject=${subject}&body=${body}`;
        
        toast({
          title: "Contact Message Initiated",
          description: "Your email client has opened with the message details. Please send the email to complete your request.",
        });
        
        setIsSubmitting(false);
        return;
      }

      // Use API endpoint for development/production with backend
      const apiUrl = getApiUrl('contact');
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send message. Please try again.",
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

  return (
    <main className="bg-slate-950 text-white">
      <header className="relative pt-24 min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <DarkVeil
            hueShift={38}
            noiseIntensity={0.08}
            scanlineIntensity={0.18}
            scanlineFrequency={0.7}
            warpAmount={0.2}
            speed={0.55}
            resolutionScale={1.1}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
        </div>
        <div className="relative z-10 flex min-h-[70vh] items-center">
          <div className="container mx-auto px-6 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-white/70">
              Cloud Computing Services India
            </p>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight drop-shadow-[0_8px_32px_rgba(14,165,233,0.45)]">
                  Get Expert Cloud Solutions for Your Business Growth
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-white/80">
                  Leading cloud computing company in India offering Azure, AWS, Google Cloud, and Microsoft 365 services. 
                  Contact our certified cloud architects for enterprise cloud migration, security solutions, and digital transformation.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
                  {contactHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2"
                    >
                      <item.icon className="h-4 w-4 text-sky-300" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/5 p-6 text-left backdrop-blur">
                <p className="text-xs font-mono uppercase tracking-[0.35em] text-sky-200">Service Promise</p>
                <p className="mt-4 text-lg font-semibold text-white">99.9% uptime. 24-hour critical response.</p>
                <p className="mt-3 text-sm text-white/75">
                  Every engagement includes readiness assessments, design-led workshops, and certified cloud engineers
                  dedicated to your program.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-300" /> Azure, AWS, Google Cloud expertise
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" /> Microsoft 365 & Security workloads
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" /> Dedicated engagement managers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-[120px]" />
        </div>

        <div className="container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h2 className="text-2xl font-semibold text-white">Reach Our Specialists</h2>
                <p className="mt-3 text-white/75">
                  Choose the channel that fits your team best. We align the right solution architects, security leads,
                  and program managers based on your objectives.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    { icon: Mail, title: "Email Us", value: "info@thecloudsol.com", href: "mailto:info@thecloudsol.com" },
                    { icon: Phone, title: "Call Us", value: "+1 (234) 567-890", href: "tel:+1234567890" },
                    {
                      icon: MapPin,
                      title: "Visit Our Hub",
                      value: "436, Vihav Trade Center, Near Waves Club, Bhayli, Vadodara, Gujarat 391410",
                    },
                    {
                      icon: Clock,
                      title: "Fast Response Window",
                      value: "Monday – Friday · 9AM – 6PM (local time)",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-white/10 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                        <item.icon className="h-5 w-5 text-sky-300" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-white/60">{item.title}</p>
                        {item.href ? (
                          <a href={item.href} className="mt-1 block text-lg font-semibold text-white hover:text-sky-200">
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-lg font-semibold text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.45em] text-sky-200">Engagement Guarantees</p>
                <ul className="mt-4 space-y-3 text-white/80">
                  <li>✔ Free cloud readiness consultation before any migration.</li>
                  <li>✔ Money-back guarantee if we miss an agreed launch date.</li>
                  <li>✔ Certified cloud professionals embedded on every project.</li>
                </ul>
              </div>
            </div>

            <Card className="rounded-3xl border border-white/10 bg-white/5 text-white backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send Us a Message</CardTitle>
                <CardDescription className="text-white/70">
                  Tell us about your project, timeline, and success metrics.
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
                        placeholder="John Doe"
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
                        placeholder="john@company.com"
                        required
                        className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-890"
                        className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or ask any questions..."
                      rows={5}
                      required
                      className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white/90 text-slate-900 hover:bg-white"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
