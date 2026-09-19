import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  Search,
  Filter,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Layers,
  Building,
  Info,
} from 'lucide-react';
import { ALL_PROJECTS, CATEGORIES } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

interface ProjectPortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectPortfolio: React.FC<ProjectPortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.category === activeCategory;

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.industry.toLowerCase().includes(q) ||
        p.clientSummary.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        (p.platform && p.platform.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="work"
      aria-label="Selected Work Portfolio"
      className="py-24 sm:py-32 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Client Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Explore the websites, e-commerce experiences and digital solutions I have worked on across different industries. Every project represents real-world business challenges solved through deliberate engineering.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 mb-12 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, industry, or tech..."
                aria-label="Search projects"
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results count pill */}
            <div className="text-xs text-slate-400">
              Showing <span className="text-white font-bold">{filteredProjects.length}</span> of {ALL_PROJECTS.length} verified projects
            </div>
          </div>

          {/* Category Pills (Horizontally scrollable on mobile, wrapping on desktop) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-4 mt-4 border-t border-slate-800/80 pb-1 scrollbar-thin">
            {CATEGORIES.map((cat) => {
              const count =
                cat === 'All'
                  ? ALL_PROJECTS.length
                  : ALL_PROJECTS.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-950/50'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800/70'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeCategory === cat
                        ? 'bg-slate-950/20 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center bg-slate-900/40 rounded-2xl border border-slate-800">
            <Info className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-base text-slate-300 font-semibold mb-1">
              No matching projects found
            </p>
            <p className="text-xs text-slate-500 mb-4">
              Try adjusting your search terms or category selection.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-cyan-950/20 transform hover:-translate-y-1"
              >
                {/* Visual Header / Tasteful Category Image with Lenus Subtle Fade */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.imageUrl}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Lenus dark-to-transparent overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/90 backdrop-blur-md text-cyan-300 border border-cyan-800/40 shadow-sm">
                      {project.category}
                    </span>
                    {project.platform && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-900/90 backdrop-blur-md text-slate-300 border border-slate-700/60">
                        {project.platform}
                      </span>
                    )}
                  </div>

                  {/* Industry tag */}
                  <div className="absolute bottom-3 left-3.5">
                    <span className="text-[11px] font-medium text-slate-300 bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-slate-800">
                      {project.industry}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>

                    {/* LAYER 1: CLIENT-FRIENDLY (Prominent) */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.clientSummary}
                    </p>

                    {/* Key Work Highlight */}
                    {project.workCompleted.length > 0 && (
                      <div className="mb-4 pt-3 border-t border-slate-800/70">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                          What I Engineered:
                        </span>
                        <div className="space-y-1">
                          {project.workCompleted.slice(0, 2).map((item, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                              <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* LAYER 2: TECHNICAL (Subtle pills) */}
                  <div className="pt-3 border-t border-slate-800/80">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                      Built With:
                    </span>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-medium bg-slate-950 text-slate-300 rounded border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-800/60">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-800/40 hover:border-cyan-500/50 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <span>View Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          onClick={() => onSelectProject(project)}
                          className="flex-1 py-2 px-3 rounded-lg text-xs font-medium bg-slate-800/50 text-slate-400 border border-slate-800 flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <span>Client Details</span>
                        </button>
                      )}

                      <button
                        onClick={() => onSelectProject(project)}
                        className="py-2 px-3.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3 text-cyan-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
