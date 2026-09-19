import React from 'react';
import { ShoppingBag, ExternalLink, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { ALL_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface EcommerceShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const EcommerceShowcase: React.FC<EcommerceShowcaseProps> = ({ onSelectProject }) => {
  // Specific Shopify / E-Commerce projects from section 16
  const ecommerceIds = [
    'brownkind-skincare',
    'audioengine',
    'millioncarats',
    'itfretail',
    'meermin',
    'elitefitness',
    'pouchshop',
    'drinkflowbrew',
    'canterbury',
    'oneside',
    'peak-energygum',
    'breathing-place',
    'tuttibelly',
    'drashley',
    'hollycharlotte',
  ];

  const ecommerceProjects = ecommerceIds
    .map((id) => ALL_PROJECTS.find((p) => p.id === id))
    .filter((p): p is Project => Boolean(p));

  return (
    <section
      id="ecommerce"
      aria-label="Shopify and E-Commerce Showcase"
      className="py-24 sm:py-32 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>5+ Years Shopify Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            E-Commerce That Converts & Scales
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            From high-end direct-to-consumer skincare and audiophile hardware to headless luxury ring builders and multi-carrier international stores.
          </p>
        </div>

        {/* E-Commerce Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecommerceProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 border border-slate-800 hover:border-cyan-500/30 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/90 text-cyan-300 border border-cyan-800/40">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.clientSummary}
                  </p>

                  {/* Highlight */}
                  {project.keyHighlight && (
                    <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 mb-4">
                      <span className="text-xs text-cyan-400 font-medium">
                        ★ {project.keyHighlight}
                      </span>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-medium bg-slate-950 text-slate-300 rounded border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] text-slate-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-800/40 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Visit Store</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <button
                      onClick={() => onSelectProject(project)}
                      className="py-2 px-3.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
