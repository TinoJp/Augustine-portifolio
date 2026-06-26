'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ParticleBackground } from '@/components/particle-background';
import { Hero } from './sections/hero';
import { About } from './sections/about';
import { Skills } from './sections/skills';
import { Projects } from './sections/projects';
import { Experience } from './sections/experience';
import { Education } from './sections/education';
import { Certificates } from './sections/certificates';
import { Achievements } from './sections/achievements';
import { Services } from './sections/services';
import { Testimonials } from './sections/testimonials';
import { Blog } from './sections/blog';
import { Contact } from './sections/contact';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Achievements />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
