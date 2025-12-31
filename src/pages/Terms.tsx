import DarkVeil from "@/components/home/DarkVeil";
import { FileText, Shield, Lock, AlertTriangle, Mail, Check } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <header className="relative pt-28 lg:pt-32 min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <DarkVeil
            hueShift={40}
            noiseIntensity={0.08}
            scanlineIntensity={0.15}
            scanlineFrequency={0.65}
            warpAmount={0.2}
            speed={0.5}
            resolutionScale={1.1}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/50 via-slate-950/90 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-amber-400/5 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-6 text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-white/70">
              TERMS OF SERVICE
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_8px_32px_rgba(234,179,8,0.3)]">
              Terms of Service
              <span className="block mt-3 bg-gradient-to-r from-amber-300 via-amber-200 to-white bg-clip-text text-transparent">
                Our Agreement With You
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/80">
              Please read these terms carefully before using our website or services.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="relative py-20 bg-slate-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <p className="text-sm text-amber-400 font-mono mb-6">
              Last updated: December 2024
            </p>

            <div className="space-y-12">
              <div className="group">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">01</span>
                  <span>Site Overview & Acceptance</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    This site located at <strong className="text-amber-400">"www.thecloudsol.com"</strong> is a website ("Site") owned and operated by The Cloud Sol and/or its affiliates ("The Cloud Sol" or "Our" or "We" or "Us") and is intended to provide information that may be of interest to users.
                  </p>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Your access to, and use of, the Site hosted at www.thecloudsol.com and any other websites controlled by The Cloud Sol (together, "Our Sites"), including all content made available by The Cloud Sol, as well as any services provided through Our Sites, are governed by and subject to these The Cloud Sol Site Terms & Conditions ("Terms") and all applicable laws.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    By accessing and browsing Our Sites, you accept these Terms without limitation or qualification and acknowledge that any other agreements between you and The Cloud Sol are, subject to Section 13 (Other Agreements; Access to Software and Services), superseded and of no force or effect.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">02</span>
                  <span>Copyright</span>
                </h2>
                <div className="pl-12">
                  <div className="p-6 bg-slate-800/30 rounded-xl border border-amber-500/10 mb-6">
                    <p className="text-slate-300 leading-relaxed">
                      All content on Our Sites, including but not limited to text, graphics, logos, icons, audio clips, video clips, data compilations, software, and images, and their arrangement (collectively, "Content"), unless otherwise noted, are the property of The Cloud Sol or its content providers and are protected by Indian and international copyright laws.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">03</span>
                  <span>Trademarks</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    <strong className="text-amber-400">"The Cloud Sol"</strong>, <strong className="text-amber-400">"TheCloudSol"</strong>, the The Cloud Sol logo, and other graphics, logos, and service names are trademarks or trade dress of The Cloud Sol in India and/or other countries. These trademarks may not be used in connection with any product or service not belonging to The Cloud Sol, or in any manner likely to cause confusion, or that disparages or discredits The Cloud Sol.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    All other trademarks referenced on Our Sites belong to their respective owners. Nothing on Our Sites grants any license or right to use any trademark without prior written permission from The Cloud Sol or the respective trademark owner.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">04</span>
                  <span>Limited License</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    The Cloud Sol grants you a limited, revocable, non-exclusive license to access and make personal, non-commercial use of Our Sites. This license does not permit downloading (except for page caching), modification, reproduction, resale, or commercial exploitation of any portion of Our Sites without express written consent.
                  </p>
                  <p className="text-slate-300 mb-4">This license also prohibits:</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="bg-amber-400/10 rounded-full p-1.5 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                      </div>
                      <span className="text-slate-300">Creation of derivative works</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-400/10 rounded-full p-1.5 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                      </div>
                      <span className="text-slate-300">Use of data mining, scraping, or extraction tools</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-400/10 rounded-full p-1.5 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                      </div>
                      <span className="text-slate-300">Unauthorized linking or framing</span>
                    </li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    Any unauthorized use terminates this license immediately.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">05</span>
                  <span>Access to Our Sites</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    You are responsible for all activities conducted through your access to Our Sites. Certain content may require account registration.
                  </p>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    You agree to provide accurate, current, and complete information when creating or maintaining an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    The Cloud Sol reserves the right to restrict or terminate access at its sole discretion.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">06</span>
                  <span>Professional Services and Advice</span>
                </h2>
                <div className="pl-12">
                  <div className="p-6 bg-slate-800/30 rounded-xl border border-amber-500/10 mb-6">
                    <p className="text-slate-300 leading-relaxed">
                      No client, advisory, fiduciary, or professional relationship is created by accessing Our Sites. The Cloud Sol does not provide legal, accounting, tax, consulting, or other professional advice through Our Sites.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">07</span>
                  <span>Liability and Warranties</span>
                </h2>
                <div className="pl-12">
                  <div className="p-6 bg-slate-800/30 rounded-xl border border-amber-500/10 mb-6">
                    <p className="text-slate-300 font-semibold text-amber-400 mb-3">
                      OUR SITES AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                    </p>
                  </div>
                  <p className="text-slate-300 mb-4">The Cloud Sol does not warrant that:</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="bg-amber-400/10 rounded-full p-1.5 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                      </div>
                      <span className="text-slate-300">The Site will be uninterrupted or error-free</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-400/10 rounded-full p-1.5 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                      </div>
                      <span className="text-slate-300">Content will be accurate or complete</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-400/10 rounded-full p-1.5 mr-3 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                      </div>
                      <span className="text-slate-300">Files will be free from viruses or harmful components</span>
                    </li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    To the fullest extent permitted by law, The Cloud Sol shall not be liable for any damages arising from the use of Our Sites or Content, including direct, indirect, incidental, special, or consequential damages, even if advised of the possibility of such damages.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">08</span>
                  <span>Indemnification</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 leading-relaxed">
                    You agree to indemnify and hold harmless The Cloud Sol from any claims, liabilities, damages, losses, and expenses arising from your use of Our Sites, violation of these Terms, or infringement of third-party rights.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">09</span>
                  <span>External Links</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 leading-relaxed">
                    Our Sites may contain links to third-party websites. The Cloud Sol does not control or endorse such sites and is not responsible for their content or privacy practices.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">10</span>
                  <span>Third-Party Content</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 leading-relaxed">
                    Our Sites may include third-party content or services. Accessing such content is at your own risk. The Cloud Sol is not responsible for third-party policies or practices.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">11</span>
                  <span>Submission of Personal Information</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 leading-relaxed">
                    Please review The Cloud Sol Privacy Policy, which is incorporated into these Terms by reference.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">12</span>
                  <span>Graphics, Images, and Videos</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 leading-relaxed">
                    Images of people or places displayed on Our Sites are either owned by or used with permission by The Cloud Sol. Unauthorized use is strictly prohibited.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">13</span>
                  <span>Other Agreements; Access to Software and Services</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    Certain products or services may be governed by separate agreements ("Other Agreements"). In case of conflict, the Other Agreement shall prevail.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Software downloads may be subject to separate license agreements. If no such agreement exists, these Terms govern use.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">14</span>
                  <span>Choice of Law, Jurisdiction, and Severability</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    These Terms are governed by the laws of Ahmedabad, Gujarat, India. Any disputes shall be subject to the exclusive jurisdiction of courts located in Ahmedabad, Gujarat (IN).
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    If any provision of these Terms is found unenforceable, the remaining provisions shall remain in effect.
                  </p>
                </div>
              </div>

              <div className="group pt-8 border-t border-white/5">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3 text-amber-400">15</span>
                  <span>Contact Information</span>
                </h2>
                <div className="pl-12">
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    If you have questions or concerns regarding these Terms & Conditions, please contact us through the contact form on our website.
                  </p>
                  <div className="inline-flex items-center px-6 py-3 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20 hover:bg-amber-500/20 transition-colors">
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
