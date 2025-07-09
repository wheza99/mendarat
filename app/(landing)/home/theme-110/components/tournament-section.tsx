import React from 'react';

export default function TournamentSection() {
  const tournaments = [
    {
      name: "Cyber Championship 2024",
      prize: "$50,000",
      players: 1024,
      startDate: "2024-03-15",
      status: "upcoming",
      game: "CyberStrike",
      icon: "⚡"
    },
    {
      name: "Pixel Warriors League",
      prize: "$25,000",
      players: 512,
      startDate: "2024-03-10",
      status: "ongoing",
      game: "PixelQuest",
      icon: "🎮"
    },
    {
      name: "Retro Gaming Masters",
      prize: "$15,000",
      players: 256,
      startDate: "2024-03-05",
      status: "completed",
      game: "RetroClassic",
      icon: "🕹️"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'text-blue-400';
      case 'ongoing': return 'text-green-400';
      case 'completed': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-500/20 border-blue-400/30';
      case 'ongoing': return 'bg-green-500/20 border-green-400/30';
      case 'completed': return 'bg-gray-500/20 border-gray-400/30';
      default: return 'bg-gray-500/20 border-gray-400/30';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-6 font-mono">
            TOURNAMENTS
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
            Compete in high-stakes tournaments with massive prize pools
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 p-8 ${getStatusBg(tournament.status)}`}
            >
              {/* Tournament icon */}
              <div className="text-4xl mb-4">{tournament.icon}</div>
              
              <h3 className="text-xl font-bold text-white mb-4 font-mono">
                {tournament.name}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">Prize Pool:</span>
                  <span className="text-yellow-400 font-bold font-mono">{tournament.prize}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">Players:</span>
                  <span className="text-green-400 font-bold font-mono">{tournament.players}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">Game:</span>
                  <span className="text-blue-400 font-bold font-mono">{tournament.game}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-mono">Start Date:</span>
                  <span className="text-purple-400 font-bold font-mono">{tournament.startDate}</span>
                </div>
              </div>
              
              {/* Status badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold font-mono ${getStatusColor(tournament.status)}`}>
                {tournament.status.toUpperCase()}
              </div>
              
              {/* Action button */}
              <div className="mt-6">
                {tournament.status === 'upcoming' && (
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-green-500/25 transition-all duration-300 font-mono">
                    REGISTER NOW
                  </button>
                )}
                {tournament.status === 'ongoing' && (
                  <button className="w-full px-6 py-3 border-2 border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 font-mono">
                    WATCH LIVE
                  </button>
                )}
                {tournament.status === 'completed' && (
                  <button className="w-full px-6 py-3 border-2 border-gray-400 text-gray-400 font-bold rounded-lg hover:bg-gray-400 hover:text-black transition-all duration-300 font-mono">
                    VIEW RESULTS
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Tournament stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-black text-green-400 mb-2 font-mono">$1M+</div>
              <div className="text-gray-400 font-mono">Total Prizes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-blue-400 mb-2 font-mono">50+</div>
              <div className="text-gray-400 font-mono">Tournaments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-purple-400 mb-2 font-mono">10K+</div>
              <div className="text-gray-400 font-mono">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-red-400 mb-2 font-mono">24/7</div>
              <div className="text-gray-400 font-mono">Live Events</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 