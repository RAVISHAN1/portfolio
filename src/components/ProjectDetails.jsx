import React from 'react';
import { PROJECTS_DB } from '../data/projects';

export default function ProjectDetails({ projectId, navigateTo }) {
  const project = PROJECTS_DB[projectId];

  if (!project) return null;

  return (
    <section className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-12">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="text-zinc-500 hover:text-white transition">Home</a>
                <i className="fa-solid fa-chevron-right text-[8px] text-zinc-700"></i>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('projects'); }} className="text-zinc-500 hover:text-white transition">Archive</a>
                <i className="fa-solid fa-chevron-right text-[8px] text-zinc-700"></i>
                <span className="text-orange-500">{project.title}</span>
            </nav>

            <div className="space-y-12">
                <div>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-4 italic">{project.title}</h2>
                    <div className="flex flex-wrap gap-4 pt-4">
                        {project.stack.map((tech, idx) => {
                            let colorClass = 'text-zinc-500';
                            if (tech.toLowerCase().includes('laravel')) colorClass = 'text-orange-500';
                            else if (tech.toLowerCase().includes('react')) colorClass = 'text-cyan-400';

                            return (
                                <span key={idx} className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg ${colorClass}`}>
                                    {tech}
                                </span>
                            );
                        })}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] relative overflow-hidden">
                            <h3 className="text-xs uppercase tracking-widest font-black text-orange-500 mb-6 italic">Project Overview</h3>
                            <p className="text-zinc-300 text-lg leading-relaxed font-light">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-[2rem]">
                            <h3 className="text-xs uppercase tracking-widest font-black text-white mb-6">Details</h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex justify-between border-b border-zinc-800 pb-2">
                                    <span className="text-zinc-500">Role</span>
                                    <span className="text-white font-bold">{project.role || 'Engineer'}</span>
                                </li>
                                <li className="flex justify-between border-b border-zinc-800 pb-2">
                                    <span className="text-zinc-500">Type</span>
                                    <span className="text-white font-bold">{project.type || 'Web App'}</span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all group">
                                    Visit Website <i className="fa-solid fa-external-link text-[10px]"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 text-center">
                    <button onClick={() => navigateTo('projects')} className="text-sm font-bold tracking-widest text-zinc-500 hover:text-white transition flex items-center justify-center gap-2 mx-auto">
                        <i className="fa-solid fa-arrow-left text-[10px]"></i> BACK TO ALL PROJECTS
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
}
