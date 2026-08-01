'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { MoveUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

const NAV_ITEMS = [
  { name: 'About', id: 'about' },
  { name: 'Ventures', id: 'ventures' },
  { name: 'Frameworks & IP', id: 'frameworks' },
  { name: 'Keynotes & Jury', id: 'keynotes' },
  { name: 'Contact', id: 'contact' }
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY < 100) setActive('');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 100) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (id) => {
    setActive(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-3 sm:px-6 xl:px-12 pt-3 xl:pt-5">
      <div className="max-w-[1380px] mx-auto relative">
      
        <nav
          className={`w-full transition-all duration-300 py-2.5 sm:py-3 xl:py-4 px-4 sm:px-6 xl:px-8 rounded-2xl ${
            isScrolled
              ? 'bg-white/1 backdrop-blur-3xl border border-white/10 shadow-lg'
              : 'bg-transparent border border-transparent'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href="#"
              className="text-white focus:outline-none shrink-0"
              onClick={() => {
                setActive('');
                setMobileOpen(false);
              }}
            >
              <h1 className="text-lg sm:text-xl xl:text-2xl font-bold tracking-tight">Dr. Arnab Basu</h1>
              <p className="text-[10px] sm:text-xs xl:text-[13px] text-white/70">MIT Sloan PhD · Ex-McKinsey</p>
            </Link>

            <div className="hidden xl:flex bg-white/10 backdrop-blur-xl border border-white/10 rounded-full p-1.5">
              <ul className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`block px-4 xl:px-5 py-2.5 rounded-full transition-all duration-200 ${
                        active === item.id
                          ? 'bg-white/20 text-white shadow-sm border border-white/20 font-bold'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Button
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-3.5 sm:px-5 h-9 sm:h-11 text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 backdrop-blur-lg transition-all"
              >
                <Link href="#contact" onClick={() => handleNavClick('contact')}>
                  <span>Book Advisory</span>
                  <MoveUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </Button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden p-2 sm:p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-colors focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="xl:hidden overflow-hidden mt-3 rounded-xl bg-[#0B1220]/95 backdrop-blur-2xl border border-white/10"
              >
                <ul className="flex flex-col gap-1 p-4 sm:p-5 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`#${item.id}`}
                        onClick={() => handleNavClick(item.id)}
                        className={`flex items-center justify-between py-2.5 px-4 rounded-xl transition-all ${
                          active === item.id
                            ? 'bg-white/15 text-white font-bold'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}