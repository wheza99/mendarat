import React, { useState, useEffect } from 'react';

export default function DNASequencer() {
  const [currentSequence, setCurrentSequence] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  const sequences = [
    {
      id: 1,
      name: "Human Genome Segment 247",
      sequence: "ATCGATCGATCGATCGATCG",
      length: "2,847 base pairs",
      completion: 87,
      type: "Protein Coding",
      organism: "Homo sapiens",
      function: "Neural Development",
      color: "emerald"
    },
    {
      id: 2,
      name: "Quantum Entangled DNA",
      sequence: "GCTAGCTAGCTAGCTAGCTA",
      length: "1,534 base pairs",
      completion: 94,
      type: "Quantum Modified",
      organism: "Synthetic",
      function: "Quantum Storage",
      color: "cyan"
    },
    {
      id: 3,
      name: "Regenerative Gene Cluster",
      sequence: "TTAAGCCGGAATTCCGGAAG",
      length: "3,692 base pairs",
      completion: 76,
      type: "Regulatory",
      organism: "Enhanced Human",
      function: "Tissue Repair",
      color: "teal"
    },
    {
      id: 4,
      name: "Extremophile Adaptation",
      sequence: "CGGAATTCCGGAATTCCGGA",
      length: "4,156 base pairs",
      completion: 68,
      type: "Environmental",
      organism: "Tardigrade",
      function: "Radiation Resistance",
      color: "blue"
    },
    {
      id: 5,
      name: "Longevity Enhancement",
      sequence: "AATTCCGGAATTCCGGAATT",
      length: "5,923 base pairs",
      completion: 92,
      type: "Therapeutic",
      organism: "Jellyfish",
      function: "Cellular Immortality",
      color: "indigo"
    },
    {
      id: 6,
      name: "Synthetic Chromosome",
      sequence: "CCGGAATTCCGGAATTCCGG",
      length: "12,847 base pairs",
      completion: 45,
      type: "Artificial",
      organism: "Lab Designed",
      function: "Data Storage",
      color: "purple"
    }
  ];

  // Auto-cycle through sequences
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSequence((prev) => (prev + 1) % sequences.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sequences.length]);

  // Toggle analysis state
  useEffect(() => {
    const analysisInterval = setInterval(() => {
      setIsAnalyzing(prev => !prev);
    }, 2000);

    return () => clearInterval(analysisInterval);
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      emerald: { bg: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500' },
      cyan: { bg: 'bg-cyan-500', text: 'text-cyan-400', border: 'border-cyan-500' },
      teal: { bg: 'bg-teal-500', text: 'text-teal-400', border: 'border-teal-500' },
      blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-400', border: 'border-indigo-500' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-400', border: 'border-purple-500' }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* DNA Helix Animation */}
        <div className="absolute top-1/4 right-10 opacity-20">
          <svg width="200" height="400" viewBox="0 0 200 400" fill="none" className="animate-bio-helix">
            <path d="M50 0 Q100 50 150 0 Q100 50 50 100 Q100 150 150 100 Q100 150 50 200 Q100 250 150 200 Q100 250 50 300 Q100 350 150 300 Q100 350 50 400" 
                  stroke="#10b981" strokeWidth="3" fill="none" />
            <path d="M150 0 Q100 50 50 0 Q100 50 150 100 Q100 150 50 100 Q100 150 150 200 Q100 250 50 200 Q100 250 150 300 Q100 350 50 300 Q100 350 150 400" 
                  stroke="#14b8a6" strokeWidth="3" fill="none" />
          </svg>
        </div>

        {/* Floating Nucleotides */}
        {['A', 'T', 'C', 'G'].map((nucleotide, index) => (
          <div
            key={nucleotide}
            className={`absolute text-2xl font-bold opacity-30 animate-bio-float`}
            style={{
              left: `${20 + (index * 20)}%`,
              top: `${30 + (index * 15)}%`,
              animationDelay: `${index * 0.5}s`,
              color: nucleotide === 'A' ? '#10b981' : nucleotide === 'T' ? '#14b8a6' : nucleotide === 'C' ? '#06b6d4' : '#0891b2'
            }}
          >
            {nucleotide}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
            <div className={`w-2 h-2 rounded-full ${isAnalyzing ? 'bg-cyan-400 animate-bio-pulse' : 'bg-slate-400'}`} />
            <span className="text-cyan-300 font-medium">
              {isAnalyzing ? 'Analyzing Sequences' : 'Analysis Complete'}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              DNA Quantum
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sequencer
            </span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Revolutionary DNA sequencing technology that operates at the quantum level, enabling unprecedented accuracy 
            and the ability to analyze quantum-entangled genetic modifications.
          </p>
        </div>

        {/* Main Sequencer Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Current Sequence Analysis */}
          <div className="bg-gradient-to-br from-slate-900/80 to-cyan-950/50 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-cyan-400">Active Analysis</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bio-pulse" />
                <span className="text-sm text-cyan-300">Live</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-2xl font-mono font-bold text-white mb-2 break-all tracking-wider">
                {sequences[currentSequence].sequence}
              </div>
              <div className="text-sm text-slate-400">
                Sequence: {sequences[currentSequence].name}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-400">Analysis Progress</span>
                <span className="text-sm font-bold text-cyan-400">{sequences[currentSequence].completion}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000 animate-bio-progress"
                  style={{ width: `${sequences[currentSequence].completion}%` }}
                />
              </div>
            </div>

            {/* Sequence Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-slate-400 mb-1">Length</div>
                <div className="text-sm text-cyan-300 font-medium">{sequences[currentSequence].length}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Type</div>
                <div className="text-sm text-cyan-300 font-medium">{sequences[currentSequence].type}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Organism</div>
                <div className="text-sm text-cyan-300 font-medium">{sequences[currentSequence].organism}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Function</div>
                <div className="text-sm text-cyan-300 font-medium">{sequences[currentSequence].function}</div>
              </div>
            </div>
          </div>

          {/* Quantum Analysis Visualization */}
          <div className="bg-gradient-to-br from-slate-900/80 to-indigo-950/50 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-indigo-400 mb-6">Quantum State Analysis</h3>
            
            {/* Central Quantum Visualization */}
            <div className="flex items-center justify-center mb-6 h-48">
              <div className="relative">
                {/* Outer rings */}
                <div className="absolute inset-0 w-32 h-32 border-2 border-indigo-400/30 rounded-full animate-bio-spin" />
                <div className="absolute inset-2 w-28 h-28 border-2 border-purple-400/40 rounded-full animate-bio-counter-spin" />
                <div className="absolute inset-4 w-24 h-24 border-2 border-pink-400/50 rounded-full animate-bio-spin" />
                
                {/* Center core */}
                <div className="absolute inset-8 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full animate-bio-pulse flex items-center justify-center">
                  <div className="text-xs font-bold text-white">DNA</div>
                </div>
                
                {/* Quantum particles */}
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-bio-quantum"
                    style={{
                      left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 8)}%`,
                      top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 8)}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Quantum Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl">
                <div className="text-xs text-slate-400 mb-1">Entanglement</div>
                <div className="text-lg font-bold text-indigo-400">94.7%</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl">
                <div className="text-xs text-slate-400 mb-1">Coherence</div>
                <div className="text-lg font-bold text-purple-400">98.2%</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl">
                <div className="text-xs text-slate-400 mb-1">Superposition</div>
                <div className="text-lg font-bold text-pink-400">87.5%</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl">
                <div className="text-xs text-slate-400 mb-1">Fidelity</div>
                <div className="text-lg font-bold text-cyan-400">99.9%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sequence Queue */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sequences.map((seq, index) => {
            const colors = getColorClasses(seq.color);
            const isActive = index === currentSequence;
            
            return (
              <div
                key={seq.id}
                className={`bg-gradient-to-br from-slate-900/80 to-slate-950/50 backdrop-blur-sm border ${colors.border}/30 rounded-2xl p-6 transition-all duration-500 ${
                  isActive ? 'scale-105 ring-2 ring-cyan-500/50' : 'hover:scale-102'
                } animate-bio-fade-in cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className={`font-bold ${colors.text}`}>{seq.name}</h4>
                  <div className={`w-3 h-3 ${colors.bg} rounded-full ${isActive ? 'animate-bio-pulse' : ''}`} />
                </div>

                <div className="text-xs font-mono text-slate-400 mb-3 break-all">
                  {seq.sequence.substring(0, 15)}...
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Length:</span>
                    <span className="text-slate-300">{seq.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Type:</span>
                    <span className="text-slate-300">{seq.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Progress:</span>
                    <span className={colors.text}>{seq.completion}%</span>
                  </div>
                </div>

                <div className="mt-4 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`h-full ${colors.bg} transition-all duration-1000`}
                    style={{ width: `${seq.completion}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 