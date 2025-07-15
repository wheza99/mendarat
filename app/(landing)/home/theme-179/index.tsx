import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🌳',
    title: 'Enchanted Trees',
    description: 'Ancient magical forests',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: '🍄',
    title: 'Glowing Mushrooms',
    description: 'Luminescent fungi',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: '✨',
    title: 'Fairy Lights',
    description: 'Magical illumination',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    icon: '🦋',
    title: 'Mystical Creatures',
    description: 'Enchanted wildlife',
    color: 'from-indigo-500 to-purple-600'
  }
];

const testimonials = [
  {
    name: 'Forest Guardian',
    role: 'Ancient Tree Keeper',
    avatar: '🌳',
    text: 'The mystical forest holds secrets of ancient magic, where every tree whispers tales of forgotten legends and enchanted wonders.',
    rating: 5
  },
  {
    name: 'Fairy Queen',
    role: 'Light Weaver',
    avatar: '✨',
    text: 'Our fairy lights dance through the night, illuminating the path to magical realms where dreams come to life.',
    rating: 5
  },
  {
    name: 'Mushroom Sage',
    role: 'Fungi Master',
    avatar: '🍄',
    text: 'The glowing mushrooms guide travelers through the mystical forest, each one a beacon of ancient wisdom and natural magic.',
    rating: 5
  }
];

const stats = [
  { value: '1000+', label: 'Ancient Trees' },
  { value: '∞', label: 'Magical Spells' },
  { value: '24/7', label: 'Forest Awake' },
  { value: '🌳', label: 'Mystical Realm' }
];

const services = [
  { icon: '🌳', title: 'Forest Tours', desc: 'Magical woodland walks' },
  { icon: '🍄', title: 'Mushroom Foraging', desc: 'Enchanted fungi hunting' },
  { icon: '✨', title: 'Fairy Encounters', desc: 'Magical creature sightings' },
  { icon: '🦋', title: 'Wildlife Watching', desc: 'Mystical animal observation' }
];

export default function HomePageTheme179() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [treeSway, setTreeSway] = useState(0);
  const [mushroomGlow, setMushroomGlow] = useState(0);
  const [fairyFlight, setFairyFlight] = useState(0);
  const [forestMagic, setForestMagic] = useState(0);
  const [moonlight, setMoonlight] = useState(0);

  useEffect(() => {
    // Tree sway animation
    const treeInterval = setInterval(() => {
      setTreeSway(prev => (prev + 1) % 100);
    }, 100);

    // Mushroom glow animation
    const mushroomInterval = setInterval(() => {
      setMushroomGlow(prev => (prev + 1) % 100);
    }, 150);

    // Fairy flight animation
    const fairyInterval = setInterval(() => {
      setFairyFlight(prev => (prev + 1) % 100);
    }, 200);

    // Forest magic animation
    const magicInterval = setInterval(() => {
      setForestMagic(prev => (prev + 1) % 100);
    }, 300);

    // Moonlight effect
    const moonInterval = setInterval(() => {
      setMoonlight(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(treeInterval);
      clearInterval(mushroomInterval);
      clearInterval(fairyInterval);
      clearInterval(magicInterval);
      clearInterval(moonInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-purple-900 to-pink-900 font-serif relative overflow-hidden">
      {/* Mystical Forest Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-green-900/90 via-purple-900/70 to-pink-900/80">
        {/* Enchanted forest landscape with trees and magical elements */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Mystical forest gradients */}
            <defs>
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="50%" stopColor="#334155" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#16A34A" />
                <stop offset="50%" stopColor="#15803D" />
                <stop offset="100%" stopColor="#166534" />
              </linearGradient>
              <linearGradient id="mushroomGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#BE185D" />
              </linearGradient>
              <linearGradient id="fairyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="moonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F1F5F9" />
                <stop offset="50%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>
              <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F1F5F9" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#E2E8F0" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Sky */}
            <rect x="0" y="0" width="1200" height="400" fill="url(#skyGradient)" />
            
            {/* Moon */}
            <g>
              <circle
                cx="1000"
                cy="100"
                r="40"
                fill="url(#moonGradient)"
                opacity="0.9"
                stroke="url(#moonGlow)"
                strokeWidth="5"
              />
              {/* Moon craters */}
              <circle cx="990" cy="90" r="3" fill="url(#skyGradient)" opacity="0.6" />
              <circle cx="1010" cy="110" r="2" fill="url(#skyGradient)" opacity="0.6" />
              <circle cx="995" cy="115" r="1.5" fill="url(#skyGradient)" opacity="0.6" />
            </g>
            
            {/* Enchanted trees */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                {/* Tree trunk */}
                <rect
                  x={150 + i * 120}
                  y="300"
                  width="40"
                  height="300"
                  fill="url(#treeGradient)"
                  opacity="0.9"
                  stroke="url(#treeGradient)"
                  strokeWidth="2"
                />
                {/* Tree foliage */}
                <circle
                  cx={170 + i * 120 + Math.sin(treeSway * 0.01 + i) * 10}
                  cy="250 + Math.sin(treeSway * 0.02 + i) * 15"
                  r="60"
                  fill="url(#treeGradient)"
                  opacity="0.8"
                />
                <circle
                  cx={160 + i * 120 + Math.sin(treeSway * 0.015 + i) * 8}
                  cy="220 + Math.sin(treeSway * 0.025 + i) * 12"
                  r="40"
                  fill="url(#treeGradient)"
                  opacity="0.7"
                />
                <circle
                  cx={180 + i * 120 + Math.sin(treeSway * 0.02 + i) * 12}
                  cy="200 + Math.sin(treeSway * 0.03 + i) * 10"
                  r="30"
                  fill="url(#treeGradient)"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Glowing mushrooms */}
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                {/* Mushroom stem */}
                <rect
                  x={200 + i * 80 + Math.sin(mushroomGlow * 0.01 + i) * 15}
                  y="550"
                  width="8"
                  height="40"
                  fill="url(#mushroomGradient)"
                  opacity="0.8"
                />
                {/* Mushroom cap */}
                <ellipse
                  cx={204 + i * 80 + Math.sin(mushroomGlow * 0.01 + i) * 15}
                  cy="550"
                  rx="12"
                  ry="8"
                  fill="url(#mushroomGradient)"
                  opacity="0.9"
                />
                {/* Mushroom glow */}
                <circle
                  cx={204 + i * 80 + Math.sin(mushroomGlow * 0.01 + i) * 15}
                  cy="550"
                  r="15"
                  fill="url(#mushroomGradient)"
                  opacity={0.3 + Math.sin(mushroomGlow * 0.02 + i) * 0.2}
                />
                {/* Mushroom spots */}
                {Array.from({ length: 3 }, (_, j) => (
                  <circle
                    key={j}
                    cx={200 + i * 80 + Math.sin(mushroomGlow * 0.01 + i) * 15 + (j - 1) * 4}
                    cy="548 + j * 2"
                    r="1"
                    fill="white"
                    opacity="0.8"
                  />
                ))}
              </g>
            ))}
            
            {/* Fairy lights */}
            {Array.from({ length: 20 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={100 + i * 50 + Math.sin(fairyFlight * 0.01 + i) * 20}
                  cy={150 + (fairyFlight * 0.5 + i * 15) % 300}
                  r="3"
                  fill="url(#fairyGradient)"
                  opacity="0.8"
                />
                {/* Fairy light glow */}
                <circle
                  cx={100 + i * 50 + Math.sin(fairyFlight * 0.01 + i) * 20}
                  cy={150 + (fairyFlight * 0.5 + i * 15) % 300}
                  r="8"
                  fill="url(#fairyGradient)"
                  opacity={0.2 + Math.sin(fairyFlight * 0.02 + i) * 0.1}
                />
                {/* Fairy light trail */}
                <path
                  d={`M${100 + i * 50 + Math.sin(fairyFlight * 0.01 + i) * 20} ${150 + (fairyFlight * 0.5 + i * 15) % 300} Q${110 + i * 50 + Math.sin(fairyFlight * 0.015 + i) * 20} ${140 + (fairyFlight * 0.5 + i * 15) % 300} ${120 + i * 50 + Math.sin(fairyFlight * 0.02 + i) * 20} ${145 + (fairyFlight * 0.5 + i * 15) % 300}`}
                  fill="none"
                  stroke="url(#fairyGradient)"
                  strokeWidth="1"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Mystical creatures */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                {/* Butterfly */}
                <g>
                  <ellipse
                    cx={300 + i * 150 + Math.sin(forestMagic * 0.01 + i) * 30}
                    cy={200 + (forestMagic * 0.5 + i * 40) % 200}
                    rx="8"
                    ry="4"
                    fill="url(#mushroomGradient)"
                    opacity="0.8"
                    transform={`rotate(${forestMagic * 0.5 + i * 30} ${300 + i * 150 + Math.sin(forestMagic * 0.01 + i) * 30} ${200 + (forestMagic * 0.5 + i * 40) % 200})`}
                  />
                  <ellipse
                    cx={300 + i * 150 + Math.sin(forestMagic * 0.01 + i) * 30}
                    cy={200 + (forestMagic * 0.5 + i * 40) % 200}
                    rx="6"
                    ry="3"
                    fill="url(#fairyGradient)"
                    opacity="0.6"
                    transform={`rotate(${-forestMagic * 0.5 + i * 30} ${300 + i * 150 + Math.sin(forestMagic * 0.01 + i) * 30} ${200 + (forestMagic * 0.5 + i * 40) % 200})`}
                  />
                </g>
              </g>
            ))}
            
            {/* Floating magical particles */}
            {Array.from({ length: 25 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={50 + i * 45 + Math.sin(forestMagic * 0.01 + i) * 15}
                  cy={100 + (forestMagic * 0.5 + i * 20) % 300}
                  r="2"
                  fill="url(#fairyGradient)"
                  opacity="0.7"
                />
              </g>
            ))}
            
            {/* Forest floor */}
            <rect x="0" y="600" width="1200" height="200" fill="url(#treeGradient)" opacity="0.6" />
            
            {/* Magical flowers */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                {/* Flower stem */}
                <rect
                  x={300 + i * 100}
                  y="580"
                  width="3"
                  height="30"
                  fill="url(#treeGradient)"
                  opacity="0.8"
                />
                {/* Flower petals */}
                {Array.from({ length: 5 }, (_, j) => (
                  <ellipse
                    key={j}
                    cx={301.5 + i * 100 + Math.cos((j * 72 + forestMagic * 0.5) * Math.PI / 180) * 8}
                    cy="580 + Math.sin((j * 72 + forestMagic * 0.5) * Math.PI / 180) * 8"
                    rx="4"
                    ry="2"
                    fill="url(#mushroomGradient)"
                    opacity="0.8"
                  />
                ))}
                {/* Flower center */}
                <circle
                  cx={301.5 + i * 100}
                  cy="580"
                  r="3"
                  fill="url(#fairyGradient)"
                  opacity="0.9"
                />
              </g>
            ))}
            
            {/* Moonlight beams */}
            {Array.from({ length: 5 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${1000 + i * 40} 100 L${800 + i * 60} 400 L${600 + i * 80} 600`}
                  fill="none"
                  stroke="url(#moonGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                  strokeDasharray="10,5"
                />
              </g>
            ))}
            
            {/* Floating leaves */}
            {Array.from({ length: 15 }, (_, i) => (
              <g key={i}>
                <ellipse
                  cx={200 + i * 70 + Math.sin(moonlight * 0.01 + i) * 20}
                  cy={300 + (moonlight * 0.5 + i * 25) % 400}
                  rx="3"
                  ry="1.5"
                  fill="url(#treeGradient)"
                  opacity="0.7"
                  transform={`rotate(${moonlight * 0.5 + i * 20} ${200 + i * 70 + Math.sin(moonlight * 0.01 + i) * 20} ${300 + (moonlight * 0.5 + i * 25) % 400})`}
                />
              </g>
            ))}
            
            {/* Mystical symbols */}
            {Array.from({ length: 10 }, (_, i) => (
              <g key={i}>
                <text
                  x={150 + i * 100 + Math.sin(forestMagic * 0.01 + i) * 15}
                  y={150 + (forestMagic * 0.5 + i * 30) % 200}
                  fill="url(#fairyGradient)"
                  fontSize="12"
                  opacity="0.6"
                  fontFamily="serif"
                >
                  {['🌙', '⭐', '✨', '🔮', '🌿', '🌸', '🍃', '🌺', '🌻', '🌼'][i]}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Floating magical particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full opacity-60"
              style={{
                left: `${5 + i * 3}%`,
                top: `${20 + Math.sin(forestMagic * 0.01 + i) * 60}%`,
                animation: `forestFloat ${4 + i * 0.1}s ease-in-out infinite`
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
              <span className="bg-gradient-to-r from-green-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Mystical Forest
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Step into an enchanted realm where ancient trees whisper secrets, 
              glowing mushrooms light the path, and magical creatures dance in the moonlight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-purple-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Enter Forest
              </button>
              <button className="px-8 py-4 border-2 border-green-500 text-green-300 font-semibold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Forest Magic
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-900/80 to-purple-900/80 backdrop-blur-sm rounded-2xl p-8 border border-green-500/40 hover:border-green-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-green-200 leading-relaxed">
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
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-green-200 font-medium">
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
              Forest Guardians
            </h2>
            <div className="bg-gradient-to-br from-green-900/80 to-purple-900/80 backdrop-blur-sm rounded-2xl p-8 border border-green-500/40">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-green-200 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-white font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-green-300">
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
                      ? 'bg-green-500 scale-125'
                      : 'bg-green-400/30 hover:bg-green-400/50'
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
              Forest Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/80 to-green-900/80 backdrop-blur-sm rounded-2xl p-6 border border-green-500/40 hover:border-green-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">🌳</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-green-200 text-sm">
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
              Ready to Explore the Mystical Forest?
            </h2>
            <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
              Immerse yourself in the enchanting world of ancient trees, glowing mushrooms, 
              and magical creatures that call this mystical forest their home.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-green-500 via-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg hover:from-green-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Begin Your Journey
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes forestFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
} 