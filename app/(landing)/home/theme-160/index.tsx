import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🎮',
    title: 'Arcade Classics',
    description: 'Timeless gaming experiences',
    color: 'from-pink-500 to-purple-500'
  },
  {
    icon: '🕹️',
    title: 'Retro Gaming',
    description: 'Nostalgic pixel adventures',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: '🏆',
    title: 'High Scores',
    description: 'Beat your best records',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: '🌟',
    title: 'Pixel Art',
    description: 'Beautiful retro graphics',
    color: 'from-green-500 to-emerald-500'
  }
];

const testimonials = [
  {
    name: 'Pixel Master',
    role: 'Retro Gamer',
    avatar: '🎮',
    text: 'The golden age of gaming never gets old. Every pixel tells a story.',
    rating: 5
  },
  {
    name: 'Arcade Legend',
    role: 'High Score Champion',
    avatar: '🕹️',
    text: 'These games shaped a generation. The classics are forever.',
    rating: 5
  },
  {
    name: 'Retro Collector',
    role: 'Gaming Historian',
    avatar: '🏆',
    text: 'From Pac-Man to Space Invaders, these games are pure magic.',
    rating: 5
  }
];

const stats = [
  { value: '8-BIT', label: 'Graphics' },
  { value: '∞', label: 'High Scores' },
  { value: '100%', label: 'Nostalgia' },
  { value: '24/7', label: 'Gaming' }
];

const services = [
  { icon: '🎯', title: 'Arcade Games', desc: 'Classic titles' },
  { icon: '🏪', title: 'Game Center', desc: 'Retro arcade' },
  { icon: '🎨', title: 'Pixel Art', desc: 'Custom graphics' },
  { icon: '🏆', title: 'Tournaments', desc: 'Competitive play' }
];

export default function HomePageTheme160() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [pixelFlow, setPixelFlow] = useState(0);
  const [gameSprites, setGameSprites] = useState(0);
  const [neonGlow, setNeonGlow] = useState(0);

  useEffect(() => {
    // Pixel flow animation
    const pixelInterval = setInterval(() => {
      setPixelFlow(prev => (prev + 1) % 100);
    }, 100);

    // Game sprites animation
    const spriteInterval = setInterval(() => {
      setGameSprites(prev => (prev + 1) % 100);
    }, 150);

    // Neon glow effect
    const glowInterval = setInterval(() => {
      setNeonGlow(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(pixelInterval);
      clearInterval(spriteInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-pink-900 font-mono relative overflow-hidden">
      {/* Retro Arcade Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/90 via-purple-900/70 to-pink-900/80">
        {/* Pixel grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at ${pixelFlow}% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`
          }}>
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-pink-500/60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '2s',
                  animationIterationCount: 'infinite',
                  animationName: 'pixelPulse'
                }}
              />
            ))}
          </div>
        </div>

        {/* Animated game sprites */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin(gameSprites * 0.02 + i) * 50}px) translateX(${Math.cos(neonGlow * 0.02 + i) * 30}px)`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.7 + Math.random() * 0.3,
                filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.8))'
              }}
            >
              {['🎮', '🕹️', '🏆', '🌟', '🎯'][i % 5]}
            </div>
          ))}
        </div>

        {/* Retro scanlines effect */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"
              style={{
                top: `${i * 2}%`,
                opacity: 0.3 + Math.sin(pixelFlow * 0.02 + i) * 0.2
              }}
            />
          ))}
        </div>

        {/* Floating arcade elements */}
        <div className="absolute top-20 left-10 animate-bounce" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(pixelFlow * 0.02) * 20}px) rotate(${neonGlow * 0.5}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.8))'
        }}>
          <div className="text-4xl">🎮</div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(gameSprites * 0.02) * 15}px) rotate(${pixelFlow * 0.3}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.8))'
        }}>
          <div className="text-3xl">🕹️</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-bounce" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(neonGlow * 0.02) * 18}px) rotate(${gameSprites * 0.2}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.8))'
        }}>
          <div className="text-3xl">🏆</div>
        </div>
        <div className="absolute bottom-60 right-1/3 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(pixelFlow * 0.02) * 15}px) rotate(${neonGlow * 0.4}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.8))'
        }}>
          <div className="text-3xl">🌟</div>
        </div>

        {/* Neon light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-pink-500 via-transparent to-purple-500 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.sin(pixelFlow * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-cyan-500 via-transparent to-blue-500 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.cos(neonGlow * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>

        {/* Pixel particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pink-500"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin(pixelFlow * 0.02 + i) * 100}vh) translateX(${Math.sin(gameSprites * 0.02 + i) * 50}px)`,
                animationDuration: `${4 + Math.random() * 3}s`,
                opacity: 0.6 + Math.random() * 0.4,
                boxShadow: '0 0 8px rgba(236, 72, 153, 0.8)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-4" style={{
              textShadow: '0 4px 8px rgba(236, 72, 153, 0.5)',
              filter: `drop-shadow(0 0 10px rgba(236, 72, 153, ${0.5 + Math.sin(pixelFlow * 0.02) * 0.3}))`
            }}>
              RETRO ARCADE
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 font-mono" style={{
              textShadow: '0 2px 4px rgba(6, 182, 212, 0.3)'
            }}>
              Where pixels meet passion
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(236, 72, 153, 0.5)'
            }}>
              PLAY NOW
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.5)'
            }}>
              HIGH SCORES
            </button>
          </div>
        </header>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-12" style={{
            textShadow: '0 2px 4px rgba(236, 72, 153, 0.4)'
          }}>
            GAMING FEATURES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-900/80 to-pink-900/80 rounded-xl shadow-lg backdrop-blur-sm border border-pink-500/50" style={{
                transform: `rotate(${Math.sin(pixelFlow * 0.02 + index) * 1}deg)`,
                boxShadow: `0 8px 25px rgba(236, 72, 153, 0.4)`
              }}>
                <div className="text-5xl mb-4" style={{
                  filter: `drop-shadow(0 0 10px rgba(236, 72, 153, ${0.6 + Math.sin(neonGlow * 0.02) * 0.3}))`
                }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-pink-300 mb-2">{feature.title}</h3>
                <p className="text-pink-200 font-mono">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-900/60 to-pink-900/60 rounded-xl shadow-lg backdrop-blur-sm border border-pink-400/50" style={{
                transform: `scale(${1 + Math.sin(neonGlow * 0.02 + index) * 0.05})`,
                boxShadow: `0 8px 25px rgba(236, 72, 153, 0.5)`
              }}>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2" style={{
                  textShadow: '0 2px 4px rgba(236, 72, 153, 0.4)'
                }}>
                  {stat.value}
                </div>
                <div className="text-pink-200 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-12" style={{
            textShadow: '0 2px 4px rgba(236, 72, 153, 0.4)'
          }}>
            GAMER VOICES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-purple-900/80 to-pink-900/80 rounded-xl shadow-lg backdrop-blur-sm border border-pink-500/50" style={{
                transform: `rotate(${Math.sin(gameSprites * 0.02 + index) * 0.5}deg)`,
                boxShadow: `0 8px 25px rgba(236, 72, 153, 0.4)`
              }}>
                <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                <p className="text-pink-200 font-mono italic mb-4">"{testimonial.text}"</p>
                <div className="text-center">
                  <div className="font-bold text-pink-300">{testimonial.name}</div>
                  <div className="text-pink-200 font-mono">{testimonial.role}</div>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-pink-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-12" style={{
            textShadow: '0 2px 4px rgba(236, 72, 153, 0.4)'
          }}>
            ARCADE SERVICES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-900/60 to-pink-900/60 rounded-xl shadow-lg backdrop-blur-sm border border-pink-400/50 hover:from-purple-800/80 hover:to-pink-800/80 transition-all duration-300" style={{
                transform: `scale(${1 + Math.sin(pixelFlow * 0.02 + index) * 0.02})`,
                boxShadow: `0 8px 25px rgba(236, 72, 153, 0.5)`
              }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-pink-300 mb-2">{service.title}</h3>
                <p className="text-pink-200 font-mono text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="p-12 bg-gradient-to-br from-purple-900/80 to-pink-900/80 rounded-2xl shadow-2xl backdrop-blur-sm border border-pink-500/50" style={{
            boxShadow: '0 15px 35px rgba(236, 72, 153, 0.5)'
          }}>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6" style={{
              textShadow: '0 2px 4px rgba(236, 72, 153, 0.4)'
            }}>
              START GAMING
            </h2>
            <p className="text-xl text-pink-200 font-mono mb-8">
              Experience the magic of retro arcade gaming
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xl font-bold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105" style={{
              boxShadow: '0 8px 25px rgba(236, 72, 153, 0.6)'
            }}>
              INSERT COIN
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-purple-900 to-pink-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <span className="text-2xl">🎮</span>
            <span className="text-xl font-mono">Retro Arcade Gaming</span>
            <span className="text-2xl">🕹️</span>
          </div>
          <p className="text-pink-200 font-mono">
            Keeping the arcade spirit alive
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pixelPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
} 