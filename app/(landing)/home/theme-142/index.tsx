import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🎨',
    title: 'Creative Design',
    description: 'Desain yang kreatif dan inovatif',
    color: 'from-pink-400 to-purple-500'
  },
  {
    icon: '🎭',
    title: 'Artistic Expression',
    description: 'Ekspresi artistik yang unik',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: '🎪',
    title: 'Dynamic Performance',
    description: 'Performa yang dinamis dan menarik',
    color: 'from-orange-400 to-red-500'
  },
  {
    icon: '🎯',
    title: 'Creative Focus',
    description: 'Fokus kreatif yang terarah',
    color: 'from-yellow-400 to-orange-500'
  }
];

const testimonials = [
  {
    name: 'Creative Master',
    role: 'Art Director',
    avatar: '🎨',
    text: 'Desain yang benar-benar kreatif dan artistik!',
    rating: 5
  },
  {
    name: 'Artistic Expert',
    role: 'Creative Lead',
    avatar: '🎭',
    text: 'Ekspresi artistik yang luar biasa.',
    rating: 5
  },
  {
    name: 'Dynamic Designer',
    role: 'Visual Artist',
    avatar: '🎪',
    text: 'Membawa kreativitas ke level berikutnya.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Creativity' },
  { value: '100%', label: 'Artistic' },
  { value: '24/7', label: 'Inspiration' },
  { value: '0.1s', label: 'Innovation' }
];

const benefits = [
  { icon: '🎨', title: 'Creative', desc: 'Desain kreatif' },
  { icon: '🎭', title: 'Artistic', desc: 'Ekspresi artistik' },
  { icon: '🎪', title: 'Dynamic', desc: 'Performa dinamis' },
  { icon: '🎯', title: 'Focused', desc: 'Fokus kreatif' }
];

export default function HomePageTheme142() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [artisticRotation, setArtisticRotation] = useState(0);
  const [creativePulse, setCreativePulse] = useState(0);
  const [dynamicFlow, setDynamicFlow] = useState(0);

  useEffect(() => {
    // Artistic rotation animation
    const rotationInterval = setInterval(() => {
      setArtisticRotation(prev => (prev + 2) % 360);
    }, 100);

    // Creative pulse animation
    const pulseInterval = setInterval(() => {
      setCreativePulse(prev => (prev + 1) % 100);
    }, 150);

    // Dynamic flow animation
    const flowInterval = setInterval(() => {
      setDynamicFlow(prev => (prev + 1) % 360);
    }, 200);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(pulseInterval);
      clearInterval(flowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100 font-sans relative overflow-hidden">
      {/* Artistic Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at ${artisticRotation}% ${creativePulse}%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${creativePulse}% ${artisticRotation}%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${dynamicFlow}% ${artisticRotation}%, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(236, 72, 153, 0.05) 50%, transparent 52%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 500px 500px, 200px 200px'
        }}></div>
      </div>

      {/* Artistic Paint Splashes */}
      <div className="fixed top-20 left-10 text-pink-400 animate-bounce" style={{ 
        opacity: 0.7,
        transform: `rotate(${artisticRotation}deg) scale(${1 + Math.sin(creativePulse * 0.1) * 0.2})`
      }}>
        <div className="text-4xl">🎨</div>
      </div>
      <div className="fixed top-40 right-20 text-purple-400 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `rotate(${-artisticRotation}deg) scale(${1 + Math.cos(creativePulse * 0.1) * 0.3})`
      }}>
        <div className="text-3xl">🎭</div>
      </div>
      <div className="fixed bottom-40 left-20 text-orange-400 animate-bounce" style={{ 
        opacity: 0.5,
        transform: `rotate(${artisticRotation * 0.5}deg) scale(${1 + Math.sin(dynamicFlow * 0.1) * 0.2})`
      }}>
        <div className="text-3xl">🎪</div>
      </div>
      <div className="fixed bottom-20 right-40 text-yellow-400 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `rotate(${-artisticRotation * 0.7}deg) scale(${1 + Math.cos(dynamicFlow * 0.1) * 0.3})`
      }}>
        <div className="text-2xl">🎯</div>
      </div>

      {/* Creative Flow Lines */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.sin(dynamicFlow * 0.1) * 50}px)`
      }}></div>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" style={{
        opacity: 0.6,
        transform: `translateX(${Math.cos(dynamicFlow * 0.1) * 50}px)`
      }}></div>

      {/* Artistic Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.sin(artisticRotation * 0.1 + i) * 100}%`,
              top: `${Math.cos(creativePulse * 0.1 + i) * 100}%`,
              backgroundColor: `hsl(${artisticRotation + i * 18}, 70%, 60%)`,
              opacity: 0.3 + Math.sin(dynamicFlow * 0.1 + i) * 0.2,
              transform: `scale(${1 + Math.sin(artisticRotation * 0.1 + i) * 0.5})`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 mb-6" style={{ 
              transform: `rotate(${Math.sin(artisticRotation * 0.1) * 2}deg)`
            }}>
              <span className="animate-pulse">CREATIVE</span>
              <br />
              <span className="animate-bounce">ARTISTIC</span>
            </h1>
            <div className="text-lg text-purple-600 font-semibold mb-6 animate-pulse" style={{ 
              opacity: 0.8 + Math.sin(creativePulse * 0.1) * 0.2
            }}>
              Unleash Your Creative Spirit 🎨
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-purple-700 mb-12 max-w-2xl mx-auto leading-relaxed font-medium" style={{ 
            opacity: 0.9 + Math.sin(dynamicFlow * 0.1) * 0.1
          }}>
            Platform digital yang <span className="text-pink-600 font-bold">menggabungkan kreativitas artistik</span> dan <span className="text-orange-600 font-bold">ekspresi yang dinamis</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold tracking-wide rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl" style={{ 
              transform: `rotate(${Math.sin(artisticRotation * 0.1) * 1}deg)`
            }}>
              🎨 Launch Creative
            </button>
            <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold tracking-wide rounded-full hover:from-orange-600 hover:to-yellow-600 transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl">
              🎭 Explore Art
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
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-2 border-pink-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110" style={{ 
                  transform: `rotate(${Math.sin(artisticRotation * 0.1 + index) * 2}deg)`
                }}>
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-3 group-hover:from-purple-600 group-hover:to-pink-600 transition-all" style={{ 
                    opacity: 0.9 + Math.sin(creativePulse * 0.1 + index) * 0.1
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-purple-700 text-sm font-semibold">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600" style={{ 
            transform: `rotate(${Math.sin(artisticRotation * 0.05) * 1}deg)`
          }}>
            Creative <span className="animate-pulse">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 h-full" style={{ 
                  transform: `rotate(${Math.sin(artisticRotation * 0.1 + index) * 3}deg)`
                }}>
                  <div className="text-4xl mb-6 group-hover:animate-bounce" style={{ 
                    opacity: 0.8 + Math.sin(creativePulse * 0.1 + index) * 0.2,
                    transform: `scale(${1 + Math.sin(dynamicFlow * 0.1 + index) * 0.1})`
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-4 text-purple-800 group-hover:text-pink-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-purple-600 leading-relaxed font-medium">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600" style={{ 
            transform: `rotate(${Math.sin(artisticRotation * 0.05) * 1}deg)`
          }}>
            <span className="animate-bounce">Artistic</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110" style={{ 
                  transform: `rotate(${Math.sin(artisticRotation * 0.1 + index) * 2}deg)`
                }}>
                  <div className="text-3xl mb-4 group-hover:animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(creativePulse * 0.1 + index) * 0.2,
                    transform: `scale(${1 + Math.cos(dynamicFlow * 0.1 + index) * 0.1})`
                  }}>{benefit.icon}</div>
                  <h3 className="text-base font-bold mb-2 text-orange-800">
                    {benefit.title}
                  </h3>
                  <p className="text-orange-600 text-sm font-medium">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600" style={{ 
            transform: `rotate(${Math.sin(artisticRotation * 0.05) * 1}deg)`
          }}>
            What Our <span className="animate-pulse">Creative</span> Community Says
          </h2>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-10 border-2 border-pink-200 shadow-lg" style={{ 
            transform: `rotate(${Math.sin(artisticRotation * 0.02) * 1}deg)`
          }}>
            <div className="text-center">
              <div className="text-6xl mb-8 animate-bounce" style={{ 
                opacity: 0.8 + Math.sin(creativePulse * 0.1) * 0.2,
                transform: `scale(${1 + Math.sin(dynamicFlow * 0.1) * 0.1})`
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-purple-700 mb-8 italic leading-relaxed font-semibold" style={{ 
                opacity: 0.9 + Math.sin(artisticRotation * 0.1) * 0.1
              }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-bold text-purple-800">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-purple-600 text-sm font-semibold">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl animate-pulse" style={{ 
                    opacity: 0.8 + Math.sin(creativePulse * 0.1 + i) * 0.2
                  }}>★</span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600' 
                        : 'bg-purple-300 hover:bg-purple-400'
                    }`}
                    style={{ 
                      opacity: index === currentTestimonial ? 0.9 : 0.6,
                      transform: `scale(${index === currentTestimonial ? 1.2 : 1})`
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
          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-orange-100 rounded-2xl p-12 border-2 border-pink-200 shadow-lg relative overflow-hidden" style={{ 
            transform: `rotate(${Math.sin(artisticRotation * 0.02) * 1}deg)`
          }}>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 via-purple-200/30 to-orange-200/30"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600" style={{ 
                opacity: 0.9 + Math.sin(creativePulse * 0.1) * 0.1
              }}>
                Ready to <span className="animate-bounce">Create</span>?
              </h2>
              <p className="text-lg text-purple-700 mb-10 max-w-2xl mx-auto font-semibold leading-relaxed" style={{ 
                opacity: 0.9 + Math.sin(dynamicFlow * 0.1) * 0.1
              }}>
                Bergabunglah dengan komunitas kreatif dan jadilah bagian dari revolusi artistik yang dinamis
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500 text-white font-bold tracking-wide rounded-full hover:from-pink-600 hover:via-purple-700 hover:to-orange-600 transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl text-lg" style={{ 
                transform: `rotate(${Math.sin(artisticRotation * 0.1) * 2}deg)`
              }}>
                🎨 Launch Your Creative
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500 animate-bounce" style={{ 
          transform: `rotate(${Math.sin(artisticRotation * 0.1) * 5}deg)`
        }}>
          🎨
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes artistic-rotation {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes creative-pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        @keyframes dynamic-flow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-artistic-rotation {
          animation: artistic-rotation 10s linear infinite;
        }
        
        .animate-creative-pulse {
          animation: creative-pulse 3s ease-in-out infinite;
        }
        
        .animate-dynamic-flow {
          animation: dynamic-flow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 