import React from 'react';

interface ProcessProps {
  className?: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export default function Process({ className = '' }: ProcessProps) {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements.',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Our team creates a detailed project roadmap with timelines, milestones, and deliverables.',
      icon: '📋'
    },
    {
      number: '03',
      title: 'Design',
      description: 'We craft beautiful, user-centered designs that align with your brand and objectives.',
      icon: '🎨'
    },
    {
      number: '04',
      title: 'Development',
      description: 'Our developers bring the designs to life with clean, efficient, and scalable code.',
      icon: '💻'
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures your project works flawlessly across all devices and browsers.',
      icon: '🧪'
    },
    {
      number: '06',
      title: 'Launch',
      description: 'We deploy your project and provide ongoing support to ensure continued success.',
      icon: '🚀'
    }
  ];

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a proven methodology to deliver exceptional results for every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {step.number}
                  </div>
                  <div className="text-2xl">{step.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-gray-300 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}