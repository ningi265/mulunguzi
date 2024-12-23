'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content:
      'The English Department at Mulunguzi has truly transformed my writing skills and love for literature.',
    author: 'Sarah Banda',
    role: 'Form 4 Student',
  },
  {
    id: 2,
    content:
      'I&apos;ve discovered my passion for creative writing thanks to the inspiring teachers and diverse curriculum.',
    author: 'John Phiri',
    role: 'Form 3 Student',
  },
  {
    id: 3,
    content:
      'The language programs offered here have opened up new opportunities for my future studies abroad.',
    author: 'Mary Chirwa',
    role: 'Form 4 Student',
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getInitials = (name: string): string => {
    const initials = name
      .split(' ')
      .map((word) => word[0])
      .join('');
    return initials;
  }
  

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-indigo-800">
          What Our Students Say
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-lg mb-6 text-gray-700 italic">
                    {"&quot;" + testimonial.content + "&quot;"}
                    </p>
                    <div className="flex items-center">
                      {/* Profile Icon */}
                      <div className="w-12 h-12 flex items-center justify-center bg-indigo-200 text-indigo-800 rounded-full mr-4 font-bold text-lg">
                        {getInitials(testimonial.author)}
                      </div>
                      <div>
                        <p className="font-semibold text-indigo-800">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white p-2 rounded-full shadow-md hover:bg-indigo-100 transition duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-indigo-800" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white p-2 rounded-full shadow-md hover:bg-indigo-100 transition duration-300"
          >
            <ChevronRight className="w-6 h-6 text-indigo-800" />
          </button>
        </div>
      </div>
    </section>
  );
}
