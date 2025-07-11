import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌌',
    title: 'Aurora Borealis',
    description: 'Dancing lights in the polar sky',
    color: 'from-green-400 to-cyan-400'
  },
  {
    icon: '❄️',
    title: 'Arctic Snow',
    description: 'Pure white winter wonderland',
    color: 'from-blue-300 to-indigo-300'
  },
  {
    icon: '🏔️',
    title: 'Frozen Peaks',
    description: 'Majestic ice-capped mountains',
    color: 'from-purple-400 to-blue-400'
  },
  {
    icon: '🦊',
    title: 'Arctic Wildlife',
    description: 'Creatures of the frozen north',
    color: 'from-cyan-500 to-teal-500'
  }
];

const testimonials = [
  {
    name: 'Aurora Borealis',
    role: 'Northern Lights Guide',
    avatar: '🌌',
    text: 'In the heart of winter, nature paints the sky with its most magical colors.',
    rating: 5
  },
  {
    name: 'Frost Whisper',
    role: 'Arctic Explorer',
    avatar: '❄️',
    text: 'The aurora teaches us that beauty can be found in the coldest of places.',
    rating: 5
  },
  {
    name: 'Polar Star',
    role: 'Winter Photographer',
    avatar: '🏔️',
    text: 'Every aurora display is unique, like a fingerprint in the night sky.',
    rating: 5
  }
];

const stats = [
  { value: '-40°C', label: 'Arctic Cold' },
  { value: '∞', label: 'Aurora Shows' },
  { value: '100%', label: 'Natural Magic' },
  { value: '24/7', label: 'Winter Wonder' }
];

const services = [
  { icon: '📸', title: 'Aurora Tours', desc: 'Northern lights viewing' },
  { icon: '🏕️', title: 'Ice Camping', desc: 'Arctic accommodations' },
  { icon: '🎿', title: 'Winter Sports', desc: 'Snow adventures' },
  { icon: '🦊', title: 'Wildlife Tours', desc: 'Arctic animals' }
];

export default function HomePageTheme159() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [auroraFlow, setAuroraFlow] = useState(0);
  const [snowFall, setSnowFall] = useState(0);
  const [polarGlow, setPolarGlow] = useState(0);

  useEffect(() => {
    // Aurora flow animation
    const auroraInterval = setInterval(() => {
      setAuroraFlow(prev => (prev + 1) % 100);
    }, 100);

    // Snow falling animation
    const snowInterval = setInterval(() => {
      setSnowFall(prev => (prev + 1) % 100);
    }, 150);

    // Polar glow effect
    const glowInterval = setInterval(() => {
      setPolarGlow(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(auroraInterval);
      clearInterval(snowInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900 font-mono relative overflow-hidden">
      {/* Northern Lights Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900/80 via-blue-900/60 to-indigo-900/80">
        {/* Aurora borealis effect */}
        <div className="absolute top-0 left-0 w-full h-96">
          <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
            {/* Aurora curves */}
            <path
              d={`M0 200 Q200 ${150 + Math.sin(auroraFlow * 0.02) * 30} 400 200 T800 ${180 + Math.cos(auroraFlow * 0.03) * 25} T1200 200`}
              stroke="url(#auroraGradient1)"
              strokeWidth="8"
              fill="none"
              opacity="0.8"
              filter="blur(3px)"
            />
            <path
              d={`M0 220 Q300 ${170 + Math.sin(auroraFlow * 0.025) * 35} 600 220 T900 ${200 + Math.cos(auroraFlow * 0.035) * 30} T1200 220`}
              stroke="url(#auroraGradient2)"
              strokeWidth="6"
              fill="none"
              opacity="0.7"
              filter="blur(2px)"
            />
            <path
              d={`M0 240 Q400 ${190 + Math.sin(auroraFlow * 0.03) * 40} 800 240 T1000 ${220 + Math.cos(auroraFlow * 0.04) * 35} T1200 240`}
              stroke="url(#auroraGradient3)"
              strokeWidth="4"
              fill="none"
              opacity="0.6"
              filter="blur(1px)"
            />
            
            <defs>
              <linearGradient id="auroraGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="auroraGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="50%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
              <linearGradient id="auroraGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6EE7B7" />
                <stop offset="50%" stopColor="#67E8F9" />
                <stop offset="100%" stopColor="#C4B5FD" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Snow particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/80 backdrop-blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 6}px`,
                height: `${2 + Math.random() * 6}px`,
                top: `-${Math.random() * 20}px`,
                transform: `translateY(${Math.sin(snowFall * 0.1 + i) * 50 - 100}vh) translateX(${Math.sin(polarGlow * 0.1 + i) * 40}px)`,
                animationDuration: `${6 + Math.random() * 4}s`,
                opacity: 0.6 + Math.random() * 0.4,
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)'
              }}
            />
          ))}
        </div>

        {/* Snow-covered mountains */}
        <div className="absolute bottom-0 left-0 w-full h-64">
          <svg className="w-full h-full" viewBox="0 0 1200 300" fill="none">
            {/* Mountain ranges */}
            <path
              d="M0 300 L100 200 L200 250 L300 180 L400 220 L500 150 L600 200 L700 170 L800 190 L900 160 L1000 180 L1100 200 L1200 180 L1200 300 Z"
              fill="url(#mountainGradient)"
              opacity="0.8"
            />
            <path
              d="M0 300 L150 220 L250 240 L350 200 L450 230 L550 180 L650 210 L750 190 L850 200 L950 180 L1050 190 L1150 210 L1200 200 L1200 300 Z"
              fill="url(#mountainGradient2)"
              opacity="0.6"
            />
            
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="30%" stopColor="#E2E8F0" />
                <stop offset="70%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="40%" stopColor="#CBD5E1" />
                <stop offset="80%" stopColor="#64748B" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating arctic elements */}
        <div className="absolute top-20 left-10 animate-pulse" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(auroraFlow * 0.02) * 25}px) rotate(${polarGlow * 0.5}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.6))'
        }}>
          <div className="text-4xl">🌌</div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(snowFall * 0.02) * 20}px) rotate(${auroraFlow * 0.3}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))'
        }}>
          <div className="text-3xl">❄️</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-pulse" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(polarGlow * 0.02) * 18}px) rotate(${snowFall * 0.2}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))'
        }}>
          <div className="text-3xl">🏔️</div>
        </div>
        <div className="absolute bottom-60 right-1/3 animate-bounce" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(auroraFlow * 0.02) * 15}px) rotate(${polarGlow * 0.4}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.6))'
        }}>
          <div className="text-3xl">🦊</div>
        </div>

        {/* Polar light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-green-400 via-transparent to-cyan-400 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.sin(auroraFlow * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-purple-400 via-transparent to-blue-400 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.cos(polarGlow * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>

        {/* Ice crystals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute text-cyan-300 text-xs opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.sin(auroraFlow * 0.02 + i) * 45}deg) scale(${0.5 + Math.sin(polarGlow * 0.02 + i) * 0.5})`,
                filter: 'drop-shadow(0 0 5px rgba(6, 182, 212, 0.5))'
              }}
            >
              ✧
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 mb-4" style={{
              textShadow: '0 4px 8px rgba(16, 185, 129, 0.3)',
              filter: `drop-shadow(0 0 10px rgba(6, 182, 212, ${0.3 + Math.sin(auroraFlow * 0.02) * 0.2}))`
            }}>
              Northern Lights
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 font-mono" style={{
              textShadow: '0 2px 4px rgba(6, 182, 212, 0.2)'
            }}>
              Where the aurora dances across the polar sky
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
            }}>
              View Aurora
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)'
            }}>
              Arctic Tours
            </button>
          </div>
        </header>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-12" style={{
            textShadow: '0 2px 4px rgba(16, 185, 129, 0.3)'
          }}>
            Arctic Wonders
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-slate-800/80 to-blue-900/80 rounded-xl shadow-lg backdrop-blur-sm border border-cyan-500/50" style={{
                transform: `rotate(${Math.sin(auroraFlow * 0.02 + index) * 1}deg)`,
                boxShadow: `0 8px 25px rgba(6, 182, 212, 0.3)`
              }}>
                <div className="text-5xl mb-4" style={{
                  filter: `drop-shadow(0 0 10px rgba(6, 182, 212, ${0.4 + Math.sin(polarGlow * 0.02) * 0.2}))`
                }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-cyan-300 mb-2">{feature.title}</h3>
                <p className="text-cyan-200 font-mono">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-slate-800/60 to-blue-900/60 rounded-xl shadow-lg backdrop-blur-sm border border-cyan-400/50" style={{
                transform: `scale(${1 + Math.sin(polarGlow * 0.02 + index) * 0.05})`,
                boxShadow: `0 8px 25px rgba(6, 182, 212, 0.4)`
              }}>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-2" style={{
                  textShadow: '0 2px 4px rgba(16, 185, 129, 0.3)'
                }}>
                  {stat.value}
                </div>
                <div className="text-cyan-200 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-12" style={{
            textShadow: '0 2px 4px rgba(16, 185, 129, 0.3)'
          }}>
            Arctic Voices
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-slate-800/80 to-blue-900/80 rounded-xl shadow-lg backdrop-blur-sm border border-cyan-500/50" style={{
                transform: `rotate(${Math.sin(snowFall * 0.02 + index) * 0.5}deg)`,
                boxShadow: `0 8px 25px rgba(6, 182, 212, 0.3)`
              }}>
                <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                <p className="text-cyan-200 font-mono italic mb-4">"{testimonial.text}"</p>
                <div className="text-center">
                  <div className="font-bold text-cyan-300">{testimonial.name}</div>
                  <div className="text-cyan-200 font-mono">{testimonial.role}</div>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-cyan-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-12" style={{
            textShadow: '0 2px 4px rgba(16, 185, 129, 0.3)'
          }}>
            Arctic Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-slate-800/60 to-blue-900/60 rounded-xl shadow-lg backdrop-blur-sm border border-cyan-400/50 hover:from-slate-700/80 hover:to-blue-800/80 transition-all duration-300" style={{
                transform: `scale(${1 + Math.sin(auroraFlow * 0.02 + index) * 0.02})`,
                boxShadow: `0 8px 25px rgba(6, 182, 212, 0.4)`
              }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-cyan-300 mb-2">{service.title}</h3>
                <p className="text-cyan-200 font-mono text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="p-12 bg-gradient-to-br from-slate-800/80 to-blue-900/80 rounded-2xl shadow-2xl backdrop-blur-sm border border-cyan-500/50" style={{
            boxShadow: '0 15px 35px rgba(6, 182, 212, 0.4)'
          }}>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-6" style={{
              textShadow: '0 2px 4px rgba(16, 185, 129, 0.3)'
            }}>
              Experience the Aurora
            </h2>
            <p className="text-xl text-cyan-200 font-mono mb-8">
              Witness the most spectacular light show nature has to offer
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white text-xl font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 8px 25px rgba(16, 185, 129, 0.5)'
            }}>
              Start Your Journey
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-slate-900 to-blue-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <span className="text-2xl">🌌</span>
            <span className="text-xl font-mono">Northern Lights Adventures</span>
            <span className="text-2xl">❄️</span>
          </div>
          <p className="text-cyan-200 font-mono">
            Discovering the magic of the polar night sky
          </p>
        </div>
      </footer>
    </div>
  );
} 