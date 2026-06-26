'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { GraduationCap, Briefcase, Code2, Globe } from 'lucide-react';

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: React.ElementType;
  type: 'academic' | 'personal' | 'open-source' | 'internship';
}

const experiences: ExperienceItem[] = [
  {
    title: 'Academic Projects',
    organization: 'University',
    period: '2022 - Present',
    description: 'Completed multiple academic projects including data structure implementations, OOP-based applications, database management systems, and networking simulations.',
    icon: GraduationCap,
    type: 'academic',
  },
  {
    title: 'Personal Projects',
    organization: 'Self-Directed',
    period: '2022 - Present',
    description: 'Built full-stack applications including a food ordering system with Spring Boot, a student management system in C++, and various cybersecurity lab exercises.',
    icon: Code2,
    type: 'personal',
  },
  {
    title: 'Open Source Contributions',
    organization: 'GitHub Community',
    period: '2023 - Present',
    description: 'Contributing to open-source projects, reporting issues, and collaborating with developers worldwide on backend tools and security utilities.',
    icon: Globe,
    type: 'open-source',
  },
  {
    title: 'Software Engineering Intern',
    organization: 'Future Opportunity',
    period: 'Upcoming',
    description: 'Seeking internship opportunities to gain industry experience in backend development and cybersecurity. Open to remote and on-site positions.',
    icon: Briefcase,
    type: 'internship',
  },
];

const typeColors = {
  academic: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  personal: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'open-source': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  internship: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
};

export function Experience() {
  return (
    <SectionWrapper id="experience" className="relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My journey through projects, academics, and contributions"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-4 border-background z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-3 ${typeColors[exp.type]}`}>
                    <exp.icon className="w-3 h-3" />
                    {exp.type.charAt(0).toUpperCase() + exp.type.slice(1).replace('-', ' ')}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-sm text-cyan-400 mb-2">{exp.organization}</p>
                  <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
