import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectsArchive from './components/ProjectsArchive';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'projects', 'details'
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const navigateTo = (view, sectionId = null) => {
    setCurrentView(view);
    window.scrollTo(0, 0);

    if (view === 'home' && sectionId) {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const openProject = (projectId) => {
    setSelectedProjectId(projectId);
    setCurrentView('details');
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-zinc-950 text-zinc-300 antialiased selection:bg-orange-500/30 min-h-screen">
      <Navbar navigateTo={navigateTo} />
      
      {currentView === 'home' && (
        <main className="page-view-enter">
          <Hero navigateTo={navigateTo} />
          <TechStack />
          <FeaturedProjects openProject={openProject} navigateTo={navigateTo} />
        </main>
      )}

      {currentView === 'projects' && (
        <main className="page-view-enter">
          <ProjectsArchive openProject={openProject} navigateTo={navigateTo} />
        </main>
      )}

      {currentView === 'details' && selectedProjectId && (
        <main className="page-view-enter">
          <ProjectDetails projectId={selectedProjectId} navigateTo={navigateTo} />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
