import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '💎',
    title: 'Crystal Formation',
    description: 'Mystical crystal growth',
    color: 'from-purple-400 to-blue-500'
  },
  {
    icon: '✨',
    title: 'Magical Energy',
    description: 'Ethereal power source',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: '🔮',
    title: 'Crystal Wisdom',
    description: 'Ancient knowledge stored',
    color: 'from-cyan-400 to-purple-500'
  },
  {
    icon: '🌟',
    title: 'Crystal Light',
    description: 'Illuminating magic',
    color: 'from-purple-500 to-pink-500'
  }
];

const testimonials = [
  {
    name: 'Crystal Guardian',
    role: 'Cave Protector',
    avatar: '💎',
    text: 'The crystal cave holds ancient wisdom within its glowing formations, where every facet reflects the magic of creation itself.',
    rating: 5
  },
  {
    name: 'Magical Sage',
    role: 'Crystal Keeper',
    avatar: '✨',
    text: 'Our crystals pulse with pure energy, creating a sanctuary where magic flows freely and dreams become reality.',
    rating: 5
  },
  {
    name: 'Crystal Seer',
    role: 'Mystical Guide',
    avatar: '🔮',
    text: 'The cave\'s crystal formations channel the purest magic, illuminating paths to wisdom and enlightenment.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Crystal Years' },
  { value: '100%', label: 'Magical Power' },
  { value: '24/7', label: 'Crystal Awake' },
  { value: '💎', label: 'Crystal Cave' }
];

const services = [
  { icon: '💎', title: 'Crystal Tours', desc: 'Cave exploration' },
  { icon: '✨', title: 'Magic Training', desc: 'Crystal energy' },
  { icon: '🔮', title: 'Wisdom Seeking', desc: 'Crystal knowledge' },
  { icon: '🌟', title: 'Light Healing', desc: 'Crystal therapy' }
];

export default function HomePageTheme184() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [crystalGlow, setCrystalGlow] = useState(0);
  const [magicPulse, setMagicPulse] = useState(0);
  const [caveEcho, setCaveEcho] = useState(0);
  const [lightShimmer, setLightShimmer] = useState(0);
  const [crystalFormation, setCrystalFormation] = useState(0);

  useEffect(() => {
    // Crystal glow animation
    const crystalInterval = setInterval(() => {
      setCrystalGlow(prev => (prev + 1) % 100);
    }, 100);

    // Magic pulse animation
    const magicInterval = setInterval(() => {
      setMagicPulse(prev => (prev + 1) % 100);
    }, 150);

    // Cave echo animation
    const echoInterval = setInterval(() => {
      setCaveEcho(prev => (prev + 1) % 100);
    }, 200);

    // Light shimmer animation
    const shimmerInterval = setInterval(() => {
      setLightShimmer(prev => (prev + 1) % 100);
    }, 300);

    // Crystal formation effect
    const formationInterval = setInterval(() => {
      setCrystalFormation(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(crystalInterval);
      clearInterval(magicInterval);
      clearInterval(echoInterval);
      clearInterval(shimmerInterval);
      clearInterval(formationInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-cyan-900 font-serif relative overflow-hidden">
      {/* Crystal Cave Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-purple-900/90 via-blue-900/70 to-cyan-900/80">
        {/* Mystical crystal cave with glowing formations */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Crystal cave gradients */}
            <defs>
              <linearGradient id="caveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#581C87" />
                <stop offset="50%" stopColor="#1E3A8A" />
                <stop offset="100%" stopColor="#0C4A6E" />
              </linearGradient>
              <linearGradient id="crystalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="magicGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#0891B2" />
              </linearGradient>
              <linearGradient id="lightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#BAE6FD" />
              </linearGradient>
              <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F0F9FF" />
                <stop offset="50%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#BAE6FD" />
              </linearGradient>
              <radialGradient id="crystalGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Cave background */}
            <rect x="0" y="0" width="1200" height="800" fill="url(#caveGradient)" />
            
            {/* Cave walls and formations */}
            <g>
              {/* Left cave wall */}
              <path
                d="M0,800 L200,600 L150,400 L100,200 L0,100 Z"
                fill="url(#caveGradient)"
                opacity="0.8"
                stroke="url(#crystalGradient)"
                strokeWidth="3"
              />
              {/* Right cave wall */}
              <path
                d="M1200,800 L1000,600 L1050,400 L1100,200 L1200,100 Z"
                fill="url(#caveGradient)"
                opacity="0.8"
                stroke="url(#crystalGradient)"
                strokeWidth="3"
              />
              {/* Cave ceiling */}
              <path
                d="M0,100 L300,50 L600,30 L900,50 L1200,100 L1200,0 L0,0 Z"
                fill="url(#caveGradient)"
                opacity="0.7"
                stroke="url(#crystalGradient)"
                strokeWidth="2"
              />
            </g>
            
            {/* Large central crystal cluster */}
            <g>
              {/* Main crystal */}
              <polygon
                points="600,400 650,200 700,400 650,600"
                fill="url(#crystalGradient)"
                opacity="0.9"
                stroke="url(#lightGradient)"
                strokeWidth="4"
                filter="drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))"
              />
              {/* Crystal facets */}
              <polygon
                points="600,400 620,300 640,400 620,500"
                fill="url(#magicGradient)"
                opacity="0.8"
                stroke="url(#lightGradient)"
                strokeWidth="2"
              />
              <polygon
                points="600,400 580,300 560,400 580,500"
                fill="url(#magicGradient)"
                opacity="0.8"
                stroke="url(#lightGradient)"
                strokeWidth="2"
              />
              {/* Crystal glow effect */}
              <circle
                cx="600"
                cy="400"
                r="100"
                fill="url(#crystalGlow)"
                opacity="0.3"
              />
            </g>
            
            {/* Smaller crystal formations */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <polygon
                  points={`${200 + i * 120},${500 + Math.sin(i) * 50} ${220 + i * 120},${400 + Math.sin(i) * 50} ${240 + i * 120},${500 + Math.sin(i) * 50} ${220 + i * 120},${600 + Math.sin(i) * 50}`}
                  fill="url(#crystalGradient)"
                  opacity="0.7"
                  stroke="url(#lightGradient)"
                  strokeWidth="2"
                />
                <circle
                  cx={220 + i * 120}
                  cy={500 + Math.sin(i) * 50}
                  r="30"
                  fill="url(#crystalGlow)"
                  opacity="0.2"
                />
              </g>
            ))}
            
            {/* Floating magical particles */}
            {Array.from({ length: 20 }, (_, i) => (
              <circle
                key={i}
                cx={100 + i * 50}
                cy={100 + Math.sin(i * 0.5) * 50}
                r="3"
                fill="url(#lightGradient)"
                opacity="0.8"
              >
                <animate
                  attributeName="cy"
                  values={`${100 + Math.sin(i * 0.5) * 50};${700 + Math.sin(i * 0.5) * 50};${100 + Math.sin(i * 0.5) * 50}`}
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
            ))}
            
            {/* Cave floor crystals */}
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                <polygon
                  points={`${150 + i * 80},${750} ${170 + i * 80},${700} ${190 + i * 80},${750} ${170 + i * 80},${800}`}
                  fill="url(#magicGradient)"
                  opacity="0.6"
                  stroke="url(#lightGradient)"
                  strokeWidth="1"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="relative py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="text-white">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Crystal Cave Fantasy
                </h1>
                <p className="text-purple-200 mt-2">Mystical crystal realm</p>
              </div>
              <div className="text-white text-right">
                <div className="text-2xl mb-2">💎✨</div>
                <div className="text-sm text-purple-300">Crystal Magic</div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Crystal
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cave
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-4xl mx-auto">
              Step into a mystical realm where crystals pulse with ancient magic and every facet holds the wisdom of ages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Crystals
              </button>
              <button className="border-2 border-purple-400 text-purple-200 hover:bg-purple-400 hover:text-purple-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Learn Magic
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Crystal Powers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-purple-200">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Crystal Wisdom
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                  <p className="text-xl text-purple-200 italic mb-4">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-purple-300">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Crystal Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-purple-200 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Enter the Crystal Realm
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Discover the mystical power of crystals and unlock ancient wisdom in our enchanted cave
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Begin Your Journey
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-purple-400/30">
          <div className="container mx-auto px-4 text-center">
            <div className="text-3xl mb-4">💎✨🔮</div>
            <p className="text-purple-200">
              Crystal Cave Fantasy - Where magic meets reality
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
} 