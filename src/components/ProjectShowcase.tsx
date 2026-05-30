import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Project } from '../types';
import { Github, ExternalLink, ArrowUpRight, FolderGit2, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const categories = ['All', 'Fullstack', 'Frontend'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    if (expandedProjectId === id) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(id);
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-16">
          <div className="max-w-2xl mb-6 md:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium text-xs tracking-wider uppercase rounded-full mb-4">
              <FolderGit2 className="w-3 h-3" /> Project Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Karya & Proyek Showcase
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              Berikut adalah beberapa proyek unggulan yang saya kembangkan sebagai Full Stack Developer. Fokus pada redundansi rendah, skalabilitas tinggi, dan pengalaman pengguna yang halus.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setExpandedProjectId(null); // Reset explanation drawer
                }}
                className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/15'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isExpanded = expandedProjectId === project.id;
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex flex-col bg-white dark:bg-slate-950 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
                >
                  {/* Decorative Banner */}
                  <div className="h-2 w-full bg-gradient-to-r from-emerald-500 to-teal-400" />
                  
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Tags & Type */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50">
                          {project.category}
                        </span>
                        
                        <div className="flex gap-2">
                          {project.featured && (
                            <span className="text-[10px] text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                              ⭐ Unggulan
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                        {project.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Technical specifications (expandable drawer) */}
                      <div className="mb-6">
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition focus:outline-none"
                        >
                          {isExpanded ? (
                            <>
                              Tutup Detail Teknis <ChevronUp className="w-3.5 h-3.5" />
                            </>
                          ) : (
                            <>
                              Lihat Logika & Skenario Teknis <ChevronDown className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 pb-2 space-y-4 text-xs text-slate-600 dark:text-slate-400 border-t border-dashed border-slate-200 dark:border-slate-800 mt-3">
                                <div>
                                  <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">Architectural Scope:</span>
                                  <span>{project.description}</span>
                                </div>
                                
                                <div>
                                  <span className="font-bold text-slate-800 dark:text-slate-200 block mb-2">Metrics / Capaian Utama:</span>
                                  <ul className="space-y-2">
                                    {project.achievements.map((item, idy) => (
                                      <li key={idy} className="flex gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div>
                      {/* Tech Badges List */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-2 py-0.5 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded border border-slate-200/40 dark:border-slate-800/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA URLs */}
                      <div className="flex items-center space-x-4 pt-4 border-t border-slate-100 dark:border-slate-900">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold text-slate-755 dark:text-slate-355 hover:text-slate-900 dark:hover:text-white transition"
                        >
                          <Github className="w-4 h-4" /> Codebase
                        </a>
                        
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition"
                          >
                            <ExternalLink className="w-4 h-4" /> Live Preview <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
