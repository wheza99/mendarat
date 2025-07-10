import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌃',
    title: 'Neon City',
    description: 'Kota neon yang tak pernah tidur',
    color: 'from-pink-400 to-purple-500'
  },
  {
    icon: '⚡',
    title: 'Cyber Speed',
    description: 'Kecepatan cyber yang luar biasa',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: '🎮',
    title: 'Digital Gaming',
    description: 'Gaming digital yang immersive',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Integrasi AI yang canggih',
    color: 'from-orange-400 to-red-500'
  }
];

const testimonials = [
  {
    name: 'Cyber Master',
    role: 'Digital Nomad',
    avatar: '🌃',
    text: 'Teknologi cyberpunk yang benar-benar mengagumkan!',
    rating: 5
  },
  {
    name: 'Neon Queen',
    role: 'Cyber Engineer',
    avatar: '⚡',
    text: 'Presisi dan detail yang luar biasa.',
    rating: 5
  },
  {
    name: 'Digital Lord',
    role: 'AI Specialist',
    avatar: '🎮',
    text: 'Membawa era cyberpunk ke level berikutnya.',
    rating: 5
  }
];

const stats = [
  { value: '24/7', label: 'Neon Life' },
  { value: '∞', label: 'Cyber Power' },
  { value: '100%', label: 'Digital' },
  { value: '0.001s', label: 'Response' }
];

const benefits = [
  { icon: '🌃', title: 'Neon', desc: 'Kota neon' },
  { icon: '⚡', title: 'Cyber', desc: 'Kecepatan cyber' },
  { icon: '🎮', title: 'Gaming', desc: 'Gaming digital' },
  { icon: '🤖', title: 'AI', desc: 'Integrasi AI' }
];

export default function HomePageTheme140() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [glitchEffect, setGlitchEffect] = useState(0);
  const [neonPulse, setNeonPulse] = useState(0);

  useEffect(() => {
    // Glitch animation
    const glitchInterval = setInterval(() => {
      setGlitchEffect(prev => (prev + 1) % 100);
    }, 100);

    // Neon pulse animation
    const neonInterval = setInterval(() => {
      setNeonPulse(prev => (prev + 1) % 360);
    }, 50);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(neonInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black font-mono relative overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at ${glitchEffect}% ${neonPulse}%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
            radial-gradient(circle at ${neonPulse}% ${glitchEffect}%, rgba(34, 211, 238, 0.2) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(236, 72, 153, 0.1) 50%, transparent 52%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 200px 200px'
        }}></div>
      </div>

      {/* Neon Grid Lines */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      <div className="fixed top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse"></div>
      <div className="fixed top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent animate-pulse"></div>

      {/* Floating Cyberpunk Elements */}
      <div className="fixed top-20 left-10 text-pink-400 animate-bounce" style={{ 
        textShadow: '0 0 20px #ec4899',
        transform: `rotate(${glitchEffect}deg) scale(${1 + Math.sin(neonPulse * 0.1) * 0.3})`,
        filter: `hue-rotate(${neonPulse}deg)`
      }}>
        <div className="text-3xl">🌃</div>
      </div>
      <div className="fixed top-40 right-20 text-cyan-400 animate-pulse" style={{ 
        textShadow: '0 0 20px #22d3ee',
        transform: `rotate(${-glitchEffect * 0.5}deg) scale(${1 + Math.cos(neonPulse * 0.1) * 0.3})`,
        filter: `hue-rotate(${glitchEffect}deg)`
      }}>
        <div className="text-2xl">⚡</div>
      </div>
      <div className="fixed bottom-40 left-20 text-green-400 animate-spin" style={{ 
        textShadow: '0 0 20px #4ade80',
        transform: `rotate(${glitchEffect * 0.3}deg) scale(${1 + Math.sin(neonPulse * 0.05) * 0.4})`,
        filter: `hue-rotate(${neonPulse * 0.5}deg)`
      }}>
        <div className="text-2xl">🎮</div>
      </div>

      {/* Glitch Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to right, transparent ${glitchEffect}%, rgba(236, 72, 153, 0.3) ${glitchEffect}%, transparent ${glitchEffect + 2}%)`,
          height: '3px',
          animation: 'glitch-scan 2s ease-in-out infinite'
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4" style={{ 
              textShadow: '0 0 30px #ec4899',
              filter: `hue-rotate(${neonPulse}deg)`,
              animation: 'neon-glow 2s ease-in-out infinite'
            }}>
              <span className="text-pink-400">NEON</span>
              <br />
              <span className="text-cyan-400">CYBERPUNK</span>
            </h1>
            <div className="text-2xl text-green-400 font-medium mb-4" style={{ 
              textShadow: '0 0 20px #4ade80'
            }}>
              2.0 Digital Revolution 🌃
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Platform digital yang <span className="text-pink-400 font-semibold" style={{ textShadow: '0 0 10px #ec4899' }}>menggabungkan kekuatan neon</span> dan <span className="text-cyan-400 font-semibold" style={{ textShadow: '0 0 10px #22d3ee' }}>inovasi cyberpunk</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold rounded-none hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg" style={{ 
              boxShadow: '0 0 30px rgba(236, 72, 153, 0.6)',
              border: '2px solid #ec4899'
            }}>
              🌃 Launch Cyberpunk
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 font-bold rounded-none hover:bg-green-400 hover:text-black transition-all duration-300" style={{ 
              boxShadow: '0 0 20px rgba(74, 222, 128, 0.4)'
            }}>
              ⚡ Learn More
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
                <div className="bg-black/60 backdrop-blur-sm rounded-none p-6 border-2 border-pink-400 shadow-lg hover:shadow-pink-400/50 transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 0 25px rgba(236, 72, 153, 0.4)',
                  borderColor: '#ec4899'
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2 group-hover:text-cyan-400 transition-colors" style={{ textShadow: '0 0 20px #ec4899' }}>
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
            textShadow: '0 0 25px #ec4899'
          }}>
            Cyberpunk <span className="text-cyan-400" style={{ textShadow: '0 0 25px #22d3ee' }}>Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-black/60 backdrop-blur-sm rounded-none p-8 border-2 border-green-400 shadow-lg hover:shadow-green-400/50 transition-all duration-300 hover:scale-105 h-full" style={{ 
                  boxShadow: '0 0 30px rgba(74, 222, 128, 0.4)',
                  borderColor: '#4ade80'
                }}>
                  <div className="text-4xl mb-4 group-hover:animate-bounce" style={{ 
                    textShadow: '0 0 25px #4ade80',
                    transform: `rotate(${glitchEffect * (index + 1) * 0.1}deg) scale(${1 + Math.sin(neonPulse * 0.1) * 0.2})`
                  }}>{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-green-400 group-hover:text-pink-400 transition-colors" style={{ textShadow: '0 0 10px #4ade80' }}>
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
            textShadow: '0 0 25px #22d3ee'
          }}>
            <span className="text-cyan-400" style={{ textShadow: '0 0 25px #22d3ee' }}>Neon</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-black/60 backdrop-blur-sm rounded-none p-6 border-2 border-orange-400 shadow-lg hover:shadow-orange-400/50 transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 0 30px rgba(251, 146, 60, 0.4)',
                  borderColor: '#fb923c'
                }}>
                  <div className="text-4xl mb-4 group-hover:animate-pulse" style={{ 
                    textShadow: '0 0 25px #fb923c',
                    transform: `rotate(${glitchEffect * (index + 1) * 0.05}deg) scale(${1 + Math.cos(neonPulse * 0.1) * 0.2})`
                  }}>{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-orange-400" style={{ textShadow: '0 0 10px #fb923c' }}>
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
            textShadow: '0 0 25px #ec4899'
          }}>
            What Our <span className="text-pink-400" style={{ textShadow: '0 0 25px #ec4899' }}>Cyberpunk</span> Community Says
          </h2>
          
          <div className="bg-black/60 backdrop-blur-sm rounded-none p-8 border-2 border-pink-400 shadow-lg" style={{ 
            boxShadow: '0 0 35px rgba(236, 72, 153, 0.4)',
            borderColor: '#ec4899'
          }}>
            <div className="text-center">
              <div className="text-6xl mb-6 animate-bounce" style={{ 
                textShadow: '0 0 30px #ec4899',
                transform: `rotate(${glitchEffect * 0.1}deg) scale(${1 + Math.sin(neonPulse * 0.1) * 0.3})`
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-xl text-gray-200 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-4">
                <div className="text-lg font-bold text-pink-400" style={{ textShadow: '0 0 10px #ec4899' }}>
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-cyan-400" style={{ textShadow: '0 0 10px #22d3ee' }}>★</span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 transition-all ${
                      index === currentTestimonial 
                        ? 'bg-pink-400' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    style={index === currentTestimonial ? { 
                      boxShadow: '0 0 15px #ec4899'
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
          <div className="bg-black/60 backdrop-blur-sm rounded-none p-12 border-2 border-cyan-400 shadow-lg relative overflow-hidden" style={{ 
            boxShadow: '0 0 40px rgba(34, 211, 238, 0.5)',
            borderColor: '#22d3ee'
          }}>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ 
                textShadow: '0 0 30px #ec4899'
              }}>
                Ready to <span className="text-cyan-400" style={{ textShadow: '0 0 30px #22d3ee' }}>Cyberpunk</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan revolusi neon dan jadilah bagian dari era cyberpunk masa depan
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold rounded-none hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg" style={{ 
                boxShadow: '0 0 40px rgba(236, 72, 153, 0.7)',
                border: '2px solid #ec4899'
              }}>
                🌃 Launch Your Cyberpunk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-none flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all duration-300" style={{ 
          boxShadow: '0 0 30px rgba(236, 72, 153, 0.6)',
          border: '2px solid #ec4899'
        }}>
          🌃
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes neon-glow {
          0% { text-shadow: 0 0 30px #ec4899; }
          50% { text-shadow: 0 0 40px #ec4899, 0 0 50px #22d3ee; }
          100% { text-shadow: 0 0 30px #ec4899; }
        }
        
        @keyframes glitch-scan {
          0% { opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { opacity: 0.3; }
        }
        
        .animate-neon-glow {
          animation: neon-glow 2s ease-in-out infinite;
        }
        
        .animate-glitch-scan {
          animation: glitch-scan 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 