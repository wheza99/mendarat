'use client';

import Hero from './components/hero';
import NeuralNetwork from './components/neural-network';
import AICore from './components/ai-core';
import SynapticFlow from './components/synaptic-flow';
import CognitiveServices from './components/cognitive-services';
import BrainInterface from './components/brain-interface';

export default function Theme50() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
      {/* Neural Network Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Brain Wave Gradient Background */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at top, rgba(59, 130, 246, 0.6), transparent 60%),
                radial-gradient(ellipse at bottom left, rgba(147, 51, 234, 0.4), transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(6, 182, 212, 0.5), transparent 55%),
                radial-gradient(ellipse at center, rgba(34, 197, 94, 0.3), transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Floating Neural Nodes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-80 animate-neural-pulse"></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-purple-400 rounded-full opacity-70 animate-neural-drift"></div>
        <div className="absolute bottom-40 left-40 w-5 h-5 bg-cyan-400 rounded-full opacity-60 animate-neural-float"></div>
        <div className="absolute bottom-20 right-24 w-2 h-2 bg-green-400 rounded-full opacity-90 animate-neural-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-indigo-400 rounded-full opacity-50 animate-neural-drift"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-teal-400 rounded-full opacity-80 animate-neural-float"></div>
        
        {/* Neural Connection Network */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="neuralGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#9333EA" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#06B6D4" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="neuralGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Neural Network Connections */}
          <path 
            d="M 100 150 Q 300 100 500 150 T 900 170 Q 1100 120 1300 150"
            stroke="url(#neuralGradient1)" 
            strokeWidth="2" 
            fill="none"
            className="animate-neural-signal"
          />
          <path 
            d="M 50 250 Q 250 200 450 250 T 850 270 Q 1050 220 1250 250"
            stroke="url(#neuralGradient2)" 
            strokeWidth="2" 
            fill="none"
            className="animate-neural-signal"
            style={{ animationDelay: '1.5s' }}
          />
          <path 
            d="M 150 350 Q 350 300 550 350 T 950 370 Q 1150 320 1350 350"
            stroke="url(#neuralGradient1)" 
            strokeWidth="2" 
            fill="none"
            className="animate-neural-signal"
            style={{ animationDelay: '3s' }}
          />
          <path 
            d="M 0 450 Q 200 400 400 450 T 800 470 Q 1000 420 1200 450"
            stroke="url(#neuralGradient2)" 
            strokeWidth="2" 
            fill="none"
            className="animate-neural-signal"
            style={{ animationDelay: '4.5s' }}
          />
        </svg>
        
        {/* Synaptic Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.4) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 2px, transparent 2px),
                radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px, 120px 120px, 40px 40px',
              animation: 'neural-grid 15s linear infinite'
            }}
          />
        </div>
        
        {/* Brain Interface Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-blue-900/10"></div>
      </div>

      {/* Components */}
      <div className="relative z-10">
        <Hero />
        <NeuralNetwork />
        <AICore />
        <SynapticFlow />
        <CognitiveServices />
        <BrainInterface />
      </div>
    </div>
  );
} 