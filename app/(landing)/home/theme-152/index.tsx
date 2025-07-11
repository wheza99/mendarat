import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🚀',
    title: 'Space Missions',
    description: 'Advanced spacecraft technology',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '🌌',
    title: 'Galaxy Explorer',
    description: 'Deep space exploration',
    color: 'from-pink-500 to-violet-500'
  },
  {
    icon: '⭐',
    title: 'Stellar Navigation',
    description: 'Precision space travel',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: '🛸',
    title: 'UFO Research',
    description: 'Extraterrestrial studies',
    color: 'from-purple-500 to-indigo-500'
  }
];

const testimonials = [
  {
    name: 'Commander Alex Nova',
    role: 'Space Mission Leader',
    avatar: '👨‍🚀',
    text: 'Exploring the cosmos reveals the infinite possibilities of the universe.',
    rating: 5
  },
  {
    name: 'Dr. Luna Star',
    role: 'Astrophysicist',
    avatar: '👩‍🚀',
    text: 'Every star tells a story of cosmic evolution and stellar formation.',
    rating: 5
  },
  {
    name: 'Captain Orion Blake',
    role: 'Space Navigator',
    avatar: '👨‍🚀',
    text: 'The universe awaits those brave enough to venture beyond Earth.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Universe' },
  { value: '100B+', label: 'Galaxies' },
  { value: '13.8B', label: 'Years Old' },
  { value: '300K+', label: 'km/s Light' }
];

const benefits = [
  { icon: '🚀', title: 'Rockets', desc: 'Space vehicles' },
  { icon: '🌌', title: 'Galaxy', desc: 'Cosmic exploration' },
  { icon: '⭐', title: 'Stars', desc: 'Stellar systems' },
  { icon: '🛸', title: 'UFO', desc: 'Unknown objects' }
];

export default function HomePageTheme152() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stellarPulse, setStellarPulse] = useState(0);
  const [galaxyRotation, setGalaxyRotation] = useState(0);
  const [cosmicGlow, setCosmicGlow] = useState(0);

  useEffect(() => {
    // Stellar pulse animation
    const pulseInterval = setInterval(() => {
      setStellarPulse(prev => (prev + 1) % 100);
    }, 150);

    // Galaxy rotation animation
    const rotationInterval = setInterval(() => {
      setGalaxyRotation(prev => (prev + 1) % 360);
    }, 250);

    // Cosmic glow animation
    const glowInterval = setInterval(() => {
      setCosmicGlow(prev => (prev + 1) % 100);
    }, 350);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(rotationInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 font-sans relative overflow-hidden">
      {/* Space Background */}
      <div className="fixed inset-0 opacity-60">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at ${stellarPulse}% ${galaxyRotation}%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
            radial-gradient(circle at ${galaxyRotation}% ${stellarPulse}%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
            radial-gradient(circle at ${cosmicGlow}% ${stellarPulse}%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(147, 51, 234, 0.1) 50%, transparent 52%)
          `,
          backgroundSize: '600px 600px, 400px 400px, 800px 800px, 300px 300px'
        }}></div>
      </div>

      {/* Star Field */}
      <div className="fixed inset-0 opacity-80">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, #fff, transparent),
            radial-gradient(2px 2px at 40px 70px, #fff, transparent),
            radial-gradient(1px 1px at 90px 40px, #fff, transparent),
            radial-gradient(1px 1px at 130px 80px, #fff, transparent),
            radial-gradient(2px 2px at 160px 30px, #fff, transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px'
        }}></div>
      </div>

      {/* Floating Space Elements */}
      <div className="fixed top-20 left-10 text-purple-400 animate-pulse" style={{ 
        opacity: 0.8,
        transform: `translateY(${Math.sin(stellarPulse * 0.1) * 15}px) rotate(${galaxyRotation * 2}deg)`
      }}>
        <div className="text-4xl">🚀</div>
      </div>
      <div className="fixed top-40 right-20 text-pink-400 animate-pulse" style={{ 
        opacity: 0.7,
        transform: `translateY(${Math.cos(galaxyRotation * 0.1) * 12}px) rotate(${stellarPulse * 1.5}deg)`
      }}>
        <div className="text-3xl">🌌</div>
      </div>
      <div className="fixed bottom-40 left-20 text-violet-400 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.sin(cosmicGlow * 0.1) * 18}px) rotate(${galaxyRotation}deg)`
      }}>
        <div className="text-3xl">⭐</div>
      </div>
      <div className="fixed bottom-20 right-40 text-indigo-400 animate-pulse" style={{ 
        opacity: 0.7,
        transform: `translateY(${Math.cos(stellarPulse * 0.1) * 10}px) rotate(${cosmicGlow * 0.8}deg)`
      }}>
        <div className="text-2xl">🛸</div>
      </div>

      {/* Cosmic Lines */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" style={{
        opacity: 0.7,
        transform: `translateX(${Math.sin(galaxyRotation * 0.1) * 100}px)`
      }}></div>
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" style={{
        opacity: 0.7,
        transform: `translateX(${Math.cos(stellarPulse * 0.1) * 100}px)`
      }}></div>

      {/* Space Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.sin(stellarPulse * 0.1 + i) * 100}%`,
              top: `${Math.cos(galaxyRotation * 0.1 + i) * 100}%`,
              backgroundColor: `hsl(${270 + Math.sin(cosmicGlow * 0.1 + i) * 90}, 80%, 70%)`,
              opacity: 0.4 + Math.sin(stellarPulse * 0.1 + i) * 0.3,
              transform: `scale(${1 + Math.sin(galaxyRotation * 0.1 + i) * 0.8})`,
              boxShadow: `0 0 ${2 + Math.sin(cosmicGlow * 0.1 + i) * 4}px currentColor`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wide" style={{ 
              opacity: 0.95 + Math.sin(stellarPulse * 0.1) * 0.05,
              textShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
            }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">SPACE</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">EXPLORER</span>
            </h1>
            <div className="text-xl text-purple-300 font-bold mb-6 tracking-wide" style={{ 
              opacity: 0.8 + Math.sin(galaxyRotation * 0.1) * 0.1,
              textShadow: '0 0 10px rgba(236, 72, 153, 0.5)'
            }}>
              Journey Beyond the Stars 🚀
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium" style={{ 
            opacity: 0.9 + Math.sin(cosmicGlow * 0.1) * 0.05
          }}>
            Embark on <span className="text-purple-400 font-bold">cosmic adventures</span> through <span className="text-pink-400 font-bold">infinite galaxies</span> and discover <span className="text-violet-400 font-bold">stellar wonders</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold tracking-wide rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ 
              boxShadow: '0 4px 14px 0 rgba(147, 51, 234, 0.4)'
            }}>
              🚀 Launch Mission
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-pink-500 text-pink-400 font-bold tracking-wide rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300">
              🌌 Explore Galaxy
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
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 border border-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 0 20px rgba(147, 51, 234, 0.2)'
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3 group-hover:from-pink-400 group-hover:to-purple-400 transition-all" style={{ 
                    opacity: 0.95 + Math.sin(stellarPulse * 0.1 + index) * 0.05
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
            opacity: 0.95 + Math.sin(galaxyRotation * 0.05) * 0.05,
            textShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
          }}>
            Cosmic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 border border-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 0 20px rgba(147, 51, 234, 0.2)'
                }}>
                  <div className="text-3xl mb-6 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(stellarPulse * 0.1 + index) * 0.1,
                    filter: `drop-shadow(0 0 10px currentColor)`
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
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
            opacity: 0.95 + Math.sin(cosmicGlow * 0.05) * 0.05,
            textShadow: '0 0 20px rgba(236, 72, 153, 0.5)'
          }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">Space</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 0 20px rgba(147, 51, 234, 0.2)'
                }}>
                  <div className="text-2xl mb-4 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(galaxyRotation * 0.1 + index) * 0.1,
                    filter: `drop-shadow(0 0 8px currentColor)`
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
            opacity: 0.95 + Math.sin(stellarPulse * 0.05) * 0.05,
            textShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
          }}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Astronauts</span> Say
          </h2>
          
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-10 border border-purple-600 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 0 20px rgba(147, 51, 234, 0.2)'
          }}>
            <div className="text-center">
              <div className="text-5xl mb-8 animate-pulse" style={{ 
                opacity: 0.8 + Math.sin(galaxyRotation * 0.1) * 0.1,
                filter: `drop-shadow(0 0 15px currentColor)`
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-gray-200 mb-8 italic leading-relaxed font-medium" style={{ 
                opacity: 0.9 + Math.sin(cosmicGlow * 0.1) * 0.05
              }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-bold text-white">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-purple-400 text-sm font-bold">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(stellarPulse * 0.1 + i) * 0.1,
                    filter: `drop-shadow(0 0 5px currentColor)`
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
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
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
          <div className="bg-gradient-to-r from-gray-800/80 to-purple-800/80 backdrop-blur-sm rounded-lg p-12 border border-purple-600 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 0 20px rgba(147, 51, 234, 0.2)'
          }}>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" style={{ 
                opacity: 0.95 + Math.sin(galaxyRotation * 0.1) * 0.05,
                textShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
              }}>
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Launch</span>?
              </h2>
              <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto font-medium leading-relaxed" style={{ 
                opacity: 0.9 + Math.sin(stellarPulse * 0.1) * 0.05
              }}>
                Begin your cosmic journey and explore the infinite mysteries of space
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold tracking-wide rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg" style={{ 
                boxShadow: '0 4px 14px 0 rgba(147, 51, 234, 0.4)'
              }}>
                🚀 Start Space Mission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse" style={{ 
          boxShadow: '0 4px 14px 0 rgba(147, 51, 234, 0.4)',
          filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))'
        }}>
          🚀
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes stellar-pulse {
          0% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.8; transform: scale(1); }
        }
        
        @keyframes galaxy-rotation {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes cosmic-glow {
          0% { opacity: 0.7; filter: brightness(1); }
          50% { opacity: 1; filter: brightness(1.2); }
          100% { opacity: 0.7; filter: brightness(1); }
        }
        
        .animate-stellar-pulse {
          animation: stellar-pulse 2s ease-in-out infinite;
        }
        
        .animate-galaxy-rotation {
          animation: galaxy-rotation 20s linear infinite;
        }
        
        .animate-cosmic-glow {
          animation: cosmic-glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 