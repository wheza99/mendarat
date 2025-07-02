'use client';

import theme32Copy from '../copy';

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    category: "Artificial Intelligence",
    description: "Platform analytics berbasis AI yang mampu memproses big data dan memberikan insights real-time untuk decision making.",
    tech: ["TensorFlow", "Python", "React", "AWS"],
    image: "🧠"
  },
  {
    title: "Blockchain Supply Chain",
    category: "Blockchain",
    description: "Sistem supply chain terdesentralisasi menggunakan smart contracts untuk transparansi dan traceability penuh.",
    tech: ["Solidity", "Web3", "Ethereum", "IPFS"],
    image: "⛓️"
  },
  {
    title: "Quantum Encryption System",
    category: "Quantum Computing",
    description: "Sistem enkripsi kuantum untuk keamanan data tingkat militer dengan quantum key distribution.",
    tech: ["Qiskit", "Python", "Quantum Circuits", "IBM Quantum"],
    image: "🔐"
  },
  {
    title: "Neural Network Optimizer",
    category: "Machine Learning",
    description: "Tool optimasi neural network yang menggunakan genetic algorithms untuk hyperparameter tuning otomatis.",
    tech: ["PyTorch", "CUDA", "Docker", "Kubernetes"],
    image: "🚀"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-6">
            {theme32Copy.projects.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            {theme32Copy.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl">{project.image}</div>
                    <div className="text-xs text-cyan-400 font-mono bg-cyan-400/10 px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 