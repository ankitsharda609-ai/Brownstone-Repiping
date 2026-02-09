
import React from 'react';
import { ShieldCheck, Layers, Building, Droplets } from 'lucide-react';
import { SERVICES } from '../constants';

const IconMap: Record<string, any> = {
  ShieldCheck: ShieldCheck,
  Layers: Layers,
  Building: Building,
  Droplets: Droplets
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-base text-amber-600 font-bold tracking-wide uppercase mb-2">What We Do</h2>
          <p className="text-4xl font-serif font-bold text-slate-900 mb-4">Specialized Historic Plumbing</p>
          <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES.map((service) => {
            const Icon = IconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="group p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-amber-100 text-amber-600 w-14 h-14 flex items-center justify-center rounded-xl mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.fullContent}
                </p>
              </div>
            );
          })}
        </div>

        {/* Benefits List */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-slate-100 pt-16">
          <div className="flex gap-4 items-start">
            <div className="text-amber-600 mt-1"><ShieldCheck size={20} /></div>
            <div>
              <h4 className="font-bold text-slate-900">Freeze Resistance</h4>
              <p className="text-sm text-slate-500">PEX expands, preventing bursts during winters.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-amber-600 mt-1"><ShieldCheck size={20} /></div>
            <div>
              <h4 className="font-bold text-slate-900">Quiet Operation</h4>
              <p className="text-sm text-slate-500">Eliminate banging sounds of old metal pipes.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-amber-600 mt-1"><ShieldCheck size={20} /></div>
            <div>
              <h4 className="font-bold text-slate-900">Landmark Compliant</h4>
              <p className="text-sm text-slate-500">LPC compliant techniques and materials.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-amber-600 mt-1"><ShieldCheck size={20} /></div>
            <div>
              <h4 className="font-bold text-slate-900">Clean Site Guarantee</h4>
              <p className="text-sm text-slate-500">We treat your home with absolute respect.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
