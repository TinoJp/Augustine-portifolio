'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { SectionHeading } from '@/components/section-heading';
import { GlassCard } from '@/components/glass-card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'johnaugustine900@gmail.com',
    href: 'mailto:johnaugustine900@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/TinoJp',
    href: 'https://github.com/TinoJp',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/augustine-john-b052a435b',
    href: 'https://linkedin.com/in/augustine-john-b052a435b',
  },
];

export function Contact() {
  return (
    <SectionWrapper id="contact" className="relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Contact"
          subtitle="I am open to internship, collaboration, and other learning opportunities"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I am a Computer Engineering student interested in backend development and
              cybersecurity. If you have an internship opportunity, a technical project,
              or would like to exchange ideas, feel free to contact me.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:border-cyan-500/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard glow="cyan" className="p-8 h-full flex flex-col justify-center">
              <div className="p-4 rounded-full bg-cyan-500/10 w-fit mb-5">
                <Mail className="w-8 h-8 text-cyan-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3">Let&apos;s start a conversation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Send me an email directly. Your email application will open with my
                address ready; no message will be marked as sent by this website.
              </p>
              <Button
                size="lg"
                className="w-full sm:w-fit bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                asChild
              >
                <a href="mailto:johnaugustine900@gmail.com?subject=Portfolio%20Enquiry">
                  <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                  Email Augustine
                </a>
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
