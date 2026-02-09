
import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Brownstone<span className="text-amber-600">Repiping</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-amber-600' : 'text-white/90 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:8443406413"
                className="bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-amber-700 transition-colors"
              >
                <PhoneCall size={16} /> (844) 340-6413
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full animate-in fade-in slide-in-from-top-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-amber-600 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:8443406413"
              className="w-full text-center bg-amber-600 text-white px-5 py-4 font-bold flex items-center justify-center gap-2 hover:bg-amber-700"
            >
              <PhoneCall size={20} /> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
