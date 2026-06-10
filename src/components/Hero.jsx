import React from 'react';

export default function Hero({ navigateTo }) {
  return (
    <section id="about" className="relative hero-gradient pt-48 pb-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-500 text-xs font-bold tracking-widest uppercase">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    Full Stack Engineer
                </div>

                <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter leading-none">
                    Engineering <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-cyan-400">Robust Solutions</span>.
                </h1>

                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
                    Hi, I'm <span className="text-white font-semibold">Janith Ravishan</span>. I specialize in building scalable web ecosystems using 
                    <span className="laravel-text font-medium ml-1">Laravel</span> for powerful backends and 
                    <span className="react-text font-medium ml-1">React</span> for seamless frontends.
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white tracking-tight">Enterprise</span>
                        <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Project Experience</span>
                    </div>
                    <div className="w-[1px] h-10 bg-zinc-800"></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white tracking-tight">AWS</span>
                        <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Architecture</span>
                    </div>
                    <div className="w-[1px] h-10 bg-zinc-800"></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white tracking-tight">Oracle</span>
                        <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">SQL Expertise</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('projects'); }} className="group bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-500 transition-all flex items-center justify-center gap-3 glow-orange">
                        View Work History <i className="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                    </a>
                    <div className="flex items-center gap-4 px-6 py-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                        <i className="fa-brands fa-laravel text-xl laravel-text"></i>
                        <i className="fa-brands fa-react text-xl react-text"></i>
                        <i className="fa-brands fa-aws text-xl text-white"></i>
                        <i className="fa-solid fa-database text-xl text-blue-400"></i>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4 relative hidden lg:block">
                <div className="w-full aspect-square bg-zinc-900 rounded-[3rem] border border-zinc-800 rotate-3 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                    <div className="p-8 space-y-4 text-zinc-700">
                            <code>
                            <span className="text-orange-500">public function</span> <span className="text-cyan-400">buildFuture</span>() {'{'}<br />
                            &nbsp;&nbsp;$stack = [<span className="text-white">'Laravel'</span>, <span className="text-white">'React'</span>];<br />
                            &nbsp;&nbsp;<span className="text-orange-500">return</span> collect($stack)-&gt;map(fn($t) =&gt; deploy($t));<br />
                            {'}'}
                            </code>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
