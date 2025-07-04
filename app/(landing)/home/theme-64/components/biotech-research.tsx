import React, { useState } from 'react';

export default function BiotechResearch() {
  const [activeTab, setActiveTab] = useState(0);

  const researchAreas = [
    {
      id: 1,
      title: "Quantum Genetics",
      description: "Revolutionary gene editing with quantum precision",
      projects: 47,
      breakthroughs: 12,
      funding: "$2.8B",
      completion: 73,
      color: "emerald",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Regenerative Medicine",
      description: "Quantum-enhanced tissue engineering and organ regeneration",
      projects: 34,
      breakthroughs: 8,
      funding: "$1.9B",
      completion: 68,
      color: "teal",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Neural Enhancement",
      description: "Quantum cognitive augmentation and neural interfaces",
      projects: 23,
      breakthroughs: 15,
      funding: "$3.2B",
      completion: 81,
      color: "cyan",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Longevity Research",
      description: "Quantum biology approaches to life extension",
      projects: 19,
      breakthroughs: 6,
      funding: "$4.1B",
      completion: 45,
      color: "blue",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Synthetic Biology",
      description: "Designing artificial biological systems with quantum properties",
      projects: 52,
      breakthroughs: 9,
      funding: "$2.5B",
      completion: 62,
      color: "indigo",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Quantum Immunology",
      description: "Next-generation immune system enhancement",
      projects: 31,
      breakthroughs: 11,
      funding: "$1.7B",
      completion: 58,
      color: "purple",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const achievements = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Pioneer Award",
      description: "First lab to achieve quantum-cellular integration",
      year: "2024"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Breakthrough Discovery",
      description: "Quantum entangled DNA repair mechanism",
      year: "2024"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Innovation Grant",
      description: "$10B funding for quantum biology research",
      year: "2024"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: "Global Recognition",
      description: "World leader in quantum biotechnology",
      year: "2024"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      emerald: {
        bg: 'from-emerald-900/50 to-emerald-950/30',
        border: 'border-emerald-500/30',
        text: 'text-emerald-400',
        accent: 'text-emerald-300',
        button: 'from-emerald-500 to-emerald-600'
      },
      teal: {
        bg: 'from-teal-900/50 to-teal-950/30',
        border: 'border-teal-500/30',
        text: 'text-teal-400',
        accent: 'text-teal-300',
        button: 'from-teal-500 to-teal-600'
      },
      cyan: {
        bg: 'from-cyan-900/50 to-cyan-950/30',
        border: 'border-cyan-500/30',
        text: 'text-cyan-400',
        accent: 'text-cyan-300',
        button: 'from-cyan-500 to-cyan-600'
      },
      blue: {
        bg: 'from-blue-900/50 to-blue-950/30',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        accent: 'text-blue-300',
        button: 'from-blue-500 to-blue-600'
      },
      indigo: {
        bg: 'from-indigo-900/50 to-indigo-950/30',
        border: 'border-indigo-500/30',
        text: 'text-indigo-400',
        accent: 'text-indigo-300',
        button: 'from-indigo-500 to-indigo-600'
      },
      purple: {
        bg: 'from-purple-900/50 to-purple-950/30',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        accent: 'text-purple-300',
        button: 'from-purple-500 to-purple-600'
      }
    };
    return colorMap[color];
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-radial from-emerald-500/5 to-transparent rounded-full animate-bio-pulse" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-radial from-teal-500/5 to-transparent rounded-full animate-bio-pulse-slow" />
        
        {/* Research Data Streams */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-bio-data-stream"
            style={{
              left: `${10 + i * 12}%`,
              top: '20%',
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bio-pulse" />
            <span className="text-emerald-300 font-medium">Advanced Research</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Pioneering the Future
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              of Biotechnology
            </span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Leading breakthrough research at the intersection of quantum physics and biology, 
            developing technologies that will reshape medicine and enhance human capabilities.
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {researchAreas.map((area, index) => {
            const colors = getColorClasses(area.color);
            
            return (
              <div
                key={area.id}
                className={`group bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl p-8 hover:scale-105 transition-all duration-500 animate-bio-fade-in cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveTab(index)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                    {area.icon}
                  </div>
                  <div className={`text-sm font-bold ${colors.accent} px-3 py-1 bg-gradient-to-r ${colors.button} rounded-full text-white`}>
                    {area.projects} Projects
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold ${colors.text} mb-2 group-hover:${colors.text.replace('400', '300')} transition-colors`}>
                    {area.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    {area.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">Breakthroughs</span>
                    <span className={`text-sm font-bold ${colors.text}`}>{area.breakthroughs}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">Funding</span>
                    <span className={`text-sm font-bold ${colors.text}`}>{area.funding}</span>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-slate-400">Progress</span>
                      <span className={`text-sm font-bold ${colors.text}`}>{area.completion}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${colors.button} transition-all duration-1000 animate-bio-progress`}
                        style={{ width: `${area.completion}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/50 backdrop-blur-sm border border-slate-500/30 rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center">Research Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl animate-bio-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-emerald-400 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-200 mb-2">{achievement.title}</h4>
                <p className="text-sm text-slate-400 mb-2">{achievement.description}</p>
                <div className="text-xs text-emerald-300 font-medium">{achievement.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-emerald-900/50 to-emerald-950/30 backdrop-blur-sm border border-emerald-500/20 rounded-2xl">
            <div className="text-3xl font-bold text-emerald-400 mb-2 animate-bio-count">206</div>
            <div className="text-sm text-emerald-300">Active Projects</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-teal-900/50 to-teal-950/30 backdrop-blur-sm border border-teal-500/20 rounded-2xl">
            <div className="text-3xl font-bold text-teal-400 mb-2 animate-bio-count">61</div>
            <div className="text-sm text-teal-300">Breakthroughs</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-cyan-900/50 to-cyan-950/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl">
            <div className="text-3xl font-bold text-cyan-400 mb-2 animate-bio-count">$16.2B</div>
            <div className="text-sm text-cyan-300">Total Funding</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-900/50 to-blue-950/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl">
            <div className="text-3xl font-bold text-blue-400 mb-2 animate-bio-count">847</div>
            <div className="text-sm text-blue-300">Research Team</div>
          </div>
        </div>
      </div>
    </section>
  );
} 