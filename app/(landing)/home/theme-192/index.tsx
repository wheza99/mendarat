import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '☕',
    title: 'Kopi Spesial',
    description: 'Racikan kopi terbaik dari biji pilihan',
    color: 'from-amber-700 to-yellow-200'
  },
  {
    icon: '👨‍🍳',
    title: 'Barista Ahli',
    description: 'Barista profesional dengan seni latte art',
    color: 'from-yellow-200 to-green-200'
  },
  {
    icon: '🌱',
    title: 'Tanaman Hias',
    description: 'Suasana segar dengan tanaman indoor',
    color: 'from-green-300 to-amber-100'
  },
  {
    icon: '🪵',
    title: 'Meja Kayu',
    description: 'Meja kayu alami untuk kenyamanan maksimal',
    color: 'from-amber-400 to-amber-200'
  }
];

const testimonials = [
  {
    name: 'Dewi Kopi',
    role: 'Pecinta Latte',
    avatar: '☕',
    text: 'Coffee house ini punya suasana yang sangat cozy, kopi dan latte art-nya luar biasa! Tempat favorit untuk bekerja dan bersantai.',
    rating: 5
  },
  {
    name: 'Raka Barista',
    role: 'Barista Senior',
    avatar: '👨‍🍳',
    text: 'Kami selalu menggunakan biji kopi terbaik dan teknik manual brew untuk hasil rasa yang sempurna.',
    rating: 5
  },
  {
    name: 'Sari Hijau',
    role: 'Pecinta Tanaman',
    avatar: '🌱',
    text: 'Tanaman hias di setiap sudut membuat suasana coffee house ini sangat segar dan menenangkan.',
    rating: 5
  }
];

const stats = [
  { value: '20+', label: 'Varian Kopi' },
  { value: '100%', label: 'Biji Kopi Arabika' },
  { value: '24/7', label: 'WiFi & Colokan' },
  { value: '☕', label: 'Latte Art' }
];

const services = [
  { icon: '☕', title: 'Manual Brew', desc: 'Kopi seduh manual' },
  { icon: '👨‍🍳', title: 'Latte Art', desc: 'Seni di atas kopi' },
  { icon: '🪴', title: 'Tanaman Hias', desc: 'Dekorasi alami' },
  { icon: '🍰', title: 'Pastry', desc: 'Kue artisan pendamping kopi' }
];

export default function HomePageTheme192() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [steamRise, setSteamRise] = useState(0);
  const [lightGlow, setLightGlow] = useState(0);
  const [plantSway, setPlantSway] = useState(0);
  const [beanBounce, setBeanBounce] = useState(0);

  useEffect(() => {
    const steamInterval = setInterval(() => setSteamRise(prev => (prev + 1) % 100), 120);
    const lightInterval = setInterval(() => setLightGlow(prev => (prev + 1) % 100), 180);
    const plantInterval = setInterval(() => setPlantSway(prev => (prev + 1) % 100), 200);
    const beanInterval = setInterval(() => setBeanBounce(prev => (prev + 1) % 100), 150);
    return () => {
      clearInterval(steamInterval);
      clearInterval(lightInterval);
      clearInterval(plantInterval);
      clearInterval(beanInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-amber-200 to-green-100 font-serif relative overflow-hidden">
      {/* Coffee House Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-amber-100/90 via-amber-200/80 to-green-100/80">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <radialGradient id="steamGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.1" />
              </radialGradient>
              <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="plantGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bbf7d0" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
              <radialGradient id="lightGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fde68a" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#fef9c3" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            {/* Wooden tables */}
            {Array.from({ length: 3 }, (_, i) => (
              <rect
                key={i}
                x={200 + i * 300}
                y={700}
                width="200"
                height="30"
                fill="#b45309"
                rx="15"
                opacity="0.7"
              />
            ))}
            {/* Coffee cups */}
            {Array.from({ length: 3 }, (_, i) => (
              <g key={i}>
                <ellipse
                  cx={300 + i * 300}
                  cy={700}
                  rx="40"
                  ry="18"
                  fill="#fff7ed"
                  opacity="0.9"
                />
                <ellipse
                  cx={300 + i * 300}
                  cy={700}
                  rx="30"
                  ry="10"
                  fill="#f59e0b"
                  opacity="0.7"
                />
                {/* Coffee steam */}
                {Array.from({ length: 3 }, (_, j) => (
                  <path
                    key={j}
                    d={`M${300 + i * 300 + j * 8},${690 - (steamRise + i * 10 + j * 5) % 30} Q${295 + i * 300 + j * 8},${670 - (steamRise + i * 10 + j * 5) % 30} ${300 + i * 300 + j * 8},${650 - (steamRise + i * 10 + j * 5) % 30}`}
                    stroke="url(#steamGradient)"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.5"
                  />
                ))}
              </g>
            ))}
            {/* Coffee beans */}
            {Array.from({ length: 8 }, (_, i) => (
              <ellipse
                key={i}
                cx={150 + i * 120}
                cy={750 - (beanBounce + i * 10) % 30}
                rx="12"
                ry="7"
                fill="#a16207"
                opacity="0.8"
              />
            ))}
            {/* Indoor plants */}
            {Array.from({ length: 5 }, (_, i) => (
              <rect
                key={i}
                x={100 + i * 200}
                y={650 - (plantSway + i * 10) % 20}
                width="18"
                height="60"
                fill="url(#plantGradient)"
                rx="9"
                opacity="0.7"
              />
            ))}
            {/* Hanging lights */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                <rect
                  x={250 + i * 200}
                  y={500}
                  width="12"
                  height="60"
                  fill="#fde68a"
                  rx="6"
                  opacity="0.5"
                />
                <ellipse
                  cx={256 + i * 200}
                  cy={560}
                  rx="30"
                  ry="12"
                  fill="url(#lightGlow)"
                  opacity={0.5 + 0.2 * Math.abs(Math.sin((lightGlow + i * 10) * 0.1))}
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
              <div className="text-amber-900">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-green-400 bg-clip-text text-transparent">
                  Artisan Coffee House
                </h1>
                <p className="text-amber-700 mt-2">Coffee shop hangat & elegan</p>
              </div>
              <div className="text-green-600 text-right">
                <div className="text-2xl mb-2">☕👨‍🍳🌱🪵</div>
                <div className="text-sm text-green-500">Suasana Cozy</div>
              </div>
            </div>
          </div>
        </header>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-amber-700 via-green-400 to-yellow-400 bg-clip-text text-transparent">
                Artisan
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-amber-700 to-yellow-400 bg-clip-text text-transparent">
                Coffee House
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-700 mb-12 max-w-4xl mx-auto">
              Nikmati kopi spesial, suasana hangat, dan seni latte art di coffee house artisan terbaik di kota Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-700 to-green-400 hover:from-amber-800 hover:to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Pesan Kopi
              </button>
              <button className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Lihat Menu
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 bg-white/40">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-700 to-green-400 bg-clip-text text-transparent">
              Fitur Coffee House
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-100/60 to-green-100/60 backdrop-blur-sm border border-amber-200/30 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-4">{feature.title}</h3>
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
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-700 to-green-400 bg-clip-text text-transparent mb-2">
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
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-700 to-green-400 bg-clip-text text-transparent">
              Suara Coffee House
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-amber-100/60 to-green-100/60 backdrop-blur-sm border border-amber-200/30 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-amber-700 mb-4">{testimonials[currentTestimonial].role}</p>
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
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
                        index === currentTestimonial ? 'bg-amber-700' : 'bg-amber-200'
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
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-700 to-green-400 bg-clip-text text-transparent">
              Layanan Coffee House
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-100/60 to-green-100/60 backdrop-blur-sm border border-amber-200/30 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-amber-900 mb-2">{service.title}</h3>
                  <p className="text-amber-700 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-700/20 to-green-400/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-amber-700 to-green-400 bg-clip-text text-transparent">
              Bergabunglah dengan Artisan Coffee House
            </h2>
            <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
              Mulai hari Anda dengan kopi spesial dan suasana hangat di coffee house artisan terbaik.
            </p>
            <button className="bg-gradient-to-r from-amber-700 to-green-400 hover:from-amber-800 hover:to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Mulai Sekarang
            </button>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-8 bg-amber-900/10">
          <div className="container mx-auto px-4 text-center">
            <div className="text-2xl mb-4">☕👨‍🍳🌱🪵</div>
            <p className="text-amber-700">Artisan Coffee House - Coffee Shop Hangat & Elegan</p>
          </div>
        </footer>
      </div>
    </div>
  );
} 