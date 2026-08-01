'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, BookOpen, Quote, Sparkles } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const TIMELINE = [
  {
    icon: GraduationCap,
    title: "MIT Sloan School of Management",
    role: "Doctor of Philosophy (PhD) · Computer/IT Admin & Management",
    period: "2014 – 2019",
    details: [
      "Dissertation: Underlying Foundations of Business Model Innovation using Analytics.",
      "A Framework for Sustainability using Dynamic Behavioral & Capability Models."
    ]
  },
  {
    icon: Award,
    title: "IIM Calcutta",
    role: "Gold Medalist · Management Disciplines",
    period: "Honors",
    details: [
      "Secured 1st Position across management disciplines.",
      "Specialization: General Management, Competitive Strategy & Enterprise Operations."
    ]
  },
  {
    icon: BookOpen,
    title: "Emeritus Digital Business",
    role: "Post-Graduate Certificate in Digital Business Strategy",
    period: "2019",
    details: [
      "Advanced methodologies in digital transformation, platform economics, and tech adoption."
    ]
  },
  {
    icon: Briefcase,
    title: "McKinsey & Company & Walkwater Consulting",
    role: "Management Consulting & Strategic Leadership",
    period: "Professional Experience",
    details: [
      "Process Re-engineering, Lean Operations, ERP Turnaround, Tech-Enabled Sales & Operations Strategy."
    ]
  },
  {
    icon: GraduationCap,
    title: "South Point High School, Kolkata",
    role: "Foundational Schooling",
    period: "Alumni Network",
    details: [
      "Active contributor to South Point Alumni and Pointers Business Forum Network."
    ]
  }
];

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  
  const timelineItemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="relative py-16 md:py-20 lg:py-24 px-4 max-w-[1309px] mx-auto text-white overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
      >
      
        <motion.div variants={itemVariants} className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge 
            variant="outline" 
            className="bg-white/10 text-white px-4 py-3  border-white/10 text-xs font-semibold tracking-widest uppercase rounded-full backdrop-blur-md inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Executive Thesis
          </Badge>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            About & Scholarly Pedigree
          </h2>

          <p className="text-slate-300 text-xs sm:text-[0.95rem] leading-relaxed">
            Bridging institutional academic research with enterprise-scale implementation, <br /> venture incubation, and behavioral economics.
          </p>
        </motion.div>

  
        <motion.div variants={itemVariants} className="relative max-w-[1309px] mx-auto">
          <div className="relative p-6 sm:p-8 rounded-lg bg-white/10 border border-white/15 backdrop-blur-xl overflow-hidden group hover:border-white/25 transition-all">
            <Quote className="absolute -top-3 -right-3 w-28 h-28 text-white/[0.04] pointer-events-none rotate-12" />
            
            <div className="relative z-10 space-y-3">
              <p className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                Core Belief & Philosophy
              </p>
              <blockquote className="text-md sm:text-xl font-medium text-slate-100 italic leading-snug">
                &ldquo;The most urgent crisis in education, talent, and leadership today is not a skills crisis. It is a behavioral architecture crisis. And it begins not at the boardroom level — but at age 12.&rdquo;
              </blockquote>
            </div>
          </div>
        </motion.div>

        
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1309px] mx-auto">
          <div className="p-6 rounded-lg bg-white/10 border border-white/10 backdrop-blur-md space-y-3 hover:bg-white/[0.12] transition-all">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Behavioral Intelligence & AI Strategy
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Dr. Arnab Basu is a Kolkata-based Behavioral Intelligence Architect, Cognitive AI strategist, executive management consultant, and EdTech entrepreneur. His body of work addresses how human agency, critical thinking, and social-emotional agility can be systematically quantified, measured, and scaled alongside automated Agentic AI models.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white/10 border border-white/10  space-y-3 hover:bg-white/[0.12] transition-all">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#72838e]"></span>
              Consulting &amp; Venture Leadership
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              With an executive background spanning strategy consulting at McKinsey &amp; Company, venture leadership as CEO of Yancha Positive Learning LLP, and directorial oversight across deep-tech hubs (ISI Kolkata) and angel investment networks (BANI), Dr. Basu develops frameworks that transform human capability into compound institutional value.
            </p>
          </div>
        </motion.div>

        
        <div className="max-w-[1309px] mx-auto pt-6">
          <motion.h3 
            variants={itemVariants}
            className="text-xl sm:text-2xl font-bold text-center mb-6 text-white"
          >
            Academic & Professional Experience
          </motion.h3>

          <div className="relative border-l-2 border-white/15 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
            {TIMELINE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={timelineItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                 
                  <div className="absolute -left-[43px] sm:-left-[51px] top-1 p-2 rounded-xl bg-white/10 border border-white/15 text-emerald-400  backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-4 h-4" />
                  </div>

                  
                  <div className="p-5 rounded-lg bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-200 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {item.title}
                      </h4>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 w-fit">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-emerald-400">
                      {item.role}
                    </p>

                    <ul className="space-y-1 pt-1">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-white/40 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;