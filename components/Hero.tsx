'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Github } from 'lucide-react';
import dynamic from 'next/dynamic';

const FloatingShapes = dynamic(() => import('./three/FloatingShapes'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingShapes />

      <div className="section-container relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-accent text-sm tracking-widest uppercase mb-6"
        >
          Data Engineer &bull; Analytics &bull; AI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-display font-800 text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-[0.95] mb-6"
        >
          Gnaneshwar
          <br />
          <span className="text-accent">Yadla</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="font-body text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Building scalable data pipelines and infrastructure that turn raw data
          into reliable, actionable intelligence. 4+ years of production
          experience across AWS, Snowflake, dbt, and Databricks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          <a
            href="https://linkedin.com/in/gnaneshwar-reddy-"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200 bg-surface/50 backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/gnaneshwar-yadla"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200 bg-surface/50 backdrop-blur-sm"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:gnaneshwarreddy056@gmail.com"
            className="p-3 rounded-full border border-white/10 text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200 bg-surface/50 backdrop-blur-sm"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
        >
          <ArrowDown size={16} className="animate-bounce" />
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
}
