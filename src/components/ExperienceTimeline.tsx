import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState(EXPERIENCE_TIMELINE[0].id);

  const activeItem = EXPERIENCE_TIMELINE.find((item) => item.id === selectedRole) || EXPERIENCE_TIMELINE[0];

  return (
    <section
      id="experience"
      aria-label="Experience Timeline"
      className="py-24 sm:py-32 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>10 Years of Continuous Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Professional Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            A decade-long progression from foundational enterprise systems at WIPRO to leading complex e-commerce, custom web apps, and modern systems architecture.
          </p>
        </div>

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Role Selector */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-1">
              Select Career Milestone
            </div>
            <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1 scrollbar-thin">
              {EXPERIENCE_TIMELINE.map((exp) => {
                const isSelected = exp.id === selectedRole;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedRole(exp.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-950/40 text-white'
                        : 'bg-slate-900/50 hover:bg-slate-900/80 border-slate-800/80 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm sm:text-base text-white">
                          {exp.company}
                        </span>
                        {exp.location && (
                          <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                            {exp.location}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-cyan-400 font-medium mt-0.5">
                        {exp.role}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1 font-mono">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Role Expanded Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                    Verified Work Experience
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeItem.company}
                  </h3>
                  <div className="text-base font-semibold text-cyan-300 mt-0.5">
                    {activeItem.role}
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono font-medium text-slate-300">
                  {activeItem.period}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="py-6 border-b border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Key Responsibilities & Outcomes
                </h4>
                <div className="space-y-3.5">
                  {activeItem.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300 leading-relaxed font-normal">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Technologies & Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeItem.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-slate-950 text-slate-300 border border-slate-800 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
