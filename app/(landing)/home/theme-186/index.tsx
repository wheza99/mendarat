import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌸',
    title: 'Data Flowers',
    description: 'Digital petals bloom with information',
    color: 'from-pink-400 to-purple-500'
  },
  {
    icon: '🦋',
    title: 'Digital Butterflies',
    description: 'Code-winged messengers of data',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: '🌿',
    title: 'Circuit Vines',
    description: 'Growing networks of connectivity',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: '✨',
    title: 'Pixel Pollen',
    description: 'Tiny data particles in the air',
    color: 'from-yellow-400 to-orange-500'
  }
];

const testimonials = [
  {
    name: 'Digital Gardener',
    role: 'Data Cultivator',
    avatar: '🌸',
    text: 'Di taman digital ini, setiap bunga data mekar dengan informasi yang indah, menciptakan harmoni antara teknologi dan alam.',
    rating: 5
  },
  {
    name: 'Circuit Keeper',
    role: 'Network Guardian',
    avatar: '🌿',
    text: 'Vine sirkuit kami tumbuh dan berkembang, menghubungkan setiap sudut taman digital dengan jaringan yang hidup.',
    rating: 5
  },
  {
    name: 'Pixel Pollinator',
    role: 'Data Distributor',
    avatar: '🦋',
    text: 'Kupu-kupu digital kami membawa data dari satu bunga ke bunga lainnya, menyebarkan pengetahuan ke seluruh taman.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Data Flowers' },
  { value: '100%', label: 'Digital Growth' },
  { value: '24/7', label: 'Garden Awake' },
  { value: '🦋', label: 'Digital Butterflies' }
];

const services = [
  { icon: '🌸', title: 'Flower Tours', desc: 'Explore data blooms' },
  { icon: '🦋', title: 'Butterfly Watching', desc: 'Observe data flow' },
  { icon: '🌿', title: 'Vine Networks', desc: 'Connect circuits' },
  { icon: '✨', title: 'Pollen Collection', desc: 'Gather data particles' }
];

export default function HomePageTheme186() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [flowerBloom, setFlowerBloom] = useState(0);
  const [butterflyFlutter, setButterflyFlutter] = useState(0);
  const [vineGrow, setVineGrow] = useState(0);
  const [pixelFloat, setPixelFloat] = useState(0);
  const [circuitGlow, setCircuitGlow] = useState(0);

  useEffect(() => {
    const flowerInterval = setInterval(() => setFlowerBloom(prev => (prev + 1) % 100), 120);
    const butterflyInterval = setInterval(() => setButterflyFlutter(prev => (prev + 1) % 100), 150);
    const vineInterval = setInterval(() => setVineGrow(prev => (prev + 1) % 100), 180);
    const pixelInterval = setInterval(() => setPixelFloat(prev => (prev + 1) % 100), 200);
    const circuitInterval = setInterval(() => setCircuitGlow(prev => (prev + 1) % 100), 250);
    
    return () => {
      clearInterval(flowerInterval);
      clearInterval(butterflyInterval);
      clearInterval(vineInterval);
      clearInterval(pixelInterval);
      clearInterval(circuitInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 via-purple-100 to-pink-200 font-serif relative overflow-hidden">
      {/* Digital Garden Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-green-200/90 via-purple-100/80 to-pink-200/80">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="gardenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bbf7d0" />
                <stop offset="50%" stopColor="#f3e8ff" />
                <stop offset="100%" stopColor="#fce7f3" />
              </linearGradient>
              <radialGradient id="flowerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
              </radialGradient>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            {/* Garden background */}
            <rect x="0" y="0" width="1200" height="800" fill="url(#gardenGradient)" />
            
            {/* Digital flowers */}
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                {/* Flower center */}
                <circle
                  cx={150 + i * 90 + (flowerBloom + i * 8) % 60}
                  cy={200 + (i % 3) * 150 + (flowerBloom + i * 5) % 40}
                  r="8"
                  fill="#ec4899"
                  opacity="0.9"
                />
                {/* Flower petals */}
                {Array.from({ length: 6 }, (_, j) => (
                  <ellipse
                    key={j}
                    cx={150 + i * 90 + (flowerBloom + i * 8) % 60}
                    cy={200 + (i % 3) * 150 + (flowerBloom + i * 5) % 40}
                    rx={15 + (flowerBloom + i * 2) % 5}
                    ry={8 + (flowerBloom + i * 1) % 3}
                    fill="#fce7f3"
                    opacity="0.8"
                    transform={`rotate(${j * 60 + flowerBloom * 0.5})`}
                  />
                ))}
                {/* Circuit stem */}
                <path
                  d={`M${150 + i * 90 + (flowerBloom + i * 8) % 60},${200 + (i % 3) * 150 + (flowerBloom + i * 5) % 40} L${150 + i * 90 + (flowerBloom + i * 8) % 60},${600 + (i % 2) * 50}`}
                  stroke="url(#circuitGradient)"
                  strokeWidth="2"
                  opacity="0.7"
                />
              </g>
            ))}
            
            {/* Digital butterflies */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                {/* Butterfly body */}
                <ellipse
                  cx={300 + i * 120 + (butterflyFlutter + i * 12) % 80}
                  cy={150 + (i % 2) * 100 + (butterflyFlutter + i * 8) % 60}
                  rx="3"
                  ry="8"
                  fill="#06b6d4"
                  opacity="0.9"
                />
                {/* Butterfly wings */}
                <path
                  d={`M${300 + i * 120 + (butterflyFlutter + i * 12) % 80},${150 + (i % 2) * 100 + (butterflyFlutter + i * 8) % 60} Q${280 + i * 120 + (butterflyFlutter + i * 12) % 80},${130 + (i % 2) * 100 + (butterflyFlutter + i * 8) % 60} ${260 + i * 120 + (butterflyFlutter + i * 12) % 80},${150 + (i % 2) * 100 + (butterflyFlutter + i * 8) % 60}`}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d={`M${300 + i * 120 + (butterflyFlutter + i * 12) % 80},${150 + (i % 2) * 100 + (butterflyFlutter + i * 8) % 60} Q${320 + i * 120 + (butterflyFlutter + i * 12) % 80},${130 + (i % 2) * 100 + (butterflyFlutter + i * 8) % 60} ${340 + i * 120 + (butterflyFlutter + i * 12) % 80},${150 + (i % 2) * 100 + (butterflyFlutter + i * 8) % 60}`}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Circuit vines */}
            {Array.from({ length: 6 }, (_, i) => (
              <path
                key={i}
                d={`M${100 + i * 200},800 Q${150 + i * 200},${700 - (vineGrow + i * 15) % 200} ${200 + i * 200},${600 - (vineGrow + i * 10) % 150} Q${250 + i * 200},${500 - (vineGrow + i * 20) % 100} ${300 + i * 200},${400 - (vineGrow + i * 5) % 50}`}
                stroke="url(#circuitGradient)"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
                strokeDasharray="5,5"
              />
            ))}
            
            {/* Pixel pollen particles */}
            {Array.from({ length: 20 }, (_, i) => (
              <circle
                key={i}
                cx={50 + i * 60 + (pixelFloat + i * 7) % 100}
                cy={100 + (i % 3) * 200 + (pixelFloat + i * 5) % 150}
                r="2"
                fill="#fbbf24"
                opacity="0.7"
              />
            ))}
            
            {/* Glowing circuit nodes */}
            {Array.from({ length: 10 }, (_, i) => (
              <circle
                key={i}
                cx={200 + i * 100}
                cy={700 - (circuitGlow + i * 10) % 200}
                r="4"
                fill="url(#circuitGradient)"
                opacity="0.9"
                filter="drop-shadow(0 0 10px rgba(16, 185, 129, 0.6))"
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
              <div className="text-green-800">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Digital Garden
                </h1>
                <p className="text-green-600 mt-2">Taman teknologi yang hidup</p>
              </div>
              <div className="text-purple-500 text-right">
                <div className="text-2xl mb-2">🌸🦋🌿✨</div>
                <div className="text-sm text-purple-400">Growing Data</div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Garden
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-600 mb-12 max-w-4xl mx-auto">
              Jelajahi taman digital yang hidup, di mana teknologi dan alam bersatu dalam harmoni yang sempurna. Setiap bunga data, kupu-kupu digital, dan sirkuit yang tumbuh menciptakan ekosistem informasi yang indah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 hover:from-green-500 hover:via-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Mulai Berkebun
              </button>
              <button className="border-2 border-green-400 text-green-600 hover:bg-green-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Jelajahi Taman
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Fitur Taman Digital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-100/60 via-purple-100/60 to-pink-100/60 backdrop-blur-sm border border-green-200/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">{feature.title}</h3>
                  <p className="text-green-600">{feature.description}</p>
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
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-green-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-white/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Suara Taman Digital
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-green-100/60 via-purple-100/60 to-pink-100/60 backdrop-blur-sm border border-green-200/30 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-green-600 mb-4">{testimonials[currentTestimonial].role}</p>
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-green-700 text-center italic">"{testimonials[currentTestimonial].text}"</p>
                <div className="flex justify-center mt-8 gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-green-400' : 'bg-green-200'
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
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Layanan Taman
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-100/60 via-purple-100/60 to-pink-100/60 backdrop-blur-sm border border-green-200/30 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">{service.title}</h3>
                  <p className="text-green-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-400/20 via-purple-400/20 to-pink-400/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bergabunglah dengan Taman Digital
            </h2>
            <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
              Mulai perjalanan Anda di taman digital yang hidup, di mana setiap klik menumbuhkan pengetahuan baru.
            </p>
            <button className="bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 hover:from-green-500 hover:via-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Mulai Sekarang
            </button>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 bg-green-800/20">
          <div className="container mx-auto px-4 text-center">
            <div className="text-2xl mb-4">🌸🦋🌿✨</div>
            <p className="text-green-700">Digital Garden - Taman Teknologi yang Hidup</p>
          </div>
        </footer>
      </div>
    </div>
  );
} 