export default function FlareServices() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Solar Flare Services
            </span>
          </h2>
          <p className="text-xl text-orange-200/70 max-w-3xl mx-auto">
            Comprehensive stellar energy solutions powered by advanced fusion technology and solar plasma dynamics.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/60 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-6 mx-auto animate-solar-pulse">
                <span className="text-white font-bold text-2xl">⚛️</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-300 mb-4 text-center">Fusion Computing</h3>
              <p className="text-orange-200/70 text-center mb-6">
                Stellar-grade computational systems powered by controlled nuclear fusion and plasma processors.
              </p>
              <ul className="space-y-2 text-orange-300/80">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span>15.6 Million Kelvin Processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span>Plasma State Calculations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span>Stellar Simulation Cores</span>
                </li>
              </ul>
              <div className="text-center mt-6">
                <span className="text-green-400 font-semibold">99.8% Uptime</span>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-red-900/40 to-yellow-900/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 hover:border-red-400/60 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-600 flex items-center justify-center mb-6 mx-auto animate-solar-pulse">
                <span className="text-white font-bold text-2xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-red-300 mb-4 text-center">Solar Networks</h3>
              <p className="text-red-200/70 text-center mb-6">
                Interstellar communication networks using solar wind propagation and corona transmission.
              </p>
              <ul className="space-y-2 text-red-300/80">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span>Solar Wind Data Streams</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span>Corona Frequency Networks</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span>Plasma Channel Routing</span>
                </li>
              </ul>
              <div className="text-center mt-6">
                <span className="text-green-400 font-semibold">Light Speed</span>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-400/60 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center mb-6 mx-auto animate-solar-pulse">
                <span className="text-white font-bold text-2xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-300 mb-4 text-center">Stellar Security</h3>
              <p className="text-yellow-200/70 text-center mb-6">
                Advanced protection systems using solar flare encryption and magnetic field shielding.
              </p>
              <ul className="space-y-2 text-yellow-300/80">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span>Solar Flare Encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span>Magnetic Field Barriers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span>Corona Firewall Systems</span>
                </li>
              </ul>
              <div className="text-center mt-6">
                <span className="text-green-400 font-semibold">Stellar Class</span>
              </div>
            </div>
          </div>
        </div>

        {/* Solar System Monitor */}
        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* System Status */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-orange-300 mb-6">Solar System Monitor</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-orange-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-solar-pulse"></div>
                    <span className="text-orange-300">Fusion Reactors</span>
                  </div>
                  <span className="text-green-400 font-mono">Online</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-red-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-solar-pulse"></div>
                    <span className="text-red-300">Plasma Confinement</span>
                  </div>
                  <span className="text-green-400 font-mono">Stable</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-yellow-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-solar-pulse"></div>
                    <span className="text-yellow-300">Solar Arrays</span>
                  </div>
                  <span className="text-green-400 font-mono">Peak Output</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-orange-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 animate-solar-pulse"></div>
                    <span className="text-orange-300">Magnetic Fields</span>
                  </div>
                  <span className="text-yellow-400 font-mono">Charging</span>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-red-300 mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-orange-300/80">Solar Output</span>
                    <span className="text-orange-400 font-mono">98.6%</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-3">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-solar-progress" style={{ width: '98.6%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-red-300/80">Fusion Efficiency</span>
                    <span className="text-red-400 font-mono">94.2%</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-3">
                    <div className="h-full bg-gradient-to-r from-red-500 to-yellow-500 rounded-full animate-solar-progress" style={{ width: '94.2%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-yellow-300/80">Plasma Density</span>
                    <span className="text-yellow-400 font-mono">91.8%</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-3">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-solar-progress" style={{ width: '91.8%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-orange-300/80">System Health</span>
                    <span className="text-green-400 font-mono">Optimal</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-3">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-solar-progress" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-3 animate-solar-pulse">
              <span className="text-white font-bold">☉</span>
            </div>
            <div className="text-orange-400 font-semibold">15.6M°K</div>
            <div className="text-orange-300/60 text-sm">Core Temperature</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center mb-3 animate-solar-pulse" style={{ animationDelay: '1s' }}>
              <span className="text-white font-bold">⚡</span>
            </div>
            <div className="text-red-400 font-semibold">3.8×10²⁸</div>
            <div className="text-red-300/60 text-sm">Fusion Rate</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-3 animate-solar-pulse" style={{ animationDelay: '2s' }}>
              <span className="text-white font-bold">🌟</span>
            </div>
            <div className="text-yellow-400 font-semibold">∞ MW</div>
            <div className="text-yellow-300/60 text-sm">Power Output</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-3 animate-solar-pulse" style={{ animationDelay: '3s' }}>
              <span className="text-white font-bold">🔥</span>
            </div>
            <div className="text-orange-400 font-semibold">99.8%</div>
            <div className="text-orange-300/60 text-sm">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
} 