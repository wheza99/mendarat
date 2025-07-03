'use client';

import { useState } from 'react';

export default function EvolutionLab() {
  const [activeGeneration, setActiveGeneration] = useState(0);

  const evolutionStages = [
    {
      generation: 1,
      name: "PRIMORDIAL CELLS",
      description: "Basic organic compounds forming the foundation of life",
      traits: ["Self-Replication", "Energy Absorption", "Basic Adaptation"],
      complexity: 25,
      efficiency: 45
    },
    {
      generation: 5,
      name: "NEURAL EMERGENCE",
      description: "Development of primitive neural networks and awareness",
      traits: ["Signal Processing", "Memory Formation", "Pattern Recognition"],
      complexity: 60,
      efficiency: 72
    },
    {
      generation: 12,
      name: "SYMBIOTIC FUSION",
      description: "Integration with artificial intelligence systems",
      traits: ["AI Symbiosis", "Enhanced Learning", "Collective Intelligence"],
      complexity: 85,
      efficiency: 91
    },
    {
      generation: 25,
      name: "TRANSCENDENT BEING",
      description: "Evolution beyond biological limitations",
      traits: ["Digital Consciousness", "Reality Manipulation", "Quantum Awareness"],
      complexity: 100,
      efficiency: 99
    }
  ];

  const experiments = [
    {
      id: "EXP-001",
      name: "Cellular Regeneration",
      status: "ACTIVE",
      progress: 87,
      specimens: 2847,
      mutations: 156
    },
    {
      id: "EXP-002", 
      name: "Neural Enhancement",
      status: "EVOLVING",
      progress: 94,
      specimens: 1205,
      mutations: 89
    },
    {
      id: "EXP-003",
      name: "Bio-AI Integration", 
      status: "BREAKTHROUGH",
      progress: 78,
      specimens: 634,
      mutations: 203
    }
  ];

  return (
    <section className="relative py-24 z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bio-glow">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
              EVOLUTION LAB
            </span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Accelerated evolution through 
            <span className="text-teal-300 font-semibold"> controlled mutations </span>
            and genetic optimization algorithms.
          </p>
        </div>

        {/* Evolution Timeline */}
        <div className="bio-card p-8 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-emerald-300 mb-8 text-center bio-glow">
            EVOLUTIONARY TIMELINE
          </h3>
          
          {/* Generation Selector */}
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {evolutionStages.map((stage, index) => (
                <button
                  key={index}
                  onClick={() => setActiveGeneration(index)}
                  className={`p-4 organic-border font-bold transition-all duration-300 ${
                    activeGeneration === index
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white organic-pulse'
                      : 'bg-emerald-900/20 text-emerald-300 hover:bg-emerald-800/30'
                  }`}
                >
                  GEN {stage.generation}
                </button>
              ))}
            </div>
          </div>

          {/* Active Generation Display */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-emerald-300 mb-3">
                {evolutionStages[activeGeneration].name}
              </h4>
              <p className="text-emerald-100 leading-relaxed mb-6">
                {evolutionStages[activeGeneration].description}
              </p>
              
              {/* Traits */}
              <div className="space-y-2 mb-6">
                {evolutionStages[activeGeneration].traits.map((trait, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-emerald-900/20 organic-border">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 organic-pulse" />
                    <span className="text-emerald-200">{trait}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-900/20 organic-border text-center">
                  <div className="text-2xl font-bold text-emerald-300 mb-1">
                    {evolutionStages[activeGeneration].complexity}%
                  </div>
                  <div className="text-sm text-teal-400">COMPLEXITY</div>
                </div>
                <div className="p-4 bg-emerald-900/20 organic-border text-center">
                  <div className="text-2xl font-bold text-emerald-300 mb-1">
                    {evolutionStages[activeGeneration].efficiency}%
                  </div>
                  <div className="text-sm text-teal-400">EFFICIENCY</div>
                </div>
              </div>
            </div>

            {/* Evolution Visualization */}
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-emerald-400 to-teal-400 cell-division" />
            </div>
          </div>
        </div>

        {/* Active Experiments */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiments.map((experiment, index) => (
            <div
              key={index}
              className="bio-card p-6 evolution-grow group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Experiment Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm text-teal-400 font-bold mb-1">{experiment.id}</div>
                  <h4 className="text-xl font-bold text-emerald-300">{experiment.name}</h4>
                </div>
                <div className={`px-3 py-1 organic-border text-xs font-bold ${
                  experiment.status === 'BREAKTHROUGH' ? 'text-yellow-400 bg-yellow-400/10' :
                  experiment.status === 'EVOLVING' ? 'text-purple-400 bg-purple-400/10' :
                  'text-emerald-400 bg-emerald-400/10'
                }`}>
                  {experiment.status}
                </div>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-emerald-200 text-sm">Progress</span>
                  <span className="text-teal-400 font-bold">{experiment.progress}%</span>
                </div>
                <div className="w-full h-3 bg-emerald-900 organic-border overflow-hidden">
                  <div
                    className="h-full symbiosis-flow transition-all duration-1000"
                    style={{ width: `${experiment.progress}%` }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-300">{experiment.specimens.toLocaleString()}</div>
                  <div className="text-xs text-teal-400">SPECIMENS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-300">{experiment.mutations}</div>
                  <div className="text-xs text-teal-400">MUTATIONS</div>
                </div>
              </div>

              {/* Monitor Button */}
              <button className="w-full py-3 bg-gradient-to-r from-emerald-600/50 to-teal-600/50 organic-border text-emerald-300 font-semibold transition-all duration-300 group-hover:from-emerald-500/70 group-hover:to-teal-500/70">
                MONITOR EVOLUTION →
              </button>

              {/* Live Indicator */}
              <div className="flex justify-center mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 organic-pulse" />
                  <span className="text-xs text-emerald-300">LIVE DATA</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 