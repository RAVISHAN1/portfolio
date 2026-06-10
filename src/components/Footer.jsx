import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="pt-32 pb-16 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[3rem] p-12 md:p-20 text-zinc-950 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
                <div className="relative z-10 text-center md:text-left">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Let's talk.</h2>
                    <p className="text-zinc-600 max-w-md font-medium text-lg leading-relaxed">
                        Janith Ravishan — Software Engineer. <br />
                        Currently open to senior engineering roles and technical consulting.
                    </p>
                </div>
                
                <div className="mt-12 md:mt-0 relative z-10">
                    <a href="mailto:jravishan@gmail.com" className="text-2xl md:text-4xl font-bold hover:text-orange-600 transition tracking-tight break-all">
                        jravishan@gmail.com
                    </a>
                    <div className="flex justify-center md:justify-start gap-8 mt-10">
                        <a href="https://github.com/jravishan" target="_blank" rel="noopener noreferrer" className="text-zinc-950 hover:text-orange-600 transition"><i className="fa-brands fa-github text-3xl"></i></a>
                        <a href="#" className="text-zinc-950 hover:text-orange-600 transition"><i className="fa-brands fa-linkedin text-3xl"></i></a>
                    </div>
                </div>
                
                {/* Decoration */}
                <div className="absolute -right-20 top-0 opacity-10 pointer-events-none">
                    <i className="fa-solid fa-terminal text-[20rem]"></i>
                </div>
            </div>
            
            <p className="mt-20 text-center text-zinc-600 text-[11px] uppercase tracking-widest font-bold">
                &copy; 2026 JANITH RAVISHAN. LARAVEL | REACT | AWS.
            </p>
        </div>
    </footer>
  );
}
