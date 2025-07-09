import React from 'react';

export default function LeaderboardSection() {
  const players = [
    {
      rank: 1,
      name: "CyberNinja",
      score: 1250000,
      level: 99,
      avatar: "👾",
      status: "online"
    },
    {
      rank: 2,
      name: "PixelWarrior",
      score: 1180000,
      level: 87,
      avatar: "🎮",
      status: "online"
    },
    {
      rank: 3,
      name: "RetroGamer",
      score: 1120000,
      level: 82,
      avatar: "🕹️",
      status: "offline"
    },
    {
      rank: 4,
      name: "NeonKnight",
      score: 1080000,
      level: 78,
      avatar: "⚔️",
      status: "online"
    },
    {
      rank: 5,
      name: "DigitalDragon",
      score: 1050000,
      level: 75,
      avatar: "🐉",
      status: "online"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-6 font-mono">
            LEADERBOARD
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
            Top players this week - Can you make it to the top?
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 p-8">
          {/* Leaderboard header */}
          <div className="grid grid-cols-12 gap-4 mb-6 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/30">
            <div className="col-span-1 text-center font-bold text-green-400 font-mono">RANK</div>
            <div className="col-span-2 text-center font-bold text-green-400 font-mono">PLAYER</div>
            <div className="col-span-3 text-center font-bold text-green-400 font-mono">SCORE</div>
            <div className="col-span-2 text-center font-bold text-green-400 font-mono">LEVEL</div>
            <div className="col-span-2 text-center font-bold text-green-400 font-mono">STATUS</div>
            <div className="col-span-2 text-center font-bold text-green-400 font-mono">ACTION</div>
          </div>
          
          {/* Leaderboard entries */}
          <div className="space-y-4">
            {players.map((player, index) => (
              <div 
                key={index}
                className={`grid grid-cols-12 gap-4 p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                  player.rank === 1 
                    ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/30' 
                    : 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-gray-600/30 hover:border-green-400/30'
                }`}
              >
                <div className="col-span-1 text-center">
                  <div className={`text-2xl font-bold ${
                    player.rank === 1 ? 'text-yellow-400' : 
                    player.rank === 2 ? 'text-gray-300' : 
                    player.rank === 3 ? 'text-orange-400' : 'text-gray-500'
                  } font-mono`}>
                    #{player.rank}
                  </div>
                </div>
                
                <div className="col-span-2 flex items-center space-x-3">
                  <div className="text-2xl">{player.avatar}</div>
                  <div className="font-bold text-white font-mono">{player.name}</div>
                </div>
                
                <div className="col-span-3 text-center">
                  <div className="text-green-400 font-bold font-mono">{player.score.toLocaleString()}</div>
                </div>
                
                <div className="col-span-2 text-center">
                  <div className="text-blue-400 font-bold font-mono">LVL {player.level}</div>
                </div>
                
                <div className="col-span-2 text-center">
                  <div className={`inline-flex items-center space-x-2 ${
                    player.status === 'online' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      player.status === 'online' ? 'bg-green-400' : 'bg-red-400'
                    }`}></div>
                    <span className="font-mono text-sm">{player.status.toUpperCase()}</span>
                  </div>
                </div>
                
                <div className="col-span-2 text-center">
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-bold rounded hover:shadow-green-500/25 transition-all duration-300 font-mono">
                    CHALLENGE
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* View all players button */}
          <div className="text-center mt-8">
            <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 font-mono">
              VIEW ALL PLAYERS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 