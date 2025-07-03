'use client';

import { useState, useEffect } from 'react';

export default function AIResearch() {
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

    const element = document.getElementById('ai-research-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="ai-research-section" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={'text-center mb-20 transition-all duration-1000 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-400/30 rounded-full mb-8">
            <span className="text-xl">🧠</span>
            <span className="font-mono text-emerald-400 tracking-wider uppercase text-sm">AI Research Division</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-8">
            Artificial Intelligence
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Developing next-generation <span className="text-emerald-400">AI systems</span> that push the boundaries of 
            machine intelligence and <span className="text-green-400">cognitive computing</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Neural Architecture Search',
              description: 'Automated design of optimal neural network architectures using evolutionary algorithms.',
              icon: '🏗️',
              metrics: { accuracy: '97.8%', speed: '2.3x', efficiency: '45%' }
            },
            {
              title: 'Quantum-Enhanced ML',
              description: 'Hybrid quantum-classical machine learning algorithms for exponential speedup.',
              icon: '⚡',
              metrics: { speedup: '100x', accuracy: '99.2%', qubits: '256' }
            },
            {
              title: 'Autonomous Systems',
              description: 'Self-governing AI systems capable of independent decision-making and adaptation.',
              icon: '🤖',
              metrics: { autonomy: '94%', reliability: '99.9%', learning: '24/7' }
            }
          ].map((research, index) => (
            <div key={index} className="p-8 bg-gray-900/30 border border-gray-700/50 rounded-2xl hover:border-emerald-400/30 transition-all duration-300 quantum-glow">
              <div className="text-4xl mb-4 neural-flicker">{research.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{research.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{research.description}</p>
              
              <div className="space-y-3">
                {Object.entries(research.metrics).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm uppercase tracking-wide">{key}</span>
                    <span className="text-emerald-400 font-mono font-bold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 