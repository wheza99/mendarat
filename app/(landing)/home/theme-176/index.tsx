import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🎮',
    title: 'Arcade Machines',
    description: 'Classic gaming cabinets',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '🕹️',
    title: 'Pixel Art',
    description: 'Retro digital graphics',
    color: 'from-green-400 to-cyan-500'
  },
  {
    icon: '🎯',
    title: 'High Scores',
    description: 'Legendary achievements',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: '⚡',
    title: 'Power Ups',
    description: 'Game-changing abilities',
    color: 'from-blue-500 to-indigo-600'
  }
];

const testimonials = [
  {
    name: 'Arcade Master',
    role: 'High Score Champion',
    avatar: '🎮',
    text: 'The golden age of gaming lives on through these classic arcade machines, where every coin drop brings back memories of endless fun.',
    rating: 5
  },
  {
    name: 'Pixel Artist',
    role: 'Retro Game Designer',
    avatar: '🕹️',
    text: 'Pixel art captures the essence of gaming\'s most creative era, where every pixel tells a story of innovation and imagination.',
    rating: 5
  },
  {
    name: 'Game Legend',
    role: 'Retro Gaming Expert',
    avatar: '⚡',
    text: 'These classic games defined a generation and continue to inspire new players with their timeless gameplay and unforgettable soundtracks.',
    rating: 5
  }
];

const stats = [
  { value: '1UP', label: 'Extra Life' },
  { value: '999', label: 'High Score' },
  { value: '24/7', label: 'Arcade Open' },
  { value: '🎮', label: 'Game On' }
];

const services = [
  { icon: '🎮', title: 'Arcade Tours', desc: 'Classic machine access' },
  { icon: '🕹️', title: 'Pixel Workshops', desc: 'Retro art creation' },
  { icon: '🎯', title: 'Score Challenges', desc: 'Competitive gaming' },
  { icon: '⚡', title: 'Power Up Training', desc: 'Skill development' }
];

export default function HomePageTheme176() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [pixelGlow, setPixelGlow] = useState(0);
  const [arcadePulse, setArcadePulse] = useState(0);
  const [gameFlow, setGameFlow] = useState(0);
  const [scoreFlash, setScoreFlash] = useState(0);
  const [retroWave, setRetroWave] = useState(0);

  useEffect(() => {
    // Pixel glow animation
    const pixelInterval = setInterval(() => {
      setPixelGlow(prev => (prev + 1) % 100);
    }, 100);

    // Arcade pulse animation
    const arcadeInterval = setInterval(() => {
      setArcadePulse(prev => (prev + 1) % 100);
    }, 150);

    // Game flow animation
    const gameInterval = setInterval(() => {
      setGameFlow(prev => (prev + 1) % 100);
    }, 200);

    // Score flash animation
    const scoreInterval = setInterval(() => {
      setScoreFlash(prev => (prev + 1) % 100);
    }, 300);

    // Retro wave effect
    const waveInterval = setInterval(() => {
      setRetroWave(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(pixelInterval);
      clearInterval(arcadeInterval);
      clearInterval(gameInterval);
      clearInterval(scoreInterval);
      clearInterval(waveInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-pink-900 font-mono relative overflow-hidden">
      {/* Retro Gaming Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/90 via-purple-900/70 to-pink-900/80">
        {/* Gaming landscape with arcade machines and pixels */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Retro gaming gradients */}
            <defs>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
              <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="neonGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="arcadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1F2937" />
                <stop offset="50%" stopColor="#111827" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
              <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              <radialGradient id="neonGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#EC4899" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Grid background */}
            {Array.from({ length: 20 }, (_, i) => (
              <g key={i}>
                <line
                  x1={i * 60}
                  y1="0"
                  x2={i * 60}
                  y2="800"
                  stroke="url(#neonGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <line
                  x1="0"
                  y1={i * 40}
                  x2="1200"
                  y2={i * 40}
                  stroke="url(#neonGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </g>
            ))}
            
            {/* Arcade machines */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                {/* Arcade cabinet */}
                <rect
                  x={100 + i * 250}
                  y="400"
                  width="120"
                  height="300"
                  fill="url(#arcadeGradient)"
                  opacity="0.9"
                  stroke="url(#neonGradient)"
                  strokeWidth="3"
                />
                {/* Arcade screen */}
                <rect
                  x={110 + i * 250}
                  y="420"
                  width="100"
                  height="80"
                  fill="url(#screenGradient)"
                  opacity="0.8"
                  stroke="url(#neonGradient)"
                  strokeWidth="2"
                />
                {/* Screen pixels */}
                {Array.from({ length: 8 }, (_, j) => (
                  <rect
                    key={j}
                    x={115 + i * 250 + j * 12}
                    y="425"
                    width="8"
                    height="8"
                    fill="url(#neonGradient)"
                    opacity={0.7 + Math.sin(pixelGlow * 0.02 + i + j) * 0.3}
                  />
                ))}
                {/* Control panel */}
                <rect
                  x={110 + i * 250}
                  y="520"
                  width="100"
                  height="40"
                  fill="url(#arcadeGradient)"
                  opacity="0.8"
                  stroke="url(#neonGradient)"
                  strokeWidth="2"
                />
                {/* Joystick */}
                <circle
                  cx={130 + i * 250}
                  cy="540"
                  r="8"
                  fill="url(#neonGradient)"
                  opacity="0.8"
                  stroke="url(#neonGradient)"
                  strokeWidth="2"
                />
                {/* Buttons */}
                {Array.from({ length: 3 }, (_, j) => (
                  <circle
                    key={j}
                    cx={160 + i * 250 + j * 20}
                    cy="540"
                    r="6"
                    fill="url(#neonGradient2)"
                    opacity="0.8"
                    stroke="url(#neonGradient2)"
                    strokeWidth="1"
                  />
                ))}
                {/* Arcade marquee */}
                <rect
                  x={105 + i * 250}
                  y="380"
                  width="110"
                  height="20"
                  fill="url(#neonGradient)"
                  opacity={0.8 + Math.sin(arcadePulse * 0.02 + i) * 0.2}
                  stroke="url(#neonGradient)"
                  strokeWidth="1"
                />
              </g>
            ))}
            
            {/* Floating pixels */}
            {Array.from({ length: 50 }, (_, i) => (
              <rect
                key={i}
                x={50 + i * 25 + Math.sin(pixelGlow * 0.01 + i) * 20}
                y={50 + (pixelGlow * 0.5 + i * 15) % 300}
                width="4"
                height="4"
                fill="url(#neonGradient)"
                opacity="0.7"
              />
            ))}
            
            {/* High score display */}
            <g>
              <rect
                x="900"
                y="100"
                width="250"
                height="150"
                fill="url(#arcadeGradient)"
                opacity="0.9"
                stroke="url(#neonGradient)"
                strokeWidth="3"
              />
              {/* Score digits */}
              {Array.from({ length: 3 }, (_, i) => (
                <g key={i}>
                  <rect
                    x={920 + i * 60}
                    y="130"
                    width="40"
                    height="60"
                    fill="url(#screenGradient)"
                    opacity="0.8"
                    stroke="url(#neonGradient)"
                    strokeWidth="2"
                  />
                  {/* Digit segments */}
                  {Array.from({ length: 7 }, (_, j) => (
                    <rect
                      key={j}
                      x={925 + i * 60 + (j % 3) * 10}
                      y={135 + Math.floor(j / 3) * 20}
                      width="8"
                      height="3"
                      fill="url(#neonGradient)"
                      opacity={0.8 + Math.sin(scoreFlash * 0.02 + i + j) * 0.2}
                    />
                  ))}
                </g>
              ))}
              {/* Score label */}
              <text
                x="950"
                y="220"
                fill="url(#neonGradient)"
                fontSize="16"
                fontFamily="monospace"
                opacity="0.9"
              >
                HIGH SCORE
              </text>
            </g>
            
            {/* Game controller */}
            <g>
              <ellipse
                cx="200"
                cy="200"
                rx="80"
                ry="40"
                fill="url(#arcadeGradient)"
                opacity="0.8"
                stroke="url(#neonGradient)"
                strokeWidth="2"
              />
              {/* Controller buttons */}
              {Array.from({ length: 4 }, (_, i) => (
                <circle
                  key={i}
                  cx={180 + (i % 2) * 40}
                  cy={190 + Math.floor(i / 2) * 20}
                  r="8"
                  fill="url(#neonGradient2)"
                  opacity="0.8"
                  stroke="url(#neonGradient2)"
                  strokeWidth="1"
                />
              ))}
              {/* D-pad */}
              <rect
                x="220"
                y="185"
                width="30"
                height="30"
                fill="url(#neonGradient3)"
                opacity="0.8"
                stroke="url(#neonGradient3)"
                strokeWidth="1"
              />
            </g>
            
            {/* Retro wave lines */}
            {Array.from({ length: 5 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M0 ${150 + i * 100 + Math.sin(retroWave * 0.02 + i) * 20} Q${300 + Math.sin(retroWave * 0.01 + i) * 30} ${130 + i * 100 + Math.sin(retroWave * 0.03 + i) * 25} ${600 + Math.sin(retroWave * 0.015 + i) * 40} ${170 + i * 100 + Math.sin(retroWave * 0.025 + i) * 30} T1200 ${150 + i * 100 + Math.sin(retroWave * 0.02 + i) * 20}`}
                  fill="none"
                  stroke="url(#neonGradient)"
                  strokeWidth="2"
                  opacity={0.6 + Math.sin(retroWave * 0.02 + i) * 0.3}
                />
              </g>
            ))}
            
            {/* Power-up icons */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                <rect
                  x={800 + i * 60}
                  y="300"
                  width="40"
                  height="40"
                  fill="url(#neonGradient2)"
                  opacity="0.8"
                  stroke="url(#neonGradient2)"
                  strokeWidth="2"
                />
                {/* Power-up symbol */}
                <text
                  x={820 + i * 60}
                  y="325"
                  fill="white"
                  fontSize="20"
                  fontFamily="monospace"
                  opacity="0.9"
                >
                  {['⚡', '💎', '⭐', '🔥', '💎', '⚡'][i]}
                </text>
              </g>
            ))}
            
            {/* Game over screen */}
            <g>
              <rect
                x="400"
                y="100"
                width="400"
                height="200"
                fill="url(#arcadeGradient)"
                opacity="0.9"
                stroke="url(#neonGradient)"
                strokeWidth="3"
              />
              <text
                x="600"
                y="180"
                fill="url(#neonGradient)"
                fontSize="32"
                fontFamily="monospace"
                textAnchor="middle"
                opacity="0.9"
              >
                GAME OVER
              </text>
              <text
                x="600"
                y="220"
                fill="url(#neonGradient)"
                fontSize="16"
                fontFamily="monospace"
                textAnchor="middle"
                opacity="0.8"
              >
                PRESS START TO CONTINUE
              </text>
            </g>
            
            {/* Floating game elements */}
            {Array.from({ length: 15 }, (_, i) => (
              <g key={i}>
                <rect
                  x={100 + i * 80 + Math.sin(gameFlow * 0.01 + i) * 30}
                  y={50 + (gameFlow * 0.5 + i * 20) % 200}
                  width="10"
                  height="10"
                  fill="url(#neonGradient)"
                  opacity="0.7"
                  transform={`rotate(${gameFlow * 0.5 + i * 10} ${105 + i * 80 + Math.sin(gameFlow * 0.01 + i) * 30} ${55 + (gameFlow * 0.5 + i * 20) % 200})`}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Floating retro particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-60"
              style={{
                left: `${10 + i * 3}%`,
                top: `${20 + Math.sin(pixelGlow * 0.01 + i) * 60}%`,
                animation: `float ${3 + i * 0.1}s ease-in-out infinite`
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
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Retro Gaming
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Step into the golden age of gaming where pixel art meets neon lights, 
              and every high score tells a story of legendary achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Game
              </button>
              <button className="px-8 py-4 border-2 border-pink-500 text-pink-300 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300">
                High Scores
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Gaming Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/80 to-purple-900/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/40 hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105"
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
                  <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">
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
              Player Testimonials
            </h2>
            <div className="bg-gradient-to-br from-gray-800/80 to-purple-900/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/40">
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
                <div className="text-pink-300">
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
                      ? 'bg-pink-500 scale-125'
                      : 'bg-pink-400/30 hover:bg-pink-400/50'
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
              Gaming Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/40 hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">🎮</div>
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
              Ready to Play?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Jump into the world of retro gaming where every pixel matters, 
              every score counts, and every game is an adventure waiting to happen.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-semibold rounded-full text-lg hover:from-pink-600 hover:via-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Press Start
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