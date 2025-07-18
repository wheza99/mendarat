'use client';

import Hero from './components/hero';
import Stats from './components/stats';
import Services from './components/services';
import Projects from './components/projects';
import Team from './components/team';
import Clients from './components/clients';
import Process from './components/process';
import Testimonials from './components/testimonials';
import Pricing from './components/pricing';
import Contact from './components/contact';

export default function Theme39() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-950 via-blue-950 to-indigo-950 text-white">
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Team />
      <Clients />
      <Process />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
}