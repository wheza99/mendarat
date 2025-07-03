export default function PowerUps() {
  const powerUps = [
    {
      name: "SPEED BOOST",
      description: "Accelerate your development process with lightning-fast tools and frameworks.",
      icon: "⚡",
      points: "500",
      color: "yellow",
      effect: "pixel-shake"
    },
    {
      name: "MAGIC MUSHROOM",
      description: "Grow your skills exponentially with advanced programming techniques.",
      icon: "🍄",
      points: "1000",
      color: "red",
      effect: "level-up"
    },
    {
      name: "STAR POWER",
      description: "Become invincible with our premium support and unlimited resources.",
      icon: "⭐",
      points: "2000",
      color: "yellow",
      effect: "game-pulse"
    },
    {
      name: "FIRE FLOWER",
      description: "Ignite your creativity with powerful design tools and templates.",
      icon: "🔥",
      points: "750",
      color: "orange",
      effect: "retro-blink"
    },
    {
      name: "DIAMOND SHIELD",
      description: "Protect your projects with enterprise-grade security features.",
      icon: "💎",
      points: "1500",
      color: "blue",
      effect: "level-up"
    },
    {
      name: "COIN MAGNET",
      description: "Attract more revenue with our monetization strategies and tools.",
      icon: "🪙",
      points: "300",
      color: "yellow",
      effect: "power-up-float"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: { bg: "bg-yellow-400", text: "text-yellow-400", border: "border-yellow-400" },
      red: { bg: "bg-red-400", text: "text-red-400", border: "border-red-400" },
      orange: { bg: "bg-orange-400", text: "text-orange-400", border: "border-orange-400" },
      blue: { bg: "bg-blue-400", text: "text-blue-400", border: "border-blue-400" }
    };
    return colors[color as keyof typeof colors] || colors.yellow;
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-blue-900/50 to-indigo-900/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-yellow-400 mb-6 pixel-shake" style={{ fontFamily: 'monospace' }}>
            POWER-UPS
          </h2>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto retro-blink" style={{ fontFamily: 'monospace' }}>
            🎮 COLLECT THESE SPECIAL ITEMS TO LEVEL UP YOUR GAME! 🎮
          </p>
          
          {/* Pixel decorative line */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-pink-400 retro-blink"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        {/* Power-ups grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {powerUps.map((powerUp, index) => {
            const colors = getColorClasses(powerUp.color);
            return (
              <div
                key={index}
                className={`group relative bg-black/70 border-4 ${colors.border} rounded-none p-6 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Power-up header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-4xl ${powerUp.effect}`}>
                    {powerUp.icon}
                  </div>
                  <div className={`text-lg font-bold ${colors.text} retro-blink`} style={{ fontFamily: 'monospace' }}>
                    +{powerUp.points}
                  </div>
                </div>
                
                {/* Power-up name */}
                <h3 className={`text-xl font-black ${colors.text} mb-4 pixel-shake`} style={{ fontFamily: 'monospace' }}>
                  {powerUp.name}
                </h3>
                
                {/* Power-up description */}
                <p className="text-gray-300 leading-relaxed mb-6" style={{ fontFamily: 'monospace', fontSize: '14px' }}>
                  {powerUp.description}
                </p>
                
                {/* Collect button */}
                <button className={`w-full ${colors.bg} text-black font-bold py-3 px-4 border-2 border-black hover:scale-105 transition-transform duration-300 game-pulse`} style={{ fontFamily: 'monospace' }}>
                  ⬇ COLLECT
                </button>
                
                {/* Pixel corners */}
                <div className={`absolute top-1 right-1 w-2 h-2 ${colors.bg}`} />
                <div className={`absolute bottom-1 left-1 w-2 h-2 ${colors.bg}`} />
              </div>
            );
          })}
        </div>

        {/* Game info panel */}
        <div className="mt-16 bg-black/80 border-4 border-green-400 p-8 rounded-none">
          <div className="text-center">
            <h3 className="text-2xl font-black text-green-400 mb-4 retro-blink" style={{ fontFamily: 'monospace' }}>
              💡 GAME TIP
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'monospace' }}>
              Combine multiple power-ups to unlock special combo effects! 
              Each power-up you collect increases your overall game score and unlocks new features.
            </p>
            
            {/* Score display */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-yellow-400 level-up" style={{ fontFamily: 'monospace' }}>
                  42
                </div>
                <div className="text-sm text-gray-400" style={{ fontFamily: 'monospace' }}>
                  ITEMS COLLECTED
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-pink-400 game-pulse" style={{ fontFamily: 'monospace' }}>
                  15,750
                </div>
                <div className="text-sm text-gray-400" style={{ fontFamily: 'monospace' }}>
                  TOTAL POINTS
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-cyan-400 retro-blink" style={{ fontFamily: 'monospace' }}>
                  999
                </div>
                <div className="text-sm text-gray-400" style={{ fontFamily: 'monospace' }}>
                  COMBO STREAK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 