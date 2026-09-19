import React from 'react';
import {
  ShoppingBag,
  Building2,
  Stethoscope,
  Scale,
  Cpu,
  CalendarCheck,
  Workflow,
  Network,
  Database,
  Layers,
  FileCode2,
  Server,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { WHAT_I_CAN_BUILD } from '../data/portfolioData';

interface CapabilitiesSectionProps {
  onSelectCategory?: (category: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-cyan-400' };
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Stethoscope':
        return <Stethoscope {...props} />;
      case 'Scale':
        return <Scale {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'CalendarCheck':
        return <CalendarCheck {...props} />;
      case 'Workflow':
        return <Workflow {...props} />;
      case 'Network':
        return <Network {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'FileCode2':
        return <FileCode2 {...props} />;
      case 'Server':
        return <Server {...props} />;
      default:
        return <Layers {...props} />;
    }
  };

  return (
    <section
      id="what-i-build"
      aria-label="What I Can Build"
      className="py-24 sm:py-32 bg-slate-900/40 relative border-t border-b border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client-Friendly Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            What I Can Build for Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Every business has distinct requirements. Here is how my engineering capabilities translate into tangible, high-performing digital assets tailored to your industry.
          </p>
        </div>

        {/* 12 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_I_CAN_BUILD.map((card) => (
            <div
              key={card.id}
              className="group relative bg-slate-900/80 hover:bg-slate-850/90 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40 hover:shadow-cyan-950/20 transform hover:-translate-y-1"
            >
              <div>
                {/* Top Row: Icon & Category */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center transition-colors">
                    {getIcon(card.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-900/50 px-2.5 py-1 rounded-full">
                    {card.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>

                {/* Business Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {card.description}
                </p>

                {/* Client Benefit */}
                <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800/80 mb-4">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Client Value
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.clientBenefit}
                  </p>
                </div>
              </div>

              {/* Real Project References */}
              <div className="pt-3 border-t border-slate-800/70 text-xs text-slate-400 flex items-center justify-between">
                <span className="truncate pr-2">
                  <strong className="text-slate-300 font-medium">Examples:</strong> {card.examples}
                </span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
