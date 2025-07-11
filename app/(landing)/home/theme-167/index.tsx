import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🏛️',
    title: 'Great Pyramids',
    description: 'Ancient architectural wonders',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: '👑',
    title: 'Pharaoh Dynasty',
    description: 'Royal Egyptian lineage',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: '📜',
    title: 'Sacred Hieroglyphics',
    description: 'Ancient written wisdom',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: '🐪',
    title: 'Desert Caravans',
    description: 'Golden sand expeditions',
    color: 'from-yellow-300 to-amber-400'
  }
];

const testimonials = [
  {
    name: 'Pharaoh Ramses',
    role: 'Royal Monarch',
    avatar: '👑',
    text: 'Our pyramids stand as eternal monuments to human achievement and divine wisdom.',
    rating: 5
  },
  {
    name: 'High Priest',
    role: 'Sacred Guardian',
    avatar: '📜',
    text: 'The ancient texts reveal secrets that have guided our civilization for millennia.',
    rating: 5
  },
  {
    name: 'Desert Guide',
    role: 'Sahara Explorer',
    avatar: '🐪',
    text: 'The golden sands hold mysteries that only the brave and wise can uncover.',
    rating: 5
  }
];

const stats = [
  { value: '4500+', label: 'Years of History' },
  { value: '∞', label: 'Ancient Wisdom' },
  { value: '100%', label: 'Royal Heritage' },
  { value: '24/7', label: 'Sacred Grounds' }
];

const services = [
  { icon: '🏛️', title: 'Pyramid Tours', desc: 'Ancient architecture' },
  { icon: '👑', title: 'Royal Ceremonies', desc: 'Pharaoh rituals' },
  { icon: '📜', title: 'Hieroglyphic Study', desc: 'Ancient texts' },
  { icon: '🐪', title: 'Desert Expeditions', desc: 'Sahara adventures' }
];

export default function HomePageTheme167() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [sandStorm, setSandStorm] = useState(0);
  const [pyramidGlow, setPyramidGlow] = useState(0);
  const [hieroglyphicFlow, setHieroglyphicFlow] = useState(0);

  useEffect(() => {
    // Sand storm animation
    const sandInterval = setInterval(() => {
      setSandStorm(prev => (prev + 1) % 100);
    }, 100);

    // Pyramid glow animation
    const pyramidInterval = setInterval(() => {
      setPyramidGlow(prev => (prev + 1) % 100);
    }, 150);

    // Hieroglyphic flow effect
    const hieroglyphicInterval = setInterval(() => {
      setHieroglyphicFlow(prev => (prev + 1) % 100);
    }, 200);

    return () => {
      clearInterval(sandInterval);
      clearInterval(pyramidInterval);
      clearInterval(hieroglyphicInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-amber-200 to-orange-300 font-serif relative overflow-hidden">
      {/* Ancient Egyptian Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-yellow-100/90 via-amber-200/70 to-orange-300/80">
        {/* Desert landscape with pyramids */}
        <div className="absolute bottom-0 left-0 w-full h-96">
          <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
            {/* Desert dunes */}
            <path
              d="M0,400 Q200,350 400,380 T800,400 T1200,380 L1200,400 Z"
              fill="url(#sandGradient)"
              opacity="0.8"
            />
            <path
              d="M0,400 Q150,320 300,360 T600,400 T900,340 T1200,380 L1200,400 Z"
              fill="url(#sandGradient2)"
              opacity="0.6"
            />
            
            {/* Main pyramids */}
            <polygon
              points="200,400 300,150 400,400"
              fill="url(#pyramidGradient)"
              opacity="0.9"
              stroke="url(#goldGradient)"
              strokeWidth="2"
            />
            <polygon
              points="350,400 450,120 550,400"
              fill="url(#pyramidGradient2)"
              opacity="0.8"
              stroke="url(#goldGradient)"
              strokeWidth="2"
            />
            <polygon
              points="500,400 600,100 700,400"
              fill="url(#pyramidGradient3)"
              opacity="0.9"
              stroke="url(#goldGradient)"
              strokeWidth="2"
            />
            
            {/* Pyramid details */}
            <rect x="295" y="160" width="10" height="20" fill="url(#goldGradient)" opacity="0.8" />
            <rect x="445" y="130" width="10" height="20" fill="url(#goldGradient)" opacity="0.8" />
            <rect x="595" y="110" width="10" height="20" fill="url(#goldGradient)" opacity="0.8" />
            
            {/* Hieroglyphic symbols */}
            {Array.from({ length: 15 }, (_, i) => (
              <g key={i}>
                <rect
                  x={250 + i * 60}
                  y={350 + Math.sin(hieroglyphicFlow * 0.02 + i) * 10}
                  width="8"
                  height="12"
                  fill="url(#hieroglyphicGradient)"
                  opacity="0.7"
                />
                <circle
                  cx={280 + i * 55}
                  cy={340 + Math.cos(hieroglyphicFlow * 0.03 + i) * 8}
                  r="4"
                  fill="url(#hieroglyphicGradient)"
                  opacity="0.6"
                />
                <path
                  d={`M${270 + i * 65} 360 Q${275 + i * 65} 355 ${280 + i * 65} 360`}
                  stroke="url(#hieroglyphicGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.5"
                />
              </g>
            ))}
            
            {/* Sphinx silhouette */}
            <path
              d="M800,400 L850,350 L900,380 L950,360 L1000,380 L1050,350 L1100,400 Z"
              fill="url(#sphinxGradient)"
              opacity="0.7"
            />
            
            <defs>
              <linearGradient id="sandGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="sandGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#FCD34D" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <linearGradient id="pyramidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="pyramidGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#FCD34D" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <linearGradient id="pyramidGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#FCD34D" />
              </linearGradient>
              <linearGradient id="hieroglyphicGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D97706" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="sphinxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#92400E" />
                <stop offset="50%" stopColor="#78350F" />
                <stop offset="100%" stopColor="#451A03" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Animated sand particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 45 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-yellow-300/60"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                top: `-${Math.random() * 20}px`,
                transform: `translateY(${Math.sin(sandStorm * 0.1 + i) * 50 - 100}vh) translateX(${Math.sin(pyramidGlow * 0.1 + i) * 30}px)`,
                animationDuration: `${4 + Math.random() * 3}s`,
                opacity: 0.4 + Math.random() * 0.4,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>

        {/* Floating Egyptian elements */}
        <div className="absolute top-20 left-10 animate-bounce" style={{
          opacity: 0.8,
          transform: `translateY(${Math.sin(sandStorm * 0.02) * 25}px) rotate(${pyramidGlow * 0.5}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.8))'
        }}>
          <div className="text-4xl">🏛️</div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(pyramidGlow * 0.02) * 20}px) rotate(${hieroglyphicFlow * 0.3}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(217, 119, 6, 0.8))'
        }}>
          <div className="text-3xl">👑</div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-bounce" style={{
          opacity: 0.6,
          transform: `translateY(${Math.sin(hieroglyphicFlow * 0.02) * 18}px) rotate(${sandStorm * 0.2}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.8))'
        }}>
          <div className="text-3xl">📜</div>
        </div>
        <div className="absolute bottom-60 right-1/3 animate-pulse" style={{
          opacity: 0.7,
          transform: `translateY(${Math.cos(sandStorm * 0.02) * 15}px) rotate(${pyramidGlow * 0.4}deg)`,
          filter: 'drop-shadow(0 0 15px rgba(217, 119, 6, 0.8))'
        }}>
          <div className="text-3xl">🐪</div>
        </div>

        {/* Golden light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-yellow-400 via-transparent to-amber-500 opacity-60 animate-pulse" style={{
          transform: `translateX(${Math.sin(pyramidGlow * 0.1) * 30}px)`,
          filter: 'blur(2px)'
        }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-amber-500 via-transparent to-orange-500 opacity-60 animate-pulse" style={{
          transform: `translateX(${Math.sin(sandStorm * 0.1) * 25}px)`,
          filter: 'blur(2px)'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
              Ancient Egyptian Kingdom
            </h1>
            <p className="text-xl text-gray-800 mb-8 leading-relaxed">
              Journey through time to the golden age of pharaohs and pyramids. 
              Discover the mysteries of ancient Egypt in our sacred desert realm.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25">
                Explore the Pyramids
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/25">
                Sacred Tour
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 bg-yellow-50/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Ancient Wonders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-yellow-100/80 to-amber-100/80 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300 transform hover:scale-105"
                  style={{
                    boxShadow: `0 0 30px rgba(245, 158, 11, ${0.1 + Math.sin(pyramidGlow * 0.02 + index) * 0.1})`
                  }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Royal Testimonials
            </h2>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-100/80 to-amber-100/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30">
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                <p className="text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="text-gray-800">
                  <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-amber-600">{testimonials[currentTestimonial].role}</div>
                </div>
                <div className="flex justify-center mt-4">
                  {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-yellow-50/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Sacred Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-yellow-100/80 to-amber-100/80 backdrop-blur-sm border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 transform hover:scale-105"
                  style={{
                    boxShadow: `0 0 30px rgba(217, 119, 6, ${0.1 + Math.sin(sandStorm * 0.02 + index) * 0.1})`
                  }}
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-500/50 to-amber-500/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Enter the Sacred Realm
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Experience the majesty of ancient Egypt and discover timeless wisdom.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-white font-bold rounded-lg text-lg hover:from-yellow-600 hover:via-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25">
              Begin Your Journey
            </button>
          </div>
        </section>
      </div>
    </div>
  );
} 