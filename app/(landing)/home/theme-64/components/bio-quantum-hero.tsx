import React, { useState, useEffect } from 'react';

export default function BioQuantumHero() {
  const [activeStats, setActiveStats] = useState({
    molecules: 0,
    dnaSequences: 0,
    quantumStates: 0,
    cellCultures: 0
  });

  // Animate statistics on mount
  useEffect(() => {
    const animateStats = () => {
      const targets = {
        molecules: 2847392,
        dnaSequences: 156892,
        quantumStates: 42,
        cellCultures: 98743
      };

      Object.keys(targets).forEach((key) => {
        let start = 0;
        const end = targets[key as keyof typeof targets];
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setActiveStats(prev => ({
            ...prev,
            [key]: Math.floor(start)
          }));
        }, 16);
      });
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Hero Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Molecular Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="molecularGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#10b981" className="animate-bio-pulse" />
                <circle cx="0" cy="0" r="0.5" fill="#14b8a6" />
                <circle cx="20" cy="0" r="0.5" fill="#0d9488" />
                <circle cx="0" cy="20" r="0.5" fill="#06b6d4" />
                <circle cx="20" cy="20" r="0.5" fill="#0891b2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#molecularGrid)" />
          </svg>
        </div>

        {/* Quantum Energy Field */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-emerald-500/20 via-teal-500/10 to-transparent rounded-full animate-bio-quantum-field" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-500/20 via-blue-500/10 to-transparent rounded-full animate-bio-quantum-field-reverse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-8 animate-bio-glow">
          <div className="w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-bio-pulse" />
          <span className="text-emerald-300 font-medium">Quantum Biology Lab</span>
          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bio-blink" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-bio-text">
            Life at the
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-bio-text-reverse">
            Quantum Level
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Explore the fascinating intersection of molecular biology and quantum physics, where DNA sequences 
          meet quantum entanglement and cellular processes merge with quantum mechanics to unlock the mysteries of life itself.
        </p>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-slate-900/80 to-emerald-950/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 animate-bio-fade-in">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2 animate-bio-count">
              {activeStats.molecules.toLocaleString()}
            </div>
            <div className="text-emerald-300 text-sm font-medium">Molecules Analyzed</div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900/80 to-teal-950/50 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 animate-bio-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2 animate-bio-count">
              {activeStats.dnaSequences.toLocaleString()}
            </div>
            <div className="text-teal-300 text-sm font-medium">DNA Sequences</div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900/80 to-cyan-950/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 animate-bio-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 animate-bio-count">
              {activeStats.quantumStates}
            </div>
            <div className="text-cyan-300 text-sm font-medium">Quantum States</div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 animate-bio-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2 animate-bio-count">
              {activeStats.cellCultures.toLocaleString()}
            </div>
            <div className="text-blue-300 text-sm font-medium">Cell Cultures</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 animate-bio-button">
            <span className="flex items-center gap-2">
              Explore Quantum Lab
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          
          <button className="group bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-semibold px-8 py-4 rounded-2xl border border-slate-500/30 hover:border-slate-400/50 transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:animate-bio-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 010 6h-1m4-6h1a3 3 0 010 6h-1m-5-6v6m8-6v6" />
              </svg>
              View Research
            </span>
          </button>
        </div>
      </div>

      {/* Floating Bio Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* DNA Strands */}
        <div className="absolute top-1/4 left-10 animate-bio-drift opacity-30">
          <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
            <path d="M10 0 Q30 20 50 0 Q30 20 10 40 Q30 60 50 40 Q30 60 10 80 Q30 100 50 80 Q30 100 10 120" 
                  stroke="#10b981" strokeWidth="2" fill="none" />
            <circle cx="10" cy="10" r="3" fill="#14b8a6" />
            <circle cx="50" cy="10" r="3" fill="#0d9488" />
            <circle cx="10" cy="50" r="3" fill="#06b6d4" />
            <circle cx="50" cy="50" r="3" fill="#0891b2" />
            <circle cx="10" cy="90" r="3" fill="#0284c7" />
            <circle cx="50" cy="90" r="3" fill="#0369a1" />
          </svg>
        </div>

        {/* Molecular Structures */}
        <div className="absolute top-1/3 right-10 animate-bio-float opacity-40">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="8" fill="#10b981" className="animate-bio-pulse" />
            <circle cx="20" cy="20" r="6" fill="#14b8a6" />
            <circle cx="60" cy="20" r="6" fill="#0d9488" />
            <circle cx="20" cy="60" r="6" fill="#06b6d4" />
            <circle cx="60" cy="60" r="6" fill="#0891b2" />
            <line x1="40" y1="40" x2="20" y2="20" stroke="#10b981" strokeWidth="2" />
            <line x1="40" y1="40" x2="60" y2="20" stroke="#14b8a6" strokeWidth="2" />
            <line x1="40" y1="40" x2="20" y2="60" stroke="#0d9488" strokeWidth="2" />
            <line x1="40" y1="40" x2="60" y2="60" stroke="#06b6d4" strokeWidth="2" />
          </svg>
        </div>

        {/* Quantum Symbols */}
        <div className="absolute bottom-1/4 left-1/4 animate-bio-quantum opacity-50">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="20" stroke="#06b6d4" strokeWidth="2" fill="none" className="animate-bio-spin" />
            <circle cx="30" cy="30" r="12" stroke="#0891b2" strokeWidth="2" fill="none" className="animate-bio-counter-spin" />
            <circle cx="30" cy="30" r="4" fill="#0284c7" className="animate-bio-pulse" />
          </svg>
        </div>
      </div>
    </section>
  );
} 