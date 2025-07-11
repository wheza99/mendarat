import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🏜️',
    title: 'Desert Sands',
    description: 'Golden dunes stretching to the horizon',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: '🌴',
    title: 'Oasis Life',
    description: 'Lush palm trees and cool waters',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: '🏺',
    title: 'Ancient Wisdom',
    description: 'Timeless traditions and knowledge',
    color: 'from-yellow-600 to-amber-600'
  },
  {
    icon: '🐪',
    title: 'Desert Caravans',
    description: 'Journey through the vast sands',
    color: 'from-orange-600 to-red-600'
  }
];

const testimonials = [
  {
    name: 'Sheikh Al-Rashid',
    role: 'Desert Guide',
    avatar: '🧕',
    text: 'In the vastness of the desert, we find the true meaning of adventure and discovery.',
    rating: 5
  },
  {
    name: 'Fatima Oasis',
    role: 'Oasis Keeper',
    avatar: '👳‍♀️',
    text: 'The desert teaches us patience, and the oasis rewards us with life and beauty.',
    rating: 5
  },
  {
    name: 'Ahmed Caravan',
    role: 'Desert Explorer',
    avatar: '🏺',
    text: 'Every grain of sand tells a story of ancient civilizations and timeless wisdom.',
    rating: 5
  }
];

const stats = [
  { value: '1000+', label: 'Years of History' },
  { value: '∞', label: 'Desert Miles' },
  { value: '100%', label: 'Natural Beauty' },
  { value: '24/7', label: 'Adventure' }
];

const services = [
  { icon: '🗺️', title: 'Desert Tours', desc: 'Guided expeditions' },
  { icon: '🏕️', title: 'Oasis Camping', desc: 'Desert accommodations' },
  { icon: '📸', title: 'Photography', desc: 'Capture the beauty' },
  { icon: '🧭', title: 'Navigation', desc: 'Desert survival skills' }
];

export default function HomePageTheme158() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [sandDrift, setSandDrift] = useState(0);
  const [palmSway, setPalmSway] = useState(0);
  const [oasisGlow, setOasisGlow] = useState(0);

  useEffect(() => {
    // Sand drift animation
    const sandInterval = setInterval(() => {
      setSandDrift(prev => (prev + 1) % 100);
    }, 150);

    // Palm tree swaying
    const palmInterval = setInterval(() => {
      setPalmSway(prev => (prev + 1) % 100);
    }, 200);

    // Oasis glow effect
    const glowInterval = setInterval(() => {
      setOasisGlow(prev => (prev + 1) % 100);
    }, 300);

    return () => {
      clearInterval(sandInterval);
      clearInterval(palmInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-orange-200 to-yellow-800 font-serif relative overflow-hidden">
      {/* Desert Oasis Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-amber-200/40 via-orange-300/50 to-yellow-900/70">
        {/* Sand dunes */}
        <div className="absolute bottom-0 left-0 w-full h-64">
          <svg className="w-full h-full" viewBox="0 0 1200 300" fill="none">
            {/* Sand dune curves */}
            <path
              d={`M0 300 Q200 ${250 - Math.sin(sandDrift * 0.02) * 20} 400 300 T800 ${250 + Math.cos(sandDrift * 0.02) * 15} T1200 300`}
              fill="url(#sandGradient)"
              opacity="0.8"
            />
            <path
              d={`M0 300 Q300 ${270 - Math.sin(sandDrift * 0.03) * 25} 600 300 T900 ${270 + Math.cos(sandDrift * 0.03) * 20} T1200 300`}
              fill="url(#sandGradient2)"
              opacity="0.6"
            />
            <path
              d={`M0 300 Q400 ${280 - Math.sin(sandDrift * 0.04) * 30} 800 300 T1000 ${280 + Math.cos(sandDrift * 0.04) * 25} T1200 300`}
              fill="url(#sandGradient3)"
              opacity="0.4"
            />
            
            <defs>
              <linearGradient id="sandGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="sandGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="sandGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Animated sand particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 40 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-200/60"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                top: `-${Math.random() * 20}px`,
                transform: `translateY(${Math.sin(sandDrift * 0.1 + i) * 50 - 100}vh) translateX(${Math.sin(oasisGlow * 0.1 + i) * 30}px)`,
                animationDuration: `${5 + Math.random() * 3}s`,
                opacity: 0.4 + Math.random() * 0.4,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>

        {/* Palm trees */}
        <div className="absolute bottom-0 left-0 w-full h-80">
          <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
            {/* Palm tree trunks */}
            <rect x="200" y="200" width="20" height="200" fill="#8B4513" />
            <rect x="600" y="180" width="20" height="220" fill="#A0522D" />
            <rect x="900" y="220" width="20" height="180" fill="#8B4513" />
            
            {/* Palm fronds */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${210 + i * 2} 200 Q${210 + i * 2 + Math.sin(palmSway * 0.02 + i) * 10} ${180 - Math.cos(oasisGlow * 0.02 + i) * 15} ${210 + i * 2 + Math.sin(palmSway * 0.02 + i) * 8} 160`}
                  stroke="#228B22"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d={`M${610 + i * 2} 180 Q${610 + i * 2 + Math.sin(palmSway * 0.03 + i) * 12} ${160 - Math.cos(oasisGlow * 0.03 + i) * 18} ${610 + i * 2 + Math.sin(palmSway * 0.03 + i) * 10} 140`}
                  stroke="#32CD32"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.7"
                />
                <path
                  d={`M${910 + i * 2} 220 Q${910 + i * 2 + Math.sin(palmSway * 0.025 + i) * 9} ${200 - Math.cos(oasisGlow * 0.025 + i) * 12} ${910 + i * 2 + Math.sin(palmSway * 0.025 + i) * 7} 180`}
                  stroke="#228B22"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.8"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Oasis water reflection */}
        <div className="absolute bottom-20 left-1/4 w-64 h-32 bg-gradient-to-b from-blue-400/60 to-blue-600/40 rounded-full blur-sm" style={{
          transform: `scale(${1 + Math.sin(oasisGlow * 0.02) * 0.1})`,
          filter: 'blur(3px)'
        }}></div>

        {/* Floating desert elements */}
        <div className="absolute top-20 left-10 animate-pulse" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(sandDrift * 0.02) * 25}px) rotate(${oasisGlow * 0.5}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.6))'
        }}>
          <div className="text-4xl">🏜️</div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(palmSway * 0.02) * 20}px) rotate(${sandDrift * 0.3}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(34, 139, 34, 0.6))'
        }}>
          <div className="text-3xl">🌴</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-pulse" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(oasisGlow * 0.02) * 18}px) rotate(${palmSway * 0.2}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(184, 134, 11, 0.6))'
        }}>
          <div className="text-3xl">🏺</div>
        </div>
        <div className="absolute bottom-60 right-1/3 animate-bounce" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(sandDrift * 0.02) * 15}px) rotate(${oasisGlow * 0.4}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.6))'
        }}>
          <div className="text-3xl">🐪</div>
        </div>

        {/* Desert heat waves */}
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                transform: `translateX(${Math.sin(sandDrift * 0.02 + i) * 100}px)`,
                opacity: 0.3 + Math.sin(oasisGlow * 0.02 + i) * 0.2,
                filter: 'blur(2px)'
              }}
            />
          ))}
        </div>

        {/* Desert mirage effect */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-b from-blue-400/20 via-blue-500/10 to-transparent rounded-full blur-lg" style={{
          transform: `translateX(${Math.sin(sandDrift * 0.02) * 50}px) scale(${1 + Math.sin(oasisGlow * 0.02) * 0.2})`,
          filter: 'blur(8px)'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-amber-800 mb-4" style={{
              textShadow: '0 4px 8px rgba(184, 134, 11, 0.3)',
              filter: `drop-shadow(0 0 10px rgba(245, 158, 11, ${0.3 + Math.sin(oasisGlow * 0.02) * 0.2}))`
            }}>
              Desert Oasis
            </h1>
            <p className="text-xl md:text-2xl text-amber-700 font-serif italic" style={{
              textShadow: '0 2px 4px rgba(184, 134, 11, 0.2)'
            }}>
              Where golden sands meet life-giving waters
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-lg shadow-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)'
            }}>
              Explore Desert
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)'
            }}>
              Visit Oasis
            </button>
          </div>
        </header>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-amber-800 mb-12" style={{
            textShadow: '0 2px 4px rgba(184, 134, 11, 0.3)'
          }}>
            Desert Wonders
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-100/80 to-orange-200/80 rounded-xl shadow-lg backdrop-blur-sm border border-amber-300/50" style={{
                transform: `rotate(${Math.sin(sandDrift * 0.02 + index) * 1}deg)`,
                boxShadow: `0 8px 25px rgba(245, 158, 11, 0.3)`
              }}>
                <div className="text-5xl mb-4" style={{
                  filter: `drop-shadow(0 0 10px rgba(245, 158, 11, ${0.4 + Math.sin(oasisGlow * 0.02) * 0.2}))`
                }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">{feature.title}</h3>
                <p className="text-amber-700 font-serif">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-200/60 to-orange-300/60 rounded-xl shadow-lg backdrop-blur-sm border border-amber-400/50" style={{
                transform: `scale(${1 + Math.sin(oasisGlow * 0.02 + index) * 0.05})`,
                boxShadow: `0 8px 25px rgba(245, 158, 11, 0.4)`
              }}>
                <div className="text-3xl font-bold text-amber-800 mb-2" style={{
                  textShadow: '0 2px 4px rgba(184, 134, 11, 0.3)'
                }}>
                  {stat.value}
                </div>
                <div className="text-amber-700 font-serif">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-amber-800 mb-12" style={{
            textShadow: '0 2px 4px rgba(184, 134, 11, 0.3)'
          }}>
            Desert Wisdom
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-amber-100/80 to-orange-200/80 rounded-xl shadow-lg backdrop-blur-sm border border-amber-300/50" style={{
                transform: `rotate(${Math.sin(palmSway * 0.02 + index) * 0.5}deg)`,
                boxShadow: `0 8px 25px rgba(245, 158, 11, 0.3)`
              }}>
                <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                <p className="text-amber-700 font-serif italic mb-4">"{testimonial.text}"</p>
                <div className="text-center">
                  <div className="font-bold text-amber-800">{testimonial.name}</div>
                  <div className="text-amber-700 font-serif">{testimonial.role}</div>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-amber-500">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-amber-800 mb-12" style={{
            textShadow: '0 2px 4px rgba(184, 134, 11, 0.3)'
          }}>
            Desert Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-200/60 to-orange-300/60 rounded-xl shadow-lg backdrop-blur-sm border border-amber-400/50 hover:from-amber-300/80 hover:to-orange-400/80 transition-all duration-300" style={{
                transform: `scale(${1 + Math.sin(sandDrift * 0.02 + index) * 0.02})`,
                boxShadow: `0 8px 25px rgba(245, 158, 11, 0.4)`
              }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-amber-800 mb-2">{service.title}</h3>
                <p className="text-amber-700 font-serif text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="p-12 bg-gradient-to-br from-amber-200/80 to-orange-300/80 rounded-2xl shadow-2xl backdrop-blur-sm border border-amber-400/50" style={{
            boxShadow: '0 15px 35px rgba(245, 158, 11, 0.4)'
          }}>
            <h2 className="text-4xl font-bold text-amber-800 mb-6" style={{
              textShadow: '0 2px 4px rgba(184, 134, 11, 0.3)'
            }}>
              Begin Your Desert Adventure
            </h2>
            <p className="text-xl text-amber-700 font-serif mb-8">
              Experience the perfect blend of golden sands and life-giving oasis waters
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xl font-bold rounded-lg shadow-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 8px 25px rgba(245, 158, 11, 0.5)'
            }}>
              Start Your Journey
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-amber-800 to-orange-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <span className="text-2xl">🏜️</span>
            <span className="text-xl font-serif">Desert Oasis Adventures</span>
            <span className="text-2xl">🌴</span>
          </div>
          <p className="text-amber-200 font-serif">
            Discovering ancient wisdom in the heart of the golden desert
          </p>
        </div>
      </footer>
    </div>
  );
} 