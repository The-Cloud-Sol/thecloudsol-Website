import DarkVeil from "./DarkVeil";

export function Hero() {
  return (
    <header className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0 w-full h-full">
        <div className="h-full w-full">
          <DarkVeil
            hueShift={39}
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
      <div className="relative z-10 flex min-h-screen items-center pt-24 md:pt-0">
        <div className="container mx-auto px-6 text-center text-white">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-white/70">
            ∆ Cloud Computing Excellence | Digital Transformation
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_8px_32px_rgba(14,165,233,0.45)]">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
              Enterprise Cloud Solutions
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl text-white/80">
            Leading cloud computing company in India offering expert cloud migration, Azure services, AWS solutions, Google Cloud, and Microsoft 365 implementation. 
            Scale your business with secure, reliable cloud infrastructure and 99.9% uptime guarantee.
          </p>
          <div className="mt-12 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Cloud Migration</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Azure & AWS Solutions</h3>
              <p className="mt-2 text-sm text-white/75">
                Enterprise cloud migration services with certified Azure and AWS architects. Seamless transition to cloud infrastructure with zero downtime.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Microsoft 365</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Cloud Productivity</h3>
              <p className="mt-2 text-sm text-white/75">
                Complete Microsoft 365 setup, Copilot integration, Power Platform automation, and Teams collaboration for modern workplace.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-mono uppercase tracking-[0.4em] text-sky-200/80">Cloud Security</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Enterprise Protection</h3>
              <p className="mt-2 text-sm text-white/75">
                Advanced cloud security, Zero Trust architecture, compliance management, and 24/7 monitoring for complete data protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
