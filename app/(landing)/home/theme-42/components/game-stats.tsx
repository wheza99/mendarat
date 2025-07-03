export default function GameStats() {
  const leaderboard = [
    { rank: 1, player: "PIXEL_MASTER", score: "999,999", level: 99, icon: "👑" },
    { rank: 2, player: "RETRO_KING", score: "888,888", level: 87, icon: "🥈" },
    { rank: 3, player: "BIT_HERO", score: "777,777", level: 76, icon: "🥉" },
    { rank: 4, player: "CODE_NINJA", score: "666,666", level: 65, icon: "🥷" },
    { rank: 5, player: "GAME_WIZARD", score: "555,555", level: 54, icon: "🧙" }
  ];

  const stats = [
    { label: "TOTAL PLAYERS", value: "42,420", icon: "👾", color: "text-yellow-400" },
    { label: "GAMES PLAYED", value: "1,337,000", icon: "🎮", color: "text-pink-400" },
    { label: "HIGH SCORE", value: "999,999", icon: "🏆", color: "text-green-400" },
    { label: "POWER-UPS", value: "256,128", icon: "⚡", color: "text-blue-400" }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-green-400 mb-6 retro-blink" style={{ fontFamily: 'monospace' }}>
            GAME STATS
          </h2>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto" style={{ fontFamily: 'monospace' }}>
            🏆 CHECK OUT THE LEADERBOARDS AND GAME STATISTICS 🏆
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Leaderboard */}
          <div className="lg:col-span-2">
            <div className="bg-black border-4 border-yellow-400 rounded-none p-8">
              {/* Leaderboard header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b-4 border-yellow-400">
                <h3 className="text-yellow-400 font-black text-2xl" style={{ fontFamily: 'monospace' }}>
                  🏆 LEADERBOARD
                </h3>
                <div className="text-yellow-400 text-sm retro-blink" style={{ fontFamily: 'monospace' }}>
                  LIVE
                </div>
              </div>

              {/* Leaderboard entries */}
              <div className="space-y-4">
                {leaderboard.map((player, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 border-2 rounded-none transition-all duration-300 hover:scale-105 ${
                      player.rank === 1 ? 'border-yellow-400 bg-yellow-400/10' :
                      player.rank === 2 ? 'border-gray-400 bg-gray-400/10' :
                      player.rank === 3 ? 'border-orange-400 bg-orange-400/10' :
                      'border-gray-600 bg-gray-600/10'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`text-2xl ${
                        player.rank === 1 ? 'game-pulse' :
                        player.rank === 2 ? 'retro-blink' :
                        player.rank === 3 ? 'level-up' :
                        'pixel-shake'
                      }`}>
                        {player.icon}
                      </div>
                      <div>
                        <div className={`font-bold text-lg ${
                          player.rank === 1 ? 'text-yellow-400' :
                          player.rank === 2 ? 'text-gray-400' :
                          player.rank === 3 ? 'text-orange-400' :
                          'text-blue-400'
                        }`} style={{ fontFamily: 'monospace' }}>
                          #{player.rank} {player.player}
                        </div>
                        <div className="text-gray-400 text-sm" style={{ fontFamily: 'monospace' }}>
                          LEVEL {player.level}
                        </div>
                      </div>
                    </div>
                    <div className={`text-right ${
                      player.rank === 1 ? 'text-yellow-400' :
                      player.rank === 2 ? 'text-gray-400' :
                      player.rank === 3 ? 'text-orange-400' :
                      'text-blue-400'
                    }`}>
                      <div className="font-black text-xl" style={{ fontFamily: 'monospace' }}>
                        {player.score}
                      </div>
                      <div className="text-xs text-gray-400" style={{ fontFamily: 'monospace' }}>
                        POINTS
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Player controls */}
              <div className="mt-8 pt-6 border-t-2 border-gray-600">
                <div className="flex justify-between items-center">
                  <button className="bg-green-400 text-black font-bold py-2 px-4 border-2 border-green-600 hover:bg-yellow-400 hover:border-yellow-600 transition-all duration-300 pixel-shake" style={{ fontFamily: 'monospace' }}>
                    🎮 PLAY NOW
                  </button>
                  <div className="text-gray-400 text-sm" style={{ fontFamily: 'monospace' }}>
                    YOUR RANK: #42
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats panel */}
          <div className="space-y-6">
            {/* Global stats */}
            <div className="bg-black border-4 border-pink-400 rounded-none p-6">
              <h3 className="text-pink-400 font-black text-xl mb-6 retro-blink" style={{ fontFamily: 'monospace' }}>
                📊 GLOBAL STATS
              </h3>
              
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-xl level-up">
                        {stat.icon}
                      </div>
                      <div className="text-gray-400 text-sm" style={{ fontFamily: 'monospace' }}>
                        {stat.label}
                      </div>
                    </div>
                    <div className={`font-black ${stat.color} retro-blink`} style={{ fontFamily: 'monospace' }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement showcase */}
            <div className="bg-black border-4 border-purple-400 rounded-none p-6">
              <h3 className="text-purple-400 font-black text-xl mb-6 game-pulse" style={{ fontFamily: 'monospace' }}>
                🏅 RECENT ACHIEVEMENTS
              </h3>
              
              <div className="space-y-3">
                {[
                  { title: "SPEED DEMON", desc: "Complete level in under 30s", icon: "⚡" },
                  { title: "COIN COLLECTOR", desc: "Collect 1000 coins", icon: "🪙" },
                  { title: "PERFECT SCORE", desc: "No mistakes in a level", icon: "💯" }
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-purple-900/30 border border-purple-400 rounded-none">
                    <div className="text-lg power-up-float">
                      {achievement.icon}
                    </div>
                    <div>
                      <div className="text-purple-400 font-bold text-sm" style={{ fontFamily: 'monospace' }}>
                        {achievement.title}
                      </div>
                      <div className="text-gray-400 text-xs" style={{ fontFamily: 'monospace' }}>
                        {achievement.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Game controls */}
            <div className="bg-black border-4 border-cyan-400 rounded-none p-6">
              <h3 className="text-cyan-400 font-black text-xl mb-6 pixel-shake" style={{ fontFamily: 'monospace' }}>
                🎮 CONTROLS
              </h3>
              
              <div className="space-y-3 text-sm" style={{ fontFamily: 'monospace' }}>
                <div className="flex justify-between">
                  <span className="text-gray-400">MOVE:</span>
                  <span className="text-cyan-400">↑ ↓ ← →</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">ACTION:</span>
                  <span className="text-cyan-400">SPACEBAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">PAUSE:</span>
                  <span className="text-cyan-400">ESC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">RESTART:</span>
                  <span className="text-cyan-400">R</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-yellow-400 text-black font-bold py-4 px-8 border-4 border-yellow-600 hover:bg-pink-400 hover:border-pink-600 transition-all duration-300 game-pulse text-xl" style={{ fontFamily: 'monospace' }}>
            🚀 JOIN THE GAME
          </button>
        </div>
      </div>
    </section>
  );
} 