import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🪐',
    title: 'Planet Asing',
    description: 'Pemandangan planet baru yang menakjubkan',
    color: 'from-blue-900 to-purple-900'
  },
  {
    icon: '🏠',
    title: 'Kubah Koloni',
    description: 'Kubah pelindung untuk kehidupan manusia',
    color: 'from-purple-700 to-blue-700'
  },
  {
    icon: '🌱',
    title: 'Taman Hidroponik',
    description: 'Pertanian modern di luar angkasa',
    color: 'from-green-400 to-cyan-400'
  },
  {
    icon: '🚀',
    title: 'Pesawat Luar Angkasa',
    description: 'Transportasi antar planet',
    color: 'from-cyan-400 to-purple-400'
  }
];

const testimonials = [
  {
    name: 'Astronot Maya',
    role: 'Penjelajah Koloni',
    avatar: '🪐',
    text: 'Hidup di koloni luar angkasa adalah pengalaman luar biasa. Kubah pelindung dan taman hidroponik membuat segalanya terasa seperti rumah.',
    rating: 5
  },
  {
    name: 'Insinyur Bima',
    role: 'Teknisi Kubah',
    avatar: '🏠',
    text: 'Teknologi kubah pelindung sangat canggih, menjaga kami tetap aman dari lingkungan planet yang keras.',
    rating: 5
  },
  {
    name: 'Ilmuwan Sari',
    role: 'Ahli Hidroponik',
    avatar: '🌱',
    text: 'Taman hidroponik menyediakan makanan segar setiap hari, bahkan di luar angkasa.',
    rating: 5
  }
];

const stats = [
  { value: '3', label: 'Planet Dijelajahi' },
  { value: '12', label: 'Kubah Koloni' },
  { value: '100%', label: 'Oksigen Bersih' },
  { value: '∞', label: 'Bintang di Langit' }
];

const services = [
  { icon: '🚀', title: 'Transportasi', desc: 'Pesawat antar planet' },
  { icon: '🌱', title: 'Hidroponik', desc: 'Pertanian modern' },
  { icon: '🏠', title: 'Hunian Kubah', desc: 'Tempat tinggal aman' },
  { icon: '🔭', title: 'Observatorium', desc: 'Pengamatan bintang & planet' }
];

export default function HomePageTheme191() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [starTwinkle, setStarTwinkle] = useState(0);
  const [domeGlow, setDomeGlow] = useState(0);
  const [shipMove, setShipMove] = useState(0);
  const [plantGrow, setPlantGrow] = useState(0);

  useEffect(() => {
    const starInterval = setInterval(() => setStarTwinkle(prev => (prev + 1) % 100), 100);
    const domeInterval = setInterval(() => setDomeGlow(prev => (prev + 1) % 100), 150);
    const shipInterval = setInterval(() => setShipMove(prev => (prev + 1) % 100), 180);
    const plantInterval = setInterval(() => setPlantGrow(prev => (prev + 1) % 100), 200);
    return () => {
      clearInterval(starInterval);
      clearInterval(domeInterval);
      clearInterval(shipInterval);
      clearInterval(plantInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-black font-mono relative overflow-hidden">
      {/* Space Colony Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-950/90 via-purple-900/80 to-black/90">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.1" />
              </radialGradient>
              <linearGradient id="planetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
              <linearGradient id="domeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a5b4fc" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
              <linearGradient id="plantGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            {/* Alien planet surface */}
            <ellipse
              cx="600"
              cy="780"
              rx="600"
              ry="120"
              fill="url(#planetGradient)"
              opacity="0.7"
            />
            {/* Stars */}
            {Array.from({ length: 60 }, (_, i) => (
              <circle
                key={i}
                cx={Math.random() * 1200}
                cy={Math.random() * 800}
                r={i % 7 === 0 ? 2.5 : 1.2}
                fill="url(#starGlow)"
                opacity={0.5 + 0.5 * Math.abs(Math.sin((starTwinkle + i * 7) * 0.1))}
              />
            ))}
            {/* Colony domes */}
            {Array.from({ length: 4 }, (_, i) => (
              <ellipse
                key={i}
                cx={350 + i * 180}
                cy={700 - i * 20}
                rx={70 + i * 10}
                ry={40 + i * 5}
                fill="url(#domeGradient)"
                opacity={0.5 + 0.2 * Math.abs(Math.sin((domeGlow + i * 10) * 0.1))}
                stroke="#38bdf8"
                strokeWidth="3"
              />
            ))}
            {/* Hydroponic gardens */}
            {Array.from({ length: 5 }, (_, i) => (
              <rect
                key={i}
                x={400 + i * 90}
                y={730 - i * 10}
                width="40"
                height={30 + (plantGrow + i * 5) % 10}
                fill="url(#plantGradient)"
                rx="8"
                opacity="0.7"
              />
            ))}
            {/* Spaceships */}
            {Array.from({ length: 3 }, (_, i) => (
              <g key={i}>
                <ellipse
                  cx={200 + i * 350 + (shipMove + i * 20) % 100}
                  cy={200 + (i % 2) * 80}
                  rx="30"
                  ry="10"
                  fill="#38bdf8"
                  opacity="0.8"
                  stroke="#a5b4fc"
                  strokeWidth="2"
                />
                <rect
                  x={185 + i * 350 + (shipMove + i * 20) % 100}
                  y={190 + (i % 2) * 80}
                  width="30"
                  height="8"
                  fill="#a5b4fc"
                  rx="4"
                  opacity="0.7"
                />
                {/* Engine glow */}
                <ellipse
                  cx={170 + i * 350 + (shipMove + i * 20) % 100}
                  cy={200 + (i % 2) * 80}
                  rx="8"
                  ry="4"
                  fill="#f472b6"
                  opacity="0.6"
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
              <div className="text-cyan-300">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Space Colony
                </h1>
                <p className="text-cyan-400 mt-2">Koloni masa depan di planet baru</p>
              </div>
              <div className="text-purple-400 text-right">
                <div className="text-2xl mb-2">🪐🏠🌱🚀</div>
                <div className="text-sm text-purple-300">Futuristik & Sci-Fi</div>
              </div>
            </div>
          </div>
        </header>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Space
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Colony
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 mb-12 max-w-4xl mx-auto">
              Jelajahi kehidupan baru di koloni luar angkasa, dengan teknologi kubah pelindung, taman hidroponik, dan pesawat luar angkasa canggih di planet asing yang menakjubkan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Mulai Eksplorasi
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Jelajahi Koloni
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 bg-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Fitur Koloni
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-4">{feature.title}</h3>
                  <p className="text-cyan-200">{feature.description}</p>
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
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-cyan-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 bg-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Suara Koloni
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                  <h3 className="text-2xl font-bold text-cyan-300 mb-2">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-cyan-200 mb-4">{testimonials[currentTestimonial].role}</p>
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-cyan-200 text-center italic">"{testimonials[currentTestimonial].text}"</p>
                <div className="flex justify-center mt-8 gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-blue-400' : 'bg-blue-200'
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
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Layanan Koloni
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-cyan-300 mb-2">{service.title}</h3>
                  <p className="text-cyan-200 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bergabunglah dengan Space Colony
            </h2>
            <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto">
              Mulai perjalanan Anda menuju masa depan di koloni luar angkasa, planet baru, dan teknologi canggih.
            </p>
            <button className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Mulai Sekarang
            </button>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-8 bg-blue-950/20">
          <div className="container mx-auto px-4 text-center">
            <div className="text-2xl mb-4">🪐🏠🌱🚀</div>
            <p className="text-cyan-200">Space Colony - Koloni Masa Depan di Planet Baru</p>
          </div>
        </footer>
      </div>
    </div>
  );
} 