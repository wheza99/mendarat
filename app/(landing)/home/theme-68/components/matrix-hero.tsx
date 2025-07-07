import React, { useState, useEffect } from 'react';

export default function MatrixHero() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'WELCOME TO THE MATRIX';

  const [stats, setStats] = useState({
    nodes: 0,
    connections: 0,
    dataStreams: 0,
    processes: 0
  });

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Animated statistics
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        nodes: Math.min(prev.nodes + Math.floor(Math.random() * 10), 2547),
        connections: Math.min(prev.connections + Math.floor(Math.random() * 15), 8934),
        dataStreams: Math.min(prev.dataStreams + Math.floor(Math.random() * 5), 1247),
        processes: Math.min(prev.processes + Math.floor(Math.random() * 20), 5632)
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
      {/* Background Terminal Window */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Terminal Header */}
        <div className="bg-black border-2 border-green-500 rounded-t-lg p-4 mb-0 font-mono">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-matrix-pulse"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2 animate-matrix-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-matrix-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="text-green-500 text-sm">MATRIX_TERMINAL_v2.1.0</div>
          </div>
        </div>

        {/* Main Terminal Content */}
        <div className="bg-black border-2 border-green-500 border-t-0 rounded-b-lg p-8 font-mono text-left">
          {/* Command Line */}
          <div className="text-green-500 mb-6">
            <span className="text-cyan-500">root@matrix:~$</span> initialize_welcome_protocol
          </div>

          {/* Typed Welcome Message */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-500 animate-matrix-neon-glow">
              {typedText}
              <span className="animate-matrix-cursor">█</span>
            </h1>
            <div className="text-xl md:text-2xl text-cyan-500 mb-6 animate-matrix-fade-in">
              NEURAL NETWORK INTERFACE ACTIVATED
            </div>
            <div className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed animate-matrix-fade-in" style={{animationDelay: '2s'}}>
              Enter the digital realm where reality meets virtuality. Experience the future of human-machine interaction through our advanced cybernetic systems.
            </div>
          </div>

          {/* System Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="border border-green-500/30 rounded-lg p-4 bg-green-500/5 hover:bg-green-500/10 transition-all duration-300 animate-matrix-fade-in" style={{animationDelay: '2.5s'}}>
              <div className="text-green-500 text-sm mb-1">ACTIVE_NODES</div>
              <div className="text-2xl font-bold text-white">{stats.nodes.toLocaleString()}</div>
              <div className="text-xs text-green-500/70">ONLINE</div>
            </div>
            
            <div className="border border-cyan-500/30 rounded-lg p-4 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all duration-300 animate-matrix-fade-in" style={{animationDelay: '3s'}}>
              <div className="text-cyan-500 text-sm mb-1">CONNECTIONS</div>
              <div className="text-2xl font-bold text-white">{stats.connections.toLocaleString()}</div>
              <div className="text-xs text-cyan-500/70">ESTABLISHED</div>
            </div>
            
            <div className="border border-magenta-500/30 rounded-lg p-4 bg-magenta-500/5 hover:bg-magenta-500/10 transition-all duration-300 animate-matrix-fade-in" style={{animationDelay: '3.5s'}}>
              <div className="text-magenta-500 text-sm mb-1">DATA_STREAMS</div>
              <div className="text-2xl font-bold text-white">{stats.dataStreams.toLocaleString()}</div>
              <div className="text-xs text-magenta-500/70">FLOWING</div>
            </div>
            
            <div className="border border-blue-500/30 rounded-lg p-4 bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-300 animate-matrix-fade-in" style={{animationDelay: '4s'}}>
              <div className="text-blue-500 text-sm mb-1">PROCESSES</div>
              <div className="text-2xl font-bold text-white">{stats.processes.toLocaleString()}</div>
              <div className="text-xs text-blue-500/70">RUNNING</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-matrix-fade-in" style={{animationDelay: '4.5s'}}>
            <button className="group relative px-8 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 animate-matrix-pulse">
              <span className="relative z-10">ENTER THE MATRIX</span>
              <div className="absolute inset-0 bg-green-500 rounded-lg animate-matrix-neon-pulse"></div>
            </button>
            
            <button className="group relative px-8 py-3 border-2 border-cyan-500 text-cyan-500 font-bold rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">SYSTEM DIAGNOSTICS</span>
              <div className="absolute inset-0 bg-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Command Prompt */}
          <div className="mt-8 text-green-500 animate-matrix-fade-in" style={{animationDelay: '5s'}}>
            <span className="text-cyan-500">root@matrix:~$</span> 
            <span className="animate-matrix-cursor">█</span>
          </div>
        </div>

        {/* Holographic Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-green-500/30 rounded-full animate-matrix-hologram">
          <div className="absolute inset-2 border border-green-500/50 rounded-full animate-matrix-hologram-reverse"></div>
        </div>
        
        <div className="absolute -bottom-10 -right-10 w-16 h-16 border-2 border-cyan-500/30 rounded-full animate-matrix-hologram">
          <div className="absolute inset-2 border border-cyan-500/50 rounded-full animate-matrix-hologram-reverse"></div>
        </div>

        {/* Floating Code Fragments */}
        <div className="absolute top-1/4 left-10 text-green-500/30 font-mono text-xs animate-matrix-float">
          {'{ "status": "online" }'}
        </div>
        <div className="absolute bottom-1/4 right-10 text-cyan-500/30 font-mono text-xs animate-matrix-float" style={{animationDelay: '2s'}}>
          {'console.log("matrix_loaded")'}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-matrix-fade-in" style={{animationDelay: '6s'}}>
        <div className="text-green-500 text-sm mb-2 text-center">SCROLL TO CONTINUE</div>
        <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-500 rounded-full mt-2 animate-matrix-scroll"></div>
        </div>
      </div>
    </section>
  );
} 