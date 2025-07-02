"use client";

import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  difficulty: string;
  status: string;
  score: number;
  achievements: string[];
  color: string;
}

function ProjectCard({ title, description, category, image, difficulty, status, score, achievements, color }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      case 'Expert': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (stat: string) => {
    switch (stat) {
      case 'Complete': return '✅';
      case 'In Progress': return '⏳';
      case 'Planning': return '📋';
      default: return '🎮';
    }
  };

  return (
    <div 
      className="relative h-96 w-full perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Side */}
        <div className={`absolute inset-0 w-full h-full backface-hidden bg-black/80 border-2 border-${color} rounded-lg overflow-hidden group hover:border-pink-400 transition-colors duration-300`}>
          {/* Gaming HUD Header */}
          <div className="absolute top-0 left-0 right-0 bg-black/90 border-b-2 border-cyan-400 p-3 z-10">
            <div className="flex justify-between items-center font-mono text-xs">
              <span className={`text-${color} font-bold`}>{category.toUpperCase()}</span>
              <span className="text-yellow-400">SCORE: {score.toLocaleString()}</span>
            </div>
          </div>

          {/* Project Image/Visual */}
          <div className="relative h-48 mt-12 bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center overflow-hidden">
            <div className="text-8xl opacity-60">{image}</div>
            
            {/* Pixel Overlay */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,0,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '10px 10px'
            }}></div>

            {/* Status Badge */}
            <div className="absolute top-4 right-4 bg-black/80 border border-cyan-400 rounded px-3 py-1">
              <span className="text-cyan-400 font-mono text-xs flex items-center">
                {getStatusIcon(status)} {status}
              </span>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6">
            <h3 className={`text-xl font-bold font-mono text-${color} mb-2 uppercase tracking-wider`}>
              {title}
            </h3>
            <p className="text-gray-300 text-sm font-mono leading-relaxed mb-4">
              {description}
            </p>

            {/* Difficulty & Progress */}
            <div className="flex justify-between items-center mb-4">
              <span className={`font-mono text-sm ${getDifficultyColor(difficulty)} font-bold`}>
                🎯 {difficulty}
              </span>
              <span className="text-xs font-mono text-gray-400">
                CLICK TO FLIP
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-${color} to-pink-400 transition-all duration-1000 ease-out`}
                style={{ width: status === 'Complete' ? '100%' : status === 'In Progress' ? '65%' : '20%' }}
              ></div>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className={`absolute -top-1 -left-1 w-4 h-4 bg-${color} animate-ping`}></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-yellow-400 animate-bounce"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-400 animate-ping"></div>
        </div>

        {/* Back Side */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black/90 border-2 border-pink-400 rounded-lg p-6`}>
          <div className="h-full flex flex-col">
            {/* Back Header */}
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold font-mono text-pink-400 mb-2">ACHIEVEMENTS</h4>
              <div className="w-full h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 rounded"></div>
            </div>

            {/* Achievements List */}
            <div className="flex-1 space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center bg-black/60 border border-cyan-400 rounded p-3 transform transition-all duration-300 hover:scale-105"
                >
                  <span className="text-yellow-400 text-xl mr-3">🏆</span>
                  <span className="text-gray-300 font-mono text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Back to Front Button */}
            <button className="mt-4 w-full py-3 border-2 border-cyan-400 text-cyan-400 font-mono font-bold uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-all duration-300">
              🎮 BACK TO GAME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            GAME PORTFOLIO
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono leading-relaxed">
            Explore our legendary quests and epic victories in the digital realm!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Neon Runner", category: "Web Games", icon: "🏃‍♂️", color: "cyan-400" },
            { title: "Pixel Shop", category: "E-commerce", icon: "🛒", color: "pink-400" },
            { title: "Space Trader", category: "Mobile Apps", icon: "🚀", color: "yellow-400" },
            { title: "Cyber Academy", category: "Platforms", icon: "🎓", color: "green-400" },
            { title: "Retro Arcade", category: "Web Games", icon: "🕹️", color: "purple-400" },
            { title: "Digital Wallet", category: "Mobile Apps", icon: "💰", color: "cyan-400" }
          ].map((project, index) => (
            <div key={index} className={`bg-black/80 border-2 border-${project.color} rounded-lg p-6 hover:border-pink-400 transition-colors duration-300`}>
              <div className="text-6xl mb-4 text-center">{project.icon}</div>
              <h3 className={`text-xl font-bold font-mono text-${project.color} mb-2 uppercase text-center`}>
                {project.title}
              </h3>
              <p className="text-gray-300 text-center font-mono text-sm">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 