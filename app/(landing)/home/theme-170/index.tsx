import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '⚙️',
    title: 'Brass Gears',
    description: 'Precision mechanical systems',
    color: 'from-amber-500 to-yellow-600'
  },
  {
    icon: '🚂',
    title: 'Steam Engines',
    description: 'Powerful steam technology',
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: '🏛️',
    title: 'Victorian Architecture',
    description: 'Elegant classical design',
    color: 'from-stone-500 to-gray-600'
  },
  {
    icon: '🔧',
    title: 'Mechanical Wonders',
    description: 'Innovative contraptions',
    color: 'from-copper-500 to-bronze-600'
  }
];

const testimonials = [
  {
    name: 'Professor Steamsworth',
    role: 'Master Engineer',
    avatar: '⚙️',
    text: 'Our brass gears and steam engines represent the pinnacle of Victorian engineering and innovation.',
    rating: 5
  },
  {
    name: 'Lady Victorian',
    role: 'Architectural Designer',
    avatar: '🏛️',
    text: 'The elegance of Victorian architecture combined with steam technology creates timeless beauty.',
    rating: 5
  },
  {
    name: 'Captain Brass',
    role: 'Steam Fleet Commander',
    avatar: '🚂',
    text: 'Steam power drives our world forward, combining strength with sophisticated engineering.',
    rating: 5
  }
];

const stats = [
  { value: '100%', label: 'Steam Powered' },
  { value: '∞', label: 'Brass Gears' },
  { value: '24/7', label: 'Mechanical Operations' },
  { value: 'Victorian', label: 'Elegance' }
];

const services = [
  { icon: '⚙️', title: 'Gear Engineering', desc: 'Precision mechanics' },
  { icon: '🚂', title: 'Steam Technology', desc: 'Power systems' },
  { icon: '🏛️', title: 'Victorian Design', desc: 'Classical architecture' },
  { icon: '🔧', title: 'Mechanical Innovation', desc: 'Advanced contraptions' }
];

export default function HomePageTheme170() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [gearRotation, setGearRotation] = useState(0);
  const [steamFlow, setSteamFlow] = useState(0);
  const [pistonMotion, setPistonMotion] = useState(0);
  const [brassGlow, setBrassGlow] = useState(0);

  useEffect(() => {
    // Gear rotation animation
    const gearInterval = setInterval(() => {
      setGearRotation(prev => (prev + 1) % 100);
    }, 100);

    // Steam flow animation
    const steamInterval = setInterval(() => {
      setSteamFlow(prev => (prev + 1) % 100);
    }, 150);

    // Piston motion animation
    const pistonInterval = setInterval(() => {
      setPistonMotion(prev => (prev + 1) % 100);
    }, 200);

    // Brass glow effect
    const brassInterval = setInterval(() => {
      setBrassGlow(prev => (prev + 1) % 100);
    }, 300);

    return () => {
      clearInterval(gearInterval);
      clearInterval(steamInterval);
      clearInterval(pistonInterval);
      clearInterval(brassInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-yellow-800 to-orange-900 font-serif relative overflow-hidden">
      {/* Steampunk Victorian Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-amber-900/90 via-yellow-800/70 to-orange-900/80">
        {/* Victorian architecture and steam machinery */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Victorian buildings */}
            <defs>
              <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#92400E" />
                <stop offset="50%" stopColor="#78350F" />
                <stop offset="100%" stopColor="#451A03" />
              </linearGradient>
              <linearGradient id="brassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="copperGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#B45309" />
                <stop offset="50%" stopColor="#92400E" />
                <stop offset="100%" stopColor="#78350F" />
              </linearGradient>
              <linearGradient id="steamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#F3F4F6" />
                <stop offset="100%" stopColor="#E5E7EB" />
              </linearGradient>
            </defs>
            
            {/* Victorian buildings */}
            {Array.from({ length: 5 }, (_, i) => (
              <g key={i}>
                <rect
                  x={100 + i * 200}
                  y={400}
                  width="120"
                  height="300"
                  fill="url(#buildingGradient)"
                  opacity="0.9"
                  stroke="url(#brassGradient)"
                  strokeWidth="3"
                />
                {/* Building windows */}
                {Array.from({ length: 4 }, (_, j) => (
                  <rect
                    key={j}
                    x={110 + i * 200 + j * 25}
                    y={420 + j * 60}
                    width="15"
                    height="25"
                    fill="url(#brassGradient)"
                    opacity="0.8"
                  />
                ))}
                {/* Building spires */}
                <path
                  d={`M${160 + i * 200} 400 L${170 + i * 200} 350 L${180 + i * 200} 400 Z`}
                  fill="url(#copperGradient)"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Large central gear */}
            <g>
              <circle
                cx="600"
                cy="300"
                r="80"
                fill="url(#brassGradient)"
                opacity="0.9"
                stroke="url(#copperGradient)"
                strokeWidth="4"
                style={{
                  transform: `rotate(${gearRotation * 3.6}deg)`,
                  transformOrigin: '600px 300px'
                }}
              />
              {/* Gear teeth */}
              {Array.from({ length: 12 }, (_, i) => (
                <rect
                  key={i}
                  x={595 + Math.cos((i * 30 + gearRotation * 3.6) * Math.PI / 180) * 90}
                  y={295 + Math.sin((i * 30 + gearRotation * 3.6) * Math.PI / 180) * 90}
                  width="10"
                  height="20"
                  fill="url(#copperGradient)"
                  opacity="0.8"
                  style={{
                    transform: `rotate(${i * 30 + gearRotation * 3.6}deg)`,
                    transformOrigin: `${600 + Math.cos((i * 30 + gearRotation * 3.6) * Math.PI / 180) * 90}px ${300 + Math.sin((i * 30 + gearRotation * 3.6) * Math.PI / 180) * 90}px`
                  }}
                />
              ))}
            </g>
            
            {/* Smaller gears */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={200 + i * 150}
                  cy={200 + Math.sin(gearRotation * 0.02 + i) * 20}
                  r="30"
                  fill="url(#brassGradient)"
                  opacity="0.8"
                  stroke="url(#copperGradient)"
                  strokeWidth="2"
                  style={{
                    transform: `rotate(${-gearRotation * 2 + i * 30}deg)`,
                    transformOrigin: `${200 + i * 150}px ${200 + Math.sin(gearRotation * 0.02 + i) * 20}px`
                  }}
                />
                {/* Small gear teeth */}
                {Array.from({ length: 8 }, (_, j) => (
                  <rect
                    key={j}
                    x={195 + i * 150 + Math.cos((j * 45 - gearRotation * 2 + i * 30) * Math.PI / 180) * 35}
                    y={195 + Math.sin(gearRotation * 0.02 + i) * 20 + Math.sin((j * 45 - gearRotation * 2 + i * 30) * Math.PI / 180) * 35}
                    width="6"
                    height="12"
                    fill="url(#copperGradient)"
                    opacity="0.7"
                    style={{
                      transform: `rotate(${j * 45 - gearRotation * 2 + i * 30}deg)`,
                      transformOrigin: `${200 + i * 150}px ${200 + Math.sin(gearRotation * 0.02 + i) * 20}px`
                    }}
                  />
                ))}
              </g>
            ))}
            
            {/* Steam pipes */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <rect
                  x={150 + i * 120}
                  y={500 + Math.sin(steamFlow * 0.02 + i) * 10}
                  width="80"
                  height="15"
                  fill="url(#copperGradient)"
                  opacity="0.8"
                  stroke="url(#brassGradient)"
                  strokeWidth="2"
                />
                {/* Steam vents */}
                <circle
                  cx={190 + i * 120}
                  cy={507 + Math.sin(steamFlow * 0.02 + i) * 10}
                  r="8"
                  fill="url(#steamGradient)"
                  opacity="0.6"
                />
                {/* Steam particles */}
                {Array.from({ length: 5 }, (_, j) => (
                  <circle
                    key={j}
                    cx={190 + i * 120 + Math.sin(steamFlow * 0.01 + j) * 20}
                    cy={500 - (steamFlow * 0.5 + j * 10) % 100}
                    r={2 + Math.sin(steamFlow * 0.02 + j) * 1}
                    fill="url(#steamGradient)"
                    opacity="0.4"
                  />
                ))}
              </g>
            ))}
            
            {/* Piston mechanisms */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                <rect
                  x={300 + i * 200}
                  y={600 + Math.sin(pistonMotion * 0.03 + i) * 30}
                  width="20"
                  height="100"
                  fill="url(#brassGradient)"
                  opacity="0.9"
                  stroke="url(#copperGradient)"
                  strokeWidth="2"
                />
                <rect
                  x={280 + i * 200}
                  y={620 + Math.sin(pistonMotion * 0.03 + i) * 30}
                  width="60"
                  height="20"
                  fill="url(#copperGradient)"
                  opacity="0.8"
                  stroke="url(#brassGradient)"
                  strokeWidth="1"
                />
                {/* Piston connecting rod */}
                <line
                  x1={310 + i * 200}
                  y1={700 + Math.sin(pistonMotion * 0.03 + i) * 30}
                  x2={310 + i * 200}
                  y2={750}
                  stroke="url(#brassGradient)"
                  strokeWidth="3"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Steam boilers */}
            {Array.from({ length: 3 }, (_, i) => (
              <g key={i}>
                <ellipse
                  cx={400 + i * 300}
                  cy="650"
                  rx="40"
                  ry="25"
                  fill="url(#copperGradient)"
                  opacity="0.9"
                  stroke="url(#brassGradient)"
                  strokeWidth="3"
                />
                {/* Boiler pressure gauge */}
                <circle
                  cx={420 + i * 300}
                  cy="640"
                  r="15"
                  fill="url(#brassGradient)"
                  opacity="0.8"
                  stroke="url(#copperGradient)"
                  strokeWidth="2"
                />
                {/* Gauge needle */}
                <line
                  x1={420 + i * 300}
                  y1="640"
                  x2={430 + i * 300}
                  y2="635"
                  stroke="url(#copperGradient)"
                  strokeWidth="2"
                  opacity="0.9"
                  style={{
                    transform: `rotate(${brassGlow * 3.6}deg)`,
                    transformOrigin: `${420 + i * 300}px 640px`
                  }}
                />
              </g>
            ))}
            
            {/* Victorian clock tower */}
            <g>
              <rect
                x="550"
                y="200"
                width="100"
                height="200"
                fill="url(#buildingGradient)"
                opacity="0.9"
                stroke="url(#brassGradient)"
                strokeWidth="4"
              />
              {/* Clock face */}
              <circle
                cx="600"
                cy="280"
                r="30"
                fill="url(#brassGradient)"
                opacity="0.8"
                stroke="url(#copperGradient)"
                strokeWidth="3"
              />
              {/* Clock hands */}
              <line
                x1="600"
                y1="280"
                x2="600"
                y2="260"
                stroke="url(#copperGradient)"
                strokeWidth="3"
                opacity="0.9"
                style={{
                  transform: `rotate(${gearRotation * 0.6}deg)`,
                  transformOrigin: '600px 280px'
                }}
              />
              <line
                x1="600"
                y1="280"
                x2="615"
                y2="280"
                stroke="url(#copperGradient)"
                strokeWidth="2"
                opacity="0.9"
                style={{
                  transform: `rotate(${gearRotation * 0.1}deg)`,
                  transformOrigin: '600px 280px'
                }}
              />
            </g>
            
            {/* Steam clouds */}
            {Array.from({ length: 10 }, (_, i) => (
              <ellipse
                key={i}
                cx={100 + i * 100 + Math.sin(steamFlow * 0.01 + i) * 30}
                cy={100 + Math.cos(steamFlow * 0.015 + i) * 20}
                rx={20 + Math.sin(steamFlow * 0.02 + i) * 10}
                ry={15 + Math.cos(steamFlow * 0.025 + i) * 8}
                fill="url(#steamGradient)"
                opacity="0.3"
              />
            ))}
          </svg>
        </div>

        {/* Floating brass particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-60"
              style={{
                left: `${15 + i * 3}%`,
                top: `${25 + Math.sin(gearRotation * 0.01 + i) * 25}%`,
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
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Steampunk Victorian
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the elegance of Victorian engineering combined with the power of steam technology, 
              where brass gears turn and steam engines drive innovation forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Engine
              </button>
              <button className="px-8 py-4 border-2 border-amber-400 text-amber-300 font-semibold rounded-full hover:bg-amber-400 hover:text-gray-900 transition-all duration-300">
                Explore Technology
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Victorian Engineering Excellence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-900/50 to-orange-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-amber-200 leading-relaxed">
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
                  <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-amber-200 font-medium">
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
              Voices of Innovation
            </h2>
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/20">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-amber-100 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-white font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-amber-300">
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
                      ? 'bg-amber-400 scale-125'
                      : 'bg-amber-400/30 hover:bg-amber-400/50'
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
              Steam Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-900/50 to-amber-800/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">⚙️</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-orange-200 text-sm">
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
              Ready to Steam Forward?
            </h2>
            <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
              Join us in the age of steam and brass, where Victorian elegance meets 
              mechanical innovation to create a world of endless possibilities.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-600 text-white font-semibold rounded-full text-lg hover:from-amber-600 hover:via-orange-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Begin Your Journey
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
} 