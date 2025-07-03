'use client';

export default function NoirNetwork() {
  const networkNodes = [
    { id: "CORE_01", status: "ACTIVE", connections: 847, location: "NEO_TOKYO" },
    { id: "CORE_02", status: "ACTIVE", connections: 1203, location: "NEW_SHANGHAI" },
    { id: "CORE_03", status: "STANDBY", connections: 492, location: "CYBER_LONDON" },
    { id: "CORE_04", status: "ACTIVE", connections: 1876, location: "DIGITAL_NYC" },
    { id: "EDGE_05", status: "ACTIVE", connections: 234, location: "NEON_BERLIN" },
    { id: "EDGE_06", status: "MAINTENANCE", connections: 0, location: "GHOST_MOSCOW" }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Network Grid Background */}
      <div className="absolute inset-0">
        {/* Data Streams */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs text-cyan-400/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `data-stream ${6 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {['0xFF', '0x42', 'EXEC', 'DATA', 'SYNC', 'NET'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
        
        {/* Network Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000">
          {/* Main network backbone */}
          <path
            d="M100,500 Q300,200 500,500 T900,500"
            stroke="#06B6D4"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10,5"
            className="animate-pulse"
          />
          <path
            d="M500,100 Q200,300 500,500 T500,900"
            stroke="#8B5CF6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
          
          {/* Network nodes */}
          {networkNodes.map((node, i) => {
            const x = 150 + (i % 3) * 300;
            const y = 200 + Math.floor(i / 3) * 300;
            return (
              <g key={node.id}>
                <circle
                  cx={x}
                  cy={y}
                  r="20"
                  fill={node.status === 'ACTIVE' ? '#06B6D4' : node.status === 'STANDBY' ? '#FBBF24' : '#EF4444'}
                  className="animate-pulse"
                />
                <circle
                  cx={x}
                  cy={y}
                  r="15"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                />
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  fill="#000"
                  fontSize="8"
                  fontFamily="monospace"
                >
                  {node.id.split('_')[1]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 neon-glow">
            NOIR <span className="text-cyan-400">NETWORK</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gray-400 via-cyan-400 to-gray-400 mx-auto mb-8 cyber-pulse" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Decentralized neural network operating in the digital shadows
          </p>
        </div>

        {/* Network Status Dashboard */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Active Nodes", value: "847", status: "ONLINE" },
              { label: "Data Throughput", value: "2.3TB/s", status: "HIGH" },
              { label: "Network Latency", value: "0.03ms", status: "OPTIMAL" },
              { label: "Security Level", value: "QUANTUM", status: "SECURED" }
            ].map((metric, index) => (
              <div
                key={metric.label}
                className="p-6 border border-cyan-400/20 bg-black/60 cyber-pulse"
                style={{
                  animation: `clean-slide 0.8s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 neon-glow mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-300 mb-2">
                    {metric.label}
                  </div>
                  <div className={`text-xs font-mono px-2 py-1 rounded ${
                    metric.status === 'ONLINE' || metric.status === 'OPTIMAL' || metric.status === 'SECURED' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {metric.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Nodes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {networkNodes.map((node, index) => (
            <div
              key={node.id}
              className="group relative p-6 border border-cyan-400/20 bg-gradient-to-br from-black/80 via-gray-900/50 to-black/80 hover:border-cyan-400/50 transition-all duration-500"
              style={{
                animation: `clean-slide 0.8s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              {/* Node Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 neon-glow">
                    {node.id}
                  </h3>
                  <div className="text-sm font-mono text-gray-400">
                    {node.location}
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full ${
                  node.status === 'ACTIVE' ? 'bg-green-400' :
                  node.status === 'STANDBY' ? 'bg-yellow-400' :
                  'bg-red-400'
                } animate-pulse`} />
              </div>

              {/* Node Stats */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Status:</span>
                  <span className={`font-mono text-sm ${
                    node.status === 'ACTIVE' ? 'text-green-400' :
                    node.status === 'STANDBY' ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {node.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Connections:</span>
                  <span className="text-cyan-400 font-mono text-sm">
                    {node.connections.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Connection Strength Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full cyber-pulse ${
                      node.status === 'ACTIVE' ? 'bg-gradient-to-r from-green-400 to-cyan-400' :
                      node.status === 'STANDBY' ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                      'bg-gradient-to-r from-red-400 to-red-600'
                    }`}
                    style={{ width: node.status === 'ACTIVE' ? '85%' : node.status === 'STANDBY' ? '45%' : '10%' }}
                  />
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner Brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400/50" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50" />
            </div>
          ))}
        </div>

        {/* Network Map Visualization */}
        <div className="relative p-8 border border-cyan-400/30 bg-black/40 cyber-pulse">
          <h3 className="text-2xl font-bold text-cyan-400 neon-glow mb-6 text-center">
            GLOBAL NETWORK TOPOLOGY
          </h3>
          
          <div className="relative h-64 bg-gradient-to-br from-gray-900/50 to-black/50 border border-cyan-400/20">
            {/* Network visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Central hub */}
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full cyber-pulse flex items-center justify-center">
                  <div className="text-black font-mono font-bold text-sm">HUB</div>
                </div>
                
                {/* Satellite nodes */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-8 h-8 bg-cyan-400 rounded-full cyber-pulse flex items-center justify-center"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-80px)`,
                      animation: `data-stream ${4 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  >
                    <div className="text-black font-mono text-xs">{i + 1}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Network stats overlay */}
            <div className="absolute bottom-2 left-2 font-mono text-xs text-cyan-400">
              UPTIME: 99.97% | NODES: 847 | BANDWIDTH: 2.3TB/s
            </div>
          </div>
        </div>

        {/* Access Terminal */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 border border-cyan-400/30 bg-black/60 cyber-pulse">
            <div className="text-cyan-400 font-mono text-sm mb-4">
              &gt; NETWORK_ACCESS_REQUESTED
            </div>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-black overflow-hidden hover:scale-105 transition-all duration-300">
              <span className="relative z-10">CONNECT TO NETWORK</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <div className="text-gray-400 font-mono text-xs mt-4">
              WARNING: UNAUTHORIZED ACCESS DETECTED - PROCEED WITH CAUTION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}