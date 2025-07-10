import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '✨',
    title: 'Elegant Design',
    description: 'Desain yang elegan dan timeless',
    color: 'from-gray-400 to-slate-500'
  },
  {
    icon: '🎯',
    title: 'Precision Focus',
    description: 'Fokus yang presisi dan terarah',
    color: 'from-slate-400 to-gray-500'
  },
  {
    icon: '🌟',
    title: 'Quality Craft',
    description: 'Kualitas yang terjamin',
    color: 'from-zinc-400 to-neutral-500'
  },
  {
    icon: '💎',
    title: 'Premium Experience',
    description: 'Pengalaman premium yang unik',
    color: 'from-stone-400 to-gray-500'
  }
];

const testimonials = [
  {
    name: 'Elegant Master',
    role: 'Design Director',
    avatar: '✨',
    text: 'Desain yang benar-benar elegan dan sophisticated!',
    rating: 5
  },
  {
    name: 'Quality Expert',
    role: 'UX Specialist',
    avatar: '🎯',
    text: 'Presisi dan detail yang luar biasa.',
    rating: 5
  },
  {
    name: 'Premium Designer',
    role: 'Creative Lead',
    avatar: '🌟',
    text: 'Membawa elegan ke level berikutnya.',
    rating: 5
  }
];

const stats = [
  { value: '99%', label: 'Satisfaction' },
  { value: '∞', label: 'Quality' },
  { value: '24/7', label: 'Support' },
  { value: '0.1s', label: 'Speed' }
];

const benefits = [
  { icon: '✨', title: 'Elegant', desc: 'Desain elegan' },
  { icon: '🎯', title: 'Precision', desc: 'Fokus presisi' },
  { icon: '🌟', title: 'Quality', desc: 'Kualitas terjamin' },
  { icon: '💎', title: 'Premium', desc: 'Pengalaman premium' }
];

export default function HomePageTheme141() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [elegantFade, setElegantFade] = useState(0);
  const [smoothScroll, setSmoothScroll] = useState(0);

  useEffect(() => {
    // Elegant fade animation
    const fadeInterval = setInterval(() => {
      setElegantFade(prev => (prev + 1) % 100);
    }, 200);

    // Smooth scroll animation
    const scrollInterval = setInterval(() => {
      setSmoothScroll(prev => (prev + 1) % 360);
    }, 150);

    return () => {
      clearInterval(fadeInterval);
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white font-sans relative overflow-hidden">
      {/* Elegant Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at ${elegantFade}% ${smoothScroll}%, rgba(156, 163, 175, 0.05) 0%, transparent 50%),
            radial-gradient(circle at ${smoothScroll}% ${elegantFade}%, rgba(107, 114, 128, 0.05) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(156, 163, 175, 0.02) 50%, transparent 52%)
          `,
          backgroundSize: '500px 500px, 300px 300px, 200px 200px'
        }}></div>
      </div>

      {/* Elegant Lines */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="fixed top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      <div className="fixed top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

      {/* Floating Elegant Elements */}
      <div className="fixed top-20 left-10 text-gray-400 animate-pulse" style={{ 
        opacity: 0.6,
        transform: `translateY(${Math.sin(smoothScroll * 0.1) * 10}px)`
      }}>
        <div className="text-2xl">✨</div>
      </div>
      <div className="fixed top-40 right-20 text-slate-400 animate-pulse" style={{ 
        opacity: 0.5,
        transform: `translateY(${Math.cos(smoothScroll * 0.1) * 8}px)`
      }}>
        <div className="text-xl">🎯</div>
      </div>
      <div className="fixed bottom-40 left-20 text-zinc-400 animate-pulse" style={{ 
        opacity: 0.4,
        transform: `translateY(${Math.sin(smoothScroll * 0.05) * 12}px)`
      }}>
        <div className="text-xl">🌟</div>
      </div>

      {/* Elegant Fade Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to bottom, transparent ${elegantFade}%, rgba(156, 163, 175, 0.02) ${elegantFade}%, transparent ${elegantFade + 1}%)`,
          height: '1px'
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-wide" style={{ 
              opacity: 0.9 + Math.sin(smoothScroll * 0.1) * 0.1
            }}>
              <span className="font-medium">ELEGANT</span>
              <br />
              <span className="font-light">MINIMALIST</span>
            </h1>
            <div className="text-lg text-gray-600 font-light mb-6 tracking-wide" style={{ 
              opacity: 0.8
            }}>
              Timeless Design Philosophy ✨
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light" style={{ 
            opacity: 0.9
          }}>
            Platform digital yang <span className="font-medium text-gray-800">menggabungkan keeleganan desain</span> dan <span className="font-medium text-gray-800">filosofi minimalis</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gray-900 text-white font-light tracking-wide rounded-none hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 shadow-sm" style={{ 
              border: '1px solid #111827'
            }}>
              ✨ Launch Elegant
            </button>
            <button className="px-10 py-4 bg-transparent border border-gray-300 text-gray-700 font-light tracking-wide rounded-none hover:bg-gray-50 hover:border-gray-400 transition-all duration-500">
              🎯 Learn More
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
                <div className="bg-white/60 backdrop-blur-sm rounded-none p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 hover:scale-105" style={{ 
                  borderColor: '#e5e7eb'
                }}>
                  <div className="text-3xl md:text-4xl font-light text-gray-900 mb-3 group-hover:text-gray-700 transition-colors" style={{ 
                    opacity: 0.9
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-light tracking-wide">
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
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-900 tracking-wide" style={{ 
            opacity: 0.9
          }}>
            Elegant <span className="font-medium" style={{ opacity: 0.9 }}>Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/60 backdrop-blur-sm rounded-none p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 hover:scale-105 h-full" style={{ 
                  borderColor: '#e5e7eb'
                }}>
                  <div className="text-3xl mb-6 group-hover:animate-pulse" style={{ 
                    opacity: 0.7,
                    transform: `translateY(${Math.sin(smoothScroll * 0.1 + index) * 5}px)`
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-medium mb-4 text-gray-900 group-hover:text-gray-700 transition-colors tracking-wide" style={{ opacity: 0.9 }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
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
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-900 tracking-wide" style={{ 
            opacity: 0.9
          }}>
            <span className="font-medium" style={{ opacity: 0.9 }}>Minimalist</span> Benefits
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/60 backdrop-blur-sm rounded-none p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 hover:scale-105" style={{ 
                  borderColor: '#e5e7eb'
                }}>
                  <div className="text-3xl mb-4 group-hover:animate-pulse" style={{ 
                    opacity: 0.7,
                    transform: `translateY(${Math.cos(smoothScroll * 0.1 + index) * 3}px)`
                  }}>{benefit.icon}</div>
                  <h3 className="text-base font-medium mb-2 text-gray-900 tracking-wide" style={{ opacity: 0.9 }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-light">
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
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-900 tracking-wide" style={{ 
            opacity: 0.9
          }}>
            What Our <span className="font-medium" style={{ opacity: 0.9 }}>Elegant</span> Community Says
          </h2>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-none p-10 border border-gray-200 shadow-sm" style={{ 
            borderColor: '#e5e7eb'
          }}>
            <div className="text-center">
              <div className="text-5xl mb-8 animate-pulse" style={{ 
                opacity: 0.7,
                transform: `translateY(${Math.sin(smoothScroll * 0.1) * 8}px)`
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-gray-700 mb-8 italic leading-relaxed font-light" style={{ opacity: 0.9 }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-medium text-gray-900 tracking-wide" style={{ opacity: 0.9 }}>
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600 text-sm font-light">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gray-400" style={{ opacity: 0.8 }}>★</span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 transition-all ${
                      index === currentTestimonial 
                        ? 'bg-gray-900' 
                        : 'bg-gray-300 hover:bg-gray-400'
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
          <div className="bg-white/60 backdrop-blur-sm rounded-none p-12 border border-gray-200 shadow-sm relative overflow-hidden" style={{ 
            borderColor: '#e5e7eb'
          }}>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-gray-100/50"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 tracking-wide" style={{ 
                opacity: 0.9
              }}>
                Ready to <span className="font-medium" style={{ opacity: 0.9 }}>Elegantize</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed" style={{ opacity: 0.9 }}>
                Bergabunglah dengan filosofi desain elegan dan jadilah bagian dari era minimalis yang timeless
              </p>
              <button className="px-12 py-6 bg-gray-900 text-white font-light tracking-wide rounded-none hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 shadow-sm text-lg" style={{ 
                border: '1px solid #111827'
              }}>
                ✨ Launch Your Elegant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gray-900 rounded-none flex items-center justify-center text-xl shadow-sm hover:scale-110 transition-all duration-500" style={{ 
          border: '1px solid #111827'
        }}>
          ✨
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes elegant-fade {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
        
        @keyframes smooth-scroll {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-elegant-fade {
          animation: elegant-fade 3s ease-in-out infinite;
        }
        
        .animate-smooth-scroll {
          animation: smooth-scroll 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 