import React, { useEffect, useState } from 'react';
import { X, ExternalLink, CheckCircle2, Globe, Layers, ArrowUpRight, Shield, Code2, Server } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'work' | 'tech'>('overview');

  // Lock body scroll and close on ESC key
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-slate-950/60">
          <div className="pr-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {project.industry}
              </span>
              {project.platform && (
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">
                  {project.platform}
                </span>
              )}
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tab Navigation (Client-Friendly First) */}
        <div className="flex border-b border-slate-800 px-6 bg-slate-950/40">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Client-Friendly Overview
          </button>
          <button
            onClick={() => setActiveTab('work')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'work'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            What I Worked On
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'tech'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Technical Details
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-300">
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800/90">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  What This Business Project Does
                </h3>
                <p className="text-base text-slate-200 leading-relaxed font-normal">
                  {project.clientSummary}
                </p>
              </div>

              {project.keyHighlight && (
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40">
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                    Key Highlight
                  </span>
                  <p className="text-sm text-slate-300">
                    {project.keyHighlight}
                  </p>
                </div>
              )}

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Business Domain & Category
                </h4>
                <p className="text-sm text-slate-300">
                  Sector: <strong className="text-white">{project.industry}</strong> • Application Scope: <strong className="text-white">{project.category}</strong>
                </p>
              </div>
            </div>
          )}

          {activeTab === 'work' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Engineering Work & Solutions Delivered
              </h3>
              <div className="space-y-3">
                {project.workCompleted.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                  Technologies, Frameworks & APIs Utilized
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 border border-slate-700/80 text-cyan-200 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex justify-between">
                  <span>Architecture / Platform:</span>
                  <span className="text-slate-200 font-medium">{project.platform || 'Custom Web Stack'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Integration Status:</span>
                  <span className="text-emerald-400 font-medium">Production Deployed</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Live and Dev Links */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-950/40 transition-all cursor-pointer"
              >
                <span>View Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.devUrl && (
              <a
                href={project.devUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              >
                <span>Development Site</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            )}

            {project.adminUrl && (
              <a
                href={project.adminUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              >
                <span>Admin Login Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            )}

            {!project.liveUrl && !project.devUrl && !project.adminUrl && (
              <span className="text-xs text-slate-400 italic">
                Proprietary enterprise / private client codebase.
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
