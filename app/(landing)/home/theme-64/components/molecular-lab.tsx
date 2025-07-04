import React from 'react';

export default function MolecularLab() {
  const labStations = [
    {
      id: 1,
      name: "DNA Synthesizer",
      type: "Genetic Engineering",
      status: "Active",
      efficiency: 94,
      processes: "247 sequences",
      color: "emerald",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 2,
      name: "Protein Folder",
      type: "Structural Biology",
      status: "Running",
      efficiency: 87,
      processes: "156 proteins",
      color: "teal",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      id: 3,
      name: "Quantum Microscope",
      type: "Quantum Imaging",
      status: "Scanning",
      efficiency: 76,
      processes: "42 quantum states",
      color: "cyan",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      )
    },
    {
      id: 4,
      name: "Cell Cultivator",
      type: "Tissue Engineering",
      status: "Growing",
      efficiency: 99,
      processes: "834 cell lines",
      color: "blue",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 5,
      name: "Enzyme Reactor",
      type: "Biochemical Synthesis",
      status: "Catalyzing",
      efficiency: 82,
      processes: "391 reactions",
      color: "indigo",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 6,
      name: "Gene Sequencer",
      type: "Genomic Analysis",
      status: "Processing",
      efficiency: 91,
      processes: "128 genomes",
      color: "purple",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      emerald: {
        bg: 'from-emerald-900/50 to-emerald-950/30',
        border: 'border-emerald-500/30',
        text: 'text-emerald-400',
        accent: 'text-emerald-300',
        progress: 'from-emerald-500 to-emerald-600',
        icon: 'text-emerald-400'
      },
      teal: {
        bg: 'from-teal-900/50 to-teal-950/30',
        border: 'border-teal-500/30',
        text: 'text-teal-400',
        accent: 'text-teal-300',
        progress: 'from-teal-500 to-teal-600',
        icon: 'text-teal-400'
      },
      cyan: {
        bg: 'from-cyan-900/50 to-cyan-950/30',
        border: 'border-cyan-500/30',
        text: 'text-cyan-400',
        accent: 'text-cyan-300',
        progress: 'from-cyan-500 to-cyan-600',
        icon: 'text-cyan-400'
      },
      blue: {
        bg: 'from-blue-900/50 to-blue-950/30',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        accent: 'text-blue-300',
        progress: 'from-blue-500 to-blue-600',
        icon: 'text-blue-400'
      },
      indigo: {
        bg: 'from-indigo-900/50 to-indigo-950/30',
        border: 'border-indigo-500/30',
        text: 'text-indigo-400',
        accent: 'text-indigo-300',
        progress: 'from-indigo-500 to-indigo-600',
        icon: 'text-indigo-400'
      },
      purple: {
        bg: 'from-purple-900/50 to-purple-950/30',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        accent: 'text-purple-300',
        progress: 'from-purple-500 to-purple-600',
        icon: 'text-purple-400'
      }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-radial from-emerald-500/10 to-transparent rounded-full animate-bio-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-radial from-teal-500/10 to-transparent rounded-full animate-bio-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bio-blink" />
            <span className="text-emerald-300 font-medium">Laboratory Systems</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Advanced Molecular
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Research Laboratory
            </span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Our state-of-the-art laboratory features cutting-edge equipment that bridges the gap between molecular biology 
            and quantum physics, enabling breakthrough discoveries in biotechnology.
          </p>
        </div>

        {/* Lab Stations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labStations.map((station, index) => {
            const colors = getColorClasses(station.color);
            return (
              <div
                key={station.id}
                className={`group bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl p-8 hover:scale-105 transition-all duration-500 animate-bio-fade-in cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Station Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
                    {station.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${colors.accent} mb-1`}>
                      {station.type}
                    </div>
                    <div className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${colors.progress} rounded-full text-xs font-medium text-white`}>
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-bio-pulse" />
                      {station.status}
                    </div>
                  </div>
                </div>

                {/* Station Info */}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold ${colors.text} mb-2 group-hover:${colors.text.replace('400', '300')} transition-colors`}>
                    {station.name}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Currently processing {station.processes}
                  </p>
                </div>

                {/* Efficiency Meter */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-400">Efficiency</span>
                    <span className={`text-sm font-bold ${colors.text}`}>{station.efficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${colors.progress} transition-all duration-1000 animate-bio-progress`}
                      style={{ width: `${station.efficiency}%` }}
                    />
                  </div>
                </div>

                {/* Performance Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.progress} animate-bio-pulse`} />
                    <span className="text-xs text-slate-400">Real-time monitoring</span>
                  </div>
                  <button className={`text-xs ${colors.text} hover:${colors.text.replace('400', '300')} transition-colors group-hover:underline`}>
                    View Details →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lab Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-slate-900/50 to-emerald-950/30 backdrop-blur-sm border border-emerald-500/20 rounded-2xl">
            <div className="text-2xl font-bold text-emerald-400 mb-2 animate-bio-count">6</div>
            <div className="text-sm text-emerald-300">Active Stations</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-slate-900/50 to-teal-950/30 backdrop-blur-sm border border-teal-500/20 rounded-2xl">
            <div className="text-2xl font-bold text-teal-400 mb-2 animate-bio-count">89%</div>
            <div className="text-sm text-teal-300">Average Efficiency</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-slate-900/50 to-cyan-950/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl">
            <div className="text-2xl font-bold text-cyan-400 mb-2 animate-bio-count">24/7</div>
            <div className="text-sm text-cyan-300">Operation Time</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-slate-900/50 to-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl">
            <div className="text-2xl font-bold text-blue-400 mb-2 animate-bio-count">∞</div>
            <div className="text-sm text-blue-300">Research Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
} 