
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-md bg-amber-600 text-white text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-left-4 duration-700">
            Brooklyn's Premier Brownstone Specialist
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
            Preserving History, <br />
            <span className="text-amber-500">Modernizing</span> Performance.
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
            Modernize your historic home's plumbing with surgical precision. 
            We specialize in secondary lead pipe replacement and PEX retrofitting for landmarked Brooklyn brownstones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
            <a 
              href="#contact" 
              className="bg-amber-600 hover:bg-amber-700 text-white text-center px-8 py-4 rounded-md text-lg font-bold transition-all hover:scale-105 active:scale-95"
            >
              Get a Free Quote
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-center px-8 py-4 rounded-md text-lg font-bold transition-all"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Badge */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-bounce">
        <div className="bg-white p-4 rounded-lg shadow-2xl flex items-center gap-4 max-w-xs">
          <div className="bg-green-100 text-green-600 p-2 rounded-full">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">NYC Licensed & Insured</p>
            <p className="text-xs text-slate-500">Master Plumber #1249</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
