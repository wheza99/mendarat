import React from 'react';
import MysticHero from './components/mystic-hero';
import EnchantedFeatures from './components/enchanted-features';
import MysticShowcase from './components/mystic-showcase';
import MysticServices from './components/mystic-services';
import SpellSection from './components/spell-section';
import MysticContact from './components/mystic-contact';

export default function HomePageTheme117() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-violet-900 text-purple-100 relative overflow-x-hidden">
      {/* Mystical background pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-violet-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='0.2'%3E%3Cpath d='M40 0l40 40-40 40L0 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      {/* Floating mystical elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 text-purple-400 animate-pulse">
          ✨
        </div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 text-indigo-400 animate-bounce">
          🔮
        </div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 text-violet-400 animate-spin">
          🌟
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 text-purple-300 animate-pulse">
          💫
        </div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 text-indigo-500 animate-bounce">
          ✨
        </div>
      </div>
      
      {/* Mystical grid pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 text-purple-400 text-sm opacity-60 animate-pulse font-serif">
          ✨ MYSTICAL
        </div>
        <div className="absolute bottom-20 right-20 text-indigo-400 text-sm opacity-60 animate-pulse font-serif">
          🔮 ENCHANTED
        </div>
        <div className="absolute top-1/2 left-10 text-violet-400 text-sm opacity-60 animate-pulse font-serif">
          🌟 MAGICAL
        </div>
        <div className="absolute top-1/2 right-10 text-purple-300 text-sm opacity-60 animate-pulse font-serif">
          💫 SPIRITUAL
        </div>
      </div>
      
      {/* Mystical border effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse"></div>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-violet-400 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <MysticHero />
        <EnchantedFeatures />
        <MysticShowcase />
        <MysticServices />
        <SpellSection />
        <MysticContact />
      </div>
    </div>
  );
} 