import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '📻',
    title: 'Classic Design',
    description: 'Timeless vintage aesthetics',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: '🎵',
    title: 'Retro Vibes',
    description: 'Nostalgic music and culture',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: '📷',
    title: 'Vintage Photography',
    description: 'Classic film and cameras',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: '🚗',
    title: 'Classic Cars',
    description: 'Timeless automotive beauty',
    color: 'from-pink-500 to-amber-500'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Vintage Collector',
    avatar: '👩‍🎨',
    text: 'Brings back the golden era with authentic vintage charm.',
    rating: 5
  },
  {
    name: 'Mike Thompson',
    role: 'Retro Enthusiast',
    avatar: '👨‍🎤',
    text: 'Perfect blend of nostalgia and modern functionality.',
    rating: 5
  },
  {
    name: 'Emma Davis',
    role: 'Classic Designer',
    avatar: '👩‍🎨',
    text: 'Timeless design that never goes out of style.',
    rating: 5
  }
];

const stats = [
  { value: '50+', label: 'Years' },
  { value: '1000+', label: 'Collectors' },
  { value: '∞', label: 'Memories' },
  { value: '24/7', label: 'Classic' }
];

const benefits = [
  { icon: '🎨', title: 'Artistry', desc: 'Handcrafted beauty' },
  { icon: '🎵', title: 'Music', desc: 'Vinyl records' },
  { icon: '📷', title: 'Photography', desc: 'Film cameras' },
  { icon: '🚗', title: 'Automotive', desc: 'Classic cars' }
];

export default function HomePageTheme149() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [retroPulse, setRetroPulse] = useState(0);
  const [vintageFlow, setVintageFlow] = useState(0);
  const [classicGlow, setClassicGlow] = useState(0);

  useEffect(() => {
    // Retro pulse animation
    const pulseInterval = setInterval(() => {
      setRetroPulse(prev => (prev + 1) % 100);
    }, 200);

    // Vintage flow animation
    const flowInterval = setInterval(() => {
      setVintageFlow(prev => (prev + 1) % 360);
    }, 300);

    // Classic glow animation
    const glowInterval = setInterval(() => {
      setClassicGlow(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(flowInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 font-serif relative overflow-hidden">
      {/* Vintage Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at ${retroPulse}% ${vintageFlow}%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${vintageFlow}% ${retroPulse}%, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${classicGlow}% ${retroPulse}%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(245, 158, 11, 0.05) 50%, transparent 52%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 500px 500px, 200px 200px'
        }}></div>
      </div>

      {/* Vintage Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Vintage Elements */}
      <div className="fixed top-20 left-10 text-amber-600 animate-pulse" style={{ 
        opacity: 0.7,
        transform: `translateY(${Math.sin(retroPulse * 0.1) * 10}px)`
      }}>
        <div className="text-3xl">📻</div>
      </div>
      <div className="fixed top-40 right-20 text-orange-600 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.cos(vintageFlow * 0.1) * 8}px)`
      }}>
        <div className="text-2xl">🎵</div>
      </div>
      <div className="fixed bottom-40 left-20 text-red-600 animate-pulse" style={{ 
        opacity: 0.5,
        transform: `translateY(${Math.sin(classicGlow * 0.1) * 12}px)`
      }}>
        <div className="text-2xl">📷</div>
      </div>
      <div className="fixed bottom-20 right-40 text-pink-600 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.cos(retroPulse * 0.1) * 6}px)`
      }}>
        <div className="text-xl">🚗</div>
      </div>

      {/* Vintage Lines */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.sin(vintageFlow * 0.1) * 50}px)`
      }}></div>
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.cos(retroPulse * 0.1) * 50}px)`
      }}></div>

      {/* Vintage Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.sin(retroPulse * 0.1 + i) * 100}%`,
              top: `${Math.cos(vintageFlow * 0.1 + i) * 100}%`,
              backgroundColor: `hsl(${30 + Math.sin(classicGlow * 0.1 + i) * 60}, 70%, 60%)`,
              opacity: 0.3 + Math.sin(retroPulse * 0.1 + i) * 0.2,
              transform: `scale(${1 + Math.sin(vintageFlow * 0.1 + i) * 0.5})`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-wide" style={{ 
              opacity: 0.95 + Math.sin(retroPulse * 0.1) * 0.05
            }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">VINTAGE</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">RETRO</span>
            </h1>
            <div className="text-lg text-amber-700 font-bold mb-6 tracking-wide" style={{ 
              opacity: 0.8 + Math.sin(vintageFlow * 0.1) * 0.1
            }}>
              Timeless Classics Never Die 🎵
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium" style={{ 
            opacity: 0.9 + Math.sin(classicGlow * 0.1) * 0.05
          }}>
            Experience the <span className="text-amber-600 font-bold">golden era</span> with <span className="text-orange-600 font-bold">authentic vintage charm</span> and <span className="text-red-600 font-bold">timeless beauty</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold tracking-wide rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ 
              boxShadow: '0 4px 14px 0 rgba(245, 158, 11, 0.4)'
            }}>
              📻 Explore Vintage
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-orange-500 text-orange-600 font-bold tracking-wide rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
              🎵 Retro Collection
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
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-3 group-hover:from-orange-600 group-hover:to-amber-600 transition-all" style={{ 
                    opacity: 0.95 + Math.sin(retroPulse * 0.1 + index) * 0.05
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
            opacity: 0.95 + Math.sin(vintageFlow * 0.05) * 0.05
          }}>
            Vintage <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl mb-6 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(retroPulse * 0.1 + index) * 0.1
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-4 text-gray-800 group-hover:text-amber-600 transition-colors">
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
            opacity: 0.95 + Math.sin(classicGlow * 0.05) * 0.05
          }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Classic</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-2xl mb-4 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(vintageFlow * 0.1 + index) * 0.1
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
            opacity: 0.95 + Math.sin(retroPulse * 0.05) * 0.05
          }}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Collectors</span> Say
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-10 border border-amber-200 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="text-center">
              <div className="text-5xl mb-8 animate-pulse" style={{ 
                opacity: 0.8 + Math.sin(vintageFlow * 0.1) * 0.1
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-gray-700 mb-8 italic leading-relaxed font-medium" style={{ 
                opacity: 0.9 + Math.sin(classicGlow * 0.1) * 0.05
              }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-bold text-gray-800">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-amber-600 text-sm font-bold">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(retroPulse * 0.1 + i) * 0.1
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
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
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
          <div className="bg-gradient-to-r from-white/80 to-amber-50/80 backdrop-blur-sm rounded-lg p-12 border border-amber-200 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800" style={{ 
                opacity: 0.95 + Math.sin(vintageFlow * 0.1) * 0.05
              }}>
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Collect</span> Memories?
              </h2>
              <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto font-medium leading-relaxed" style={{ 
                opacity: 0.9 + Math.sin(retroPulse * 0.1) * 0.05
              }}>
                Join the community of vintage enthusiasts and collectors
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold tracking-wide rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg" style={{ 
                boxShadow: '0 4px 14px 0 rgba(245, 158, 11, 0.4)'
              }}>
                📻 Start Collecting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse" style={{ 
          boxShadow: '0 4px 14px 0 rgba(245, 158, 11, 0.4)'
        }}>
          📻
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes retro-pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        @keyframes vintage-flow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes classic-glow {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        
        .animate-retro-pulse {
          animation: retro-pulse 2s ease-in-out infinite;
        }
        
        .animate-vintage-flow {
          animation: vintage-flow 3s ease-in-out infinite;
        }
        
        .animate-classic-glow {
          animation: classic-glow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 