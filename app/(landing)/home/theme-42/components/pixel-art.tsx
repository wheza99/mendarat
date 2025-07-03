export default function PixelArt() {
  return (
    <section className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-pink-400 mb-6 level-up" style={{ fontFamily: 'monospace' }}>
            PIXEL ART
          </h2>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto" style={{ fontFamily: 'monospace' }}>
            🎨 CRAFTED WITH 8-BIT PRECISION AND RETRO LOVE 🎨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Pixel art gallery */}
          <div className="relative">
            {/* Main pixel canvas */}
            <div className="bg-black border-4 border-cyan-400 rounded-none p-8">
              {/* Canvas header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-cyan-400">
                <div className="text-cyan-400 font-bold" style={{ fontFamily: 'monospace' }}>
                  🎮 GAME_CANVAS.ART
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-none retro-blink" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-none retro-blink" />
                  <div className="w-3 h-3 bg-green-400 rounded-none retro-blink" />
                </div>
              </div>

              {/* Pixel art display */}
              <div className="grid grid-cols-16 gap-px bg-gray-800 p-4 mb-6">
                {[...Array(256)].map((_, i) => {
                  const colors = ['bg-red-400', 'bg-blue-400', 'bg-yellow-400', 'bg-green-400', 'bg-pink-400', 'bg-purple-400', 'bg-black'];
                  const randomColor = colors[Math.floor(Math.random() * colors.length)];
                  return (
                    <div
                      key={i}
                      className={`w-3 h-3 ${randomColor} hover:scale-150 transition-transform duration-200 pixel-shake`}
                      style={{ animationDelay: `${(i % 16) * 0.05}s` }}
                    />
                  );
                })}
              </div>

              {/* Tool palette */}
              <div className="flex justify-center gap-2">
                {[
                  { color: 'bg-red-400', name: 'RED' },
                  { color: 'bg-blue-400', name: 'BLUE' },
                  { color: 'bg-yellow-400', name: 'YELLOW' },
                  { color: 'bg-green-400', name: 'GREEN' },
                  { color: 'bg-pink-400', name: 'PINK' },
                  { color: 'bg-purple-400', name: 'PURPLE' }
                ].map((tool, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 ${tool.color} border-2 border-white cursor-pointer hover:scale-125 transition-transform duration-200 game-pulse`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    title={tool.name}
                  />
                ))}
              </div>
            </div>

            {/* Floating pixel elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 level-up opacity-80" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-400 retro-blink opacity-70" />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black text-yellow-400 mb-4 pixel-shake" style={{ fontFamily: 'monospace' }}>
                RETRO GRAPHICS
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6" style={{ fontFamily: 'monospace' }}>
                Experience the charm of classic 8-bit graphics with our pixel-perfect designs. 
                Every element is crafted with the same attention to detail that made retro games legendary.
              </p>
            </div>

            {/* Feature showcase */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "🎮", title: "CLASSIC STYLE", desc: "Authentic 8-bit aesthetics" },
                { icon: "🎨", title: "PIXEL PERFECT", desc: "Hand-crafted artwork" },
                { icon: "🌈", title: "VIBRANT COLORS", desc: "Eye-catching palettes" },
                { icon: "⚡", title: "SMOOTH ANIMATION", desc: "Buttery 60fps effects" }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-black/50 border-2 border-purple-400 rounded-none hover:border-yellow-400 transition-colors duration-300">
                  <div className="text-3xl mb-2 power-up-float">
                    {feature.icon}
                  </div>
                  <h4 className="text-purple-400 font-bold text-sm mb-1" style={{ fontFamily: 'monospace' }}>
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-xs" style={{ fontFamily: 'monospace' }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Game character showcase */}
            <div className="bg-black/80 border-4 border-green-400 p-6 rounded-none">
              <h4 className="text-green-400 font-bold mb-4 retro-blink" style={{ fontFamily: 'monospace' }}>
                🕹️ CHARACTER GALLERY
              </h4>
              <div className="flex justify-center gap-4">
                {['👾', '🤖', '👻', '🛸', '🦄', '🐉'].map((character, index) => (
                  <div
                    key={index}
                    className="text-4xl hover:scale-125 transition-transform duration-300 level-up cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {character}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-center mt-4 text-sm" style={{ fontFamily: 'monospace' }}>
                Click to animate characters!
              </p>
            </div>

            {/* Create button */}
            <button className="w-full bg-pink-400 text-black font-bold py-4 px-6 border-4 border-pink-600 hover:bg-yellow-400 hover:border-yellow-600 transition-all duration-300 pixel-shake" style={{ fontFamily: 'monospace' }}>
              🎨 CREATE YOUR PIXEL ART
            </button>
          </div>
        </div>

        {/* Bottom showcase */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { title: "LANDSCAPES", items: "127", icon: "🏔️" },
            { title: "CHARACTERS", items: "89", icon: "👾" },
            { title: "ITEMS", items: "256", icon: "💎" }
          ].map((category, index) => (
            <div key={index} className="text-center p-6 bg-black/60 border-4 border-blue-400 rounded-none hover:border-yellow-400 transition-colors duration-300">
              <div className="text-5xl mb-4 game-pulse">
                {category.icon}
              </div>
              <h3 className="text-blue-400 font-bold text-xl mb-2" style={{ fontFamily: 'monospace' }}>
                {category.title}
              </h3>
              <div className="text-3xl font-black text-yellow-400 retro-blink" style={{ fontFamily: 'monospace' }}>
                {category.items}
              </div>
              <p className="text-gray-400 text-sm mt-2" style={{ fontFamily: 'monospace' }}>
                AVAILABLE ASSETS
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 