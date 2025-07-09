import React from 'react';

export default function CreativeProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your goals, audience, and vision to create a solid foundation",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Strategy",
      description: "Develop a comprehensive strategy that aligns with your business objectives and target audience",
      icon: "📋"
    },
    {
      number: "03",
      title: "Design",
      description: "Create stunning visuals and user experiences that bring your brand to life",
      icon: "🎨"
    },
    {
      number: "04",
      title: "Development",
      description: "Build robust, scalable solutions that perform flawlessly across all platforms",
      icon: "⚙️"
    },
    {
      number: "05",
      title: "Launch",
      description: "Deploy your project with confidence, backed by thorough testing and optimization",
      icon: "🚀"
    },
    {
      number: "06",
      title: "Support",
      description: "Ongoing maintenance and support to ensure your project continues to thrive",
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology that ensures every project delivers exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-black text-lg rounded-full flex items-center justify-center">
                {step.number}
              </div>
              
              {/* Step icon */}
              <div className="text-4xl mb-6 mt-4">{step.icon}</div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {/* Connecting line for visual flow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Process timeline for mobile */}
        <div className="lg:hidden mt-12">
          <div className="flex flex-col space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-sm rounded-full flex items-center justify-center">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 