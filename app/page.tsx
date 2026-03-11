'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import CursorGlow from '@/components/CursorGlow';

const StarField = dynamic(() => import('@/components/three/StarField'), { ssr: false });

export default function Home() {
  return (
    <>
      <StarField />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}
