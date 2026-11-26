'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/TinoJp', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/augustine-john-b052a435b', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:johnaugustine900@gmail.com', label: 'Email' },
];

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#services', label: 'Learning' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                <Terminal className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="font-bold text-xl">
                <span className="text-gradient">Augustine Jp</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Computer Engineering student interested in backend development and cybersecurity,
              learning through practical projects and hands-on work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-xl glass hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Augustine Jp. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-rose-400 fill-rose-400" aria-hidden="true" /> and lots of <span className="text-cyan-400">coffee</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
