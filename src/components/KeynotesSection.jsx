'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Mic, 
  Award, 
  Presentation, 
  Users, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ParallaxLayer from '@/components/ui/ParallaxLayer';

const KEYNOTES = [
  {
    title: "RMBF East India Business Summit",
    topic: "AI: Friend, Foe or Force Multiplier?",
    description: "Keynote address on preserving human judgment autonomy amidst rapid enterprise adoption of generative and agentic AI."
  },
  {
    title: "2nd National Conference on RAICCIT (JIS University)",
    topic: "Agentic AI & Computing Ecosystems",
    description: "Keynote speech on recent breakthroughs in computing research, agentic workflows, and institutional data governance."
  },
  {
    title: "IncuBES 2025 @ Techno International New Town",
    topic: "Entrepreneurship is a Mindset",
    description: "Opening address to 200+ aspiring founders, followed by heading the venture pitch evaluation panel."
  }
];

const JURY_INITIATIVES = [
  {
    role: "Keynote Speaker & Jury Evaluator",
    title: "inCUbate'26 @ University of Calcutta (RUSA 2.0 Hub)",
    details: "Topic: \"Bengal's Incubation Facilities and the Role of Incubation Centres in Enterprise Building.\""
  },
  {
    role: "Venture Judge & Pitch Evaluator",
    title: "Hult Prize @ IIT Kharagpur & BPCL SOCRATIX Challenge",
    details: "Focus: Evaluating student-led social impact startups and corporate strategy business proposals."
  },
  {
    role: "Strategic Alliance",
    title: "Durga Samman Alliance (with Arijit Singh)",
    details: "Focus: Strategic social impact alliance supporting youth life-skills development, female empowerment, and child advocacy."
  }
];

const KeynotesSection = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="keynotes" className="relative py-16 md:py-20 lg:py-24 px-4 max-w-[1309px] mx-auto text-white overflow-hidden">
      <div className="space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="text-center space-y-2 max-w-3xl mx-auto"
        >
          <Badge 
            variant="outline" 
            className="bg-white/10 text-white px-3 py-1 border-white/10 text-xs font-semibold tracking-widest uppercase rounded-full backdrop-blur-md inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Thought Leadership Engagements
          </Badge>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Keynote Speeches & Ecosystem Jury Service
          </h2>
        </motion.div>

        <div className="space-y-4">
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-lg sm:text-xl font-bold text-slate-200 flex items-center gap-2"
          >
            <Mic className="w-5 h-5 text-emerald-400" />
            Featured Keynotes & Summit Addresses
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {KEYNOTES.map((item, idx) => {
              const offsetValue = idx === 1 ? [-25, 25] : [-15, 15];

              return (
                <ParallaxLayer
                  key={idx}
                  targetRef={sectionRef}
                  offset={offsetValue}
                  className="h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: idx * 0.1, 
                      ease: [0.25, 1, 0.5, 1] 
                    }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col justify-between bg-white/10 border-white/10 text-white backdrop-blur-md hover:border-white/20 hover:bg-white/[0.12] transition-all duration-300 p-0 overflow-hidden">
                      <CardHeader className="p-4 pb-2 space-y-2">
                        <div className="p-2 w-fit rounded-lg bg-white/10 border border-white/10 text-emerald-400">
                          <Presentation className="w-4 h-4" />
                        </div>
                        
                        <CardTitle className="text-base font-bold text-white leading-snug">
                          {item.title}
                        </CardTitle>

                        <div className="text-xs font-semibold text-emerald-400">
                          Topic: &ldquo;{item.topic}&rdquo;
                        </div>
                      </CardHeader>

                      <CardContent className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed flex-grow">
                        {item.description}
                      </CardContent>
                    </Card>
                  </motion.div>
                </ParallaxLayer>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-lg sm:text-xl font-bold text-slate-200 flex items-center gap-2"
          >
            <Award className="w-5 h-5 text-emerald-400" />
            Startup Jury &amp; Social Initiatives
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {JURY_INITIATIVES.map((item, idx) => {
              const offsetValue = idx === 1 ? [-15, 15] : [-25, 25];

              return (
                <ParallaxLayer
                  key={idx}
                  targetRef={sectionRef}
                  offset={offsetValue}
                  className="h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: idx * 0.1, 
                      ease: [0.25, 1, 0.5, 1] 
                    }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col justify-between bg-white/10 border-white/10 text-white backdrop-blur-md hover:border-white/20 hover:bg-white/[0.12] transition-all duration-300 p-0 overflow-hidden">
                      <CardHeader className="p-4 pb-2 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="p-2 w-fit rounded-lg bg-white/10 border border-white/10 text-emerald-400">
                            {idx === 2 ? <HeartHandshake className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                          </div>
                          <Badge variant="secondary" className="bg-white/5 border border-white/10 text-slate-300 font-normal text-[10px] truncate">
                            {item.role}
                          </Badge>
                        </div>

                        <CardTitle className="text-base font-bold text-white leading-snug">
                          {item.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed flex-grow flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item.details}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ParallaxLayer>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default KeynotesSection;