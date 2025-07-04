export default function Hero() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Arctic Synth Badge */}
        <div className="inline-flex items-center gap-3 bg-cyan-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3 mb-8 animate-arctic-float">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-arctic-spin">
            <span className="text-sm font-bold text-cyan-950">56</span>
          </div>
          <span className="text-cyan-300 font-medium">ARCTIC SYNTH</span>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-arctic-pulse"></div>
        </div>

        {/* Animated Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-arctic-fade-in">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent animate-arctic-gradient">
            ARCTIC
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-300 via-indigo-400 to-cyan-300 bg-clip-text text-transparent animate-arctic-gradient" style={{ animationDelay: '0.5s' }}>
            SYNTH
          </span>
        </h1>

        {/* Synthwave Separators */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-arctic-grow"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-arctic-pulse" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            <span className="text-cyan-300 text-lg">❄️</span>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-arctic-pulse" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animationDelay: '0.5s' }}></div>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-arctic-grow"></div>
        </div>

        {/* Arctic Description */}
        <p className="text-xl md:text-2xl text-cyan-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-arctic-fade-in" style={{ animationDelay: '1s' }}>
          Jelajahi dimensi digital yang membekukan waktu dengan teknologi synthwave Arctic yang menggabungkan 
          estetika retro-futuristik dengan kekuatan komputasi sub-zero.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 animate-arctic-grow shadow-lg shadow-cyan-500/25">
            ENTER ARCTIC ❄️
          </button>
          <button className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-cyan-950 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-arctic-grow" style={{ animationDelay: '0.3s' }}>
            SYNTH SCAN 🔮
          </button>
        </div>

        {/* Arctic Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-cyan-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 animate-arctic-slide-in">
            <div className="text-3xl font-bold text-cyan-300 mb-2">-273°C</div>
            <div className="text-cyan-400 font-medium mb-1">Core Temperature</div>
            <div className="text-cyan-600 text-sm">Absolute Zero</div>
          </div>
          <div className="bg-cyan-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 animate-arctic-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-blue-300 mb-2">🌌</div>
            <div className="text-blue-400 font-medium mb-1">Synth Waves</div>
            <div className="text-blue-600 text-sm">Infinite Flow</div>
          </div>
          <div className="bg-cyan-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 animate-arctic-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-indigo-300 mb-2">∞</div>
            <div className="text-indigo-400 font-medium mb-1">Ice Crystals</div>
            <div className="text-indigo-600 text-sm">Crystalline Matrix</div>
          </div>
        </div>

        {/* Synthwave Corner Decorations */}
        <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-cyan-400/30 animate-arctic-pulse"></div>
        <div className="absolute top-10 right-10 w-16 h-16 border-r-2 border-t-2 border-cyan-400/30 animate-arctic-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border-l-2 border-b-2 border-cyan-400/30 animate-arctic-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-cyan-400/30 animate-arctic-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Crystal Formation */}
        <div className="absolute top-1/4 left-8 w-8 h-8 animate-arctic-crystal">
          <div className="w-full h-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 transform rotate-45"></div>
        </div>
        <div className="absolute top-1/3 right-8 w-6 h-6 animate-arctic-crystal" style={{ animationDelay: '1s' }}>
          <div className="w-full h-full bg-gradient-to-br from-purple-400/30 to-indigo-500/30 transform rotate-45"></div>
        </div>
        <div className="absolute bottom-1/4 left-16 w-10 h-10 animate-arctic-crystal" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-cyan-500/30 transform rotate-45"></div>
        </div>
      </div>
    </section>
  );
} 