"use client";

import { useState } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  level: number;
  xp: number;
}

function ServiceCard({ icon, title, description, features, color, level, xp }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`group relative bg-black/80 border-2 border-${color} rounded-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-${color}/30 cursor-pointer ${
        isSelected ? 'ring-4 ring-pink-400' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsSelected(!isSelected)}
    >
      {/* Gaming HUD Elements */}
      <div className="absolute top-2 left-2 right-2 flex justify-between items-center">
        <div className={`text-xs font-mono text-${color} bg-black/60 px-2 py-1 rounded`}>
          LVL {level}
        </div>
        <div className="text-xs font-mono text-yellow-400 bg-black/60 px-2 py-1 rounded">
          {xp} XP
        </div>
      </div>

      {/* Corner Pixel Decorations */}
      <div className={`absolute -top-1 -left-1 w-3 h-3 bg-${color} ${isHovered ? 'animate-ping' : ''}`}></div>
      <div className={`absolute -top-1 -right-1 w-3 h-3 bg-pink-400 ${isHovered ? 'animate-pulse' : ''}`}></div>
      <div className={`absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-400 ${isHovered ? 'animate-bounce' : ''}`}></div>
      <div className={`absolute -bottom-1 -right-1 w-3 h-3 bg-cyan-400 ${isHovered ? 'animate-ping' : ''}`}></div>

      {/* Service Icon */}
      <div className="text-center mb-6 mt-8">
        <div className={`text-6xl mb-4 ${isHovered ? 'animate-bounce' : ''}`}>
          {icon}
        </div>
        <h3 className={`text-2xl font-bold font-mono text-${color} mb-3 uppercase tracking-wider`}>
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-center mb-6 font-mono leading-relaxed">
        {description}
      </p>

      {/* Features List */}
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center text-sm font-mono text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <span className={`text-${color} mr-3 animate-pulse`}>▶</span>
            {feature}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
          <span>POWER LEVEL</span>
          <span>MAX</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-${color} to-pink-400 transition-all duration-1000 ease-out`}
            style={{
              width: isHovered ? '100%' : '60%'
            }}
          ></div>
        </div>
      </div>

      {/* Action Button */}
      <button
        className={`w-full py-3 border-2 border-${color} text-${color} font-mono font-bold uppercase tracking-wider transition-all duration-300 hover:bg-${color} hover:text-black relative overflow-hidden group`}
      >
        <span className="relative z-10">
          {isSelected ? '✓ SELECTED' : '🎮 SELECT POWER'}
        </span>
        <div className={`absolute inset-0 bg-${color} transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`}></div>
      </button>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none`}></div>

      {/* Selection Effect */}
      {isSelected && (
        <div className="absolute inset-0 border-4 border-pink-400 rounded-lg animate-pulse pointer-events-none"></div>
      )}
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: "🎮",
      title: "Player Interface",
      description: "Master the art of user experience with intuitive interfaces that feel like second nature to your users.",
      features: [
        "Responsive Game Design",
        "Interactive UI Elements",
        "User Journey Mapping",
        "Accessibility Optimization"
      ],
      color: "cyan-400",
      level: 25,
      xp: 2500
    },
    {
      icon: "⚡",
      title: "Power Boost",
      description: "Supercharge your digital performance with lightning-fast optimization and cutting-edge technology.",
      features: [
        "Performance Optimization",
        "Speed Enhancement",
        "Resource Management",
        "Cache Strategies"
      ],
      color: "yellow-400",
      level: 30,
      xp: 3200
    },
    {
      icon: "🛡️",
      title: "Defense System",
      description: "Protect your digital realm with fortress-level security and impenetrable defense mechanisms.",
      features: [
        "Security Auditing",
        "Data Protection",
        "Threat Detection",
        "Backup Systems"
      ],
      color: "green-400",
      level: 35,
      xp: 4100
    },
    {
      icon: "🚀",
      title: "Launch Sequence",
      description: "Deploy your projects to the digital universe with precision, reliability, and stellar performance.",
      features: [
        "Cloud Deployment",
        "CI/CD Pipeline",
        "Monitoring Setup",
        "Scaling Solutions"
      ],
      color: "pink-400",
      level: 40,
      xp: 5000
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Gaming Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Floating Gaming Icons */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            {['🎯', '⭐', '💎', '🏆', '🔥'][i % 5]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              POWER-UPS
            </h2>
            {/* Gaming HUD */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 border-2 border-cyan-400 rounded px-4 py-2">
              <span className="text-cyan-400 font-mono text-sm animate-pulse">SELECT YOUR ABILITIES</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono leading-relaxed">
            Choose your digital superpowers and unlock new levels of success. 
            Each service is a game-changing ability in your arsenal!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              color={service.color}
              level={service.level}
              xp={service.xp}
            />
          ))}
        </div>

        {/* Bottom Gaming Banner */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-black/80 border-2 border-gradient-to-r from-cyan-400 to-pink-400 rounded-lg p-6">
            <div className="flex items-center justify-center space-x-4 font-mono">
              <span className="text-cyan-400 animate-pulse">🎮</span>
              <span className="text-white text-lg font-bold">COMBO MULTIPLIER: 4X POWER</span>
              <span className="text-pink-400 animate-pulse">⚡</span>
            </div>
            <p className="text-gray-300 text-sm mt-2">
              Combine all services for maximum effectiveness!
            </p>
          </div>
        </div>
      </div>

      {/* Retro Grid Background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </section>
  );
} 