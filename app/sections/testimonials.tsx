'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Dr. Ahmed Hassan',
    role: 'Professor, Computer Engineering',
    content: 'One of the most dedicated students I have had the pleasure to teach. His approach to problem-solving is methodical and his code quality is exceptional for his level of experience.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Senior Software Engineer',
    content: 'I mentored Engineer during a coding workshop and was impressed by his eagerness to learn and his ability to grasp complex backend concepts quickly. He has great potential.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Tech Lead, StartupX',
    content: 'His Spring Boot project demonstrated solid understanding of REST API design and database normalization. With more experience, he will be an asset to any development team.',
    rating: 5,
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Cybersecurity Analyst',
    content: 'Engineer showed genuine passion for cybersecurity during our workshop sessions. His curiosity and analytical mindset are exactly what the security field needs.',
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <SectionWrapper id="testimonials" className="relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Testimonials"
          subtitle="What people say about working with me"
        />

        <div className="relative">
          <div className="glass rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-cyan-400" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground/90">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonials[current].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? 'w-8 bg-cyan-400' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded-xl glass hover:bg-cyan-500/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-xl glass hover:bg-cyan-500/10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
