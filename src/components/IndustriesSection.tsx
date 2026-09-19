import React from 'react';
import {
  Stethoscope,
  Smile,
  HeartPulse,
  Activity,
  Scale,
  Wrench,
  Globe,
  Sparkles,
  Headphones,
  Gem,
  Shirt,
  Dumbbell,
  Compass,
  Utensils,
  Boxes,
  GraduationCap,
  Coins,
  Smartphone,
  ShieldCheck,
  Building,
  ArrowRight,
} from 'lucide-react';
import { INDUSTRIES_LIST } from '../data/portfolioData';

export const IndustriesSection: React.FC = () => {
  const getIcon = (name: string) => {
    const props = { className: 'w-5 h-5 text-cyan-400' };
    switch (name) {
      case 'Stethoscope':
        return <Stethoscope {...props} />;
      case 'Smile':
        return <Smile {...props} />;
      case 'HeartPulse':
        return <HeartPulse {...props} />;
      case 'Activity':
        return <Activity {...props} />;
      case 'Scale':
        return <Scale {...props} />;
      case 'Wrench':
        return <Wrench {...props} />;
      case 'Globe':
        return <Globe {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Headphones':
        return <Headphones {...props} />;
      case 'Gem':
        return <Gem {...props} />;
      case 'Shirt':
        return <Shirt {...props} />;
      case 'Dumbbell':
        return <Dumbbell {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Utensils':
        return <Utensils {...props} />;
      case 'Boxes':
        return <Boxes {...props} />;
      case 'GraduationCap':
        return <GraduationCap {...props} />;
      case 'Coins':
        return <Coins {...props} />;
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Building':
        return <Building {...props} />;
      default:
        return <Globe {...props} />;
    }
  };

  return (
    <section
      id="industries"
      aria-label="Industries I Have Worked With"
      className="py-24 sm:py-32 bg-slate-900/50 relative border-t border-b border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Cross-Industry Domain Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Industries I’ve Worked With
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            I adapt quickly to specific business workflows, compliance needs, and customer mindsets across diverse commercial sectors.
          </p>
        </div>

        {/* 20 Industries Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INDUSTRIES_LIST.map((ind, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-950/20 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center transition-colors">
                  {getIcon(ind.iconName)}
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {ind.name}
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                {ind.description}
              </p>

              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-[11px] text-cyan-400 font-mono font-medium block truncate">
                  {ind.projectCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
