import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🏺',
    title: 'Sacred Artifacts',
    description: 'Ancient golden treasures',
    color: 'from-amber-500 to-yellow-600'
  },
  {
    icon: '📜',
    title: 'Hieroglyphics',
    description: 'Sacred ancient writings',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: '👑',
    title: 'Pharaoh Power',
    description: 'Royal ancient authority',
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: '🔮',
    title: 'Mystical Magic',
    description: 'Ancient Egyptian spells',
    color: 'from-red-500 to-purple-600'
  }
];

const testimonials = [
  {
    name: 'Pharaoh Ramses',
    role: 'Ancient King',
    avatar: '👑',
    text: 'The pyramids stand as eternal monuments to our divine power, where the gods themselves walk among us in golden splendor.',
    rating: 5
  },
  {
    name: 'High Priest Anubis',
    role: 'Sacred Guardian',
    avatar: '🏺',
    text: 'Our hieroglyphics tell stories of the gods, written in golden ink that flows like the sacred Nile itself.',
    rating: 5
  },
  {
    name: 'Queen Nefertiti',
    role: 'Divine Beauty',
    avatar: '🔮',
    text: 'The ancient magic of Egypt flows through every grain of sand, every golden artifact, and every sacred pyramid.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Sacred Years' },
  { value: '100%', label: 'Divine Power' },
  { value: '24/7', label: 'Gods Awake' },
  { value: '🏺', label: 'Ancient' }
];

const services = [
  { icon: '🏺', title: 'Artifact Discovery', desc: 'Ancient treasure hunting' },
  { icon: '📜', title: 'Hieroglyphic Reading', desc: 'Sacred text translation' },
  { icon: '👑', title: 'Pharaoh Guidance', desc: 'Royal wisdom sharing' },
  { icon: '🔮', title: 'Mystical Rituals', desc: 'Ancient magic ceremonies' }
];

export default function HomePageTheme182() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [pyramidGlow, setPyramidGlow] = useState(0);
  const [hieroglyphicFlow, setHieroglyphicFlow] = useState(0);
  const [goldenShine, setGoldenShine] = useState(0);
  const [desertWind, setDesertWind] = useState(0);
  const [sacredLight, setSacredLight] = useState(0);

  useEffect(() => {
    // Pyramid glow animation
    const pyramidInterval = setInterval(() => {
      setPyramidGlow(prev => (prev + 1) % 100);
    }, 100);

    // Hieroglyphic flow animation
    const hieroglyphicInterval = setInterval(() => {
      setHieroglyphicFlow(prev => (prev + 1) % 100);
    }, 150);

    // Golden shine animation
    const goldenInterval = setInterval(() => {
      setGoldenShine(prev => (prev + 1) % 100);
    }, 200);

    // Desert wind animation
    const windInterval = setInterval(() => {
      setDesertWind(prev => (prev + 1) % 100);
    }, 300);

    // Sacred light effect
    const lightInterval = setInterval(() => {
      setSacredLight(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(pyramidInterval);
      clearInterval(hieroglyphicInterval);
      clearInterval(goldenInterval);
      clearInterval(windInterval);
      clearInterval(lightInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-orange-800 to-yellow-900 font-serif relative overflow-hidden">
      {/* Ancient Egyptian Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-amber-900/90 via-orange-800/70 to-yellow-900/80">
        {/* Desert landscape with pyramids and ancient artifacts */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Egyptian gradients */}
            <defs>
              <linearGradient id="desertGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#92400E" />
                <stop offset="50%" stopColor="#B45309" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="pyramidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="sacredGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="50%" stopColor="#B91C1C" />
                <stop offset="100%" stopColor="#991B1B" />
              </linearGradient>
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Desert sky */}
            <rect x="0" y="0" width="1200" height="400" fill="url(#skyGradient)" />
            
            {/* Sun */}
            <g>
              <circle
                cx="1000"
                cy="100"
                r="50"
                fill="url(#goldGradient)"
                opacity="0.9"
                stroke="url(#goldGlow)"
                strokeWidth="8"
              />
              {/* Sun rays */}
              {Array.from({ length: 12 }, (_, i) => (
                <line
                  key={i}
                  x1={1000 + Math.cos((i * 30) * Math.PI / 180) * 60}
                  y1={100 + Math.sin((i * 30) * Math.PI / 180) * 60}
                  x2={1000 + Math.cos((i * 30) * Math.PI / 180) * 80}
                  y2={100 + Math.sin((i * 30) * Math.PI / 180) * 80}
                  stroke="url(#goldGradient)"
                  strokeWidth="3"
                  opacity="0.8"
                />
              ))}
            </g>
            
            {/* Main pyramid */}
            <g>
              {/* Pyramid base */}
              <polygon
                points="400,600 800,600 600,200"
                fill="url(#pyramidGradient)"
                opacity="0.9"
                stroke="url(#goldGradient)"
                strokeWidth="4"
              />
              {/* Pyramid layers */}
              <polygon
                points="450,550 750,550 600,250"
                fill="url(#pyramidGradient)"
                opacity="0.8"
                stroke="url(#goldGradient)"
                strokeWidth="3"
              />
              <polygon
                points="500,500 700,500 600,300"
                fill="url(#pyramidGradient)"
                opacity="0.7"
                stroke="url(#goldGradient)"
                strokeWidth="2"
              />
              {/* Pyramid entrance */}
              <rect
                x="580"
                y="500"
                width="40"
                height="60"
                fill="url(#sacredGradient)"
                opacity="0.8"
                stroke="url(#goldGradient)"
                strokeWidth="2"
              />
              {/* Pyramid capstone */}
              <polygon
                points="595,200 605,200 600,180"
                fill="url(#goldGradient)"
                opacity="0.9"
                stroke="url(#goldGlow)"
                strokeWidth="2"
              />
            </g>
            
            {/* Smaller pyramids */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                <polygon
                  points={`${200 + i * 150},650 ${300 + i * 150},650 ${250 + i * 150},450`}
                  fill="url(#pyramidGradient)"
                  opacity="0.7"
                  stroke="url(#goldGradient)"
                  strokeWidth="2"
                />
                <polygon
                  points={`${220 + i * 150},620 ${280 + i * 150},620 ${250 + i * 150},480`}
                  fill="url(#pyramidGradient)"
                  opacity="0.6"
                  stroke="url(#goldGradient)"
                  strokeWidth="1"
                />
              </g>
            ))}
            
            {/* Hieroglyphics */}
            {Array.from({ length: 20 }, (_, i) => (
              <g key={i}>
                <rect
                  x={100 + i * 50}
                  y={300 + Math.sin(hieroglyphicFlow * 0.01 + i) * 20}
                  width="30"
                  height="40"
                  fill="url(#goldGradient)"
                  opacity="0.6"
                  stroke="url(#sacredGradient)"
                  strokeWidth="1"
                />
                <text
                  x={115 + i * 50}
                  y={325 + Math.sin(hieroglyphicFlow * 0.01 + i) * 20}
                  fill="url(#sacredGradient)"
                  fontSize="12"
                  opacity="0.8"
                  textAnchor="middle"
                  fontFamily="serif"
                >
                  {['👑', '🏺', '📜', '🔮', '👁️', '🐪', '🌞', '🌙', '👑', '🏺', '📜', '🔮', '👁️', '🐪', '🌞', '🌙', '👑', '🏺', '📜', '🔮'][i]}
                </text>
              </g>
            ))}
            
            {/* Golden artifacts */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                {/* Golden vase */}
                <ellipse
                  cx={150 + i * 120}
                  cy={700}
                  rx="25"
                  ry="35"
                  fill="url(#goldGradient)"
                  opacity="0.8"
                  stroke="url(#sacredGradient)"
                  strokeWidth="2"
                />
                <ellipse
                  cx={150 + i * 120}
                  cy="680"
                  rx="20"
                  ry="25"
                  fill="url(#goldGradient)"
                  opacity="0.7"
                  stroke="url(#sacredGradient)"
                  strokeWidth="1"
                />
                {/* Vase decoration */}
                <path
                  d={`M${130 + i * 120} 700 Q${150 + i * 120} ${690 + Math.sin(goldenShine * 0.02 + i) * 10} ${170 + i * 120} 700`}
                  fill="none"
                  stroke="url(#sacredGradient)"
                  strokeWidth="2"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Sacred obelisks */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                <rect
                  x={50 + i * 180}
                  y="400"
                  width="20"
                  height="200"
                  fill="url(#goldGradient)"
                  opacity="0.8"
                  stroke="url(#sacredGradient)"
                  strokeWidth="2"
                />
                {/* Obelisk top */}
                <polygon
                  points={`${50 + i * 180},400 ${70 + i * 180},400 ${60 + i * 180},380`}
                  fill="url(#goldGradient)"
                  opacity="0.9"
                  stroke="url(#sacredGradient)"
                  strokeWidth="2"
                />
                {/* Obelisk inscriptions */}
                {Array.from({ length: 5 }, (_, j) => (
                  <rect
                    key={j}
                    x={55 + i * 180}
                    y={420 + j * 30}
                    width="10"
                    height="20"
                    fill="url(#sacredGradient)"
                    opacity="0.6"
                  />
                ))}
              </g>
            ))}
            
            {/* Desert dunes */}
            {Array.from({ length: 15 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${i * 80} 750 Q${i * 80 + 40} ${720 + Math.sin(desertWind * 0.01 + i) * 20} ${i * 80 + 80} 750`}
                  fill="url(#desertGradient)"
                  opacity="0.8"
                  stroke="url(#goldGradient)"
                  strokeWidth="1"
                />
              </g>
            ))}
            
            {/* Sacred symbols */}
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={100 + i * 100}
                  cy={150 + Math.sin(sacredLight * 0.01 + i) * 30}
                  r="15"
                  fill="url(#goldGradient)"
                  opacity="0.7"
                  stroke="url(#sacredGradient)"
                  strokeWidth="2"
                />
                <text
                  x={100 + i * 100}
                  y={155 + Math.sin(sacredLight * 0.01 + i) * 30}
                  fill="url(#sacredGradient)"
                  fontSize="12"
                  opacity="0.9"
                  textAnchor="middle"
                  fontFamily="serif"
                >
                  {['👑', '🏺', '📜', '🔮', '👁️', '🐪', '🌞', '🌙', '👑', '🏺', '📜', '🔮'][i]}
                </text>
              </g>
            ))}
            
            {/* Floating golden particles */}
            {Array.from({ length: 25 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={50 + i * 45 + Math.sin(goldenShine * 0.01 + i) * 15}
                  cy={50 + (goldenShine * 0.5 + i * 20) % 300}
                  r="2"
                  fill="url(#goldGradient)"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Sacred light rays */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <line
                  x1="1000"
                  y1="100"
                  x2={200 + i * 100 + Math.sin(sacredLight * 0.01 + i) * 20}
                  y2={400 + Math.sin(sacredLight * 0.02 + i) * 30}
                  stroke="url(#goldGradient)"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Desert ground */}
            <rect x="0" y="750" width="1200" height="50" fill="url(#desertGradient)" opacity="0.8" />
            
            {/* Ancient scrolls */}
            {Array.from({ length: 5 }, (_, i) => (
              <g key={i}>
                <rect
                  x={300 + i * 150}
                  y="650"
                  width="80"
                  height="60"
                  fill="url(#goldGradient)"
                  opacity="0.7"
                  stroke="url(#sacredGradient)"
                  strokeWidth="2"
                  rx="5"
                />
                {/* Scroll text */}
                {Array.from({ length: 4 }, (_, j) => (
                  <line
                    key={j}
                    x1={320 + i * 150}
                    y1={670 + j * 12}
                    x2={360 + i * 150}
                    y2={670 + j * 12}
                    stroke="url(#sacredGradient)"
                    strokeWidth="1"
                    opacity="0.8"
                  />
                ))}
              </g>
            ))}
          </svg>
        </div>

        {/* Floating golden particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
              style={{
                left: `${5 + i * 3}%`,
                top: `${20 + Math.sin(goldenShine * 0.01 + i) * 60}%`,
                animation: `goldenFloat ${2.5 + i * 0.1}s ease-in-out infinite`
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
              <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                Ancient Egyptian Pyramid
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Enter the sacred realm of the pharaohs, where golden pyramids touch the heavens 
              and ancient magic flows through every grain of sand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Enter the Pyramid
              </button>
              <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-300 font-semibold rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Sacred Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-900/80 to-orange-900/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/40 hover:border-yellow-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-yellow-200 leading-relaxed">
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
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-yellow-200 font-medium">
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
              Divine Beings
            </h2>
            <div className="bg-gradient-to-br from-amber-900/80 to-orange-900/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/40">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-yellow-200 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-white font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-yellow-300">
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
                      ? 'bg-yellow-500 scale-125'
                      : 'bg-yellow-400/30 hover:bg-yellow-400/50'
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
              Sacred Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-900/80 to-amber-900/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/40 hover:border-yellow-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">🏺</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-yellow-200 text-sm">
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
              Ready to Enter the Sacred Realm?
            </h2>
            <p className="text-xl text-yellow-200 mb-8 max-w-2xl mx-auto">
              Experience the divine power of ancient Egypt, where pharaohs ruled with golden authority 
              and the gods themselves walked among mortals.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-yellow-500 via-amber-600 to-orange-600 text-white font-semibold rounded-full text-lg hover:from-yellow-600 hover:via-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Begin Your Journey
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes goldenFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
} 