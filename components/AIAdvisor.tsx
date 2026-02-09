
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { getPlumbingAdvice } from '../services/geminiService';

const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hello! I'm your Brownstone Plumbing Advisor. Ask me anything about historic Brooklyn plumbing, lead pipes, or PEX retrofitting." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const advice = await getPlumbingAdvice(messages, userMessage);
    
    setMessages(prev => [...prev, { role: 'model', content: advice }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-slate-900 text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-90 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
      >
        <MessageSquare size={24} />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500"></span>
        </span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-8 right-8 z-50 w-[90vw] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 p-2 rounded-lg">
              <Bot size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">Plumbing AI Advisor</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Online Knowledge Base</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-amber-100 text-amber-600' : 'bg-slate-200 text-slate-600'}`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-amber-600 text-white rounded-tr-none' : 'bg-white shadow-sm border border-slate-200 text-slate-700 rounded-tl-none'}`}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[85%]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-200 text-slate-400 rounded-tl-none">
                  <Loader2 size={16} className="animate-spin" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-slate-100">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about your plumbing issue..."
              className="w-full bg-slate-100 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1.5 p-1.5 bg-amber-600 text-white rounded-full hover:bg-amber-700 disabled:opacity-50 disabled:hover:bg-amber-600 transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-400 mt-2">
            This AI can hallucinate. For critical issues, call us.
          </p>
        </div>
      </div>
    </>
  );
};

export default AIAdvisor;
