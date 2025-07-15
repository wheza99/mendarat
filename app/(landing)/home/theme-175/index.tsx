import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🏰',
    title: 'Medieval Castles',
    description: 'Majestic stone fortresses',
    color: 'from-gray-600 to-gray-800'
  },
  {
    icon: '🐉',
    title: 'Mythical Dragons',
    description: 'Ancient fire-breathing beasts',
    color: 'from-red-600 to-orange-500'
  },
  {
    icon: '⚔️',
    title: 'Noble Knights',
    description: 'Brave armored warriors',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    icon: '🌲',
    title: 'Enchanted Forests',
    description: 'Mystical woodland realms',
    color: 'from-green-600 to-emerald-700'
  }
];

const testimonials = [
  {
    name: 'Sir Dragonheart',
    role: 'Knight Commander',
    avatar: '⚔️',
    text: 'The medieval realm offers endless adventures where honor and courage meet the magic of ancient times.',
    rating: 5
  },
  {
    name: 'Lady Mystic',
    role: 'Forest Guardian',
    avatar: '🌲',
    text: 'Our enchanted forests hold secrets of old magic, where every tree whispers tales of forgotten legends.',
    rating: 5
  },
  {
    name: 'Dragon Lord',
    role: 'Ancient Beast Master',
    avatar: '🐉',
    text: 'The dragons of our realm are not mere beasts, but wise guardians of ancient knowledge and power.',
    rating: 5
  }
];

const stats = [
  { value: '1000+', label: 'Years of History' },
  { value: '∞', label: 'Magical Spells' },
  { value: '24/7', label: 'Castle Guarded' },
  { value: '🏰', label: 'Stone Walls' }
];

const services = [
  { icon: '🏰', title: 'Castle Tours', desc: 'Medieval architecture' },
  { icon: '🐉', title: 'Dragon Training', desc: 'Beast mastery' },
  { icon: '⚔️', title: 'Knight Training', desc: 'Combat skills' },
  { icon: '🌲', title: 'Forest Expeditions', desc: 'Magical adventures' }
];

export default function HomePageTheme175() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [dragonFlight, setDragonFlight] = useState(0);
  const [castleGlow, setCastleGlow] = useState(0);
  const [forestMagic, setForestMagic] = useState(0);
  const [knightMovement, setKnightMovement] = useState(0);
  const [bannerWave, setBannerWave] = useState(0);

  useEffect(() => {
    // Dragon flight animation
    const dragonInterval = setInterval(() => {
      setDragonFlight(prev => (prev + 1) % 100);
    }, 100);

    // Castle glow animation
    const castleInterval = setInterval(() => {
      setCastleGlow(prev => (prev + 1) % 100);
    }, 150);

    // Forest magic animation
    const forestInterval = setInterval(() => {
      setForestMagic(prev => (prev + 1) % 100);
    }, 200);

    // Knight movement animation
    const knightInterval = setInterval(() => {
      setKnightMovement(prev => (prev + 1) % 100);
    }, 300);

    // Banner wave animation
    const bannerInterval = setInterval(() => {
      setBannerWave(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(dragonInterval);
      clearInterval(castleInterval);
      clearInterval(forestInterval);
      clearInterval(knightInterval);
      clearInterval(bannerInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900 font-serif relative overflow-hidden">
      {/* Medieval Fantasy Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900/90 via-purple-900/70 to-indigo-900/80">
        {/* Fantasy landscape with castle and dragons */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Medieval gradients */}
            <defs>
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="50%" stopColor="#334155" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              <linearGradient id="castleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#64748B" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <linearGradient id="dragonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="50%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#B91C1C" />
              </linearGradient>
              <linearGradient id="forestGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#16A34A" />
                <stop offset="50%" stopColor="#15803D" />
                <stop offset="100%" stopColor="#166534" />
              </linearGradient>
              <linearGradient id="fireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#DC2626" />
              </linearGradient>
              <radialGradient id="magicGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Sky */}
            <rect x="0" y="0" width="1200" height="400" fill="url(#skyGradient)" />
            
            {/* Moon */}
            <g>
              <circle
                cx="1000"
                cy="100"
                r="40"
                fill="url(#fireGradient)"
                opacity="0.8"
                stroke="url(#magicGlow)"
                strokeWidth="5"
              />
              {/* Moon craters */}
              <circle cx="990" cy="90" r="3" fill="url(#castleGradient)" opacity="0.6" />
              <circle cx="1010" cy="110" r="2" fill="url(#castleGradient)" opacity="0.6" />
              <circle cx="995" cy="115" r="1.5" fill="url(#castleGradient)" opacity="0.6" />
            </g>
            
            {/* Castle */}
            <g>
              {/* Main castle tower */}
              <rect
                x="500"
                y="300"
                width="200"
                height="300"
                fill="url(#castleGradient)"
                opacity="0.9"
                stroke="url(#magicGlow)"
                strokeWidth="3"
              />
              {/* Castle battlements */}
              {Array.from({ length: 8 }, (_, i) => (
                <rect
                  key={i}
                  x={510 + i * 25}
                  y="300"
                  width="15"
                  height="20"
                  fill="url(#castleGradient)"
                  opacity="0.8"
                  stroke="url(#magicGlow)"
                  strokeWidth="1"
                />
              ))}
              {/* Castle windows */}
              {Array.from({ length: 4 }, (_, i) => (
                <rect
                  key={i}
                  x={520 + i * 40}
                  y={350 + i * 60}
                  width="20"
                  height="30"
                  fill="url(#fireGradient)"
                  opacity={0.7 + Math.sin(castleGlow * 0.02 + i) * 0.3}
                  stroke="url(#fireGradient)"
                  strokeWidth="2"
                />
              ))}
              {/* Castle flag */}
              <rect
                x="580"
                y="280"
                width="4"
                height="40"
                fill="url(#castleGradient)"
                opacity="0.8"
              />
              <path
                d={`M584 280 Q${590 + Math.sin(bannerWave * 0.02) * 10} ${285 + Math.sin(bannerWave * 0.03) * 5} ${600 + Math.sin(bannerWave * 0.02) * 15} ${290 + Math.sin(bannerWave * 0.03) * 8} Q${610 + Math.sin(bannerWave * 0.02) * 20} ${295 + Math.sin(bannerWave * 0.03) * 10} ${620 + Math.sin(bannerWave * 0.02) * 25} ${300 + Math.sin(bannerWave * 0.03) * 12}`}
                fill="url(#dragonGradient)"
                opacity="0.9"
                stroke="url(#dragonGradient)"
                strokeWidth="2"
              />
              {/* Castle towers */}
              <rect x="480" y="250" width="60" height="150" fill="url(#castleGradient)" opacity="0.8" stroke="url(#magicGlow)" strokeWidth="2" />
              <rect x="660" y="250" width="60" height="150" fill="url(#castleGradient)" opacity="0.8" stroke="url(#magicGlow)" strokeWidth="2" />
              {/* Tower tops */}
              <path d="M480 250 L510 220 L540 250 Z" fill="url(#castleGradient)" opacity="0.9" />
              <path d="M660 250 L690 220 L720 250 Z" fill="url(#castleGradient)" opacity="0.9" />
              <path d="M500 300 L600 250 L700 300 Z" fill="url(#castleGradient)" opacity="0.9" />
            </g>
            
            {/* Dragons */}
            {Array.from({ length: 3 }, (_, i) => (
              <g key={i}>
                {/* Dragon body */}
                <ellipse
                  cx={200 + i * 300 + Math.sin(dragonFlight * 0.01 + i) * 50}
                  cy={150 + Math.cos(dragonFlight * 0.015 + i) * 30}
                  rx="40"
                  ry="15"
                  fill="url(#dragonGradient)"
                  opacity="0.9"
                  stroke="url(#dragonGradient)"
                  strokeWidth="2"
                />
                {/* Dragon wings */}
                <path
                  d={`M${160 + i * 300 + Math.sin(dragonFlight * 0.01 + i) * 50} ${150 + Math.cos(dragonFlight * 0.015 + i) * 30} Q${140 + i * 300 + Math.sin(dragonFlight * 0.01 + i) * 50} ${130 + Math.cos(dragonFlight * 0.015 + i) * 30} ${120 + i * 300 + Math.sin(dragonFlight * 0.01 + i) * 50} ${150 + Math.cos(dragonFlight * 0.015 + i) * 30}`}
                  fill="url(#dragonGradient)"
                  opacity="0.8"
                  stroke="url(#dragonGradient)"
                  strokeWidth="1"
                />
                <path
                  d={`M${240 + i * 300 + Math.sin(dragonFlight * 0.01 + i) * 50} ${150 + Math.cos(dragonFlight * 0.015 + i) * 30} Q${260 + i * 300 + Math.sin(dragonFlight * 0.01 + i) * 50} ${170 + Math.cos(dragonFlight * 0.015 + i) * 30} ${280 + i * 300 + Math.sin(dragonFlight * 0.01 + i) * 50} ${150 + Math.cos(dragonFlight * 0.015 + i) * 30}`}
                  fill="url(#dragonGradient)"
                  opacity="0.8"
                  stroke="url(#dragonGradient)"
                  strokeWidth="1"
                />
                {/* Dragon fire */}
                <path
                  d={`M${180 + i * 300 + Math.sin(dragonFlight * 0.01 + i) * 50} ${150 + Math.cos(dragonFlight * 0.015 + i) * 30} Q${170 + i * 300 + Math.sin(dragonFlight * 0.01 + i) * 50} ${140 + Math.cos(dragonFlight * 0.015 + i) * 30} ${160 + i * 300 + Math.sin(dragonFlight * 0.01 + i) * 50} ${150 + Math.cos(dragonFlight * 0.015 + i) * 30}`}
                  fill="url(#fireGradient)"
                  opacity="0.9"
                />
              </g>
            ))}
            
            {/* Enchanted Forest */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                {/* Tree trunks */}
                <rect
                  x={50 + i * 150}
                  y="500"
                  width="20"
                  height="200"
                  fill="url(#forestGradient)"
                  opacity="0.9"
                  stroke="url(#forestGradient)"
                  strokeWidth="2"
                />
                {/* Tree tops */}
                <circle
                  cx={60 + i * 150}
                  cy="480"
                  r={30 + Math.sin(forestMagic * 0.01 + i) * 10}
                  fill="url(#forestGradient)"
                  opacity="0.8"
                  stroke="url(#magicGlow)"
                  strokeWidth="1"
                />
                {/* Magic sparkles */}
                {Array.from({ length: 5 }, (_, j) => (
                  <circle
                    key={j}
                    cx={50 + i * 150 + j * 20 + Math.sin(forestMagic * 0.02 + i + j) * 15}
                    cy={450 + j * 15 + Math.cos(forestMagic * 0.03 + i + j) * 10}
                    r={1 + Math.sin(forestMagic * 0.01 + i + j) * 0.5}
                    fill="url(#fireGradient)"
                    opacity="0.8"
                  />
                ))}
              </g>
            ))}
            
            {/* Knights on horseback */}
            {Array.from({ length: 2 }, (_, i) => (
              <g key={i}>
                {/* Horse */}
                <ellipse
                  cx={300 + i * 400 + Math.sin(knightMovement * 0.01 + i) * 30}
                  cy={650 + Math.cos(knightMovement * 0.015 + i) * 10}
                  rx="25"
                  ry="15"
                  fill="url(#castleGradient)"
                  opacity="0.8"
                  stroke="url(#castleGradient)"
                  strokeWidth="2"
                />
                {/* Knight */}
                <rect
                  x={290 + i * 400 + Math.sin(knightMovement * 0.01 + i) * 30}
                  y="620"
                  width="20"
                  height="40"
                  fill="url(#castleGradient)"
                  opacity="0.9"
                  stroke="url(#magicGlow)"
                  strokeWidth="1"
                />
                {/* Knight helmet */}
                <path
                  d={`M${290 + i * 400 + Math.sin(knightMovement * 0.01 + i) * 30} 620 Q${300 + i * 400 + Math.sin(knightMovement * 0.01 + i) * 30} 610 ${310 + i * 400 + Math.sin(knightMovement * 0.01 + i) * 30} 620`}
                  fill="url(#castleGradient)"
                  opacity="0.9"
                  stroke="url(#magicGlow)"
                  strokeWidth="1"
                />
                {/* Knight sword */}
                <rect
                  x={315 + i * 400 + Math.sin(knightMovement * 0.01 + i) * 30}
                  y="630"
                  width="3"
                  height="25"
                  fill="url(#fireGradient)"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Floating magical particles */}
            {Array.from({ length: 30 }, (_, i) => (
              <circle
                key={i}
                cx={100 + i * 35 + Math.sin(forestMagic * 0.01 + i) * 20}
                cy={100 + (forestMagic * 0.5 + i * 15) % 300}
                r={1 + Math.sin(forestMagic * 0.02 + i) * 0.5}
                fill="url(#fireGradient)"
                opacity="0.7"
              />
            ))}
            
            {/* Ground */}
            <rect x="0" y="700" width="1200" height="100" fill="url(#forestGradient)" opacity="0.8" />
            
            {/* Castle moat */}
            <ellipse
              cx="600"
              cy="720"
              rx="150"
              ry="30"
              fill="url(#skyGradient)"
              opacity="0.6"
              stroke="url(#magicGlow)"
              strokeWidth="2"
            />
            
            {/* Torches on castle walls */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                <rect
                  x={510 + i * 30}
                  y="320"
                  width="3"
                  height="15"
                  fill="url(#castleGradient)"
                  opacity="0.8"
                />
                <circle
                  cx={511.5 + i * 30}
                  cy="320"
                  r="4"
                  fill="url(#fireGradient)"
                  opacity={0.8 + Math.sin(castleGlow * 0.02 + i) * 0.2}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Floating magical particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
              style={{
                left: `${10 + i * 3}%`,
                top: `${30 + Math.sin(forestMagic * 0.01 + i) * 40}%`,
                animation: `float ${4 + i * 0.1}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Medieval Fantasy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Enter a realm of ancient magic, where dragons soar through enchanted skies 
              and noble knights defend majestic castles in a world of legendary adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-red-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Enter the Realm
              </button>
              <button className="px-8 py-4 border-2 border-purple-500 text-purple-300 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                Join the Quest
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Realm Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/80 to-purple-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/40 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Voices of the Realm
            </h2>
            <div className="bg-gradient-to-br from-gray-800/80 to-purple-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/40">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-300 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-white font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-purple-300">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="flex justify-center mt-4">
                  {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">⭐</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-purple-500 scale-125'
                      : 'bg-purple-400/30 hover:bg-purple-400/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Realm Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/40 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">🏰</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Quest?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Embark on legendary adventures in a world where magic meets medieval might, 
              and every castle holds secrets waiting to be discovered.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-purple-600 via-red-600 to-orange-600 text-white font-semibold rounded-full text-lg hover:from-purple-700 hover:via-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Start Your Journey
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
} 