import DarkVeil from "@/components/home/DarkVeil";
import { Mail, CheckCircle } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <header className="relative pt-28 lg:pt-32 min-h-[60vh] overflow-hidden">
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

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-6 text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-white/70">
              PRIVACY POLICY
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_8px_32px_rgba(14,165,233,0.45)]">
              Your Privacy Matters
              <span className="block mt-3 bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                Our Commitment to You
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/80">
              We're committed to protecting your personal information and being transparent about how we collect, use, and protect your data.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="relative py-20 bg-slate-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <p className="text-sm text-sky-400 font-mono mb-6">
              Last updated: December 2024
            </p>

            <div className="space-y-12">
              <div className="group">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center">
                  <span className="mr-3 text-sky-400">01</span>
                  <span>Our Privacy Commitment</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    This Privacy Policy reflects <strong className="text-white">The Cloud Sol's</strong> continued efforts to provide best-in-class privacy and data protection. Our commitment to privacy goes beyond minimum legal and regulatory requirements. We strive to maintain robust data protection and privacy management practices through sound governance structures and effective compliance programs to ensure adherence to evolving regulatory standards and contractual privacy obligations.
                  </p>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    At <strong className="text-white">The Cloud Sol</strong>, we are adequately resourced and appropriately organized to ensure that policies, compliance processes, technologies, physical controls, and security measures governing the collection, use, storage, and transfer of personal data worldwide meet applicable statutory and regulatory requirements. Our approach coordinates with multiple corporate disciplines, including ethics and compliance, legal, human resources, and information and physical security, to achieve our data protection and privacy objectives.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-sky-400">02</span>
                  <span>Scope</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    This Privacy Policy applies to all <strong className="text-white">The Cloud Sol-owned websites, domains, and services</strong>, and those of our wholly owned subsidiaries ("The Cloud Sol sites or services"). A privacy notice specific to a particular service or program may supplement or supersede this Privacy Policy.
                  </p>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Personal information concerning <strong className="text-white">The Cloud Sol</strong>, its customers, outsourcing and service clients, business partners, employees, former employees, and job applicants ("covered individuals") collected and processed offline is also governed by this Privacy Policy, unless a contract with a covered individual specifies otherwise, in which case that contract shall prevail.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-sky-400">03</span>
                  <span>Collection of Personal Information</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    Personal information is any information that identifies an individual or from which an individual can be identified. This may include name, address, telephone number, email address, or other personal attributes.
                  </p>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    <strong className="text-white">The Cloud Sol</strong> collects, uses, stores, and transfers ("processes") personal information to manage relationships with covered individuals and to personalize and improve interactions. Such processing is conducted in compliance with applicable laws, including notice and consent requirements, and any required filings with data protection authorities.
                  </p>
                  <p className="text-slate-300 mb-4">Personal information may be collected through various means, including but not limited to:</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="bg-sky-400/10 rounded-full p-1.5 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                      </div>
                      <span className="text-slate-300">Access to The Cloud Sol websites or services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-sky-400/10 rounded-full p-1.5 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                      </div>
                      <span className="text-slate-300">Online forms or ordering channels</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-sky-400/10 rounded-full p-1.5 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                      </div>
                      <span className="text-slate-300">Employment and recruitment processes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-sky-400/10 rounded-full p-1.5 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                      </div>
                      <span className="text-slate-300">Communications with The Cloud Sol representatives</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-sky-400/10 rounded-full p-1.5 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                      </div>
                      <span className="text-slate-300">Purchase of products or services</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-sky-400">04</span>
                  <span>Use of Personal Information</span>
                </h2>
                <div className="pl-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Fulfilling Transaction Requests</h3>
                      <p className="text-slate-300 leading-relaxed">
                        If you request information, products, services, callbacks, or marketing materials, we use your personal information to fulfill those requests. This may involve sharing information with The Cloud Sol group entities or trusted business partners involved in fulfillment. We may also contact you for customer satisfaction surveys or market research, subject to applicable laws.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Personalizing Website Experience</h3>
                      <p className="text-slate-300 leading-relaxed">
                        Information collected may be used to personalize your experience on our websites, including providing relevant content and improving navigation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Providing Support</h3>
                      <p className="text-slate-300 leading-relaxed">
                        We may use personal information to provide support services for products or services you have purchased. This may involve limited access to data located on your systems ("customer data"). Handling of customer data is governed by applicable agreements and not by this Privacy Policy.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Marketing</h3>
                      <p className="text-slate-300 leading-relaxed">
                        With your consent where required, personal information may be used for marketing communications. You may opt out at any time by following unsubscribe instructions in our communications.
                      </p>
                      <p className="text-slate-300 leading-relaxed">
                        Some offerings may be co-branded with partners. In such cases, personal information may be shared with those partners. We encourage you to review their privacy policies.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Recruitment</h3>
                      <p className="text-slate-300 leading-relaxed">
                        Information provided during recruitment or job applications may be used across The Cloud Sol and its group companies to process applications or inquiries.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Monitoring and Recording</h3>
                      <p className="text-slate-300 leading-relaxed">
                        Calls, chats, or other interactions may be monitored or recorded for quality assurance, training, or evidentiary purposes, where permitted by law.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Mobile Applications and Social Media</h3>
                      <p className="text-slate-300 leading-relaxed">
                        The Cloud Sol may provide mobile applications and social collaboration tools. These may collect personal information and may include supplemental privacy notices. Content posted on social platforms is governed by terms of those platforms and may be publicly visible.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Protecting Rights and Property</h3>
                      <p className="text-slate-300 leading-relaxed">
                        We may use or disclose personal information where necessary to protect rights or property of The Cloud Sol, our partners, clients, or others, or to comply with legal obligations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-sky-400">05</span>
                  <span>Sharing of Personal Information</span>
                </h2>
                <div className="pl-12">
                  <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 mb-6">
                    <p className="text-slate-300 font-semibold text-white mb-3">
                      The Cloud Sol <strong className="text-sky-400">does not sell, rent, or lease personal information</strong>.
                    </p>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    As a global organization, personal information may be shared within The Cloud Sol and transferred internationally in accordance with this Privacy Policy. We require third-party service providers and partners to protect personal information consistent with our policies.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    In event of business reorganizations, mergers, or acquisitions, personal information may be transferred subject to appropriate safeguards.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-sky-400">06</span>
                  <span>Choices and Privacy Preferences</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    Registration is not required to access our websites. However, certain services may require registration. You may manage communication preferences at point of collection or via unsubscribe links.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Transactional or administrative communications are not subject to opt-out as they are necessary for business operations.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-sky-400">07</span>
                  <span>Information Security, Accuracy, and Retention</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    Security is a priority for <strong className="text-white">The Cloud Sol</strong>. We implement appropriate administrative, technical, and physical safeguards to protect personal information and maintain data accuracy and integrity. We require similar standards from third parties processing data on our behalf.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Personal information is retained only as long as legally required or permitted and in accordance with internal information management policies.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-sky-400">08</span>
                  <span>Access to Personal Information</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 leading-relaxed">
                    Subject to applicable laws, individuals may request access to, correction, anonymization, or deletion of personal information. Identity verification may be required to protect privacy and security.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-sky-400">09</span>
                  <span>Dispute Resolution</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 leading-relaxed">
                    The Cloud Sol is committed to resolving privacy-related complaints. Requests or complaints may be submitted via our contact form. We aim to respond within a reasonable timeframe and resolve issues appropriately.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-sky-400">10</span>
                  <span>External Links</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 leading-relaxed">
                    Our websites may contain links to third-party websites or services. The Cloud Sol is not responsible for privacy practices of third parties. We encourage reviewing their privacy policies before providing personal information.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-sky-400">11</span>
                  <span>Notification of Changes</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 leading-relaxed">
                    Material changes to this Privacy Policy will be posted on this page. Where required, we will notify you and provide choices regarding new uses of personal information.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-sky-400">12</span>
                  <span>Inquiries and Contact</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    If you have questions, comments, or concerns regarding this Privacy Policy or The Cloud Sol's handling of personal information, please contact us through our website contact form. Requests and complaints will be treated confidentially and addressed in a timely manner.
                  </p>
                  <div className="inline-flex items-center px-6 py-3 bg-sky-500/10 text-sky-400 rounded-lg border border-sky-500/20 hover:bg-sky-500/20 transition-colors">
                    <Mail className="h-5 w-5 mr-2" />
                    <a href="mailto:info@thecloudsol.com" className="hover:underline">info@thecloudsol.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
