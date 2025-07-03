export default function CyberSecurity() {
  const securityMetrics = [
    { label: "FIREWALL STATUS", value: "ACTIVE", level: 98, color: "green" },
    { label: "INTRUSION DETECTION", value: "SCANNING", level: 95, color: "cyan" },
    { label: "ENCRYPTION LEVEL", value: "QUANTUM", level: 100, color: "purple" },
    { label: "THREAT ANALYSIS", value: "REAL-TIME", level: 92, color: "pink" }
  ];

  const threats = [
    { type: "DDoS Attack", status: "BLOCKED", severity: "HIGH", time: "2 min ago", color: "red" },
    { type: "SQL Injection", status: "NEUTRALIZED", severity: "MEDIUM", time: "5 min ago", color: "yellow" },
    { type: "Phishing Attempt", status: "QUARANTINED", severity: "LOW", time: "12 min ago", color: "orange" },
    { type: "Malware Scan", status: "CLEAN", severity: "INFO", time: "15 min ago", color: "green" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: { text: "text-green-400", bg: "bg-green-400", border: "border-green-400" },
      cyan: { text: "text-cyan-400", bg: "bg-cyan-400", border: "border-cyan-400" },
      purple: { text: "text-purple-400", bg: "bg-purple-400", border: "border-purple-400" },
      pink: { text: "text-pink-400", bg: "bg-pink-400", border: "border-pink-400" },
      red: { text: "text-red-400", bg: "bg-red-400", border: "border-red-400" },
      yellow: { text: "text-yellow-400", bg: "bg-yellow-400", border: "border-yellow-400" },
      orange: { text: "text-orange-400", bg: "bg-orange-400", border: "border-orange-400" }
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />
      
      {/* Floating security elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-red-400 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `data-flow ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {['SECURE', 'ENCRYPT', 'PROTECT', 'SHIELD'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 mb-6 cyber-glitch">
            CYBER SECURITY
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto hologram-flicker">
            Advanced threat protection with quantum encryption and AI-powered defense systems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Security Dashboard */}
          <div className="lg:col-span-2">
            <div className="bg-black/80 border-2 border-red-400 rounded-xl p-8 backdrop-blur-sm">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-red-400/30">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-400 rounded-full neon-pulse" />
                  <span className="text-red-400 font-mono font-bold">SECURITY_PROTOCOL_V4.0</span>
                </div>
                <div className="text-green-400 font-mono text-sm neon-pulse">
                  ALL SYSTEMS SECURE
                </div>
              </div>

              {/* Security metrics */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {securityMetrics.map((metric, index) => {
                  const colors = getColorClasses(metric.color);
                  return (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className={`font-mono text-sm ${colors.text} neon-pulse`}>
                          {metric.label}
                        </span>
                        <span className="text-white font-bold">
                          {metric.value}
                        </span>
                      </div>
                      
                      {/* Security level bar */}
                      <div className={`w-full bg-gray-800 h-3 rounded-full border ${colors.border} overflow-hidden`}>
                        <div 
                          className={`h-full ${colors.bg} rounded-full transition-all duration-2000 ease-out neon-pulse`}
                          style={{ 
                            width: `${metric.level}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        />
                      </div>
                      
                      <div className="text-xs text-gray-500 text-right">
                        {metric.level}% SECURE
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Threat detection visualization */}
              <div className="border-t border-gray-600 pt-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-4 neon-pulse">
                  REAL-TIME THREAT MONITORING
                </h3>
                
                <div className="bg-black/60 border border-cyan-400/30 rounded-lg p-4 font-mono text-xs">
                  <div className="text-cyan-400 mb-2">[SCANNING] Network perimeter...</div>
                  <div className="text-green-400 mb-2">[SECURE] Firewall active - 0 threats detected</div>
                  <div className="text-yellow-400 mb-2">[MONITOR] AI analyzing traffic patterns</div>
                  <div className="text-purple-400 mb-2">[ENCRYPT] Quantum encryption enabled</div>
                  <div className="text-pink-400">[STATUS] All defense systems operational</div>
                </div>
              </div>
            </div>
          </div>

          {/* Threat Log */}
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 mb-6 neon-pulse">
              THREAT LOG
            </h3>
            
            <div className="space-y-4">
              {threats.map((threat, index) => {
                const colors = getColorClasses(threat.color);
                return (
                  <div 
                    key={index} 
                    className="bg-gray-900/50 border-l-4 border-red-400 rounded-lg p-4 hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-sm font-bold ${colors.text}`}>
                        {threat.type}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">
                        {threat.time}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className={`text-xs font-mono px-2 py-1 rounded border ${colors.text} ${colors.border} hologram-flicker`}>
                        {threat.status}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        threat.severity === 'HIGH' ? 'text-red-400 bg-red-400/10' :
                        threat.severity === 'MEDIUM' ? 'text-yellow-400 bg-yellow-400/10' :
                        threat.severity === 'LOW' ? 'text-orange-400 bg-orange-400/10' :
                        'text-green-400 bg-green-400/10'
                      }`}>
                        {threat.severity}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Security stats */}
            <div className="mt-8 p-6 bg-black/60 border border-purple-400/30 rounded-lg">
              <h4 className="text-purple-400 font-bold mb-4 neon-pulse">24H STATISTICS</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Threats Blocked:</span>
                  <span className="text-green-400 font-mono">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Scan Attempts:</span>
                  <span className="text-cyan-400 font-mono">892,334</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Data Encrypted:</span>
                  <span className="text-pink-400 font-mono">2.3 TB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Uptime:</span>
                  <span className="text-purple-400 font-mono">99.97%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10">ACTIVATE DEFENSE MATRIX</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
} 