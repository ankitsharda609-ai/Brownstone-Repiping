
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAdvisor from './components/AIAdvisor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Why Choose Us Section */}
        <section id="about" className="py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-slate-900/5 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
                  alt="Plumbing work in historic home" 
                  className="relative z-10 rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 z-20 bg-amber-600 text-white p-6 rounded-xl shadow-xl max-w-[200px]">
                  <p className="text-3xl font-serif font-bold mb-1">15+</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-100">Years Specializing in Brooklyn Rowhouses</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-base text-amber-600 font-bold tracking-wide uppercase mb-2">Expertise Matters</h2>
                <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">Why Choose Brownstone Repiping Specialists?</h3>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    Historic plumbing isn't just about pipes; it's about architecture. Standard plumbers often resort to gutting walls, which ruins the very character that makes your brownstone valuable.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="bg-amber-100 text-amber-600 p-1 rounded-full flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <p><span className="font-bold text-slate-900">LPC Compliant:</span> We work within NYC Landmark Preservation Commission guidelines for all historic upgrades.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="bg-amber-100 text-amber-600 p-1 rounded-full flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <p><span className="font-bold text-slate-900">Health First:</span> Internal lead pipes are the "invisible" danger in many old homes. We specialize in their surgical removal.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="bg-amber-100 text-amber-600 p-1 rounded-full flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <p><span className="font-bold text-slate-900">Premium Materials:</span> We only use American-made high-grade PEX-A and L-Type copper to ensure longevity.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      
      {/* Floating AI Interaction */}
      <AIAdvisor />
    </div>
  );
};

export default App;
