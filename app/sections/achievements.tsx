'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { AnimatedCounter } from '@/components/animated-counter';
import { Code2, Layers, Github, Clock } from 'lucide-react';

const stats = [
  {
    icon: Code2,
    value: 15,
    suffix: '+',
    label: 'Projects Completed',
    color: 'text-cyan-400',
    bgColor: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: Layers,
    value: 12,
    suffix: '+',
    label: 'Technologies Learned',
    color: 'text-blue-400',
    bgColor: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    icon: Github,
    value: 50,
    suffix: '+',
    label: 'GitHub Contributions',
    color: 'text-purple-400',
    bgColor: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Clock,
    value: 500,
    suffix: '+',
    label: 'Hours of Learning',
    color: 'text-emerald-400',
    bgColor: 'from-emerald-500/20 to-teal-500/20',
  },
];

export function Achievements() {
  return (
    <SectionWrapper id="achievements" className="relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Achievements"
          subtitle="Numbers that reflect my dedication and growth"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 text-center hover:border-cyan-500/30 transition-all group">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>

                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>

                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
