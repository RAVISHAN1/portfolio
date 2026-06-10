import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectsArchive from './pages/ProjectsArchive';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <div className="bg-zinc-950 text-zinc-300 antialiased selection:bg-orange-500/30 min-h-screen">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<main className="page-view-enter"><ProjectsArchive /></main>} />
        <Route path="/projects/:id" element={<main className="page-view-enter"><ProjectDetails /></main>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
