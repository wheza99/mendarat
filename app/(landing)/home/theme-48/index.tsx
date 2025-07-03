'use client';

import Hero from './components/hero';
import CellularGrid from './components/cellular-grid';
import BioTech from './components/bio-tech';
import OrganicFlow from './components/organic-flow';
import NatureServices from './components/nature-services';
import BiometricContact from './components/biometric-contact';

export default function Theme48() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 text-slate-800 relative overflow-hidden">
      {/* Organic Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* DNA Helix Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 70%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)
              `
            }}
          />
        </div>
        
        {/* Floating Organic Cells */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-emerald-200 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-teal-300 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-20 h-8 bg-green-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-8 h-16 bg-cyan-200 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-emerald-300 rounded-full opacity-70 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-teal-200 rounded-full opacity-50 animate-pulse"></div>
        
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path 
            d="M 50 50 Q 200 100 400 80 T 700 120 Q 900 140 1100 100"
            stroke="url(#neuralGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M 100 200 Q 300 250 500 220 T 800 260 Q 1000 280 1200 240"
            stroke="url(#neuralGradient)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <path 
            d="M 0 300 Q 200 350 400 320 T 700 360 Q 900 380 1100 340"
            stroke="url(#neuralGradient)" 
            strokeWidth="1" 
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </svg>
        
        {/* Organic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-50/30 via-transparent to-emerald-50/20"></div>
      </div>

      {/* Components */}
      <div className="relative z-10">
        <Hero />
        <CellularGrid />
        <BioTech />
        <OrganicFlow />
        <NatureServices />
        <BiometricContact />
      </div>
    </div>
  );
} 