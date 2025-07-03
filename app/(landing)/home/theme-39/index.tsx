'use client';

import Hero from './components/hero';
import OceanLab from './components/ocean-lab';
import MarineLife from './components/marine-life';
import DeepSea from './components/deep-sea';
import Research from './components/research';
import Contact from './components/contact';

export default function Theme39() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-950 via-blue-950 to-indigo-950 text-white">
      <Hero />
      <OceanLab />
      <MarineLife />
      <DeepSea />
      <Research />
      <Contact />
    </div>
  );
} 