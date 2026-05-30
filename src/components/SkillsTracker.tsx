import React, { useState } from 'react';
import { skillsData } from '../data';
import { Award, Code2, Zap, Palette, Server, ShieldCheck } from 'lucide-react';

export default function SkillsTracker() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getCategoryIcon = (name: string) => {
    if (name.includes('Frontend')) return <Palette className="w-5 h-5 text-fuchsia-400" />;
    if (name.includes('Backend')) return <Server className="w-5 h-5 text-emerald-400" />;
    return <ShieldCheck className="w-5 h-5 text-sky-400" />;
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium text-xs tracking-wider uppercase rounded-full mb-4">
            <Zap className="w-3 h-3 animate-bounce" /> Skill Metrics
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Kombinasi Tech Stack & Keahlian
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Penetapan prioritas pada pengondisian kode modular bebas bug, kueri database yang optimal, dan arsitektur UI modern responsif. Berinteraksi dengan mengarahkan kursor Anda untuk melihat metrik.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.name}
              className="bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 md:p-8 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-900">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900">
                  {getCategoryIcon(category.name)}
                </div>
                <h3 className="text-md font-display font-extrabold text-slate-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills List inside Category */}
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Info */}
                    <div className="flex justify-between items-center text-xs font-semibold mb-2">
                      <span className="text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden relative border border-slate-200/30 dark:border-slate-800/30">
                      {/* Animated inner glowing progress bar */}
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-1000 ease-out relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        {/* Overlay pulse on hover */}
                        <div className={`absolute inset-0 bg-white/25 animate-pulse transition-opacity duration-300 ${
                          hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
                        }`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight footer stat */}
        <div className="mt-12 bg-emerald-550 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6 text-center md:text-left md:flex md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4 justify-center md:justify-start mb-4 md:mb-0">
            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-full shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Professional Commitment</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Mengutamakan penulisan kode modern yang terdokumentasi rapi, teruji, dan mudah dipahami oleh anggota tim lainnya.</p>
            </div>
          </div>
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-white dark:bg-slate-950 p-2 px-4 rounded-xl border border-emerald-500/15">
            // Clean Code • Fast Loading • Scalable Backend
          </div>
        </div>

      </div>
    </section>
  );
}
