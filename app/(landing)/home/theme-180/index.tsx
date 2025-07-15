import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '⚙️',
    title: 'Brass Gears',
    description: 'Precision mechanical parts',
    color: 'from-amber-600 to-yellow-500'
  },
  {
    icon: '🚂',
    title: 'Steam Engines',
    description: 'Powerful mechanical systems',
    color: 'from-orange-600 to-red-600'
  },
  {
    icon: '🔧',
    title: 'Victorian Tools',
    description: 'Craftsmanship and precision',
    color: 'from-gray-600 to-gray-800'
  },
  {
    icon: '💨',
    title: 'Steam Power',
    description: 'Industrial revolution tech',
    color: 'from-blue-600 to-cyan-600'
  }
];

const testimonials = [
  {
    name: 'Master Engineer',
    role: 'Steam Power Expert',
    avatar: '⚙️',
    text: 'The steampunk workshop combines Victorian elegance with mechanical precision, where every gear turns in perfect harmony.',
    rating: 5
  },
  {
    name: 'Brass Smith',
    role: 'Metal Craftsman',
    avatar: '🔧',
    text: 'Our workshop creates the finest brass mechanisms, where form meets function in a symphony of steam and steel.',
    rating: 5
  },
  {
    name: 'Steam Pioneer',
    role: 'Industrial Innovator',
    avatar: '🚂',
    text: 'The power of steam drives our mechanical marvels, creating wonders that bridge the past and future.',
    rating: 5
  }
];

const stats = [
  { value: '1000+', label: 'Brass Gears' },
  { value: '∞', label: 'Steam Power' },
  { value: '24/7', label: 'Workshop Open' },
  { value: '⚙️', label: 'Mechanical' }
];

const services = [
  { icon: '⚙️', title: 'Gear Manufacturing', desc: 'Precision brass parts' },
  { icon: '🚂', title: 'Steam Engine Repair', desc: 'Mechanical maintenance' },
  { icon: '🔧', title: 'Tool Crafting', desc: 'Victorian tool making' },
  { icon: '💨', title: 'Steam Systems', desc: 'Power system design' }
];

export default function HomePageTheme180() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [gearRotation, setGearRotation] = useState(0);
  const [steamFlow, setSteamFlow] = useState(0);
  const [pistonMovement, setPistonMovement] = useState(0);
  const [brassGlow, setBrassGlow] = useState(0);
  const [copperPulse, setCopperPulse] = useState(0);

  useEffect(() => {
    // Gear rotation animation
    const gearInterval = setInterval(() => {
      setGearRotation(prev => (prev + 1) % 100);
    }, 100);

    // Steam flow animation
    const steamInterval = setInterval(() => {
      setSteamFlow(prev => (prev + 1) % 100);
    }, 150);

    // Piston movement animation
    const pistonInterval = setInterval(() => {
      setPistonMovement(prev => (prev + 1) % 100);
    }, 200);

    // Brass glow animation
    const brassInterval = setInterval(() => {
      setBrassGlow(prev => (prev + 1) % 100);
    }, 300);

    // Copper pulse effect
    const copperInterval = setInterval(() => {
      setCopperPulse(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(gearInterval);
      clearInterval(steamInterval);
      clearInterval(pistonInterval);
      clearInterval(brassInterval);
      clearInterval(copperInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-orange-800 to-red-900 font-mono relative overflow-hidden">
      {/* Steampunk Workshop Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-amber-900/90 via-orange-800/70 to-red-900/80">
        {/* Industrial workshop landscape with gears and machinery */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Steampunk gradients */}
            <defs>
              <linearGradient id="brassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D97706" />
                <stop offset="50%" stopColor="#B45309" />
                <stop offset="100%" stopColor="#92400E" />
              </linearGradient>
              <linearGradient id="copperGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EA580C" />
                <stop offset="50%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#B91C1C" />
              </linearGradient>
              <linearGradient id="steamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#1D4ED8" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
              <linearGradient id="workshopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="50%" stopColor="#1F2937" />
                <stop offset="100%" stopColor="#111827" />
              </linearGradient>
              <linearGradient id="metalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6B7280" />
                <stop offset="50%" stopColor="#4B5563" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
              <radialGradient id="brassGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D97706" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#B45309" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#92400E" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Workshop background */}
            <rect x="0" y="0" width="1200" height="800" fill="url(#workshopGradient)" />
            
            {/* Large central gear */}
            <g>
              <circle
                cx="600"
                cy="400"
                r="120"
                fill="none"
                stroke="url(#brassGradient)"
                strokeWidth="8"
                opacity="0.9"
                transform={`rotate(${gearRotation * 3.6} 600 400)`}
              />
              {/* Gear teeth */}
              {Array.from({ length: 24 }, (_, i) => (
                <rect
                  key={i}
                  x="600"
                  y="280"
                  width="8"
                  height="40"
                  fill="url(#brassGradient)"
                  opacity="0.9"
                  transform={`rotate(${i * 15 + gearRotation * 3.6} 600 400)`}
                />
              ))}
              {/* Inner gear ring */}
              <circle
                cx="600"
                cy="400"
                r="80"
                fill="none"
                stroke="url(#copperGradient)"
                strokeWidth="4"
                opacity="0.8"
                transform={`rotate(${-gearRotation * 2.4} 600 400)`}
              />
              {/* Central hub */}
              <circle
                cx="600"
                cy="400"
                r="30"
                fill="url(#brassGlow)"
                opacity="0.9"
              />
            </g>
            
            {/* Steam pipes */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                <rect
                  x={100 + i * 180}
                  y="200"
                  width="20"
                  height="400"
                  fill="url(#copperGradient)"
                  opacity="0.8"
                  stroke="url(#brassGradient)"
                  strokeWidth="2"
                />
                {/* Pipe joints */}
                <circle
                  cx={110 + i * 180}
                  cy="300"
                  r="15"
                  fill="url(#copperGradient)"
                  opacity="0.9"
                  stroke="url(#brassGradient)"
                  strokeWidth="2"
                />
                <circle
                  cx={110 + i * 180}
                  cy="500"
                  r="15"
                  fill="url(#copperGradient)"
                  opacity="0.9"
                  stroke="url(#brassGradient)"
                  strokeWidth="2"
                />
                {/* Steam vents */}
                <circle
                  cx={110 + i * 180}
                  cy="250"
                  r="8"
                  fill="url(#steamGradient)"
                  opacity="0.7"
                />
                <circle
                  cx={110 + i * 180}
                  cy="550"
                  r="8"
                  fill="url(#steamGradient)"
                  opacity="0.7"
                />
              </g>
            ))}
            
            {/* Steam engine pistons */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                {/* Piston cylinder */}
                <rect
                  x={200 + i * 200}
                  y="600"
                  width="60"
                  height="150"
                  fill="url(#metalGradient)"
                  opacity="0.9"
                  stroke="url(#brassGradient)"
                  strokeWidth="3"
                />
                {/* Piston rod */}
                <rect
                  x={215 + i * 200}
                  y={580 + Math.sin(pistonMovement * 0.02 + i) * 30}
                  width="30"
                  height="80"
                  fill="url(#brassGradient)"
                  opacity="0.9"
                  stroke="url(#copperGradient)"
                  strokeWidth="2"
                />
                {/* Piston head */}
                <rect
                  x={210 + i * 200}
                  y={560 + Math.sin(pistonMovement * 0.02 + i) * 30}
                  width="40"
                  height="20"
                  fill="url(#copperGradient)"
                  opacity="0.9"
                  stroke="url(#brassGradient)"
                  strokeWidth="2"
                />
                {/* Steam exhaust */}
                <path
                  d={`M${220 + i * 200} ${580 + Math.sin(pistonMovement * 0.02 + i) * 30} Q${240 + i * 200} ${560 + Math.sin(pistonMovement * 0.02 + i) * 30} ${260 + i * 200} ${580 + Math.sin(pistonMovement * 0.02 + i) * 30}`}
                  fill="none"
                  stroke="url(#steamGradient)"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Small gears */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={150 + i * 120}
                  cy="150"
                  r="25"
                  fill="none"
                  stroke="url(#brassGradient)"
                  strokeWidth="4"
                  opacity="0.8"
                  transform={`rotate(${gearRotation * 2 + i * 30} ${150 + i * 120} 150)`}
                />
                {/* Small gear teeth */}
                {Array.from({ length: 8 }, (_, j) => (
                  <rect
                    key={j}
                    x={150 + i * 120}
                    y="125"
                    width="4"
                    height="20"
                    fill="url(#brassGradient)"
                    opacity="0.8"
                    transform={`rotate(${j * 45 + gearRotation * 2 + i * 30} ${150 + i * 120} 150)`}
                  />
                ))}
                {/* Gear center */}
                <circle
                  cx={150 + i * 120}
                  cy="150"
                  r="8"
                  fill="url(#copperGradient)"
                  opacity="0.9"
                />
              </g>
            ))}
            
            {/* Steam clouds */}
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={200 + i * 80 + Math.sin(steamFlow * 0.01 + i) * 20}
                  cy={100 + (steamFlow * 0.5 + i * 30) % 200}
                  r="15"
                  fill="url(#steamGradient)"
                  opacity="0.4"
                />
                <circle
                  cx={210 + i * 80 + Math.sin(steamFlow * 0.015 + i) * 25}
                  cy={90 + (steamFlow * 0.5 + i * 30) % 200}
                  r="10"
                  fill="url(#steamGradient)"
                  opacity="0.3"
                />
                <circle
                  cx={190 + i * 80 + Math.sin(steamFlow * 0.02 + i) * 15}
                  cy={110 + (steamFlow * 0.5 + i * 30) % 200}
                  r="12"
                  fill="url(#steamGradient)"
                  opacity="0.3"
                />
              </g>
            ))}
            
            {/* Brass pipes */}
            {Array.from({ length: 5 }, (_, i) => (
              <g key={i}>
                <rect
                  x={800 + i * 60}
                  y="300"
                  width="15"
                  height="200"
                  fill="url(#brassGradient)"
                  opacity="0.8"
                  stroke="url(#copperGradient)"
                  strokeWidth="2"
                />
                {/* Pipe elbows */}
                <rect
                  x={800 + i * 60}
                  y="480"
                  width="80"
                  height="15"
                  fill="url(#brassGradient)"
                  opacity="0.8"
                  stroke="url(#copperGradient)"
                  strokeWidth="2"
                />
                {/* Pipe joints */}
                <circle
                  cx={807.5 + i * 60}
                  cy="487.5"
                  r="10"
                  fill="url(#copperGradient)"
                  opacity="0.9"
                  stroke="url(#brassGradient)"
                  strokeWidth="2"
                />
              </g>
            ))}
            
            {/* Workshop tools */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                {/* Wrench */}
                <rect
                  x={50 + i * 100}
                  y="650"
                  width="8"
                  height="60"
                  fill="url(#metalGradient)"
                  opacity="0.9"
                  stroke="url(#brassGradient)"
                  strokeWidth="1"
                />
                <rect
                  x={40 + i * 100}
                  y="640"
                  width="28"
                  height="8"
                  fill="url(#metalGradient)"
                  opacity="0.9"
                  stroke="url(#brassGradient)"
                  strokeWidth="1"
                />
                {/* Screwdriver */}
                <rect
                  x={70 + i * 100}
                  y="650"
                  width="6"
                  height="50"
                  fill="url(#metalGradient)"
                  opacity="0.8"
                  stroke="url(#brassGradient)"
                  strokeWidth="1"
                />
                <rect
                  x={65 + i * 100}
                  y="640"
                  width="16"
                  height="8"
                  fill="url(#metalGradient)"
                  opacity="0.8"
                  stroke="url(#brassGradient)"
                  strokeWidth="1"
                />
              </g>
            ))}
            
            {/* Pressure gauges */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={300 + i * 200}
                  cy="100"
                  r="25"
                  fill="url(#brassGradient)"
                  opacity="0.9"
                  stroke="url(#copperGradient)"
                  strokeWidth="3"
                />
                {/* Gauge face */}
                <circle
                  cx={300 + i * 200}
                  cy="100"
                  r="20"
                  fill="url(#workshopGradient)"
                  opacity="0.8"
                  stroke="url(#brassGradient)"
                  strokeWidth="1"
                />
                {/* Gauge needle */}
                <line
                  x1={300 + i * 200}
                  y1="100"
                  x2={300 + i * 200 + Math.cos(brassGlow * 0.02 + i) * 15}
                  y2={100 + Math.sin(brassGlow * 0.02 + i) * 15}
                  stroke="url(#copperGradient)"
                  strokeWidth="2"
                  opacity="0.9"
                />
                {/* Gauge markings */}
                {Array.from({ length: 8 }, (_, j) => (
                  <line
                    key={j}
                    x1={300 + i * 200 + Math.cos((j * 45) * Math.PI / 180) * 18}
                    y1={100 + Math.sin((j * 45) * Math.PI / 180) * 18}
                    x2={300 + i * 200 + Math.cos((j * 45) * Math.PI / 180) * 22}
                    y2={100 + Math.sin((j * 45) * Math.PI / 180) * 22}
                    stroke="url(#brassGradient)"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                ))}
              </g>
            ))}
            
            {/* Floating steam particles */}
            {Array.from({ length: 20 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={100 + i * 50 + Math.sin(steamFlow * 0.01 + i) * 15}
                  cy={50 + (steamFlow * 0.5 + i * 20) % 150}
                  r="2"
                  fill="url(#steamGradient)"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Workshop floor */}
            <rect x="0" y="750" width="1200" height="50" fill="url(#metalGradient)" opacity="0.7" />
            
            {/* Industrial symbols */}
            {Array.from({ length: 10 }, (_, i) => (
              <g key={i}>
                <text
                  x={150 + i * 100 + Math.sin(copperPulse * 0.01 + i) * 10}
                  y={150 + (copperPulse * 0.5 + i * 25) % 200}
                  fill="url(#brassGradient)"
                  fontSize="12"
                  opacity="0.6"
                  fontFamily="monospace"
                >
                  {['⚙️', '🔧', '🚂', '💨', '⚡', '🔩', '🛠️', '⚙️', '🔧', '🚂'][i]}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Floating steam particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${5 + i * 4}%`,
                top: `${20 + Math.sin(steamFlow * 0.01 + i) * 60}%`,
                animation: `steamFloat ${3 + i * 0.1}s ease-in-out infinite`
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
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Steampunk Workshop
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Enter a world where Victorian elegance meets mechanical precision, 
              where brass gears turn in perfect harmony and steam powers the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Enter Workshop
              </button>
              <button className="px-8 py-4 border-2 border-amber-500 text-amber-300 font-semibold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Workshop Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-900/80 to-orange-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/40 hover:border-amber-400/60 transition-all duration-300 transform hover:scale-105"
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
              Workshop Masters
            </h2>
            <div className="bg-gradient-to-br from-amber-900/80 to-orange-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/40">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-amber-200 mb-6 italic">
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
                      ? 'bg-amber-500 scale-125'
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
              Workshop Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-900/80 to-amber-900/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/40 hover:border-amber-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">⚙️</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-amber-200 text-sm">
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
              Ready to Enter the Workshop?
            </h2>
            <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
              Experience the perfect blend of Victorian craftsmanship and mechanical innovation, 
              where every gear turns with precision and steam powers the future.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 text-white font-semibold rounded-full text-lg hover:from-amber-600 hover:via-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Start Building
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes steamFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
} 