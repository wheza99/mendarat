import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌳',
    title: 'Ancient Trees',
    description: 'Majestic giants that touch the sky',
    color: 'from-green-600 to-emerald-600'
  },
  {
    icon: '🦋',
    title: 'Wildlife',
    description: 'Magical creatures of the forest',
    color: 'from-emerald-600 to-teal-600'
  },
  {
    icon: '🍄',
    title: 'Mushroom Groves',
    description: 'Mystical fungi communities',
    color: 'from-amber-600 to-orange-600'
  },
  {
    icon: '🌿',
    title: 'Healing Herbs',
    description: 'Natural medicine from earth',
    color: 'from-lime-600 to-green-600'
  }
];

const testimonials = [
  {
    name: 'Willow Greenleaf',
    role: 'Forest Ranger',
    avatar: '🧚‍♀️',
    text: 'In the heart of the forest, every tree tells a story of ancient wisdom.',
    rating: 5
  },
  {
    name: 'Oak Treekeeper',
    role: 'Nature Guardian',
    avatar: '🧙‍♂️',
    text: 'The forest speaks to those who know how to listen to its whispers.',
    rating: 5
  },
  {
    name: 'Fern Pathfinder',
    role: 'Wilderness Guide',
    avatar: '🥾',
    text: 'Every path in the woods leads to a new adventure and discovery.',
    rating: 5
  }
];

const stats = [
  { value: '31%', label: 'Forest Cover' },
  { value: '80K+', label: 'Tree Species' },
  { value: '1M+', label: 'Wildlife' },
  { value: '∞', label: 'Magic' }
];

const services = [
  { icon: '🏕️', title: 'Camping', desc: 'Forest adventures' },
  { icon: '🥾', title: 'Hiking', desc: 'Nature trails' },
  { icon: '📸', title: 'Photography', desc: 'Wildlife capture' },
  { icon: '🧭', title: 'Navigation', desc: 'Forest guidance' }
];

export default function HomePageTheme155() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [windSway, setWindSway] = useState(0);
  const [leafFall, setLeafFall] = useState(0);
  const [sunlight, setSunlight] = useState(0);

  useEffect(() => {
    // Wind swaying animation
    const windInterval = setInterval(() => {
      setWindSway(prev => (prev + 1) % 360);
    }, 120);

    // Falling leaves animation
    const leafInterval = setInterval(() => {
      setLeafFall(prev => (prev + 1) % 100);
    }, 180);

    // Sunlight filtering
    const sunInterval = setInterval(() => {
      setSunlight(prev => (prev + 1) % 100);
    }, 250);

    return () => {
      clearInterval(windInterval);
      clearInterval(leafInterval);
      clearInterval(sunInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 via-green-400 to-green-800 font-sans relative overflow-hidden">
      {/* Forest Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-green-300/40 via-green-600/50 to-green-900/70">
        {/* Sunlight rays */}
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-b from-yellow-200/30 via-yellow-300/20 to-transparent"
              style={{
                left: `${10 + i * 15}%`,
                width: '8px',
                height: '100%',
                transform: `rotate(${5 + i * 3}deg) translateY(${Math.sin(sunlight * 0.03 + i) * 20}px)`,
                opacity: 0.4 + Math.sin(sunlight * 0.03 + i) * 0.2,
                filter: 'blur(2px)'
              }}
            />
          ))}
        </div>

        {/* Tree trunks */}
        <div className="absolute bottom-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Tree silhouettes */}
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                {/* Tree trunk */}
                <rect
                  x={i * 100 + 30}
                  y={600 - Math.random() * 100}
                  width={20 + Math.random() * 15}
                  height={200 + Math.random() * 100}
                  fill={`hsl(${25 + Math.random() * 15}, 40%, ${20 + Math.random() * 15}%)`}
                  transform={`rotate(${Math.sin(windSway * 0.02 + i) * 2}deg)`}
                  style={{ transformOrigin: `${i * 100 + 37}px 700px` }}
                />
                {/* Tree canopy */}
                <ellipse
                  cx={i * 100 + 37}
                  cy={500 - Math.random() * 50}
                  rx={40 + Math.random() * 30}
                  ry={60 + Math.random() * 40}
                  fill={`hsl(${90 + Math.random() * 40}, ${50 + Math.random() * 30}%, ${25 + Math.random() * 20}%)`}
                  opacity={0.7 + Math.random() * 0.3}
                  transform={`rotate(${Math.sin(windSway * 0.02 + i) * 5}deg)`}
                  style={{ transformOrigin: `${i * 100 + 37}px ${500 - Math.random() * 50}px` }}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Falling leaves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                transform: `translateY(${(leafFall + i * 10) % 120}vh) translateX(${Math.sin(windSway * 0.02 + i) * 50}px) rotate(${(leafFall + i * 30) % 360}deg)`,
                animationDuration: `${8 + Math.random() * 6}s`,
                opacity: 0.6 + Math.random() * 0.4,
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
              }}
            >
              {['🍂', '🍃', '🍁'][Math.floor(Math.random() * 3)]}
            </div>
          ))}
        </div>

        {/* Forest creatures */}
        <div className="absolute top-1/3 left-10 animate-bounce" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(windSway * 0.02) * 25}px) translateX(${Math.cos(sunlight * 0.02) * 15}px)`,
          filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.6))'
        }}>
          <div className="text-4xl">🦋</div>
        </div>
        <div className="absolute top-1/2 right-20 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(leafFall * 0.02) * 20}px) translateX(${Math.sin(windSway * 0.02) * 12}px)`,
          filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.6))'
        }}>
          <div className="text-3xl">🐿️</div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-pulse" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(sunlight * 0.02) * 18}px) rotate(${windSway * 0.3}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))'
        }}>
          <div className="text-3xl">🍄</div>
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-bounce" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(windSway * 0.02) * 15}px) rotate(${leafFall * 0.2}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.6))'
        }}>
          <div className="text-3xl">🌿</div>
        </div>

        {/* Forest mist */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="absolute w-full h-32 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{
                top: `${20 + i * 20}%`,
                transform: `translateX(${Math.sin(sunlight * 0.02 + i) * 100}px)`,
                opacity: 0.3 + Math.sin(windSway * 0.02 + i) * 0.2,
                filter: 'blur(3px)'
              }}
            />
          ))}
        </div>

        {/* Ground vegetation */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-900/60 to-transparent">
          <svg className="w-full h-full" viewBox="0 0 1200 100" fill="none">
            {Array.from({ length: 20 }, (_, i) => (
              <path
                key={i}
                d={`M${i * 60 + 10} 100 Q${i * 60 + 10 + Math.sin(windSway * 0.02 + i) * 8} ${90 - Math.cos(sunlight * 0.02 + i) * 15} ${i * 60 + 20 + Math.sin(windSway * 0.02 + i) * 5} ${80 - Math.sin(windSway * 0.02 + i) * 10} Q${i * 60 + 30 + Math.cos(windSway * 0.02 + i) * 10} ${70 - Math.sin(sunlight * 0.02 + i) * 12} ${i * 60 + 40 + Math.sin(windSway * 0.02 + i) * 6} 100`}
                stroke={`hsl(${100 + i * 10}, 60%, ${40 + i * 2}%)`}
                strokeWidth="3"
                fill="none"
                opacity={0.6}
                className="animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  filter: 'drop-shadow(0 0 5px currentColor)'
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
              opacity: 0.95 + Math.sin(windSway * 0.02) * 0.05,
              textShadow: '0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(22, 163, 74, 0.4)',
              transform: `translateY(${Math.sin(leafFall * 0.02) * 8}px)`
            }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">FOREST</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400">REALM</span>
            </h1>
            <div className="text-xl text-green-200 font-semibold mb-6 tracking-wide" style={{
              opacity: 0.8 + Math.sin(sunlight * 0.02) * 0.1,
              textShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
              transform: `translateX(${Math.sin(windSway * 0.02) * 10}px)`
            }}>
              🌳 Journey Into Nature's Heart 🦋
            </div>
          </div>

          <p className="text-lg md:text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light" style={{
            opacity: 0.9 + Math.sin(leafFall * 0.02) * 0.05,
            transform: `translateY(${Math.cos(sunlight * 0.02) * 5}px)`
          }}>
            Explore the <span className="text-green-300 font-semibold">ancient woodlands</span> where <span className="text-emerald-300 font-semibold">magical creatures</span> roam beneath the <span className="text-lime-300 font-semibold">emerald canopy</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold tracking-wide rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-green-400/50" style={{
              boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)',
              filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.4))'
            }}>
              🌳 Enter Forest
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-emerald-400 text-emerald-300 font-semibold tracking-wide rounded-full hover:bg-emerald-400 hover:text-white transition-all duration-300 backdrop-blur-sm" style={{
              boxShadow: '0 8px 25px rgba(52, 211, 153, 0.3)',
              filter: 'drop-shadow(0 0 10px rgba(52, 211, 153, 0.4))'
            }}>
              🦋 Discover Wildlife
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
                <div className="bg-green-800/70 backdrop-blur-lg rounded-2xl p-8 border border-green-400/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden" style={{
                  boxShadow: '0 8px 32px rgba(34, 197, 94, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                }}>
                  {/* Forest light filtering */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-400/10 to-transparent animate-pulse" style={{
                    transform: `rotate(${Math.sin(sunlight * 0.02 + index) * 20}deg)`,
                    animationDelay: `${index * 0.3}s`
                  }}></div>
                  
                  <div className="text-3xl md:text-4xl font-bold mb-3 relative z-10" style={{
                    background: `linear-gradient(45deg, #22c55e, #10b981, #059669)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    opacity: 0.95 + Math.sin(windSway * 0.02 + index) * 0.05,
                    textShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
                    transform: `translateY(${Math.sin(leafFall * 0.02 + index) * 5}px)`
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-green-200 text-sm font-medium tracking-wide relative z-10">
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
            opacity: 0.95 + Math.sin(sunlight * 0.02) * 0.05,
            textShadow: '0 0 30px rgba(34, 197, 94, 0.6)',
            transform: `translateY(${Math.sin(windSway * 0.02) * 8}px)`
          }}>
            Forest <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Treasures</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-green-800/70 backdrop-blur-lg rounded-2xl p-8 border border-green-400/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full relative overflow-hidden" style={{
                  boxShadow: '0 8px 32px rgba(34, 197, 94, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                }}>
                  {/* Nature energy effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-emerald-500/10 to-transparent animate-pulse" style={{
                    transform: `translateY(${Math.sin(windSway * 0.02 + index) * 15}deg)`,
                    animationDelay: `${index * 0.4}s`
                  }}></div>
                  
                  <div className="text-3xl mb-6 group-hover:animate-bounce relative z-10" style={{
                    opacity: 0.8 + Math.sin(leafFall * 0.02 + index) * 0.1,
                    filter: `drop-shadow(0 0 15px currentColor)`,
                    transform: `translateY(${Math.sin(windSway * 0.02 + index) * 10}px) rotate(${Math.sin(sunlight * 0.02 + index) * 8}deg)`
                  }}>{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-4 text-white group-hover:text-green-300 transition-colors tracking-wide relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-green-200 leading-relaxed font-light relative z-10">
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
            opacity: 0.95 + Math.sin(leafFall * 0.02) * 0.05,
            textShadow: '0 0 30px rgba(52, 211, 153, 0.6)',
            transform: `translateX(${Math.sin(sunlight * 0.02) * 10}px)`
          }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-300">Nature</span> Adventures
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-green-800/70 backdrop-blur-lg rounded-2xl p-6 border border-emerald-400/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden" style={{
                  boxShadow: '0 8px 32px rgba(52, 211, 153, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                }}>
                  {/* Forest breeze effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-pulse" style={{
                    transform: `translateX(${Math.sin(windSway * 0.02 + index) * 30}px)`,
                    animationDelay: `${index * 0.5}s`
                  }}></div>
                  
                  <div className="text-2xl mb-4 group-hover:animate-pulse relative z-10" style={{
                    opacity: 0.8 + Math.sin(sunlight * 0.02 + index) * 0.1,
                    filter: `drop-shadow(0 0 12px currentColor)`,
                    transform: `translateY(${Math.cos(leafFall * 0.02 + index) * 8}px)`
                  }}>{service.icon}</div>
                  <h3 className="text-base font-bold mb-2 text-white tracking-wide relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-green-200 text-sm font-light relative z-10">
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
            opacity: 0.95 + Math.sin(windSway * 0.02) * 0.05,
            textShadow: '0 0 30px rgba(34, 197, 94, 0.6)',
            transform: `translateY(${Math.cos(sunlight * 0.02) * 8}px)`
          }}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Rangers</span> Say
          </h2>

          <div className="bg-green-800/70 backdrop-blur-lg rounded-2xl p-10 border border-green-400/40 shadow-lg relative overflow-hidden" style={{
            boxShadow: '0 8px 32px rgba(34, 197, 94, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.1)'
          }}>
            {/* Forest depth effect */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-emerald-500/20 animate-pulse"></div>
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
                  style={{
                    top: `${15 + i * 15}%`,
                    transform: `translateX(${Math.sin(sunlight * 0.02 + i) * 80}px)`,
                    opacity: 0.3 + Math.sin(windSway * 0.02 + i) * 0.2
                  }}
                />
              ))}
            </div>
            
            <div className="text-center relative z-10">
              <div className="text-5xl mb-8 animate-bounce" style={{
                opacity: 0.8 + Math.sin(leafFall * 0.02) * 0.1,
                filter: `drop-shadow(0 0 20px currentColor)`,
                transform: `translateY(${Math.sin(windSway * 0.02) * 10}px) rotate(${Math.sin(sunlight * 0.02) * 5}deg)`
              }}>{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg text-green-100 mb-8 italic leading-relaxed font-light" style={{
                opacity: 0.9 + Math.sin(sunlight * 0.02) * 0.05,
                transform: `translateX(${Math.sin(windSway * 0.02) * 5}px)`
              }}>
                "🌳 {testimonials[currentTestimonial].text}"
              </p>
              <div className="mb-6">
                <div className="text-lg font-bold text-white tracking-wide">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-green-300 text-sm font-medium">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse" style={{
                    opacity: 0.8 + Math.sin(leafFall * 0.02 + i) * 0.1,
                    filter: `drop-shadow(0 0 8px currentColor)`,
                    transform: `scale(${1 + Math.sin(windSway * 0.02 + i) * 0.1})`
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
                        ? 'bg-gradient-to-r from-green-400 to-emerald-400 border-green-300'
                        : 'bg-transparent border-green-400 hover:border-green-300'
                    }`}
                    style={{
                      opacity: index === currentTestimonial ? 0.9 : 0.6,
                      boxShadow: index === currentTestimonial ? '0 0 15px rgba(34, 197, 94, 0.5)' : 'none',
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
          <div className="bg-gradient-to-r from-green-800/70 to-emerald-800/70 backdrop-blur-lg rounded-2xl p-12 border border-green-400/40 shadow-lg relative overflow-hidden" style={{
            boxShadow: '0 8px 40px rgba(34, 197, 94, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.1)'
          }}>
            {/* Nature pattern overlay */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                <circle cx="100" cy="100" r="25" stroke="#22c55e" strokeWidth="2" fill="none" className="animate-pulse" />
                <circle cx="300" cy="150" r="18" stroke="#10b981" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <circle cx="200" cy="200" r="22" stroke="#059669" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '2s' }} />
                <path d="M80 80 Q120 60 160 80 Q200 100 240 80 Q280 60 320 80" stroke="#22c55e" strokeWidth="3" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <path d="M60 200 Q100 180 140 200 Q180 220 220 200" stroke="#10b981" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-wide" style={{
                opacity: 0.95 + Math.sin(leafFall * 0.02) * 0.05,
                textShadow: '0 0 30px rgba(34, 197, 94, 0.6)',
                transform: `translateY(${Math.sin(windSway * 0.02) * 8}px)`
              }}>
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Explore</span>?
              </h2>
              <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed" style={{
                opacity: 0.9 + Math.sin(sunlight * 0.02) * 0.05,
                transform: `translateX(${Math.sin(windSway * 0.02) * 5}px)`
              }}>
                🌳 Step into the enchanted forest and discover the magic that awaits among ancient trees
              </p>
              <button className="px-12 py-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold tracking-wide rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg border-2 border-green-400/50" style={{
                boxShadow: '0 8px 30px rgba(34, 197, 94, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.2)',
                filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.4))'
              }}>
                🌳 Begin Forest Adventure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce border-2 border-green-400/50" style={{
          boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4)',
          filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.5))'
        }}>
          🌲
        </button>
      </div>

      {/* Forest Compass */}
      <div className="fixed top-1/2 left-4 transform -rotate-90 z-30 bg-green-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/40 text-green-300 text-sm font-medium tracking-wider" style={{
        boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)'
      }}>
        TRAIL: ENCHANTED ↗
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes forest-sway {
          0% { transform: rotate(-2deg) translateX(-5px); }
          50% { transform: rotate(2deg) translateX(5px); }
          100% { transform: rotate(-2deg) translateX(-5px); }
        }
        
        @keyframes leaf-dance {
          0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
          100% { transform: translateY(0px) rotate(360deg); opacity: 1; }
        }
        
        @keyframes sunlight-filter {
          0% { opacity: 0.3; filter: blur(2px); }
          50% { opacity: 0.6; filter: blur(1px); }
          100% { opacity: 0.3; filter: blur(2px); }
        }
        
        .animate-forest-sway {
          animation: forest-sway 4s ease-in-out infinite;
        }
        
        .animate-leaf-dance {
          animation: leaf-dance 3s ease-in-out infinite;
        }
        
        .animate-sunlight-filter {
          animation: sunlight-filter 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 