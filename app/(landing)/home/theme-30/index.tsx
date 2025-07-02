import { Hero, Stats, Services, Projects, Contact } from "./components";

export default function Theme30() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black relative overflow-hidden">
      {/* Retro Gaming Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Pixel Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,0,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Floating Pixel Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-pink-400 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-yellow-400 animate-ping"></div>
        <div className="absolute bottom-20 right-1/4 w-4 h-4 bg-green-400 animate-bounce"></div>
        
        {/* Neon Glow Effects */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-pink-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
} 