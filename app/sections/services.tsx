'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { GlassCard } from '@/components/glass-card';
import { Server, Globe, Database, Code2, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building robust server-side applications with Java, Spring Boot, and modern architectural patterns. Scalable, secure, and maintainable solutions.',
    features: ['REST API Design', 'Authentication & Authorization', 'Business Logic Implementation'],
    color: 'cyan',
  },
  {
    icon: Globe,
    title: 'API Development',
    description: 'Designing and implementing RESTful APIs that are well-documented, versioned, and follow industry best practices for seamless integration.',
    features: ['RESTful Architecture', 'API Documentation', 'Versioning Strategy'],
    color: 'blue',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Creating efficient database schemas, optimizing queries, and ensuring data integrity for high-performance applications.',
    features: ['Schema Design', 'Query Optimization', 'Data Modeling'],
    color: 'purple',
  },
  {
    icon: Code2,
    title: 'Website Development',
    description: 'Full-stack web development from concept to deployment. Responsive, fast, and user-friendly websites that make an impact.',
    features: ['Responsive Design', 'Performance Optimization', 'Modern Frameworks'],
    color: 'emerald',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Consulting',
    description: 'Learning and applying security best practices. Helping identify vulnerabilities and implement secure coding practices.',
    features: ['Security Audits', 'Vulnerability Assessment', 'Best Practices'],
    color: 'rose',
    learning: true,
  },
];

const colorMap: Record<string, { icon: string; border: string; bg: string }> = {
  cyan: { icon: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'from-cyan-500/20 to-blue-500/20' },
  blue: { icon: 'text-blue-400', border: 'border-blue-500/30', bg: 'from-blue-500/20 to-indigo-500/20' },
  purple: { icon: 'text-purple-400', border: 'border-purple-500/30', bg: 'from-purple-500/20 to-pink-500/20' },
  emerald: { icon: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'from-emerald-500/20 to-teal-500/20' },
  rose: { icon: 'text-rose-400', border: 'border-rose-500/30', bg: 'from-rose-500/20 to-red-500/20' },
};

export function Services() {
  return (
    <SectionWrapper id="services" className="relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Services"
          subtitle="What I can help you with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard
                  glow={service.color === 'cyan' ? 'cyan' : service.color === 'blue' ? 'blue' : 'none'}
                  className={`p-6 h-full flex flex-col ${service.learning ? 'opacity-90' : ''}`}
                >
                  {service.learning && (
                    <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium border border-amber-500/30">
                      Learning
                    </div>
                  )}

                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${colors.bg} w-fit mb-4`}>
                    <service.icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className={`w-3 h-3 ${colors.icon}`} />
                        {feature}
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
