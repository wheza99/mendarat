import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '⛰️',
    title: 'Gunung Tenang',
    description: 'Pemandangan pegunungan yang damai',
    color: 'from-blue-300 to-gray-200'
  },
  {
    icon: '💧',
    title: 'Danau Jernih',
    description: 'Air danau yang tenang dan memantulkan langit',
    color: 'from-cyan-200 to-blue-200'
  },
  {
    icon: '🪨',
    title: 'Batu Zen',
    description: 'Tumpukan batu untuk keseimbangan dan meditasi',
    color: 'from-gray-300 to-green-200'
  },
  {
    icon: '🎋',
    title: 'Bambu & Lentera',
    description: 'Bambu hijau dan lentera tradisional',
    color: 'from-green-300 to-yellow-100'
  }
];

const testimonials = [
  {
    name: 'Rina Meditasi',
    role: 'Pencari Kedamaian',
    avatar: '🪨',
    text: 'Retret pegunungan ini membawa ketenangan luar biasa. Kabut pagi dan suara air membuat meditasi semakin dalam.',
    rating: 5
  },
  {
    name: 'Budi Alam',
    role: 'Pecinta Alam',
    avatar: '⛰️',
    text: 'Pemandangan gunung dan danau yang jernih sangat menenangkan. Tempat terbaik untuk melepas penat.',
    rating: 5
  },
  {
    name: 'Sari Zen',
    role: 'Instruktur Yoga',
    avatar: '🎋',
    text: 'Lingkungan yang minimalis dan alami sangat cocok untuk yoga dan refleksi diri.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Kedamaian' },
  { value: '100%', label: 'Udara Segar' },
  { value: '24/7', label: 'Suasana Tenang' },
  { value: '⛰️', label: 'Pemandangan Gunung' }
];

const services = [
  { icon: '🧘‍♂️', title: 'Meditasi', desc: 'Sesi meditasi di alam terbuka' },
  { icon: '🪨', title: 'Zen Stones', desc: 'Terapi batu keseimbangan' },
  { icon: '🎋', title: 'Bamboo Walk', desc: 'Jalur jalan kaki di antara bambu' },
  { icon: '🏮', title: 'Lentera Malam', desc: 'Penerangan alami di malam hari' }
];

export default function HomePageTheme190() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mistMove, setMistMove] = useState(0);
  const [waterRipple, setWaterRipple] = useState(0);
  const [bambooSway, setBambooSway] = useState(0);
  const [lanternGlow, setLanternGlow] = useState(0);

  useEffect(() => {
    const mistInterval = setInterval(() => setMistMove(prev => (prev + 1) % 100), 120);
    const waterInterval = setInterval(() => setWaterRipple(prev => (prev + 1) % 100), 180);
    const bambooInterval = setInterval(() => setBambooSway(prev => (prev + 1) % 100), 200);
    const lanternInterval = setInterval(() => setLanternGlow(prev => (prev + 1) % 100), 250);
    return () => {
      clearInterval(mistInterval);
      clearInterval(waterInterval);
      clearInterval(bambooInterval);
      clearInterval(lanternInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-green-100 to-gray-100 font-serif relative overflow-hidden">
      {/* Zen Mountain Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-100/90 via-green-100/80 to-gray-100/80">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dbeafe" />
                <stop offset="50%" stopColor="#bbf7d0" />
                <stop offset="100%" stopColor="#f1f5f9" />
              </linearGradient>
              <radialGradient id="mistGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e0e7ef" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0.1" />
              </radialGradient>
              <linearGradient id="lakeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="#f1f5f9" />
              </linearGradient>
              <linearGradient id="bambooGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bbf7d0" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
              <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fde68a" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#fef9c3" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            {/* Mountains */}
            {Array.from({ length: 4 }, (_, i) => (
              <polygon
                key={i}
                points={`${200 + i * 200},700 ${400 + i * 200},400 ${600 + i * 200},700`}
                fill="#a7f3d0"
                opacity={0.3 + i * 0.15}
              />
            ))}
            {/* Mist */}
            {Array.from({ length: 6 }, (_, i) => (
              <ellipse
                key={i}
                cx={300 + i * 150 + (mistMove + i * 10) % 60}
                cy={500 + (i % 2) * 40}
                rx={120 + (i % 3) * 20}
                ry={30 + (i % 2) * 10}
                fill="url(#mistGradient)"
                opacity={0.3 + i * 0.07}
              />
            ))}
            {/* Lake */}
            <ellipse
              cx="600"
              cy="750"
              rx="500"
              ry="80"
              fill="url(#lakeGradient)"
              opacity="0.7"
            />
            {/* Water ripples */}
            {Array.from({ length: 5 }, (_, i) => (
              <ellipse
                key={i}
                cx={600 + (waterRipple + i * 10) % 40}
                cy={750}
                rx={200 + i * 30}
                ry={15 + i * 3}
                fill="#fff"
                opacity={0.08 + i * 0.03}
              />
            ))}
            {/* Zen stones */}
            {Array.from({ length: 3 }, (_, i) => (
              <ellipse
                key={i}
                cx={400 + i * 80}
                cy={730 - i * 10}
                rx={30 + i * 10}
                ry={12 + i * 4}
                fill="#e5e7eb"
                opacity="0.8"
              />
            ))}
            {/* Bamboo */}
            {Array.from({ length: 5 }, (_, i) => (
              <rect
                key={i}
                x={150 + i * 180}
                y={600 - (bambooSway + i * 10) % 30}
                width="10"
                height="120"
                fill="url(#bambooGradient)"
                rx="5"
                opacity="0.7"
              />
            ))}
            {/* Lanterns */}
            {Array.from({ length: 3 }, (_, i) => (
              <g key={i}>
                <ellipse
                  cx={250 + i * 300}
                  cy={650 - (lanternGlow + i * 10) % 30}
                  rx="18"
                  ry="24"
                  fill="#fde68a"
                  opacity="0.8"
                  filter="url(#lanternGlow)"
                />
                <rect
                  x={245 + i * 300}
                  y={670 - (lanternGlow + i * 10) % 30}
                  width="10"
                  height="20"
                  fill="#fbbf24"
                  rx="3"
                  opacity="0.7"
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
              <div className="text-blue-900">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Zen Mountain Retreat
                </h1>
                <p className="text-blue-400 mt-2">Retret pegunungan yang damai</p>
              </div>
              <div className="text-green-500 text-right">
                <div className="text-2xl mb-2">⛰️💧🪨🎋</div>
                <div className="text-sm text-green-400">Kedamaian Alam</div>
              </div>
            </div>
          </div>
        </header>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-green-400 to-gray-400 bg-clip-text text-transparent">
                Zen
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-gray-400 bg-clip-text text-transparent">
                Mountain Retreat
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 mb-12 max-w-4xl mx-auto">
              Temukan ketenangan dan keseimbangan di tengah pegunungan, danau jernih, serta suasana zen yang minimalis dan alami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Mulai Relaksasi
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Jelajahi Alam
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 bg-white/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Fitur Retret
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-100/60 to-green-100/60 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
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
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
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
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Suara Retret
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-100/60 to-green-100/60 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-blue-400 mb-4">{testimonials[currentTestimonial].role}</p>
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-blue-700 text-center italic">"{testimonials[currentTestimonial].text}"</p>
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
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Layanan Retret
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-100/60 to-green-100/60 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
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
        <section className="py-20 bg-gradient-to-r from-blue-400/20 to-green-400/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Bergabunglah dengan Zen Mountain Retreat
            </h2>
            <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
              Mulai perjalanan Anda menuju ketenangan dan keseimbangan di alam pegunungan yang damai.
            </p>
            <button className="bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Mulai Sekarang
            </button>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-8 bg-blue-900/10">
          <div className="container mx-auto px-4 text-center">
            <div className="text-2xl mb-4">⛰️💧🪨🎋</div>
            <p className="text-blue-700">Zen Mountain Retreat - Retret Pegunungan Damai</p>
          </div>
        </footer>
      </div>
    </div>
  );
} 