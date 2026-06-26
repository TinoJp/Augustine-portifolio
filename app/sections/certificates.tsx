'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { GlassCard } from '@/components/glass-card';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const certificates: Certificate[] = [
  {
    title: 'Java Programming Masterclass',
    issuer: 'Udemy / Coursera',
    date: '2024',
    description: 'Comprehensive Java programming course covering core concepts, OOP, data structures, and advanced features.',
    status: 'in-progress',
  },
  {
    title: 'Spring Boot & Microservices',
    issuer: 'Online Platform',
    date: '2024',
    description: 'Building enterprise applications with Spring Boot, REST APIs, JPA, and microservices architecture.',
    status: 'planned',
  },
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2025',
    description: 'Industry-recognized cybersecurity certification covering network security, threats, and risk management.',
    status: 'planned',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    description: 'Foundational cloud computing knowledge and AWS services for building scalable applications.',
    status: 'planned',
  },
];

const statusColors = {
  completed: 'bg-green-500/20 text-green-400 border-green-500/30',
  'in-progress': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  planned: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

const statusLabels = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  planned: 'Planned',
};

export function Certificates() {
  return (
    <SectionWrapper id="certificates" className="relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Certificates"
          subtitle="Professional certifications and learning milestones"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard glow={cert.status === 'completed' ? 'cyan' : 'none'} className="p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[cert.status]}`}>
                    {statusLabels[cert.status]}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-cyan-400 mb-3">{cert.issuer}</p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {cert.description}
                </p>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Credential
                  </a>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
