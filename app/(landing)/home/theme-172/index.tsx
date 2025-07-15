import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🏜️',
    title: 'Sand Dunes',
    description: 'Majestic desert landscapes',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: '🌴',
    title: 'Palm Trees',
    description: 'Lush oasis vegetation',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: '💧',
    title: 'Oasis Water',
    description: 'Crystal clear springs',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: '🐪',
    title: 'Desert Wildlife',
    description: 'Adapted desert creatures',
    color: 'from-yellow-500 to-amber-600'
  }
];

const testimonials = [
  {
    name: 'Sheikh Desert',
    role: 'Oasis Guardian',
    avatar: '🏜️',
    text: 'The desert teaches us patience and resilience, while the oasis provides life and hope in the harshest conditions.',
    rating: 5
  },
  {
    name: 'Palm Master',
    role: 'Oasis Gardener',
    avatar: '🌴',
    text: 'Our palm trees stand tall against the desert winds, providing shade and sustenance to all who seek refuge.',
    rating: 5
  },
  {
    name: 'Water Keeper',
    role: 'Spring Guardian',
    avatar: '💧',
    text: 'The oasis water flows pure and clear, a precious gift that sustains life in this beautiful desert landscape.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Sand Grains' },
  { value: '100°', label: 'Desert Heat' },
  { value: '24/7', label: 'Oasis Open' },
  { value: '🌅', label: 'Sunrise' }
];

const services = [
  { icon: '🏜️', title: 'Desert Tours', desc: 'Sand dune adventures' },
  { icon: '🌴', title: 'Oasis Gardens', desc: 'Palm tree care' },
  { icon: '💧', title: 'Spring Water', desc: 'Pure oasis water' },
  { icon: '🐪', title: 'Wildlife Tours', desc: 'Desert animal watching' }
];

export default function HomePageTheme172() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [sandFlow, setSandFlow] = useState(0);
  const [palmSway, setPalmSway] = useState(0);
  const [waterRipple, setWaterRipple] = useState(0);
  const [sunMovement, setSunMovement] = useState(0);
  const [camelWalk, setCamelWalk] = useState(0);

  useEffect(() => {
    // Sand flow animation
    const sandInterval = setInterval(() => {
      setSandFlow(prev => (prev + 1) % 100);
    }, 100);

    // Palm sway animation
    const palmInterval = setInterval(() => {
      setPalmSway(prev => (prev + 1) % 100);
    }, 150);

    // Water ripple animation
    const waterInterval = setInterval(() => {
      setWaterRipple(prev => (prev + 1) % 100);
    }, 200);

    // Sun movement animation
    const sunInterval = setInterval(() => {
      setSunMovement(prev => (prev + 1) % 100);
    }, 300);

    // Camel walk animation
    const camelInterval = setInterval(() => {
      setCamelWalk(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(sandInterval);
      clearInterval(palmInterval);
      clearInterval(waterInterval);
      clearInterval(sunInterval);
      clearInterval(camelInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-amber-200 to-yellow-300 font-serif relative overflow-hidden">
      {/* Desert Oasis Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-orange-100/90 via-amber-200/70 to-yellow-300/80">
        {/* Desert landscape with dunes and oasis */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Desert gradients */}
            <defs>
              <linearGradient id="sandGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="duneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FEF3C7" />
                <stop offset="50%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#FCD34D" />
              </linearGradient>
              <linearGradient id="oasisGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="50%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>
              <linearGradient id="palmGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22C55E" />
                <stop offset="50%" stopColor="#16A34A" />
                <stop offset="100%" stopColor="#15803D" />
              </linearGradient>
              <linearGradient id="sunGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Sun */}
            <g>
              <circle
                cx="1000"
                cy={100 + Math.sin(sunMovement * 0.02) * 50}
                r="60"
                fill="url(#sunGradient)"
                opacity="0.9"
                stroke="url(#sunGlow)"
                strokeWidth="10"
              />
              {/* Sun rays */}
              {Array.from({ length: 12 }, (_, i) => (
                <line
                  key={i}
                  x1={1000 + Math.cos((i * 30 + sunMovement * 0.5) * Math.PI / 180) * 80}
                  y1={100 + Math.sin(sunMovement * 0.02) * 50 + Math.sin((i * 30 + sunMovement * 0.5) * Math.PI / 180) * 80}
                  x2={1000 + Math.cos((i * 30 + sunMovement * 0.5) * Math.PI / 180) * 100}
                  y2={100 + Math.sin(sunMovement * 0.02) * 50 + Math.sin((i * 30 + sunMovement * 0.5) * Math.PI / 180) * 100}
                  stroke="url(#sunGradient)"
                  strokeWidth="3"
                  opacity="0.7"
                />
              ))}
            </g>
            
            {/* Sand dunes */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${i * 150} 600 Q${i * 150 + 75 + Math.sin(sandFlow * 0.01 + i) * 20} ${500 + Math.sin(sandFlow * 0.02 + i) * 30} ${(i + 1) * 150} 600`}
                  fill="url(#duneGradient)"
                  opacity="0.9"
                  stroke="url(#sandGradient)"
                  strokeWidth="2"
                />
                {/* Dune shadows */}
                <path
                  d={`M${i * 150} 600 Q${i * 150 + 75 + Math.sin(sandFlow * 0.01 + i) * 20} ${500 + Math.sin(sandFlow * 0.02 + i) * 30} ${(i + 1) * 150} 600`}
                  fill="none"
                  stroke="url(#sandGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                  strokeDasharray="5,5"
                />
              </g>
            ))}
            
            {/* Oasis water */}
            <g>
              <ellipse
                cx="600"
                cy="650"
                rx="200"
                ry="80"
                fill="url(#oasisGradient)"
                opacity="0.8"
                stroke="url(#oasisGradient)"
                strokeWidth="3"
              />
              {/* Water ripples */}
              {Array.from({ length: 5 }, (_, i) => (
                <ellipse
                  key={i}
                  cx="600"
                  cy="650"
                  rx={200 + i * 20 + Math.sin(waterRipple * 0.02 + i) * 10}
                  ry={80 + i * 8 + Math.cos(waterRipple * 0.03 + i) * 5}
                  fill="none"
                  stroke="url(#oasisGradient)"
                  strokeWidth="1"
                  opacity="0.4"
                />
              ))}
              {/* Water reflections */}
              {Array.from({ length: 20 }, (_, i) => (
                <circle
                  key={i}
                  cx={550 + i * 10 + Math.sin(waterRipple * 0.01 + i) * 15}
                  cy={630 + Math.cos(waterRipple * 0.015 + i) * 20}
                  r={2 + Math.sin(waterRipple * 0.02 + i) * 1}
                  fill="white"
                  opacity="0.6"
                />
              ))}
            </g>
            
            {/* Palm trees */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                {/* Palm trunk */}
                <rect
                  x={500 + i * 40}
                  y="550"
                  width="20"
                  height="100"
                  fill="url(#palmGradient)"
                  opacity="0.9"
                  stroke="url(#palmGradient)"
                  strokeWidth="2"
                />
                {/* Palm leaves */}
                {Array.from({ length: 8 }, (_, j) => (
                  <path
                    key={j}
                    d={`M${510 + i * 40} 550 Q${510 + i * 40 + Math.sin((j * 45 + palmSway * 0.5) * Math.PI / 180) * 60 + Math.sin(palmSway * 0.02 + i + j) * 10} ${550 + Math.cos((j * 45 + palmSway * 0.5) * Math.PI / 180) * 60 + Math.cos(palmSway * 0.03 + i + j) * 8} ${520 + i * 40 + Math.sin((j * 45 + palmSway * 0.5) * Math.PI / 180) * 80 + Math.sin(palmSway * 0.02 + i + j) * 15} ${530 + Math.cos((j * 45 + palmSway * 0.5) * Math.PI / 180) * 80 + Math.cos(palmSway * 0.03 + i + j) * 12}`}
                    fill="url(#palmGradient)"
                    opacity="0.8"
                    stroke="url(#palmGradient)"
                    strokeWidth="1"
                  />
                ))}
              </g>
            ))}
            
            {/* Camels */}
            {Array.from({ length: 3 }, (_, i) => (
              <g key={i}>
                {/* Camel body */}
                <ellipse
                  cx={200 + i * 300 + Math.sin(camelWalk * 0.01 + i) * 20}
                  cy="580"
                  rx="40"
                  ry="25"
                  fill="url(#sandGradient)"
                  opacity="0.9"
                  stroke="url(#sandGradient)"
                  strokeWidth="2"
                />
                {/* Camel neck */}
                <path
                  d={`M${200 + i * 300 + Math.sin(camelWalk * 0.01 + i) * 20} 580 Q${180 + i * 300 + Math.sin(camelWalk * 0.01 + i) * 20} 560 ${160 + i * 300 + Math.sin(camelWalk * 0.01 + i) * 20} 540`}
                  fill="none"
                  stroke="url(#sandGradient)"
                  strokeWidth="8"
                  opacity="0.9"
                />
                {/* Camel head */}
                <circle
                  cx={160 + i * 300 + Math.sin(camelWalk * 0.01 + i) * 20}
                  cy="540"
                  r="15"
                  fill="url(#sandGradient)"
                  opacity="0.9"
                  stroke="url(#sandGradient)"
                  strokeWidth="2"
                />
                {/* Camel hump */}
                <ellipse
                  cx={200 + i * 300 + Math.sin(camelWalk * 0.01 + i) * 20}
                  cy="560"
                  rx="25"
                  ry="15"
                  fill="url(#sandGradient)"
                  opacity="0.9"
                  stroke="url(#sandGradient)"
                  strokeWidth="2"
                />
              </g>
            ))}
            
            {/* Desert rocks */}
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                <ellipse
                  cx={100 + i * 100 + Math.sin(sandFlow * 0.01 + i) * 10}
                  cy="620"
                  rx={8 + Math.sin(sandFlow * 0.02 + i) * 3}
                  ry={5 + Math.cos(sandFlow * 0.03 + i) * 2}
                  fill="url(#sandGradient)"
                  opacity="0.7"
                  stroke="url(#sandGradient)"
                  strokeWidth="1"
                />
              </g>
            ))}
            
            {/* Floating sand particles */}
            {Array.from({ length: 30 }, (_, i) => (
              <circle
                key={i}
                cx={50 + i * 40 + Math.sin(sandFlow * 0.01 + i) * 20}
                cy={100 + (sandFlow * 0.5 + i * 15) % 300}
                r={1 + Math.sin(sandFlow * 0.02 + i) * 0.5}
                fill="url(#sandGradient)"
                opacity="0.6"
              />
            ))}
            
            {/* Heat waves */}
            {Array.from({ length: 10 }, (_, i) => (
              <path
                key={i}
                d={`M0 ${200 + i * 50} Q${600 + Math.sin(sunMovement * 0.01 + i) * 50} ${180 + i * 50} 1200 ${200 + i * 50}`}
                fill="none"
                stroke="url(#sunGradient)"
                strokeWidth="1"
                opacity="0.3"
              />
            ))}
            
            {/* Desert flowers */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={300 + i * 120 + Math.sin(sandFlow * 0.01 + i) * 15}
                  cy="610"
                  r="3"
                  fill="url(#sunGradient)"
                  opacity="0.8"
                />
                <path
                  d={`M${300 + i * 120 + Math.sin(sandFlow * 0.01 + i) * 15} 610 Q${305 + i * 120 + Math.sin(sandFlow * 0.01 + i) * 15} 605 ${310 + i * 120 + Math.sin(sandFlow * 0.01 + i) * 15} 610`}
                  fill="none"
                  stroke="url(#sunGradient)"
                  strokeWidth="1"
                  opacity="0.6"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Floating desert particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 4}%`,
                top: `${40 + Math.sin(sandFlow * 0.01 + i) * 30}%`,
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
            <h1 className="text-6xl md:text-8xl font-bold text-amber-900 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                Desert Oasis
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the serene beauty of the desert oasis, where golden sand dunes meet crystal clear waters 
              and palm trees sway gently in the warm desert breeze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Oasis
              </button>
              <button className="px-8 py-4 border-2 border-amber-500 text-amber-700 font-semibold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300">
                Desert Tours
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-16">
              Oasis Wonders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-100/80 to-orange-100/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/40 hover:border-amber-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-amber-800 leading-relaxed">
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
                  <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-amber-700 font-medium">
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
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-16">
              Voices of the Desert
            </h2>
            <div className="bg-gradient-to-br from-amber-100/80 to-orange-100/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/40">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-amber-800 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-amber-900 font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-amber-700">
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
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-16">
              Oasis Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-100/80 to-amber-100/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-300/40 hover:border-amber-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">🏜️</div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-amber-800 text-sm">
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
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Ready to Experience the Oasis?
            </h2>
            <p className="text-xl text-amber-800 mb-8 max-w-2xl mx-auto">
              Journey into the heart of the desert where golden sands meet crystal waters, 
              and discover the timeless beauty of nature's most precious gift - the oasis.
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
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
} 