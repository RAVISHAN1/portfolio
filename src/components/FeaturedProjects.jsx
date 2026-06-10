import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PROJECTS_DB } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function FeaturedProjects() {
  const navigate = useNavigate();
  
  const featuredProjects = Object.entries(PROJECTS_DB).filter(([key, project]) => project.featured);

  return (
    <section className="py-24 px-6 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h2 className="text-xs uppercase tracking-[0.3em] font-black text-orange-500 mb-4 italic">Featured Clients</h2>
                    <h3 className="text-4xl font-extrabold text-white tracking-tight">Flagship Projects.</h3>
                </div>
                <Link to="/projects" className="text-sm font-bold text-orange-500 hover:text-white transition group">
                    SEE FULL LIST <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.map(([key, project]) => (
                    <ProjectCard key={key} projectKey={key} project={project} />
                ))}
            </div>
        </div>
    </section>
  );
}
