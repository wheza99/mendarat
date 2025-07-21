import React from 'react';

interface StatsProps {
  className?: string;
}

interface Stat {
  number: string;
  label: string;
  description: string;
  icon: string;
}

export default function Stats({ className = '' }: StatsProps) {
  const stats: Stat[] = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various industries',
      icon: '🚀'
    },
    {
      number: '250+',
      label: 'Happy Clients',
      description: 'Satisfied clients who trust our expertise and quality',
      icon: '😊'
    },
    {
      number: '50+',
      label: 'Team Members',
      description: 'Skilled professionals dedicated to excellence',
      icon: '👥'
    },
    {
      number: '5+',
      label: 'Years Experience',
      description: 'Years of industry experience and continuous growth',
      icon: '⭐'
    },
    {
      number: '99%',
      label: 'Client Satisfaction',
      description: 'High satisfaction rate from our valued clients',
      icon: '💯'
    },
    {
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock support for all our clients',
      icon: '🛠️'
    }
  ];

  return (
    <section className={`py-16 bg-blue-600 text-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and client success
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-3">{stat.icon}</div>
              
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {stat.number}
              </div>
              
              <div className="text-lg font-semibold mb-2">
                {stat.label}
              </div>
              
              <p className="text-sm text-blue-100 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}