'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { Briefcase, Code2 } from 'lucide-react';

const experiences = [
  {
    title: 'Industrial Practical Training',
    organization: 'DIT Computer Center',
    period: '24 August 2026 – 23 October 2026',
    description:
      'Completed industrial practical training as part of the Computer Engineering programme.',
    icon: Briefcase,
  },
  {
    title: 'Independent Software & Security Projects',
    organization: 'Personal project work',
    period: 'Ongoing',
    description:
      'Building and maintaining IcaShop, a production e-commerce project, and developing ThreatWatch, a defensive security monitoring platform.',
    icon: Code2,
  },
];

export function Experience() {
  return (
    <SectionWrapper id="experience" className="relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Practical training and independent project work"
        />

        <div className="relative space-y-8">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent" aria-hidden="true" />
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-1 p-2 rounded-full bg-background border border-cyan-500/40">
                <experience.icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                <p className="text-cyan-400 text-sm mb-2">{experience.organization}</p>
                <p className="text-xs text-muted-foreground mb-3">{experience.period}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
