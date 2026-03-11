import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gnaneshwar Yadla — Data Engineer',
  description:
    'Data Engineer with 4+ years of experience in ETL/ELT pipelines, Snowflake, dbt, AWS, and analytics. M.S. Computer Science at VCU.',
  openGraph: {
    title: 'Gnaneshwar Yadla — Data Engineer',
    description:
      'Data Engineer with 4+ years of experience building scalable data infrastructure.',
    url: 'https://gnaneshwar-portfolio-theta.vercel.app',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <div className="grain-overlay" />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
