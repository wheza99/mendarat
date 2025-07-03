'use client';

import { useState, useEffect } from 'react';

export default function NeuralNetwork() {
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

    const element = document.getElementById('neural-network-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="neural-network-section" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={'text-center mb-20 transition-all duration-1000 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-400/30 rounded-full mb-8">
            <span className="text-xl">🕸️</span>
            <span className="font-mono text-emerald-400 tracking-wider uppercase text-sm">Neural Networks</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-8">
            Deep Learning Architecture
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary <span className="text-emerald-400">neural architectures</span> that mimic biological intelligence for 
            unprecedented <span className="text-green-400">pattern recognition</span> and learning capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {[
              {
                name: 'Transformer XL-3B',
                type: 'Language Model',
                parameters: '3.2B',
                accuracy: '94.7%',
                description: 'Advanced transformer architecture for natural language understanding and generation.',
                status: 'Production'
              },
              {
                name: 'ConvNext Ultra',
                type: 'Computer Vision',
                parameters: '1.8B',
                accuracy: '98.3%',
                description: 'State-of-the-art convolutional neural network for image recognition and analysis.',
                status: 'Training'
              },
              {
                name: 'GraphNN Quantum',
                type: 'Graph Neural Network',
                parameters: '847M',
                accuracy: '91.2%',
                description: 'Quantum-enhanced graph neural networks for complex relationship modeling.',
                status: 'Research'
              }
            ].map((model, index) => (
              <div key={index} className="p-6 bg-gray-900/30 border border-gray-700/50 rounded-2xl hover:border-emerald-400/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{model.name}</h3>
                    <p className="text-emerald-400 text-sm font-mono">{model.type}</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-mono uppercase rounded-full">
                    {model.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{model.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-400 text-sm">Parameters</span>
                    <div className="text-emerald-400 font-mono font-bold">{model.parameters}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Accuracy</span>
                    <div className="text-emerald-400 font-mono font-bold">{model.accuracy}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="relative h-full bg-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Neural Network Visualization</h3>
              
              <div className="relative h-80 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  {/* Input Layer */}
                  {[...Array(4)].map((_, i) => (
                    <circle
                      key={`input-${i}`}
                      cx="50"
                      cy={60 + i * 60}
                      r="15"
                      fill="#10b981"
                      className="neural-flicker"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                  
                  {/* Hidden Layer 1 */}
                  {[...Array(6)].map((_, i) => (
                    <circle
                      key={`hidden1-${i}`}
                      cx="150"
                      cy={40 + i * 40}
                      r="12"
                      fill="#22c55e"
                      className="neural-flicker"
                      style={{ animationDelay: `${i * 0.1 + 0.5}s` }}
                    />
                  ))}
                  
                  {/* Hidden Layer 2 */}
                  {[...Array(6)].map((_, i) => (
                    <circle
                      key={`hidden2-${i}`}
                      cx="250"
                      cy={40 + i * 40}
                      r="12"
                      fill="#22c55e"
                      className="neural-flicker"
                      style={{ animationDelay: `${i * 0.1 + 1}s` }}
                    />
                  ))}
                  
                  {/* Output Layer */}
                  {[...Array(3)].map((_, i) => (
                    <circle
                      key={`output-${i}`}
                      cx="350"
                      cy={80 + i * 60}
                      r="15"
                      fill="#10b981"
                      className="neural-flicker"
                      style={{ animationDelay: `${i * 0.2 + 1.5}s` }}
                    />
                  ))}
                  
                  {/* Connections */}
                  {[...Array(4)].map((_, i) => 
                    [...Array(6)].map((_, j) => (
                      <line
                        key={`conn1-${i}-${j}`}
                        x1="65"
                        y1={60 + i * 60}
                        x2="135"
                        y2={40 + j * 40}
                        stroke="#10b981"
                        strokeWidth="1"
                        opacity="0.3"
                        className="circuit-trace"
                        style={{ animationDelay: `${(i + j) * 0.1}s` }}
                      />
                    ))
                  )}
                </svg>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-emerald-400 font-mono text-xl font-bold">2.3M</div>
                  <div className="text-gray-400 text-sm">Active Neurons</div>
                </div>
                <div>
                  <div className="text-emerald-400 font-mono text-xl font-bold">847k</div>
                  <div className="text-gray-400 text-sm">Synapses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 