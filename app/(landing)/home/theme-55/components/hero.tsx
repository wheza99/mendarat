export default function Hero() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Mystic Forest Badge */}
        <div className="inline-flex items-center gap-3 bg-emerald-900/40 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-8 animate-mystic-float">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center animate-mystic-spin">
            <span className="text-sm font-bold text-emerald-950">55</span>
          </div>
          <span className="text-emerald-300 font-medium">MYSTIC FOREST</span>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-mystic-pulse"></div>
        </div>

        {/* Animated Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-mystic-fade-in">
          <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-teal-300 bg-clip-text text-transparent animate-mystic-gradient">
            MYSTIC
          </span>
          <br />
          <span className="bg-gradient-to-r from-lime-300 via-emerald-400 to-green-300 bg-clip-text text-transparent animate-mystic-gradient" style={{ animationDelay: '0.5s' }}>
            FOREST
          </span>
        </h1>

        {/* Enchanted Separators */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-mystic-grow"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-mystic-pulse"></div>
            <span className="text-emerald-300 text-lg">🌿</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-mystic-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-mystic-grow"></div>
        </div>

        {/* Mystical Description */}
        <p className="text-xl md:text-2xl text-emerald-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-mystic-fade-in" style={{ animationDelay: '1s' }}>
          Masuki dunia mistis di mana teknologi berpadu dengan kearifan alam, 
          menciptakan harmoni sempurna antara inovasi dan keajaiban hutan enchanted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 animate-mystic-grow shadow-lg shadow-emerald-500/25">
            ENTER FOREST 🌲
          </button>
          <button className="border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-emerald-950 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-mystic-grow" style={{ animationDelay: '0.3s' }}>
            EXPLORE MAGIC ✨
          </button>
        </div>

        {/* Forest Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 animate-mystic-slide-in">
            <div className="text-3xl font-bold text-emerald-300 mb-2">∞</div>
            <div className="text-emerald-400 font-medium mb-1">Nature Energy</div>
            <div className="text-emerald-600 text-sm">Infinite Flow</div>
          </div>
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 animate-mystic-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-green-300 mb-2">🌿</div>
            <div className="text-green-400 font-medium mb-1">Forest Wisdom</div>
            <div className="text-green-600 text-sm">Ancient Knowledge</div>
          </div>
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 animate-mystic-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-teal-300 mb-2">✨</div>
            <div className="text-teal-400 font-medium mb-1">Magic Nodes</div>
            <div className="text-teal-600 text-sm">777 Active</div>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-emerald-400/30 animate-mystic-pulse"></div>
        <div className="absolute top-10 right-10 w-16 h-16 border-r-2 border-t-2 border-emerald-400/30 animate-mystic-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border-l-2 border-b-2 border-emerald-400/30 animate-mystic-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-emerald-400/30 animate-mystic-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
} 