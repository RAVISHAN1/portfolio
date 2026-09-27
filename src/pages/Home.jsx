import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';

export default function Home() {
  return (
    <main className="page-view-enter">
      <Hero />
      <TechStack />
      <FeaturedProjects />
    </main>
  );
}
