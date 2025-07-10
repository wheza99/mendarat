import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌱',
    title: 'Sustainable Growth',
    description: 'Pertumbuhan yang berkelanjutan',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: '🌿',
    title: 'Natural Solutions',
    description: 'Solusi yang alami dan ramah lingkungan',
    color: 'from-emerald-500 to-green-500'
  },
  {
    icon: '🌍',
    title: 'Global Impact',
    description: 'Dampak positif untuk bumi',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: '♻️',
    title: 'Circular Economy',
    description: 'Ekonomi sirkular yang efisien',
    color: 'from-lime-500 to-green-500'
  }
];

const testimonials = [
  {
    name: 'Sarah Green',
    role: 'Environmental Scientist',
    avatar: '🌱',
    text: 'Inisiatif yang benar-benar mengubah cara kita memandang keberlanjutan.',
    rating: 5
  },
  {
    name: 'Michael Eco',
    role: 'Sustainability Director',
    avatar: '🌿',
    text: 'Solusi yang inovatif dan ramah lingkungan.',
    rating: 5
  },
  {
    name: 'Emma Nature',
    role: 'Green Tech Lead',
    avatar: '🌍',
    text: 'Membawa perubahan positif untuk masa depan bumi.',
    rating: 5
  }
];

const stats = [
  { value: '100%', label: 'Sustainable' },
  { value: '50K+', label: 'Trees Planted' },
  { value: '0%', label: 'Carbon Footprint' },
  { value: '24/7', label: 'Eco Support' }
];

const benefits = [
  { icon: '🌱', title: 'Sustainable', desc: 'Ramah lingkungan' },
  { icon: '🌿', title: 'Natural', desc: 'Solusi alami' },
  { icon: '🌍', title: 'Global', desc: 'Dampak global' },
  { icon: '♻️', title: 'Circular', desc: 'Ekonomi sirkular' }
];

export default function HomePageTheme145() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [ecoPulse, setEcoPulse] = useState(0);
  const [greenFlow, setGreenFlow] = useState(0);
  const [natureGlow, setNatureGlow] = useState(0);

  useEffect(() => {
    // Eco pulse animation
    const pulseInterval = setInterval(() => {
      setEcoPulse(prev => (prev + 1) % 100);
    }, 200);

    // Green flow animation
    const flowInterval = setInterval(() => {
      setGreenFlow(prev => (prev + 1) % 360);
    }, 150);

    // Nature glow animation
    const glowInterval = setInterval(() => {
      setNatureGlow(prev => (prev + 1) % 100);
    }, 300);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(flowInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 font-sans relative overflow-hidden">
      {/* Eco Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at ${ecoPulse}% ${greenFlow}%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${greenFlow}% ${ecoPulse}%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${natureGlow}% ${ecoPulse}%, rgba(20, 184, 166, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(34, 197, 94, 0.05) 50%, transparent 52%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 500px 500px, 200px 200px'
        }}></div>
      </div>

      {/* Nature Elements */}
      <div className="fixed top-20 left-10 text-green-400 animate-pulse" style={{ 
        opacity: 0.7,
        transform: `translateY(${Math.sin(ecoPulse * 0.1) * 10}px)`
      }}>
        <div className="text-3xl">🌱</div>
      </div>
      <div className="fixed top-40 right-20 text-emerald-400 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.cos(greenFlow * 0.1) * 8}px)`
      }}>
        <div className="text-2xl">🌿</div>
      </div>
      <div className="fixed bottom-40 left-20 text-teal-400 animate-pulse" style={{ 
        opacity: 0.5,
        transform: `translateY(${Math.sin(natureGlow * 0.1) * 12}px)`
      }}>
        <div className="text-2xl">🌍</div>
      </div>
      <div className="fixed bottom-20 right-40 text-lime-400 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.cos(ecoPulse * 0.1) * 6}px)`
      }}>
        <div className="text-xl">♻️</div>
      </div>

      {/* Eco Flow Lines */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.sin(greenFlow * 0.1) * 50}px)`
      }}></div>
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.cos(ecoPulse * 0.1) * 50}px)`
      }}></div>

      {/* Nature Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.sin(ecoPulse * 0.1 + i) * 100}%`,
              top: `${Math.cos(greenFlow * 0.1 + i) * 100}%`,
              backgroundColor: `hsl(${120 + Math.sin(natureGlow * 0.1 + i) * 30}, 70%, 60%)`,
              opacity: 0.3 + Math.sin(ecoPulse * 0.1 + i) * 0.2,
              transform: `scale(${1 + Math.sin(greenFlow * 0.1 + i) * 0.5})`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6 tracking-wide" style={{ 
              opacity: 0.95 + Math.sin(ecoPulse * 0.1) * 0.05
            }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">ECO</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">GREEN</span>
            </h1>
            <div className="text-lg text-emerald-600 font-semibold mb-6 tracking-wide" style={{ 
              opacity: 0.8 + Math.sin(greenFlow * 0.1) * 0.1
            }}>
              Sustainable Solutions for a Better Future 🌱
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-green-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium" style={{ 
            opacity: 0.9 + Math.sin(natureGlow * 0.1) * 0.05
          }}>
            Platform yang <span className="text-green-600 font-semibold">menggabungkan inovasi ramah lingkungan</span> dan <span className="text-emerald-600 font-semibold">solusi berkelanjutan</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold tracking-wide rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ 
              boxShadow: '0 4px 14px 0 rgba(34, 197, 94, 0.3)'
            }}>
              🌱 Get Started
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-emerald-400 text-emerald-600 font-semibold tracking-wide rounded-full hover:bg-emerald-400 hover:text-white transition-all duration-300">
              🌿 Learn More
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
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-3 group-hover:from-emerald-600 group-hover:to-green-600 transition-all" style={{ 
                    opacity: 0.95 + Math.sin(ecoPulse * 0.1 + index) * 0.05
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-green-700 text-sm font-semibold">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-800" style={{ 
            opacity: 0.95 + Math.sin(greenFlow * 0.05) * 0.05
          }}>
            Eco <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-3xl mb-6 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(ecoPulse * 0.1 + index) * 0.1
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-4 text-green-800 group-hover:text-emerald-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-green-600 leading-relaxed font-medium">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-800" style={{ 
            opacity: 0.95 + Math.sin(natureGlow * 0.05) * 0.05
          }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Green</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="text-2xl mb-4 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(greenFlow * 0.1 + index) * 0.1
                  }}>{benefit.icon}</div>
                  <h3 className="text-base font-semibold mb-2 text-green-800">
                    {benefit.title}
                  </h3>
                  <p className="text-green-600 text-sm font-medium">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-800" style={{ 
            opacity: 0.95 + Math.sin(ecoPulse * 0.05) * 0.05
          }}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Eco</span> Community Says
          </h2>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-10 border border-green-200 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="text-center">
              <div className="text-5xl mb-8 animate-pulse" style={{ 
                opacity: 0.8 + Math.sin(greenFlow * 0.1) * 0.1
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-green-700 mb-8 italic leading-relaxed font-medium" style={{ 
                opacity: 0.9 + Math.sin(natureGlow * 0.1) * 0.05
              }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-semibold text-green-800">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-emerald-600 text-sm font-semibold">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(ecoPulse * 0.1 + i) * 0.1
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
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                        : 'bg-green-300 hover:bg-green-400'
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
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12 border border-green-200 shadow-lg" style={{ 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-green-800" style={{ 
                opacity: 0.95 + Math.sin(greenFlow * 0.1) * 0.05
              }}>
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Go Green</span>?
              </h2>
              <p className="text-lg text-green-700 mb-10 max-w-2xl mx-auto font-medium leading-relaxed" style={{ 
                opacity: 0.9 + Math.sin(ecoPulse * 0.1) * 0.05
              }}>
                Bergabunglah dengan gerakan ramah lingkungan dan jadilah bagian dari solusi untuk masa depan yang lebih baik
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold tracking-wide rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg" style={{ 
                boxShadow: '0 4px 14px 0 rgba(34, 197, 94, 0.3)'
              }}>
                🌱 Start Your Eco Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse" style={{ 
          boxShadow: '0 4px 14px 0 rgba(34, 197, 94, 0.3)'
        }}>
          🌱
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes eco-pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        @keyframes green-flow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes nature-glow {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        
        .animate-eco-pulse {
          animation: eco-pulse 3s ease-in-out infinite;
        }
        
        .animate-green-flow {
          animation: green-flow 4s ease-in-out infinite;
        }
        
        .animate-nature-glow {
          animation: nature-glow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 