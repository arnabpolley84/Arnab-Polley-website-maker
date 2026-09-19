import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Workflow, Sparkles, Terminal, FileCode, ShoppingBag, Database } from 'lucide-react';

interface AboutSectionProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreWork, onContactClick }) => {
  const deliveryStages = [
    {
      step: '01',
      title: 'Business Requirements',
      desc: 'Understanding your commercial goals, customer journey, operations, and technical constraints.',
    },
    {
      step: '02',
      title: 'Design & Development',
      desc: 'Architecting intuitive user interfaces, custom storefronts, and clean, high-performance code.',
    },
    {
      step: '03',
      title: 'Integrations & Systems',
      desc: 'Connecting payment gateways, freight APIs, databases, CRM, and automation workflows.',
    },
    {
      step: '04',
      title: 'Testing & Delivery',
      desc: 'Hardening security, optimizing load speed, validating transactions, and continuous support.',
    },
  ];

  const experiencePoints = [
    'Custom storefronts & bespoke theme development',
    'Shopify ecosystem applications & storefront APIs',
    'Advanced platform scaling for high-traffic sales',
    'Laravel backend engineering & enterprise APIs',
    'Custom PHP development & relational databases',
    'WordPress custom themes & specialized plugins',
    'End-to-end e-commerce solutions & international checkouts',
    'Database-driven web applications & business portals',
  ];

  return (
    <section
      id="about"
      aria-label="About Arnab Polley"
      className="py-24 sm:py-32 relative bg-slate-950 overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-slate-800/40 rounded-3xl blur-md opacity-75" />

              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
                {/* Profile Header */}
                <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-lg shadow-cyan-950/50">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-400 font-extrabold text-xl font-mono">
                      AP
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      ARNAB POLLEY
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400">
                      Senior Software Engineer
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Kolkata, W.B., India • Available Globally
                    </p>
                  </div>
                </div>

                {/* Core Career Summary Card */}
                <div className="mt-6 space-y-4">
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      Core Experience
                    </div>
                    <p className="text-sm text-slate-200 font-medium">
                      10 Years Total Professional IT Experience
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Strong 5+ year focus within the Shopify e-commerce ecosystem and 5–7 years in Laravel backend engineering.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800/60">
                      <span className="text-xs text-slate-400 block">Focus</span>
                      <span className="text-sm font-semibold text-slate-200">E-Commerce & Full-Stack</span>
                    </div>
                    <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800/60">
                      <span className="text-xs text-slate-400 block">Delivery</span>
                      <span className="text-sm font-semibold text-slate-200">End-to-End Solutions</span>
                    </div>
                  </div>

                  {/* Primary Strengths Pills */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Primary Technology Pillars
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Shopify & Liquid', 'Laravel', 'WordPress', 'Custom PHP', 'REST APIs', 'MySQL'].map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-slate-800/80 text-slate-300 rounded-md border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={onContactClick}
                    className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-center bg-slate-800 hover:bg-slate-750 text-cyan-400 border border-cyan-800/40 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Connect Regarding Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Business Perspective & Process */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Workflow className="w-3.5 h-3.5" />
              <span>Client-Focused Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Engineering Experience With a Business Perspective
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
              I am a Senior Software Engineer with 10 years of total IT experience, including a strong 5+ year focus within the Shopify ecosystem. I approach every engagement from a commercial perspective: understanding how technology solves real business problems rather than simply writing code in a silo.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              Whether you are launching an international e-commerce store, building a patient-friendly healthcare portal, or establishing a law firm’s digital presence, I work seamlessly across the full development lifecycle to ensure your software is reliable, intuitive, and profitable.
            </p>

            {/* The Bridge: Business Requirements -> Design/Dev -> Integrations -> Delivery */}
            <div className="mb-10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                <span>The Engineering Lifecycle I Bridge</span>
                <div className="h-px flex-1 bg-slate-800" />
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deliveryStages.map((stage) => (
                  <div
                    key={stage.step}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {stage.step}
                      </span>
                      <h5 className="text-sm font-bold text-white">
                        {stage.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bullet List of Resume Capabilities in Client-Friendly Terms */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Key Technical Deliverables Supported
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {experiencePoints.map((point) => (
                  <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
