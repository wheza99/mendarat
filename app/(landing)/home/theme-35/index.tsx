'use client';

import { Hero, Features, Impact, Testimonials, CTA, Contact } from './components';

export default function Theme35() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-amber-50 to-emerald-50 relative overflow-hidden">
      {/* Custom CSS for organic animations */}
      <style jsx>{`
        @keyframes gentle-sway {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(10px) rotate(2deg); }
        }
        
        @keyframes grow {
          0% { transform: scale(0.8); }
          100% { transform: scale(1); }
        }
        
        @keyframes float-organic {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
          }
          25% { 
            transform: translateY(-15px) translateX(5px); 
          }
          75% { 
            transform: translateY(-5px) translateX(-3px); 
          }
        }
        
        @keyframes leaf-fall {
          0% { 
            transform: translateY(-20px) rotate(0deg); 
            opacity: 0; 
          }
          10% { 
            opacity: 1; 
          }
          90% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(100vh) rotate(360deg); 
            opacity: 0; 
          }
        }
        
        .animate-sway {
          animation: gentle-sway 4s ease-in-out infinite;
        }
        
        .animate-grow {
          animation: grow 0.6s ease-out;
        }
        
        .animate-float-organic {
          animation: float-organic 6s ease-in-out infinite;
        }
        
        .animate-leaf-fall {
          animation: leaf-fall 8s linear infinite;
        }
      `}</style>
      
      {/* Background organic elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating leaves */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 opacity-20 animate-leaf-fall"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 20}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            🍃
          </div>
        ))}
        
        {/* Organic shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl animate-float-organic" />
        <div className="absolute bottom-32 left-16 w-80 h-80 bg-gradient-to-tr from-amber-200/25 to-yellow-300/15 rounded-full blur-3xl animate-float-organic" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-bl from-lime-200/20 to-green-400/10 rounded-full blur-2xl animate-float-organic" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content Sections */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <Impact />
        <Testimonials />
        <CTA />
        <Contact />
      </div>
    </div>
  );
} 