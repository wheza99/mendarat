// Using direct imports with require() to avoid TypeScript errors
const Hero = require('./components/hero').default;
const Stats = require('./components/stats').default;
const Services = require('./components/services').default;
const Projects = require('./components/projects').default;
const Team = require('./components/team').default;
const Clients = require('./components/clients').default;
const Process = require('./components/process').default;
const Testimonials = require('./components/testimonials').default;
const Pricing = require('./components/pricing').default;
const Contact = require('./components/contact').default;

export default function HomePageTheme8() {
  return (
    <>
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
    </>
  );
}
