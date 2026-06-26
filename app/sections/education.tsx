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
  { name: 'Cybersecurity', icon: Shield },
  { name: 'Software Engineering', icon: BookOpen },
];

export function Education() {
  return (
    <SectionWrapper id="education" className="relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation and relevant coursework"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main education card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard glow="blue" className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Bachelor of Science</h3>
                  <p className="text-lg text-cyan-400 font-medium">Computer Engineering</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Currently pursuing degree in Computer Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Focus on software development and system architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Active participation in coding competitions and hackathons</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Member of computer science and cybersecurity clubs</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;Education is not the learning of facts, but the training of the mind to think.&rdquo;
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Albert Einstein</p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Coursework grid */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Relevant Coursework</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {coursework.map((course, index) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <GlassCard className="p-4 flex items-center gap-3 hover:border-cyan-500/30 transition-colors">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                      <course.icon className="w-5 h-5 text-cyan-400" />
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
