'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { MoveUpRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'About', id: 'about' },
  { name: 'Ventures', id: 'ventures' },
  { name: 'Frameworks & IP', id: 'frameworks' },
  { name: 'Keynotes & Jury', id: 'keynotes' },
  { name: 'Contact', id: 'contact' }
];

const Navbar = () => {
  const [active, setActive] = useState('About');
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [mobileOpen]);


  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  const handleNavClick = (id) => {
    setActive(id);
    setMobileOpen(false);
  };

  return (
    <div>
      
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[300] h-1 bg-[#668395] origin-left opacity-60"
      />

      <nav className="fixed top-0 left-0 w-full z-[100] py-4 lg:py-6  ">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
        
          <motion.a
            href="#about"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white focus:outline-none"
            onClick={() => handleNavClick('About')}
          >
            <h1 className="text-xl lg:text-2xl font-bold tracking-tight">Dr. Arnab Basu</h1>
            <p className="text-xs lg:text-[13px] text-white/70">MIT Sloan PhD · Ex-McKinsey</p>
          </motion.a>

          {/* Desktop Nav  */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:flex bg-white/10 backdrop-blur-xl border border-white/10 rounded-full p-1.5"
          >
            <ul className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`block px-5 py-2.5 rounded-full transition-all duration-200 ${
                        isActive
                          ? 'bg-white/20 text-white shadow-sm border border-white/20'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

         
          <div className="flex items-center gap-3">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Button
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-5 py-5 text-sm font-medium flex items-center gap-2 backdrop-blur-lg transition-all"
              >
                <a href="#Contact">
                  Book Advisory
                  <MoveUpRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            {/* Mobile taps Hamburge */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drop */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-b border-white/10"
            >
              <ul className="flex flex-col gap-2 p-6 text-sm font-semibold uppercase tracking-wider">
                {NAV_ITEMS.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => handleNavClick(item.id)}
                        className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all ${
                          isActive
                            ? 'bg-white/15 text-white font-bold'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;