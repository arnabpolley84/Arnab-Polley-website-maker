import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';
import { EDUCATION_RECORDS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Academic Education"
      className="py-24 sm:py-32 bg-slate-900/40 relative border-t border-b border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Formal Education
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Rigorous foundations in computer science applications, software engineering principles, algorithms, and systems analysis.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_RECORDS.map((edu, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-slate-950 text-slate-300 border border-slate-800">
                      {edu.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                      {edu.score}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-sm text-slate-300 font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-400">
                  {edu.universityBoard}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  First Class Degree Record
                </span>
                <span className="font-mono text-slate-500">Graduated {edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
