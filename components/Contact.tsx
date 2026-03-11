'use client';

import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="section-container">
        <SectionHeading number="06" title="Get in Touch" />

        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-body text-text-secondary text-lg leading-relaxed mb-10">
              I&apos;m actively looking for data engineering, analytics engineering,
              and AI-adjacent roles. Whether you have an opportunity, a question, or
              just want to connect, my inbox is always open.
            </p>

            <a
              href="mailto:gnaneshwarreddy056@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-surface font-display font-semibold text-sm tracking-wide hover:bg-accent-glow transition-colors duration-200 group"
            >
              Say Hello
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>

            <div className="flex items-center justify-center gap-6 mt-10">
              <a
                href="https://linkedin.com/in/gnaneshwar-reddy-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/gnaneshwar-yadla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="mailto:gnaneshwarreddy056@gmail.com"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <div className="mt-28 pt-8 border-t border-white/5 text-center">
          <p className="font-mono text-xs text-text-secondary/60">
            Designed &amp; Built by Gnaneshwar Yadla &middot; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
