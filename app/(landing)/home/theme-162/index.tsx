import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🏝️',
    title: 'Island Paradise',
    description: 'Your perfect getaway destination',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: '🌊',
    title: 'Ocean Waves',
    description: 'Crystal clear turquoise waters',
    color: 'from-blue-400 to-cyan-400'
  },
  {
    icon: '🌴',
    title: 'Palm Trees',
    description: 'Tropical beach vibes',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: '🏖️',
    title: 'Sandy Beaches',
    description: 'Pure white sand beaches',
    color: 'from-amber-400 to-yellow-400'
  }
];

const testimonials = [
  {
    name: 'Island Dreamer',
    role: 'Beach Explorer',
    avatar: '🏝️',
    text: 'Every day feels like paradise in this tropical wonderland.',
    rating: 5
  },
  {
    name: 'Ocean Lover',
    role: 'Water Sports Enthusiast',
    avatar: '🌊',
    text: 'The crystal clear waters and gentle waves are absolutely perfect.',
    rating: 5
  },
  {
    name: 'Tropical Paradise',
    role: 'Island Resident',
    avatar: '🌴',
    text: 'Living in paradise is a dream come true. Pure tropical magic.',
    rating: 5
  }
];

const stats = [
  { value: '365', label: 'Days of Sunshine' },
  { value: '∞', label: 'Ocean Views' },
  { value: '100%', label: 'Tropical Vibes' },
  { value: '24/7', label: 'Paradise' }
];

const services = [
  { icon: '🏄‍♂️', title: 'Water Sports', desc: 'Ocean adventures' },
  { icon: '🏕️', title: 'Beach Camping', desc: 'Island accommodations' },
  { icon: '🍹', title: 'Tropical Drinks', desc: 'Island refreshments' },
  { icon: '🎣', title: 'Fishing Tours', desc: 'Ocean expeditions' }
];

export default function HomePageTheme162() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [waveFlow, setWaveFlow] = useState(0);
  const [palmSway, setPalmSway] = useState(0);
  const [sunGlow, setSunGlow] = useState(0);

  useEffect(() => {
    // Wave flow animation
    const waveInterval = setInterval(() => {
      setWaveFlow(prev => (prev + 1) % 100);
    }, 100);

    // Palm tree swaying
    const palmInterval = setInterval(() => {
      setPalmSway(prev => (prev + 1) % 100);
    }, 150);

    // Sun glow effect
    const sunInterval = setInterval(() => {
      setSunGlow(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(waveInterval);
      clearInterval(palmInterval);
      clearInterval(sunInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 via-orange-200 to-amber-300 font-serif relative overflow-hidden">
      {/* Tropical Paradise Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-yellow-200/80 via-orange-200/60 to-amber-300/80">
        {/* Ocean waves */}
        <div className="absolute bottom-0 left-0 w-full h-64">
          <svg className="w-full h-full" viewBox="0 0 1200 300" fill="none">
            {/* Wave curves */}
            <path
              d={`M0 300 Q200 ${250 + Math.sin(waveFlow * 0.02) * 20} 400 300 T800 ${250 - Math.cos(waveFlow * 0.03) * 25} T1200 300`}
              fill="url(#oceanGradient)"
              opacity="0.8"
            />
            <path
              d={`M0 300 Q300 ${270 + Math.sin(waveFlow * 0.025) * 30} 600 300 T900 ${270 - Math.cos(waveFlow * 0.035) * 35} T1200 300`}
              fill="url(#oceanGradient2)"
              opacity="0.6"
            />
            <path
              d={`M0 300 Q400 ${280 + Math.sin(waveFlow * 0.03) * 40} 800 300 T1000 ${280 - Math.cos(waveFlow * 0.04) * 45} T1200 300`}
              fill="url(#oceanGradient3)"
              opacity="0.4"
            />
            
            <defs>
              <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="50%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>
              <linearGradient id="oceanGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#0891B2" />
              </linearGradient>
              <linearGradient id="oceanGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#67E8F9" />
                <stop offset="50%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Animated ocean particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-300/60"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                top: `-${Math.random() * 20}px`,
                transform: `translateY(${Math.sin(waveFlow * 0.1 + i) * 50 - 100}vh) translateX(${Math.sin(sunGlow * 0.1 + i) * 30}px)`,
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
                  d={`M${210 + i * 2} 200 Q${210 + i * 2 + Math.sin(palmSway * 0.02 + i) * 10} ${180 - Math.cos(sunGlow * 0.02 + i) * 15} ${210 + i * 2 + Math.sin(palmSway * 0.02 + i) * 8} 160`}
                  stroke="#228B22"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d={`M${610 + i * 2} 180 Q${610 + i * 2 + Math.sin(palmSway * 0.03 + i) * 12} ${160 - Math.cos(sunGlow * 0.03 + i) * 18} ${610 + i * 2 + Math.sin(palmSway * 0.03 + i) * 10} 140`}
                  stroke="#32CD32"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.7"
                />
                <path
                  d={`M${910 + i * 2} 220 Q${910 + i * 2 + Math.sin(palmSway * 0.025 + i) * 9} ${200 - Math.cos(sunGlow * 0.025 + i) * 12} ${910 + i * 2 + Math.sin(palmSway * 0.025 + i) * 7} 180`}
                  stroke="#228B22"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.8"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Floating tropical elements */}
        <div className="absolute top-20 left-10 animate-bounce" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(waveFlow * 0.02) * 20}px) rotate(${sunGlow * 0.5}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.8))'
        }}>
          <div className="text-4xl">🏝️</div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(palmSway * 0.02) * 15}px) rotate(${waveFlow * 0.3}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.8))'
        }}>
          <div className="text-3xl">🌊</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-bounce" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(sunGlow * 0.02) * 18}px) rotate(${palmSway * 0.2}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.8))'
        }}>
          <div className="text-3xl">🌴</div>
        </div>
        <div className="absolute bottom-60 right-1/3 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(waveFlow * 0.02) * 15}px) rotate(${sunGlow * 0.4}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.8))'
        }}>
          <div className="text-3xl">🏖️</div>
        </div>

        {/* Tropical light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-yellow-400 via-transparent to-orange-400 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.sin(waveFlow * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-cyan-400 via-transparent to-blue-400 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.cos(sunGlow * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>

        {/* Sand particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-200/80"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                top: `-${Math.random() * 20}px`,
                transform: `translateY(${Math.sin(palmSway * 0.02 + i) * 100}vh) translateX(${Math.sin(waveFlow * 0.02 + i) * 40}px)`,
                animationDuration: `${4 + Math.random() * 2}s`,
                opacity: 0.5 + Math.random() * 0.3,
                boxShadow: '0 0 5px rgba(245, 158, 11, 0.6)'
              }}
            />
          ))}
        </div>

        {/* Sun rays */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-sm" style={{
            transform: `scale(${1 + Math.sin(sunGlow * 0.02) * 0.2})`,
            filter: 'blur(20px)',
            boxShadow: '0 0 50px rgba(245, 158, 11, 0.6)'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 mb-4" style={{
              textShadow: '0 4px 8px rgba(245, 158, 11, 0.4)',
              filter: `drop-shadow(0 0 10px rgba(245, 158, 11, ${0.4 + Math.sin(sunGlow * 0.02) * 0.2}))`
            }}>
              TROPICAL PARADISE
            </h1>
            <p className="text-xl md:text-2xl text-orange-300 font-serif" style={{
              textShadow: '0 2px 4px rgba(245, 158, 11, 0.3)'
            }}>
              Where paradise meets the ocean
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg shadow-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(245, 158, 11, 0.5)'
            }}>
              BOOK PARADISE
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.5)'
            }}>
              OCEAN ADVENTURES
            </button>
          </div>
        </header>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-12" style={{
            textShadow: '0 2px 4px rgba(245, 158, 11, 0.4)'
          }}>
            PARADISE FEATURES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-100/80 to-yellow-100/80 rounded-xl shadow-lg backdrop-blur-sm border border-orange-300/50" style={{
                transform: `rotate(${Math.sin(waveFlow * 0.02 + index) * 1}deg)`,
                boxShadow: `0 8px 25px rgba(245, 158, 11, 0.4)`
              }}>
                <div className="text-5xl mb-4" style={{
                  filter: `drop-shadow(0 0 10px rgba(245, 158, 11, ${0.6 + Math.sin(sunGlow * 0.02) * 0.3}))`
                }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-orange-700 mb-2">{feature.title}</h3>
                <p className="text-orange-600 font-serif">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-100/60 to-yellow-100/60 rounded-xl shadow-lg backdrop-blur-sm border border-orange-300/50" style={{
                transform: `scale(${1 + Math.sin(sunGlow * 0.02 + index) * 0.05})`,
                boxShadow: `0 8px 25px rgba(245, 158, 11, 0.5)`
              }}>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 mb-2" style={{
                  textShadow: '0 2px 4px rgba(245, 158, 11, 0.4)'
                }}>
                  {stat.value}
                </div>
                <div className="text-orange-600 font-serif">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-12" style={{
            textShadow: '0 2px 4px rgba(245, 158, 11, 0.4)'
          }}>
            PARADISE VOICES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-orange-100/80 to-yellow-100/80 rounded-xl shadow-lg backdrop-blur-sm border border-orange-300/50" style={{
                transform: `rotate(${Math.sin(palmSway * 0.02 + index) * 0.5}deg)`,
                boxShadow: `0 8px 25px rgba(245, 158, 11, 0.4)`
              }}>
                <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                <p className="text-orange-700 font-serif italic mb-4">"{testimonial.text}"</p>
                <div className="text-center">
                  <div className="font-bold text-orange-800">{testimonial.name}</div>
                  <div className="text-orange-600 font-serif">{testimonial.role}</div>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-12" style={{
            textShadow: '0 2px 4px rgba(245, 158, 11, 0.4)'
          }}>
            TROPICAL SERVICES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-100/60 to-yellow-100/60 rounded-xl shadow-lg backdrop-blur-sm border border-orange-300/50 hover:from-orange-200/80 hover:to-yellow-200/80 transition-all duration-300" style={{
                transform: `scale(${1 + Math.sin(waveFlow * 0.02 + index) * 0.02})`,
                boxShadow: `0 8px 25px rgba(245, 158, 11, 0.5)`
              }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-orange-700 mb-2">{service.title}</h3>
                <p className="text-orange-600 font-serif text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="p-12 bg-gradient-to-br from-orange-100/80 to-yellow-100/80 rounded-2xl shadow-2xl backdrop-blur-sm border border-orange-300/50" style={{
            boxShadow: '0 15px 35px rgba(245, 158, 11, 0.5)'
          }}>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 mb-6" style={{
              textShadow: '0 2px 4px rgba(245, 158, 11, 0.4)'
            }}>
              EXPERIENCE PARADISE
            </h2>
            <p className="text-xl text-orange-700 font-serif mb-8">
              Discover your perfect tropical getaway
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xl font-bold rounded-lg shadow-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 8px 25px rgba(245, 158, 11, 0.6)'
            }}>
              BOOK NOW
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-orange-200 to-yellow-200 text-orange-800 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <span className="text-2xl">🏝️</span>
            <span className="text-xl font-serif">Tropical Paradise Island</span>
            <span className="text-2xl">🌊</span>
          </div>
          <p className="text-orange-600 font-serif">
            Where every day feels like paradise
          </p>
        </div>
      </footer>
    </div>
  );
} 