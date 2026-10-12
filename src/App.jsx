import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, Phone, ExternalLink, Sparkles } from 'lucide-react';

export default function App() {
  const [inquired, setInquired] = useState(false);
  const services = ["Distributed Systems","Cloud Edge Deployment","AI Model Synthesis"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      {/* Navigation */}
      <nav className="border-b border-slate-800/80 px-8 py-5 flex justify-between items-center backdrop-blur-xl sticky top-0 z-50 bg-slate-950/80">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white shadow-lg" style={{ background: "#ffffff" }}>
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white">Buzz Evo Global</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:contact@buzzevo.com" className="hidden sm:inline-flex text-sm text-slate-400 hover:text-white transition">
            contact@buzzevo.com
          </a>
          <button 
            onClick={() => setInquired(true)}
            className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase transition shadow-lg hover:brightness-110 active:scale-95"
            style={{ background: "#ffffff", color: "#ffffff" }}
          >
            {inquired ? "Request Sent" : "Get in Touch"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-24 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-slate-800 bg-slate-900/60" style={{ color: "#ffffff" }}>
            <span className="w-2 h-2 rounded-full animate-ping" style={{ background: "#ffffff" }} />
            <span>Autonomous Web Synthesis Deployment</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
            Just an entreprise where people have B Plugs on their feeds
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-xl leading-relaxed">
            Synthesized and deployed live via our autonomous multi-agent cloud engine. Powered by Google Gemini, GitHub Git Data API, and Vercel Edge.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <a 
              href="mailto:contact@buzzevo.com"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition shadow-xl hover:translate-y-[-2px]"
              style={{ background: "#ffffff", color: "#ffffff" }}
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="tel:+14155552671"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2 border border-slate-800 bg-slate-900/60 hover:bg-slate-800 transition"
            >
              <Phone className="w-4 h-4 text-slate-400" /> +14155552671
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/70 transition-all duration-300 hover:border-slate-700 group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold mb-6 text-sm" style={{ background: "#ffffff20", color: "#ffffff" }}>
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{service}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Precision execution delivered with automated continuous integration and global CDN performance.
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 px-8 py-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <div>&copy; {new Date().getFullYear()} Buzz Evo Global. Autonomous Production Scaffolding.</div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> contact@buzzevo.com</span>
          <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +14155552671</span>
        </div>
      </footer>
    </div>
  );
}
