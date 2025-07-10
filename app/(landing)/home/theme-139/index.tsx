import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '⚛️',
    title: 'Quantum Computing',
    description: 'Kekuatan komputasi quantum yang revolusioner',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: '🔮',
    title: 'Digital Particles',
    description: 'Partikel digital yang dinamis',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: '🌌',
    title: 'Quantum Entanglement',
    description: 'Keterhubungan quantum yang unik',
    color: 'from-indigo-400 to-purple-500'
  },
  {
    icon: '⚡',
    title: 'Quantum Speed',
    description: 'Kecepatan quantum yang luar biasa',
    color: 'from-teal-400 to-cyan-500'
  }
];

const testimonials = [
  {
    name: 'Dr. Quantum',
    role: 'Quantum Physicist',
    avatar: '⚛️',
    text: 'Teknologi quantum yang benar-benar mengagumkan!',
    rating: 5
  },
  {
    name: 'Digital Master',
    role: 'Quantum Engineer',
    avatar: '🔮',
    text: 'Presisi dan detail yang luar biasa.',
    rating: 5
  },
  {
    name: 'Quantum Pioneer',
    role: 'Digital Scientist',
    avatar: '🌌',
    text: 'Membawa era quantum ke level berikutnya.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Quantum States' },
  { value: '10^9', label: 'Qubits' },
  { value: '99.9%', label: 'Accuracy' },
  { value: '0.001s', label: 'Speed' }
];

const benefits = [
  { icon: '⚛️', title: 'Quantum', desc: 'Kekuatan quantum' },
  { icon: '🔮', title: 'Digital', desc: 'Partikel digital' },
  { icon: '🌌', title: 'Entanglement', desc: 'Keterhubungan quantum' },
  { icon: '⚡', title: 'Speed', desc: 'Kecepatan quantum' }
];

export default function HomePageTheme139() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [particleCount, setParticleCount] = useState(0);
  const [quantumState, setQuantumState] = useState(0);

  useEffect(() => {
    // Particle animation
    const particleInterval = setInterval(() => {
      setParticleCount(prev => (prev + 1) % 100);
    }, 50);

    // Quantum state animation
    const quantumInterval = setInterval(() => {
      setQuantumState(prev => (prev + 1) % 360);
    }, 100);

    return () => {
      clearInterval(particleInterval);
      clearInterval(quantumInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 font-mono relative overflow-hidden">
      {/* Quantum Digital Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at ${particleCount}% ${quantumState}%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${quantumState}% ${particleCount}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(147, 51, 234, 0.05) 50%, transparent 52%)
          `,
          backgroundSize: '300px 300px, 200px 200px, 150px 150px'
        }}></div>
      </div>

      {/* Quantum Lines */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      <div className="fixed top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-indigo-400 to-transparent animate-pulse"></div>
      <div className="fixed top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse"></div>

      {/* Floating Quantum Elements */}
      <div className="fixed top-20 left-10 text-purple-400 animate-bounce" style={{ 
        textShadow: '0 0 15px #a855f7',
        transform: `rotate(${quantumState}deg) scale(${1 + Math.sin(quantumState * 0.1) * 0.2})`
      }}>
        <div className="text-3xl">⚛️</div>
      </div>
      <div className="fixed top-40 right-20 text-cyan-400 animate-pulse" style={{ 
        textShadow: '0 0 15px #22d3ee',
        transform: `rotate(${-quantumState * 0.5}deg) scale(${1 + Math.cos(quantumState * 0.1) * 0.2})`
      }}>
        <div className="text-2xl">🔮</div>
      </div>
      <div className="fixed bottom-40 left-20 text-indigo-400 animate-spin" style={{ 
        textShadow: '0 0 15px #6366f1',
        transform: `rotate(${quantumState * 0.3}deg) scale(${1 + Math.sin(quantumState * 0.05) * 0.3})`
      }}>
        <div className="text-2xl">🌌</div>
      </div>

      {/* Quantum Particle Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${particleCount}% ${quantumState}%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)`,
          animation: 'quantum-pulse 2s ease-in-out infinite'
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4" style={{ 
              textShadow: '0 0 25px #a855f7',
              filter: `hue-rotate(${quantumState}deg)`,
              animation: 'quantum-glow 3s ease-in-out infinite'
            }}>
              <span className="text-purple-400">QUANTUM</span>
              <br />
              <span className="text-cyan-400">DIGITAL</span>
            </h1>
            <div className="text-2xl text-indigo-400 font-medium mb-4" style={{ 
              textShadow: '0 0 15px #6366f1'
            }}>
              Future of Computing ⚛️
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Platform digital yang <span className="text-purple-400 font-semibold" style={{ textShadow: '0 0 8px #a855f7' }}>menggabungkan kekuatan quantum</span> dan <span className="text-cyan-400 font-semibold" style={{ textShadow: '0 0 8px #22d3ee' }}>inovasi digital</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg" style={{ 
              boxShadow: '0 0 25px rgba(147, 51, 234, 0.5)',
              border: '2px solid #a855f7'
            }}>
              ⚛️ Launch Quantum
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-indigo-400 text-indigo-400 font-bold rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300" style={{ 
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.3)'
            }}>
              🔮 Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-6 border-2 border-purple-400 shadow-lg hover:shadow-purple-400/50 transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)',
                  borderColor: '#a855f7'
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:text-cyan-400 transition-colors" style={{ textShadow: '0 0 15px #a855f7' }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" style={{ 
            textShadow: '0 0 20px #a855f7'
          }}>
            Quantum <span className="text-cyan-400" style={{ textShadow: '0 0 20px #22d3ee' }}>Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-8 border-2 border-indigo-400 shadow-lg hover:shadow-indigo-400/50 transition-all duration-300 hover:scale-105 h-full" style={{ 
                  boxShadow: '0 0 25px rgba(99, 102, 241, 0.3)',
                  borderColor: '#6366f1'
                }}>
                  <div className="text-4xl mb-4 group-hover:animate-bounce" style={{ 
                    textShadow: '0 0 20px #6366f1',
                    transform: `rotate(${quantumState * (index + 1) * 0.1}deg) scale(${1 + Math.sin(quantumState * 0.1) * 0.1})`
                  }}>{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-indigo-400 group-hover:text-purple-400 transition-colors" style={{ textShadow: '0 0 8px #6366f1' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" style={{ 
            textShadow: '0 0 20px #22d3ee'
          }}>
            <span className="text-cyan-400" style={{ textShadow: '0 0 20px #22d3ee' }}>Quantum</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-6 border-2 border-cyan-400 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 0 25px rgba(34, 211, 238, 0.3)',
                  borderColor: '#22d3ee'
                }}>
                  <div className="text-4xl mb-4 group-hover:animate-pulse" style={{ 
                    textShadow: '0 0 20px #22d3ee',
                    transform: `rotate(${quantumState * (index + 1) * 0.05}deg) scale(${1 + Math.cos(quantumState * 0.1) * 0.1})`
                  }}>{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-cyan-400" style={{ textShadow: '0 0 8px #22d3ee' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" style={{ 
            textShadow: '0 0 20px #a855f7'
          }}>
            What Our <span className="text-purple-400" style={{ textShadow: '0 0 20px #a855f7' }}>Quantum</span> Community Says
          </h2>
          
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-8 border-2 border-purple-400 shadow-lg" style={{ 
            boxShadow: '0 0 30px rgba(147, 51, 234, 0.3)',
            borderColor: '#a855f7'
          }}>
            <div className="text-center">
              <div className="text-6xl mb-6 animate-bounce" style={{ 
                textShadow: '0 0 25px #a855f7',
                transform: `rotate(${quantumState * 0.1}deg) scale(${1 + Math.sin(quantumState * 0.1) * 0.2})`
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-xl text-gray-200 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-4">
                <div className="text-lg font-bold text-purple-400" style={{ textShadow: '0 0 8px #a855f7' }}>
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-cyan-400" style={{ textShadow: '0 0 8px #22d3ee' }}>★</span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 transition-all ${
                      index === currentTestimonial 
                        ? 'bg-purple-400' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    style={index === currentTestimonial ? { 
                      boxShadow: '0 0 15px #a855f7'
                    } : {}}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-12 border-2 border-indigo-400 shadow-lg relative overflow-hidden" style={{ 
            boxShadow: '0 0 35px rgba(99, 102, 241, 0.4)',
            borderColor: '#6366f1'
          }}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ 
                textShadow: '0 0 25px #a855f7'
              }}>
                Ready to <span className="text-cyan-400" style={{ textShadow: '0 0 25px #22d3ee' }}>Quantumize</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan revolusi quantum dan jadilah bagian dari era digital masa depan
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg" style={{ 
                boxShadow: '0 0 35px rgba(147, 51, 234, 0.6)',
                border: '2px solid #a855f7'
              }}>
                ⚛️ Launch Your Quantum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all duration-300" style={{ 
          boxShadow: '0 0 25px rgba(147, 51, 234, 0.5)',
          border: '2px solid #a855f7'
        }}>
          ⚛️
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes quantum-pulse {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }
        
        @keyframes quantum-glow {
          0% { text-shadow: 0 0 25px #a855f7; }
          50% { text-shadow: 0 0 35px #a855f7, 0 0 45px #22d3ee; }
          100% { text-shadow: 0 0 25px #a855f7; }
        }
        
        .animate-quantum-pulse {
          animation: quantum-pulse 2s ease-in-out infinite;
        }
        
        .animate-quantum-glow {
          animation: quantum-glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 