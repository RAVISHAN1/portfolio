import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PROJECTS_DB } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsArchive() {
  const navigate = useNavigate();
  // We use entries to get the key for routing
  const allProjects = Object.entries(PROJECTS_DB);

  return (
    <section className="pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
            <nav className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-12">
                <Link to="/" className="text-zinc-500 hover:text-white transition">Home</Link>
                <i className="fa-solid fa-chevron-right text-[8px] text-zinc-700"></i>
                <span className="text-orange-500">All Projects</span>
            </nav>

            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-none mb-16 italic">
                Project <br /> <span className="text-orange-500">Archive.</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProjects.map(([key, project]) => (
                    <ProjectCard key={key} projectKey={key} project={project} />
                ))}
            </div>

            <div className="mt-20 text-center">
                <Link to="/" className="inline-block px-10 py-4 border border-zinc-800 rounded-2xl hover:bg-zinc-900 transition font-bold text-sm tracking-widest uppercase">
                    Back to Home
                </Link>
            </div>
        </div>
    </section>
  );
}
