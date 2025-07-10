import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '💎',
    title: 'Premium Quality',
    description: 'Kualitas premium yang tak tertandingi',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: '👑',
    title: 'Exclusive Access',
    description: 'Akses eksklusif untuk member VIP',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: '✨',
    title: 'Luxury Experience',
    description: 'Pengalaman mewah yang unik',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: '🌟',
    title: 'Elite Service',
    description: 'Layanan elite yang personalized',
    color: 'from-red-500 to-pink-500'
  }
];

const testimonials = [
  {
    name: 'Victoria Royal',
    role: 'CEO, Luxury Holdings',
    avatar: '💎',
    text: 'Pengalaman yang benar-benar premium dan eksklusif!',
    rating: 5
  },
  {
    name: 'Alexander Noble',
    role: 'Director, Elite Group',
    avatar: '👑',
    text: 'Layanan yang setara dengan standar internasional.',
    rating: 5
  },
  {
    name: 'Isabella Grace',
    role: 'VP Luxury Brands',
    avatar: '✨',
    text: 'Membawa kemewahan ke level yang belum pernah ada.',
    rating: 5
  }
];

const stats = [
  { value: '99.9%', label: 'Satisfaction' },
  { value: 'VIP', label: 'Members Only' },
  { value: '24/7', label: 'Concierge' },
  { value: '∞', label: 'Luxury' }
];

const benefits = [
  { icon: '💎', title: 'Premium', desc: 'Kualitas terbaik' },
  { icon: '👑', title: 'Exclusive', desc: 'Akses VIP' },
  { icon: '✨', title: 'Luxury', desc: 'Pengalaman mewah' },
  { icon: '🌟', title: 'Elite', desc: 'Layanan elite' }
];

export default function HomePageTheme146() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [luxuryGlow, setLuxuryGlow] = useState(0);
  const [premiumFlow, setPremiumFlow] = useState(0);
  const [elitePulse, setElitePulse] = useState(0);

  useEffect(() => {
    // Luxury glow animation
    const glowInterval = setInterval(() => {
      setLuxuryGlow(prev => (prev + 1) % 100);
    }, 200);

    // Premium flow animation
    const flowInterval = setInterval(() => {
      setPremiumFlow(prev => (prev + 1) % 360);
    }, 150);

    // Elite pulse animation
    const pulseInterval = setInterval(() => {
      setElitePulse(prev => (prev + 1) % 100);
    }, 300);

    return () => {
      clearInterval(glowInterval);
      clearInterval(flowInterval);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black font-sans relative overflow-hidden">
      {/* Luxury Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at ${luxuryGlow}% ${premiumFlow}%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${premiumFlow}% ${luxuryGlow}%, rgba(234, 179, 8, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${elitePulse}% ${luxuryGlow}%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(245, 158, 11, 0.05) 50%, transparent 52%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 500px 500px, 200px 200px'
        }}></div>
      </div>

      {/* Luxury Grid */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating Luxury Elements */}
      <div className="fixed top-20 left-10 text-amber-400 animate-pulse" style={{ 
        opacity: 0.7,
        transform: `translateY(${Math.sin(luxuryGlow * 0.1) * 10}px)`
      }}>
        <div className="text-3xl">💎</div>
      </div>
      <div className="fixed top-40 right-20 text-yellow-400 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.cos(premiumFlow * 0.1) * 8}px)`
      }}>
        <div className="text-2xl">👑</div>
      </div>
      <div className="fixed bottom-40 left-20 text-orange-400 animate-pulse" style={{ 
        opacity: 0.5,
        transform: `translateY(${Math.sin(elitePulse * 0.1) * 12}px)`
      }}>
        <div className="text-2xl">✨</div>
      </div>
      <div className="fixed bottom-20 right-40 text-red-400 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.cos(luxuryGlow * 0.1) * 6}px)`
      }}>
        <div className="text-xl">🌟</div>
      </div>

      {/* Luxury Glow Lines */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.sin(premiumFlow * 0.1) * 50}px)`
      }}></div>
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.cos(luxuryGlow * 0.1) * 50}px)`
      }}></div>

      {/* Luxury Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              left: `${Math.sin(luxuryGlow * 0.1 + i) * 100}%`,
              top: `${Math.cos(premiumFlow * 0.1 + i) * 100}%`,
              opacity: 0.3 + Math.sin(elitePulse * 0.1 + i) * 0.2,
              transform: `scale(${1 + Math.sin(luxuryGlow * 0.1 + i) * 0.5})`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide" style={{ 
              opacity: 0.95 + Math.sin(luxuryGlow * 0.1) * 0.05
            }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">LUXURY</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">PREMIUM</span>
            </h1>
            <div className="text-lg text-amber-300 font-semibold mb-6 tracking-wide" style={{ 
              opacity: 0.8 + Math.sin(premiumFlow * 0.1) * 0.1
            }}>
              Exclusive Experience for Elite Members 💎
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium" style={{ 
            opacity: 0.9 + Math.sin(elitePulse * 0.1) * 0.05
          }}>
            Platform eksklusif yang <span className="text-amber-400 font-semibold">menggabungkan kemewahan premium</span> dan <span className="text-yellow-400 font-semibold">pengalaman elite</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold tracking-wide rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ 
              boxShadow: '0 4px 14px 0 rgba(245, 158, 11, 0.4)'
            }}>
              💎 Join Elite
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-amber-400 text-amber-400 font-bold tracking-wide rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300">
              👑 Learn More
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
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-8 border border-amber-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 mb-3 group-hover:from-yellow-400 group-hover:to-amber-400 transition-all" style={{ 
                    opacity: 0.95 + Math.sin(luxuryGlow * 0.1 + index) * 0.05
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-semibold">
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
            opacity: 0.95 + Math.sin(premiumFlow * 0.05) * 0.05
          }}>
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-8 border border-amber-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl mb-6 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(luxuryGlow * 0.1 + index) * 0.1
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-4 text-white group-hover:text-amber-300 transition-colors">
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
            opacity: 0.95 + Math.sin(elitePulse * 0.05) * 0.05
          }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Elite</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-amber-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-2xl mb-4 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(premiumFlow * 0.1 + index) * 0.1
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
            opacity: 0.95 + Math.sin(luxuryGlow * 0.05) * 0.05
          }}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Elite</span> Members Say
          </h2>
          
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-10 border border-amber-500/30 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="text-center">
              <div className="text-5xl mb-8 animate-pulse" style={{ 
                opacity: 0.8 + Math.sin(premiumFlow * 0.1) * 0.1
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-gray-300 mb-8 italic leading-relaxed font-medium" style={{ 
                opacity: 0.9 + Math.sin(elitePulse * 0.1) * 0.05
              }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-semibold text-white">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-amber-300 text-sm font-semibold">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(luxuryGlow * 0.1 + i) * 0.1
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
                        ? 'bg-gradient-to-r from-amber-400 to-yellow-400' 
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
          <div className="bg-gradient-to-r from-gray-900/70 to-black/70 backdrop-blur-sm rounded-lg p-12 border border-amber-500/30 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" style={{ 
                opacity: 0.95 + Math.sin(premiumFlow * 0.1) * 0.05
              }}>
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Join Elite</span>?
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed" style={{ 
                opacity: 0.9 + Math.sin(luxuryGlow * 0.1) * 0.05
              }}>
                Bergabunglah dengan komunitas eksklusif dan nikmati pengalaman premium yang tak tertandingi
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold tracking-wide rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg" style={{ 
                boxShadow: '0 4px 14px 0 rgba(245, 158, 11, 0.4)'
              }}>
                💎 Join Elite Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse" style={{ 
          boxShadow: '0 4px 14px 0 rgba(245, 158, 11, 0.4)'
        }}>
          💎
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes luxury-glow {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        @keyframes premium-flow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes elite-pulse {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        
        .animate-luxury-glow {
          animation: luxury-glow 3s ease-in-out infinite;
        }
        
        .animate-premium-flow {
          animation: premium-flow 4s ease-in-out infinite;
        }
        
        .animate-elite-pulse {
          animation: elite-pulse 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 