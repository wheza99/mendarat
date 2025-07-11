import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🏰',
    title: 'Royal Castle',
    description: 'Majestic fortress kingdom',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: '⚔️',
    title: 'Noble Knights',
    description: 'Brave warriors of honor',
    color: 'from-gray-600 to-gray-800'
  },
  {
    icon: '🐉',
    title: 'Mythical Dragons',
    description: 'Ancient magical creatures',
    color: 'from-red-600 to-orange-600'
  },
  {
    icon: '✨',
    title: 'Magic Spells',
    description: 'Enchanted powers',
    color: 'from-purple-500 to-pink-500'
  }
];

const testimonials = [
  {
    name: 'King Arthur',
    role: 'Royal Monarch',
    avatar: '👑',
    text: 'Our kingdom stands strong with honor and courage. Every citizen is part of our noble legacy.',
    rating: 5
  },
  {
    name: 'Sir Lancelot',
    role: 'Knight Commander',
    avatar: '⚔️',
    text: 'We fight for justice and protect the realm. Our swords are always ready for battle.',
    rating: 5
  },
  {
    name: 'Merlin',
    role: 'Court Wizard',
    avatar: '🧙‍♂️',
    text: 'Magic flows through our kingdom like a mighty river. The ancient spells protect us all.',
    rating: 5
  }
];

const stats = [
  { value: '1000+', label: 'Years of Rule' },
  { value: '∞', label: 'Magic Power' },
  { value: '100%', label: 'Noble Honor' },
  { value: '24/7', label: 'Kingdom' }
];

const services = [
  { icon: '🛡️', title: 'Royal Guard', desc: 'Kingdom protection' },
  { icon: '🏰', title: 'Castle Tours', desc: 'Royal architecture' },
  { icon: '⚔️', title: 'Knight Training', desc: 'Combat skills' },
  { icon: '✨', title: 'Magic Academy', desc: 'Spell casting' }
];

export default function HomePageTheme163() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [castleGlow, setCastleGlow] = useState(0);
  const [dragonFlight, setDragonFlight] = useState(0);
  const [magicSparkle, setMagicSparkle] = useState(0);

  useEffect(() => {
    // Castle glow animation
    const castleInterval = setInterval(() => {
      setCastleGlow(prev => (prev + 1) % 100);
    }, 100);

    // Dragon flight animation
    const dragonInterval = setInterval(() => {
      setDragonFlight(prev => (prev + 1) % 100);
    }, 150);

    // Magic sparkle effect
    const magicInterval = setInterval(() => {
      setMagicSparkle(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(castleInterval);
      clearInterval(dragonInterval);
      clearInterval(magicInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-yellow-200 to-orange-300 font-serif relative overflow-hidden">
      {/* Medieval Fantasy Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-amber-100/80 via-yellow-200/60 to-orange-300/80">
        {/* Castle silhouette */}
        <div className="absolute bottom-0 left-0 w-full h-96">
          <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
            {/* Castle towers */}
            <rect x="100" y="150" width="80" height="250" fill="#8B4513" stroke="#654321" strokeWidth="2" />
            <rect x="200" y="120" width="60" height="280" fill="#A0522D" stroke="#654321" strokeWidth="2" />
            <rect x="300" y="100" width="100" height="300" fill="#8B4513" stroke="#654321" strokeWidth="2" />
            <rect x="450" y="130" width="70" height="270" fill="#A0522D" stroke="#654321" strokeWidth="2" />
            <rect x="550" y="110" width="80" height="290" fill="#8B4513" stroke="#654321" strokeWidth="2" />
            <rect x="700" y="140" width="60" height="260" fill="#A0522D" stroke="#654321" strokeWidth="2" />
            <rect x="800" y="120" width="70" height="280" fill="#8B4513" stroke="#654321" strokeWidth="2" />
            <rect x="900" y="150" width="80" height="250" fill="#A0522D" stroke="#654321" strokeWidth="2" />
            
            {/* Castle battlements */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <rect x={120 + i * 15} y="150" width="8" height="15" fill="#654321" />
                <rect x={220 + i * 10} y="120" width="6" height="12" fill="#654321" />
                <rect x={320 + i * 12} y="100" width="10" height="18" fill="#654321" />
                <rect x={470 + i * 11} y="130" width="7" height="14" fill="#654321" />
                <rect x={570 + i * 13} y="110" width="9" height="16" fill="#654321" />
                <rect x={720 + i * 9} y="140" width="5" height="13" fill="#654321" />
                <rect x={820 + i * 11} y="120" width="7" height="15" fill="#654321" />
                <rect x={920 + i * 14} y="150" width="8" height="17" fill="#654321" />
              </g>
            ))}
            
            {/* Castle flags */}
            <rect x="130" y="100" width="3" height="50" fill="#8B0000" />
            <rect x="130" y="100" width="20" height="15" fill="#FF0000" />
            <rect x="330" y="80" width="3" height="60" fill="#8B0000" />
            <rect x="330" y="80" width="25" height="18" fill="#FF0000" />
            <rect x="580" y="90" width="3" height="55" fill="#8B0000" />
            <rect x="580" y="90" width="22" height="16" fill="#FF0000" />
            <rect x="830" y="110" width="3" height="45" fill="#8B0000" />
            <rect x="830" y="110" width="18" height="14" fill="#FF0000" />
            
            {/* Castle windows */}
            <rect x="120" y="200" width="15" height="20" fill="#FFD700" opacity="0.8" />
            <rect x="320" y="180" width="20" height="25" fill="#FFD700" opacity="0.8" />
            <rect x="570" y="190" width="18" height="22" fill="#FFD700" opacity="0.8" />
            <rect x="820" y="200" width="16" height="21" fill="#FFD700" opacity="0.8" />
          </svg>
        </div>

        {/* Animated magic particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 40 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-purple-300/60"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                top: `-${Math.random() * 20}px`,
                transform: `translateY(${Math.sin(magicSparkle * 0.1 + i) * 50 - 100}vh) translateX(${Math.sin(castleGlow * 0.1 + i) * 30}px)`,
                animationDuration: `${5 + Math.random() * 3}s`,
                opacity: 0.4 + Math.random() * 0.4,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>

        {/* Floating fantasy elements */}
        <div className="absolute top-20 left-10 animate-bounce" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(castleGlow * 0.02) * 25}px) rotate(${magicSparkle * 0.5}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.8))'
        }}>
          <div className="text-4xl">🏰</div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(dragonFlight * 0.02) * 20}px) rotate(${castleGlow * 0.3}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.8))'
        }}>
          <div className="text-3xl">⚔️</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-bounce" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(magicSparkle * 0.02) * 18}px) rotate(${dragonFlight * 0.2}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(220, 38, 38, 0.8))'
        }}>
          <div className="text-3xl">🐉</div>
        </div>
        <div className="absolute bottom-60 right-1/3 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(castleGlow * 0.02) * 15}px) rotate(${magicSparkle * 0.4}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.8))'
        }}>
          <div className="text-3xl">✨</div>
        </div>

        {/* Magic light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-purple-500 via-transparent to-pink-500 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.sin(castleGlow * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-amber-500 via-transparent to-yellow-500 opacity-40 animate-pulse" style={{
          transform: `translateX(${Math.cos(magicSparkle * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>

        {/* Flying dragons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin(dragonFlight * 0.02 + i) * 50}px) translateX(${Math.cos(castleGlow * 0.02 + i) * 30}px)`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.6 + Math.random() * 0.4,
                filter: 'drop-shadow(0 0 10px rgba(220, 38, 38, 0.8))'
              }}
            >
              🐉
            </div>
          ))}
        </div>

        {/* Floating swords */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin(magicSparkle * 0.02 + i) * 40}px) translateX(${Math.cos(dragonFlight * 0.02 + i) * 25}px)`,
                animationDuration: `${4 + Math.random() * 2}s`,
                opacity: 0.5 + Math.random() * 0.3,
                filter: 'drop-shadow(0 0 8px rgba(107, 114, 128, 0.8))'
              }}
            >
              ⚔️
            </div>
          ))}
        </div>

        {/* Magic sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin(castleGlow * 0.02 + i) * 100}vh) translateX(${Math.sin(magicSparkle * 0.02 + i) * 50}px)`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.6 + Math.random() * 0.4,
                boxShadow: '0 0 8px rgba(147, 51, 234, 0.8)',
                animationDelay: `${i * 0.2}s`,
                animationIterationCount: 'infinite',
                animationName: 'magicSparkle'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6" style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.5))'
              }}>
                Medieval Fantasy Kingdom
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Enter a world of noble knights, majestic castles, and ancient magic. 
                Where honor meets adventure in a realm of endless possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Join the Kingdom
                </button>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Learn Magic
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-amber-50/50 to-yellow-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Kingdom Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2" style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-700 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Kingdom Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Kingdom Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-yellow-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Noble Kingdom
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Become part of a legendary realm where honor, courage, and magic unite.
            </p>
            <button className="bg-white text-amber-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Begin Your Quest
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes magicSparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
} 