import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌆',
    title: 'Neon City',
    description: 'Futuristic urban landscapes',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: '🤖',
    title: 'AI Systems',
    description: 'Advanced artificial intelligence',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '⚡',
    title: 'Neural Links',
    description: 'Mind-machine interface',
    color: 'from-green-500 to-cyan-500'
  },
  {
    icon: '🔮',
    title: 'Holo Tech',
    description: 'Holographic projections',
    color: 'from-pink-500 to-purple-500'
  }
];

const testimonials = [
  {
    name: 'Zara Neural',
    role: 'Cyber Security Expert',
    avatar: '👤',
    text: 'The future is now. Technology and humanity merge in perfect harmony.',
    rating: 5
  },
  {
    name: 'Max Synthwave',
    role: 'Digital Architect',
    avatar: '🕴️',
    text: 'In the neon glow of the city, we build tomorrow\'s digital dreams.',
    rating: 5
  },
  {
    name: 'Nova Chrome',
    role: 'AI Specialist',
    avatar: '👩‍💻',
    text: 'Where neon lights meet neural networks, innovation comes alive.',
    rating: 5
  }
];

const stats = [
  { value: '2084', label: 'Future Year' },
  { value: '∞', label: 'Possibilities' },
  { value: '24/7', label: 'Connected' },
  { value: '100%', label: 'Digital' }
];

const services = [
  { icon: '💾', title: 'Data Mining', desc: 'Extract digital gold' },
  { icon: '🧠', title: 'Mind Upload', desc: 'Consciousness transfer' },
  { icon: '🛡️', title: 'Cyber Shield', desc: 'Digital protection' },
  { icon: '🔗', title: 'Neural Net', desc: 'Brain networks' }
];

export default function HomePageTheme153() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [glitchEffect, setGlitchEffect] = useState(0);
  const [neonPulse, setNeonPulse] = useState(0);
  const [matrixRain, setMatrixRain] = useState(0);

  useEffect(() => {
    // Glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchEffect(prev => (prev + 1) % 100);
    }, 200);

    // Neon pulse
    const pulseInterval = setInterval(() => {
      setNeonPulse(prev => (prev + 1) % 100);
    }, 100);

    // Matrix rain effect
    const matrixInterval = setInterval(() => {
      setMatrixRain(prev => (prev + 1) % 100);
    }, 300);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(pulseInterval);
      clearInterval(matrixInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black font-mono relative overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        {/* City Skyline Silhouette */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 300" fill="none">
            <rect x="0" y="200" width="80" height="100" fill="#1a1a2e" />
            <rect x="80" y="150" width="60" height="150" fill="#16213e" />
            <rect x="140" y="180" width="90" height="120" fill="#1a1a2e" />
            <rect x="230" y="120" width="70" height="180" fill="#0f0f23" />
            <rect x="300" y="160" width="85" height="140" fill="#16213e" />
            <rect x="385" y="100" width="75" height="200" fill="#1a1a2e" />
            <rect x="460" y="140" width="95" height="160" fill="#0f0f23" />
            <rect x="555" y="110" width="65" height="190" fill="#16213e" />
            <rect x="620" y="170" width="80" height="130" fill="#1a1a2e" />
            <rect x="700" y="130" width="90" height="170" fill="#0f0f23" />
            <rect x="790" y="160" width="75" height="140" fill="#16213e" />
            <rect x="865" y="120" width="85" height="180" fill="#1a1a2e" />
            <rect x="950" y="180" width="70" height="120" fill="#0f0f23" />
            <rect x="1020" y="140" width="95" height="160" fill="#16213e" />
            <rect x="1115" y="200" width="85" height="100" fill="#1a1a2e" />
            
            {/* Neon windows */}
            {Array.from({ length: 50 }, (_, i) => (
              <rect 
                key={i}
                x={Math.random() * 1200} 
                y={120 + Math.random() * 100} 
                width="4" 
                height="6" 
                fill={`hsl(${180 + Math.sin(neonPulse * 0.1 + i) * 60}, 100%, ${60 + Math.sin(neonPulse * 0.1 + i) * 30}%)`}
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </svg>
        </div>

        {/* Neon Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-[linear-gradient(90deg,transparent_49px,#00ffff_50px,#00ffff_51px,transparent_52px),linear-gradient(transparent_49px,#ff00ff_50px,#ff00ff_51px,transparent_52px)] bg-[length:100px_100px]"
            style={{ 
              opacity: 0.3 + Math.sin(neonPulse * 0.1) * 0.1,
              transform: `translate(${Math.sin(glitchEffect * 0.1) * 2}px, ${Math.cos(glitchEffect * 0.1) * 2}px)`
            }}
          />
        </div>

        {/* Matrix Rain */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute text-green-400 text-xs font-mono opacity-70"
              style={{
                left: `${i * 5}%`,
                top: `-20px`,
                transform: `translateY(${(matrixRain + i * 10) % 120}vh)`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {Array.from({ length: 15 }, (_, j) => (
                <div key={j} className="mb-1">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Floating Neon Elements */}
        <div className="absolute top-20 left-10 animate-pulse" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(neonPulse * 0.1) * 20}px) rotate(${glitchEffect * 2}deg)`,
          filter: 'drop-shadow(0 0 10px #00ffff)'
        }}>
          <div className="text-4xl text-cyan-400">🌆</div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(glitchEffect * 0.1) * 15}px) rotate(${neonPulse * 1.5}deg)`,
          filter: 'drop-shadow(0 0 10px #ff00ff)'
        }}>
          <div className="text-3xl text-pink-400">🤖</div>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(matrixRain * 0.1) * 18}px) rotate(${glitchEffect}deg)`,
          filter: 'drop-shadow(0 0 10px #00ff00)'
        }}>
          <div className="text-3xl text-green-400">⚡</div>
        </div>

        {/* Holographic Beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-cyan-400 via-transparent to-purple-400 opacity-60 animate-pulse" style={{
          transform: `translateX(${Math.sin(neonPulse * 0.1) * 50}px)`,
          filter: 'blur(2px)'
        }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-pink-400 via-transparent to-cyan-400 opacity-60 animate-pulse" style={{
          transform: `translateX(${Math.cos(glitchEffect * 0.1) * 50}px)`,
          filter: 'blur(2px)'
        }}></div>

        {/* Glitch Lines */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"
            style={{
              top: `${10 + i * 12}%`,
              transform: `translateX(${Math.sin(glitchEffect * 0.1 + i) * 100}px)`,
              display: glitchEffect % 10 === i ? 'block' : 'none'
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider" style={{
              opacity: 0.95 + Math.sin(neonPulse * 0.1) * 0.05,
              textShadow: '0 0 20px #00ffff, 0 0 40px #00ffff',
              transform: glitchEffect % 20 === 0 ? `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)` : 'none'
            }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">CYBER</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">PUNK</span>
            </h1>
            <div className="text-xl text-green-400 font-bold mb-6 tracking-widest" style={{
              opacity: 0.8 + Math.sin(glitchEffect * 0.1) * 0.1,
              textShadow: '0 0 10px #00ff00',
              fontFamily: 'monospace'
            }}>
              &gt; WELCOME TO THE NEON CITY_ 🌆
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-mono" style={{
            opacity: 0.9 + Math.sin(matrixRain * 0.1) * 0.05
          }}>
            Enter the <span className="text-cyan-400 font-bold">digital realm</span> where <span className="text-pink-400 font-bold">neon dreams</span> meet <span className="text-purple-400 font-bold">cyber reality</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold tracking-wider rounded-none hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 font-mono border-2 border-cyan-400" style={{
              boxShadow: '0 0 20px #00ffff, inset 0 0 20px rgba(0, 255, 255, 0.2)',
              textShadow: '0 0 10px #000'
            }}>
              🌆 JACK IN
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-pink-400 text-pink-400 font-bold tracking-wider rounded-none hover:bg-pink-400 hover:text-black transition-all duration-300 font-mono" style={{
              boxShadow: '0 0 20px #ff00ff'
            }}>
              🤖 EXPLORE GRID
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-black/80 backdrop-blur-sm rounded-none p-8 border-2 border-cyan-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden" style={{
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)'
                }}>
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
                  
                  <div className="text-3xl md:text-4xl font-bold font-mono mb-3 relative z-10" style={{
                    background: `linear-gradient(45deg, #00ffff, #ff00ff, #00ff00)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    opacity: 0.95 + Math.sin(neonPulse * 0.1 + index) * 0.05,
                    textShadow: '0 0 20px #00ffff'
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-mono font-bold tracking-wider relative z-10">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono tracking-wider" style={{
            opacity: 0.95 + Math.sin(glitchEffect * 0.05) * 0.05,
            textShadow: '0 0 20px #ff00ff'
          }}>
            CYBER <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">FEATURES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-black/80 backdrop-blur-sm rounded-none p-8 border-2 border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full relative overflow-hidden" style={{
                  boxShadow: '0 0 20px rgba(147, 51, 234, 0.3), inset 0 0 20px rgba(147, 51, 234, 0.1)'
                }}>
                  {/* Neon glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}></div>
                  
                  <div className="text-3xl mb-6 group-hover:animate-pulse relative z-10" style={{
                    opacity: 0.8 + Math.sin(neonPulse * 0.1 + index) * 0.1,
                    filter: `drop-shadow(0 0 10px currentColor)`
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors font-mono tracking-wide relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm relative z-10">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono tracking-wider" style={{
            opacity: 0.95 + Math.sin(matrixRain * 0.05) * 0.05,
            textShadow: '0 0 20px #00ff00'
          }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">NEURAL</span> SERVICES
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-black/80 backdrop-blur-sm rounded-none p-6 border border-green-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden" style={{
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(34, 197, 94, 0.1)'
                }}>
                  {/* Data stream effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-green-500/5 to-transparent animate-pulse" style={{ animationDelay: `${index * 0.3}s` }}></div>
                  
                  <div className="text-2xl mb-4 group-hover:animate-pulse relative z-10" style={{
                    opacity: 0.8 + Math.sin(glitchEffect * 0.1 + index) * 0.1,
                    filter: `drop-shadow(0 0 8px currentColor)`
                  }}>{service.icon}</div>
                  <h3 className="text-base font-bold mb-2 text-white font-mono tracking-wide relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-mono relative z-10">
                    {service.desc}
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono tracking-wider" style={{
            opacity: 0.95 + Math.sin(neonPulse * 0.05) * 0.05,
            textShadow: '0 0 20px #ff00ff'
          }}>
            WHAT OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">HACKERS</span> SAY
          </h2>

          <div className="bg-black/80 backdrop-blur-sm rounded-none p-10 border-2 border-pink-500 shadow-lg relative overflow-hidden" style={{
            boxShadow: '0 0 30px rgba(236, 72, 153, 0.3), inset 0 0 30px rgba(236, 72, 153, 0.1)'
          }}>
            {/* Scanning line effect */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse" style={{
              transform: `translateY(${Math.sin(neonPulse * 0.1) * 400}px)`,
              animationDuration: '3s'
            }}></div>
            
            <div className="text-center relative z-10">
              <div className="text-5xl mb-8 animate-pulse" style={{
                opacity: 0.8 + Math.sin(glitchEffect * 0.1) * 0.1,
                filter: `drop-shadow(0 0 15px currentColor)`
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-gray-200 mb-8 italic leading-relaxed font-mono" style={{
                opacity: 0.9 + Math.sin(matrixRain * 0.1) * 0.05
              }}>
                "&gt; {testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-bold text-white font-mono tracking-wide">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-cyan-400 text-sm font-mono font-bold">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse" style={{
                    opacity: 0.8 + Math.sin(neonPulse * 0.1 + i) * 0.1,
                    filter: `drop-shadow(0 0 5px currentColor)`
                  }}>★</span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-none border transition-all ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-cyan-500 to-pink-500 border-cyan-400'
                        : 'bg-transparent border-gray-600 hover:border-gray-400'
                    }`}
                    style={{
                      opacity: index === currentTestimonial ? 0.9 : 0.6,
                      boxShadow: index === currentTestimonial ? '0 0 10px #00ffff' : 'none'
                    }}
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
          <div className="bg-gradient-to-r from-black/80 to-purple-900/80 backdrop-blur-sm rounded-none p-12 border-2 border-cyan-400 shadow-lg relative overflow-hidden" style={{
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.3), inset 0 0 40px rgba(0, 255, 255, 0.1)'
          }}>
            {/* Circuit pattern overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                <path d="M50 50 L350 50 L350 100 L200 100 L200 150 L300 150 L300 200 L100 200 L100 250 L350 250" 
                      stroke="#00ffff" strokeWidth="2" fill="none" className="animate-pulse" />
                <circle cx="200" cy="100" r="5" fill="#ff00ff" className="animate-pulse" />
                <circle cx="300" cy="150" r="5" fill="#00ff00" className="animate-pulse" />
                <circle cx="100" cy="200" r="5" fill="#ffff00" className="animate-pulse" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-mono tracking-wider" style={{
                opacity: 0.95 + Math.sin(glitchEffect * 0.1) * 0.05,
                textShadow: '0 0 20px #00ffff'
              }}>
                READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">CONNECT</span>?
              </h2>
              <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto font-mono leading-relaxed" style={{
                opacity: 0.9 + Math.sin(neonPulse * 0.1) * 0.05
              }}>
                &gt; Initialize neural connection and enter the cyberpunk matrix
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold tracking-wider rounded-none hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-mono border-2 border-cyan-400" style={{
                boxShadow: '0 0 30px #00ffff, inset 0 0 30px rgba(0, 255, 255, 0.2)',
                textShadow: '0 0 10px #000'
              }}>
                🌆 JACK INTO THE MATRIX
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-none flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse border-2 border-cyan-400 font-mono" style={{
          boxShadow: '0 0 20px #00ffff',
          filter: 'drop-shadow(0 0 10px #00ffff)'
        }}>
          🤖
        </button>
      </div>

      {/* Terminal Window */}
      <div className="fixed top-4 left-4 z-30 bg-black border-2 border-green-400 rounded-none w-64 h-32 font-mono text-xs overflow-hidden" style={{
        boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
      }}>
        <div className="bg-green-400 text-black px-2 py-1 text-xs font-bold">TERMINAL_</div>
        <div className="p-2 text-green-400">
          <div>&gt; Connecting...</div>
          <div>&gt; Neural link: OK</div>
          <div>&gt; Matrix access: GRANTED</div>
          <div className="animate-pulse">&gt; Welcome to the grid_</div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes cyber-glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        @keyframes neon-pulse {
          0% { opacity: 0.7; filter: brightness(1); }
          50% { opacity: 1; filter: brightness(1.3); }
          100% { opacity: 0.7; filter: brightness(1); }
        }
        
        @keyframes matrix-scroll {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        .animate-cyber-glitch {
          animation: cyber-glitch 0.3s ease-in-out infinite;
        }
        
        .animate-neon-pulse {
          animation: neon-pulse 2s ease-in-out infinite;
        }
        
        .animate-matrix-scroll {
          animation: matrix-scroll 8s linear infinite;
        }
      `}</style>
    </div>
  );
} 