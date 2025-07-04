'use client';

export default function Hero() {
  return (
    <section className="py-20 px-6 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto text-center">
        {/* Quantum Void Badge */}
        <div className="inline-flex items-center gap-3 bg-gray-800/40 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8 animate-void-fade-in">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-void-pulse"></div>
          <span className="text-gray-300 text-sm font-medium">TEMPLATE 57</span>
          <div className="w-px h-4 bg-gray-600"></div>
          <span className="text-purple-400 text-sm font-bold">QUANTUM VOID</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-void-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-gray-300 bg-clip-text text-transparent">
            QUANTUM
          </span>
          <br />
          <span className="bg-gradient-to-r from-gray-300 via-zinc-400 to-slate-500 bg-clip-text text-transparent">
            VOID
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 animate-void-fade-in" style={{ animationDelay: '0.4s' }}>
          Masuki dimensi digital yang tak terbatas dengan teknologi quantum void yang melampaui realitas
        </p>

        {/* Void Separators */}
        <div className="flex items-center justify-center gap-8 mb-16 animate-void-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
          <div className="w-4 h-4 bg-purple-500/30 rotate-45 animate-void-spin"></div>
          <div className="w-8 h-px bg-purple-500"></div>
          <div className="w-4 h-4 bg-gray-500/30 rotate-45 animate-void-spin" style={{ animationDelay: '1s' }}></div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>

        {/* Quantum Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-void-slide-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">-∞°K</div>
            <div className="text-gray-400 text-sm">Absolute Zero</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-violet-400 mb-2">∞ Qubits</div>
            <div className="text-gray-400 text-sm">Quantum Entanglement</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-gray-400 mb-2">Ø Reality</div>
            <div className="text-gray-400 text-sm">Void Dimensions</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-void-fade-in" style={{ animationDelay: '1s' }}>
          <button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
            ENTER THE VOID 🌌
          </button>
          <button className="border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-bold text-gray-300 hover:text-white transition-all duration-300">
            EXPLORE QUANTUM →
          </button>
        </div>
      </div>

      {/* Quantum Decorations */}
      <div className="absolute top-20 left-20 w-8 h-8 animate-void-crystal">
        <div className="w-full h-full bg-gradient-to-br from-purple-400/30 to-gray-500/30 transform rotate-45"></div>
      </div>
      <div className="absolute top-40 right-32 w-6 h-6 animate-void-crystal" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full bg-gradient-to-br from-violet-400/30 to-zinc-500/30 transform rotate-45"></div>
      </div>
      <div className="absolute bottom-32 left-40 w-10 h-10 animate-void-crystal" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full bg-gradient-to-br from-gray-400/30 to-slate-500/30 transform rotate-45"></div>
      </div>
      <div className="absolute bottom-20 right-20 w-4 h-4 animate-void-crystal" style={{ animationDelay: '3s' }}>
        <div className="w-full h-full bg-gradient-to-br from-indigo-400/30 to-gray-600/30 transform rotate-45"></div>
      </div>
    </section>
  );
} 