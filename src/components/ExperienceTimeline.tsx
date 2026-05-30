import React from 'react';
import { experiencesData } from '../data';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium text-xs tracking-wider uppercase rounded-full mb-4">
            <Briefcase className="w-3 h-3" /> Career Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Perjalanan Karir Profesional
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Kombinasi antara kepemimpinan teknis dalam tim riset startup dan dedikasi menghasilkan solusi piranti lunak berstandar keamanan industri tinggi.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 md:pl-10 ml-4 md:ml-6 space-y-12">
          {experiencesData.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Indicator Node */}
              <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 transition-all duration-300 group-hover:scale-125 ${
                exp.current 
                  ? 'bg-emerald-500 ring-4 ring-emerald-500/20' 
                  : 'bg-slate-400 dark:bg-slate-600 ring-4 ring-slate-200/50 dark:ring-slate-800/30'
              }`} />

              <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 md:p-8 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-slate-100/50 dark:hover:shadow-none transition-all duration-300">
                
                {/* Header Meta Info */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                      {exp.company}
                    </div>
                  </div>

                  {/* Period & Location tags */}
                  <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1.5 px-3 rounded-full">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1.5 px-3 rounded-full">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements block */}
                <div className="mb-6 space-y-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-2">
                    <Award className="w-3.5 h-3.5 text-emerald-500" /> Key Accomplishments
                  </div>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-400">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 leading-relaxed">
                        <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill Chips specifically associated with this experience */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-900">
                  {exp.skills.map(skill => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
