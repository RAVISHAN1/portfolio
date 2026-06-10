import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PROJECTS_DB } from '../data/projects';

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
                    <div key={key} onClick={() => navigate(`/projects/${key}`)} className="project-card p-8 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors"></div>
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                                {/* Use different icons based on type if you want, defaulting to star */}
                                <i className={`fa-solid ${project.icon || 'fa-star'} text-orange-500 text-xl`}></i>
                            </div>
                            <span className="text-zinc-600 group-hover:text-white transition"><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-4">
                            {project.stack.slice(0, 2).map((tech, idx) => (
                                <span key={idx} className={`text-[10px] font-bold tracking-widest uppercase ${tech.toLowerCase().includes('laravel') ? 'text-orange-500' : 'text-cyan-400'}`}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
