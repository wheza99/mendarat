import React, { useState, useEffect } from 'react';

export default function QuantumCells() {
  const [activeCellType, setActiveCellType] = useState(0);
  const [cellCount, setCellCount] = useState(0);

  const cellTypes = [
    {
      id: 1,
      name: "Quantum Neurons",
      type: "Neural Enhancement",
      count: 847392,
      efficiency: 98,
      quantumState: "Superposition",
      features: ["Quantum Memory", "Entangled Synapses", "Coherent Processing"],
      color: "cyan",
      description: "Enhanced neurons with quantum coherence enabling parallel processing of thoughts"
    },
    {
      id: 2,
      name: "Regenerative Stem Cells",
      type: "Cellular Repair",
      count: 234567,
      efficiency: 94,
      quantumState: "Entangled",
      features: ["Instant Repair", "Quantum Healing", "Cellular Memory"],
      color: "emerald",
      description: "Quantum-enhanced stem cells with accelerated regeneration capabilities"
    },
    {
      id: 3,
      name: "Photosynthetic Organoids",
      type: "Energy Production",
      count: 1023847,
      efficiency: 87,
      quantumState: "Coherent",
      features: ["Light Harvesting", "Quantum Efficiency", "Energy Storage"],
      color: "green",
      description: "Artificially enhanced organoids that maximize photosynthetic efficiency"
    },
    {
      id: 4,
      name: "Quantum T-Cells",
      type: "Immune Defense",
      count: 567890,
      efficiency: 96,
      quantumState: "Tunneling",
      features: ["Instant Recognition", "Quantum Targeting", "Memory Encoding"],
      color: "blue",
      description: "Immune cells with quantum sensors for enhanced pathogen detection"
    },
    {
      id: 5,
      name: "Synthetic Myocytes",
      type: "Muscular Enhancement",
      count: 398472,
      efficiency: 92,
      quantumState: "Oscillating",
      features: ["Enhanced Strength", "Quantum Coordination", "Fatigue Resistance"],
      color: "purple",
      description: "Muscle cells with quantum-enhanced contractile proteins"
    },
    {
      id: 6,
      name: "Quantum Hepatocytes",
      type: "Metabolic Processing",
      count: 756231,
      efficiency: 89,
      quantumState: "Entangled",
      features: ["Detoxification", "Quantum Catalysis", "Metabolic Boosting"],
      color: "teal",
      description: "Liver cells with quantum enzymes for superior metabolic function"
    }
  ];

  // Auto-cycle through cell types
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCellType((prev) => (prev + 1) % cellTypes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cellTypes.length]);

  // Animate cell count
  useEffect(() => {
    const targetCount = cellTypes[activeCellType].count;
    let current = 0;
    const increment = targetCount / 100;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        current = targetCount;
        clearInterval(timer);
      }
      setCellCount(Math.floor(current));
    }, 20);

    return () => clearInterval(timer);
  }, [activeCellType, cellTypes]);

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      cyan: { 
        bg: 'from-cyan-900/50 to-cyan-950/30', 
        border: 'border-cyan-500/30', 
        text: 'text-cyan-400',
        accent: 'text-cyan-300',
        button: 'from-cyan-500 to-cyan-600'
      },
      emerald: { 
        bg: 'from-emerald-900/50 to-emerald-950/30', 
        border: 'border-emerald-500/30', 
        text: 'text-emerald-400',
        accent: 'text-emerald-300',
        button: 'from-emerald-500 to-emerald-600'
      },
      green: { 
        bg: 'from-green-900/50 to-green-950/30', 
        border: 'border-green-500/30', 
        text: 'text-green-400',
        accent: 'text-green-300',
        button: 'from-green-500 to-green-600'
      },
      blue: { 
        bg: 'from-blue-900/50 to-blue-950/30', 
        border: 'border-blue-500/30', 
        text: 'text-blue-400',
        accent: 'text-blue-300',
        button: 'from-blue-500 to-blue-600'
      },
      purple: { 
        bg: 'from-purple-900/50 to-purple-950/30', 
        border: 'border-purple-500/30', 
        text: 'text-purple-400',
        accent: 'text-purple-300',
        button: 'from-purple-500 to-purple-600'
      },
      teal: { 
        bg: 'from-teal-900/50 to-teal-950/30', 
        border: 'border-teal-500/30', 
        text: 'text-teal-400',
        accent: 'text-teal-300',
        button: 'from-teal-500 to-teal-600'
      }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cellular Network */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Network connections */}
            {Array.from({ length: 20 }, (_, i) => (
              <g key={i}>
                <line
                  x1={Math.random() * 1200}
                  y1={Math.random() * 800}
                  x2={Math.random() * 1200}
                  y2={Math.random() * 800}
                  stroke="#10b981"
                  strokeWidth="1"
                  className="animate-bio-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
                <circle
                  cx={Math.random() * 1200}
                  cy={Math.random() * 800}
                  r="3"
                  fill="#14b8a6"
                  className="animate-bio-float"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Floating Organelles */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-br from-emerald-400/60 to-teal-500/60 rounded-full animate-bio-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bio-pulse" />
            <span className="text-emerald-300 font-medium">Cellular Engineering</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Quantum Enhanced
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Living Cells
            </span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Revolutionary biotechnology that integrates quantum mechanics into living cells, creating enhanced 
            biological systems with unprecedented capabilities and efficiency.
          </p>
        </div>

        {/* Main Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Active Cell Display */}
          <div className={`bg-gradient-to-br ${getColorClasses(cellTypes[activeCellType].color).bg} backdrop-blur-sm border ${getColorClasses(cellTypes[activeCellType].color).border} rounded-3xl p-8`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${getColorClasses(cellTypes[activeCellType].color).text}`}>
                {cellTypes[activeCellType].name}
              </h3>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 bg-gradient-to-br ${getColorClasses(cellTypes[activeCellType].color).button} rounded-full animate-bio-pulse`} />
                <span className={`text-sm ${getColorClasses(cellTypes[activeCellType].color).accent}`}>
                  {cellTypes[activeCellType].quantumState}
                </span>
              </div>
            </div>

            {/* Cell Visualization */}
            <div className="flex items-center justify-center h-48 mb-6">
              <div className="relative">
                {/* Cell membrane */}
                <div className="w-32 h-32 border-4 border-dashed border-emerald-400/50 rounded-full animate-bio-pulse" />
                
                {/* Nucleus */}
                <div className="absolute inset-8 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full animate-bio-spin flex items-center justify-center">
                  <div className="text-xs font-bold text-white">DNA</div>
                </div>
                
                {/* Organelles */}
                {Array.from({ length: 6 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-bio-quantum"
                    style={{
                      left: `${50 + 25 * Math.cos((i * Math.PI * 2) / 6)}%`,
                      top: `${50 + 25 * Math.sin((i * Math.PI * 2) / 6)}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
                
                {/* Quantum field */}
                <div className="absolute -inset-4 w-40 h-40 border border-cyan-400/30 rounded-full animate-bio-spin opacity-60" />
                <div className="absolute -inset-6 w-44 h-44 border border-blue-400/20 rounded-full animate-bio-counter-spin opacity-40" />
              </div>
            </div>

            {/* Cell Info */}
            <div className="space-y-4">
              <div>
                <div className="text-sm text-slate-400 mb-1">Cell Count</div>
                <div className={`text-3xl font-bold ${getColorClasses(cellTypes[activeCellType].color).text} animate-bio-count`}>
                  {cellCount.toLocaleString()}
                </div>
              </div>
              
              <div>
                <div className="text-sm text-slate-400 mb-1">Efficiency</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-800 rounded-full h-2">
                    <div
                      className={`h-full bg-gradient-to-r ${getColorClasses(cellTypes[activeCellType].color).button} rounded-full transition-all duration-1000`}
                      style={{ width: `${cellTypes[activeCellType].efficiency}%` }}
                    />
                  </div>
                  <span className={`text-sm font-bold ${getColorClasses(cellTypes[activeCellType].color).text}`}>
                    {cellTypes[activeCellType].efficiency}%
                  </span>
                </div>
              </div>

              <div>
                <div className="text-sm text-slate-400 mb-2">Description</div>
                <p className="text-sm text-slate-300">
                  {cellTypes[activeCellType].description}
                </p>
              </div>
            </div>
          </div>

          {/* Features & Functions */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/50 backdrop-blur-sm border border-slate-500/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-slate-200 mb-4">Quantum Features</h4>
              <div className="space-y-3">
                {cellTypes[activeCellType].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-bio-pulse" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/50 backdrop-blur-sm border border-slate-500/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-slate-200 mb-4">Cell Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Type</div>
                  <div className="text-sm text-emerald-300 font-medium">{cellTypes[activeCellType].type}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Quantum State</div>
                  <div className="text-sm text-cyan-300 font-medium">{cellTypes[activeCellType].quantumState}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Viability</div>
                  <div className="text-sm text-green-300 font-medium">99.8%</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Growth Rate</div>
                  <div className="text-sm text-blue-300 font-medium">247%</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/50 backdrop-blur-sm border border-slate-500/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-slate-200 mb-4">Quantum Controls</h4>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Enhance Quantum Coherence
                </button>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Initiate Cell Division
                </button>
                <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Monitor Quantum State
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cell Type Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cellTypes.map((cell, index) => {
            const colors = getColorClasses(cell.color);
            const isActive = index === activeCellType;
            
            return (
              <div
                key={cell.id}
                onClick={() => setActiveCellType(index)}
                className={`bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                  isActive ? 'scale-105 ring-2 ring-emerald-500/50' : 'hover:scale-102'
                } animate-bio-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`w-8 h-8 bg-gradient-to-br ${colors.button} rounded-full mx-auto mb-3 ${isActive ? 'animate-bio-pulse' : ''}`} />
                  <div className={`text-sm font-bold ${colors.text} mb-1`}>{cell.name}</div>
                  <div className="text-xs text-slate-400">{cell.type}</div>
                  <div className="text-xs text-slate-500 mt-1">{cell.count.toLocaleString()} cells</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 