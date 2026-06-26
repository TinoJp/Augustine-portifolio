'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { GlassCard } from '@/components/glass-card';
import { Code2, Shield, Server, BookOpen } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Backend Engineering',
    description: 'Building robust and scalable server-side applications with modern technologies.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Exploring security fundamentals, digital forensics, ',
  },
  {
    icon: Server,
    title: 'System Design',
    description: 'Designing efficient database schemas and RESTful API architectures.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Always expanding my knowledge through courses, projects, and hands-on practice.',
  },
];

export function About() {
  return (
    <SectionWrapper id="about" className="relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Get to know the person behind the code"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Hello! I&apos;m a dedicated <span className="text-foreground font-medium">Computer Engineering Student</span> with a strong passion for technology and software development. My journey in tech began with a curiosity about how things work under the hood, which quickly evolved into a deep interest in backend engineering and cybersecurity.
              </p>
              <p>
                I specialize in building <span className="text-cyan-400">scalable backend systems</span> using Java and Spring Boot, designing RESTful APIs, and working with relational databases like PostgreSQL. I believe in writing clean, maintainable code that solves real-world problems.
              </p>
              <p>
                Beyond backend development, I&apos;m deeply fascinated by <span className="text-cyan-400">cybersecurity</span>. I spend time learning about network security, Linux administration, digital forensics, and security fundamentals. Understanding how to build secure systems is just as important as building functional ones.
              </p>
              <p>
                I thrive on <span className="text-cyan-400">continuous learning</span> and staying up-to-date with the latest technologies and best practices. My goal is to become a professional software engineer who can architect reliable systems while keeping security at the forefront of every design decision.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400 border-cyan-500/20">
                Problem Solver
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 border-blue-500/20">
                Team Player
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-purple-400 border-purple-500/20">
                Fast Learner
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-green-400 border-green-500/20">
                Detail Oriented
              </span>
            </div>
          </motion.div>

          {/* Right - Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard glow="cyan" className="p-6 h-full">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-fit mb-4">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
