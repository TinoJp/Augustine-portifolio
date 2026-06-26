'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Utensils, Users, Building2, Shield, Brain } from 'lucide-react';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { GlassCard } from '@/components/glass-card';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  icon: React.ElementType;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Online Food Ordering System',
    description: 'A full-stack food ordering platform built with Java Spring Boot featuring user authentication, menu management, order processing, and payment integration.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'HTML', 'CSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    icon: Utensils,
    featured: true,
  },
  {
    title: 'Student Management System',
    description: 'A C++ console application for managing student records, grades, and course enrollments with file persistence and data validation.',
    technologies: ['C++', 'OOP', 'File I/O', 'Data Structures'],
    githubUrl: 'https://github.com',
    icon: Users,
    featured: true,
  },
  {
    title: 'Business Directory System',
    description: 'A web-based business directory allowing users to search, filter, and review local businesses with admin dashboard functionality.',
    technologies: ['JavaScript', 'PHP', 'MySQL', 'HTML', 'CSS', 'XAMPP'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com',
    icon: Building2,
  },
  {
    title: 'Cybersecurity Lab Projects',
    description: 'Collection of hands-on cybersecurity exercises including network scanning, vulnerability assessment, and digital forensics investigations.',
    technologies: ['Linux', 'Wireshark', 'Nmap', 'Metasploit', 'Python'],
    githubUrl: 'https://github.com',
    icon: Shield,
  },
  {
    title: 'AI-Powered Projects',
    description: 'Upcoming projects leveraging machine learning and AI to solve real-world problems. Stay tuned for innovative solutions.',
    technologies: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI'],
    icon: Brain,
  },
];

export function Projects() {
  return (
    <SectionWrapper id="projects" className="relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Showcasing my technical capabilities through real-world applications"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                glow={project.featured ? 'cyan' : 'none'}
                className={`h-full flex flex-col ${project.featured ? 'ring-1 ring-cyan-500/30' : ''}`}
              >
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-t-2xl overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgzNCwgMjExLCAyMzgsIDAuMSkiLz48L3N2Zz4=')] opacity-50" />
                  <div className="relative z-10 p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20">
                    <project.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-xs font-semibold text-white">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded-lg border-cyan-500/30 hover:bg-cyan-500/10"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="flex-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
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
