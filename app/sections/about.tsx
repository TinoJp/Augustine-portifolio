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
    description: 'Learning to build maintainable server-side applications and practical backend features.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Studying defensive security, networking, Linux, and application security through authorised practice.',
  },
  {
    icon: Server,
    title: 'System Design',
    description: 'Practising database modelling, API structure, and the design of reliable applications.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Developing technical skills through coursework, personal projects, and hands-on practice.',
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Hello! I&apos;m a <span className="text-foreground font-medium">Computer Engineering student</span> with a strong interest in technology and software development. I enjoy understanding how systems work and turning that knowledge into practical projects.
              </p>
              <p>
                I am developing my backend engineering skills with Java, Spring Boot, Python, FastAPI, REST APIs, and relational databases such as PostgreSQL. I focus on learning sound development practices and applying them in working projects.
              </p>
              <p>
                I am also building my knowledge of <span className="text-cyan-400">cybersecurity</span>, especially defensive security, network fundamentals, Linux, and application security. I believe security should be considered throughout the development process.
              </p>
              <p>
                My long-term goal is to become a professional engineer who can design, build, and secure reliable technology systems. I am open to opportunities that help me learn, contribute, and grow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-cyan-400 border-cyan-500/20">
                Problem Solving
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 border-blue-500/20">
                Teamwork
              </span>
              <span className="px-4 py-2 rounded-full glass text-sm font-medium text-purple-400 border-purple-500/20">
                Continuous Learning
              </span>
            </div>
          </motion.div>

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
                    <item.icon className="w-6 h-6 text-cyan-400" aria-hidden="true" />
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
