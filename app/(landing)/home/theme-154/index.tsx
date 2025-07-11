import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🐠',
    title: 'Marine Life',
    description: 'Discover colorful underwater creatures',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '🐙',
    title: 'Deep Sea',
    description: 'Explore the mysterious ocean depths',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    icon: '🪸',
    title: 'Coral Reefs',
    description: 'Beautiful underwater gardens',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: '🐚',
    title: 'Sea Treasures',
    description: 'Hidden gems of the ocean',
    color: 'from-green-500 to-blue-500'
  }
];

const testimonials = [
  {
    name: 'Marina Aqua',
    role: 'Marine Biologist',
    avatar: '🧜‍♀️',
    text: 'The ocean holds infinite mysteries waiting to be discovered beneath the waves.',
    rating: 5
  },
  {
    name: 'Captain Nemo',
    role: 'Deep Sea Explorer',
    avatar: '🤿',
    text: 'Every dive reveals new wonders in the vast underwater kingdom.',
    rating: 5
  },
  {
    name: 'Pearl Diver',
    role: 'Ocean Adventurer',
    avatar: '🏊‍♀️',
    text: 'The sea whispers ancient secrets to those who dare to listen.',
    rating: 5
  }
];

const stats = [
  { value: '71%', label: 'Ocean Coverage' },
  { value: '200K+', label: 'Species' },
  { value: '11KM', label: 'Deepest Point' },
  { value: '∞', label: 'Wonders' }
];

const services = [
  { icon: '🐟', title: 'Fish Guide', desc: 'Species identification' },
  { icon: '🌊', title: 'Wave Forecast', desc: 'Ocean conditions' },
  { icon: '⚓', title: 'Dive Sites', desc: 'Best locations' },
  { icon: '🗺️', title: 'Ocean Maps', desc: 'Navigation tools' }
];

export default function HomePageTheme154() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [waveMotion, setWaveMotion] = useState(0);
  const [bubbleFloat, setBubbleFloat] = useState(0);
  const [currentFlow, setCurrentFlow] = useState(0);

  useEffect(() => {
    // Wave motion animation
    const waveInterval = setInterval(() => {
      setWaveMotion(prev => (prev + 1) % 360);
    }, 100);

    // Bubble floating animation
    const bubbleInterval = setInterval(() => {
      setBubbleFloat(prev => (prev + 1) % 100);
    }, 150);

    // Ocean current flow
    const currentInterval = setInterval(() => {
      setCurrentFlow(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(waveInterval);
      clearInterval(bubbleInterval);
      clearInterval(currentInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-blue-600 to-blue-900 font-serif relative overflow-hidden">
      {/* Ocean Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-400/30 via-blue-600/40 to-blue-900/60">
        {/* Animated water surface */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sky-300/50 to-transparent">
          <svg className="w-full h-full" viewBox="0 0 1200 200" fill="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(135, 206, 235, 0.8)" />
                <stop offset="50%" stopColor="rgba(0, 191, 255, 0.6)" />
                <stop offset="100%" stopColor="rgba(30, 144, 255, 0.4)" />
              </linearGradient>
            </defs>
            
            {/* Animated waves */}
            {Array.from({ length: 5 }, (_, i) => (
              <path
                key={i}
                d={`M0 ${80 + i * 15} Q300 ${60 + i * 15 + Math.sin(waveMotion * 0.02 + i) * 10} 600 ${80 + i * 15} T1200 ${80 + i * 15}`}
                stroke="url(#waveGradient)"
                strokeWidth="3"
                fill="none"
                opacity={0.7 - i * 0.1}
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </svg>
        </div>

        {/* Underwater bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 backdrop-blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 12}px`,
                height: `${4 + Math.random() * 12}px`,
                bottom: `-${Math.random() * 20}px`,
                transform: `translateY(${Math.sin(bubbleFloat * 0.1 + i) * 50 - 100}vh) translateX(${Math.sin(currentFlow * 0.1 + i) * 30}px)`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.4 + Math.random() * 0.4,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
              }}
            />
          ))}
        </div>

        {/* Floating sea creatures */}
        <div className="absolute top-40 left-10 animate-bounce" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(waveMotion * 0.02) * 30}px) translateX(${Math.cos(currentFlow * 0.02) * 20}px)`,
          filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.5))'
        }}>
          <div className="text-5xl">🐠</div>
        </div>
        <div className="absolute top-60 right-20 animate-bounce" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(bubbleFloat * 0.02) * 25}px) translateX(${Math.sin(waveMotion * 0.02) * 15}px)`,
          filter: 'drop-shadow(0 0 15px rgba(255, 0, 255, 0.5))'
        }}>
          <div className="text-4xl">🐙</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-pulse" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(currentFlow * 0.02) * 20}px) rotate(${waveMotion * 0.5}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(0, 255, 127, 0.5))'
        }}>
          <div className="text-4xl">🪸</div>
        </div>
        <div className="absolute bottom-60 right-1/3 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(waveMotion * 0.02) * 18}px) rotate(${bubbleFloat * 0.3}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))'
        }}>
          <div className="text-3xl">🐚</div>
        </div>

        {/* Ocean currents */}
        <div className="absolute inset-0">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              style={{
                top: `${20 + i * 25}%`,
                transform: `translateX(${Math.sin(currentFlow * 0.02 + i) * 200}px)`,
                opacity: 0.4 + Math.sin(waveMotion * 0.02 + i) * 0.2,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>

        {/* Seaweed movement */}
        <div className="absolute bottom-0 left-0 w-full h-48">
          <svg className="w-full h-full" viewBox="0 0 1200 200" fill="none">
            {Array.from({ length: 8 }, (_, i) => (
              <path
                key={i}
                d={`M${i * 150 + 50} 200 Q${i * 150 + 50 + Math.sin(currentFlow * 0.02 + i) * 20} ${150 - Math.cos(waveMotion * 0.02 + i) * 30} ${i * 150 + 50 + Math.sin(currentFlow * 0.02 + i) * 15} ${100 - Math.sin(waveMotion * 0.02 + i) * 20} Q${i * 150 + 50 + Math.cos(currentFlow * 0.02 + i) * 25} ${50 - Math.sin(waveMotion * 0.02 + i) * 25} ${i * 150 + 50 + Math.sin(currentFlow * 0.02 + i) * 10} 0`}
                stroke={`hsl(${120 + i * 20}, 60%, ${40 + i * 5}%)`}
                strokeWidth="8"
                fill="none"
                opacity={0.6}
                className="animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.3}s`,
                  filter: 'drop-shadow(0 0 10px currentColor)'
                }}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wide" style={{
              opacity: 0.95 + Math.sin(waveMotion * 0.02) * 0.05,
              textShadow: '0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 191, 255, 0.4)',
              transform: `translateY(${Math.sin(bubbleFloat * 0.02) * 8}px)`
            }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">OCEAN</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">DEPTHS</span>
            </h1>
            <div className="text-xl text-cyan-200 font-semibold mb-6 tracking-wide" style={{
              opacity: 0.8 + Math.sin(currentFlow * 0.02) * 0.1,
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
              transform: `translateX(${Math.sin(waveMotion * 0.02) * 10}px)`
            }}>
              🌊 Dive Into The Blue Wonder 🐠
            </div>
          </div>

          <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light" style={{
            opacity: 0.9 + Math.sin(bubbleFloat * 0.02) * 0.05,
            transform: `translateY(${Math.cos(currentFlow * 0.02) * 5}px)`
          }}>
            Discover the <span className="text-cyan-300 font-semibold">mysterious depths</span> where <span className="text-teal-300 font-semibold">marine life</span> dances in the <span className="text-blue-300 font-semibold">eternal blue</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold tracking-wide rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-cyan-300/50" style={{
              boxShadow: '0 8px 25px rgba(0, 191, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)',
              filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.3))'
            }}>
              🐠 Dive Deep
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-teal-400 text-teal-300 font-semibold tracking-wide rounded-full hover:bg-teal-400 hover:text-white transition-all duration-300 backdrop-blur-sm" style={{
              boxShadow: '0 8px 25px rgba(20, 184, 166, 0.3)',
              filter: 'drop-shadow(0 0 10px rgba(20, 184, 166, 0.4))'
            }}>
              🌊 Explore Ocean
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-800/60 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden" style={{
                  boxShadow: '0 8px 32px rgba(0, 191, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                }}>
                  {/* Flowing water effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse" style={{
                    transform: `translateX(${Math.sin(currentFlow * 0.02 + index) * 100}px)`,
                    animationDelay: `${index * 0.3}s`
                  }}></div>
                  
                  <div className="text-3xl md:text-4xl font-bold mb-3 relative z-10" style={{
                    background: `linear-gradient(45deg, #00ffff, #0080ff, #40e0d0)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    opacity: 0.95 + Math.sin(waveMotion * 0.02 + index) * 0.05,
                    textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                    transform: `translateY(${Math.sin(bubbleFloat * 0.02 + index) * 5}px)`
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm font-medium tracking-wide relative z-10">
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
            opacity: 0.95 + Math.sin(currentFlow * 0.02) * 0.05,
            textShadow: '0 0 30px rgba(0, 255, 255, 0.6)',
            transform: `translateY(${Math.sin(waveMotion * 0.02) * 8}px)`
          }}>
            Marine <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">Wonders</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-blue-800/60 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full relative overflow-hidden" style={{
                  boxShadow: '0 8px 32px rgba(0, 191, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                }}>
                  {/* Underwater current effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-teal-500/10 to-transparent animate-pulse" style={{
                    transform: `rotate(${Math.sin(currentFlow * 0.02 + index) * 15}deg)`,
                    animationDelay: `${index * 0.4}s`
                  }}></div>
                  
                  <div className="text-3xl mb-6 group-hover:animate-bounce relative z-10" style={{
                    opacity: 0.8 + Math.sin(bubbleFloat * 0.02 + index) * 0.1,
                    filter: `drop-shadow(0 0 15px currentColor)`,
                    transform: `translateY(${Math.sin(waveMotion * 0.02 + index) * 10}px) rotate(${Math.sin(currentFlow * 0.02 + index) * 10}deg)`
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors tracking-wide relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed font-light relative z-10">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" style={{
            opacity: 0.95 + Math.sin(bubbleFloat * 0.02) * 0.05,
            textShadow: '0 0 30px rgba(20, 184, 166, 0.6)',
            transform: `translateX(${Math.sin(currentFlow * 0.02) * 10}px)`
          }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Ocean</span> Services
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-800/60 backdrop-blur-lg rounded-2xl p-6 border border-teal-400/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden" style={{
                  boxShadow: '0 8px 32px rgba(20, 184, 166, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                }}>
                  {/* Tidal wave effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-teal-500/10 to-transparent animate-pulse" style={{
                    transform: `translateY(${Math.sin(waveMotion * 0.02 + index) * 20}px)`,
                    animationDelay: `${index * 0.5}s`
                  }}></div>
                  
                  <div className="text-2xl mb-4 group-hover:animate-pulse relative z-10" style={{
                    opacity: 0.8 + Math.sin(currentFlow * 0.02 + index) * 0.1,
                    filter: `drop-shadow(0 0 12px currentColor)`,
                    transform: `translateY(${Math.cos(bubbleFloat * 0.02 + index) * 8}px)`
                  }}>{service.icon}</div>
                  <h3 className="text-base font-bold mb-2 text-white tracking-wide relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-blue-200 text-sm font-light relative z-10">
                    {service.desc}
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
            opacity: 0.95 + Math.sin(waveMotion * 0.02) * 0.05,
            textShadow: '0 0 30px rgba(0, 191, 255, 0.6)',
            transform: `translateY(${Math.cos(currentFlow * 0.02) * 8}px)`
          }}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Divers</span> Say
          </h2>

          <div className="bg-blue-800/60 backdrop-blur-lg rounded-2xl p-10 border border-cyan-400/30 shadow-lg relative overflow-hidden" style={{
            boxShadow: '0 8px 32px rgba(0, 191, 255, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.1)'
          }}>
            {/* Ocean depth effect */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-cyan-500/20 animate-pulse"></div>
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                  style={{
                    top: `${20 + i * 20}%`,
                    transform: `translateX(${Math.sin(currentFlow * 0.02 + i) * 100}px)`,
                    opacity: 0.3 + Math.sin(waveMotion * 0.02 + i) * 0.2
                  }}
                />
              ))}
            </div>
            
            <div className="text-center relative z-10">
              <div className="text-5xl mb-8 animate-bounce" style={{
                opacity: 0.8 + Math.sin(bubbleFloat * 0.02) * 0.1,
                filter: `drop-shadow(0 0 20px currentColor)`,
                transform: `translateY(${Math.sin(waveMotion * 0.02) * 10}px) rotate(${Math.sin(currentFlow * 0.02) * 5}deg)`
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-blue-100 mb-8 italic leading-relaxed font-light" style={{
                opacity: 0.9 + Math.sin(currentFlow * 0.02) * 0.05,
                transform: `translateX(${Math.sin(waveMotion * 0.02) * 5}px)`
              }}>
                "🌊 {testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-bold text-white tracking-wide">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-cyan-300 text-sm font-medium">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse" style={{
                    opacity: 0.8 + Math.sin(bubbleFloat * 0.02 + i) * 0.1,
                    filter: `drop-shadow(0 0 8px currentColor)`,
                    transform: `scale(${1 + Math.sin(waveMotion * 0.02 + i) * 0.1})`
                  }}>★</span>
                ))}
              </div>
              <div className="flex justify-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full border-2 transition-all ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-400 border-cyan-300'
                        : 'bg-transparent border-blue-400 hover:border-cyan-300'
                    }`}
                    style={{
                      opacity: index === currentTestimonial ? 0.9 : 0.6,
                      boxShadow: index === currentTestimonial ? '0 0 15px rgba(0, 255, 255, 0.5)' : 'none',
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
          <div className="bg-gradient-to-r from-blue-800/60 to-cyan-800/60 backdrop-blur-lg rounded-2xl p-12 border border-cyan-400/30 shadow-lg relative overflow-hidden" style={{
            boxShadow: '0 8px 40px rgba(0, 191, 255, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.1)'
          }}>
            {/* Deep sea pattern overlay */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                <circle cx="100" cy="100" r="30" stroke="#00ffff" strokeWidth="2" fill="none" className="animate-pulse" />
                <circle cx="300" cy="150" r="20" stroke="#40e0d0" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <circle cx="200" cy="200" r="25" stroke="#0080ff" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '2s' }} />
                <path d="M50 50 Q150 100 250 50 Q350 100 350 150" stroke="#00ffff" strokeWidth="3" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-wide" style={{
                opacity: 0.95 + Math.sin(bubbleFloat * 0.02) * 0.05,
                textShadow: '0 0 30px rgba(0, 255, 255, 0.6)',
                transform: `translateY(${Math.sin(waveMotion * 0.02) * 8}px)`
              }}>
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Dive</span>?
              </h2>
              <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed" style={{
                opacity: 0.9 + Math.sin(currentFlow * 0.02) * 0.05,
                transform: `translateX(${Math.sin(waveMotion * 0.02) * 5}px)`
              }}>
                🌊 Join us in exploring the magnificent underwater world and discover ocean mysteries
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold tracking-wide rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg border-2 border-cyan-300/50" style={{
                boxShadow: '0 8px 30px rgba(0, 191, 255, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.2)',
                filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.4))'
              }}>
                🐠 Start Ocean Adventure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce border-2 border-cyan-300/50" style={{
          boxShadow: '0 8px 25px rgba(0, 191, 255, 0.4)',
          filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.5))'
        }}>
          🌊
        </button>
      </div>

      {/* Depth Indicator */}
      <div className="fixed top-1/2 left-4 transform -rotate-90 z-30 bg-blue-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-400/30 text-cyan-300 text-sm font-medium tracking-wider" style={{
        boxShadow: '0 4px 20px rgba(0, 191, 255, 0.3)'
      }}>
        DEPTH: 50M ↓
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes ocean-wave {
          0% { transform: translateX(-100%) rotateZ(0deg); }
          50% { transform: translateX(0%) rotateZ(180deg); }
          100% { transform: translateX(100%) rotateZ(360deg); }
        }
        
        @keyframes bubble-rise {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-20px) scale(1); opacity: 0; }
        }
        
        @keyframes current-flow {
          0% { transform: translateX(-200px) rotateZ(0deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200px) rotateZ(360deg); opacity: 0; }
        }
        
        .animate-ocean-wave {
          animation: ocean-wave 8s ease-in-out infinite;
        }
        
        .animate-bubble-rise {
          animation: bubble-rise 6s linear infinite;
        }
        
        .animate-current-flow {
          animation: current-flow 10s linear infinite;
        }
      `}</style>
    </div>
  );
} 