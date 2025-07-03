'use client';

import { useState, useEffect } from 'react';

export default function Computing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('computing-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="computing-section" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={'text-center mb-20 transition-all duration-1000 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-400/30 rounded-full mb-8">
            <span className="text-xl">⚡</span>
            <span className="font-mono text-emerald-400 tracking-wider uppercase text-sm">High Performance Computing</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-8">
            Quantum Computing
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Harnessing the power of <span className="text-emerald-400">quantum mechanics</span> to solve 
            computational problems beyond the reach of <span className="text-green-400">classical computers</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Processing Power',
              value: '15.7 PetaFLOPS',
              description: 'Quantum-accelerated computational throughput',
              icon: '🚀',
              color: 'from-emerald-400 to-green-500'
            },
            {
              title: 'Quantum Volume',
              value: '2^20',
              description: 'Measure of quantum computer capability',
              icon: '📊',
              color: 'from-green-400 to-emerald-500'
            },
            {
              title: 'Qubit Coherence',
              value: '150 μs',
              description: 'Quantum state preservation time',
              icon: '⏱️',
              color: 'from-teal-400 to-emerald-500'
            },
            {
              title: 'Gate Fidelity',
              value: '99.9%',
              description: 'Quantum operation accuracy',
              icon: '🎯',
              color: 'from-emerald-500 to-green-400'
            }
          ].map((metric, index) => (
            <div key={index} className="text-center p-8 bg-gray-900/30 border border-gray-700/50 rounded-2xl hover:border-emerald-400/30 transition-all duration-300 quantum-glow">
              <div className="text-4xl mb-4 neural-flicker">{metric.icon}</div>
              <div className={'text-3xl font-bold font-mono mb-2 bg-gradient-to-r bg-clip-text text-transparent ' + metric.color}>
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
              <p className="text-gray-400 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Quantum Algorithms</h3>
            {[
              {
                name: "Shor's Algorithm",
                purpose: 'Integer Factorization',
                speedup: 'Exponential',
                applications: ['Cryptography', 'Security', 'RSA Breaking']
              },
              {
                name: "Grover's Algorithm",
                purpose: 'Database Search',
                speedup: 'Quadratic',
                applications: ['Search Optimization', 'Data Mining', 'Machine Learning']
              },
              {
                name: 'VQE Algorithm',
                purpose: 'Molecular Simulation',
                speedup: 'Exponential',
                applications: ['Drug Discovery', 'Material Science', 'Chemistry']
              }
            ].map((algorithm, index) => (
              <div key={index} className="p-6 bg-gray-900/30 border border-gray-700/50 rounded-xl hover:border-emerald-400/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-emerald-400">{algorithm.name}</h4>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-mono rounded-full">
                    {algorithm.speedup}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{algorithm.purpose}</p>
                <div className="flex flex-wrap gap-2">
                  {algorithm.applications.map((app, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="relative h-full bg-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Quantum Circuit</h3>
              
              <div className="relative h-80 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  {/* Quantum wires */}
                  {[...Array(4)].map((_, i) => (
                    <line
                      key={`wire-${i}`}
                      x1="50"
                      y1={50 + i * 35}
                      x2="350"
                      y2={50 + i * 35}
                      stroke="#10b981"
                      strokeWidth="2"
                      className="circuit-trace"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                  
                  {/* Quantum gates */}
                  {[...Array(3)].map((_, col) => 
                    [...Array(4)].map((_, row) => (
                      <rect
                        key={`gate-${col}-${row}`}
                        x={120 + col * 80 - 15}
                        y={50 + row * 35 - 10}
                        width="30"
                        height="20"
                        fill="#22c55e"
                        stroke="#10b981"
                        strokeWidth="2"
                        rx="5"
                        className="neural-flicker"
                        style={{ animationDelay: `${(col + row) * 0.2}s` }}
                      />
                    ))
                  )}
                  
                  {/* Entanglement connections */}
                  <path
                    d="M 120 65 Q 150 85 180 65"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="circuit-trace"
                    style={{ animationDelay: '1s' }}
                  />
                  
                  <path
                    d="M 200 100 Q 230 120 260 100"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="circuit-trace"
                    style={{ animationDelay: '1.5s' }}
                  />
                </svg>
              </div>
              
              <div className="mt-8 text-center">
                <div className="text-emerald-400 font-mono text-lg font-bold">Quantum Circuit Depth: 12</div>
                <div className="text-gray-400 text-sm mt-2">4 Qubits • 8 Gates • 2 Entanglements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 