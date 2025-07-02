import { Hero, Stats, Services, Projects, Contact } from "./components";

export default function Theme29() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-96 bg-gradient-to-t from-teal-200 to-cyan-300 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-48 bg-gradient-to-r from-lime-200 to-green-300 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
} 