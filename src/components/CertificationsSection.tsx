import React from 'react';
import { Award, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      aria-label="Certifications"
      className="py-24 sm:py-32 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Formal Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Professional Certifications
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Ongoing continuous education across modern frameworks, e-commerce APIs, cloud platforms, and enterprise programming.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert) => {
            const isInProgress = cert.status === 'In Progress';
            return (
              <div
                key={cert.id}
                className={`p-5 rounded-xl border transition-all flex flex-col justify-between ${
                  isInProgress
                    ? 'bg-slate-900/60 border-amber-800/50 shadow-sm'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700 shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1.5 ${
                        isInProgress
                          ? 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
                          : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                      }`}
                    >
                      {isInProgress ? (
                        <>
                          <Clock className="w-3 h-3 text-amber-400" />
                          <span>In Progress</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Completed</span>
                        </>
                      )}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {cert.institution}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-slate-800/70 text-xs text-slate-400 flex items-center justify-between">
                  <span>Authorized Training</span>
                  <span className="text-slate-300 font-medium">{cert.institution}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
