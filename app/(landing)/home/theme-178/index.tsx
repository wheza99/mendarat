import React, { useState, useEffect } from 'react';

const features = [
  {
    icon: '💎',
    title: 'Holographic Displays',
    description: 'Advanced 3D projections',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: '🌐',
    title: 'Neural Networks',
    description: 'AI-powered systems',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: '⚡',
    title: 'Quantum Computing',
    description: 'Next-gen processing',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    icon: '🚀',
    title: 'Space Technology',
    description: 'Interstellar innovation',
    color: 'from-purple-500 to-pink-600'
  }
];

const testimonials = [
  {
    name: 'Dr. Hologram',
    role: 'Quantum Scientist',
    avatar: '💎',
    text: 'The future is now with holographic technology that transcends the boundaries of reality and creates immersive digital experiences.',
    rating: 5
  },
  {
    name: 'AI Architect',
    role: 'Neural Network Designer',
    avatar: '🌐',
    text: 'Our advanced AI systems process information at quantum speeds, revolutionizing how we interact with technology.',
    rating: 5
  },
  {
    name: 'Space Pioneer',
    role: 'Interstellar Engineer',
    avatar: '🚀',
    text: 'We\'re pushing the boundaries of human achievement with technology that reaches beyond our world into the cosmos.',
    rating: 5
  }
];

const stats = [
  { value: '∞', label: 'Processing Power' },
  { value: '99.9%', label: 'AI Accuracy' },
  { value: '24/7', label: 'System Online' },
  { value: '💎', label: 'Holographic' }
];

const services = [
  { icon: '💎', title: 'Holographic Systems', desc: '3D projection tech' },
  { icon: '🌐', title: 'AI Development', desc: 'Neural network design' },
  { icon: '⚡', title: 'Quantum Solutions', desc: 'Advanced computing' },
  { icon: '🚀', title: 'Space Tech', desc: 'Interstellar innovation' }
];

export default function HomePageTheme178() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hologramPulse, setHologramPulse] = useState(0);
  const [dataFlow, setDataFlow] = useState(0);
  const [quantumSpin, setQuantumSpin] = useState(0);
  const [neuralGlow, setNeuralGlow] = useState(0);
  const [spaceDrift, setSpaceDrift] = useState(0);

  useEffect(() => {
    // Hologram pulse animation
    const hologramInterval = setInterval(() => {
      setHologramPulse(prev => (prev + 1) % 100);
    }, 100);

    // Data flow animation
    const dataInterval = setInterval(() => {
      setDataFlow(prev => (prev + 1) % 100);
    }, 150);

    // Quantum spin animation
    const quantumInterval = setInterval(() => {
      setQuantumSpin(prev => (prev + 1) % 100);
    }, 200);

    // Neural glow animation
    const neuralInterval = setInterval(() => {
      setNeuralGlow(prev => (prev + 1) % 100);
    }, 300);

    // Space drift effect
    const spaceInterval = setInterval(() => {
      setSpaceDrift(prev => (prev + 1) % 100);
    }, 400);

    return () => {
      clearInterval(hologramInterval);
      clearInterval(dataInterval);
      clearInterval(quantumInterval);
      clearInterval(neuralInterval);
      clearInterval(spaceInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-cyan-900 font-mono relative overflow-hidden">
      {/* Holographic Future Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/90 via-blue-900/70 to-cyan-900/80">
        {/* Futuristic landscape with holograms and data streams */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Holographic gradients */}
            <defs>
              <linearGradient id="hologramGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="spaceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#000000" />
                <stop offset="50%" stopColor="#1E3A8A" />
                <stop offset="100%" stopColor="#0C4A6E" />
              </linearGradient>
              <linearGradient id="hologramGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#0891B2" />
                <stop offset="100%" stopColor="#0E7490" />
              </linearGradient>
              <radialGradient id="hologramRadial" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0891B2" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0E7490" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Space background */}
            <rect x="0" y="0" width="1200" height="800" fill="url(#spaceGradient)" />
            
            {/* Holographic grid */}
            {Array.from({ length: 25 }, (_, i) => (
              <g key={i}>
                <line
                  x1={i * 50}
                  y1="0"
                  x2={i * 50}
                  y2="800"
                  stroke="url(#hologramGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <line
                  x1="0"
                  y1={i * 32}
                  x2="1200"
                  y2={i * 32}
                  stroke="url(#hologramGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </g>
            ))}
            
            {/* Central holographic display */}
            <g>
              {/* Holographic sphere */}
              <circle
                cx="600"
                cy="400"
                r="120"
                fill="none"
                stroke="url(#hologramGradient)"
                strokeWidth="3"
                opacity="0.8"
              />
              <circle
                cx="600"
                cy="400"
                r="100"
                fill="none"
                stroke="url(#neuralGradient)"
                strokeWidth="2"
                opacity="0.6"
              />
              <circle
                cx="600"
                cy="400"
                r="80"
                fill="none"
                stroke="url(#quantumGradient)"
                strokeWidth="1"
                opacity="0.4"
              />
              
              {/* Holographic data points */}
              {Array.from({ length: 12 }, (_, i) => (
                <g key={i}>
                  <circle
                    cx={600 + Math.cos((i * 30 + hologramPulse * 0.5) * Math.PI / 180) * 100}
                    cy={400 + Math.sin((i * 30 + hologramPulse * 0.5) * Math.PI / 180) * 100}
                    r="3"
                    fill="url(#hologramGradient)"
                    opacity="0.8"
                  />
                  <line
                    x1={600 + Math.cos((i * 30 + hologramPulse * 0.5) * Math.PI / 180) * 100}
                    y1={400 + Math.sin((i * 30 + hologramPulse * 0.5) * Math.PI / 180) * 100}
                    x2={600 + Math.cos(((i + 1) * 30 + hologramPulse * 0.5) * Math.PI / 180) * 100}
                    y2={400 + Math.sin(((i + 1) * 30 + hologramPulse * 0.5) * Math.PI / 180) * 100}
                    stroke="url(#hologramGradient)"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                </g>
              ))}
              
              {/* Central holographic core */}
              <circle
                cx="600"
                cy="400"
                r="20"
                fill="url(#hologramRadial)"
                opacity="0.9"
              />
            </g>
            
            {/* Floating data streams */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M${100 + i * 150} ${100 + (dataFlow * 0.5 + i * 20) % 600} Q${150 + i * 150} ${80 + (dataFlow * 0.5 + i * 20) % 600} ${200 + i * 150} ${120 + (dataFlow * 0.5 + i * 20) % 600} Q${250 + i * 150} ${160 + (dataFlow * 0.5 + i * 20) % 600} ${300 + i * 150} ${140 + (dataFlow * 0.5 + i * 20) % 600}`}
                  fill="none"
                  stroke="url(#neuralGradient)"
                  strokeWidth="2"
                  opacity="0.7"
                />
                {/* Data particles */}
                {Array.from({ length: 5 }, (_, j) => (
                  <circle
                    key={j}
                    cx={120 + i * 150 + j * 40 + Math.sin(dataFlow * 0.01 + i + j) * 10}
                    cy={110 + (dataFlow * 0.5 + i * 20) % 600 + j * 10 + Math.cos(dataFlow * 0.02 + i + j) * 8}
                    r="2"
                    fill="url(#hologramGradient)"
                    opacity="0.8"
                  />
                ))}
              </g>
            ))}
            
            {/* Neural network nodes */}
            {Array.from({ length: 15 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={200 + i * 60 + Math.sin(neuralGlow * 0.01 + i) * 20}
                  cy={150 + (neuralGlow * 0.5 + i * 30) % 500}
                  r="8"
                  fill="url(#neuralGradient)"
                  opacity="0.8"
                  stroke="url(#hologramGradient)"
                  strokeWidth="2"
                />
                {/* Neural connections */}
                {Array.from({ length: 3 }, (_, j) => {
                  const targetIndex = (i + j + 1) % 15;
                  return (
                    <line
                      key={j}
                      x1={200 + i * 60 + Math.sin(neuralGlow * 0.01 + i) * 20}
                      y1={150 + (neuralGlow * 0.5 + i * 30) % 500}
                      x2={200 + targetIndex * 60 + Math.sin(neuralGlow * 0.01 + targetIndex) * 20}
                      y2={150 + (neuralGlow * 0.5 + targetIndex * 30) % 500}
                      stroke="url(#neuralGradient)"
                      strokeWidth="1"
                      opacity="0.5"
                    />
                  );
                })}
              </g>
            ))}
            
            {/* Quantum computing elements */}
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i}>
                {/* Quantum qubits */}
                <circle
                  cx={800 + i * 80 + Math.sin(quantumSpin * 0.02 + i) * 15}
                  cy={300 + (quantumSpin * 0.5 + i * 40) % 400}
                  r="12"
                  fill="url(#quantumGradient)"
                  opacity="0.9"
                  stroke="url(#hologramGradient)"
                  strokeWidth="2"
                />
                {/* Quantum entanglement lines */}
                {Array.from({ length: 2 }, (_, j) => {
                  const targetIndex = (i + j + 1) % 6;
                  return (
                    <line
                      key={j}
                      x1={800 + i * 80 + Math.sin(quantumSpin * 0.02 + i) * 15}
                      y1={300 + (quantumSpin * 0.5 + i * 40) % 400}
                      x2={800 + targetIndex * 80 + Math.sin(quantumSpin * 0.02 + targetIndex) * 15}
                      y2={300 + (quantumSpin * 0.5 + targetIndex * 40) % 400}
                      stroke="url(#quantumGradient)"
                      strokeWidth="2"
                      opacity="0.7"
                      strokeDasharray="5,5"
                    />
                  );
                })}
              </g>
            ))}
            
            {/* Floating holographic panels */}
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i}>
                <rect
                  x={100 + i * 250}
                  y={600 + Math.sin(spaceDrift * 0.01 + i) * 20}
                  width="120"
                  height="80"
                  fill="none"
                  stroke="url(#hologramGradient)"
                  strokeWidth="2"
                  opacity="0.8"
                />
                {/* Panel content */}
                <rect
                  x={110 + i * 250}
                  y={610 + Math.sin(spaceDrift * 0.01 + i) * 20}
                  width="100"
                  height="60"
                  fill="url(#hologramGlow)"
                  opacity="0.3"
                />
                {/* Data bars */}
                {Array.from({ length: 5 }, (_, j) => (
                  <rect
                    key={j}
                    x={115 + i * 250 + j * 18}
                    y={620 + Math.sin(spaceDrift * 0.01 + i) * 20}
                    width="12"
                    height={20 + Math.sin(spaceDrift * 0.02 + i + j) * 15}
                    fill="url(#hologramGradient)"
                    opacity="0.8"
                  />
                ))}
              </g>
            ))}
            
            {/* Space debris and stars */}
            {Array.from({ length: 20 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={50 + i * 60 + Math.sin(spaceDrift * 0.01 + i) * 30}
                  cy={50 + (spaceDrift * 0.5 + i * 25) % 300}
                  r="1"
                  fill="url(#hologramGradient)"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Energy beams */}
            {Array.from({ length: 3 }, (_, i) => (
              <g key={i}>
                <line
                  x1="0"
                  y1={200 + i * 200}
                  x2="1200"
                  y2={220 + i * 200}
                  stroke="url(#hologramGradient)"
                  strokeWidth="1"
                  opacity="0.4"
                  strokeDasharray="20,10"
                />
              </g>
            ))}
            
            {/* Floating tech symbols */}
            {Array.from({ length: 10 }, (_, i) => (
              <g key={i}>
                <text
                  x={100 + i * 100 + Math.sin(spaceDrift * 0.01 + i) * 20}
                  y={100 + (spaceDrift * 0.5 + i * 30) % 200}
                  fill="url(#hologramGradient)"
                  fontSize="12"
                  opacity="0.6"
                  fontFamily="monospace"
                >
                  {['⚡', '💎', '🌐', '🚀', '⚛️', '🔮', '💻', '🔬', '⚙️', '🎯'][i]}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Floating holographic particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${5 + i * 3}%`,
                top: `${20 + Math.sin(spaceDrift * 0.01 + i) * 60}%`,
                animation: `hologramFloat ${3 + i * 0.1}s ease-in-out infinite`
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
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Holographic Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Step into the future where holographic technology meets quantum computing, 
              creating immersive experiences that transcend the boundaries of reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Experience Future
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Future Technology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-900/80 to-cyan-900/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/40 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105"
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
              Future Pioneers
            </h2>
            <div className="bg-gradient-to-br from-blue-900/80 to-cyan-900/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/40">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-xl md:text-2xl text-cyan-200 mb-6 italic">
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
                    <span key={i} className="text-cyan-500 text-xl">⭐</span>
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
                      ? 'bg-cyan-500 scale-125'
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
              Future Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-900/80 to-blue-900/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/40 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-3xl mb-4">💎</div>
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
              Ready for the Future?
            </h2>
            <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto">
              Experience the cutting-edge technology that will shape tomorrow's world, 
              where holographic displays and quantum computing redefine what's possible.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Explore Technology
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes hologramFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
} 