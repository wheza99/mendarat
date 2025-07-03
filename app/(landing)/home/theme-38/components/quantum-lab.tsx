'use client';

import { useState, useEffect } from 'react';

export default function QuantumLab() {
  const [activeExperiment, setActiveExperiment] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const quantumExperiments = [
    {
      name: 'Quantum Supremacy',
      status: 'ACTIVE',
      qubits: 256,
      coherence: '98.7%',
      description: 'Demonstrating computational advantage over classical systems.',
      icon: '⚛️',
      progress: 87,
      color: 'from-emerald-400 to-green-500'
    },
    {
      name: 'Error Correction',
      status: 'TESTING',
      qubits: 128,
      coherence: '94.2%',
      description: 'Advanced quantum error correction protocols.',
      icon: '🔧',
      progress: 65,
      color: 'from-green-400 to-emerald-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('quantum-lab-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="quantum-lab-section" className="py-20 px-4 relative">
      {/* Section Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum field visualization */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-emerald-400/5 to-green-500/5 quantum-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-gradient-to-r from-green-400/5 to-emerald-500/5 quantum-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Quantum particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/40 rounded-full data-flow"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 8 + 's',
              animationDuration: (4 + Math.random() * 4) + 's'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={'text-center mb-20 transition-all duration-1000 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-400/30 rounded-full mb-8">
            <span className="text-xl">⚛️</span>
            <span className="font-mono text-emerald-400 tracking-wider uppercase text-sm">Quantum Research Lab</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-8">
            Quantum Experiments
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pushing the boundaries of <span className="text-emerald-400">quantum computing</span> through 
            cutting-edge experiments and <span className="text-green-400">breakthrough research</span>.
          </p>
        </div>

        {/* Quantum Lab Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Experiment Cards */}
          <div className="space-y-6">
            {quantumExperiments.map((experiment, index) => (
              <div
                key={index}
                className={'group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ' + (
                  activeExperiment === index
                    ? 'bg-gray-900/50 border-2 border-emerald-400/50 quantum-glow'
                    : 'bg-gray-900/20 border border-gray-700/50 hover:border-gray-600/50'
                )}
                onClick={() => setActiveExperiment(index)}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={'text-4xl ' + (activeExperiment === index ? 'neural-flicker' : '')}>
                        {experiment.icon}
                      </div>
                      <div>
                        <h3 className={'text-2xl font-bold transition-colors duration-300 ' + (
                          activeExperiment === index ? 'text-emerald-400' : 'text-white'
                        )}>
                          {experiment.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{experiment.qubits} Qubits • {experiment.coherence} Coherence</p>
                      </div>
                    </div>
                    
                    <div className={'px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ' + (
                      activeExperiment === index
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-gray-700/50 text-gray-400'
                    )}>
                      {experiment.status}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {experiment.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-emerald-400 font-mono">{experiment.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={'h-2 rounded-full bg-gradient-to-r ' + experiment.color}
                        style={{ width: `${experiment.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Selection indicator */}
                {activeExperiment === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-green-500 rounded-r" />
                )}
              </div>
            ))}
          </div>

          {/* Quantum Visualization Area */}
          <div className="relative">
            <div className="relative h-96 lg:h-full bg-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden">
              {/* Quantum state display */}
              <div className="absolute inset-4 border border-emerald-400/20 rounded-xl">
                <div className="absolute inset-2 border border-emerald-400/10 rounded-lg" />
              </div>
              
              {/* Quantum circuit visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={'relative w-64 h-64 rounded-full bg-gradient-to-br ' + quantumExperiments[activeExperiment].color + ' quantum-glow'}>
                  {/* Quantum state indicators */}
                  <div className="absolute inset-8 rounded-full bg-black/30" />
                  
                  {/* Qubit representations */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 bg-emerald-400 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-80px)`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                  
                  {/* Central quantum core */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-emerald-400 rounded-full neural-flicker" />
                  
                  {/* Data overlay */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-2xl mb-2">{quantumExperiments[activeExperiment].icon}</div>
                    <div className="font-mono text-emerald-400 text-sm">{quantumExperiments[activeExperiment].name}</div>
                  </div>
                </div>
              </div>
              
              {/* Quantum interference patterns */}
              <div className="absolute inset-0 quantum-field opacity-20" />
              
              {/* Corner UI elements */}
              <div className="absolute top-4 left-4 text-emerald-400/50 font-mono text-xs">
                QUANTUM_LAB_v3.1
              </div>
              <div className="absolute top-4 right-4 text-emerald-400/50 font-mono text-xs">
                [{String(activeExperiment + 1).padStart(2, '0')}/02]
              </div>
              <div className="absolute bottom-4 left-4 text-emerald-400/50 font-mono text-xs">
                STATUS: {quantumExperiments[activeExperiment].status}
              </div>
            </div>
          </div>
        </div>

        {/* Lab Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Active Experiments', value: '8', icon: '🧪' },
            { label: 'Quantum States', value: '2^128', icon: '🌊' },
            { label: 'Entangled Pairs', value: '512', icon: '🔗' },
            { label: 'Error Rate', value: '0.05%', icon: '📊' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-900/20 border border-gray-700/50 rounded-xl hover:border-emerald-400/30 transition-all duration-300">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-emerald-400 font-mono mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 