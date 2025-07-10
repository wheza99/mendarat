import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🤖',
    title: 'AI Intelligence',
    description: 'Advanced artificial intelligence systems',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: '🧠',
    title: 'Neural Networks',
    description: 'Deep learning neural architectures',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: '⚡',
    title: 'Quantum Computing',
    description: 'Next-generation quantum processors',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '🔮',
    title: 'Predictive Analytics',
    description: 'Future-focused data insights',
    color: 'from-pink-500 to-cyan-500'
  }
];

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'AI Research Director',
    avatar: '👩‍🔬',
    text: 'Revolutionary AI technology that transforms how we approach complex problems.',
    rating: 5
  },
  {
    name: 'Alex Thompson',
    role: 'Tech Innovator',
    avatar: '👨‍💻',
    text: 'The future of computing is here, and it\'s more powerful than we imagined.',
    rating: 5
  },
  {
    name: 'Dr. Maria Rodriguez',
    role: 'Quantum Scientist',
    avatar: '👩‍🔬',
    text: 'Breakthrough technology that pushes the boundaries of what\'s possible.',
    rating: 5
  }
];

const stats = [
  { value: '99.9%', label: 'Accuracy' },
  { value: '10x', label: 'Faster' },
  { value: '∞', label: 'Possibilities' },
  { value: '24/7', label: 'AI Active' }
];

const benefits = [
  { icon: '🚀', title: 'Performance', desc: 'Lightning fast' },
  { icon: '🔒', title: 'Security', desc: 'Quantum safe' },
  { icon: '📊', title: 'Analytics', desc: 'Real-time insights' },
  { icon: '🌐', title: 'Global', desc: 'Worldwide access' }
];

export default function HomePageTheme148() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [aiPulse, setAiPulse] = useState(0);
  const [quantumFlow, setQuantumFlow] = useState(0);
  const [neuralGlow, setNeuralGlow] = useState(0);

  useEffect(() => {
    // AI pulse animation
    const pulseInterval = setInterval(() => {
      setAiPulse(prev => (prev + 1) % 100);
    }, 150);

    // Quantum flow animation
    const flowInterval = setInterval(() => {
      setQuantumFlow(prev => (prev + 1) % 360);
    }, 200);

    // Neural glow animation
    const glowInterval = setInterval(() => {
      setNeuralGlow(prev => (prev + 1) % 100);
    }, 250);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(flowInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-black font-sans relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at ${aiPulse}% ${quantumFlow}%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${quantumFlow}% ${aiPulse}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${neuralGlow}% ${aiPulse}%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(6, 182, 212, 0.05) 50%, transparent 52%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 500px 500px, 200px 200px'
        }}></div>
      </div>

      {/* Neural Network Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating AI Elements */}
      <div className="fixed top-20 left-10 text-cyan-400 animate-pulse" style={{ 
        opacity: 0.7,
        transform: `translateY(${Math.sin(aiPulse * 0.1) * 10}px)`
      }}>
        <div className="text-3xl">🤖</div>
      </div>
      <div className="fixed top-40 right-20 text-blue-400 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.cos(quantumFlow * 0.1) * 8}px)`
      }}>
        <div className="text-2xl">🧠</div>
      </div>
      <div className="fixed bottom-40 left-20 text-purple-400 animate-pulse" style={{ 
        opacity: 0.5,
        transform: `translateY(${Math.sin(neuralGlow * 0.1) * 12}px)`
      }}>
        <div className="text-2xl">⚡</div>
      </div>
      <div className="fixed bottom-20 right-40 text-pink-400 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.cos(aiPulse * 0.1) * 6}px)`
      }}>
        <div className="text-xl">🔮</div>
      </div>

      {/* AI Glow Lines */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.sin(quantumFlow * 0.1) * 50}px)`
      }}></div>
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.cos(aiPulse * 0.1) * 50}px)`
      }}></div>

      {/* AI Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.sin(aiPulse * 0.1 + i) * 100}%`,
              top: `${Math.cos(quantumFlow * 0.1 + i) * 100}%`,
              backgroundColor: `hsl(${180 + Math.sin(neuralGlow * 0.1 + i) * 60}, 70%, 60%)`,
              opacity: 0.3 + Math.sin(aiPulse * 0.1 + i) * 0.2,
              transform: `scale(${1 + Math.sin(quantumFlow * 0.1 + i) * 0.5})`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide" style={{ 
              opacity: 0.95 + Math.sin(aiPulse * 0.1) * 0.05
            }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">FUTURISTIC</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI</span>
            </h1>
            <div className="text-lg text-cyan-300 font-bold mb-6 tracking-wide" style={{ 
              opacity: 0.8 + Math.sin(quantumFlow * 0.1) * 0.1
            }}>
              The Future of Artificial Intelligence 🤖
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium" style={{ 
            opacity: 0.9 + Math.sin(neuralGlow * 0.1) * 0.05
          }}>
            Experience the next generation of <span className="text-cyan-400 font-bold">artificial intelligence</span> with <span className="text-blue-400 font-bold">quantum computing</span> and <span className="text-purple-400 font-bold">neural networks</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold tracking-wide rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ 
              boxShadow: '0 4px 14px 0 rgba(6, 182, 212, 0.4)'
            }}>
              🤖 Explore AI
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-blue-400 text-blue-400 font-bold tracking-wide rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
              ⚡ Quantum Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-900/70 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-3 group-hover:from-blue-400 group-hover:to-cyan-400 transition-all" style={{ 
                    opacity: 0.95 + Math.sin(aiPulse * 0.1 + index) * 0.05
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-bold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" style={{ 
            opacity: 0.95 + Math.sin(quantumFlow * 0.05) * 0.05
          }}>
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-slate-900/70 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl mb-6 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(aiPulse * 0.1 + index) * 0.1
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" style={{ 
            opacity: 0.95 + Math.sin(neuralGlow * 0.05) * 0.05
          }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Quantum</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-900/70 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-2xl mb-4 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(quantumFlow * 0.1 + index) * 0.1
                  }}>{benefit.icon}</div>
                  <h3 className="text-base font-bold mb-2 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-medium">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" style={{ 
            opacity: 0.95 + Math.sin(aiPulse * 0.05) * 0.05
          }}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Scientists</span> Say
          </h2>
          
          <div className="bg-slate-900/70 backdrop-blur-sm rounded-lg p-10 border border-cyan-500/30 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="text-center">
              <div className="text-5xl mb-8 animate-pulse" style={{ 
                opacity: 0.8 + Math.sin(quantumFlow * 0.1) * 0.1
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-gray-300 mb-8 italic leading-relaxed font-medium" style={{ 
                opacity: 0.9 + Math.sin(neuralGlow * 0.1) * 0.05
              }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-bold text-white">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-cyan-300 text-sm font-bold">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(aiPulse * 0.1 + i) * 0.1
                  }}>★</span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-400' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    style={{ opacity: index === currentTestimonial ? 0.9 : 0.6 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-slate-900/70 to-black/70 backdrop-blur-sm rounded-lg p-12 border border-cyan-500/30 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" style={{ 
                opacity: 0.95 + Math.sin(quantumFlow * 0.1) * 0.05
              }}>
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Explore</span> the Future?
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed" style={{ 
                opacity: 0.9 + Math.sin(aiPulse * 0.1) * 0.05
              }}>
                Join the revolution in artificial intelligence and quantum computing
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold tracking-wide rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg" style={{ 
                boxShadow: '0 4px 14px 0 rgba(6, 182, 212, 0.4)'
              }}>
                🤖 Start AI Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse" style={{ 
          boxShadow: '0 4px 14px 0 rgba(6, 182, 212, 0.4)'
        }}>
          🤖
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes ai-pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        @keyframes quantum-flow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes neural-glow {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        
        .animate-ai-pulse {
          animation: ai-pulse 2s ease-in-out infinite;
        }
        
        .animate-quantum-flow {
          animation: quantum-flow 3s ease-in-out infinite;
        }
        
        .animate-neural-glow {
          animation: neural-glow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 