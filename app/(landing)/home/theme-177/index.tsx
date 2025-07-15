import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '🎷',
    title: 'Saxophone Solos',
    description: 'Smooth jazz melodies',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: '🎹',
    title: 'Piano Keys',
    description: 'Classic jazz standards',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    icon: '🎤',
    title: 'Vintage Microphones',
    description: 'Golden age vocals',
    color: 'from-gray-600 to-gray-800'
  },
  {
    icon: '🥁',
    title: 'Drum Beats',
    description: 'Rhythmic jazz grooves',
    color: 'from-brown-600 to-red-700'
  }
];

const testimonials = [
  {
    name: 'Jazz Master',
    role: 'Saxophone Virtuoso',
    avatar: '🎷',
    text: 'The golden age of jazz lives on through these timeless melodies, where every note tells a story of passion and soul.',
    rating: 5
  },
  {
    name: 'Piano Legend',
    role: 'Jazz Pianist',
    avatar: '🎹',
    text: 'The piano keys dance with the rhythm of the night, creating harmonies that echo through the ages.',
    rating: 5
  },
  {
    name: 'Vocal Queen',
    role: 'Jazz Singer',
    avatar: '🎤',
    text: 'Every song is a journey through time, where the soul meets the microphone and magic happens.',
    rating: 5
  }
];

const stats = [
  { value: '1920s', label: 'Golden Era' },
  { value: '∞', label: 'Jazz Standards' },
  { value: '24/7', label: 'Music Lives' },
  { value: '🎷', label: 'Smooth Jazz' }
];

const services = [
  { icon: '🎷', title: 'Jazz Performances', desc: 'Live music shows' },
  { icon: '🎹', title: 'Piano Lessons', desc: 'Jazz piano training' },
  { icon: '🎤', title: 'Vocal Coaching', desc: 'Jazz singing lessons' },
  { icon: '🥁', title: 'Drum Workshops', desc: 'Rhythm training' }
];

export default function HomePageTheme177() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [saxophoneFlow, setSaxophoneFlow] = useState(0);
  const [pianoKeys, setPianoKeys] = useState(0);
  const [microphoneGlow, setMicrophoneGlow] = useState(0);
  const [drumBeat, setDrumBeat] = useState(0);
  const [smokeRise, setSmokeRise] = useState(0);

  useEffect(() => {
    // Saxophone flow animation
    const saxInterval = setInterval(() => {
      setSaxophoneFlow(prev => (prev + 1) % 100);
    }, 100);

    // Piano keys animation
    const pianoInterval = setInterval(() => {
      setPianoKeys(prev => (prev + 1) % 100);
    }, 150);

    // Microphone glow animation
    const micInterval = setInterval(() => {
      setMicrophoneGlow(prev => (prev + 1) % 100);
    }, 200);

    // Drum beat animation
    const drumInterval = setInterval(() => {
      setDrumBeat(prev => (prev + 1) % 100);
    }, 300);

    // Smoke rise effect
    const smokeInterval = setInterval(() => {
      setSmokeRise(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(saxInterval);
      clearInterval(pianoInterval);
      clearInterval(micInterval);
      clearInterval(drumInterval);
      clearInterval(smokeInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-orange-800 to-red-900 font-serif relative overflow-hidden">
      {/* Vintage Jazz Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-amber-900/90 via-orange-800/70 to-red-900/80">
        {/* Jazz club landscape with instruments and smoke */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Vintage jazz gradients */}
            <defs>
              <linearGradient id="stageGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#92400E" />
                <stop offset="50%" stopColor="#78350F" />
                <stop offset="100%" stopColor="#451A03" />
              </linearGradient>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="brassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="smokeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6B7280" />
                <stop offset="50%" stopColor="#9CA3AF" />
                <stop offset="100%" stopColor="#D1D5DB" />
              </linearGradient>
              <linearGradient id="spotlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <radialGradient id="spotlightGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Stage background */}
            <rect x="0" y="400" width="1200" height="400" fill="url(#stageGradient)" />
            
            {/* Stage curtains */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <rect
                  x={i * 150}
                  y="200"
                  width="150"
                  height="300"
                  fill="url(#goldGradient)"
                  opacity="0.8"
                  stroke="url(#goldGradient)"
                  strokeWidth="2"
                />
                {/* Curtain folds */}
                {Array.from({ length: 5 }, (_, j) => (
                  <path
                    key={j}
                    d={`M${i * 150 + j * 30} 200 Q${i * 150 + j * 30 + 15} ${220 + j * 20} ${i * 150 + j * 30 + 30} ${240 + j * 20}`}
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="3"
                    opacity="0.6"
                  />
                ))}
              </g>
            ))}
            
            {/* Saxophone */}
            <g>
              {/* Saxophone body */}
              <path
                d={`M200 300 Q${250 + Math.sin(saxophoneFlow * 0.02) * 20} ${280 + Math.sin(saxophoneFlow * 0.03) * 15} ${300 + Math.sin(saxophoneFlow * 0.01) * 25} ${320 + Math.sin(saxophoneFlow * 0.02) * 20} Q${350 + Math.sin(saxophoneFlow * 0.03) * 30} ${340 + Math.sin(saxophoneFlow * 0.01) * 25} ${400 + Math.sin(saxophoneFlow * 0.02) * 35} ${300 + Math.sin(saxophoneFlow * 0.03) * 30}`}
                fill="url(#brassGradient)"
                opacity="0.9"
                stroke="url(#goldGradient)"
                strokeWidth="3"
              />
              {/* Saxophone keys */}
              {Array.from({ length: 6 }, (_, i) => (
                <circle
                  key={i}
                  cx={220 + i * 30 + Math.sin(saxophoneFlow * 0.01 + i) * 10}
                  cy={280 + i * 15 + Math.sin(saxophoneFlow * 0.02 + i) * 8}
                  r="8"
                  fill="url(#goldGradient)"
                  opacity="0.8"
                  stroke="url(#goldGradient)"
                  strokeWidth="2"
                />
              ))}
              {/* Saxophone bell */}
              <ellipse
                cx="420"
                cy="280"
                rx="25"
                ry="15"
                fill="url(#brassGradient)"
                opacity="0.9"
                stroke="url(#goldGradient)"
                strokeWidth="2"
              />
            </g>
            
            {/* Piano */}
            <g>
              {/* Piano body */}
              <rect
                x="600"
                y="350"
                width="300"
                height="150"
                fill="url(#goldGradient)"
                opacity="0.9"
                stroke="url(#goldGradient)"
                strokeWidth="3"
              />
              {/* Piano keys */}
              {Array.from({ length: 20 }, (_, i) => (
                <rect
                  key={i}
                  x={610 + i * 14}
                  y="380"
                  width="12"
                  height="100"
                  fill={i % 7 === 0 ? "url(#goldGradient)" : "white"}
                  opacity="0.9"
                  stroke="black"
                  strokeWidth="1"
                />
              ))}
              {/* Piano legs */}
              <rect x="620" y="500" width="20" height="100" fill="url(#goldGradient)" opacity="0.8" />
              <rect x="860" y="500" width="20" height="100" fill="url(#goldGradient)" opacity="0.8" />
            </g>
            
            {/* Vintage Microphone */}
            <g>
              {/* Microphone stand */}
              <rect
                x="500"
                y="200"
                width="8"
                height="150"
                fill="url(#goldGradient)"
                opacity="0.8"
                stroke="url(#goldGradient)"
                strokeWidth="2"
              />
              {/* Microphone head */}
              <circle
                cx="504"
                cy="200"
                r="20"
                fill="url(#brassGradient)"
                opacity="0.9"
                stroke="url(#goldGradient)"
                strokeWidth="3"
              />
              {/* Microphone grill */}
              <circle
                cx="504"
                cy="200"
                r="15"
                fill="url(#goldGradient)"
                opacity="0.7"
                stroke="url(#goldGradient)"
                strokeWidth="1"
              />
              {/* Microphone glow */}
              <circle
                cx="504"
                cy="200"
                r="25"
                fill="url(#spotlightGlow)"
                opacity={0.3 + Math.sin(microphoneGlow * 0.02) * 0.2}
              />
            </g>
            
            {/* Drum Set */}
            <g>
              {/* Bass drum */}
              <ellipse
                cx="800"
                cy="450"
                rx="40"
                ry="30"
                fill="url(#brassGradient)"
                opacity="0.9"
                stroke="url(#goldGradient)"
                strokeWidth="3"
              />
              {/* Snare drum */}
              <ellipse
                cx="850"
                cy="420"
                rx="25"
                ry="15"
                fill="url(#brassGradient)"
                opacity="0.9"
                stroke="url(#goldGradient)"
                strokeWidth="2"
              />
              {/* Hi-hat */}
              <ellipse
                cx="750"
                cy="430"
                rx="20"
                ry="10"
                fill="url(#brassGradient)"
                opacity="0.8"
                stroke="url(#goldGradient)"
                strokeWidth="2"
              />
              {/* Drum sticks */}
              <rect
                x="845"
                y="400"
                width="4"
                height="40"
                fill="url(#goldGradient)"
                opacity="0.8"
                transform={`rotate(${drumBeat * 0.5} 847 420)`}
              />
              <rect
                x="745"
                y="410"
                width="4"
                height="35"
                fill="url(#goldGradient)"
                opacity="0.8"
                transform={`rotate(${-drumBeat * 0.3} 747 427.5)`}
              />
            </g>
            
            {/* Smoke effects */}
            {Array.from({ length: 15 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${100 + i * 80 + Math.sin(smokeRise * 0.01 + i) * 30} ${600 + (smokeRise * 0.5 + i * 20) % 200} Q${120 + i * 80 + Math.sin(smokeRise * 0.02 + i) * 25} ${580 + (smokeRise * 0.5 + i * 20) % 200} ${140 + i * 80 + Math.sin(smokeRise * 0.01 + i) * 35} ${560 + (smokeRise * 0.5 + i * 20) % 200} Q${160 + i * 80 + Math.sin(smokeRise * 0.03 + i) * 20} ${540 + (smokeRise * 0.5 + i * 20) % 200} ${180 + i * 80 + Math.sin(smokeRise * 0.02 + i) * 40} ${520 + (smokeRise * 0.5 + i * 20) % 200}`}
                  fill="none"
                  stroke="url(#smokeGradient)"
                  strokeWidth="3"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Spotlight */}
            <g>
              <ellipse
                cx="600"
                cy="100"
                rx="200"
                ry="50"
                fill="url(#spotlightGlow)"
                opacity="0.4"
              />
              {/* Spotlight beam */}
              <path
                d="M500 100 L400 400 L800 400 L700 100 Z"
                fill="url(#spotlightGlow)"
                opacity="0.2"
              />
            </g>
            
            {/* Musical notes */}
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                <ellipse
                  cx={150 + i * 90 + Math.sin(pianoKeys * 0.01 + i) * 20}
                  cy={150 + (pianoKeys * 0.5 + i * 15) % 200}
                  rx="8"
                  ry="4"
                  fill="url(#goldGradient)"
                  opacity="0.8"
                />
                <line
                  x1={158 + i * 90 + Math.sin(pianoKeys * 0.01 + i) * 20}
                  y1={150 + (pianoKeys * 0.5 + i * 15) % 200}
                  x2={158 + i * 90 + Math.sin(pianoKeys * 0.01 + i) * 20}
                  y2={130 + (pianoKeys * 0.5 + i * 15) % 200}
                  stroke="url(#goldGradient)"
                  strokeWidth="2"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Jazz club tables */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                <rect
                  x={50 + i * 250}
                  y="600"
                  width="100"
                  height="60"
                  fill="url(#goldGradient)"
                  opacity="0.8"
                  stroke="url(#goldGradient)"
                  strokeWidth="2"
                />
                {/* Table legs */}
                <rect x={70 + i * 250} y="660" width="8" height="80" fill="url(#goldGradient)" opacity="0.7" />
                <rect x={120 + i * 250} y="660" width="8" height="80" fill="url(#goldGradient)" opacity="0.7" />
              </g>
            ))}
            
            {/* Floating jazz elements */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={200 + i * 120 + Math.sin(saxophoneFlow * 0.01 + i) * 15}
                  cy={100 + (saxophoneFlow * 0.5 + i * 20) % 150}
                  r="3"
                  fill="url(#goldGradient)"
                  opacity="0.7"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Floating smoke particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-60"
              style={{
                left: `${10 + i * 3}%`,
                top: `${60 + Math.sin(smokeRise * 0.01 + i) * 40}%`,
                animation: `float ${4 + i * 0.1}s ease-in-out infinite`
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
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Vintage Jazz
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Step into the golden age of jazz where smooth melodies meet soulful rhythms, 
              and every note tells a story of passion and timeless elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Listen Now
              </button>
                <button className="px-8 py-4 border-2 border-amber-500 text-amber-300 font-semibold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300">
                Book Performance
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Jazz Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-800/80 to-orange-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/40 hover:border-amber-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-amber-200 leading-relaxed">
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
                  <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-amber-200 font-medium">
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
              Jazz Legends
            </h2>
            <div className="bg-gradient-to-br from-amber-800/80 to-orange-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/40">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-amber-200 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-white font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-amber-300">
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
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Jazz Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-900/80 to-amber-800/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/40 hover:border-amber-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">🎷</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-amber-200 text-sm">
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
              Ready to Experience Jazz?
            </h2>
            <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
              Immerse yourself in the soulful world of vintage jazz where every melody 
              carries the weight of history and every performance is a masterpiece.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 text-white font-semibold rounded-full text-lg hover:from-amber-600 hover:via-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Book Your Seat
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