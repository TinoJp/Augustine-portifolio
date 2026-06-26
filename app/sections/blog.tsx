'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { GlassCard } from '@/components/glass-card';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  status: 'published' | 'draft' | 'planned';
}

const posts: BlogPost[] = [
  {
    title: 'Building REST APIs with Spring Boot: A Complete Guide',
    excerpt: 'Learn how to design and implement production-ready REST APIs using Spring Boot, including authentication, validation, and error handling.',
    category: 'Backend',
    readTime: '8 min read',
    date: 'Coming Soon',
    status: 'planned',
  },
  {
    title: 'Java Design Patterns Every Developer Should Know',
    excerpt: 'Explore essential design patterns in Java including Singleton, Factory, Observer, and Strategy patterns with practical examples.',
    category: 'Java',
    readTime: '6 min read',
    date: 'Coming Soon',
    status: 'planned',
  },
  {
    title: 'Cybersecurity Fundamentals for Developers',
    excerpt: 'Understanding the OWASP Top 10, secure coding practices, and how to protect your applications from common vulnerabilities.',
    category: 'Security',
    readTime: '10 min read',
    date: 'Coming Soon',
    status: 'planned',
  },
];

const categoryColors: Record<string, string> = {
  Backend: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  Java: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Security: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

export function Blog() {
  return (
    <SectionWrapper id="blog" className="relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Blog"
          subtitle="Latest articles and technical insights"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard glow="cyan" className="h-full flex flex-col">
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-t-2xl overflow-hidden flex items-center justify-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20">
                    <BookOpen className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
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
