import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Performa yang cepat dan responsif',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Keamanan tingkat enterprise',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Optimized untuk semua device',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '🚀',
    title: 'Scalable Solution',
    description: 'Solusi yang dapat berkembang',
    color: 'from-orange-500 to-red-500'
  }
];

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'CTO, TechFlow',
    avatar: '⚡',
    text: 'Platform yang benar-benar mengubah cara kami bekerja!',
    rating: 5
  },
  {
    name: 'Maria Santos',
    role: 'Product Manager, InnovateLab',
    avatar: '🚀',
    text: 'Implementasi yang smooth dan hasil yang luar biasa.',
    rating: 5
  },
  {
    name: 'David Kim',
    role: 'Lead Developer, CodeCraft',
    avatar: '🔒',
    text: 'Keamanan dan performa yang tidak ada duanya.',
    rating: 5
  }
];

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '10M+', label: 'Users' },
  { value: '<100ms', label: 'Response Time' },
  { value: '24/7', label: 'Support' }
];

const benefits = [
  { icon: '⚡', title: 'Fast', desc: 'Lightning speed' },
  { icon: '🔒', title: 'Secure', desc: 'Enterprise grade' },
  { icon: '📱', title: 'Mobile', desc: 'Responsive design' },
  { icon: '🚀', title: 'Scalable', desc: 'Future proof' }
];

export default function HomePageTheme144() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [techPulse, setTechPulse] = useState(0);
  const [startupFlow, setStartupFlow] = useState(0);
  const [modernGlow, setModernGlow] = useState(0);

  useEffect(() => {
    // Tech pulse animation
    const pulseInterval = setInterval(() => {
      setTechPulse(prev => (prev + 1) % 100);
    }, 100);

    // Startup flow animation
    const flowInterval = setInterval(() => {
      setStartupFlow(prev => (prev + 1) % 360);
    }, 150);

    // Modern glow animation
    const glowInterval = setInterval(() => {
      setModernGlow(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(flowInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 font-sans relative overflow-hidden">
      {/* Tech Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at ${techPulse}% ${startupFlow}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${startupFlow}% ${techPulse}%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(59, 130, 246, 0.05) 50%, transparent 52%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 200px 200px'
        }}></div>
      </div>

      {/* Tech Grid */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="fixed top-20 left-10 text-blue-400 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.sin(techPulse * 0.1) * 10}px)`
      }}>
        <div className="text-2xl">⚡</div>
      </div>
      <div className="fixed top-40 right-20 text-cyan-400 animate-pulse" style={{ 
        opacity: 0.5,
        transform: `translateY(${Math.cos(startupFlow * 0.1) * 8}px)`
      }}>
        <div className="text-xl">🚀</div>
      </div>
      <div className="fixed bottom-40 left-20 text-green-400 animate-pulse" style={{ 
        opacity: 0.4,
        transform: `translateY(${Math.sin(modernGlow * 0.1) * 12}px)`
      }}>
        <div className="text-xl">🔒</div>
      </div>

      {/* Tech Glow Lines */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.sin(startupFlow * 0.1) * 50}px)`
      }}></div>
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.cos(techPulse * 0.1) * 50}px)`
      }}></div>

      {/* Tech Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.sin(techPulse * 0.1 + i) * 100}%`,
              top: `${Math.cos(startupFlow * 0.1 + i) * 100}%`,
              opacity: 0.3 + Math.sin(modernGlow * 0.1 + i) * 0.2,
              transform: `scale(${1 + Math.sin(techPulse * 0.1 + i) * 0.5})`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{ 
              opacity: 0.95 + Math.sin(techPulse * 0.1) * 0.05
            }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">TECH</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">STARTUP</span>
            </h1>
            <div className="text-lg text-cyan-300 font-medium mb-6 tracking-wide" style={{ 
              opacity: 0.8 + Math.sin(startupFlow * 0.1) * 0.1
            }}>
              Next-Generation Technology Solutions ⚡
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium" style={{ 
            opacity: 0.9 + Math.sin(modernGlow * 0.1) * 0.05
          }}>
            Platform teknologi yang <span className="text-blue-400 font-semibold">menggabungkan inovasi terdepan</span> dan <span className="text-cyan-400 font-semibold">solusi yang scalable</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold tracking-wide rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ 
              boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.4)'
            }}>
              ⚡ Get Started
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold tracking-wide rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              🚀 Learn More
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
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all" style={{ 
                    opacity: 0.95 + Math.sin(techPulse * 0.1 + index) * 0.05
                  }}>
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
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" style={{ 
            opacity: 0.95 + Math.sin(startupFlow * 0.05) * 0.05
          }}>
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl mb-6 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(techPulse * 0.1 + index) * 0.1
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-4 text-white group-hover:text-cyan-300 transition-colors">
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
            opacity: 0.95 + Math.sin(modernGlow * 0.05) * 0.05
          }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Startup</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-2xl mb-4 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(startupFlow * 0.1 + index) * 0.1
                  }}>{benefit.icon}</div>
                  <h3 className="text-base font-semibold mb-2 text-white">
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
            opacity: 0.95 + Math.sin(techPulse * 0.05) * 0.05
          }}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tech</span> Community Says
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-10 border border-slate-700 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="text-center">
              <div className="text-5xl mb-8 animate-pulse" style={{ 
                opacity: 0.8 + Math.sin(startupFlow * 0.1) * 0.1
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-gray-300 mb-8 italic leading-relaxed font-medium" style={{ 
                opacity: 0.9 + Math.sin(modernGlow * 0.1) * 0.05
              }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-semibold text-white">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-cyan-300 text-sm font-medium">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(techPulse * 0.1 + i) * 0.1
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
                        ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                        : 'bg-slate-600 hover:bg-slate-500'
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
          <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-sm rounded-lg p-12 border border-slate-700 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" style={{ 
                opacity: 0.95 + Math.sin(startupFlow * 0.1) * 0.05
              }}>
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Launch</span>?
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed" style={{ 
                opacity: 0.9 + Math.sin(techPulse * 0.1) * 0.05
              }}>
                Bergabunglah dengan revolusi teknologi dan jadilah bagian dari masa depan yang inovatif
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold tracking-wide rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg" style={{ 
                boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.4)'
              }}>
                ⚡ Launch Your Startup
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
          ⚡
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes tech-pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        @keyframes startup-flow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes modern-glow {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        
        .animate-tech-pulse {
          animation: tech-pulse 2s ease-in-out infinite;
        }
        
        .animate-startup-flow {
          animation: startup-flow 3s ease-in-out infinite;
        }
        
        .animate-modern-glow {
          animation: modern-glow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 