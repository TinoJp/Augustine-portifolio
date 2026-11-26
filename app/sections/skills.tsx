'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { GlassCard } from '@/components/glass-card';

const skillCategories = [
  {
    title: 'Programming',
    description: 'Languages used in coursework and project development.',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend & APIs',
    description: 'Technologies used to build and test server-side applications.',
    skills: ['Spring Boot', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Databases',
    description: 'Relational database technologies and query languages.',
    skills: ['PostgreSQL', 'MySQL', 'SQL'],
  },
  {
    title: 'Cybersecurity',
    description: 'Core areas and tools being studied through authorised labs and practice.',
    skills: ['Linux', 'Networking', 'OWASP Fundamentals', 'Nmap', 'Wireshark', 'Metasploit'],
  },
  {
    title: 'Development Tools',
    description: 'Tools used in everyday development workflows.',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman'],
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills" className="relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I use or am actively practising"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <GlassCard className="p-6 h-full">
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
