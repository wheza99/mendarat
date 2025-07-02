"use client";

import { useState, useEffect, useRef } from "react";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    growth: 0,
    impact: 0
  });
  const sectionRef = useRef(null);

  const finalValues = {
    projects: 250,
    clients: 180,
    growth: 95,
    impact: 350
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounters({
          projects: Math.floor(finalValues.projects * easeOutQuart),
          clients: Math.floor(finalValues.clients * easeOutQuart),
          growth: Math.floor(finalValues.growth * easeOutQuart),
          impact: Math.floor(finalValues.impact * easeOutQuart)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(finalValues);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: "🌱",
      value: counters.projects,
      suffix: "+",
      label: "Growing Projects",
      description: "Digital seeds planted",
      color: "from-green-400 to-emerald-600",
      bgColor: "from-green-50 to-emerald-100"
    },
    {
      icon: "🌿",
      value: counters.clients,
      suffix: "+",
      label: "Thriving Partners",
      description: "Ecosystems nurtured",
      color: "from-emerald-400 to-teal-600",
      bgColor: "from-emerald-50 to-teal-100"
    },
    {
      icon: "📈",
      value: counters.growth,
      suffix: "%",
      label: "Organic Growth",
      description: "Natural expansion",
      color: "from-teal-400 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-100"
    },
    {
      icon: "🌳",
      value: counters.impact,
      suffix: "K",
      label: "Lives Impacted",
      description: "Positive influence",
      color: "from-cyan-400 to-blue-600",
      bgColor: "from-cyan-50 to-blue-100"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Organic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-48 bg-teal-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-20 bg-emerald-300 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full mb-6">
            <span className="text-3xl">📊</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Our Growing Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Like nature, our success grows organically through nurturing relationships 
            and sustainable practices.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br ${stat.bgColor} rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl overflow-hidden`}
            >
              {/* Organic Background Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/20 rounded-full blur-sm"></div>
              
              {/* Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              
              {/* Value */}
              <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              
              {/* Label */}
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600">
                {stat.description}
              </p>

              {/* Growth Animation Bar */}
              <div className="mt-4 h-1 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-2000 ease-out`}
                  style={{ 
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${index * 200}ms`
                  }}
                ></div>
              </div>

              {/* Floating Particles */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/40 rounded-full animate-float opacity-60"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${10 + i * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${2 + i * 0.5}s`
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to grow your digital ecosystem?
          </p>
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span>Start Growing</span>
            <div className="ml-2 text-xl group-hover:animate-bounce">🌱</div>
          </button>
        </div>
      </div>
    </section>
  );
} 