import React, { Suspense, lazy } from 'react';

// Lazy load all components for better performance
const BioQuantumHero = lazy(() => import('./components/bio-quantum-hero'));
const MolecularLab = lazy(() => import('./components/molecular-lab'));
const DNASequencer = lazy(() => import('./components/dna-sequencer'));
const QuantumCells = lazy(() => import('./components/quantum-cells'));
const BiotechResearch = lazy(() => import('./components/biotech-research'));
const GenomicContact = lazy(() => import('./components/genomic-contact'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-bio-spin"></div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-teal-500 rounded-full animate-bio-counter-spin"></div>
    </div>
  </div>
);

export default function HomePageTheme64() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-950 relative overflow-x-hidden">
      {/* Molecular Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* DNA Helix Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#0d9488" />
              </linearGradient>
            </defs>
            <path d="M0 400 Q300 200 600 400 T1200 400" stroke="url(#dnaGradient)" strokeWidth="2" className="animate-bio-helix" />
            <path d="M0 400 Q300 600 600 400 T1200 400" stroke="url(#dnaGradient)" strokeWidth="2" className="animate-bio-helix-reverse" />
          </svg>
        </div>

        {/* Floating Molecules */}
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-bio-float opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}

        {/* Quantum Particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`quantum-${i}`}
            className={`absolute w-1 h-1 bg-cyan-400 rounded-full animate-bio-quantum opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <BioQuantumHero />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <MolecularLab />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <DNASequencer />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <QuantumCells />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <BiotechResearch />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <GenomicContact />
        </Suspense>
      </div>
    </div>
  );
} 