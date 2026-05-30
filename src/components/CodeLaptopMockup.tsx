import React, { useState } from 'react';
import { motion } from 'motion/react';
import { File, Settings, Search, GitBranch, Terminal, RefreshCw, Layers, CheckCircle2 } from 'lucide-react';

interface CodeFile {
  name: string;
  language: 'json' | 'typescript' | 'css';
  icon: string;
  content: string;
}

const files: CodeFile[] = [
  {
    name: 'App.tsx',
    language: 'typescript',
    icon: '⚛️',
    content: `import React, { useState } from 'react';
import { Hero, Portfolio, Skills, Contact } from './components';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const developer = {
    name: 'Adip Habibullah',
    role: 'Full Stack Web Developer',
    github: 'https://github.com/RegaCode4',
    passion: 'Building scalable high-performance apps'
  };

  return (
    <div className={\`app \${theme} bg-slate-900 text-white min-h-screen\`}>
      <Navbar theme={theme} onChange={setTheme} />
      <Hero dev={developer} />
      <PortfolioShowcase />
      <SkillMetrics />
      <ContactForm />
    </div>
  );
}`
  },
  {
    name: 'package.json',
    language: 'json',
    icon: '📦',
    content: `{
  "name": "adip-habibullah-portfolio",
  "version": "2.4.0",
  "private": true,
  "type": "module",
  "dependencies": {
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "motion": "^12.23.24",
    "lucide-react": "^0.546.0",
    "express": "^4.21.2"
  },
  "devDependencies": {
    "typescript": "~5.8.2",
    "vite": "^6.2.3",
    "tailwindcss": "^4.1.14"
  }
}`
  },
  {
    name: 'Developer.ts',
    language: 'typescript',
    icon: '💻',
    content: `// Profile specifications for Adip Habibullah
import { SkillSet, Project } from './types';

export class AdipHabibullah implements Developer {
  readonly name = "Adip Habibullah";
  readonly role = "Full Stack Web Developer";
  readonly location = "Indonesia";

  getExpertise(): string[] {
    return [
      "Fullstack Web Architectures",
      "Real-time Synchronized Engines",
      "API Performance Optimization",
      "Sleek Interactive Interfaces"
    ];
  }

  isReadyForHiring(): boolean {
    const passionate = true;
    const skillsSharp = true;
    return passionate && skillsSharp;
  }
}`
  }
];

export default function CodeLaptopMockup() {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'System initialization...',
    'Vite dev server running on http://localhost:3000',
    'Ready for testing.'
  ]);
  const [isCompiling, setIsCompiling] = useState(false);

  const simulateCompile = () => {
    if (isCompiling) return;
    setIsCompiling(true);
    setTerminalLogs(prev => [...prev, '$ npm run build && deploy']);
    
    setTimeout(() => {
      setTerminalLogs(prev => [...prev, '⚡ Bundling typescript assets via esbuild...']);
    }, 600);

    setTimeout(() => {
      setTerminalLogs(prev => [...prev, '✔ Webpack/esbuild compiled successfully. (~450ms)']);
    }, 1400);

    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev,
        '🚀 Production bundle deployed to Cloud Run!',
        '✨ Status: LIVE (100% healthy)'
      ]);
      setIsCompiling(false);
    }, 2200);
  };

  const currentFile = files[activeFileIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 perspective-1000 mt-8 mb-12">
      {/* Container holding the 3D-ish Laptop setup */}
      <div className="relative bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl shadow-emerald-950/25 overflow-hidden transition-all duration-300">
        
        {/* Editor Top Bar resembling VS Code */}
        <div className="flex items-center justify-between bg-slate-900 px-4 py-2.5 border-b border-slate-800 text-xs text-slate-400 select-none">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 opacity-80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 opacity-80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-80 inline-block"></span>
            <span className="ml-2 font-medium text-slate-300 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              AdipWorkspace - Visual Studio Code
            </span>
          </div>
          
          <div className="hidden sm:flex items-center space-x-4">
            <span className="hover:text-white cursor-pointer transition">File</span>
            <span className="hover:text-white cursor-pointer transition">Edit</span>
            <span className="hover:text-white cursor-pointer transition">Selection</span>
            <span className="hover:text-white cursor-pointer transition">Terminal</span>
          </div>

          <div className="flex items-center space-x-2">
            <button 
              onClick={simulateCompile} 
              disabled={isCompiling}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white font-semibold transition active:scale-95 disabled:opacity-50 text-[11px]`}
            >
              <RefreshCw className={`w-3 h-3 ${isCompiling ? 'animate-spin' : ''}`} />
              {isCompiling ? 'Building...' : 'Compile'}
            </button>
          </div>
        </div>

        {/* Editor Body */}
        <div className="flex h-[360px] sm:h-[420px] text-sm overflow-hidden">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col w-48 bg-slate-950 border-r border-slate-800 select-none">
            <div className="p-3 text-[10px] uppercase tracking-wider font-semibold text-slate-500 flex items-center justify-between">
              <span>Explorer</span>
              <Settings className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
            </div>
            
            {/* File Tree */}
            <div className="flex-1 overflow-y-auto px-2 space-y-1 text-slate-400 text-xs">
              <div className="p-1 px-2 text-emerald-400/90 font-semibold flex items-center gap-1.5 bg-emerald-500/5 rounded">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>ROOT_PORTFOLIO</span>
              </div>
              
              <div className="pl-4 space-y-1">
                {files.map((file, i) => (
                  <button
                    key={file.name}
                    onClick={() => setActiveFileIndex(i)}
                    className={`w-full flex items-center gap-2 hover:bg-slate-900 p-1.5 px-3 rounded transition text-left ${activeFileIndex === i ? 'text-emerald-400 bg-slate-900 font-medium' : 'text-slate-400'}`}
                  >
                    <span className="text-sm">{file.icon}</span>
                    <span className="truncate">{file.name}</span>
                  </button>
                ))}
              </div>

              <div className="pt-2 text-slate-500 font-medium pl-4 text-[10px] uppercase">Integrations</div>
              <div className="pl-4 space-y-1">
                <span className="flex items-center gap-2 p-1 px-3 text-[11px] text-slate-500"><GitBranch className="w-3 h-3" /> git-branch</span>
                <span className="flex items-center gap-2 p-1 px-3 text-[11px] text-slate-500"><Terminal className="w-3 h-3" /> environment</span>
              </div>
            </div>
          </div>

          {/* Main Code Area */}
          <div className="flex-1 flex flex-col bg-slate-950 overflow-hidden">
            {/* Open tabs bar */}
            <div className="flex bg-slate-900 border-b border-slate-800 overflow-x-auto text-[11px] sm:text-xs select-none scrollbar-none">
              {files.map((file, i) => (
                <button
                  key={file.name + '-tab'}
                  onClick={() => setActiveFileIndex(i)}
                  className={`flex items-center space-x-2 py-2 px-4 border-r border-slate-800 shrink-0 transition ${
                    activeFileIndex === i 
                      ? 'bg-slate-950 text-emerald-400 border-t-2 border-t-emerald-500 font-medium' 
                      : 'bg-slate-900 text-slate-400 hover:bg-slate-850 hover:text-slate-200'
                  }`}
                >
                  <span>{file.icon}</span>
                  <span>{file.name}</span>
                </button>
              ))}
            </div>

            {/* Code presentation */}
            <div className="flex-1 overflow-auto p-4 font-mono text-[11px] sm:text-xs leading-relaxed text-slate-300">
              <pre className="overflow-x-auto">
                <code>
                  {currentFile.content.split('\n').map((line, idx) => (
                    <div key={idx} className="flex hover:bg-slate-900/50 -mx-4 px-4 transition">
                      <span className="w-8 select-none text-slate-600 text-right pr-4 text-[10px] leading-6">{idx + 1}</span>
                      <span className="leading-6 whitespace-pre">
                        {line.split(/([{}()=[\]<>.,:;'"!@#$%^&*-]|\bconst\b|\bimport\b|\bfrom\b|\bexport\b|\bclass\b|\breadonly\b|\bgetExpertise\b|\bisReadyForHiring\b|\breturn\b|\bfunction\b|\bconst\b|\bsetTheme\b|\bdeveloper\b)/).map((part, pIdx) => {
                          let colorClass = 'text-slate-300';
                          if (['const', 'import', 'from', 'export', 'class', 'readonly', 'return', 'function'].includes(part)) {
                            colorClass = 'text-fuchsia-400 font-semibold';
                          } else if (['{', '}', '(', ')', '[', ']'].includes(part)) {
                            colorClass = 'text-amber-400';
                          } else if (['Adip Habibullah', 'Full Stack Web Developer', 'https://github.com/RegaCode4', 'Building scalable high-performance apps', 'Indonesia'].includes(part) || (part.startsWith("'") && part.endsWith("'")) || (part.startsWith('"') && part.endsWith('"'))) {
                            colorClass = 'text-emerald-300';
                          } else if (['theme', 'setTheme', 'developer', 'getExpertise', 'isReadyForHiring'].includes(part)) {
                            colorClass = 'text-sky-400';
                          } else if (part.match(/^\d+$/)) {
                            colorClass = 'text-amber-500';
                          } else if (part.startsWith('//')) {
                            colorClass = 'text-slate-500 italic';
                          }
                          return <span key={pIdx} className={colorClass}>{part}</span>;
                        })}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
            
            {/* Embedded simulation terminal pane */}
            <div className="border-t border-slate-800 h-28 bg-slate-950 flex flex-col font-mono text-[10px] text-slate-400 overflow-hidden shrink-0">
              <div className="bg-slate-900 px-3 py-1 flex items-center justify-between text-slate-400 text-[9px] select-none uppercase tracking-wider font-semibold border-b border-slate-850">
                <span className="flex items-center gap-1"><Terminal className="w-3 h-3 text-emerald-400" /> Terminal Logs</span>
                <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" /> Active: 3000</span>
              </div>
              <div className="flex-1 p-2 overflow-y-auto space-y-1">
                {terminalLogs.map((log, idx) => (
                  <div key={idx} className={`${log.startsWith('$') ? 'text-emerald-400' : log.startsWith('✔') || log.startsWith('🚀') ? 'text-teal-400' : 'text-slate-400'}`}>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glossy pedestal base under the laptop resembling mockup design */}
      <div className="h-4 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 max-w-[95%] mx-auto rounded-b-xl border-x border-b border-slate-800 shadow-xl opacity-90"></div>
      <div className="h-1 bg-emerald-500/20 max-w-[85%] mx-auto rounded-b blur-sm"></div>
    </div>
  );
}
