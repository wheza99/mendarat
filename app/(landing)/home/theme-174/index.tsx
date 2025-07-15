import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌴',
    title: 'Palm Trees',
    description: 'Tropical paradise palms',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: '🏖️',
    title: 'Sandy Beaches',
    description: 'Crystal white sand shores',
    color: 'from-yellow-300 to-amber-400'
  },
  {
    icon: '🌊',
    title: 'Ocean Waves',
    description: 'Turquoise blue waters',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: '🦜',
    title: 'Exotic Birds',
    description: 'Colorful tropical wildlife',
    color: 'from-red-400 to-pink-500'
  }
];

const testimonials = [
  {
    name: 'Captain Paradise',
    role: 'Island Explorer',
    avatar: '🌴',
    text: 'The tropical paradise offers the perfect blend of adventure and relaxation, where every day feels like a dream come true.',
    rating: 5
  },
  {
    name: 'Beach Master',
    role: 'Coastal Guardian',
    avatar: '🏖️',
    text: 'Our pristine beaches and crystal-clear waters create the ultimate escape from the everyday world.',
    rating: 5
  },
  {
    name: 'Ocean Whisperer',
    role: 'Marine Life Expert',
    avatar: '🌊',
    text: 'The turquoise waters teem with life, offering a glimpse into nature\'s most beautiful underwater world.',
    rating: 5
  }
];

const stats = [
  { value: '365', label: 'Sunny Days' },
  { value: '26°', label: 'Perfect Weather' },
  { value: '24/7', label: 'Paradise Open' },
  { value: '🌴', label: 'Palm Trees' }
];

const services = [
  { icon: '🌴', title: 'Island Tours', desc: 'Tropical adventures' },
  { icon: '🏖️', title: 'Beach Resorts', desc: 'Luxury accommodations' },
  { icon: '🌊', title: 'Water Sports', desc: 'Ocean activities' },
  { icon: '🦜', title: 'Wildlife Tours', desc: 'Exotic animal watching' }
];

export default function HomePageTheme174() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [palmSway, setPalmSway] = useState(0);
  const [waveFlow, setWaveFlow] = useState(0);
  const [birdFlight, setBirdFlight] = useState(0);
  const [sunMovement, setSunMovement] = useState(0);
  const [beachGlow, setBeachGlow] = useState(0);

  useEffect(() => {
    // Palm sway animation
    const palmInterval = setInterval(() => {
      setPalmSway(prev => (prev + 1) % 100);
    }, 100);

    // Wave flow animation
    const waveInterval = setInterval(() => {
      setWaveFlow(prev => (prev + 1) % 100);
    }, 150);

    // Bird flight animation
    const birdInterval = setInterval(() => {
      setBirdFlight(prev => (prev + 1) % 100);
    }, 200);

    // Sun movement animation
    const sunInterval = setInterval(() => {
      setSunMovement(prev => (prev + 1) % 100);
    }, 300);

    // Beach glow effect
    const glowInterval = setInterval(() => {
      setBeachGlow(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(palmInterval);
      clearInterval(waveInterval);
      clearInterval(birdInterval);
      clearInterval(sunInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-cyan-200 to-green-200 font-serif relative overflow-hidden">
      {/* Tropical Paradise Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-100/90 via-cyan-200/70 to-green-200/80">
        {/* Tropical landscape with beach and ocean */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Tropical gradients */}
            <defs>
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#87CEEB" />
                <stop offset="50%" stopColor="#B0E0E6" />
                <stop offset="100%" stopColor="#E0F6FF" />
              </linearGradient>
              <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00CED1" />
                <stop offset="50%" stopColor="#20B2AA" />
                <stop offset="100%" stopColor="#008B8B" />
              </linearGradient>
              <linearGradient id="beachGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F4E4BC" />
                <stop offset="50%" stopColor="#F5DEB3" />
                <stop offset="100%" stopColor="#DEB887" />
              </linearGradient>
              <linearGradient id="palmGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#228B22" />
                <stop offset="50%" stopColor="#32CD32" />
                <stop offset="100%" stopColor="#006400" />
              </linearGradient>
              <linearGradient id="sunGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FFA500" />
                <stop offset="100%" stopColor="#FF8C00" />
              </linearGradient>
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FFA500" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Sky */}
            <rect x="0" y="0" width="1200" height="400" fill="url(#skyGradient)" />
            
            {/* Sun */}
            <g>
              <circle
                cx="1000"
                cy={100 + Math.sin(sunMovement * 0.02) * 30}
                r="50"
                fill="url(#sunGradient)"
                opacity="0.9"
                stroke="url(#sunGlow)"
                strokeWidth="8"
              />
              {/* Sun rays */}
              {Array.from({ length: 12 }, (_, i) => (
                <line
                  key={i}
                  x1={1000 + Math.cos((i * 30 + sunMovement * 0.5) * Math.PI / 180) * 70}
                  y1={100 + Math.sin(sunMovement * 0.02) * 30 + Math.sin((i * 30 + sunMovement * 0.5) * Math.PI / 180) * 70}
                  x2={1000 + Math.cos((i * 30 + sunMovement * 0.5) * Math.PI / 180) * 90}
                  y2={100 + Math.sin(sunMovement * 0.02) * 30 + Math.sin((i * 30 + sunMovement * 0.5) * Math.PI / 180) * 90}
                  stroke="url(#sunGradient)"
                  strokeWidth="2"
                  opacity="0.7"
                />
              ))}
            </g>
            
            {/* Ocean waves */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M0 ${450 + i * 40 + Math.sin(waveFlow * 0.02 + i) * 15} Q${300 + Math.sin(waveFlow * 0.01 + i) * 30} ${430 + i * 40 + Math.sin(waveFlow * 0.03 + i) * 20} ${600 + Math.sin(waveFlow * 0.015 + i) * 40} ${470 + i * 40 + Math.sin(waveFlow * 0.025 + i) * 18} T1200 ${450 + i * 40 + Math.sin(waveFlow * 0.02 + i) * 15}`}
                  fill="none"
                  stroke="url(#oceanGradient)"
                  strokeWidth="3"
                  opacity={0.8 + Math.sin(waveFlow * 0.02 + i) * 0.2}
                />
              </g>
            ))}
            
            {/* Beach */}
            <rect x="0" y="500" width="1200" height="300" fill="url(#beachGradient)" />
            
            {/* Palm trees */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                {/* Palm trunk */}
                <rect
                  x={200 + i * 160}
                  y="450"
                  width="20"
                  height="150"
                  fill="url(#palmGradient)"
                  opacity="0.9"
                  stroke="url(#palmGradient)"
                  strokeWidth="2"
                />
                {/* Palm leaves */}
                {Array.from({ length: 8 }, (_, j) => (
                  <path
                    key={j}
                    d={`M${210 + i * 160} 450 Q${210 + i * 160 + Math.sin((j * 45 + palmSway * 0.5) * Math.PI / 180) * 80 + Math.sin(palmSway * 0.02 + i + j) * 15} ${420 + Math.cos((j * 45 + palmSway * 0.5) * Math.PI / 180) * 80 + Math.cos(palmSway * 0.03 + i + j) * 12} ${230 + i * 160 + Math.sin((j * 45 + palmSway * 0.5) * Math.PI / 180) * 100 + Math.sin(palmSway * 0.02 + i + j) * 20} ${400 + Math.cos((j * 45 + palmSway * 0.5) * Math.PI / 180) * 100 + Math.cos(palmSway * 0.03 + i + j) * 15}`}
                    fill="url(#palmGradient)"
                    opacity="0.8"
                    stroke="url(#palmGradient)"
                    strokeWidth="1"
                  />
                ))}
                {/* Coconut clusters */}
                <ellipse
                  cx={210 + i * 160}
                  cy="480"
                  rx="8"
                  ry="12"
                  fill="url(#sunGradient)"
                  opacity="0.7"
                />
              </g>
            ))}
            
            {/* Exotic birds */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                {/* Bird body */}
                <ellipse
                  cx={300 + i * 200 + Math.sin(birdFlight * 0.01 + i) * 50}
                  cy={200 + Math.cos(birdFlight * 0.015 + i) * 30}
                  rx="15"
                  ry="8"
                  fill="url(#sunGradient)"
                  opacity="0.9"
                  stroke="url(#sunGradient)"
                  strokeWidth="1"
                />
                {/* Bird wings */}
                <path
                  d={`M${285 + i * 200 + Math.sin(birdFlight * 0.01 + i) * 50} ${200 + Math.cos(birdFlight * 0.015 + i) * 30} Q${270 + i * 200 + Math.sin(birdFlight * 0.01 + i) * 50} ${190 + Math.cos(birdFlight * 0.015 + i) * 30} ${260 + i * 200 + Math.sin(birdFlight * 0.01 + i) * 50} ${200 + Math.cos(birdFlight * 0.015 + i) * 30}`}
                  fill="none"
                  stroke="url(#sunGradient)"
                  strokeWidth="2"
                  opacity="0.8"
                />
                <path
                  d={`M${315 + i * 200 + Math.sin(birdFlight * 0.01 + i) * 50} ${200 + Math.cos(birdFlight * 0.015 + i) * 30} Q${330 + i * 200 + Math.sin(birdFlight * 0.01 + i) * 50} ${210 + Math.cos(birdFlight * 0.015 + i) * 30} ${340 + i * 200 + Math.sin(birdFlight * 0.01 + i) * 50} ${200 + Math.cos(birdFlight * 0.015 + i) * 30}`}
                  fill="none"
                  stroke="url(#sunGradient)"
                  strokeWidth="2"
                  opacity="0.8"
                />
                {/* Bird tail */}
                <path
                  d={`M${290 + i * 200 + Math.sin(birdFlight * 0.01 + i) * 50} ${200 + Math.cos(birdFlight * 0.015 + i) * 30} L${280 + i * 200 + Math.sin(birdFlight * 0.01 + i) * 50} ${195 + Math.cos(birdFlight * 0.015 + i) * 30}`}
                  stroke="url(#sunGradient)"
                  strokeWidth="1"
                  opacity="0.7"
                />
              </g>
            ))}
            
            {/* Beach umbrellas */}
            {Array.from({ length: 3 }, (_, i) => (
              <g key={i}>
                {/* Umbrella pole */}
                <rect
                  x={400 + i * 300}
                  y="550"
                  width="4"
                  height="80"
                  fill="url(#palmGradient)"
                  opacity="0.8"
                />
                {/* Umbrella top */}
                <path
                  d={`M${402 + i * 300} 550 Q${420 + i * 300} 520 ${440 + i * 300} 550 Q${420 + i * 300} 580 ${402 + i * 300} 550`}
                  fill="url(#sunGradient)"
                  opacity="0.9"
                  stroke="url(#sunGradient)"
                  strokeWidth="1"
                />
              </g>
            ))}
            
            {/* Beach balls */}
            {Array.from({ length: 2 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={600 + i * 200}
                  cy="620"
                  r="15"
                  fill="url(#sunGradient)"
                  opacity="0.8"
                  stroke="url(#sunGradient)"
                  strokeWidth="1"
                />
                {/* Ball pattern */}
                <path
                  d={`M${600 + i * 200} 605 L${600 + i * 200} 635 M${585 + i * 200} 620 L${615 + i * 200} 620`}
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Ocean foam */}
            {Array.from({ length: 20 }, (_, i) => (
              <circle
                key={i}
                cx={50 + i * 60 + Math.sin(waveFlow * 0.01 + i) * 20}
                cy={480 + Math.cos(waveFlow * 0.015 + i) * 10}
                r={2 + Math.sin(waveFlow * 0.02 + i) * 1}
                fill="white"
                opacity="0.7"
              />
            ))}
            
            {/* Floating leaves */}
            {Array.from({ length: 15 }, (_, i) => (
              <g key={i}>
                <ellipse
                  cx={100 + i * 80 + Math.sin(palmSway * 0.01 + i) * 30}
                  cy={150 + (palmSway * 0.5 + i * 20) % 200}
                  rx={8 + Math.sin(palmSway * 0.02 + i) * 3}
                  ry={4 + Math.cos(palmSway * 0.03 + i) * 2}
                  fill="url(#palmGradient)"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Sand patterns */}
            {Array.from({ length: 10 }, (_, i) => (
              <path
                key={i}
                d={`M${i * 120} 520 Q${i * 120 + 60 + Math.sin(beachGlow * 0.01 + i) * 10} ${510 + Math.sin(beachGlow * 0.02 + i) * 5} ${(i + 1) * 120} 520`}
                fill="none"
                stroke="url(#beachGradient)"
                strokeWidth="1"
                opacity="0.5"
              />
            ))}
            
            {/* Seagulls */}
            {Array.from({ length: 3 }, (_, i) => (
              <g key={i}>
                {/* Seagull body */}
                <ellipse
                  cx={800 + i * 150 + Math.sin(birdFlight * 0.01 + i) * 40}
                  cy={150 + Math.cos(birdFlight * 0.015 + i) * 20}
                  rx="12"
                  ry="6"
                  fill="white"
                  opacity="0.9"
                  stroke="white"
                  strokeWidth="1"
                />
                {/* Seagull wings */}
                <path
                  d={`M${788 + i * 150 + Math.sin(birdFlight * 0.01 + i) * 40} ${150 + Math.cos(birdFlight * 0.015 + i) * 20} Q${770 + i * 150 + Math.sin(birdFlight * 0.01 + i) * 40} ${140 + Math.cos(birdFlight * 0.015 + i) * 20} ${760 + i * 150 + Math.sin(birdFlight * 0.01 + i) * 40} ${150 + Math.cos(birdFlight * 0.015 + i) * 20}`}
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  opacity="0.8"
                />
                <path
                  d={`M${812 + i * 150 + Math.sin(birdFlight * 0.01 + i) * 40} ${150 + Math.cos(birdFlight * 0.015 + i) * 20} Q${830 + i * 150 + Math.sin(birdFlight * 0.01 + i) * 40} ${160 + Math.cos(birdFlight * 0.015 + i) * 20} ${840 + i * 150 + Math.sin(birdFlight * 0.01 + i) * 40} ${150 + Math.cos(birdFlight * 0.015 + i) * 20}`}
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  opacity="0.8"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Floating tropical particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 4}%`,
                top: `${40 + Math.sin(palmSway * 0.01 + i) * 30}%`,
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
            <h1 className="text-6xl md:text-8xl font-bold text-blue-900 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-green-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                Tropical Paradise
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-800 mb-8 max-w-3xl mx-auto leading-relaxed">
              Escape to a world of endless summer, where palm trees sway in the ocean breeze 
              and turquoise waters invite you to discover paradise on earth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Paradise
              </button>
              <button className="px-8 py-4 border-2 border-green-500 text-green-700 font-semibold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">
                Island Tours
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
              Paradise Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-100/80 to-blue-100/80 backdrop-blur-sm rounded-2xl p-8 border border-green-300/40 hover:border-green-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-blue-800 leading-relaxed">
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
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-700 font-medium">
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
            <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
              Voices of Paradise
            </h2>
            <div className="bg-gradient-to-br from-green-100/80 to-blue-100/80 backdrop-blur-sm rounded-2xl p-8 border border-green-300/40">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-blue-800 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-blue-900 font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-blue-700">
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
                      ? 'bg-green-500 scale-125'
                      : 'bg-green-400/30 hover:bg-green-400/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
              Paradise Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-100/80 to-green-100/80 backdrop-blur-sm rounded-2xl p-6 border border-green-300/40 hover:border-green-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">🌴</div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-blue-800 text-sm">
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
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Ready to Experience Paradise?
            </h2>
            <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
              Journey into the heart of tropical paradise where every moment is filled 
              with the magic of island life and endless summer days.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-green-500 via-blue-600 to-cyan-600 text-white font-semibold rounded-full text-lg hover:from-green-600 hover:via-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
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