import React from 'react';
import CyberHero from './components/cyber-hero';
import TechFeatures from './components/tech-features';
import CyberShowcase from './components/cyber-showcase';
import CyberServices from './components/cyber-services';
import NetworkSection from './components/network-section';
import CyberContact from './components/cyber-contact';

export default function HomePageTheme115() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-cyan-400 relative overflow-x-hidden">
      {/* Cyberpunk grid background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      {/* Floating cyber elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 text-cyan-400 animate-pulse">
          ⚡
        </div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 text-purple-400 animate-bounce">
          🔮
        </div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 text-cyan-300 animate-spin">
          🌐
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 text-purple-300 animate-pulse">
          💻
        </div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 text-cyan-500 animate-bounce">
          ⚡
        </div>
      </div>
      
      {/* Neon scan lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      </div>
      
      {/* Cyber grid pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 text-cyan-400 text-sm opacity-60 animate-pulse font-mono">
          ⚡ CYBER
        </div>
        <div className="absolute bottom-20 right-20 text-purple-400 text-sm opacity-60 animate-pulse font-mono">
          🔮 TECH
        </div>
        <div className="absolute top-1/2 left-10 text-cyan-300 text-sm opacity-60 animate-pulse font-mono">
          🌐 NETWORK
        </div>
        <div className="absolute top-1/2 right-10 text-purple-300 text-sm opacity-60 animate-pulse font-mono">
          💻 FUTURE
        </div>
      </div>
      
      {/* Neon border effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <CyberHero />
        <TechFeatures />
        <CyberShowcase />
        <CyberServices />
        <NetworkSection />
        <CyberContact />
      </div>
    </div>
  );
} 