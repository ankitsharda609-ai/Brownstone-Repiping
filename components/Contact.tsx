
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd send this to an API
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 p-12 bg-amber-600 text-white">
            <h2 className="text-3xl font-serif font-bold mb-8">Contact Our Experts</h2>
            <p className="mb-10 text-white/80">
              Ready to modernize your plumbing? Contact us for a free, no-obligation video consultation or on-site quote.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-bold">Visit Us</p>
                  <p className="text-white/80 text-sm">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-bold">Call Us</p>
                  <p className="text-white/80 text-sm">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-bold">Email Us</p>
                  <p className="text-white/80 text-sm">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Service Hours</p>
              <p className="text-sm">{CONTACT_INFO.hours}</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 text-slate-200">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in-95">
                <div className="bg-green-500/20 text-green-500 p-4 rounded-full mb-6">
                  <CheckCircle size={64} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Message Received!</h3>
                <p className="text-slate-400 text-lg mb-8">
                  One of our brownstone specialists will contact you within 24 hours to discuss your project.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-amber-500 hover:text-amber-400 font-bold underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="(917) 000-0000"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Property Address (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="123 Park Slope Ave, Brooklyn"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Inquiry Type</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none transition-all">
                    <option>Select a service</option>
                    <option>Lead Pipe Replacement</option>
                    <option>PEX Retrofitting</option>
                    <option>Emergency Repair</option>
                    <option>Other / General Quote</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your historic home..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-amber-900/20"
                >
                  <Send size={18} /> Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
