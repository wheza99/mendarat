export default function DigitalMatrix() {
  const matrixData = [
    { id: "01", name: "NEURAL PATHWAYS", value: "2,847,392", status: "ACTIVE", color: "cyan" },
    { id: "02", name: "QUANTUM ENTANGLEMENTS", value: "∞", status: "STABLE", color: "pink" },
    { id: "03", name: "DATA PACKETS", value: "1,337,420", status: "FLOWING", color: "green" },
    { id: "04", name: "SECURITY PROTOCOLS", value: "256", status: "SECURED", color: "purple" },
    { id: "05", name: "AI PROCESSES", value: "9,001", status: "LEARNING", color: "yellow" },
    { id: "06", name: "BLOCKCHAIN NODES", value: "42,024", status: "VERIFIED", color: "orange" }
  ];

  const getStatusColor = (color: string) => {
    const colors = {
      cyan: "text-cyan-400 border-cyan-400",
      pink: "text-pink-400 border-pink-400", 
      green: "text-green-400 border-green-400",
      purple: "text-purple-400 border-purple-400",
      yellow: "text-yellow-400 border-yellow-400",
      orange: "text-orange-400 border-orange-400"
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background matrix effect */}
      <div className="absolute inset-0 bg-black">
        {/* Animated code rain */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {Math.random().toString(2).substr(2, 8)}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 mb-6 cyber-glitch">
            DIGITAL MATRIX
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto hologram-flicker">
            Real-time monitoring of the cyber infrastructure. All systems operational and secure.
          </p>
        </div>

        {/* Main matrix display */}
        <div className="bg-black/80 border-2 border-green-400 rounded-xl p-8 backdrop-blur-sm mb-12">
          {/* Matrix header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-green-400/30">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-green-400 rounded-full neon-pulse" />
              <span className="text-green-400 font-mono font-bold">MATRIX_CONTROL_V3.14</span>
            </div>
            <div className="text-gray-400 font-mono text-sm">
              TIMESTAMP: {new Date().toISOString().slice(0, 19)}
            </div>
          </div>

          {/* Matrix grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {matrixData.map((item, index) => (
              <div
                key={item.id}
                className={`bg-gray-900/50 border ${getStatusColor(item.color)} rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300 group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Node ID */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-gray-500 font-mono text-xs">NODE_{item.id}</span>
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(item.color).split(' ')[0].replace('text-', 'bg-')} neon-pulse`} />
                </div>

                {/* Node name */}
                <h3 className={`font-mono font-bold text-sm mb-3 ${getStatusColor(item.color).split(' ')[0]} neon-pulse`}>
                  {item.name}
                </h3>

                {/* Value display */}
                <div className="text-2xl font-black text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                  {item.value}
                </div>

                {/* Status */}
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-mono px-2 py-1 rounded border ${getStatusColor(item.color)} hologram-flicker`}>
                    {item.status}
                  </span>
                  <div className="text-xs text-gray-500 cyber-glitch">
                    LIVE
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Command line interface */}
          <div className="bg-black/60 border border-green-400/30 rounded-lg p-4 font-mono text-sm">
            <div className="text-green-400 mb-2">matrix@cybernet:~$ status --all</div>
            <div className="text-cyan-400 mb-1">✓ All neural pathways operational</div>
            <div className="text-pink-400 mb-1">✓ Quantum entanglement stable</div>
            <div className="text-purple-400 mb-1">✓ Security protocols active</div>
            <div className="text-yellow-400 mb-2">✓ AI learning processes running</div>
            <div className="text-green-400">matrix@cybernet:~$ <span className="animate-pulse">_</span></div>
          </div>
        </div>

        {/* Data flow visualization */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Data streams */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-6 neon-pulse">
              DATA STREAMS
            </h3>
            
            <div className="space-y-4">
              {[
                { stream: "INCOMING_DATA", rate: "847.2 MB/s", color: "bg-cyan-400" },
                { stream: "PROCESSING_QUEUE", rate: "1.3 GB/s", color: "bg-pink-400" },
                { stream: "OUTPUT_STREAM", rate: "952.7 MB/s", color: "bg-purple-400" },
                { stream: "BACKUP_SYNC", rate: "234.1 MB/s", color: "bg-green-400" }
              ].map((stream, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                  <div className="text-xs font-mono text-gray-400 w-32">
                    {stream.stream}
                  </div>
                  <div className="flex-1 bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${stream.color} rounded-full data-flow`}
                      style={{ 
                        width: `${60 + Math.random() * 40}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                  <div className="text-sm font-mono text-white w-24 text-right">
                    {stream.rate}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System alerts */}
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6 neon-pulse">
              SYSTEM ALERTS
            </h3>
            
            <div className="space-y-3">
              {[
                { type: "INFO", message: "Neural network updated", time: "12:34:56" },
                { type: "SUCCESS", message: "Quantum sync complete", time: "12:33:21" },
                { type: "WARNING", message: "High data throughput", time: "12:32:15" },
                { type: "INFO", message: "Backup process started", time: "12:31:45" }
              ].map((alert, index) => (
                <div key={index} className="p-3 bg-gray-900/40 border-l-4 border-cyan-400 rounded">
                  <div className="flex justify-between items-start mb-1">
                    <span className={`text-xs font-mono px-2 py-1 rounded ${
                      alert.type === 'SUCCESS' ? 'text-green-400 bg-green-400/10' :
                      alert.type === 'WARNING' ? 'text-yellow-400 bg-yellow-400/10' :
                      'text-cyan-400 bg-cyan-400/10'
                    }`}>
                      {alert.type}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">
                      {alert.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">
                    {alert.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 