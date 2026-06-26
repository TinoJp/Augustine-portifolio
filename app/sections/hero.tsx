'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ChevronDown, Code2, Database, Shield, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypingEffect } from '@/components/typing-effect';

const floatingIcons = [
  { Icon: Code2, x: '10%', y: '20%', delay: 0, size: 32 },
  { Icon: Database, x: '85%', y: '15%', delay: 0.5, size: 28 },
  { Icon: Shield, x: '75%', y: '70%', delay: 1, size: 36 },
  { Icon: Cpu, x: '15%', y: '75%', delay: 1.5, size: 30 },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(210,100%,50%,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(280,65%,60%,0.1),_transparent_50%)]" />
      </div>


      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400/20 pointer-events-none"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { delay: delay + 0.5, duration: 0.5 },
            scale: { delay: delay + 0.5, duration: 0.5 },
            y: {
              delay: delay + 1,
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            },
          }}
        >
          <Icon size={size}/>
        </motion.div>
      ))}


      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
          `linear-gradient(rgba(34,211,238,0.5) 1px,transparent 1px),
           linear-gradient(90deg,rgba(34,211,238,0.5) 1px,transparent 1px)`,
          backgroundSize:'50px 50px'
        }}
      />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* LEFT */}

          <motion.div
            initial={{opacity:0,x:-50}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.8}}
            className="text-center lg:text-left"
          >

            <motion.div
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.2}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >

              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>

              <span className="text-sm font-medium text-muted-foreground">
                Available for opportunities
              </span>

            </motion.div>



            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">

              Hi, I&apos;m{' '}

              <span className="text-gradient">
                Eng Augustine
              </span>

            </h1>



            <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 h-[1.5em]">

              <TypingEffect
                texts={[
                  'Computer Engineering Student',
                  'Backend Developer',
                  'Cybersecurity Enthusiast',
                ]}
                typingSpeed={60}
                deletingSpeed={30}
                pauseDuration={2500}
              />

            </div>



            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">

              Passionate about building scalable backend systems and exploring cybersecurity.

              Specializing in{' '}

              <span className="text-cyan-400 font-medium">
                Java
              </span>,{' '}

              <span className="text-cyan-400 font-medium">
                Spring Boot
              </span>,{' '}

              <span className="text-cyan-400 font-medium">
                REST APIs
              </span>,{' '}

              <span className="text-cyan-400 font-medium">
                PostgreSQL
              </span>,{' '}

              <span className="text-cyan-400 font-medium">
                C++
              </span>,{' '}

              <span className="text-cyan-400 font-medium">
                Python
              </span>

            </p>



            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">


              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl"
              >

                <a href="/Augustine_John_Pauline_CV.pdf" download>

                  <Download className="w-4 h-4 mr-2 inline"/>

                  Download CV

                </a>

              </Button>



              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-xl"
              >

                <a href="#projects">
                  View Projects
                </a>

              </Button>


              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-xl"
              >

                <a href="#contact">
                  Contact Me
                </a>

              </Button>


            </div>


            <div className="flex gap-3 justify-center lg:justify-start">


              <a
              href="https://github.com/magesa01"
              className="p-3 rounded-xl glass"
              >
                <Github/>
              </a>


              <a
              href="https://linkedin.com/in/augustine-john-b052a435b"
              className="p-3 rounded-xl glass"
              >
                <Linkedin/>
              </a>


              <a
              href="mailto:johnaugustine900@gmail.com"
              className="p-3 rounded-xl glass"
              >
                <Mail/>
              </a>


            </div>


          </motion.div>





          {/* RIGHT IMAGE */}

          <motion.div
            initial={{opacity:0,x:50}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.8,delay:0.3}}
            className="flex justify-center lg:justify-end"
          >

            <div className="relative">


              {/* glow */}

              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"/>



              {/* IMAGE CONTAINER */}

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden glass border-2 border-cyan-500/30">


                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"/>


                <Image
                  src="/IMG_20250910_141529_792.jpg"
                  alt="Eng Augustine"
                  fill
                  priority
                  className="object-cover object-top"
                />


              </div>





              {/* orbit */}

              <motion.div
              className="absolute -top-2 -right-2 p-3 rounded-xl glass glow-cyan"
              animate={{rotate:360}}
              transition={{
                duration:20,
                repeat:Infinity,
                ease:"linear"
              }}
              >

                <Shield className="w-5 h-5 text-cyan-400"/>

              </motion.div>



              <motion.div
              className="absolute -bottom-2 -left-2 p-3 rounded-xl glass glow-blue"
              animate={{rotate:-360}}
              transition={{
                duration:15,
                repeat:Infinity,
                ease:"linear"
              }}
              >

                <Database className="w-5 h-5 text-blue-400"/>

              </motion.div>



            </div>

          </motion.div>


        </div>

      </div>





      {/* Scroll */}

      <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{y:[0,10,0]}}
      transition={{
        duration:2,
        repeat:Infinity
      }}
      >

        <a
        href="#about"
        className="flex flex-col items-center gap-2 text-muted-foreground"
        >

          <span className="text-xs">
            Scroll Down
          </span>

          <ChevronDown/>

        </a>

      </motion.div>


    </section>
  );
}