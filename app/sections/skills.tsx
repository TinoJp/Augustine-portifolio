'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { GlassCard } from '@/components/glass-card';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    color: 'from-cyan-400 to-blue-500',
    skills: [
      { name: 'Java', level: 70 },
      { name: 'C++', level: 80 },
      { name: 'Python', level: 60},
      { name: 'JavaScript', level: 70 },
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 80 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-blue-400 to-indigo-500',
    skills: [
      { name: 'Spring Boot', level: 20 },
      { name: 'REST APIs', level: 10 },
      { name: 'JPA', level: 80 },
      { name: 'Hibernate', level: 50 },
    ],
  },
  {
    title: 'Database',
    color: 'from-emerald-400 to-teal-500',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'SQL', level: 40 },
    ],
  },
  {
    title: 'Cybersecurity',
    color: 'from-purple-400 to-pink-500',
    skills: [
      { name: 'Networking', level: 60 },
      { name: 'Linux', level: 70 },
      { name: 'Security Fundamentals', level: 85 },
      { name: 'Digital Forensics', level: 20 },
      { name: 'OWASP Basics', level: 70 },
    ],
  },
  {
    title: 'Tools',
    color: 'from-orange-400 to-amber-500',
    skills: [
      { name: 'Git', level: 50 },
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'IntelliJ IDEA', level: 85 },
      { name: 'Postman', level: 20 },
      
    ],
  },
  {
    title: 'Soft Skills',
    color: 'from-rose-400 to-red-500',
    skills: [
      { name: 'Communication', level: 85 },
      { name: 'Critical Thinking', level: 90 },
      { name: 'Teamwork', level: 88 },
      { name: 'Leadership', level: 75 },
      { name: 'Problem Solving', level: 92 },
    ],
  },
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <SectionWrapper id="skills" className="relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <GlassCard glow="cyan" className="p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${category.color}`} />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skill.name} skill={skill} index={skillIndex} />
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
