import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ projectKey, project }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/projects/${projectKey}`)} className="project-card p-8 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] relative overflow-hidden group cursor-pointer transition-all hover:bg-zinc-900/80">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors"></div>

        <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                <i className={`fa-solid ${project.icon || 'fa-star'} text-orange-500 text-xl`}></i>
            </div>
            <span className="text-zinc-600 group-hover:text-white transition"><i className="fa-solid fa-arrow-right"></i></span>
        </div>

        <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
        
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-3">
            {project.stack.slice(0, 2).map((tech, idx) => (
                <span key={idx} className={`text-[9px] font-bold tracking-widest uppercase ${tech.toLowerCase().includes('laravel') ? 'text-orange-500' : (tech.toLowerCase().includes('react') ? 'text-cyan-400' : 'text-zinc-500')}`}>
                    {tech}
                </span>
            ))}
        </div>
    </div>
  );
}
