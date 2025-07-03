'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    { label: 'Quantum Qubits', value: '1,024', unit: 'Q-bits', icon: '🔬' },
    { label: 'AI Models Trained', value: '47,829', unit: 'Models', icon: '🧠' },
    { label: 'Neural Pathways', value: '2.3M', unit: 'Connections', icon: '🔗' },
    { label: 'Processing Speed', value: '15.7', unit: 'PetaFLOPS', icon: '⚡' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* Circuit board overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10L90 10L90 90L10 90Z" fill="none" stroke="#10b981" strokeWidth="0.5" className="circuit-trace"/>
              <circle cx="10" cy="10" r="2" fill="#10b981"/>
              <circle cx="90" cy="10" r="2" fill="#10b981"/>
              <circle cx="90" cy="90" r="2" fill="#10b981"/>
              <circle cx="10" cy="90" r="2" fill="#10b981"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Badge */}
        <div className={'transition-all duration-1000 delay-300 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-400/30 rounded-full mb-8 quantum-glow">
            <span className="text-xl neural-flicker">🧬</span>
            <span className="font-mono text-emerald-400 tracking-wider uppercase text-sm">Quantum AI Research</span>
          </div>
        </div>

        {/* Main Title */}
        <div className={'transition-all duration-1000 delay-500 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="text-white">Neural</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 neural-flicker"> Quantum</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Computing</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className={'transition-all duration-1000 delay-700 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Advancing the frontier of <span className="text-emerald-400">artificial intelligence</span> and 
            <span className="text-green-300"> quantum computing</span> through revolutionary research and development.
          </p>
        </div>

        {/* Dynamic Metrics Display */}
        <div className={'transition-all duration-1000 delay-900 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={'relative p-6 rounded-xl transition-all duration-500 ' + (
                  activeMetric === index
                    ? 'bg-emerald-500/20 border-2 border-emerald-400/50 quantum-glow scale-105'
                    : 'bg-gray-900/30 border border-gray-700/50 hover:border-emerald-400/30'
                )}
              >
                <div className="text-3xl mb-3">{metric.icon}</div>
                <div className={'text-2xl font-bold font-mono mb-2 transition-colors duration-300 ' + (
                  activeMetric === index ? 'text-emerald-400' : 'text-white'
                )}>
                  {metric.value}
                </div>
                <div className={'text-sm transition-colors duration-300 ' + (
                  activeMetric === index ? 'text-emerald-300' : 'text-gray-400'
                )}>
                  {metric.unit}
                </div>
                <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                
                {/* Active indicator */}
                {activeMetric === index && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-300 rounded-t-xl" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={'transition-all duration-1000 delay-1100 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 quantum-glow">
              Access Research Lab
            </button>
            <button className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-semibold rounded-lg transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={'absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ' + (isVisible ? 'opacity-100' : 'opacity-0')}>
          <div className="flex flex-col items-center text-emerald-400">
            <span className="text-sm font-mono mb-2">SCROLL TO EXPLORE</span>
            <div className="w-6 h-10 border-2 border-emerald-400 rounded-full relative">
              <div className="w-1 h-3 bg-emerald-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 data-flow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 