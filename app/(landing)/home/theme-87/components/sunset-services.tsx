import React from 'react';

export default function SunsetServices() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Custom web applications built with modern technologies and sunset-inspired design",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
      price: "From $2,999"
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications with stunning UI/UX",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Ready"],
      price: "From $4,999"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that combine aesthetics with functionality",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "From $1,999"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps services for your business",
      features: ["AWS/Azure/GCP", "CI/CD", "Monitoring", "Security"],
      price: "From $3,999"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-600/10 to-transparent"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#f97316_50%,transparent_100%)] bg-[length:100px_100px] animate-sunset-flow"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-sunset">
            Our Services
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions that bring your vision to life with cutting-edge technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="sunset-card p-8 hover-sunset-scale group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="text-5xl animate-sunset-pulse group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 neon-text-orange">
                    {service.title}
                  </h3>
                  <p className="text-orange-200 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4 text-white">Key Features:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-orange-200 text-sm"
                    >
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-sunset-pulse"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold neon-text-pink">
                  {service.price}
                </div>
                <button className="btn-sunset px-6 py-3 rounded-lg font-semibold hover-sunset-scale">
                  Get Started
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text-sunset">
              Our Process
            </h3>
            <p className="text-orange-200 max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap" },
              { step: "03", title: "Development", description: "Building with precision and care" },
              { step: "04", title: "Launch", description: "Deploying and supporting your success" }
            ].map((process, index) => (
              <div
                key={index}
                className="text-center sunset-glass p-6 rounded-2xl hover-sunset-glow"
              >
                <div className="text-4xl font-bold mb-4 neon-text-orange">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  {process.title}
                </h4>
                <p className="text-orange-200 text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="sunset-glass p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 gradient-text-sunset">
                What Our Clients Say
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The sunset-inspired design perfectly captures our brand's warmth and innovation.",
                  author: "Sarah Johnson",
                  role: "CEO, TechStart"
                },
                {
                  quote: "Exceptional quality and attention to detail. The neon effects are stunning!",
                  author: "Mike Chen",
                  role: "Founder, DigitalFlow"
                },
                {
                  quote: "A unique blend of aesthetics and functionality that sets us apart.",
                  author: "Emily Rodriguez",
                  role: "Marketing Director, SunsetCo"
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-400/10 to-pink-400/10"
                >
                  <p className="text-orange-200 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-white font-semibold">
                    {testimonial.author}
                  </div>
                  <div className="text-orange-300 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-1/4 w-24 h-24 border border-orange-400/30 rounded-full animate-sunset-pulse"></div>
      <div className="absolute bottom-10 left-1/4 w-16 h-16 border border-pink-400/30 rounded-full animate-sunset-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
} 