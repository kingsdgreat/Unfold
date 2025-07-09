"use client";

import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Kayla M.",
      role: "Beta Tester",
      initials: "KM",
      bgColor: "bg-[#6366F1]",
      rating: 4,
      text: "I was impressed by how naturally the app wove health data into the journaling experience. I didn't feel overwhelmed, it just made sense. You start writing, and the context is already there. It's the kind of clarity I didn't expect from an app."
    },
    {
      id: 2,
      name: "Dr. Seyi L.",
      role: "Therapist",
      initials: "SL",
      bgColor: "bg-[#EC4899]",
      rating: 4,
      text: "As someone in mental health, I see huge potential here. The app lets users check in with themselves in a structured, low-friction way. The blend of self-reflection and physiological awareness is a big win."
    },
    {
      id: 3,
      name: "Raj P.",
      role: "",
      initials: "RP",
      bgColor: "bg-[#3B82F6]",
      rating: 5,
      text: "The way it blends reflection with real data is exactly what many (including myself) don't know they needed."
    },
    {
      id: 4,
      name: "Tesfaye A.",
      role: "Freelance Writer",
      initials: "TA",
      bgColor: "bg-[#3B82F6]",
      rating: 5,
      text: "Tbh, I was bored and stumbled on this app through a mention. It's a mediation."
    },
    {
      id: 5,
      name: "Joy R.",
      role: "Freelance Writer",
      initials: "JR",
      bgColor: "bg-[#3B82F6]",
      rating: 5,
      text: "This app feels like a gentle check-in, not a task. The moment I started seeing how my mood, sleep, and recovery connect, I stopped guessing and started being honest with myself"
    },
    {
      id: 6,
      name: "Melinda O.",
      role: "Freelance Writer",
      initials: "AT",
      bgColor: "bg-[#8B5CF6]",
      rating: 5,
      text: "It's more than a journal. It's a diary, a mirror that shows me how I've really been doing. Bit like a soft nudge from a friend who's paying attention."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-orange-400 fill-current' : 'text-gray-300'
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-[40px] md:text-[48px] font-bold text-center text-[#151318] mb-16 font-nunito leading-tight">
          From Moments to Meaning: What Users Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-bold text-sm mr-4`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-[#151318] text-lg">
                    {testimonial.name}
                  </h3>
                  {testimonial.role && (
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}
                    </p>
                  )}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#151318] leading-relaxed text-base">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}