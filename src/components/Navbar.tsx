import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    // ── NAVIGASI ─────────────────────────────────────────────
    // Tambah / ubah / hapus item menu navbar di sini.
    // 'href' harus sesuai dengan id section di halaman
    // (ex: id="projects" → href: '#projects')
    // ─────────────────────────────────────────────────────────
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Me', href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          id="logo-brand"
          href="#"
          className="text-xl md:text-2xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white transition group"
        >
          Dev<span className="text-emerald-500 group-hover:animate-pulse">eloper.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-emerald-500 dark:hover:text-emerald-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle - Styled elegantly like the mockup's toggle switch */}
          <div className="flex items-center space-x-2">
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-800 cursor-pointer p-0.5 transition-colors duration-300 flex items-center"
              aria-label="Toggle dark mode"
            >
              {/* Slider thumb */}
              <div
                className={`absolute w-6 h-6 rounded-full bg-amber-500 shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  darkMode ? 'translate-x-7 bg-indigo-500' : 'translate-x-0'
                }`}
              >
                {darkMode ? (
                  <Moon className="w-3.5 h-3.5 text-white" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-white" />
                )}
              </div>
            </button>
          </div>

          {/* Download CV button redirected to GitHub */}
          {/* ── TOMBOL NAVBAR KANAN ──────────────────────────
              Saat ini mengarah ke GitHub profile.
              Untuk menambahkan tombol Download CV:
              ganti href ke link Google Drive / direct PDF,
              ubah teks 'GitHub Profile' → 'Download CV',
              dan ganti ikon Github → Download dari lucide-react
              ─────────────────────────────────────────────── */}
          <a
            id="nav-github-btn"
            href="https://github.com/RegaCode4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-slate-900 dark:border-slate-100 hover:bg-slate-900 dark:hover:bg-slate-100 text-slate-900 dark:text-slate-100 hover:text-white dark:hover:text-slate-900 text-sm font-semibold px-4 py-2 rounded-full transition duration-300 active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Mobile Controls Right Side */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Quick theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-full text-slate-900 dark:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-800 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 py-1 transition"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="border-t border-slate-200 dark:border-slate-800 pt-4 flex flex-col space-y-3">
                <a
                  href="https://github.com/RegaCode4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-slate-900 dark:border-slate-100 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold px-4 py-2.5 rounded-full text-sm hover:opacity-90 transition text-center"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
