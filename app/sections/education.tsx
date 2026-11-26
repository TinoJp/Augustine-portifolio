'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { GlassCard } from '@/components/glass-card';
import { GraduationCap, BookOpen, Code2, Database, Network, Shield, Monitor, Layers } from 'lucide-react';

const coursework = [
  { name: 'Data Structures', icon: Code2 },
  { name: 'Object-Oriented Programming', icon: Layers },
  { name: 'Database Systems', icon: Database },
  { name: 'Computer Networks', icon: Network },
  { name: 'Operating Systems', icon: Monitor },
  { name: 'Cybersecurity Fundamentals', icon: Shield },
  { name: 'Software Engineering', icon: BookOpen },
];

export function Education() {
  return (
    <SectionWrapper id="education" className="relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="My current academic programme"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard glow="blue" className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <GraduationCap className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Bachelor of Engineering</h3>
                  <p className="text-lg text-cyan-400 font-medium">Computer Engineering</p>
                </div>
              </div>

              <div className="space-y-3 text-muted-foreground">
                <p>Dar es Salaam Institute of Technology (DIT)</p>
                <p>2024 – 2028 (Expected)</p>
                <p>Currently pursuing an undergraduate degree in Computer Engineering.</p>
              </div>
            </GlassCard>
          </motion.div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Areas of Study</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {coursework.map((course, index) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <GlassCard className="p-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                      <course.icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                    </div>
                    <span className="font-medium text-sm">{course.name}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
