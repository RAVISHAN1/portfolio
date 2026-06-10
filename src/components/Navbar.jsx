import React from 'react';

export default function Navbar({ navigateTo }) {
  return (
    <nav className="fixed w-full z-50 glass border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="text-xl font-extrabold tracking-tighter text-white flex items-center gap-2 group">
                <span className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-orange-500/50 transition-colors">
                    <span className="text-orange-500 italic">JR</span>
                </span>
                JANITH.RAVISHAN
            </a>
            
            <div className="hidden md:flex space-x-10 text-[13px] uppercase tracking-widest font-bold">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', 'about'); }} className="hover:text-orange-500 transition">About</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('projects'); }} className="hover:text-orange-500 transition">Projects</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', 'skills'); }} className="hover:text-orange-500 transition">Stack</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home', 'contact'); }} className="hover:text-orange-500 transition">Contact</a>
            </div>

            <a href="mailto:jravishan@gmail.com" className="hidden md:block px-5 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-orange-500 hover:text-white transition-all">
                LET'S TALK
            </a>
        </div>
    </nav>
  );
}
