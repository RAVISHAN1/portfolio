import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash.replace('#', ''));
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main className="page-view-enter">
      <Hero />
      <TechStack />
      <FeaturedProjects />
    </main>
  );
}
