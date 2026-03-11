'use client';

import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    title: 'Agentic AI Intern',
    company: 'NeuralSeek',
    period: '2024',
    location: 'Remote',
    bullets: [
      'Developed agentic AI systems combining LLM orchestration with structured data pipelines for enterprise knowledge retrieval.',
      'Built evaluation frameworks and data processing workflows for multi-step AI reasoning tasks.',
    ],
    tags: ['Python', 'LLMs', 'AI Agents', 'Data Pipelines'],
  },
  {
    title: 'Data Engineer',
    company: 'Wipro',
    period: 'Jul 2022 — Jul 2024',
    location: 'Bengaluru, India',
    bullets: [
      'Owned end-to-end pipeline design and infrastructure for large-scale analytical workloads.',
      'Designed and maintained 10+ ETL/ELT pipelines on AWS and Snowflake with automated reconciliation and anomaly detection, reducing data quality incidents by 35%.',
      'Built modular dbt transformation models (staging, intermediate, mart layers) with CI/CD-integrated test coverage, delivering reusable data products across 5 cross-functional teams.',
      'Collaborated with data scientists and ML engineers to design inference-ready datasets and feature tables for downstream AI and BI consumers.',
    ],
    tags: ['Python', 'SQL', 'Snowflake', 'dbt', 'AWS', 'Databricks', 'PySpark', 'Power BI'],
  },
  {
    title: 'Data Analyst',
    company: 'Wipro',
    period: 'Nov 2020 — Jul 2022',
    location: 'Bengaluru, India',
    bullets: [
      'Delivered analytics and reporting solutions across cross-functional business teams for operational and financial decision-making.',
      'Built and maintained Power BI and Tableau dashboards tracking KPIs, SLA adherence, and data completeness.',
      'Wrote complex SQL queries and Python scripts to extract, clean, and transform large datasets across multiple source systems.',
    ],
    tags: ['Python', 'SQL', 'Power BI', 'Tableau', 'Azure'],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Wipro',
    period: 'Aug 2020 — Nov 2020',
    location: 'Bengaluru, India',
    bullets: [
      'Contributed to data transformation and reporting workflows; earned full-time offer 3 months ahead of schedule.',
      'Built early-stage Power BI reports and wrote Python/SQL scripts for data cleaning and validation.',
    ],
    tags: ['Python', 'SQL', 'Power BI', 'Excel'],
  },
  {
    title: 'Intern',
    company: 'Presidency University',
    period: 'May — Jul 2020',
    location: 'Bengaluru, India',
    bullets: [
      'Supported data processing and analysis workflows in an academic research environment.',
    ],
    tags: ['Python', 'Data Analysis'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-surface-raised/30">
      <div className="section-container">
        <SectionHeading number="02" title="Experience" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] lg:left-[calc(50%-1px)] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col lg:flex-row ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 lg:gap-12`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-1">
                    <div className="timeline-dot" />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-8 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                    }`}
                  >
                    <div className="card-hover rounded-xl p-6 bg-surface-raised/80">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                        <h3 className="font-display font-semibold text-lg text-text-primary">
                          {exp.title}
                        </h3>
                        <span className="font-mono text-accent text-sm">
                          @ {exp.company}
                        </span>
                      </div>
                      <p className="font-mono text-xs text-text-secondary mb-4">
                        {exp.period} &middot; {exp.location}
                      </p>
                      <ul className="space-y-2 mb-5">
                        {exp.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="text-text-secondary text-sm leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-accent before:text-xs"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((t) => (
                          <span key={t} className="tag-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
