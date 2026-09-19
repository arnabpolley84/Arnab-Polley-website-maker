import React from 'react';
import { ExternalLink, CheckCircle2, ShoppingBag, ShieldCheck, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { FEATURED_PROJECT_SACVIN } from '../data/portfolioData';

interface FeaturedCaseStudyProps {
  onOpenDetails: () => void;
}

export const FeaturedCaseStudy: React.FC<FeaturedCaseStudyProps> = ({ onOpenDetails }) => {
  const project = FEATURED_PROJECT_SACVIN;

  return (
    <section
      id="featured"
      aria-label="Featured Case Study"
      className="py-20 sm:py-28 relative bg-slate-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Case Study</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured E-Commerce Engineering
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            A comprehensive look at international e-commerce scaling, localized payments, carrier logistics, and custom theme architecture.
          </p>
        </div>

        {/* Big Premium Case Study Card */}
        <div className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Visual Area with Lenus-style subtle blend */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-950">
              <img
                src={project.imageUrl}
                alt="SACVIN International E-Commerce Showcase"
                className="w-full h-full object-cover object-center"
              />
              {/* Lenus-inspired gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />

              {/* Floating Badge on image */}
              <div className="absolute top-6 left-6 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Shopify Flagship
                </span>
              </div>

              {/* Live Link Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between bg-slate-950/90 backdrop-blur-md border border-slate-800 p-3.5 rounded-xl">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Live Verified Store
                  </span>
                  <span className="text-xs font-mono text-cyan-400 font-medium truncate block max-w-[200px] sm:max-w-xs">
                    s6bcd1-ar.myshopify.com
                  </span>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 transition-colors shrink-0"
                  aria-label="Visit SACVIN live store"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Detailed Narrative Area */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {project.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                    {project.industry}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-950/70 text-cyan-300 text-xs font-medium border border-cyan-800/60">
                    Nigerian Market
                  </span>
                </div>

                {/* Layer 1: Client-Friendly Summary */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Client & Business Overview
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {project.clientSummary}
                  </p>
                </div>

                {/* Key Accomplishments Checklist */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    What Was Engineered & Integrated
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.workCompleted.map((task, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Layer 2: Technology / Built With Pills */}
                <div className="pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Built With & Integrated Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-slate-800/90 text-slate-300 rounded-md border border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-950/50 transition-all cursor-pointer"
                >
                  <span>View Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenDetails}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                >
                  <span>View Project Breakdown</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
