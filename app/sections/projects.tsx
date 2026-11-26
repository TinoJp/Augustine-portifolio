'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, ShoppingBag } from 'lucide-react';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { GlassCard } from '@/components/glass-card';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  status: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  icon: React.ElementType;
}

const projects: Project[] = [
  {
    title: 'IcaShop',
    status: 'Production',
    description:
      'A live e-commerce project that I maintain and develop. The application is available to users, with product media served through Cloudflare R2.',
    technologies: ['E-commerce', 'Cloudflare R2', 'Web Development'],
    githubUrl: 'https://github.com/TinoJp/IcaShop',
    demoUrl: 'https://icashop.co.tz',
    icon: ShoppingBag,
  },
  {
    title: 'ThreatWatch',
    status: 'In Development',
    description:
      'A defensive security monitoring project. Its backend API is built with FastAPI and is being developed toward a platform for collecting and analysing security events.',
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL'],
    icon: Shield,
  },
];

export function Projects() {
  return (
    <SectionWrapper id="projects" className="relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="A small selection of real projects, with their current status clearly stated"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col overflow-hidden">
                <div className="relative h-44 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20">
                    <project.icon className="w-10 h-10 text-cyan-400" aria-hidden="true" />
                  </div>
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 border border-border text-xs font-medium">
                    {project.status}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="px-2 py-1 text-xs rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                          Source Code
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button size="sm" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                          Live Website
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
