import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌸',
    title: 'Cherry Blossoms',
    description: 'Elegant sakura petals',
    color: 'from-pink-400 to-rose-500'
  },
  {
    icon: '🏮',
    title: 'Neon Lights',
    description: 'Vibrant city illumination',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: '🗼',
    title: 'Tokyo Tower',
    description: 'Iconic city landmark',
    color: 'from-orange-400 to-red-500'
  },
  {
    icon: '⚡',
    title: 'Cyber Technology',
    description: 'Futuristic innovations',
    color: 'from-purple-400 to-indigo-500'
  }
];

const testimonials = [
  {
    name: 'Sakura Sensei',
    role: 'Cherry Blossom Guardian',
    avatar: '🌸',
    text: 'The beauty of sakura represents the harmony between tradition and innovation in our neon city.',
    rating: 5
  },
  {
    name: 'Neon Master',
    role: 'Lighting Engineer',
    avatar: '🏮',
    text: 'Our neon lights illuminate the future while preserving the spirit of Japanese aesthetics.',
    rating: 5
  },
  {
    name: 'Cyber Samurai',
    role: 'Digital Warrior',
    avatar: '⚡',
    text: 'Technology and tradition merge seamlessly in our neon Tokyo, creating a world of endless possibilities.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Neon Lights' },
  { value: '100%', label: 'Cyber Ready' },
  { value: '24/7', label: 'City Awake' },
  { value: '🌸', label: 'Sakura Season' }
];

const services = [
  { icon: '🌸', title: 'Sakura Gardens', desc: 'Cherry blossom care' },
  { icon: '🏮', title: 'Neon Design', desc: 'Lighting systems' },
  { icon: '🗼', title: 'City Architecture', desc: 'Modern landmarks' },
  { icon: '⚡', title: 'Cyber Systems', desc: 'Digital infrastructure' }
];

export default function HomePageTheme171() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [neonGlow, setNeonGlow] = useState(0);
  const [sakuraFall, setSakuraFall] = useState(0);
  const [cityPulse, setCityPulse] = useState(0);
  const [cyberFlow, setCyberFlow] = useState(0);

  useEffect(() => {
    // Neon glow animation
    const neonInterval = setInterval(() => {
      setNeonGlow(prev => (prev + 1) % 100);
    }, 100);

    // Sakura fall animation
    const sakuraInterval = setInterval(() => {
      setSakuraFall(prev => (prev + 1) % 100);
    }, 150);

    // City pulse animation
    const cityInterval = setInterval(() => {
      setCityPulse(prev => (prev + 1) % 100);
    }, 200);

    // Cyber flow effect
    const cyberInterval = setInterval(() => {
      setCyberFlow(prev => (prev + 1) % 100);
    }, 300);

    return () => {
      clearInterval(neonInterval);
      clearInterval(sakuraInterval);
      clearInterval(cityInterval);
      clearInterval(cyberInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-pink-900 font-sans relative overflow-hidden">
      {/* Neon Tokyo Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/90 via-purple-900/70 to-pink-900/80">
        {/* Cityscape with neon lights */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Tokyo skyline */}
            <defs>
              <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1F2937" />
                <stop offset="50%" stopColor="#111827" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
              <linearGradient id="neonGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="sakuraGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCE7F3" />
                <stop offset="50%" stopColor="#FBCFE8" />
                <stop offset="100%" stopColor="#F9A8D4" />
              </linearGradient>
            </defs>
            
            {/* Tokyo buildings */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <rect
                  x={100 + i * 120}
                  y={400}
                  width="80"
                  height={300 + Math.sin(cityPulse * 0.02 + i) * 20}
                  fill="url(#buildingGradient)"
                  opacity="0.9"
                  stroke="url(#neonGradient)"
                  strokeWidth="2"
                />
                {/* Building windows with neon glow */}
                {Array.from({ length: 6 }, (_, j) => (
                  <rect
                    key={j}
                    x={110 + i * 120 + j * 15}
                    y={420 + j * 40}
                    width="8"
                    height="15"
                    fill="url(#neonGradient)"
                    opacity={0.7 + Math.sin(neonGlow * 0.02 + i + j) * 0.3}
                  />
                ))}
                {/* Neon signs on buildings */}
                <rect
                  x={105 + i * 120}
                  y={380}
                  width="70"
                  height="8"
                  fill="url(#neonGradient2)"
                  opacity={0.8 + Math.sin(neonGlow * 0.03 + i) * 0.2}
                />
              </g>
            ))}
            
            {/* Tokyo Tower */}
            <g>
              <rect
                x="580"
                y="200"
                width="40"
                height="400"
                fill="url(#buildingGradient)"
                opacity="0.9"
                stroke="url(#neonGradient3)"
                strokeWidth="3"
              />
              {/* Tower top */}
              <path
                d="M580 200 L600 150 L620 200 Z"
                fill="url(#neonGradient3)"
                opacity="0.8"
              />
              {/* Tower platforms */}
              <rect x="570" y="300" width="60" height="10" fill="url(#neonGradient3)" opacity="0.7" />
              <rect x="575" y="250" width="50" height="8" fill="url(#neonGradient3)" opacity="0.7" />
              {/* Tower lights */}
              {Array.from({ length: 10 }, (_, i) => (
                <circle
                  key={i}
                  cx="600"
                  cy={220 + i * 35}
                  r="2"
                  fill="url(#neonGradient3)"
                  opacity={0.8 + Math.sin(neonGlow * 0.05 + i) * 0.2}
                />
              ))}
            </g>
            
            {/* Cherry blossoms falling */}
            {Array.from({ length: 30 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={50 + i * 40 + Math.sin(sakuraFall * 0.01 + i) * 30}
                  cy={50 + (sakuraFall * 0.5 + i * 20) % 400}
                  r={3 + Math.sin(sakuraFall * 0.02 + i) * 2}
                  fill="url(#sakuraGradient)"
                  opacity="0.8"
                />
                <path
                  d={`M${50 + i * 40 + Math.sin(sakuraFall * 0.01 + i) * 30} ${50 + (sakuraFall * 0.5 + i * 20) % 400} Q${55 + i * 40 + Math.sin(sakuraFall * 0.01 + i) * 30} ${45 + (sakuraFall * 0.5 + i * 20) % 400} ${60 + i * 40 + Math.sin(sakuraFall * 0.01 + i) * 30} ${50 + (sakuraFall * 0.5 + i * 20) % 400}`}
                  stroke="url(#sakuraGradient)"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Neon signs and billboards */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                <rect
                  x={200 + i * 150}
                  y="100"
                  width="100"
                  height="60"
                  fill="url(#neonGradient2)"
                  opacity={0.7 + Math.sin(neonGlow * 0.02 + i) * 0.3}
                  stroke="url(#neonGradient)"
                  strokeWidth="2"
                />
                {/* Sign text patterns */}
                {Array.from({ length: 4 }, (_, j) => (
                  <rect
                    key={j}
                    x={210 + i * 150 + j * 20}
                    y="120"
                    width="15"
                    height="20"
                    fill="white"
                    opacity="0.9"
                  />
                ))}
              </g>
            ))}
            
            {/* Cyber grid lines */}
            {Array.from({ length: 15 }, (_, i) => (
              <line
                key={i}
                x1={i * 80}
                y1="0"
                x2={i * 80 + Math.sin(cyberFlow * 0.02 + i) * 20}
                y2="800"
                stroke="url(#neonGradient)"
                strokeWidth="1"
                opacity="0.3"
              />
            ))}
            
            {/* Floating data particles */}
            {Array.from({ length: 20 }, (_, i) => (
              <circle
                key={i}
                cx={100 + i * 50 + Math.sin(cyberFlow * 0.01 + i) * 40}
                cy={200 + Math.cos(cyberFlow * 0.015 + i) * 30}
                r={1 + Math.sin(cyberFlow * 0.02 + i) * 0.5}
                fill="url(#neonGradient)"
                opacity="0.6"
              />
            ))}
            
            {/* Rain effect */}
            {Array.from({ length: 50 }, (_, i) => (
              <line
                key={i}
                x1={i * 25 + Math.sin(sakuraFall * 0.01 + i) * 10}
                y1="0"
                x2={i * 25 + Math.sin(sakuraFall * 0.01 + i) * 10}
                y2="800"
                stroke="url(#neonGradient)"
                strokeWidth="1"
                opacity="0.2"
              />
            ))}
            
            {/* Ground level neon strips */}
            <rect
              x="0"
              y="750"
              width="1200"
              height="10"
              fill="url(#neonGradient)"
              opacity="0.8"
            />
            
            {/* Puddles with reflections */}
            {Array.from({ length: 8 }, (_, i) => (
              <ellipse
                key={i}
                cx={150 + i * 120}
                cy="780"
                rx="20"
                ry="5"
                fill="url(#neonGradient)"
                opacity="0.4"
              />
            ))}
          </svg>
        </div>

        {/* Floating neon particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 4}%`,
                top: `${30 + Math.sin(neonGlow * 0.01 + i) * 20}%`,
                animation: `float ${2 + i * 0.1}s ease-in-out infinite`
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
                Neon Tokyo
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the vibrant energy of Tokyo's neon-lit streets, where cherry blossoms dance 
              in the cyber wind and technology meets tradition in perfect harmony.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Enter Tokyo
              </button>
              <button className="px-8 py-4 border-2 border-pink-400 text-pink-300 font-semibold rounded-full hover:bg-pink-400 hover:text-gray-900 transition-all duration-300">
                Explore City
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Tokyo's Cyber Essence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105"
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
              Voices of Tokyo
            </h2>
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/20">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-pink-100 mb-6 italic">
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
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
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
                      ? 'bg-pink-400 scale-125'
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
              Tokyo Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-900/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">🌸</div>
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
              Ready to Experience Tokyo?
            </h2>
            <p className="text-xl text-pink-200 mb-8 max-w-2xl mx-auto">
              Dive into the neon-lit streets of Tokyo, where cherry blossoms meet cyber technology 
              and every corner holds a new adventure waiting to be discovered.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-600 text-white font-semibold rounded-full text-lg hover:from-pink-600 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Begin Your Journey
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