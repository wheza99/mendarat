import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌌',
    title: 'Aurora Borealis',
    description: 'Dancing northern lights',
    color: 'from-green-400 to-teal-500'
  },
  {
    icon: '❄️',
    title: 'Ice Crystals',
    description: 'Frozen natural beauty',
    color: 'from-blue-300 to-cyan-400'
  },
  {
    icon: '🐻‍❄️',
    title: 'Arctic Wildlife',
    description: 'Polar bear kingdom',
    color: 'from-white to-gray-200'
  },
  {
    icon: '🏔️',
    title: 'Snow Peaks',
    description: 'Majestic ice mountains',
    color: 'from-slate-300 to-gray-400'
  }
];

const testimonials = [
  {
    name: 'Aurora Guardian',
    role: 'Northern Lights Keeper',
    avatar: '🌌',
    text: 'The aurora borealis dances across the arctic sky, painting the night with nature\'s most spectacular light show.',
    rating: 5
  },
  {
    name: 'Ice Master',
    role: 'Crystal Formation Expert',
    avatar: '❄️',
    text: 'Each ice crystal is a unique masterpiece, formed by the perfect conditions of the arctic environment.',
    rating: 5
  },
  {
    name: 'Polar Bear King',
    role: 'Arctic Wildlife Guardian',
    avatar: '🐻‍❄️',
    text: 'The arctic wilderness is home to magnificent creatures that have adapted to thrive in the harshest conditions.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Aurora Shows' },
  { value: '-40°', label: 'Arctic Cold' },
  { value: '24/7', label: 'Polar Day' },
  { value: '🌌', label: 'Northern Lights' }
];

const services = [
  { icon: '🌌', title: 'Aurora Tours', desc: 'Northern lights viewing' },
  { icon: '❄️', title: 'Ice Expeditions', desc: 'Glacier adventures' },
  { icon: '🐻‍❄️', title: 'Wildlife Safaris', desc: 'Arctic animal watching' },
  { icon: '🏔️', title: 'Mountain Climbing', desc: 'Ice peak expeditions' }
];

export default function HomePageTheme173() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [auroraFlow, setAuroraFlow] = useState(0);
  const [snowFall, setSnowFall] = useState(0);
  const [iceCrystal, setIceCrystal] = useState(0);
  const [polarMovement, setPolarMovement] = useState(0);
  const [auroraGlow, setAuroraGlow] = useState(0);

  useEffect(() => {
    // Aurora flow animation
    const auroraInterval = setInterval(() => {
      setAuroraFlow(prev => (prev + 1) % 100);
    }, 100);

    // Snow fall animation
    const snowInterval = setInterval(() => {
      setSnowFall(prev => (prev + 1) % 100);
    }, 150);

    // Ice crystal animation
    const crystalInterval = setInterval(() => {
      setIceCrystal(prev => (prev + 1) % 100);
    }, 200);

    // Polar movement animation
    const polarInterval = setInterval(() => {
      setPolarMovement(prev => (prev + 1) % 100);
    }, 300);

    // Aurora glow effect
    const glowInterval = setInterval(() => {
      setAuroraGlow(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(auroraInterval);
      clearInterval(snowInterval);
      clearInterval(crystalInterval);
      clearInterval(polarInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-cyan-900 font-mono relative overflow-hidden">
      {/* Northern Lights Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900/90 via-blue-900/70 to-cyan-900/80">
        {/* Arctic landscape with aurora */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Aurora gradients */}
            <defs>
              <linearGradient id="auroraGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#14D8AA" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
              <linearGradient id="auroraGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="auroraGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="snowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#F1F5F9" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
              <linearGradient id="iceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="50%" stopColor="#BAE6FD" />
                <stop offset="100%" stopColor="#7DD3FC" />
              </linearGradient>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#CBD5E1" />
                <stop offset="50%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#64748B" />
              </linearGradient>
              <radialGradient id="auroraGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#14D8AA" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Aurora borealis waves */}
            {Array.from({ length: 5 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M0 ${200 + i * 80 + Math.sin(auroraFlow * 0.02 + i) * 30} Q${300 + Math.sin(auroraFlow * 0.01 + i) * 50} ${180 + i * 80 + Math.sin(auroraFlow * 0.03 + i) * 40} ${600 + Math.sin(auroraFlow * 0.015 + i) * 60} ${220 + i * 80 + Math.sin(auroraFlow * 0.025 + i) * 35} T1200 ${200 + i * 80 + Math.sin(auroraFlow * 0.02 + i) * 30}`}
                  fill="none"
                  stroke={`url(#auroraGradient${(i % 3) + 1})`}
                  strokeWidth="8"
                  opacity={0.7 + Math.sin(auroraGlow * 0.02 + i) * 0.3}
                />
                <path
                  d={`M0 ${210 + i * 80 + Math.sin(auroraFlow * 0.02 + i) * 30} Q${300 + Math.sin(auroraFlow * 0.01 + i) * 50} ${190 + i * 80 + Math.sin(auroraFlow * 0.03 + i) * 40} ${600 + Math.sin(auroraFlow * 0.015 + i) * 60} ${230 + i * 80 + Math.sin(auroraFlow * 0.025 + i) * 35} T1200 ${210 + i * 80 + Math.sin(auroraFlow * 0.02 + i) * 30}`}
                  fill="none"
                  stroke={`url(#auroraGradient${(i % 3) + 1})`}
                  strokeWidth="4"
                  opacity={0.5 + Math.sin(auroraGlow * 0.03 + i) * 0.2}
                />
              </g>
            ))}
            
            {/* Snow-covered mountains */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${i * 200} 800 L${i * 200 + 50} ${600 + Math.sin(snowFall * 0.01 + i) * 20} L${i * 200 + 100} ${500 + Math.sin(snowFall * 0.02 + i) * 30} L${i * 200 + 150} ${400 + Math.sin(snowFall * 0.015 + i) * 25} L${i * 200 + 200} 800 Z`}
                  fill="url(#mountainGradient)"
                  opacity="0.9"
                  stroke="url(#snowGradient)"
                  strokeWidth="2"
                />
                {/* Mountain peaks with snow */}
                <path
                  d={`M${i * 200 + 100} ${500 + Math.sin(snowFall * 0.02 + i) * 30} L${i * 200 + 120} ${450 + Math.sin(snowFall * 0.025 + i) * 15} L${i * 200 + 140} ${500 + Math.sin(snowFall * 0.02 + i) * 30}`}
                  fill="url(#snowGradient)"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Ice crystals */}
            {Array.from({ length: 20 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${100 + i * 60 + Math.sin(iceCrystal * 0.01 + i) * 20} ${100 + Math.cos(iceCrystal * 0.015 + i) * 30} L${110 + i * 60 + Math.sin(iceCrystal * 0.01 + i) * 20} ${90 + Math.cos(iceCrystal * 0.015 + i) * 30} L${120 + i * 60 + Math.sin(iceCrystal * 0.01 + i) * 20} ${100 + Math.cos(iceCrystal * 0.015 + i) * 30} L${110 + i * 60 + Math.sin(iceCrystal * 0.01 + i) * 20} ${110 + Math.cos(iceCrystal * 0.015 + i) * 30} Z`}
                  fill="url(#iceGradient)"
                  opacity="0.8"
                  stroke="url(#snowGradient)"
                  strokeWidth="1"
                />
                <path
                  d={`M${105 + i * 60 + Math.sin(iceCrystal * 0.01 + i) * 20} ${95 + Math.cos(iceCrystal * 0.015 + i) * 30} L${115 + i * 60 + Math.sin(iceCrystal * 0.01 + i) * 20} ${105 + Math.cos(iceCrystal * 0.015 + i) * 30}`}
                  stroke="url(#snowGradient)"
                  strokeWidth="1"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Polar bears */}
            {Array.from({ length: 3 }, (_, i) => (
              <g key={i}>
                {/* Bear body */}
                <ellipse
                  cx={300 + i * 300 + Math.sin(polarMovement * 0.01 + i) * 30}
                  cy="650"
                  rx="40"
                  ry="25"
                  fill="url(#snowGradient)"
                  opacity="0.9"
                  stroke="url(#snowGradient)"
                  strokeWidth="2"
                />
                {/* Bear head */}
                <circle
                  cx={280 + i * 300 + Math.sin(polarMovement * 0.01 + i) * 30}
                  cy="630"
                  r="20"
                  fill="url(#snowGradient)"
                  opacity="0.9"
                  stroke="url(#snowGradient)"
                  strokeWidth="2"
                />
                {/* Bear ears */}
                <circle
                  cx={275 + i * 300 + Math.sin(polarMovement * 0.01 + i) * 30}
                  cy="615"
                  r="5"
                  fill="url(#snowGradient)"
                  opacity="0.8"
                />
                <circle
                  cx={285 + i * 300 + Math.sin(polarMovement * 0.01 + i) * 30}
                  cy="615"
                  r="5"
                  fill="url(#snowGradient)"
                  opacity="0.8"
                />
                {/* Bear legs */}
                <rect
                  x={290 + i * 300 + Math.sin(polarMovement * 0.01 + i) * 30}
                  y="670"
                  width="8"
                  height="20"
                  fill="url(#snowGradient)"
                  opacity="0.8"
                />
                <rect
                  x={310 + i * 300 + Math.sin(polarMovement * 0.01 + i) * 30}
                  y="670"
                  width="8"
                  height="20"
                  fill="url(#snowGradient)"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Snowflakes falling */}
            {Array.from({ length: 50 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={50 + i * 25 + Math.sin(snowFall * 0.01 + i) * 15}
                  cy={(snowFall * 0.5 + i * 20) % 400}
                  r={1 + Math.sin(snowFall * 0.02 + i) * 0.5}
                  fill="url(#snowGradient)"
                  opacity="0.8"
                />
                <path
                  d={`M${50 + i * 25 + Math.sin(snowFall * 0.01 + i) * 15} ${(snowFall * 0.5 + i * 20) % 400} L${55 + i * 25 + Math.sin(snowFall * 0.01 + i) * 15} ${(snowFall * 0.5 + i * 20) % 400} M${50 + i * 25 + Math.sin(snowFall * 0.01 + i) * 15} ${(snowFall * 0.5 + i * 20) % 400} L${50 + i * 25 + Math.sin(snowFall * 0.01 + i) * 15} ${(snowFall * 0.5 + i * 20) % 400 + 5}`}
                  stroke="url(#snowGradient)"
                  strokeWidth="1"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Aurora glow effects */}
            {Array.from({ length: 8 }, (_, i) => (
              <ellipse
                key={i}
                cx={200 + i * 120 + Math.sin(auroraGlow * 0.01 + i) * 50}
                cy={150 + Math.cos(auroraGlow * 0.02 + i) * 30}
                rx={30 + Math.sin(auroraGlow * 0.03 + i) * 10}
                ry={15 + Math.cos(auroraGlow * 0.04 + i) * 5}
                fill="url(#auroraGlow)"
                opacity="0.4"
              />
            ))}
            
            {/* Ground snow */}
            <rect
              x="0"
              y="750"
              width="1200"
              height="50"
              fill="url(#snowGradient)"
              opacity="0.9"
            />
            
            {/* Snow drifts */}
            {Array.from({ length: 10 }, (_, i) => (
              <path
                key={i}
                d={`M${i * 120} 750 Q${i * 120 + 60 + Math.sin(snowFall * 0.01 + i) * 10} ${730 + Math.sin(snowFall * 0.02 + i) * 5} ${(i + 1) * 120} 750`}
                fill="url(#snowGradient)"
                opacity="0.7"
              />
            ))}
            
            {/* Stars in the sky */}
            {Array.from({ length: 30 }, (_, i) => (
              <circle
                key={i}
                cx={100 + i * 35 + Math.sin(auroraGlow * 0.01 + i) * 10}
                cy={50 + i * 25 + Math.cos(auroraGlow * 0.02 + i) * 8}
                r={1 + Math.sin(auroraGlow * 0.03 + i) * 0.5}
                fill="white"
                opacity="0.8"
              />
            ))}
          </svg>
        </div>

        {/* Floating aurora particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 4}%`,
                top: `${30 + Math.sin(auroraGlow * 0.01 + i) * 20}%`,
                animation: `float ${2 + i * 0.1}s ease-in-out infinite`
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
              <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Northern Lights
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the magical dance of the aurora borealis across the arctic sky, 
              where ice crystals sparkle and polar bears roam the frozen wilderness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Aurora
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-300 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Arctic Tours
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Arctic Wonders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-cyan-200 leading-relaxed">
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
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-cyan-200 font-medium">
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
              Voices of the Arctic
            </h2>
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-cyan-100 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-white font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-cyan-300">
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
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-cyan-400/30 hover:bg-cyan-400/50'
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
              Arctic Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-800/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">🌌</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-cyan-200 text-sm">
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
              Ready to Experience the Aurora?
            </h2>
            <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto">
              Journey into the arctic wilderness where the northern lights paint the sky 
              and every moment is filled with the magic of the polar regions.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-green-500 via-teal-600 to-cyan-600 text-white font-semibold rounded-full text-lg hover:from-green-600 hover:via-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
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