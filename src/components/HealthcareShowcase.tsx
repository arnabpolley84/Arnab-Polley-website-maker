import React from 'react';
import { ExternalLink, Stethoscope, Scale, Wrench, Activity, Heart, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ALL_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface HealthcareShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const HealthcareShowcase: React.FC<HealthcareShowcaseProps> = ({ onSelectProject }) => {
  // Extract the specific 6 healthcare / professional projects requested
  const showcaseIds = [
    'aesthetic-smiles',
    'prime-cardiology',
    'ksosn',
    'benjamin-associates',
    'deschutes-plumbing',
    'melbourne-hip-surgeon',
  ];

  const showcaseProjects = showcaseIds
    .map((id) => ALL_PROJECTS.find((p) => p.id === id))
    .filter((p): p is Project => Boolean(p));

  return (
    <section
      id="healthcare"
      aria-label="Healthcare and Professional Websites"
      className="py-24 sm:py-32 bg-slate-900/40 relative border-t border-b border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Healthcare & Professional Practices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Websites Built for Trusted Practices & Professionals
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Medical clinics, law firms, and licensed contractors demand absolute clarity, patient confidence, and high accessibility. Here are key production platforms engineered for clinical and legal practices.
          </p>
        </div>

        {/* Rich alternating cards / grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 border border-slate-800 hover:border-cyan-500/30 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image banner with Lenus fade */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/90 text-cyan-300 border border-cyan-800/40">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>

                  {/* Client-friendly overview */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.clientSummary}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-800/70">
                    {project.workCompleted.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with technologies and dual links */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-medium bg-slate-950 text-slate-300 rounded border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-800/40 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.devUrl && (
                      <a
                        href={project.devUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700 flex items-center gap-1 transition-colors cursor-pointer"
                        title="Development Environment"
                      >
                        <span>Dev</span>
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
                      </a>
                    )}

                    <button
                      onClick={() => onSelectProject(project)}
                      className="py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
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
