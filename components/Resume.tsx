'use client';

import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import { Download, FileText, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-28 bg-surface-raised/30">
      <div className="section-container">
        <SectionHeading number="05" title="Resume" />

        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto">
            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a
                href="/Gnaneshwar_Yadla_Resume.pdf"
                download="Gnaneshwar_Yadla_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-surface font-display font-semibold text-sm tracking-wide hover:bg-accent-glow transition-colors duration-200 group"
              >
                <Download
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
                Download Resume
              </a>
              <a
                href="/Gnaneshwar_Yadla_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent/30 text-accent font-display font-semibold text-sm tracking-wide hover:bg-accent/10 transition-all duration-200 group"
              >
                <ExternalLink
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
                Open in New Tab
              </a>
            </div>

            {/* PDF Embed */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-surface shadow-2xl shadow-black/30">
              {/* Top bar */}
              <div className="flex items-center gap-3 px-5 py-3 bg-surface-overlay/80 border-b border-white/5">
                <FileText size={16} className="text-accent" />
                <span className="font-mono text-xs text-text-secondary">
                  Gnaneshwar_Yadla_Resume.pdf
                </span>
              </div>

              {/* PDF viewer */}
              <div className="relative w-full" style={{ height: '80vh', maxHeight: '1000px', minHeight: '500px' }}>
                <iframe
                  src="/Gnaneshwar_Yadla_Resume.pdf"
                  className="w-full h-full"
                  title="Gnaneshwar Yadla Resume"
                  style={{ border: 'none' }}
                />

                {/* Fallback for browsers that can't render PDF inline */}
                <noscript>
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface p-8 text-center">
                    <FileText size={48} className="text-accent mb-4" />
                    <p className="text-text-secondary mb-4">
                      PDF preview unavailable in your browser.
                    </p>
                    <a
                      href="/Gnaneshwar_Yadla_Resume.pdf"
                      download
                      className="px-6 py-3 rounded-lg bg-accent text-surface font-semibold text-sm"
                    >
                      Download Resume
                    </a>
                  </div>
                </noscript>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
