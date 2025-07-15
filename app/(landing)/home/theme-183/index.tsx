import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🏛️',
    title: 'Atlantis City',
    description: 'Ancient underwater metropolis',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: '🐠',
    title: 'Sea Creatures',
    description: 'Marine life guardians',
    color: 'from-teal-400 to-blue-500'
  },
  {
    icon: '🌊',
    title: 'Ocean Depths',
    description: 'Deep sea mysteries',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: '💎',
    title: 'Coral Reefs',
    description: 'Underwater gardens',
    color: 'from-purple-500 to-pink-600'
  }
];

const testimonials = [
  {
    name: 'King Triton',
    role: 'Atlantis Ruler',
    avatar: '🏛️',
    text: 'The ancient city of Atlantis rises from the ocean depths, where our underwater civilization thrives in perfect harmony with the sea.',
    rating: 5
  },
  {
    name: 'Coral Guardian',
    role: 'Reef Protector',
    avatar: '🐠',
    text: 'Our coral reefs are the heart of the ocean, providing shelter and life to countless marine creatures in this underwater paradise.',
    rating: 5
  },
  {
    name: 'Deep Sea Sage',
    role: 'Ocean Mystic',
    avatar: '🌊',
    text: 'The depths of the ocean hold secrets older than time itself, where ancient wisdom flows with the currents.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Ocean Miles' },
  { value: '100%', label: 'Marine Life' },
  { value: '24/7', label: 'Ocean Awake' },
  { value: '🏛️', label: 'Atlantis' }
];

const services = [
  { icon: '🏛️', title: 'City Tours', desc: 'Atlantis exploration' },
  { icon: '🐠', title: 'Marine Life', desc: 'Sea creature watching' },
  { icon: '🌊', title: 'Deep Diving', desc: 'Ocean depth exploration' },
  { icon: '💎', title: 'Coral Gardens', desc: 'Reef preservation' }
];

export default function HomePageTheme183() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [bubbleRise, setBubbleRise] = useState(0);
  const [coralSway, setCoralSway] = useState(0);
  const [fishSwim, setFishSwim] = useState(0);
  const [waterFlow, setWaterFlow] = useState(0);
  const [atlantisGlow, setAtlantisGlow] = useState(0);

  useEffect(() => {
    // Bubble rise animation
    const bubbleInterval = setInterval(() => {
      setBubbleRise(prev => (prev + 1) % 100);
    }, 100);

    // Coral sway animation
    const coralInterval = setInterval(() => {
      setCoralSway(prev => (prev + 1) % 100);
    }, 150);

    // Fish swim animation
    const fishInterval = setInterval(() => {
      setFishSwim(prev => (prev + 1) % 100);
    }, 200);

    // Water flow animation
    const waterInterval = setInterval(() => {
      setWaterFlow(prev => (prev + 1) % 100);
    }, 300);

    // Atlantis glow effect
    const glowInterval = setInterval(() => {
      setAtlantisGlow(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(bubbleInterval);
      clearInterval(coralInterval);
      clearInterval(fishInterval);
      clearInterval(waterInterval);
      clearInterval(glowInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-cyan-800 to-teal-900 font-serif relative overflow-hidden">
      {/* Underwater Atlantis Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-900/90 via-cyan-800/70 to-teal-900/80">
        {/* Underwater landscape with Atlantis city and marine life */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Underwater gradients */}
            <defs>
              <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E3A8A" />
                <stop offset="50%" stopColor="#0C4A6E" />
                <stop offset="100%" stopColor="#164E63" />
              </linearGradient>
              <linearGradient id="atlantisGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#0891B2" />
              </linearGradient>
              <linearGradient id="coralGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#BE185D" />
              </linearGradient>
              <linearGradient id="bubbleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#BAE6FD" />
              </linearGradient>
              <linearGradient id="fishGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#0891B2" />
                <stop offset="100%" stopColor="#0E7490" />
              </linearGradient>
              <radialGradient id="atlantisGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0891B2" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Ocean background */}
            <rect x="0" y="0" width="1200" height="800" fill="url(#oceanGradient)" />
            
            {/* Atlantis city */}
            <g>
              {/* Main palace */}
              <rect
                x="400"
                y="300"
                width="400"
                height="300"
                fill="url(#atlantisGradient)"
                opacity="0.9"
                stroke="url(#bubbleGradient)"
                strokeWidth="3"
                rx="20"
              />
              {/* Palace towers */}
              <rect
                x="420"
                y="200"
                width="80"
                height="150"
                fill="url(#atlantisGradient)"
                opacity="0.8"
                stroke="url(#bubbleGradient)"
                strokeWidth="2"
                rx="10"
              />
              <rect
                x="700"
                y="200"
                width="80"
                height="150"
                fill="url(#atlantisGradient)"
                opacity="0.8"
                stroke="url(#bubbleGradient)"
                strokeWidth="2"
                rx="10"
              />
              {/* Palace windows */}
              {Array.from({ length: 8 }, (_, i) => (
                <rect
                  key={i}
                  x={420 + i * 50}
                  y="350"
                  width="30"
                  height="40"
                  fill="url(#bubbleGradient)"
                  opacity={0.6 + Math.sin(atlantisGlow * 0.02 + i) * 0.3}
                  rx="5"
                />
              ))}
              {/* Central dome */}
              <ellipse
                cx="600"
                cy="250"
                rx="60"
                ry="40"
                fill="url(#atlantisGradient)"
                opacity="0.9"
                stroke="url(#bubbleGradient)"
                strokeWidth="3"
              />
              {/* Dome glow */}
              <ellipse
                cx="600"
                cy="250"
                rx="50"
                ry="30"
                fill="url(#atlantisGlow)"
                opacity="0.7"
              />
            </g>
            
            {/* Coral reefs */}
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${100 + i * 90} 700 Q${120 + i * 90 + Math.sin(coralSway * 0.01 + i) * 20} ${650 + Math.sin(coralSway * 0.02 + i) * 30} ${140 + i * 90 + Math.sin(coralSway * 0.015 + i) * 25} ${600 + Math.sin(coralSway * 0.025 + i) * 40} Q${160 + i * 90 + Math.sin(coralSway * 0.02 + i) * 30} ${550 + Math.sin(coralSway * 0.03 + i) * 50} ${180 + i * 90 + Math.sin(coralSway * 0.025 + i) * 35} ${500 + Math.sin(coralSway * 0.035 + i) * 60}`}
                  fill="url(#coralGradient)"
                  opacity="0.8"
                  stroke="url(#bubbleGradient)"
                  strokeWidth="2"
                />
                <path
                  d={`M${110 + i * 90} 680 Q${130 + i * 90 + Math.sin(coralSway * 0.015 + i) * 15} ${630 + Math.sin(coralSway * 0.025 + i) * 25} ${150 + i * 90 + Math.sin(coralSway * 0.02 + i) * 20} ${580 + Math.sin(coralSway * 0.03 + i) * 35} Q${170 + i * 90 + Math.sin(coralSway * 0.025 + i) * 25} ${530 + Math.sin(coralSway * 0.035 + i) * 45} ${190 + i * 90 + Math.sin(coralSway * 0.03 + i) * 30} ${480 + Math.sin(coralSway * 0.04 + i) * 55}`}
                  fill="url(#coralGradient)"
                  opacity="0.7"
                  stroke="url(#bubbleGradient)"
                  strokeWidth="1"
                />
              </g>
            ))}
            
            {/* Fish swimming */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                {/* Fish body */}
                <ellipse
                  cx={200 + i * 120 + Math.sin(fishSwim * 0.01 + i) * 50}
                  cy={200 + Math.sin(fishSwim * 0.02 + i) * 30}
                  rx="25"
                  ry="15"
                  fill="url(#fishGradient)"
                  opacity="0.8"
                  stroke="url(#bubbleGradient)"
                  strokeWidth="2"
                />
                {/* Fish tail */}
                <path
                  d={`M${175 + i * 120 + Math.sin(fishSwim * 0.01 + i) * 50} ${200 + Math.sin(fishSwim * 0.02 + i) * 30} Q${155 + i * 120 + Math.sin(fishSwim * 0.01 + i) * 50} ${190 + Math.sin(fishSwim * 0.02 + i) * 30} ${135 + i * 120 + Math.sin(fishSwim * 0.01 + i) * 50} ${200 + Math.sin(fishSwim * 0.02 + i) * 30} Q${155 + i * 120 + Math.sin(fishSwim * 0.01 + i) * 50} ${210 + Math.sin(fishSwim * 0.02 + i) * 30} ${175 + i * 120 + Math.sin(fishSwim * 0.01 + i) * 50} ${200 + Math.sin(fishSwim * 0.02 + i) * 30}`}
                  fill="url(#fishGradient)"
                  opacity="0.7"
                  stroke="url(#bubbleGradient)"
                  strokeWidth="1"
                />
                {/* Fish eye */}
                <circle
                  cx={210 + i * 120 + Math.sin(fishSwim * 0.01 + i) * 50}
                  cy={195 + Math.sin(fishSwim * 0.02 + i) * 30}
                  r="3"
                  fill="url(#bubbleGradient)"
                  opacity="0.9"
                />
              </g>
            ))}
            
            {/* Bubbles rising */}
            {Array.from({ length: 30 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={50 + i * 40 + Math.sin(bubbleRise * 0.01 + i) * 20}
                  cy={800 - (bubbleRise * 0.5 + i * 25) % 800}
                  r="5"
                  fill="url(#bubbleGradient)"
                  opacity="0.7"
                />
                <circle
                  cx={70 + i * 40 + Math.sin(bubbleRise * 0.015 + i) * 25}
                  cy={800 - (bubbleRise * 0.5 + i * 25) % 800}
                  r="3"
                  fill="url(#bubbleGradient)"
                  opacity="0.5"
                />
                <circle
                  cx={30 + i * 40 + Math.sin(bubbleRise * 0.02 + i) * 15}
                  cy={800 - (bubbleRise * 0.5 + i * 25) % 800}
                  r="4"
                  fill="url(#bubbleGradient)"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Seaweed */}
            {Array.from({ length: 15 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${50 + i * 80} 750 Q${70 + i * 80 + Math.sin(waterFlow * 0.01 + i) * 15} ${700 + Math.sin(waterFlow * 0.02 + i) * 20} ${90 + i * 80 + Math.sin(waterFlow * 0.015 + i) * 20} ${650 + Math.sin(waterFlow * 0.025 + i) * 30} Q${110 + i * 80 + Math.sin(waterFlow * 0.02 + i) * 25} ${600 + Math.sin(waterFlow * 0.03 + i) * 40} ${130 + i * 80 + Math.sin(waterFlow * 0.025 + i) * 30} ${550 + Math.sin(waterFlow * 0.035 + i) * 50}`}
                  fill="url(#atlantisGradient)"
                  opacity="0.6"
                  stroke="url(#bubbleGradient)"
                  strokeWidth="1"
                />
              </g>
            ))}
            
            {/* Atlantis buildings */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                <rect
                  x={300 + i * 150}
                  y="500"
                  width="100"
                  height="200"
                  fill="url(#atlantisGradient)"
                  opacity="0.8"
                  stroke="url(#bubbleGradient)"
                  strokeWidth="2"
                  rx="10"
                />
                {/* Building windows */}
                {Array.from({ length: 4 }, (_, j) => (
                  <rect
                    key={j}
                    x={320 + i * 150}
                    y={520 + j * 40}
                    width="20"
                    height="25"
                    fill="url(#bubbleGradient)"
                    opacity={0.6 + Math.sin(atlantisGlow * 0.02 + i + j) * 0.3}
                    rx="3"
                  />
                ))}
                {/* Building top */}
                <rect
                  x={310 + i * 150}
                  y="480"
                  width="80"
                  height="20"
                  fill="url(#atlantisGradient)"
                  opacity="0.9"
                  stroke="url(#bubbleGradient)"
                  strokeWidth="2"
                  rx="5"
                />
              </g>
            ))}
            
            {/* Ocean floor */}
            <rect x="0" y="750" width="1200" height="50" fill="url(#oceanGradient)" opacity="0.8" />
            
            {/* Sand patterns */}
            {Array.from({ length: 20 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={50 + i * 60}
                  cy="780"
                  r="3"
                  fill="url(#bubbleGradient)"
                  opacity="0.4"
                />
                <circle
                  cx={80 + i * 60}
                  cy="785"
                  r="2"
                  fill="url(#bubbleGradient)"
                  opacity="0.3"
                />
              </g>
            ))}
            
            {/* Floating sea creatures */}
            {Array.from({ length: 10 }, (_, i) => (
              <g key={i}>
                <text
                  x={150 + i * 100 + Math.sin(waterFlow * 0.01 + i) * 30}
                  y={150 + (waterFlow * 0.5 + i * 40) % 300}
                  fill="url(#fishGradient)"
                  fontSize="16"
                  opacity="0.7"
                  fontFamily="serif"
                >
                  {['🐠', '🐡', '🦈', '🐙', '🦑', '🦐', '🦞', '🦀', '🐠', '🐡'][i]}
                </text>
              </g>
            ))}
            
            {/* Water currents */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${0} ${100 + i * 100} Q${200 + Math.sin(waterFlow * 0.01 + i) * 50} ${80 + i * 100 + Math.sin(waterFlow * 0.02 + i) * 30} ${400 + Math.sin(waterFlow * 0.015 + i) * 60} ${120 + i * 100 + Math.sin(waterFlow * 0.025 + i) * 40} Q${600 + Math.sin(waterFlow * 0.02 + i) * 70} ${90 + i * 100 + Math.sin(waterFlow * 0.03 + i) * 50} ${800 + Math.sin(waterFlow * 0.025 + i) * 80} ${110 + i * 100 + Math.sin(waterFlow * 0.035 + i) * 60} Q${1000 + Math.sin(waterFlow * 0.03 + i) * 90} ${85 + i * 100 + Math.sin(waterFlow * 0.04 + i) * 70} ${1200} ${105 + i * 100 + Math.sin(waterFlow * 0.045 + i) * 80}`}
                  fill="none"
                  stroke="url(#bubbleGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Floating bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 35 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${5 + i * 3}%`,
                top: `${80 - (bubbleRise * 0.5 + i * 20) % 80}%`,
                animation: `bubbleFloat ${3 + i * 0.1}s ease-in-out infinite`
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
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                Underwater Atlantis
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Dive into the depths of the ocean where the ancient city of Atlantis rises 
              from the sea floor, surrounded by vibrant coral reefs and marine life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Dive Deep
              </button>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-300 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Ocean Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-900/80 to-cyan-900/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/40 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed">
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
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 font-medium">
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
              Ocean Guardians
            </h2>
            <div className="bg-gradient-to-br from-blue-900/80 to-cyan-900/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/40">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-blue-200 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-white font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-blue-300">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="flex justify-center mt-4">
                  {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                    <span key={i} className="text-blue-500 text-xl">⭐</span>
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
                      ? 'bg-blue-500 scale-125'
                      : 'bg-blue-400/30 hover:bg-blue-400/50'
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
              Ocean Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-900/80 to-blue-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/40 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">🏛️</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-blue-200 text-sm">
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
              Ready to Explore the Deep?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Discover the wonders of the underwater world, where Atlantis rises from the depths 
              and marine life thrives in perfect harmony with the ocean.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-blue-500 via-cyan-600 to-teal-600 text-white font-semibold rounded-full text-lg hover:from-blue-600 hover:via-cyan-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Start Exploring
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-25px) rotate(180deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
} 