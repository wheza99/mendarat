import React from 'react';

export default function AuroraShowcase() {
  const projects = [
    {
      title: "Startup Platform",
      description: "Platform digital untuk startup dengan visual aurora.",
      tech: ["Next.js", "TypeScript", "TailwindCSS"],
      icon: "🚀"
    },
    {
      title: "Mobile Banking",
      description: "Aplikasi mobile banking modern dan aman.",
      tech: ["Flutter", "Firebase", "API"],
      icon: "🏦"
    },
    {
      title: "E-Commerce",
      description: "Toko online dengan animasi aurora dan checkout mudah.",
      tech: ["React", "Node.js", "Stripe"],
      icon: "🛒"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-400/10 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-aurora">
            Showcase Project
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Beberapa project terbaik yang pernah kami kerjakan dengan sentuhan aurora.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="aurora-card p-8 text-center"
            >
              <div className="text-5xl mb-4 animate-aurora-pulse">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 neon-text-indigo">
                {project.title}
              </h3>
              <p className="text-cyan-100 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gradient-to-r from-cyan-400/10 to-green-400/10 rounded text-xs text-cyan-200 border border-cyan-400/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 