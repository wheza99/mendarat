"use client";

import { useState, useEffect, useRef } from "react";

interface StatItemProps {
  icon: string;
  value: number;
  label: string;
  suffix?: string;
  color: string;
  delay?: number;
}

function StatItem({ icon, value, label, suffix = "", color, delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className={`group relative bg-black/80 border-2 border-${color} rounded-lg p-8 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-${color}/30`}
    >
      {/* Pixel Corner Decorations */}
      <div className={`absolute -top-2 -left-2 w-4 h-4 bg-${color} animate-ping`}></div>
      <div className={`absolute -top-2 -right-2 w-4 h-4 bg-pink-400 animate-pulse`}></div>
      <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 animate-bounce`}></div>
      <div className={`absolute -bottom-2 -right-2 w-4 h-4 bg-cyan-400 animate-ping`}></div>

      {/* Gaming Icon */}
      <div className="text-6xl mb-4 text-center animate-bounce">
        {icon}
      </div>

      {/* Animated Counter */}
      <div className="text-center mb-4">
        <div className={`text-4xl md:text-5xl font-bold font-mono text-${color} mb-2 tracking-wider`}>
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-gray-300 text-lg font-mono uppercase tracking-widest">
          {label}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-${color} to-pink-400 transition-all duration-2000 ease-out`}
          style={{
            width: isVisible ? '100%' : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      
      {/* Glitch Effect Text */}
      <div className={`absolute top-4 right-4 text-xs font-mono text-${color} opacity-0 group-hover:opacity-100 animate-pulse`}>
        LOADING...
      </div>
    </div>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: "🎮",
      value: 500,
      label: "Games Completed",
      suffix: "+",
      color: "cyan-400",
      delay: 0
    },
    {
      icon: "👾",
      value: 250,
      label: "Boss Defeated",
      suffix: "+",
      color: "pink-400",
      delay: 200
    },
    {
      icon: "🏆",
      value: 98,
      label: "Win Rate",
      suffix: "%",
      color: "yellow-400",
      delay: 400
    },
    {
      icon: "⭐",
      value: 999,
      label: "High Score",
      suffix: "K",
      color: "green-400",
      delay: 600
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Gaming Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating Pixels */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 animate-float ${
              i % 4 === 0 ? 'bg-cyan-400' :
              i % 4 === 1 ? 'bg-pink-400' :
              i % 4 === 2 ? 'bg-yellow-400' : 'bg-green-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              GAME STATS
            </h2>
            {/* Pixel Decorations */}
            <div className="absolute -top-4 -left-4 w-6 h-6 bg-cyan-400 animate-ping"></div>
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-pink-400 animate-pulse"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-yellow-400 animate-bounce"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Check out our legendary achievements in the digital realm. 
            Every pixel counts in our quest for digital excellence!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              color={stat.color}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Bottom Gaming Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-black/80 border-2 border-cyan-400 rounded-full px-8 py-4 font-mono text-cyan-400">
            <span className="animate-pulse mr-3">🎯</span>
            <span className="text-lg font-bold">ACHIEVEMENT UNLOCKED: DIGITAL MASTERY</span>
            <span className="animate-pulse ml-3">🎯</span>
          </div>
        </div>
      </div>

      {/* Retro Grid Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </section>
  );
} 