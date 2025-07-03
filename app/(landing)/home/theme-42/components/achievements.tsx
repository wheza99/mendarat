export default function Achievements() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-indigo-900 to-blue-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-purple-400 mb-6 game-pulse" style={{ fontFamily: 'monospace' }}>
            ACHIEVEMENTS
          </h2>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto" style={{ fontFamily: 'monospace' }}>
            UNLOCK SPECIAL REWARDS AND SHOW OFF YOUR SKILLS
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-black border-4 border-purple-400 rounded-none p-8">
              <div className="flex items-center justify-between mb-8 pb-4 border-b-4 border-purple-400">
                <h3 className="text-purple-400 font-black text-2xl" style={{ fontFamily: 'monospace' }}>
                  YOUR ACHIEVEMENTS
                </h3>
                <div className="text-purple-400 text-sm" style={{ fontFamily: 'monospace' }}>
                  3/6 UNLOCKED
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative p-6 border-4 border-yellow-400 bg-yellow-400/10 rounded-none transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-6">
                    <div className="text-4xl game-pulse">🚀</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-black text-lg text-yellow-400" style={{ fontFamily: 'monospace' }}>
                          FIRST STEPS
                        </h4>
                        <div className="text-sm font-bold text-yellow-400 retro-blink" style={{ fontFamily: 'monospace' }}>
                          +100 PTS
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4" style={{ fontFamily: 'monospace' }}>
                        Complete your first level
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-3 border-2 border-yellow-400 rounded-none overflow-hidden">
                          <div className="h-full bg-yellow-400 game-pulse" style={{ width: "100%" }} />
                        </div>
                        <div className="text-sm font-bold text-yellow-400" style={{ fontFamily: 'monospace' }}>
                          100%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 text-yellow-400 text-sm font-bold retro-blink" style={{ fontFamily: 'monospace' }}>
                    UNLOCKED
                  </div>
                </div>

                <div className="relative p-6 border-4 border-yellow-400 bg-yellow-400/10 rounded-none transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-6">
                    <div className="text-4xl game-pulse">⚡</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-black text-lg text-yellow-400" style={{ fontFamily: 'monospace' }}>
                          SPEED RUNNER
                        </h4>
                        <div className="text-sm font-bold text-yellow-400 retro-blink" style={{ fontFamily: 'monospace' }}>
                          +500 PTS
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4" style={{ fontFamily: 'monospace' }}>
                        Complete 10 levels in under 5 minutes
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-3 border-2 border-yellow-400 rounded-none overflow-hidden">
                          <div className="h-full bg-yellow-400 game-pulse" style={{ width: "100%" }} />
                        </div>
                        <div className="text-sm font-bold text-yellow-400" style={{ fontFamily: 'monospace' }}>
                          100%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 text-yellow-400 text-sm font-bold retro-blink" style={{ fontFamily: 'monospace' }}>
                    UNLOCKED
                  </div>
                </div>

                <div className="relative p-6 border-4 border-gray-600 bg-gray-600/10 rounded-none transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-6">
                    <div className="text-4xl opacity-50">💯</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-black text-lg text-gray-400" style={{ fontFamily: 'monospace' }}>
                          PERFECTIONIST
                        </h4>
                        <div className="text-sm font-bold text-gray-500" style={{ fontFamily: 'monospace' }}>
                          +1000 PTS
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4" style={{ fontFamily: 'monospace' }}>
                        Get perfect score on 50 levels
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-3 border-2 border-gray-600 rounded-none overflow-hidden">
                          <div className="h-full bg-gray-600" style={{ width: "76%" }} />
                        </div>
                        <div className="text-sm font-bold text-gray-400" style={{ fontFamily: 'monospace' }}>
                          76%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black border-4 border-green-400 rounded-none p-6">
              <h3 className="text-green-400 font-black text-xl mb-6 pixel-shake" style={{ fontFamily: 'monospace' }}>
                LEVEL REWARDS
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border-2 border-green-400 bg-green-400/10 rounded-none">
                  <div>
                    <div className="font-bold text-green-400" style={{ fontFamily: 'monospace' }}>
                      LEVEL 10
                    </div>
                    <div className="text-gray-300 text-xs" style={{ fontFamily: 'monospace' }}>
                      MAGIC MUSHROOM
                    </div>
                  </div>
                  <div className="text-green-400 level-up">✓</div>
                </div>
                
                <div className="flex items-center justify-between p-3 border-2 border-gray-600 bg-gray-600/10 rounded-none">
                  <div>
                    <div className="font-bold text-gray-400" style={{ fontFamily: 'monospace' }}>
                      LEVEL 25
                    </div>
                    <div className="text-gray-300 text-xs" style={{ fontFamily: 'monospace' }}>
                      STAR POWER
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black border-4 border-cyan-400 rounded-none p-6">
              <h3 className="text-cyan-400 font-black text-xl mb-6 retro-blink" style={{ fontFamily: 'monospace' }}>
                YOUR STATS
              </h3>
              
              <div className="space-y-4 text-sm" style={{ fontFamily: 'monospace' }}>
                <div className="flex justify-between">
                  <span className="text-gray-400">TOTAL POINTS:</span>
                  <span className="text-yellow-400 font-bold">42,350</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">GAMES PLAYED:</span>
                  <span className="text-pink-400 font-bold">287</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">WIN RATE:</span>
                  <span className="text-green-400 font-bold">87%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black border-4 border-yellow-400 rounded-none p-8 max-w-4xl mx-auto">
            <h3 className="text-yellow-400 font-black text-2xl mb-4 game-pulse" style={{ fontFamily: 'monospace' }}>
              HALL OF FAME
            </h3>
            <p className="text-gray-300 mb-6" style={{ fontFamily: 'monospace' }}>
              Complete all achievements to join the elite Hall of Fame and unlock the ultimate reward!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
