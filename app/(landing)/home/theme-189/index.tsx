import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🕹️',
    title: 'Arcade Machines',
    description: 'Classic gaming consoles',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: '🎮',
    title: 'Pixel Games',
    description: 'Retro pixel art games',
    color: 'from-green-400 to-blue-500'
  },
  {
    icon: '🌟',
    title: 'Neon Lights',
    description: 'Vibrant arcade lighting',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: '🎵',
    title: 'Chiptune Music',
    description: '8-bit retro soundtracks',
    color: 'from-cyan-400 to-purple-500'
  }
];

const testimonials = [
  {
    name: 'Arcade Master',
    role: 'Retro Gaming Expert',
    avatar: '🕹️',
    text: 'Di arcade retro ini, setiap mesin game membawa nostalgia masa lalu, di mana pixel art dan chiptune music menciptakan pengalaman gaming yang tak terlupakan.',
    rating: 5
  },
  {
    name: 'Pixel Artist',
    role: 'Retro Designer',
    avatar: '🎮',
    text: 'Seni pixel kami menghidupkan kembali era 80-an, menciptakan visual yang menakjubkan dengan warna-warna neon yang cemerlang.',
    rating: 5
  },
  {
    name: 'Chiptune DJ',
    role: 'Retro Music Producer',
    avatar: '🎵',
    text: 'Musik chiptune kami membawa Anda kembali ke era arcade klasik, dengan melodi 8-bit yang menggetarkan jiwa gamer.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Arcade Games' },
  { value: '100%', label: 'Retro Fun' },
  { value: '24/7', label: 'Arcade Open' },
  { value: '🕹️', label: 'Pixel Games' }
];

const services = [
  { icon: '🕹️', title: 'Arcade Tours', desc: 'Classic game exploration' },
  { icon: '🎮', title: 'Pixel Games', desc: 'Retro gaming experience' },
  { icon: '🌟', title: 'Neon Lights', desc: 'Vibrant arcade atmosphere' },
  { icon: '🎵', title: 'Chiptune', desc: '8-bit music production' }
];

export default function HomePageTheme189() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [pixelMove, setPixelMove] = useState(0);
  const [neonGlow, setNeonGlow] = useState(0);
  const [arcadeSpin, setArcadeSpin] = useState(0);
  const [musicWave, setMusicWave] = useState(0);
  const [gameScore, setGameScore] = useState(0);

  useEffect(() => {
    const pixelInterval = setInterval(() => setPixelMove(prev => (prev + 1) % 100), 100);
    const neonInterval = setInterval(() => setNeonGlow(prev => (prev + 1) % 100), 150);
    const arcadeInterval = setInterval(() => setArcadeSpin(prev => (prev + 1) % 100), 200);
    const musicInterval = setInterval(() => setMusicWave(prev => (prev + 1) % 100), 120);
    const scoreInterval = setInterval(() => setGameScore(prev => (prev + 1) % 100), 80);
    
    return () => {
      clearInterval(pixelInterval);
      clearInterval(neonInterval);
      clearInterval(arcadeInterval);
      clearInterval(musicInterval);
      clearInterval(scoreInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-800 to-cyan-900 font-mono relative overflow-hidden">
      {/* Retro Arcade Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-purple-900/90 via-pink-800/70 to-cyan-900/80">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="arcadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#581C87" />
                <stop offset="50%" stopColor="#BE185D" />
                <stop offset="100%" stopColor="#0E7490" />
              </linearGradient>
              <radialGradient id="neonGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
              </radialGradient>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            
            {/* Arcade background */}
            <rect x="0" y="0" width="1200" height="800" fill="url(#arcadeGradient)" />
            
            {/* Arcade machines */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                {/* Arcade cabinet */}
                <rect
                  x={150 + i * 180}
                  y={300 + (i % 2) * 50}
                  width="120"
                  height="300"
                  fill="url(#neonGradient)"
                  opacity="0.9"
                  stroke="#EC4899"
                  strokeWidth="3"
                  rx="10"
                />
                {/* Screen */}
                <rect
                  x={160 + i * 180}
                  y={320 + (i % 2) * 50}
                  width="100"
                  height="80"
                  fill="#000000"
                  opacity="0.8"
                  rx="5"
                />
                {/* Pixel game elements */}
                {Array.from({ length: 8 }, (_, j) => (
                  <rect
                    key={j}
                    x={165 + i * 180 + (j % 4) * 20 + (pixelMove + i * 5) % 10}
                    y={330 + (i % 2) * 50 + Math.floor(j / 4) * 20 + (pixelMove + i * 3) % 15}
                    width="12"
                    height="12"
                    fill={j % 2 === 0 ? "#EC4899" : "#06B6D4"}
                    opacity="0.9"
                  />
                ))}
                {/* Joystick */}
                <circle
                  cx={200 + i * 180}
                  cy={450 + (i % 2) * 50}
                  r="15"
                  fill="url(#neonGradient)"
                  opacity="0.8"
                  stroke="#EC4899"
                  strokeWidth="2"
                />
                {/* Buttons */}
                {Array.from({ length: 4 }, (_, j) => (
                  <circle
                    key={j}
                    cx={220 + i * 180 + (j % 2) * 20}
                    cy={450 + (i % 2) * 50 + Math.floor(j / 2) * 20}
                    r="8"
                    fill={j % 2 === 0 ? "#EC4899" : "#06B6D4"}
                    opacity="0.9"
                  />
                ))}
              </g>
            ))}
            
            {/* Neon signs */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <rect
                  x={100 + i * 140}
                  y={100 + (i % 2) * 30}
                  width="100"
                  height="8"
                  fill="url(#neonGradient)"
                  opacity="0.9"
                  filter="drop-shadow(0 0 10px rgba(236, 72, 153, 0.6))"
                />
                {/* Neon text */}
                <text
                  x={150 + i * 140}
                  y={108 + (i % 2) * 30}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontFamily="monospace"
                  opacity="0.9"
                >
                  ARCADE
                </text>
              </g>
            ))}
            
            {/* Pixel particles */}
            {Array.from({ length: 20 }, (_, i) => (
              <rect
                key={i}
                x={50 + i * 60 + (pixelMove + i * 7) % 100}
                y={150 + (i % 3) * 200 + (pixelMove + i * 5) % 150}
                width="4"
                height="4"
                fill={i % 2 === 0 ? "#EC4899" : "#06B6D4"}
                opacity="0.8"
              />
            ))}
            
            {/* Music waves */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${300 + i * 150},700 Q${350 + i * 150},${650 - (musicWave + i * 10) % 100} ${400 + i * 150},700 Q${450 + i * 150},${750 + (musicWave + i * 10) % 100} ${500 + i * 150},700`}
                  stroke="url(#neonGradient)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.7"
                />
              </g>
            ))}
            
            {/* Score display */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                <rect
                  x={800 + i * 80}
                  y={150 + (i % 2) * 50}
                  width="60"
                  height="30"
                  fill="#000000"
                  opacity="0.8"
                  stroke="url(#neonGradient)"
                  strokeWidth="2"
                  rx="5"
                />
                <text
                  x={830 + i * 80}
                  y={170 + (i % 2) * 50}
                  textAnchor="middle"
                  fill="#EC4899"
                  fontSize="14"
                  fontFamily="monospace"
                  opacity="0.9"
                >
                  {(gameScore + i * 1000) % 9999}
                </text>
              </g>
            ))}
            
            {/* Retro grid pattern */}
            {Array.from({ length: 20 }, (_, i) => (
              <line
                key={i}
                x1={i * 60}
                y1="0"
                x2={i * 60}
                y2="800"
                stroke="url(#neonGradient)"
                strokeWidth="1"
                opacity="0.1"
              />
            ))}
            {Array.from({ length: 16 }, (_, i) => (
              <line
                key={i}
                x1="0"
                y1={i * 50}
                x2="1200"
                y2={i * 50}
                stroke="url(#neonGradient)"
                strokeWidth="1"
                opacity="0.1"
              />
            ))}
            
            {/* Glowing orbs */}
            {Array.from({ length: 12 }, (_, i) => (
              <circle
                key={i}
                cx={100 + i * 100}
                cy={100 + (i % 3) * 200 + (neonGlow + i * 8) % 100}
                r="6"
                fill="url(#neonGradient)"
                opacity="0.8"
                filter="drop-shadow(0 0 10px rgba(236, 72, 153, 0.6))"
              />
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
              <div className="text-pink-400">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Retro Arcade
                </h1>
                <p className="text-pink-300 mt-2">Tempat nostalgia gaming klasik</p>
              </div>
              <div className="text-cyan-400 text-right">
                <div className="text-2xl mb-2">🕹️🎮🌟🎵</div>
                <div className="text-sm text-cyan-300">80s Gaming</div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Retro
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Arcade
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-300 mb-12 max-w-4xl mx-auto">
              Masuki dunia retro arcade yang menakjubkan, di mana pixel art, neon lights, dan chiptune music membawa Anda kembali ke era gaming klasik yang penuh nostalgia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Mulai Bermain
              </button>
              <button className="border-2 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Jelajahi Arcade
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-black/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Fitur Retro Arcade
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-800/60 via-pink-800/60 to-cyan-800/60 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-pink-300 mb-4">{feature.title}</h3>
                  <p className="text-pink-200">{feature.description}</p>
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
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-pink-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-black/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Suara Retro Arcade
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-800/60 via-pink-800/60 to-cyan-800/60 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                  <h3 className="text-2xl font-bold text-pink-300 mb-2">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-pink-200 mb-4">{testimonials[currentTestimonial].role}</p>
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-pink-200 text-center italic">"{testimonials[currentTestimonial].text}"</p>
                <div className="flex justify-center mt-8 gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-pink-400' : 'bg-pink-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Layanan Arcade
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-800/60 via-pink-800/60 to-cyan-800/60 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-pink-300 mb-2">{service.title}</h3>
                  <p className="text-pink-200 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Bergabunglah dengan Retro Arcade
            </h2>
            <p className="text-xl text-pink-200 mb-8 max-w-2xl mx-auto">
              Masuki dunia retro arcade yang menakjubkan, di mana nostalgia gaming klasik bertemu dengan teknologi modern.
            </p>
            <button className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Mulai Sekarang
            </button>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 bg-purple-900/20">
          <div className="container mx-auto px-4 text-center">
            <div className="text-2xl mb-4">🕹️🎮🌟🎵</div>
            <p className="text-pink-200">Retro Arcade - Nostalgia Gaming Klasik</p>
          </div>
        </footer>
      </div>
    </div>
  );
} 