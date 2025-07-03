export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Retro gaming background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-blue-800/20 to-indigo-800/20" />
      
      {/* Pixel decorations */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 pixel-shake opacity-60" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-pink-400 level-up opacity-70" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-green-400 retro-blink opacity-50" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* 8-bit style title */}
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-yellow-400 mb-4 pixel-shake" style={{ fontFamily: 'monospace' }}>
            RETRO
          </h1>
          <h1 className="text-6xl md:text-8xl font-black text-pink-400 game-pulse" style={{ fontFamily: 'monospace' }}>
            GAME
          </h1>
          
          {/* Pixel overlay effect */}
          <div className="absolute inset-0 text-6xl md:text-8xl font-black text-green-400 opacity-20 level-up" style={{ fontFamily: 'monospace' }}>
            RETRO
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-2xl mx-auto leading-relaxed retro-blink" style={{ fontFamily: 'monospace' }}>
          🎮 PRESS START TO BEGIN YOUR JOURNEY 🎮
          <br />
          Experience the nostalgia of classic 8-bit gaming with modern web design!
        </p>
        
        {/* Game-style buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <button className="group relative px-8 py-4 bg-yellow-400 text-black font-bold rounded-none border-4 border-yellow-600 transition-all duration-300 hover:scale-105 pixel-shake" style={{ fontFamily: 'monospace' }}>
            <span className="relative z-10">▶ START GAME</span>
            <div className="absolute inset-0 bg-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="group relative px-8 py-4 border-4 border-pink-400 text-pink-400 font-bold rounded-none hover:bg-pink-400 hover:text-black transition-all duration-300 game-pulse" style={{ fontFamily: 'monospace' }}>
            <span className="relative z-10">⚙ OPTIONS</span>
          </button>
        </div>
        
        {/* Retro game stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          {[
            { label: 'LEVEL', value: '42', icon: '🏆', color: 'text-yellow-400' },
            { label: 'SCORE', value: '999999', icon: '💯', color: 'text-pink-400' },
            { label: 'LIVES', value: '∞', icon: '💖', color: 'text-red-400' },
            { label: 'COINS', value: '1337', icon: '🪙', color: 'text-orange-400' }
          ].map((stat, index) => (
            <div key={index} className="group text-center">
              <div className="text-2xl mb-2 level-up">
                {stat.icon}
              </div>
              <div className={`text-3xl md:text-4xl font-black ${stat.color} retro-blink`} style={{ 
                fontFamily: 'monospace',
                animationDelay: `${index * 0.2}s`
              }}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1 group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'monospace' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Power-up indicators */}
        <div className="flex justify-center gap-4 mt-12">
          {['⭐', '💎', '🍄', '⚡', '🔥', '🎯'].map((powerUp, index) => (
            <div
              key={index}
              className="text-3xl power-up-float opacity-80 hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {powerUp}
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating game elements */}
      <div className="absolute top-1/4 left-0 w-2 h-16 bg-gradient-to-b from-yellow-400 to-transparent opacity-60 pixel-float" />
      <div className="absolute bottom-1/4 right-0 w-2 h-12 bg-gradient-to-b from-pink-400 to-transparent opacity-60 pixel-float" style={{ animationDelay: '1s' }} />
      
      {/* Game instructions */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-4 bg-black/50 px-6 py-3 rounded-lg border-2 border-yellow-400">
          <div className="text-yellow-400 text-2xl retro-blink">🎮</div>
          <p className="text-yellow-400 text-sm font-bold" style={{ fontFamily: 'monospace' }}>
            USE ↑↓ KEYS TO SCROLL
          </p>
        </div>
      </div>
    </section>
  );
} 