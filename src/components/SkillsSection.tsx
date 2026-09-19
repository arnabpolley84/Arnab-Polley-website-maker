import React from 'react';
import { Code, Server, ShoppingCart, Cloud, CheckCircle2, Clock, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Frontend')) return <Code className="w-5 h-5 text-cyan-400" />;
    if (category.includes('Backend')) return <Server className="w-5 h-5 text-cyan-400" />;
    if (category.includes('E-Commerce')) return <ShoppingCart className="w-5 h-5 text-cyan-400" />;
    if (category.includes('Cloud')) return <Cloud className="w-5 h-5 text-cyan-400" />;
    return <Terminal className="w-5 h-5 text-cyan-400" />;
  };

  return (
    <section
      id="skills"
      aria-label="Skills and Technical Competencies"
      className="py-24 sm:py-32 bg-slate-900/40 relative border-t border-b border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Grouped Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Organized across core client delivery domains, emphasizing production experience and formal certifications.
          </p>
        </div>

        {/* Grouped Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className={`bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl ${
                idx === SKILL_CATEGORIES.length - 1 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3">
                  {cat.skills.map((skill) => {
                    const isInProgress = skill.level?.toLowerCase().includes('in progress');
                    const isExpert = skill.level?.toLowerCase().includes('expert');
                    const isSpecialist = skill.level?.toLowerCase().includes('specialist');

                    return (
                      <div
                        key={skill.name}
                        className={`px-3 py-2 rounded-xl text-xs flex items-center gap-2 border transition-colors ${
                          isInProgress
                            ? 'bg-amber-950/30 border-amber-800/50 text-amber-200'
                            : isExpert || isSpecialist
                            ? 'bg-cyan-950/40 border-cyan-800/60 text-cyan-200 font-semibold'
                            : 'bg-slate-950/80 border-slate-800 text-slate-300'
                        }`}
                      >
                        {isInProgress ? (
                          <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        )}
                        <span className="font-medium text-white">{skill.name}</span>
                        {skill.level && (
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                              isInProgress
                                ? 'bg-amber-900/60 text-amber-300'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {skill.level}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
