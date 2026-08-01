'use client';

import React from 'react';
import { Mail, Globe, MapPin, ArrowUpRight, ShieldCheck, ArrowUp } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const ExecutiveFooter = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full max-w-[1380px] mx-auto pt-12 pb-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md p-6 sm:p-10 lg:p-12 relative z-10 space-y-10 text-slate-300">
        
       
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Dr. Arnab Basu
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-300 tracking-wide uppercase">
                Behavioral Intelligence Architect &amp; Cognitive AI Strategist
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Structuring human-AI alignment, agentic workflows, and behavioral diagnostic models for high-impact enterprise decision-making and human agility.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-300" />
              <span>C-Suite Governance &amp; AI Integration</span>
            </div>
          </div>

          
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { name: 'About & Bio', id: 'about' },
                { name: 'Ventures & Roles', id: 'ventures' },
                { name: 'Frameworks & IP', id: 'frameworks' },
                { name: 'Keynotes & Jury', id: 'keynotes' },
                { name: 'Executive Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-white hover:cursor-pointer transition-colors duration-200 flex items-center gap-1 group text-slate-400"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-white" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

       
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Direct Contact
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Email Desk</span>
                  <a href="mailto:arnab@arnabbasu.in" className="text-slate-200 hover:text-white transition-colors font-medium">
                    arnab@arnabbasu.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white shrink-0 mt-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Canonical Domain</span>
                  <a href="https://www.arnabbasu.in" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-white transition-colors font-medium">
                    www.arnabbasu.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Primary Hub</span>
                  <span className="text-slate-300">Kolkata, West Bengal, India</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <Separator className="bg-white/10" />

       
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            &copy; 2026 Dr. Arnab Basu. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-[11px] text-slate-400 text-center sm:text-right">
              Yancha Positive Learning LLP &middot; Kolkata, India
            </p>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/20 hover:text-white transition-all text-slate-300 flex items-center justify-center shrink-0 cursor-pointer"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ExecutiveFooter;