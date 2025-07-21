import React from 'react';

interface TestimonialsProps {
  className?: string;
}

interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export default function Testimonials({ className = '' }: TestimonialsProps) {
  const testimonials: Testimonial[] = [
    {
      name: 'David Thompson',
      position: 'CEO',
      company: 'TechCorp Inc.',
      content: 'Outstanding work! The team delivered exactly what we needed and exceeded our expectations. The project was completed on time and within budget.',
      avatar: '/avatars/david.jpg',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      position: 'Marketing Director',
      company: 'Digital Solutions',
      content: 'Professional, reliable, and creative. They transformed our vision into reality with exceptional attention to detail and user experience.',
      avatar: '/avatars/maria.jpg',
      rating: 5
    },
    {
      name: 'James Wilson',
      position: 'CTO',
      company: 'StartupXYZ',
      content: 'The technical expertise and problem-solving skills of this team are impressive. They helped us scale our platform efficiently.',
      avatar: '/avatars/james.jpg',
      rating: 5
    },
    {
      name: 'Sophie Chen',
      position: 'Product Manager',
      company: 'InnovateLab',
      content: 'Excellent communication throughout the project. They understood our requirements perfectly and delivered a solution that works flawlessly.',
      avatar: '/avatars/sophie.jpg',
      rating: 5
    },
    {
      name: 'Robert Brown',
      position: 'Founder',
      company: 'GrowthCo',
      content: 'I highly recommend this team. Their expertise in modern technologies and commitment to quality is unmatched in the industry.',
      avatar: '/avatars/robert.jpg',
      rating: 5
    },
    {
      name: 'Anna Martinez',
      position: 'Operations Manager',
      company: 'EfficiencyPro',
      content: 'They delivered a robust solution that has significantly improved our operational efficiency. Great team to work with!',
      avatar: '/avatars/anna.jpg',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyNCIgY3k9IjI0IiByPSIyNCIgZmlsbD0iIzlDQTNBRiIvPjxjaXJjbGUgY3g9IjI0IiBjeT0iMjAiIHI9IjgiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTEyIDM2IEMxMiAzMCAxNyAyNiAyNCAyNiBTMzYgMzAgMzYgMzYiIGZpbGw9IndoaXRlIi8+PC9zdmc+';
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}