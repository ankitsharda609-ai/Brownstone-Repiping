
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Common concerns for Brooklyn brownstone owners.</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-amber-600 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0" size={20} />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 py-5 border-t border-slate-100' : 'max-h-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
