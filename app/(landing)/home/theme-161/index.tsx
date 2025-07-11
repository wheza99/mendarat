import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🚀',
    title: 'Space Missions',
    description: 'Journey to the stars',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: '🌌',
    title: 'Deep Space',
    description: 'Explore the cosmos',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '🪐',
    title: 'Distant Planets',
    description: 'Discover new worlds',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: '⭐',
    title: 'Stellar Objects',
    description: 'Celestial wonders',
    color: 'from-yellow-500 to-orange-500'
  }
];

const testimonials = [
  {
    name: 'Captain Nova',
    role: 'Space Explorer',
    avatar: '🚀',
    text: 'The universe is vast and beautiful. Every mission reveals new wonders.',
    rating: 5
  },
  {
    name: 'Dr. Cosmos',
    role: 'Astrophysicist',
    avatar: '🌌',
    text: 'Space exploration pushes the boundaries of human knowledge and imagination.',
    rating: 5
  },
  {
    name: 'Commander Star',
    role: 'Mission Control',
    avatar: '🪐',
    text: 'From Earth to the stars, we are the pioneers of tomorrow.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Light Years' },
  { value: '1000+', label: 'Galaxies' },
  { value: '100%', label: 'Exploration' },
  { value: '24/7', label: 'Discovery' }
];

const services = [
  { icon: '🛰️', title: 'Satellite Missions', desc: 'Orbital exploration' },
  { icon: '👨‍🚀', title: 'Astronaut Training', desc: 'Space preparation' },
  { icon: '🔭', title: 'Telescope Views', desc: 'Deep space observation' },
  { icon: '🌍', title: 'Planetary Studies', desc: 'World exploration' }
];

export default function HomePageTheme161() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [starField, setStarField] = useState(0);
  const [planetOrbit, setPlanetOrbit] = useState(0);
  const [nebulaGlow, setNebulaGlow] = useState(0);

  useEffect(() => {
    // Star field animation
    const starInterval = setInterval(() => {
      setStarField(prev => (prev + 1) % 100);
    }, 100);

    // Planet orbit animation
    const planetInterval = setInterval(() => {
      setPlanetOrbit(prev => (prev + 1) % 100);
    }, 150);

    // Nebula glow effect
    const nebulaInterval = setInterval(() => {
      setNebulaGlow(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(starInterval);
      clearInterval(planetInterval);
      clearInterval(nebulaInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-indigo-900 font-mono relative overflow-hidden">
      {/* Space Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/90 via-blue-900/60 to-indigo-900/80">
        {/* Star field */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 100 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                opacity: 0.3 + Math.random() * 0.7,
                animationDuration: `${2 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 2}s`,
                animationIterationCount: 'infinite',
                animationName: 'twinkle',
                transform: `translateY(${Math.sin(starField * 0.02 + i) * 20}px) translateX(${Math.cos(nebulaGlow * 0.02 + i) * 15}px)`
              }}
            />
          ))}
        </div>

        {/* Nebula clouds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl" style={{
            transform: `scale(${1 + Math.sin(nebulaGlow * 0.02) * 0.3}) rotate(${planetOrbit * 0.5}deg)`,
            filter: 'blur(40px)'
          }}></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl" style={{
            transform: `scale(${1 + Math.cos(starField * 0.02) * 0.2}) rotate(${nebulaGlow * 0.3}deg)`,
            filter: 'blur(30px)'
          }}></div>
          <div className="absolute bottom-40 left-1/3 w-56 h-56 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl" style={{
            transform: `scale(${1 + Math.sin(planetOrbit * 0.02) * 0.25}) rotate(${starField * 0.4}deg)`,
            filter: 'blur(35px)'
          }}></div>
        </div>

        {/* Floating space elements */}
        <div className="absolute top-20 left-10 animate-pulse" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(starField * 0.02) * 25}px) rotate(${nebulaGlow * 0.5}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))'
        }}>
          <div className="text-4xl">🚀</div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(planetOrbit * 0.02) * 20}px) rotate(${starField * 0.3}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.8))'
        }}>
          <div className="text-3xl">🌌</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-pulse" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(nebulaGlow * 0.02) * 18}px) rotate(${planetOrbit * 0.2}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.8))'
        }}>
          <div className="text-3xl">🪐</div>
        </div>
        <div className="absolute bottom-60 right-1/3 animate-bounce" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(starField * 0.02) * 15}px) rotate(${nebulaGlow * 0.4}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.8))'
        }}>
          <div className="text-3xl">⭐</div>
        </div>

        {/* Cosmic light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-blue-500 via-transparent to-indigo-500 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.sin(starField * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-purple-500 via-transparent to-pink-500 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.cos(nebulaGlow * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>

        {/* Shooting stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin(planetOrbit * 0.02 + i) * 100}vh) translateX(${Math.sin(starField * 0.02 + i) * 50}px)`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.6 + Math.random() * 0.4,
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
                animationDelay: `${i * 0.5}s`,
                animationIterationCount: 'infinite',
                animationName: 'shootingStar'
              }}
            />
          ))}
        </div>

        {/* Orbiting planets */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${30 + i * 20}%`,
                top: `${20 + i * 15}%`,
                width: `${20 + i * 10}px`,
                height: `${20 + i * 10}px`,
                background: `radial-gradient(circle, ${['#3B82F6', '#8B5CF6', '#F59E0B'][i]} 0%, ${['#1E40AF', '#6D28D9', '#D97706'][i]} 100%)`,
                transform: `rotate(${planetOrbit * (2 + i)}deg) translateX(${50 + i * 20}px)`,
                boxShadow: `0 0 20px ${['rgba(59, 130, 246, 0.6)', 'rgba(147, 51, 234, 0.6)', 'rgba(245, 158, 11, 0.6)'][i]}`,
                animationDuration: `${10 + i * 5}s`,
                animationIterationCount: 'infinite',
                animationName: 'orbit'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4" style={{
              textShadow: '0 4px 8px rgba(59, 130, 246, 0.4)',
              filter: `drop-shadow(0 0 10px rgba(59, 130, 246, ${0.4 + Math.sin(starField * 0.02) * 0.2}))`
            }}>
              SPACE EXPLORATION
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 font-mono" style={{
              textShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
            }}>
              Journey to the stars and beyond
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.5)'
            }}>
              LAUNCH MISSION
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(147, 51, 234, 0.5)'
            }}>
              EXPLORE SPACE
            </button>
          </div>
        </header>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-12" style={{
            textShadow: '0 2px 4px rgba(59, 130, 246, 0.4)'
          }}>
            MISSION FEATURES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 rounded-xl shadow-lg backdrop-blur-sm border border-blue-500/50" style={{
                transform: `rotate(${Math.sin(starField * 0.02 + index) * 1}deg)`,
                boxShadow: `0 8px 25px rgba(59, 130, 246, 0.4)`
              }}>
                <div className="text-5xl mb-4" style={{
                  filter: `drop-shadow(0 0 10px rgba(59, 130, 246, ${0.6 + Math.sin(nebulaGlow * 0.02) * 0.3}))`
                }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-300 mb-2">{feature.title}</h3>
                <p className="text-blue-200 font-mono">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-900/60 to-indigo-900/60 rounded-xl shadow-lg backdrop-blur-sm border border-blue-400/50" style={{
                transform: `scale(${1 + Math.sin(nebulaGlow * 0.02 + index) * 0.05})`,
                boxShadow: `0 8px 25px rgba(59, 130, 246, 0.5)`
              }}>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2" style={{
                  textShadow: '0 2px 4px rgba(59, 130, 246, 0.4)'
                }}>
                  {stat.value}
                </div>
                <div className="text-blue-200 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-12" style={{
            textShadow: '0 2px 4px rgba(59, 130, 246, 0.4)'
          }}>
            MISSION VOICES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 rounded-xl shadow-lg backdrop-blur-sm border border-blue-500/50" style={{
                transform: `rotate(${Math.sin(planetOrbit * 0.02 + index) * 0.5}deg)`,
                boxShadow: `0 8px 25px rgba(59, 130, 246, 0.4)`
              }}>
                <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                <p className="text-blue-200 font-mono italic mb-4">"{testimonial.text}"</p>
                <div className="text-center">
                  <div className="font-bold text-blue-300">{testimonial.name}</div>
                  <div className="text-blue-200 font-mono">{testimonial.role}</div>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-blue-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-12" style={{
            textShadow: '0 2px 4px rgba(59, 130, 246, 0.4)'
          }}>
            SPACE SERVICES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-900/60 to-indigo-900/60 rounded-xl shadow-lg backdrop-blur-sm border border-blue-400/50 hover:from-blue-800/80 hover:to-indigo-800/80 transition-all duration-300" style={{
                transform: `scale(${1 + Math.sin(starField * 0.02 + index) * 0.02})`,
                boxShadow: `0 8px 25px rgba(59, 130, 246, 0.5)`
              }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-blue-300 mb-2">{service.title}</h3>
                <p className="text-blue-200 font-mono text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="p-12 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 rounded-2xl shadow-2xl backdrop-blur-sm border border-blue-500/50" style={{
            boxShadow: '0 15px 35px rgba(59, 130, 246, 0.5)'
          }}>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6" style={{
              textShadow: '0 2px 4px rgba(59, 130, 246, 0.4)'
            }}>
              BEGIN EXPLORATION
            </h2>
            <p className="text-xl text-blue-200 font-mono mb-8">
              Discover the wonders of the universe
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xl font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 8px 25px rgba(59, 130, 246, 0.6)'
            }}>
              LAUNCH NOW
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-mono">Space Exploration Missions</span>
            <span className="text-2xl">🌌</span>
          </div>
          <p className="text-blue-200 font-mono">
            Exploring the final frontier
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes shootingStar {
          0% { transform: translateX(-100px) translateY(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 100px)) translateY(-100px); opacity: 0; }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
} 