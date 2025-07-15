import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '⚙️',
    title: 'Brass Gears',
    description: 'Precision mechanical systems',
    color: 'from-amber-400 to-yellow-600'
  },
  {
    icon: '💨',
    title: 'Steam Power',
    description: 'Pressurized steam energy',
    color: 'from-gray-400 to-slate-600'
  },
  {
    icon: '🔧',
    title: 'Clockwork',
    description: 'Intricate mechanical designs',
    color: 'from-orange-400 to-red-600'
  },
  {
    icon: '🏭',
    title: 'Industrial',
    description: 'Victorian era machinery',
    color: 'from-amber-500 to-orange-600'
  }
];

const testimonials = [
  {
    name: 'Master Tinkerer',
    role: 'Brass Artisan',
    avatar: '⚙️',
    text: 'Di bengkel steampunk ini, setiap gigi dan roda bergerak dalam harmoni yang sempurna, menciptakan mesin yang tidak hanya fungsional tetapi juga indah.',
    rating: 5
  },
  {
    name: 'Steam Engineer',
    role: 'Power Specialist',
    avatar: '💨',
    text: 'Uap bertekanan tinggi menggerakkan setiap mesin di bengkel kami, memberikan kekuatan yang tak terbatas untuk kreasi mekanis.',
    rating: 5
  },
  {
    name: 'Clockwork Master',
    role: 'Precision Expert',
    avatar: '🔧',
    text: 'Setiap komponen dipasang dengan presisi yang sempurna, menciptakan mesin yang berjalan seperti jam yang tepat waktu.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Brass Gears' },
  { value: '100%', label: 'Steam Power' },
  { value: '24/7', label: 'Workshop Active' },
  { value: '⚙️', label: 'Clockwork' }
];

const services = [
  { icon: '⚙️', title: 'Gear Crafting', desc: 'Precision gear making' },
  { icon: '💨', title: 'Steam Systems', desc: 'Steam power installation' },
  { icon: '🔧', title: 'Clockwork', desc: 'Mechanical precision work' },
  { icon: '🏭', title: 'Industrial', desc: 'Victorian machinery' }
];

export default function HomePageTheme188() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [gearRotate, setGearRotate] = useState(0);
  const [steamRise, setSteamRise] = useState(0);
  const [pistonMove, setPistonMove] = useState(0);
  const [brassGlow, setBrassGlow] = useState(0);
  const [pipeFlow, setPipeFlow] = useState(0);

  useEffect(() => {
    const gearInterval = setInterval(() => setGearRotate(prev => (prev + 1) % 100), 100);
    const steamInterval = setInterval(() => setSteamRise(prev => (prev + 1) % 100), 150);
    const pistonInterval = setInterval(() => setPistonMove(prev => (prev + 1) % 100), 200);
    const brassInterval = setInterval(() => setBrassGlow(prev => (prev + 1) % 100), 120);
    const pipeInterval = setInterval(() => setPipeFlow(prev => (prev + 1) % 100), 180);
    
    return () => {
      clearInterval(gearInterval);
      clearInterval(steamInterval);
      clearInterval(pistonInterval);
      clearInterval(brassInterval);
      clearInterval(pipeInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-orange-100 to-red-100 font-serif relative overflow-hidden">
      {/* Steampunk Workshop Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-amber-100/90 via-orange-100/80 to-red-100/80">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="workshopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fecaca" />
              </linearGradient>
              <radialGradient id="brassGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#d97706" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#b45309" stopOpacity="0.1" />
              </radialGradient>
              <linearGradient id="brassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <linearGradient id="steamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="50%" stopColor="#6b7280" />
                <stop offset="100%" stopColor="#4b5563" />
              </linearGradient>
            </defs>
            
            {/* Workshop background */}
            <rect x="0" y="0" width="1200" height="800" fill="url(#workshopGradient)" />
            
            {/* Large central gear */}
            <g>
              <circle
                cx="600"
                cy="400"
                r="80"
                fill="url(#brassGradient)"
                opacity="0.9"
                stroke="#92400e"
                strokeWidth="4"
              />
              {/* Gear teeth */}
              {Array.from({ length: 12 }, (_, i) => (
                <rect
                  key={i}
                  x="600"
                  y="320"
                  width="8"
                  height="40"
                  fill="url(#brassGradient)"
                  opacity="0.8"
                  transform={`rotate(${i * 30 + gearRotate * 3.6})`}
                  transformOrigin="600 400"
                />
              ))}
              {/* Inner gear ring */}
              <circle
                cx="600"
                cy="400"
                r="50"
                fill="none"
                stroke="#92400e"
                strokeWidth="3"
                opacity="0.7"
              />
            </g>
            
            {/* Steam pipes */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                {/* Pipe */}
                <rect
                  x={200 + i * 150}
                  y={600}
                  width="20"
                  height="150"
                  fill="url(#steamGradient)"
                  opacity="0.8"
                  rx="10"
                />
                {/* Steam vent */}
                <ellipse
                  cx={210 + i * 150}
                  cy={580 - (steamRise + i * 10) % 100}
                  rx="15"
                  ry="8"
                  fill="url(#steamGradient)"
                  opacity="0.6"
                />
                {/* Steam particles */}
                {Array.from({ length: 5 }, (_, j) => (
                  <circle
                    key={j}
                    cx={205 + i * 150 + j * 3}
                    cy={570 - (steamRise + i * 10 + j * 5) % 120}
                    r="2"
                    fill="#9ca3af"
                    opacity="0.5"
                  />
                ))}
              </g>
            ))}
            
            {/* Piston systems */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                {/* Piston cylinder */}
                <rect
                  x={300 + i * 200}
                  y={300 + (pistonMove + i * 15) % 50}
                  width="40"
                  height="120"
                  fill="url(#brassGradient)"
                  opacity="0.8"
                  rx="20"
                />
                {/* Piston rod */}
                <rect
                  x={310 + i * 200}
                  y={280 + (pistonMove + i * 15) % 50}
                  width="20"
                  height="40"
                  fill="url(#brassGradient)"
                  opacity="0.9"
                  rx="10"
                />
                {/* Piston head */}
                <circle
                  cx={320 + i * 200}
                  cy={280 + (pistonMove + i * 15) % 50}
                  r="15"
                  fill="url(#brassGradient)"
                  opacity="0.9"
                />
              </g>
            ))}
            
            {/* Small gears */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={150 + i * 120}
                  cy={150 + (i % 2) * 100}
                  r="25"
                  fill="url(#brassGradient)"
                  opacity="0.8"
                  stroke="#92400e"
                  strokeWidth="2"
                />
                {/* Gear teeth */}
                {Array.from({ length: 8 }, (_, j) => (
                  <rect
                    key={j}
                    x={150 + i * 120}
                    y={125 + (i % 2) * 100}
                    width="4"
                    height="20"
                    fill="url(#brassGradient)"
                    opacity="0.7"
                    transform={`rotate(${j * 45 + gearRotate * 2})`}
                    transformOrigin={`${150 + i * 120} ${150 + (i % 2) * 100}`}
                  />
                ))}
              </g>
            ))}
            
            {/* Steam clouds */}
            {Array.from({ length: 10 }, (_, i) => (
              <ellipse
                key={i}
                cx={100 + i * 100 + (steamRise + i * 8) % 60}
                cy={200 + (i % 2) * 150 - (steamRise + i * 5) % 100}
                rx={20 + (steamRise + i * 2) % 10}
                ry={10 + (steamRise + i * 1) % 5}
                fill="url(#steamGradient)"
                opacity="0.4"
              />
            ))}
            
            {/* Brass pipes */}
            {Array.from({ length: 5 }, (_, i) => (
              <path
                key={i}
                d={`M${400 + i * 150},800 Q${450 + i * 150},${700 - (pipeFlow + i * 10) % 100} ${500 + i * 150},${600 - (pipeFlow + i * 15) % 150} Q${550 + i * 150},${500 - (pipeFlow + i * 20) % 100} ${600 + i * 150},${400 - (pipeFlow + i * 5) % 50}`}
                stroke="url(#brassGradient)"
                strokeWidth="8"
                fill="none"
                opacity="0.7"
              />
            ))}
            
            {/* Pressure gauges */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={200 + i * 160}
                  cy={100 + (i % 2) * 50}
                  r="20"
                  fill="url(#brassGradient)"
                  opacity="0.9"
                  stroke="#92400e"
                  strokeWidth="2"
                />
                {/* Gauge needle */}
                <line
                  x1={200 + i * 160}
                  y1={100 + (i % 2) * 50}
                  x2={200 + i * 160 + Math.cos((brassGlow + i * 20) * 0.1) * 15}
                  y2={100 + (i % 2) * 50 + Math.sin((brassGlow + i * 20) * 0.1) * 15}
                  stroke="#92400e"
                  strokeWidth="2"
                  opacity="0.9"
                />
              </g>
            ))}
            
            {/* Workshop tools */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                {/* Wrench */}
                <rect
                  x={800 + i * 80}
                  y={300 + (i % 2) * 100}
                  width="6"
                  height="60"
                  fill="url(#brassGradient)"
                  opacity="0.8"
                  rx="3"
                />
                <rect
                  x={790 + i * 80}
                  y={350 + (i % 2) * 100}
                  width="26"
                  height="8"
                  fill="url(#brassGradient)"
                  opacity="0.8"
                  rx="4"
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
              <div className="text-amber-800">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Steampunk Workshop
                </h1>
                <p className="text-amber-700 mt-2">Bengkel mesin era Victoria</p>
              </div>
              <div className="text-orange-600 text-right">
                <div className="text-2xl mb-2">⚙️💨🔧🏭</div>
                <div className="text-sm text-orange-500">Brass & Steam</div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Steampunk
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                Workshop
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-700 mb-12 max-w-4xl mx-auto">
              Masuki dunia steampunk yang menakjubkan, di mana mesin kuningan berputar dengan presisi, uap bertekanan tinggi menggerakkan setiap komponen, dan teknologi era Victoria bertemu dengan inovasi modern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Masuk ke Bengkel
              </button>
              <button className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Jelajahi Mesin
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Fitur Steampunk
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-100/60 via-orange-100/60 to-red-100/60 backdrop-blur-sm border border-amber-300/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-amber-800 mb-4">{feature.title}</h3>
                  <p className="text-amber-700">{feature.description}</p>
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
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-amber-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-white/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Suara Bengkel Steampunk
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-amber-100/60 via-orange-100/60 to-red-100/60 backdrop-blur-sm border border-amber-300/30 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                  <h3 className="text-2xl font-bold text-amber-800 mb-2">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-amber-700 mb-4">{testimonials[currentTestimonial].role}</p>
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-amber-700 text-center italic">"{testimonials[currentTestimonial].text}"</p>
                <div className="flex justify-center mt-8 gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-amber-600' : 'bg-amber-300'
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
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Layanan Bengkel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-100/60 via-orange-100/60 to-red-100/60 backdrop-blur-sm border border-amber-300/30 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-amber-800 mb-2">{service.title}</h3>
                  <p className="text-amber-700 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-red-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Bergabunglah dengan Steampunk Workshop
            </h2>
            <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
              Masuki dunia steampunk yang menakjubkan, di mana teknologi era Victoria bertemu dengan inovasi modern dalam harmoni yang sempurna.
            </p>
            <button className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Mulai Sekarang
            </button>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 bg-amber-800/20">
          <div className="container mx-auto px-4 text-center">
            <div className="text-2xl mb-4">⚙️💨🔧🏭</div>
            <p className="text-amber-700">Steampunk Workshop - Bengkel Era Victoria</p>
          </div>
        </footer>
      </div>
    </div>
  );
} 