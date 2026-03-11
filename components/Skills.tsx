'use client';

import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    label: 'Languages & Scripting',
    skills: ['Python', 'SQL', 'PySpark', 'Bash'],
  },
  {
    label: 'Data Warehousing & Lakes',
    skills: ['Snowflake', 'Databricks', 'AWS Redshift', 'Delta Lake'],
  },
  {
    label: 'ETL / ELT & Orchestration',
    skills: ['dbt', 'Apache Airflow', 'AWS Glue', 'Azure Data Factory', 'Kafka'],
  },
  {
    label: 'Cloud Platforms',
    skills: ['AWS (S3, Glue, Redshift, Kinesis)', 'Azure', 'GCP BigQuery'],
  },
  {
    label: 'BI & Visualization',
    skills: ['Power BI', 'Tableau', 'Looker'],
  },
  {
    label: 'ML & AI',
    skills: ['PyTorch', 'TensorFlow', 'CNNs', 'Transformers', 'LLMs'],
  },
  {
    label: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'CI/CD', 'Terraform', 'Linux'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-surface-raised/30">
      <div className="section-container">
        <SectionHeading number="04" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="rounded-xl p-6 bg-surface/80 border border-white/5 hover:border-accent/15 transition-colors duration-300">
                <h3 className="font-mono text-accent text-xs uppercase tracking-widest mb-4">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 text-sm font-body text-text-secondary bg-surface-raised rounded-md border border-white/5 hover:text-accent hover:border-accent/20 transition-all duration-200 cursor-default"
                    >
                      {s}
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
