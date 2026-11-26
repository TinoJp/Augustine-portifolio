'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { GlassCard } from '@/components/glass-card';
import { Server, Globe, Database, Code2, Shield, ArrowRight } from 'lucide-react';

const learningAreas = [
  {
    icon: Server,
    title: 'Backend Engineering',
    description: 'Practising how to structure server-side applications, implement business logic, and build maintainable backend services.',
    topics: ['Java and Spring Boot', 'Python and FastAPI', 'Application structure'],
    color: 'cyan',
  },
  {
    icon: Globe,
    title: 'API Development',
    description: 'Learning to design, document, test, and secure REST APIs through hands-on projects.',
    topics: ['REST principles', 'Request validation', 'API testing'],
    color: 'blue',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Developing practical skills in relational data modelling, SQL, constraints, and query design.',
    topics: ['PostgreSQL', 'MySQL', 'Data modelling'],
    color: 'purple',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building and improving web applications while learning responsive interfaces and application architecture.',
    topics: ['React and Next.js', 'TypeScript', 'Web application structure'],
    color: 'emerald',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Practice',
    description: 'Studying defensive security, Linux, networking, vulnerability analysis, and secure development in authorised labs.',
    topics: ['Linux and networking', 'OWASP fundamentals', 'Security monitoring'],
    color: 'rose',
  },
];

const colorMap: Record<string, { icon: string; bg: string }> = {
  cyan: { icon: 'text-cyan-400', bg: 'from-cyan-500/20 to-blue-500/20' },
  blue: { icon: 'text-blue-400', bg: 'from-blue-500/20 to-indigo-500/20' },
  purple: { icon: 'text-purple-400', bg: 'from-purple-500/20 to-pink-500/20' },
  emerald: { icon: 'text-emerald-400', bg: 'from-emerald-500/20 to-teal-500/20' },
  rose: { icon: 'text-rose-400', bg: 'from-rose-500/20 to-red-500/20' },
};

export function Services() {
  return (
    <SectionWrapper id="services" className="relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Learning & Practical Interests"
          subtitle="Areas I am actively studying and applying through personal and academic projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningAreas.map((area, index) => {
            const colors = colorMap[area.color];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full flex flex-col">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${colors.bg} w-fit mb-4`}>
                    <area.icon className={`w-8 h-8 ${colors.icon}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {area.description}
                  </p>
                  <div className="space-y-2">
                    {area.topics.map((topic) => (
                      <div key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className={`w-3 h-3 ${colors.icon}`} aria-hidden="true" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
