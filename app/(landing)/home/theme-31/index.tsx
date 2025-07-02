import { Hero, Stats, Services, Projects, Contact } from "./components";

export default function Theme31() {
  return (
    <div className="vintage-newspaper-theme min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 relative">
      {/* Vintage Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(101, 67, 33, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px, 30px 30px, 40px 40px'
          }}
        />
      </div>

      {/* Newspaper Border */}
      <div className="absolute inset-0 border-8 border-amber-900 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-800 via-orange-800 to-amber-800"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-800 via-orange-800 to-amber-800"></div>
      </div>

      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
} 