import React from 'react';
import { FolderCheck, Briefcase, Layers, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

interface WhyWorkWithMeProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ onExploreWork, onContactClick }) => {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FolderCheck className="w-6 h-6 text-cyan-400" />;
      case 1:
        return <Briefcase className="w-6 h-6 text-cyan-400" />;
      case 2:
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case 3:
        return <Award className="w-6 h-6 text-cyan-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section
      aria-label="See What I Have Built"
      className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Proven Delivery Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            See What I’ve Built
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            When you evaluate a senior software engineer for your business, verified projects and longevity speak louder than empty promises. Here is what my career brings to your venture.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_WORK_WITH_ME.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group transform hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center mb-5 transition-colors">
                  {getPillarIcon(idx)}
                </div>

                <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                  Pillar 0{idx + 1}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs text-cyan-300/90 font-medium mb-3">
                  {pillar.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center text-xs text-slate-500 group-hover:text-cyan-400 transition-colors">
                <span>Verified in production</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Action Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/20 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              Ready to explore specific case studies for your industry?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Browse 40+ real projects or discuss your specific website and technical requirements directly.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onExploreWork}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 transition-colors cursor-pointer"
            >
              Explore Portfolio
            </button>
            <button
              onClick={onContactClick}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-950/50 transition-colors cursor-pointer"
            >
              Discuss Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
