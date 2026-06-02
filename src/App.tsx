import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CodeLaptopMockup from "./components/CodeLaptopMockup";
import ProjectShowcase from "./components/ProjectShowcase";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsTracker from "./components/SkillsTracker";
import ContactForm from "./components/ContactForm";
import { motion } from "motion/react";
import {
  Github,
  ArrowRight,
  Sparkles,
  Terminal,
  Code2,
  Heart,
} from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Sync state with HTML element class for clean global Tailwind dark mode compatibility
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`}
    >
      {/* Header and navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <header id="hero" className="relative pt-32 pb-20 overflow-hidden">
        {/* Top-right subtle atmospheric mesh glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-emerald-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -left-10 top-1/4 w-72 h-72 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero text branding */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Hi badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-xs md:text-sm rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hi, I am Adip Habibullah</span>
            </motion.div>

            {/* Massive Display Heading */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9] uppercase"
              >
                FULL STACK
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9] uppercase block"
              >
                WEB DEVELOPER
              </motion.h2>
            </div>

            {/* Short Narrative Copy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-slate-600 dark:text-slate-350 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Saya adalah perancang aplikasi web yang berfokus pada visual
              interaktif berkecepatan tinggi, optimasi basis data relasional,
              dan penulisan kode modern yang lincah dan reusable.
            </motion.p>

            {/* Call to actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full text-sm shadow-lg shadow-emerald-500/15 transition duration-300 transform active:scale-95"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/RegaCode4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 font-bold px-8 py-4 rounded-full text-sm transition duration-300 active:scale-95"
              >
                <Github className="w-4 h-4 hover:animate-spin" />
                <span>Visit GitHub</span>
              </a>
            </motion.div>
          </div>

          {/* Pedestal and interactive Code Laptop setup */}
          <div className="lg:col-span-6 relative w-full flex justify-center items-center">
            {/* Atmospheric backdrop halo */}
            <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none scale-90" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <CodeLaptopMockup />
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section
        id="about"
        className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              {/* Backing stylized art card */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-3xl blur opacity-20 pointer-events-none" />
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 text-white space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-300 tracking-wider uppercase">
                      // core_credentials
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 font-mono text-xs leading-relaxed text-slate-350">
                  <p>
                    {/* ── KARTU KODE ABOUT ME ───────────────────────────
                        Ubah nilai di bawah sesuai profil terkini:
                        - name    : nama lengkap
                        - role    : jabatan / posisi
                        - focus   : spesialisasi utama saat ini
                        - available: true jika sedang open to work
                        ─────────────────────────────────────────────── */}
                    <span className="text-emerald-400">const</span> developer ={" "}
                    <span className="text-amber-400">{`{`}</span>
                    <br />
                    <span className="pl-4">name:</span>{" "}
                    <span className="text-emerald-300">'Adip Habibullah'</span>,
                    <br />
                    <span className="pl-4">role:</span>{" "}
                    <span className="text-emerald-300">
                      'Full Stack Web Developer'
                    </span>
                    ,
                    <br />
                    <span className="pl-4">focus:</span>{" "}
                    <span className="text-emerald-300">
                      'Microservices & Custom UI'
                    </span>
                    ,
                    <br />
                    <span className="pl-4">available:</span>{" "}
                    <span className="text-amber-400">true</span>
                    <br />
                    <span className="text-amber-400">{`}`}</span>;
                  </p>

                  <p>
                    <span className="text-fuchsia-400">function</span>{" "}
                    <span className="text-sky-400">isHirable</span>(){" "}
                    <span className="text-amber-400">{`{`}</span>
                    <br />
                    <span className="pl-4 text-fuchsia-400">return</span>{" "}
                    <span className="text-sky-450 font-semibold">
                      developer.available
                    </span>
                    ;
                    <br />
                    <span className="text-amber-400">{`}`}</span>
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Status: READY</span>
                  {/* Ganti kota jika pindah domisili */}
                  <span>Padang, ID</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium text-xs tracking-wider uppercase rounded-full mb-2">
                <Code2 className="w-3.5 h-3.5" /> About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                Membangun Solusi Digital dari Hulu ke Hilir
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                Halo, saya Adip Habibullah. Saya adalah seorang Full Stack Web
                Developer yang mendedikasikan waktu saya untuk mempelajari pola
                arsitektur pengembangan web modern. Saya memiliki hasrat besar
                untuk mengubah tantangan bisnis nyata menjadi solusi piranti
                lunak berkelas industri.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                Dengan mengintegrasikan logika back-end NodeJS/PostgreSQL
                berkemampuan tinggi dengan kehalusan navigasi front-end React,
                setiap produk yang saya rakit dirancang untuk memaksimalkan
                performa, keamanan end-to-end, dan kenyamanan layar pengguna.
              </p>

              {/* Pillars list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                      Clean Architecture
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Struktur kode solid & redundansi super rendah.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                      Performance Audit
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Optimasi caching PostgreSQL dan query terindeks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceTimeline />

      {/* Projects Showcase section */}
      <ProjectShowcase />

      {/* Skills component section */}
      <SkillsTracker />

      {/* Contact Form component section */}
      <ContactForm />

      {/* Subtle and beautiful footer layout */}
      <footer className="py-12 bg-slate-500/5 border-t border-slate-200/50 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Adip Habibullah. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by RegaCode</span>
            <span>•</span>
            <a
              href="https://github.com/RegaCode4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 font-semibold transition"
            >
              GitHub Portfolio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
