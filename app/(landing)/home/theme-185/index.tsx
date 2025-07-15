import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '📚',
    title: 'Floating Bookshelves',
    description: 'Shelves drifting among the clouds',
    color: 'from-blue-300 to-white'
  },
  {
    icon: '☁️',
    title: 'Cloud Reading',
    description: 'Read while floating on soft clouds',
    color: 'from-white to-blue-200'
  },
  {
    icon: '🕊️',
    title: 'Sky Messengers',
    description: 'Birds delivering knowledge',
    color: 'from-yellow-200 to-blue-100'
  },
  {
    icon: '🌞',
    title: 'Sunlit Wisdom',
    description: 'Golden rays inspire learning',
    color: 'from-yellow-300 to-white'
  }
];

const testimonials = [
  {
    name: 'Aurora Skye',
    role: 'Head Librarian',
    avatar: '📚',
    text: 'Di perpustakaan langit, setiap buku adalah petualangan baru yang terbang bersama angin dan awan.',
    rating: 5
  },
  {
    name: 'Nimbus Reader',
    role: 'Cloud Scholar',
    avatar: '☁️',
    text: 'Membaca di atas awan memberikan inspirasi tanpa batas, ditemani cahaya matahari dan burung-burung.',
    rating: 5
  },
  {
    name: 'Sol Lumina',
    role: 'Sunlight Mentor',
    avatar: '🌞',
    text: 'Setiap sinar mentari membawa pengetahuan baru ke rak-rak buku yang melayang di langit biru.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Books in the Sky' },
  { value: '100%', label: 'Cloud Comfort' },
  { value: '24/7', label: 'Sunshine Reading' },
  { value: '🕊️', label: 'Bird Couriers' }
];

const services = [
  { icon: '📚', title: 'Book Tours', desc: 'Explore floating shelves' },
  { icon: '☁️', title: 'Cloud Lounges', desc: 'Relax and read in the sky' },
  { icon: '🕊️', title: 'Knowledge Delivery', desc: 'Birds bring you books' },
  { icon: '🌞', title: 'Sunlit Study', desc: 'Learn under golden rays' }
];

export default function HomePageTheme185() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [cloudDrift, setCloudDrift] = useState(0);
  const [bookFloat, setBookFloat] = useState(0);
  const [birdFly, setBirdFly] = useState(0);
  const [sunGlow, setSunGlow] = useState(0);

  useEffect(() => {
    const cloudInterval = setInterval(() => setCloudDrift(prev => (prev + 1) % 100), 120);
    const bookInterval = setInterval(() => setBookFloat(prev => (prev + 1) % 100), 150);
    const birdInterval = setInterval(() => setBirdFly(prev => (prev + 1) % 100), 180);
    const sunInterval = setInterval(() => setSunGlow(prev => (prev + 1) % 100), 200);
    return () => {
      clearInterval(cloudInterval);
      clearInterval(bookInterval);
      clearInterval(birdInterval);
      clearInterval(sunInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-white to-yellow-100 font-serif relative overflow-hidden">
      {/* Sky Library Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-200/90 via-white/80 to-yellow-100/80">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="50%" stopColor="#f0f9ff" />
                <stop offset="100%" stopColor="#fef9c3" />
              </linearGradient>
              <radialGradient id="sunGlow" cx="80%" cy="10%" r="30%">
                <stop offset="0%" stopColor="#fde68a" stopOpacity="0.8" />
                <stop offset="1" stopColor="#fef9c3" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            {/* Sky background */}
            <rect x="0" y="0" width="1200" height="800" fill="url(#skyGradient)" />
            {/* Sun */}
            <circle cx="1000" cy="100" r="70" fill="url(#sunGlow)" />
            {/* Clouds */}
            {Array.from({ length: 7 }, (_, i) => (
              <ellipse
                key={i}
                cx={150 + i * 150 + (cloudDrift + i * 10) % 60}
                cy={120 + (i % 2) * 60}
                rx={80 + (i % 3) * 10}
                ry={30 + (i % 2) * 10}
                fill="#fff"
                opacity={0.7 - i * 0.07}
              />
            ))}
            {/* Floating books */}
            {Array.from({ length: 8 }, (_, i) => (
              <rect
                key={i}
                x={200 + i * 110 + (bookFloat + i * 7) % 40}
                y={300 + (i % 2) * 40}
                width="40"
                height="24"
                rx="5"
                fill="#fef9c3"
                stroke="#fbbf24"
                strokeWidth="2"
                opacity="0.85"
              />
            ))}
            {/* Birds */}
            {Array.from({ length: 5 }, (_, i) => (
              <path
                key={i}
                d={`M${300 + i * 180 + (birdFly + i * 13) % 60},${180 + (i % 2) * 30} q10,-10 20,0 q10,10 20,0`}
                stroke="#60a5fa"
                strokeWidth="3"
                fill="none"
                opacity="0.7"
              />
            ))}
            {/* Floating bookshelves */}
            {Array.from({ length: 3 }, (_, i) => (
              <rect
                key={i}
                x={400 + i * 180}
                y={500 + (i % 2) * 30}
                width="120"
                height="18"
                rx="6"
                fill="#fbbf24"
                opacity="0.7"
              />
            ))}
            {/* Spiral staircase */}
            <path
              d="M600,700 Q650,600 700,700 Q750,800 800,700"
              stroke="#a3e635"
              strokeWidth="6"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="relative py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="text-blue-900">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                  Sky Library
                </h1>
                <p className="text-blue-400 mt-2">Perpustakaan di atas awan</p>
              </div>
              <div className="text-yellow-500 text-right">
                <div className="text-2xl mb-2">📚☁️🕊️</div>
                <div className="text-sm text-yellow-400">Cloud Knowledge</div>
              </div>
            </div>
          </div>
        </header>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-white to-yellow-400 bg-clip-text text-transparent">
                Sky
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-blue-400 to-white bg-clip-text text-transparent">
                Library
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 mb-12 max-w-4xl mx-auto">
              Jelajahi dunia pengetahuan tanpa batas di perpustakaan terapung, di mana buku-buku dan ide-ide terbang tinggi di langit biru.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-400 to-yellow-400 hover:from-blue-500 hover:to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Mulai Membaca
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Jelajahi Koleksi
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 bg-white/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Fitur Langit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-100/60 to-yellow-100/60 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{feature.title}</h3>
                  <p className="text-blue-400">{feature.description}</p>
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
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 bg-white/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Cerita Pembaca
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-100/60 to-yellow-100/60 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                  <p className="text-xl text-blue-400 italic mb-4">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="text-blue-900 font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-yellow-500">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Layanan Langit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-100/60 to-yellow-100/60 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-blue-400 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-100/60 to-yellow-100/60">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Terbang Bersama Pengetahuan
            </h2>
            <p className="text-xl text-blue-400 mb-8 max-w-2xl mx-auto">
              Temukan dunia baru di perpustakaan langit, di mana setiap buku adalah petualangan di atas awan.
            </p>
            <button className="bg-gradient-to-r from-blue-400 to-yellow-400 hover:from-blue-500 hover:to-yellow-500 text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Mulai Petualangan
            </button>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-12 border-t border-blue-200/30">
          <div className="container mx-auto px-4 text-center">
            <div className="text-3xl mb-4">📚☁️🕊️</div>
            <p className="text-blue-400">
              Sky Library - Pengetahuan tanpa batas di atas awan
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
} 