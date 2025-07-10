import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌊',
    title: 'Ocean Waves',
    description: 'Dynamic marine experiences',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '🐋',
    title: 'Marine Life',
    description: 'Rich ocean biodiversity',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    icon: '⚓',
    title: 'Maritime',
    description: 'Professional sea services',
    color: 'from-teal-500 to-blue-500'
  },
  {
    icon: '🏝️',
    title: 'Island Paradise',
    description: 'Tropical destinations',
    color: 'from-blue-500 to-indigo-500'
  }
];

const testimonials = [
  {
    name: 'Captain Sarah Waters',
    role: 'Marine Biologist',
    avatar: '👩‍🔬',
    text: 'Exploring the depths of the ocean reveals nature\'s most magnificent secrets.',
    rating: 5
  },
  {
    name: 'Mike Ocean',
    role: 'Maritime Captain',
    avatar: '👨‍✈️',
    text: 'The sea calls to those who seek adventure and discovery.',
    rating: 5
  },
  {
    name: 'Dr. Emma Blue',
    role: 'Oceanographer',
    avatar: '👩‍🔬',
    text: 'Every wave tells a story of the ocean\'s endless beauty.',
    rating: 5
  }
];

const stats = [
  { value: '71%', label: 'Ocean' },
  { value: '∞', label: 'Waves' },
  { value: '1000+', label: 'Species' },
  { value: '24/7', label: 'Tides' }
];

const benefits = [
  { icon: '🌊', title: 'Waves', desc: 'Dynamic flow' },
  { icon: '🐋', title: 'Marine', desc: 'Ocean life' },
  { icon: '⚓', title: 'Maritime', desc: 'Sea services' },
  { icon: '🏝️', title: 'Islands', desc: 'Tropical paradise' }
];

export default function HomePageTheme151() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [oceanPulse, setOceanPulse] = useState(0);
  const [waveFlow, setWaveFlow] = useState(0);
  const [marineGlow, setMarineGlow] = useState(0);

  useEffect(() => {
    // Ocean pulse animation
    const pulseInterval = setInterval(() => {
      setOceanPulse(prev => (prev + 1) % 100);
    }, 200);

    // Wave flow animation
    const flowInterval = setInterval(() => {
      setWaveFlow(prev => (prev + 1) % 360);
    }, 300);

    // Marine glow animation
    const glowInterval = setInterval(() => {
      setMarineGlow(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(flowInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 font-sans relative overflow-hidden">
      {/* Ocean Background */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at ${oceanPulse}% ${waveFlow}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${waveFlow}% ${oceanPulse}%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${marineGlow}% ${oceanPulse}%, rgba(20, 184, 166, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(59, 130, 246, 0.05) 50%, transparent 52%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 500px 500px, 200px 200px'
        }}></div>
      </div>

      {/* Wave Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Ocean Elements */}
      <div className="fixed top-20 left-10 text-blue-600 animate-pulse" style={{ 
        opacity: 0.7,
        transform: `translateY(${Math.sin(oceanPulse * 0.1) * 10}px)`
      }}>
        <div className="text-3xl">🌊</div>
      </div>
      <div className="fixed top-40 right-20 text-cyan-600 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.cos(waveFlow * 0.1) * 8}px)`
      }}>
        <div className="text-2xl">🐋</div>
      </div>
      <div className="fixed bottom-40 left-20 text-teal-600 animate-pulse" style={{ 
        opacity: 0.5,
        transform: `translateY(${Math.sin(marineGlow * 0.1) * 12}px)`
      }}>
        <div className="text-2xl">⚓</div>
      </div>
      <div className="fixed bottom-20 right-40 text-indigo-600 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.cos(oceanPulse * 0.1) * 6}px)`
      }}>
        <div className="text-xl">🏝️</div>
      </div>

      {/* Ocean Lines */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.sin(waveFlow * 0.1) * 50}px)`
      }}></div>
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.cos(oceanPulse * 0.1) * 50}px)`
      }}></div>

      {/* Ocean Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.sin(oceanPulse * 0.1 + i) * 100}%`,
              top: `${Math.cos(waveFlow * 0.1 + i) * 100}%`,
              backgroundColor: `hsl(${210 + Math.sin(marineGlow * 0.1 + i) * 60}, 70%, 60%)`,
              opacity: 0.3 + Math.sin(oceanPulse * 0.1 + i) * 0.2,
              transform: `scale(${1 + Math.sin(waveFlow * 0.1 + i) * 0.5})`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-wide" style={{ 
              opacity: 0.95 + Math.sin(oceanPulse * 0.1) * 0.05
            }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">OCEAN</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">MARINE</span>
            </h1>
            <div className="text-lg text-blue-700 font-bold mb-6 tracking-wide" style={{ 
              opacity: 0.8 + Math.sin(waveFlow * 0.1) * 0.1
            }}>
              Discover the Depths of the Sea 🌊
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium" style={{ 
            opacity: 0.9 + Math.sin(marineGlow * 0.1) * 0.05
          }}>
            Explore the <span className="text-blue-600 font-bold">mysteries of the ocean</span> with <span className="text-cyan-600 font-bold">marine adventures</span> and <span className="text-teal-600 font-bold">ocean discoveries</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold tracking-wide rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ 
              boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.4)'
            }}>
              🌊 Explore Ocean
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-cyan-500 text-cyan-600 font-bold tracking-wide rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
              🐋 Marine Life
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
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-3 group-hover:from-cyan-600 group-hover:to-blue-600 transition-all" style={{ 
                    opacity: 0.95 + Math.sin(oceanPulse * 0.1 + index) * 0.05
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-700 text-sm font-bold">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800" style={{ 
            opacity: 0.95 + Math.sin(waveFlow * 0.05) * 0.05
          }}>
            Marine <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl mb-6 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(oceanPulse * 0.1 + index) * 0.1
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-medium">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800" style={{ 
            opacity: 0.95 + Math.sin(marineGlow * 0.05) * 0.05
          }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Ocean</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-2xl mb-4 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(waveFlow * 0.1 + index) * 0.1
                  }}>{benefit.icon}</div>
                  <h3 className="text-base font-bold mb-2 text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-sm font-medium">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800" style={{ 
            opacity: 0.95 + Math.sin(oceanPulse * 0.05) * 0.05
          }}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Marine</span> Experts Say
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-10 border border-blue-200 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="text-center">
              <div className="text-5xl mb-8 animate-pulse" style={{ 
                opacity: 0.8 + Math.sin(waveFlow * 0.1) * 0.1
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-gray-700 mb-8 italic leading-relaxed font-medium" style={{ 
                opacity: 0.9 + Math.sin(marineGlow * 0.1) * 0.05
              }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-bold text-gray-800">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-blue-600 text-sm font-bold">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(oceanPulse * 0.1 + i) * 0.1
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
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                        : 'bg-gray-400 hover:bg-gray-500'
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
          <div className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-lg p-12 border border-blue-200 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800" style={{ 
                opacity: 0.95 + Math.sin(waveFlow * 0.1) * 0.05
              }}>
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Dive</span> Deep?
              </h2>
              <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto font-medium leading-relaxed" style={{ 
                opacity: 0.9 + Math.sin(oceanPulse * 0.1) * 0.05
              }}>
                Begin your journey into the ocean's mysteries and marine adventures
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold tracking-wide rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg" style={{ 
                boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.4)'
              }}>
                🌊 Start Ocean Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse" style={{ 
          boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.4)'
        }}>
          🌊
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes ocean-pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        @keyframes wave-flow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes marine-glow {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        
        .animate-ocean-pulse {
          animation: ocean-pulse 2s ease-in-out infinite;
        }
        
        .animate-wave-flow {
          animation: wave-flow 3s ease-in-out infinite;
        }
        
        .animate-marine-glow {
          animation: marine-glow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 