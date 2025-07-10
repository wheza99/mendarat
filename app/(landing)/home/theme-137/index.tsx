import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌈',
    title: 'Holographic Display',
    description: 'Teknologi hologram yang revolusioner',
    color: 'from-cyan-400 to-purple-500'
  },
  {
    icon: '✨',
    title: 'Iridescent Effects',
    description: 'Efek warna yang berubah-ubah',
    color: 'from-pink-400 to-orange-500'
  },
  {
    icon: '🚀',
    title: 'Future Tech',
    description: 'Teknologi masa depan yang canggih',
    color: 'from-blue-400 to-green-500'
  },
  {
    icon: '💎',
    title: 'Crystal Clear',
    description: 'Kejernihan yang sempurna',
    color: 'from-purple-400 to-pink-500'
  }
];

const testimonials = [
  {
    name: 'Holo Master',
    role: 'Holographic Engineer',
    avatar: '🌈',
    text: 'Teknologi hologram yang benar-benar revolusioner!',
    rating: 5
  },
  {
    name: 'Crystal Vision',
    role: 'Future Tech Expert',
    avatar: '✨',
    text: 'Efek visual yang menakjubkan dan futuristik.',
    rating: 5
  },
  {
    name: 'Quantum User',
    role: 'Tech Enthusiast',
    avatar: '🚀',
    text: 'Membawa masa depan ke dalam genggaman.',
    rating: 5
  }
];

const stats = [
  { value: '4K', label: 'Resolution' },
  { value: '360°', label: 'Viewing' },
  { value: '∞', label: 'Possibilities' },
  { value: '24/7', label: 'Hologram' }
];

const benefits = [
  { icon: '🌈', title: 'Holographic', desc: 'Teknologi hologram' },
  { icon: '✨', title: 'Iridescent', desc: 'Warna berubah-ubah' },
  { icon: '🚀', title: 'Future', desc: 'Teknologi masa depan' },
  { icon: '💎', title: 'Crystal', desc: 'Kejernihan sempurna' }
];

export default function HomePageTheme137() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHolographic, setIsHolographic] = useState(false);
  const [hologramEffect, setHologramEffect] = useState(0);

  useEffect(() => {
    // Holographic animation
    const holoInterval = setInterval(() => {
      setIsHolographic(prev => !prev);
    }, 3000);

    // Hologram effect animation
    const holoEffectInterval = setInterval(() => {
      setHologramEffect(prev => (prev + 1) % 360);
    }, 50);

    return () => {
      clearInterval(holoInterval);
      clearInterval(holoEffectInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-mono relative overflow-hidden">
      {/* Holographic Grid Background */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 98%, rgba(0, 255, 255, 0.3) 100%),
            linear-gradient(180deg, transparent 98%, rgba(255, 0, 255, 0.3) 100%)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Holographic Lines */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
      <div className="fixed top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse"></div>
      <div className="fixed top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse"></div>

      {/* Floating Holographic Elements */}
      <div className="fixed top-20 left-10 text-cyan-400 animate-bounce" style={{ 
        textShadow: '0 0 20px #00ffff',
        filter: `hue-rotate(${hologramEffect}deg)`
      }}>
        <div className="text-3xl">🌈</div>
      </div>
      <div className="fixed top-40 right-20 text-pink-400 animate-pulse" style={{ 
        textShadow: '0 0 15px #ff00ff',
        filter: `hue-rotate(${-hologramEffect}deg)`
      }}>
        <div className="text-2xl">✨</div>
      </div>
      <div className="fixed bottom-40 left-20 text-purple-400 animate-spin" style={{ 
        textShadow: '0 0 18px #8000ff',
        filter: `hue-rotate(${hologramEffect * 0.5}deg)`
      }}>
        <div className="text-2xl">🚀</div>
      </div>

      {/* Holographic Scan Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to bottom, transparent ${hologramEffect}%, rgba(0, 255, 255, 0.2) ${hologramEffect}%, transparent ${hologramEffect + 3}%)`,
          height: '3px'
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className={`mb-8 ${isHolographic ? 'animate-pulse' : ''}`}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4" style={{ 
              textShadow: '0 0 30px #00ffff',
              filter: `hue-rotate(${hologramEffect}deg)`
            }}>
              <span className="text-cyan-400">HOLOGRAPHIC</span>
              <br />
              <span className="text-pink-400">FUTURE</span>
            </h1>
            <div className="text-2xl text-purple-400 font-medium mb-4" style={{ 
              textShadow: '0 0 15px #8000ff',
              filter: `hue-rotate(${hologramEffect * 0.3}deg)`
            }}>
              Future is Now 🌈
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Platform digital yang <span className="text-cyan-400 font-semibold" style={{ textShadow: '0 0 10px #00ffff' }}>revolusioner</span> dan menginspirasi <span className="text-pink-400 font-semibold" style={{ textShadow: '0 0 10px #ff00ff' }}>teknologi masa depan</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold rounded-none hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg" style={{ 
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)',
              filter: `hue-rotate(${hologramEffect * 0.2}deg)`
            }}>
              🌈 Launch Hologram
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-pink-400 text-pink-400 font-bold rounded-none hover:bg-pink-400 hover:text-white transition-all duration-300" style={{ 
              boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)',
              filter: `hue-rotate(${hologramEffect * 0.1}deg)`
            }}>
              ✨ Learn More
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
                <div className="bg-black/40 backdrop-blur-sm rounded-none p-6 border border-cyan-400 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                  filter: `hue-rotate(${hologramEffect * (index + 1) * 0.1}deg)`
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:text-pink-400 transition-colors" style={{ textShadow: '0 0 15px #00ffff' }}>
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
            textShadow: '0 0 25px #00ffff',
            filter: `hue-rotate(${hologramEffect * 0.1}deg)`
          }}>
            Holographic <span className="text-pink-400" style={{ textShadow: '0 0 25px #ff00ff' }}>Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-black/40 backdrop-blur-sm rounded-none p-8 border border-purple-400 shadow-lg hover:shadow-purple-400/50 transition-all duration-300 hover:scale-105 h-full" style={{ 
                  boxShadow: '0 0 25px rgba(128, 0, 255, 0.3)',
                  filter: `hue-rotate(${hologramEffect * (index + 1) * 0.15}deg)`
                }}>
                  <div className="text-4xl mb-4 group-hover:animate-bounce" style={{ 
                    textShadow: '0 0 20px #8000ff',
                    filter: `hue-rotate(${hologramEffect * 0.2}deg)`
                  }}>{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-purple-400 group-hover:text-pink-400 transition-colors" style={{ textShadow: '0 0 10px #8000ff' }}>
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
            textShadow: '0 0 25px #ff00ff',
            filter: `hue-rotate(${hologramEffect * 0.05}deg)`
          }}>
            <span className="text-pink-400" style={{ textShadow: '0 0 25px #ff00ff' }}>Future</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-black/40 backdrop-blur-sm rounded-none p-6 border border-pink-400 shadow-lg hover:shadow-pink-400/50 transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 0 25px rgba(255, 0, 255, 0.3)',
                  filter: `hue-rotate(${hologramEffect * (index + 1) * 0.1}deg)`
                }}>
                  <div className="text-4xl mb-4 group-hover:animate-pulse" style={{ 
                    textShadow: '0 0 20px #ff00ff',
                    filter: `hue-rotate(${hologramEffect * 0.3}deg)`
                  }}>{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-pink-400" style={{ textShadow: '0 0 10px #ff00ff' }}>
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
            textShadow: '0 0 25px #00ffff',
            filter: `hue-rotate(${hologramEffect * 0.08}deg)`
          }}>
            What Our <span className="text-cyan-400" style={{ textShadow: '0 0 25px #00ffff' }}>Holographic</span> Community Says
          </h2>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-none p-8 border border-cyan-400 shadow-lg" style={{ 
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
            filter: `hue-rotate(${hologramEffect * 0.12}deg)`
          }}>
            <div className="text-center">
              <div className="text-6xl mb-6 animate-bounce" style={{ 
                textShadow: '0 0 25px #00ffff',
                filter: `hue-rotate(${hologramEffect * 0.2}deg)`
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-xl text-gray-200 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-4">
                <div className="text-lg font-bold text-cyan-400" style={{ textShadow: '0 0 10px #00ffff' }}>
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400" style={{ textShadow: '0 0 5px #ffff00' }}>★</span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 transition-all ${
                      index === currentTestimonial 
                        ? 'bg-cyan-400' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    style={index === currentTestimonial ? { 
                      boxShadow: '0 0 15px #00ffff',
                      filter: `hue-rotate(${hologramEffect * 0.1}deg)`
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
          <div className="bg-black/40 backdrop-blur-sm rounded-none p-12 border border-purple-400 shadow-lg relative overflow-hidden" style={{ 
            boxShadow: '0 0 35px rgba(128, 0, 255, 0.4)',
            filter: `hue-rotate(${hologramEffect * 0.15}deg)`
          }}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ 
                textShadow: '0 0 25px #00ffff',
                filter: `hue-rotate(${hologramEffect * 0.1}deg)`
              }}>
                Ready to <span className="text-pink-400" style={{ textShadow: '0 0 25px #ff00ff' }}>Hologram</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan revolusi hologram dan jadilah bagian dari teknologi masa depan
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-bold rounded-none hover:from-cyan-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg" style={{ 
                boxShadow: '0 0 35px rgba(0, 255, 255, 0.6)',
                filter: `hue-rotate(${hologramEffect * 0.2}deg)`
              }}>
                🌈 Launch Your Hologram
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-none flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all duration-300" style={{ 
          boxShadow: '0 0 25px rgba(0, 255, 255, 0.5)',
          filter: `hue-rotate(${hologramEffect * 0.1}deg)`
        }}>
          🌈
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes hologram {
          0% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(180deg); }
          100% { filter: hue-rotate(360deg); }
        }
        
        .animate-hologram {
          animation: hologram 3s linear infinite;
        }
        
        @keyframes iridescent {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-iridescent {
          animation: iridescent 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 