import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🏙️',
    title: 'Neon Towers',
    description: 'Skyscrapers glowing with neon lights',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: '🚁',
    title: 'Flying Cars',
    description: 'Hover vehicles in neon traffic',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: '💻',
    title: 'Holographic UI',
    description: 'Floating digital interfaces',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: '⚡',
    title: 'Energy Grid',
    description: 'Pulsing power networks',
    color: 'from-yellow-400 to-orange-500'
  }
];

const testimonials = [
  {
    name: 'Cyber Commander',
    role: 'Neon District Leader',
    avatar: '🏙️',
    text: 'Di kota neon ini, setiap menara adalah kanvas digital yang hidup, di mana teknologi dan seni bersatu dalam simfoni cahaya yang tak pernah berhenti.',
    rating: 5
  },
  {
    name: 'Holo Designer',
    role: 'Digital Architect',
    avatar: '💻',
    text: 'Interface holografik kami mengubah cara kita berinteraksi dengan dunia digital, menciptakan pengalaman yang melampaui batas realitas.',
    rating: 5
  },
  {
    name: 'Neon Engineer',
    role: 'Power Grid Master',
    avatar: '⚡',
    text: 'Jaringan energi kami berdenyut dengan kehidupan digital, menghidupkan setiap sudut kota dengan kekuatan teknologi masa depan.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Neon Lights' },
  { value: '100%', label: 'Digital Life' },
  { value: '24/7', label: 'City Awake' },
  { value: '🚁', label: 'Flying Cars' }
];

const services = [
  { icon: '🏙️', title: 'City Tours', desc: 'Neon district exploration' },
  { icon: '🚁', title: 'Air Transport', desc: 'Flying car services' },
  { icon: '💻', title: 'Holo Systems', desc: 'Digital interface design' },
  { icon: '⚡', title: 'Power Grid', desc: 'Energy management' }
];

export default function HomePageTheme187() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [neonPulse, setNeonPulse] = useState(0);
  const [carFly, setCarFly] = useState(0);
  const [hologramGlow, setHologramGlow] = useState(0);
  const [gridPower, setGridPower] = useState(0);
  const [rainFall, setRainFall] = useState(0);

  useEffect(() => {
    const neonInterval = setInterval(() => setNeonPulse(prev => (prev + 1) % 100), 100);
    const carInterval = setInterval(() => setCarFly(prev => (prev + 1) % 100), 150);
    const holoInterval = setInterval(() => setHologramGlow(prev => (prev + 1) % 100), 200);
    const gridInterval = setInterval(() => setGridPower(prev => (prev + 1) % 100), 120);
    const rainInterval = setInterval(() => setRainFall(prev => (prev + 1) % 100), 80);
    
    return () => {
      clearInterval(neonInterval);
      clearInterval(carInterval);
      clearInterval(holoInterval);
      clearInterval(gridInterval);
      clearInterval(rainInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-pink-900 font-mono relative overflow-hidden">
      {/* Cyberpunk City Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900/90 via-purple-900/70 to-pink-900/80">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="cityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#111827" />
                <stop offset="50%" stopColor="#581C87" />
                <stop offset="100%" stopColor="#BE185D" />
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
            
            {/* City background */}
            <rect x="0" y="0" width="1200" height="800" fill="url(#cityGradient)" />
            
            {/* Skyscrapers */}
            {Array.from({ length: 15 }, (_, i) => (
              <g key={i}>
                {/* Building */}
                <rect
                  x={50 + i * 80}
                  y={200 + (i % 3) * 50}
                  width={40 + (i % 3) * 10}
                  height={400 + (i % 2) * 100}
                  fill="#1F2937"
                  opacity="0.9"
                  stroke="url(#neonGradient)"
                  strokeWidth="2"
                />
                {/* Windows */}
                {Array.from({ length: 8 }, (_, j) => (
                  <rect
                    key={j}
                    x={55 + i * 80}
                    y={220 + j * 50 + (neonPulse + i * 5) % 20}
                    width="30"
                    height="20"
                    fill={j % 2 === 0 ? "#EC4899" : "#06B6D4"}
                    opacity="0.8"
                  />
                ))}
                {/* Neon signs */}
                <rect
                  x={45 + i * 80}
                  y={150 + (i % 2) * 30}
                  width="50"
                  height="8"
                  fill="url(#neonGradient)"
                  opacity="0.9"
                  filter="drop-shadow(0 0 10px rgba(236, 72, 153, 0.6))"
                />
              </g>
            ))}
            
            {/* Flying cars */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                {/* Car body */}
                <ellipse
                  cx={200 + i * 180 + (carFly + i * 15) % 100}
                  cy={120 + (i % 2) * 60 + (carFly + i * 8) % 40}
                  rx="25"
                  ry="8"
                  fill="#06B6D4"
                  opacity="0.9"
                  stroke="url(#neonGradient)"
                  strokeWidth="2"
                />
                {/* Car lights */}
                <circle
                  cx={180 + i * 180 + (carFly + i * 15) % 100}
                  cy={120 + (i % 2) * 60 + (carFly + i * 8) % 40}
                  r="3"
                  fill="#EC4899"
                  opacity="0.8"
                />
                <circle
                  cx={220 + i * 180 + (carFly + i * 15) % 100}
                  cy={120 + (i % 2) * 60 + (carFly + i * 8) % 40}
                  r="3"
                  fill="#06B6D4"
                  opacity="0.8"
                />
                {/* Engine trails */}
                <path
                  d={`M${180 + i * 180 + (carFly + i * 15) % 100},${120 + (i % 2) * 60 + (carFly + i * 8) % 40} L${160 + i * 180 + (carFly + i * 15) % 100},${120 + (i % 2) * 60 + (carFly + i * 8) % 40}`}
                  stroke="#06B6D4"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Holographic displays */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                {/* Hologram base */}
                <rect
                  x={300 + i * 250}
                  y={500}
                  width="120"
                  height="8"
                  fill="url(#neonGradient)"
                  opacity="0.7"
                />
                {/* Hologram projection */}
                <rect
                  x={310 + i * 250}
                  y={400 - (hologramGlow + i * 10) % 100}
                  width="100"
                  height="100"
                  fill="none"
                  stroke="url(#neonGradient)"
                  strokeWidth="2"
                  opacity="0.8"
                  strokeDasharray="5,5"
                />
                {/* Hologram content */}
                <circle
                  cx={360 + i * 250}
                  cy={450 - (hologramGlow + i * 10) % 100}
                  r="20"
                  fill="none"
                  stroke="#EC4899"
                  strokeWidth="2"
                  opacity="0.9"
                />
              </g>
            ))}
            
            {/* Power grid lines */}
            {Array.from({ length: 8 }, (_, i) => (
              <path
                key={i}
                d={`M${100 + i * 150},800 L${100 + i * 150},${600 - (gridPower + i * 8) % 200}`}
                stroke="url(#neonGradient)"
                strokeWidth="3"
                opacity="0.7"
                strokeDasharray="10,5"
              />
            ))}
            
            {/* Rain effect */}
            {Array.from({ length: 50 }, (_, i) => (
              <line
                key={i}
                x1={i * 25 + (rainFall + i * 3) % 100}
                y1={0}
                x2={i * 25 + (rainFall + i * 3) % 100}
                y2="800"
                stroke="#06B6D4"
                strokeWidth="1"
                opacity="0.3"
              />
            ))}
            
            {/* Energy nodes */}
            {Array.from({ length: 12 }, (_, i) => (
              <circle
                key={i}
                cx={150 + i * 100}
                cy={700 - (gridPower + i * 10) % 150}
                r="4"
                fill="url(#neonGradient)"
                opacity="0.9"
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
                  Neon City
                </h1>
                <p className="text-pink-300 mt-2">Kota masa depan yang hidup</p>
              </div>
              <div className="text-cyan-400 text-right">
                <div className="text-2xl mb-2">🏙️🚁💻⚡</div>
                <div className="text-sm text-cyan-300">Cyberpunk Future</div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Neon
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                City
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-300 mb-12 max-w-4xl mx-auto">
              Masuki dunia cyberpunk yang menakjubkan, di mana neon lights bersinar sepanjang malam, mobil terbang melintasi langit, dan teknologi holografik mengubah cara kita hidup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Masuk ke Kota
              </button>
              <button className="border-2 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Jelajahi Distrik
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-black/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Fitur Cyberpunk
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/60 via-purple-800/60 to-pink-800/60 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
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
              Suara Cyberpunk
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800/60 via-purple-800/60 to-pink-800/60 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-8">
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
              Layanan Cyberpunk
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/60 via-purple-800/60 to-pink-800/60 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
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
              Bergabunglah dengan Neon City
            </h2>
            <p className="text-xl text-pink-200 mb-8 max-w-2xl mx-auto">
              Masuki masa depan cyberpunk yang menakjubkan, di mana teknologi dan neon lights menciptakan dunia yang tak pernah tidur.
            </p>
            <button className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Masuk Sekarang
            </button>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 bg-gray-900/20">
          <div className="container mx-auto px-4 text-center">
            <div className="text-2xl mb-4">🏙️🚁💻⚡</div>
            <p className="text-pink-200">Neon City - Masa Depan Cyberpunk</p>
          </div>
        </footer>
      </div>
    </div>
  );
} 