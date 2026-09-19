import React from 'react';
import { TRUST_STATS } from '../data/portfolioData';
import { Award, Briefcase, Code, ShoppingCart, Globe2 } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const statIcons = [
    <Award key="award" className="w-5 h-5 text-cyan-400" />,
    <ShoppingCart key="cart" className="w-5 h-5 text-cyan-400" />,
    <Code key="code" className="w-5 h-5 text-cyan-400" />,
    <Briefcase key="case" className="w-5 h-5 text-cyan-400" />,
    <Globe2 key="globe" className="w-5 h-5 text-cyan-400" />,
  ];

  return (
    <section
      id="trust-stats"
      aria-label="Experience & Track Record"
      className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
          {TRUST_STATS.map((item, idx) => (
            <div
              key={item.label}
              className={`flex flex-col pt-4 sm:pt-0 ${
                idx !== 0 ? 'sm:pl-6' : ''
              } ${idx === TRUST_STATS.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-md bg-cyan-950/60 border border-cyan-800/40">
                  {statIcons[idx]}
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
                  {item.number}
                </span>
              </div>
              <span className="text-sm font-semibold text-slate-200 mb-1">
                {item.label}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
