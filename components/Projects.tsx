'use client';

import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import { ExternalLink, Github, Database, Brain } from 'lucide-react';
import dynamic from 'next/dynamic';

const LaptopScene = dynamic(() => import('./three/LaptopScene'), { ssr: false });

const projects = [
  {
    icon: Database,
    title: 'Airbnb Analytics ELT Pipeline',
    description:
      'End-to-end ELT pipeline ingesting Airbnb listing data into Snowflake, transforming it through dbt staging, intermediate, and mart layers, and serving interactive Power BI dashboards for pricing and occupancy analytics.',
    tags: ['Snowflake', 'dbt', 'SQL', 'Power BI', 'AWS S3'],
    github: '#',
    live: '#',
  },
  {
    icon: Brain,
    title: 'Neural IrisGuard',
    description:
      'Deep learning biometric authentication system combining Convolutional Neural Networks, Vision Transformers, and CycleGAN-based synthetic data augmentation for robust iris recognition in real-world conditions.',
    tags: ['Python', 'CNNs', 'Vision Transformers', 'CycleGAN', 'Deep Learning'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="section-container">
        <SectionHeading number="03" title="Projects" />

        {/* 3D Laptop showcase */}
        <ScrollReveal className="mb-12">
          <LaptopScene />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="card-hover rounded-xl p-7 bg-surface-raised/60 h-full flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                    <project.icon size={22} />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-text-secondary hover:text-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      className="text-text-secondary hover:text-accent transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
                  {project.title}
                </h3>

                <p className="font-body text-sm text-text-secondary leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="tag-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
