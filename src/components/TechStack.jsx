import React from 'react';

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-6 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-xs uppercase tracking-[0.3em] font-black text-orange-500 mb-4">Core Competencies</h2>
                <h3 className="text-4xl font-extrabold text-white tracking-tight">The Tech Stack.</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl flex flex-col items-center gap-3 hover:border-zinc-700 transition">
                    <i className="fa-brands fa-laravel text-3xl laravel-text"></i>
                    <span className="text-xs font-bold tracking-wider">LARAVEL</span>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl flex flex-col items-center gap-3 hover:border-zinc-700 transition">
                    <i className="fa-brands fa-react text-3xl react-text"></i>
                    <span className="text-xs font-bold tracking-wider">REACT JS</span>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl flex flex-col items-center gap-3 hover:border-zinc-700 transition">
                    <i className="fa-brands fa-aws text-3xl text-white"></i>
                    <span className="text-xs font-bold tracking-wider">AWS</span>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl flex flex-col items-center gap-3 hover:border-zinc-700 transition">
                    <i className="fa-solid fa-database text-3xl text-blue-400"></i>
                    <span className="text-xs font-bold tracking-wider">SQL / ORACLE</span>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl flex flex-col items-center gap-3 hover:border-zinc-700 transition">
                    <i className="fa-brands fa-github text-3xl text-zinc-400"></i>
                    <span className="text-xs font-bold tracking-wider">GITHUB</span>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl flex flex-col items-center gap-3 hover:border-zinc-700 transition">
                    <i className="fa-brands fa-php text-3xl text-indigo-400"></i>
                    <span className="text-xs font-bold tracking-wider">PHP</span>
                </div>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium">Tailwind CSS</span>
                <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium">Bootstrap</span>
                <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium">jQuery</span>
                <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium">MS SQL Server</span>
                <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium">Linux / cPanel</span>
                <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium">Bitbucket</span>
            </div>
        </div>
    </section>
  );
}
