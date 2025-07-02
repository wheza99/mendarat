'use client';

import theme34Copy from '../copy';

const services = [
  {
    icon: "⚡",
    title: "NEURAL_NETWORKS",
    description: "Advanced AI systems and machine learning algorithms that adapt and evolve with your business needs.",
    tech: ["TensorFlow", "PyTorch", "Keras", "OpenAI"],
    status: "ACTIVE"
  },
  {
    icon: "🔗",
    title: "BLOCKCHAIN_CORE",
    description: "Decentralized solutions and smart contracts for secure, transparent digital transactions.",
    tech: ["Ethereum", "Solidity", "Web3", "IPFS"],
    status: "DEPLOYED"
  },
  {
    icon: "🚀",
    title: "QUANTUM_COMPUTE",
    description: "Next-generation computing solutions leveraging quantum algorithms for complex problem solving.",
    tech: ["Qiskit", "Cirq", "Q#", "IBM Quantum"],
    status: "BETA"
  },
  {
    icon: "🛡️",
    title: "CYBER_SECURITY",
    description: "Military-grade security protocols and penetration testing for ultimate digital protection.",
    tech: ["Kali Linux", "Metasploit", "Wireshark", "Nmap"],
    status: "SECURED"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Matrix */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Floating Code Snippets */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/20 font-mono text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {['function()', 'async/await', 'console.log', '=> {', '};', 'import', 'export'][Math.floor(Math.random() * 7)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 mb-6 tracking-wider">
            {theme34Copy.services.title}
          </h2>
          <div className="text-green-400 font-mono text-lg border-l-2 border-green-400 pl-4 inline-block">
            {theme34Copy.services.subtitle}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Main Card */}
              <div className="bg-black border-2 border-green-400 p-8 hover:border-cyan-400 transition-all duration-500 relative overflow-hidden">
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="bg-black border border-pink-400 px-3 py-1">
                      <span className="text-pink-400 font-mono text-xs">
                        {service.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-black font-mono text-green-400 group-hover:text-cyan-400 transition-colors duration-300 mb-4 tracking-wider">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <div className="text-green-400 font-mono text-sm">$ tech_stack --list</div>
                    <div className="grid grid-cols-2 gap-2">
                      {service.tech.map((tech, techIndex) => (
                        <div 
                          key={techIndex}
                          className="bg-gray-900 border border-gray-700 px-3 py-1 text-center hover:border-green-400 transition-colors duration-300"
                        >
                          <span className="text-gray-300 font-mono text-sm">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Terminal corners */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-green-400 group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-green-400 group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-green-400 group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-green-400 group-hover:border-cyan-400 transition-colors duration-300" />
              </div>

              {/* Outer glow */}
              <div className="absolute inset-0 border-2 border-green-400 group-hover:border-cyan-400 blur-sm opacity-20 group-hover:opacity-40 transition-all duration-500" />
              
              {/* Module number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-black border-2 border-pink-400 flex items-center justify-center">
                <span className="text-pink-400 font-mono text-sm font-bold">
                  M{String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 font-mono font-bold text-lg hover:bg-green-400 hover:text-black transition-all duration-300 uppercase tracking-wider">
            <span className="relative z-10">INITIALIZE_MODULES</span>
            <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Vertical neon lines */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400/30 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
    </section>
  );
} 