export default function Contact() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-24">
          <div className="flex items-center gap-8 mb-12">
            <div className="text-8xl md:text-9xl font-extralight text-gray-300">
              05
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-tight">
                CONTACT
              </h2>
              <div className="w-24 h-px bg-blue-500 mt-4" />
            </div>
          </div>
          <p className="text-xl text-gray-600 font-light max-w-3xl">
            Ready to bring your vision to life? Let's discuss how we can create something exceptional together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24">
          {/* Contact form */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                Start a Conversation
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Every project begins with understanding. Share your vision, 
                and we'll explore how to bring it to life through thoughtful design.
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm tracking-wide text-gray-700 font-light uppercase">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-gray-900 font-light focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm tracking-wide text-gray-700 font-light uppercase">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-gray-900 font-light focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm tracking-wide text-gray-700 font-light uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-gray-900 font-light focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  placeholder="john.smith@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm tracking-wide text-gray-700 font-light uppercase">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-gray-900 font-light focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="group px-12 py-4 bg-gray-900 text-white font-light tracking-wide hover:bg-gray-800 transition-all duration-300 minimal-pulse"
                >
                  <span className="flex items-center gap-3">
                    SEND MESSAGE
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Contact information */}
          <div className="space-y-16">
            {/* Office info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-light text-gray-900 tracking-wide">
                Visit Our Studio
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm tracking-widest text-gray-500 font-light uppercase mb-2">
                    ADDRESS
                  </div>
                  <div className="text-gray-700 font-light leading-relaxed">
                    123 Design Street<br />
                    Creative District<br />
                    New York, NY 10001
                  </div>
                </div>

                <div>
                  <div className="text-sm tracking-widest text-gray-500 font-light uppercase mb-2">
                    CONTACT
                  </div>
                  <div className="text-gray-700 font-light space-y-1">
                    <div>hello@studio.com</div>
                    <div>+1 (555) 123-4567</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm tracking-widest text-gray-500 font-light uppercase mb-2">
                    HOURS
                  </div>
                  <div className="text-gray-700 font-light leading-relaxed">
                    Monday — Friday<br />
                    9:00 AM — 6:00 PM EST
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 border-2 border-gray-400 mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-gray-600 font-light">
                    Interactive Map
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-6">
              <h4 className="text-lg font-medium text-gray-900 tracking-wide">
                Follow Our Work
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { platform: "INSTAGRAM", handle: "@studio" },
                  { platform: "BEHANCE", handle: "/studio" },
                  { platform: "DRIBBBLE", handle: "/studio" },
                  { platform: "LINKEDIN", handle: "/company/studio" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group flex items-center gap-3 p-4 border border-gray-200 hover:border-gray-900 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-gray-400 group-hover:bg-blue-500 transition-colors duration-300" />
                    <div className="text-sm text-gray-600 font-light tracking-wide group-hover:text-gray-900 transition-colors duration-300">
                      {social.platform}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-32 pt-16 border-t border-gray-200 text-center">
          <h3 className="text-3xl font-extralight text-gray-900 mb-6 tracking-tight">
            LET'S CREATE TOGETHER
          </h3>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Great design happens through collaboration. We're excited to learn about your vision 
            and explore how we can bring it to life through thoughtful, purposeful design.
          </p>
        </div>
      </div>
    </section>
  );
} 