'use client';

import { Hero, QuantumLab, AIResearch, NeuralNetwork, Computing, Contact } from './components';

export default function Theme38() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Matrix rain effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-transparent matrix-drop"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Neural pathways */}
        <div className="absolute inset-0 neural-pathways opacity-10" />
        
        {/* Quantum particles */}
        <div className="absolute inset-0 quantum-field opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <QuantumLab />
        <AIResearch />
        <NeuralNetwork />
        <Computing />
        <Contact />
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .neural-pathways {
          background: radial-gradient(
            circle at 20% 30%,
            rgba(16, 185, 129, 0.15) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 80% 70%,
            rgba(34, 197, 94, 0.15) 0%,
            transparent 50%
          ),
          linear-gradient(
            45deg,
            transparent 40%,
            rgba(16, 185, 129, 0.05) 50%,
            transparent 60%
          );
          animation: neural-pulse 4s ease-in-out infinite alternate;
        }
        
        .quantum-field {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            rgba(34, 197, 94, 0.1) 1px,
            transparent 2px,
            transparent 80px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            rgba(16, 185, 129, 0.1) 1px,
            transparent 2px,
            transparent 80px
          );
          animation: quantum-shift 6s linear infinite;
        }
        
        .matrix-drop {
          animation: matrix-fall 4s linear infinite;
        }
        
        @keyframes neural-pulse {
          0% { transform: scale(1) translateX(-5px); opacity: 0.3; }
          100% { transform: scale(1.02) translateX(5px); opacity: 0.1; }
        }
        
        @keyframes quantum-shift {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0) translateX(10px); }
          75% { transform: translateY(10px) translateX(5px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes data-flow {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes quantum-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.5), 
                        0 0 40px rgba(34, 197, 94, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(16, 185, 129, 0.8), 
                        0 0 80px rgba(34, 197, 94, 0.5);
          }
        }
        
        @keyframes neural-flicker {
          0%, 100% { opacity: 1; }
          25% { opacity: 0.8; }
          50% { opacity: 1; }
          75% { opacity: 0.9; }
        }
        
        @keyframes circuit-trace {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        
        .quantum-glow { animation: quantum-glow 3s ease-in-out infinite; }
        .neural-flicker { animation: neural-flicker 0.2s infinite; }
        .data-flow { animation: data-flow 8s linear infinite; }
        .circuit-trace { animation: circuit-trace 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
} 