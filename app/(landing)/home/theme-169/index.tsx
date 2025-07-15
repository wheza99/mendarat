import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🚀',
    title: 'Space Stations',
    description: 'Orbiting space habitats',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: '🛸',
    title: 'Spacecraft Fleet',
    description: 'Advanced space vehicles',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: '⭐',
    title: 'Stellar Navigation',
    description: 'Cosmic wayfinding',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: '🌌',
    title: 'Galaxy Exploration',
    description: 'Deep space missions',
    color: 'from-pink-500 to-purple-600'
  }
];

const testimonials = [
  {
    name: 'Commander Nova',
    role: 'Space Fleet Captain',
    avatar: '🚀',
    text: 'Our space stations represent humanity\'s greatest achievement in space exploration and habitation.',
    rating: 5
  },
  {
    name: 'Dr. Cosmos',
    role: 'Astrophysicist',
    avatar: '🛸',
    text: 'The vastness of space holds infinite possibilities for discovery and advancement.',
    rating: 5
  },
  {
    name: 'Navigator Star',
    role: 'Space Navigation Expert',
    avatar: '⭐',
    text: 'Every star in the cosmos guides us toward new frontiers of human achievement.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Space Stations' },
  { value: '100%', label: 'Zero Gravity' },
  { value: '24/7', label: 'Space Operations' },
  { value: '∞', label: 'Galaxies' }
];

const services = [
  { icon: '🚀', title: 'Space Station Design', desc: 'Orbital habitats' },
  { icon: '🛸', title: 'Spacecraft Engineering', desc: 'Advanced vehicles' },
  { icon: '⭐', title: 'Stellar Navigation', desc: 'Cosmic guidance' },
  { icon: '🌌', title: 'Galaxy Exploration', desc: 'Deep space missions' }
];

export default function HomePageTheme169() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [spaceRotation, setSpaceRotation] = useState(0);
  const [starTwinkle, setStarTwinkle] = useState(0);
  const [planetOrbit, setPlanetOrbit] = useState(0);
  const [stationGlow, setStationGlow] = useState(0);

  useEffect(() => {
    // Space rotation animation
    const spaceInterval = setInterval(() => {
      setSpaceRotation(prev => (prev + 1) % 100);
    }, 100);

    // Star twinkle animation
    const starInterval = setInterval(() => {
      setStarTwinkle(prev => (prev + 1) % 100);
    }, 150);

    // Planet orbit animation
    const planetInterval = setInterval(() => {
      setPlanetOrbit(prev => (prev + 1) % 100);
    }, 200);

    // Station glow effect
    const stationInterval = setInterval(() => {
      setStationGlow(prev => (prev + 1) % 100);
    }, 300);

    return () => {
      clearInterval(spaceInterval);
      clearInterval(starInterval);
      clearInterval(planetInterval);
      clearInterval(stationInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 font-mono relative overflow-hidden">
      {/* Space Station Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/90 via-gray-900/70 to-purple-900/80">
        {/* Space with stars and nebula */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Nebula clouds */}
            <defs>
              <radialGradient id="nebulaGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
              </radialGradient>
              <radialGradient id="nebulaGradient2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#EC4899" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#F43F5E" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#E11D48" stopOpacity="0.1" />
              </radialGradient>
              <radialGradient id="nebulaGradient3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#0891B2" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0E7490" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Nebula clouds */}
            <ellipse cx="200" cy="150" rx="150" ry="100" fill="url(#nebulaGradient)" opacity="0.6" />
            <ellipse cx="800" cy="300" rx="120" ry="80" fill="url(#nebulaGradient2)" opacity="0.5" />
            <ellipse cx="1000" cy="200" rx="100" ry="60" fill="url(#nebulaGradient3)" opacity="0.4" />
            
            {/* Stars */}
            {Array.from({ length: 50 }, (_, i) => (
              <circle
                key={i}
                cx={100 + i * 20 + Math.sin(starTwinkle * 0.01 + i) * 10}
                cy={50 + i * 15 + Math.cos(starTwinkle * 0.02 + i) * 8}
                r={1 + Math.sin(starTwinkle * 0.03 + i) * 0.5}
                fill="white"
                opacity="0.8"
              />
            ))}
            
            {/* More stars in different areas */}
            {Array.from({ length: 30 }, (_, i) => (
              <circle
                key={`star2-${i}`}
                cx={600 + i * 25 + Math.sin(starTwinkle * 0.015 + i) * 15}
                cy={100 + i * 20 + Math.cos(starTwinkle * 0.025 + i) * 12}
                r={1.5 + Math.sin(starTwinkle * 0.035 + i) * 0.8}
                fill="white"
                opacity="0.9"
              />
            ))}
            
            {/* Space stations */}
            {Array.from({ length: 3 }, (_, i) => (
              <g key={i}>
                {/* Main station body */}
                <rect
                  x={300 + i * 250 + Math.sin(spaceRotation * 0.02 + i) * 20}
                  y={200 + Math.cos(spaceRotation * 0.03 + i) * 15}
                  width={80 + Math.sin(stationGlow * 0.02 + i) * 10}
                  height={40 + Math.cos(stationGlow * 0.03 + i) * 8}
                  fill="url(#stationGradient)"
                  opacity="0.9"
                  stroke="url(#neonGradient)"
                  strokeWidth="2"
                />
                
                {/* Station modules */}
                <circle
                  cx={340 + i * 250 + Math.sin(spaceRotation * 0.02 + i) * 20}
                  cy={220 + Math.cos(spaceRotation * 0.03 + i) * 15}
                  r="15"
                  fill="url(#moduleGradient)"
                  opacity="0.8"
                  stroke="url(#neonGradient2)"
                  strokeWidth="1"
                />
                
                {/* Solar panels */}
                <rect
                  x={280 + i * 250 + Math.sin(spaceRotation * 0.02 + i) * 20}
                  y={210 + Math.cos(spaceRotation * 0.03 + i) * 15}
                  width="20"
                  height="60"
                  fill="url(#solarGradient)"
                  opacity="0.7"
                  stroke="url(#neonGradient3)"
                  strokeWidth="1"
                />
                <rect
                  x={400 + i * 250 + Math.sin(spaceRotation * 0.02 + i) * 20}
                  y={210 + Math.cos(spaceRotation * 0.03 + i) * 15}
                  width="20"
                  height="60"
                  fill="url(#solarGradient)"
                  opacity="0.7"
                  stroke="url(#neonGradient3)"
                  strokeWidth="1"
                />
              </g>
            ))}
            
            {/* Planets */}
            {Array.from({ length: 2 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={150 + i * 400 + Math.sin(planetOrbit * 0.01 + i) * 50}
                  cy={600 + Math.cos(planetOrbit * 0.015 + i) * 30}
                  r={30 + i * 10}
                  fill="url(#planetGradient)"
                  opacity="0.8"
                  stroke="url(#planetRingGradient)"
                  strokeWidth="3"
                />
                
                {/* Planet rings */}
                <ellipse
                  cx={150 + i * 400 + Math.sin(planetOrbit * 0.01 + i) * 50}
                  cy={600 + Math.cos(planetOrbit * 0.015 + i) * 30}
                  rx={50 + i * 15}
                  ry="8"
                  fill="none"
                  stroke="url(#ringGradient)"
                  strokeWidth="2"
                  opacity="0.6"
                  transform={`rotate(${planetOrbit * 0.5 + i * 30})`}
                />
              </g>
            ))}
            
            {/* Spacecraft */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${200 + i * 200 + Math.sin(spaceRotation * 0.025 + i) * 40} ${300 + Math.cos(spaceRotation * 0.035 + i) * 25} L${220 + i * 200 + Math.sin(spaceRotation * 0.025 + i) * 40} ${290 + Math.cos(spaceRotation * 0.035 + i) * 25} L${240 + i * 200 + Math.sin(spaceRotation * 0.025 + i) * 40} ${300 + Math.cos(spaceRotation * 0.035 + i) * 25} Z`}
                  fill="url(#spacecraftGradient)"
                  opacity="0.9"
                  stroke="url(#neonGradient4)"
                  strokeWidth="1"
                />
                <circle
                  cx={210 + i * 200 + Math.sin(spaceRotation * 0.025 + i) * 40}
                  cy={295 + Math.cos(spaceRotation * 0.035 + i) * 25}
                  r="3"
                  fill="url(#engineGradient)"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Asteroid belt */}
            {Array.from({ length: 20 }, (_, i) => (
              <circle
                key={i}
                cx={100 + i * 50 + Math.sin(spaceRotation * 0.01 + i) * 30}
                cy={500 + Math.cos(spaceRotation * 0.012 + i) * 20}
                r={2 + Math.sin(starTwinkle * 0.02 + i) * 1}
                fill="url(#asteroidGradient)"
                opacity="0.6"
              />
            ))}
            
            <defs>
              <linearGradient id="stationGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient id="moduleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#0891B2" />
                <stop offset="100%" stopColor="#0E7490" />
              </linearGradient>
              <linearGradient id="solarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="planetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              <linearGradient id="planetRingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="spacecraftGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="50%" stopColor="#F43F5E" />
                <stop offset="100%" stopColor="#E11D48" />
              </linearGradient>
              <linearGradient id="engineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="asteroidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6B7280" />
                <stop offset="50%" stopColor="#4B5563" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="neonGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FCD34D" />
              </linearGradient>
              <linearGradient id="neonGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating space particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 40 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${10 + i * 2.5}%`,
                top: `${20 + Math.sin(spaceRotation * 0.01 + i) * 30}%`,
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
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Space Station
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore the final frontier with our advanced space stations, 
              where humanity reaches for the stars and beyond the limits of Earth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Launch Mission
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-full hover:bg-purple-400 hover:text-gray-900 transition-all duration-300">
                Explore Space
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Advanced Space Technology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-purple-200 leading-relaxed">
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
                  <div className="text-purple-200 font-medium">
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
              Voices from Space
            </h2>
            <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-purple-100 mb-6 italic">
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
                      ? 'bg-purple-400 scale-125'
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
              Space Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-900/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-indigo-200 text-sm">
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
              Ready to Launch?
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Join us in the greatest adventure of human history as we explore 
              the vast expanse of space and push the boundaries of what's possible.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-600 to-cyan-600 text-white font-semibold rounded-full text-lg hover:from-purple-600 hover:via-pink-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Begin Your Journey
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
} 