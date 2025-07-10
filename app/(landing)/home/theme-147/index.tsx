import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🎮',
    title: 'Pro Gaming',
    description: 'Gaming profesional tingkat dunia',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '🏆',
    title: 'Tournament Ready',
    description: 'Siap untuk turnamen esports',
    color: 'from-pink-500 to-red-500'
  },
  {
    icon: '⚡',
    title: 'High Performance',
    description: 'Performa gaming yang maksimal',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: '🎯',
    title: 'Precision Aim',
    description: 'Akurasi yang sempurna',
    color: 'from-orange-500 to-yellow-500'
  }
];

const testimonials = [
  {
    name: 'ProGamer123',
    role: 'Esports Champion',
    avatar: '🎮',
    text: 'Platform gaming yang benar-benar mengubah cara kita bermain!',
    rating: 5
  },
  {
    name: 'ElitePlayer',
    role: 'Tournament Winner',
    avatar: '🏆',
    text: 'Performa yang luar biasa untuk turnamen.',
    rating: 5
  },
  {
    name: 'SpeedRunner',
    role: 'Gaming Pro',
    avatar: '⚡',
    text: 'Membawa gaming ke level profesional.',
    rating: 5
  }
];

const stats = [
  { value: '1000+', label: 'Tournaments' },
  { value: '50K+', label: 'Players' },
  { value: '<1ms', label: 'Latency' },
  { value: '24/7', label: 'Gaming' }
];

const benefits = [
  { icon: '🎮', title: 'Pro Gaming', desc: 'Level profesional' },
  { icon: '🏆', title: 'Tournaments', desc: 'Turnamen esports' },
  { icon: '⚡', title: 'Performance', desc: 'Performa maksimal' },
  { icon: '🎯', title: 'Precision', desc: 'Akurasi sempurna' }
];

export default function HomePageTheme147() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [gamePulse, setGamePulse] = useState(0);
  const [esportsFlow, setEsportsFlow] = useState(0);
  const [neonGlow, setNeonGlow] = useState(0);

  useEffect(() => {
    // Game pulse animation
    const pulseInterval = setInterval(() => {
      setGamePulse(prev => (prev + 1) % 100);
    }, 100);

    // Esports flow animation
    const flowInterval = setInterval(() => {
      setEsportsFlow(prev => (prev + 1) % 360);
    }, 150);

    // Neon glow animation
    const glowInterval = setInterval(() => {
      setNeonGlow(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(flowInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black font-sans relative overflow-hidden">
      {/* Gaming Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at ${gamePulse}% ${esportsFlow}%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${esportsFlow}% ${gamePulse}%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${neonGlow}% ${gamePulse}%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(147, 51, 234, 0.05) 50%, transparent 52%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 500px 500px, 200px 200px'
        }}></div>
      </div>

      {/* Gaming Grid */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Gaming Elements */}
      <div className="fixed top-20 left-10 text-purple-400 animate-pulse" style={{ 
        opacity: 0.7,
        transform: `translateY(${Math.sin(gamePulse * 0.1) * 10}px)`
      }}>
        <div className="text-3xl">🎮</div>
      </div>
      <div className="fixed top-40 right-20 text-pink-400 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.cos(esportsFlow * 0.1) * 8}px)`
      }}>
        <div className="text-2xl">🏆</div>
      </div>
      <div className="fixed bottom-40 left-20 text-red-400 animate-pulse" style={{ 
        opacity: 0.5,
        transform: `translateY(${Math.sin(neonGlow * 0.1) * 12}px)`
      }}>
        <div className="text-2xl">⚡</div>
      </div>
      <div className="fixed bottom-20 right-40 text-orange-400 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.cos(gamePulse * 0.1) * 6}px)`
      }}>
        <div className="text-xl">🎯</div>
      </div>

      {/* Gaming Glow Lines */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.sin(esportsFlow * 0.1) * 50}px)`
      }}></div>
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.cos(gamePulse * 0.1) * 50}px)`
      }}></div>

      {/* Gaming Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.sin(gamePulse * 0.1 + i) * 100}%`,
              top: `${Math.cos(esportsFlow * 0.1 + i) * 100}%`,
              backgroundColor: `hsl(${270 + Math.sin(neonGlow * 0.1 + i) * 60}, 70%, 60%)`,
              opacity: 0.3 + Math.sin(gamePulse * 0.1 + i) * 0.2,
              transform: `scale(${1 + Math.sin(esportsFlow * 0.1 + i) * 0.5})`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide" style={{ 
              opacity: 0.95 + Math.sin(gamePulse * 0.1) * 0.05
            }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">GAMING</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">ESPORTS</span>
            </h1>
            <div className="text-lg text-purple-300 font-bold mb-6 tracking-wide" style={{ 
              opacity: 0.8 + Math.sin(esportsFlow * 0.1) * 0.1
            }}>
              Level Up Your Gaming Experience 🎮
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium" style={{ 
            opacity: 0.9 + Math.sin(neonGlow * 0.1) * 0.05
          }}>
            Platform gaming yang <span className="text-purple-400 font-bold">menggabungkan teknologi esports</span> dan <span className="text-pink-400 font-bold">performa gaming terdepan</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold tracking-wide rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ 
              boxShadow: '0 4px 14px 0 rgba(147, 51, 234, 0.4)'
            }}>
              🎮 Start Gaming
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-pink-400 text-pink-400 font-bold tracking-wide rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300">
              🏆 Join Tournament
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
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3 group-hover:from-pink-400 group-hover:to-purple-400 transition-all" style={{ 
                    opacity: 0.95 + Math.sin(gamePulse * 0.1 + index) * 0.05
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
            opacity: 0.95 + Math.sin(esportsFlow * 0.05) * 0.05
          }}>
            Gaming <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl mb-6 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(gamePulse * 0.1 + index) * 0.1
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
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
            opacity: 0.95 + Math.sin(neonGlow * 0.05) * 0.05
          }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">Esports</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-2xl mb-4 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(esportsFlow * 0.1 + index) * 0.1
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
            opacity: 0.95 + Math.sin(gamePulse * 0.05) * 0.05
          }}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Gamers</span> Say
          </h2>
          
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-10 border border-purple-500/30 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="text-center">
              <div className="text-5xl mb-8 animate-pulse" style={{ 
                opacity: 0.8 + Math.sin(esportsFlow * 0.1) * 0.1
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-gray-300 mb-8 italic leading-relaxed font-medium" style={{ 
                opacity: 0.9 + Math.sin(neonGlow * 0.1) * 0.05
              }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-bold text-white">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-purple-300 text-sm font-bold">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(gamePulse * 0.1 + i) * 0.1
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
                        ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
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
          <div className="bg-gradient-to-r from-gray-900/70 to-black/70 backdrop-blur-sm rounded-lg p-12 border border-purple-500/30 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" style={{ 
                opacity: 0.95 + Math.sin(esportsFlow * 0.1) * 0.05
              }}>
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Level Up</span>?
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed" style={{ 
                opacity: 0.9 + Math.sin(gamePulse * 0.1) * 0.05
              }}>
                Bergabunglah dengan komunitas gaming dan jadilah bagian dari revolusi esports
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold tracking-wide rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg" style={{ 
                boxShadow: '0 4px 14px 0 rgba(147, 51, 234, 0.4)'
              }}>
                🎮 Start Gaming Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse" style={{ 
          boxShadow: '0 4px 14px 0 rgba(147, 51, 234, 0.4)'
        }}>
          🎮
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes game-pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        @keyframes esports-flow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes neon-glow {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        
        .animate-game-pulse {
          animation: game-pulse 2s ease-in-out infinite;
        }
        
        .animate-esports-flow {
          animation: esports-flow 3s ease-in-out infinite;
        }
        
        .animate-neon-glow {
          animation: neon-glow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 