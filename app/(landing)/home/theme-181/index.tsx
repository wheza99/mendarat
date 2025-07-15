import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌃',
    title: 'Neon Cityscape',
    description: 'Futuristic urban landscape',
    color: 'from-pink-500 to-purple-600'
  },
  {
    icon: '⚡',
    title: 'Cyber Energy',
    description: 'High-tech power systems',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: '🎮',
    title: 'Digital Reality',
    description: 'Virtual world integration',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: '🤖',
    title: 'AI Systems',
    description: 'Advanced artificial intelligence',
    color: 'from-green-400 to-cyan-500'
  }
];

const testimonials = [
  {
    name: 'Cyber Queen',
    role: 'Digital Architect',
    avatar: '🌃',
    text: 'The neon city never sleeps, where every street corner pulses with digital life and the future is now.',
    rating: 5
  },
  {
    name: 'Neon Master',
    role: 'Light Designer',
    avatar: '⚡',
    text: 'Our cyberpunk aesthetic creates immersive experiences where technology meets art in perfect harmony.',
    rating: 5
  },
  {
    name: 'Digital Pioneer',
    role: 'Virtual Reality Expert',
    avatar: '🎮',
    text: 'Step into the future where reality and virtual worlds merge seamlessly in our neon-lit cyberpunk realm.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Neon Lights' },
  { value: '24/7', label: 'City Awake' },
  { value: '100%', label: 'Digital' },
  { value: '🌃', label: 'Cyberpunk' }
];

const services = [
  { icon: '🌃', title: 'City Design', desc: 'Neon city planning' },
  { icon: '⚡', title: 'Energy Systems', desc: 'Cyber power grids' },
  { icon: '🎮', title: 'VR Integration', desc: 'Digital reality' },
  { icon: '🤖', title: 'AI Development', desc: 'Smart systems' }
];

export default function HomePageTheme181() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [neonPulse, setNeonPulse] = useState(0);
  const [cityGlow, setCityGlow] = useState(0);
  const [hologramFlicker, setHologramFlicker] = useState(0);
  const [cyberFlow, setCyberFlow] = useState(0);
  const [digitalRain, setDigitalRain] = useState(0);

  useEffect(() => {
    // Neon pulse animation
    const neonInterval = setInterval(() => {
      setNeonPulse(prev => (prev + 1) % 100);
    }, 100);

    // City glow animation
    const cityInterval = setInterval(() => {
      setCityGlow(prev => (prev + 1) % 100);
    }, 150);

    // Hologram flicker animation
    const hologramInterval = setInterval(() => {
      setHologramFlicker(prev => (prev + 1) % 100);
    }, 200);

    // Cyber flow animation
    const cyberInterval = setInterval(() => {
      setCyberFlow(prev => (prev + 1) % 100);
    }, 300);

    // Digital rain effect
    const rainInterval = setInterval(() => {
      setDigitalRain(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(neonInterval);
      clearInterval(cityInterval);
      clearInterval(hologramInterval);
      clearInterval(cyberInterval);
      clearInterval(rainInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-pink-900 font-mono relative overflow-hidden">
      {/* Cyberpunk Neon City Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/90 via-purple-900/70 to-pink-900/80">
        {/* Futuristic cityscape with neon lights and holograms */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Cyberpunk gradients */}
            <defs>
              <linearGradient id="neonPinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
              <linearGradient id="neonCyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="neonPurpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="cityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#000000" />
                <stop offset="50%" stopColor="#1E1B4B" />
                <stop offset="100%" stopColor="#831843" />
              </linearGradient>
              <linearGradient id="neonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="50%" stopColor="#BE185D" />
                <stop offset="100%" stopColor="#9D174D" />
              </linearGradient>
              <radialGradient id="neonRadial" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#BE185D" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#9D174D" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* City background */}
            <rect x="0" y="0" width="1200" height="800" fill="url(#cityGradient)" />
            
            {/* Neon grid */}
            {Array.from({ length: 30 }, (_, i) => (
              <g key={i}>
                <line
                  x1={i * 40}
                  y1="0"
                  x2={i * 40}
                  y2="800"
                  stroke="url(#neonPinkGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <line
                  x1="0"
                  y1={i * 26.67}
                  x2="1200"
                  y2={i * 26.67}
                  stroke="url(#neonCyanGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </g>
            ))}
            
            {/* Skyscrapers */}
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                {/* Building structure */}
                <rect
                  x={100 + i * 90}
                  y="400"
                  width="60"
                  height="400"
                  fill="url(#cityGradient)"
                  opacity="0.9"
                  stroke="url(#neonPinkGradient)"
                  strokeWidth="2"
                />
                {/* Building windows */}
                {Array.from({ length: 8 }, (_, j) => (
                  <rect
                    key={j}
                    x={110 + i * 90}
                    y={420 + j * 45}
                    width="40"
                    height="25"
                    fill="url(#neonCyanGradient)"
                    opacity={0.6 + Math.sin(neonPulse * 0.01 + i + j) * 0.3}
                  />
                ))}
                {/* Building top */}
                <rect
                  x={95 + i * 90}
                  y="380"
                  width="70"
                  height="20"
                  fill="url(#neonPurpleGradient)"
                  opacity="0.8"
                  stroke="url(#neonPinkGradient)"
                  strokeWidth="2"
                />
                {/* Antenna */}
                <line
                  x1={130 + i * 90}
                  y1="380"
                  x2={130 + i * 90}
                  y2="350"
                  stroke="url(#neonCyanGradient)"
                  strokeWidth="3"
                  opacity="0.8"
                />
                <circle
                  cx={130 + i * 90}
                  cy="345"
                  r="5"
                  fill="url(#neonPinkGradient)"
                  opacity="0.9"
                />
              </g>
            ))}
            
            {/* Holographic displays */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                {/* Hologram base */}
                <rect
                  x={200 + i * 150}
                  y="600"
                  width="100"
                  height="150"
                  fill="none"
                  stroke="url(#neonCyanGradient)"
                  strokeWidth="3"
                  opacity="0.8"
                />
                {/* Hologram content */}
                <rect
                  x={210 + i * 150}
                  y="610"
                  width="80"
                  height="130"
                  fill="url(#neonPurpleGradient)"
                  opacity={0.4 + Math.sin(hologramFlicker * 0.02 + i) * 0.3}
                />
                {/* Hologram data lines */}
                {Array.from({ length: 5 }, (_, j) => (
                  <line
                    key={j}
                    x1={210 + i * 150}
                    y1={620 + j * 25}
                    x2={290 + i * 150}
                    y2={620 + j * 25}
                    stroke="url(#neonCyanGradient)"
                    strokeWidth="1"
                    opacity="0.8"
                  />
                ))}
                {/* Hologram symbols */}
                <text
                  x={250 + i * 150}
                  y="680"
                  fill="url(#neonPinkGradient)"
                  fontSize="12"
                  opacity="0.9"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {['🌃', '⚡', '🎮', '🤖', '💻', '🔮'][i]}
                </text>
              </g>
            ))}
            
            {/* Neon signs */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                {/* Sign structure */}
                <rect
                  x={50 + i * 140}
                  y="200"
                  width="120"
                  height="20"
                  fill="url(#neonPinkGradient)"
                  opacity="0.8"
                  stroke="url(#neonCyanGradient)"
                  strokeWidth="2"
                />
                {/* Sign text */}
                <text
                  x={110 + i * 140}
                  y="215"
                  fill="url(#neonCyanGradient)"
                  fontSize="10"
                  opacity="0.9"
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {['CYBER', 'NEON', 'DIGITAL', 'FUTURE', 'VIRTUAL', 'REALITY', 'MATRIX', 'SYSTEM'][i]}
                </text>
                {/* Sign glow */}
                <rect
                  x={50 + i * 140}
                  y="200"
                  width="120"
                  height="20"
                  fill="url(#neonRadial)"
                  opacity={0.3 + Math.sin(neonPulse * 0.01 + i) * 0.2}
                />
              </g>
            ))}
            
            {/* Flying cars */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                {/* Car body */}
                <ellipse
                  cx={300 + i * 200 + Math.sin(cyberFlow * 0.01 + i) * 50}
                  cy={150 + Math.sin(cyberFlow * 0.02 + i) * 30}
                  rx="30"
                  ry="15"
                  fill="url(#neonPurpleGradient)"
                  opacity="0.8"
                  stroke="url(#neonCyanGradient)"
                  strokeWidth="2"
                />
                {/* Car lights */}
                <circle
                  cx={270 + i * 200 + Math.sin(cyberFlow * 0.01 + i) * 50}
                  cy={150 + Math.sin(cyberFlow * 0.02 + i) * 30}
                  r="3"
                  fill="url(#neonPinkGradient)"
                  opacity="0.9"
                />
                <circle
                  cx={330 + i * 200 + Math.sin(cyberFlow * 0.01 + i) * 50}
                  cy={150 + Math.sin(cyberFlow * 0.02 + i) * 30}
                  r="3"
                  fill="url(#neonCyanGradient)"
                  opacity="0.9"
                />
                {/* Engine trail */}
                <path
                  d={`M${270 + i * 200 + Math.sin(cyberFlow * 0.01 + i) * 50} ${150 + Math.sin(cyberFlow * 0.02 + i) * 30} Q${250 + i * 200 + Math.sin(cyberFlow * 0.01 + i) * 50} ${140 + Math.sin(cyberFlow * 0.02 + i) * 30} ${230 + i * 200 + Math.sin(cyberFlow * 0.01 + i) * 50} ${150 + Math.sin(cyberFlow * 0.02 + i) * 30}`}
                  fill="none"
                  stroke="url(#neonCyanGradient)"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Digital rain effect */}
            {Array.from({ length: 50 }, (_, i) => (
              <g key={i}>
                <text
                  x={20 + i * 24}
                  y={50 + (digitalRain * 0.5 + i * 15) % 800}
                  fill="url(#neonCyanGradient)"
                  fontSize="12"
                  opacity="0.6"
                  fontFamily="monospace"
                >
                  {['0', '1', '🌃', '⚡', '🎮', '🤖', '💻', '🔮'][i % 8]}
                </text>
              </g>
            ))}
            
            {/* Ground level neon strips */}
            {Array.from({ length: 20 }, (_, i) => (
              <g key={i}>
                <rect
                  x={i * 60}
                  y="750"
                  width="50"
                  height="5"
                  fill="url(#neonPinkGradient)"
                  opacity={0.7 + Math.sin(neonPulse * 0.01 + i) * 0.3}
                />
                <rect
                  x={i * 60}
                  y="760"
                  width="50"
                  height="3"
                  fill="url(#neonCyanGradient)"
                  opacity={0.5 + Math.sin(neonPulse * 0.015 + i) * 0.3}
                />
              </g>
            ))}
            
            {/* Central holographic sphere */}
            <g>
              <circle
                cx="600"
                cy="400"
                r="80"
                fill="none"
                stroke="url(#neonPinkGradient)"
                strokeWidth="4"
                opacity="0.8"
              />
              <circle
                cx="600"
                cy="400"
                r="60"
                fill="none"
                stroke="url(#neonCyanGradient)"
                strokeWidth="3"
                opacity="0.6"
              />
              <circle
                cx="600"
                cy="400"
                r="40"
                fill="none"
                stroke="url(#neonPurpleGradient)"
                strokeWidth="2"
                opacity="0.7"
              />
              {/* Hologram data points */}
              {Array.from({ length: 12 }, (_, i) => (
                <circle
                  key={i}
                  cx={600 + Math.cos((i * 30) * Math.PI / 180) * 70}
                  cy={400 + Math.sin((i * 30) * Math.PI / 180) * 70}
                  r="3"
                  fill="url(#neonCyanGradient)"
                  opacity={0.8 + Math.sin(hologramFlicker * 0.02 + i) * 0.2}
                />
              ))}
              {/* Central core */}
              <circle
                cx="600"
                cy="400"
                r="15"
                fill="url(#neonRadial)"
                opacity="0.9"
              />
            </g>
            
            {/* Floating neon particles */}
            {Array.from({ length: 30 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={100 + i * 35 + Math.sin(neonPulse * 0.01 + i) * 20}
                  cy={100 + (neonPulse * 0.5 + i * 25) % 600}
                  r="2"
                  fill="url(#neonPinkGradient)"
                  opacity="0.7"
                />
              </g>
            ))}
            
            {/* Cyberpunk symbols */}
            {Array.from({ length: 15 }, (_, i) => (
              <g key={i}>
                <text
                  x={150 + i * 70 + Math.sin(cityGlow * 0.01 + i) * 15}
                  y={100 + (cityGlow * 0.5 + i * 30) % 200}
                  fill="url(#neonCyanGradient)"
                  fontSize="14"
                  opacity="0.6"
                  fontFamily="monospace"
                >
                  {['🌃', '⚡', '🎮', '🤖', '💻', '🔮', '🌃', '⚡', '🎮', '🤖', '💻', '🔮', '🌃', '⚡', '🎮'][i]}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Floating neon particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 40 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-60"
              style={{
                left: `${5 + i * 2.5}%`,
                top: `${10 + Math.sin(neonPulse * 0.01 + i) * 80}%`,
                animation: `neonFloat ${2 + i * 0.1}s ease-in-out infinite`
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
                Cyberpunk Neon City
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to the future where neon lights illuminate the digital realm, 
              where technology and humanity merge in a symphony of cyberpunk aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Enter the City
              </button>
              <button className="px-8 py-4 border-2 border-pink-500 text-pink-300 font-semibold rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              City Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/40 hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-pink-200 leading-relaxed">
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
                  <div className="text-pink-200 font-medium">
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
              City Residents
            </h2>
            <div className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/40">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-pink-200 mb-6 italic">
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
                    <span key={i} className="text-pink-500 text-xl">⭐</span>
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
              City Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-900/80 to-purple-900/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/40 hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">🌃</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-pink-200 text-sm">
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
              Ready to Enter the Neon City?
            </h2>
            <p className="text-xl text-pink-200 mb-8 max-w-2xl mx-auto">
              Experience the future where neon lights guide your way through the digital realm, 
              where every corner holds a new cyberpunk adventure.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-semibold rounded-full text-lg hover:from-pink-600 hover:via-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Start Exploring
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes neonFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-15px) rotate(180deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
} 