'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Cpu, 
  TrendingUp, 
  Lightbulb, 
  Users, 
  Globe2, 
  MapPin, 
  Sparkles,
  Award
} from 'lucide-react';

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ParallaxLayer from '@/components/ui/ParallaxLayer';

const VENTURES = [
  {
    icon: Building2,
    role: "Co-Founder & CEO",
    category: "EdTech · Behavioral Diagnostic IP",
    title: "Yancha Positive Learning LLP",
    description: "Award-winning behavioral transformation platform empowering youth, parents, and educators. Powered by proprietary engines including PCDV™ (Parent-Child Development Vector), RAPID™, and the Yancha AI HIQ Model.",
    metric: "CEO of the Year 2024 (ET Ascent) & Company of the Year 2022 (Business Connect)",
    location: "Kolkata, West Bengal, India"
  },
  {
    icon: Cpu,
    role: "Chair – Innovation & Entrepreneurship",
    category: "Executive AI & Governance",
    title: "Cognitive AI Institute (Appointed Mar 2025)",
    description: "Industry-academia platform guiding C-suite executives, policy makers, and enterprise leaders on Agentic AI integration, responsible AI governance, and hosting summits like NexAI.",
    focus: "Responsible AI & Agentic Workflows"
  },
  {
    icon: TrendingUp,
    role: "Board Director",
    category: "Angel Investment Network",
    title: "BANI Synergy Solutions Pvt. Ltd. (Appointed Jan 2026)",
    description: "Cross-border investment platform with three core mandates: strategizing global expansion for regional enterprises, establishing international market linkages, and venture capital syndication.",
    footnote: "Hybrid Operating Model (India & UK)"
  },
  {
    icon: Lightbulb,
    role: "Business Mentor",
    category: "Deep-Tech Incubation",
    title: "IDEAS Hub @ Indian Statistical Institute, Kolkata",
    description: "Mentoring deep-tech founders at the Indian Statistical Institute to commercialize complex statistical algorithms, machine learning models, and data products into market-ready ventures.",
    focus: "Statistical ML & Enterprise Commercialization"
  },
  {
    icon: Users,
    role: "Finance Director & Convenor",
    category: "750+ Member Section 8 Platform",
    title: "Pointers Business Forum",
    description: "Convenor of an active non-profit ecosystem uniting 750+ global entrepreneurs, senior executives, and alumni to foster cross-border business collaboration, mentoring, and seed funding.",
    focus: "Ecosystem Building & Capital Linkages"
  },
  {
    icon: Globe2,
    role: "Co-Founder & Strategic Advisor",
    category: "Heritage Tourism & HealthTech AI",
    title: "GSOE Hospitality & OraTech Labs",
    description: "Co-Founder of GSOE (The Greatest Show On Earth), promoting UNESCO-recognized Durga Puja cultural heritage tourism, and Strategic Advisor to OraTech Labs developing HealthTech AI diagnostics with RCCIIT.",
    focus: "Cultural Tourism & Health Diagnostics"
  }
];

const VenturesSection = () => {
  const sectionRef = useRef(null);

  const getParallaxOffset = (idx) => {
    const col = idx % 3;
    if (col === 0) return [-20, 20];
    if (col === 1) return [-10, 10];
    return [-25, 25];
  };

  return (
    <section ref={sectionRef} id="ventures" className="relative py-16 md:py-20 lg:py-24 px-4 max-w-[1309px] mx-auto text-white overflow-hidden">
      <div className="space-y-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="text-center space-y-2 max-w-3xl mx-auto"
        >
          <Badge 
            variant="outline" 
            className="bg-white/10 text-white px-3 py-3 border-white/10 text-xs font-semibold tracking-widest uppercase rounded-full backdrop-blur-md inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Directorial & Venture Roles
          </Badge>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2">
            Enterprise Portfolio & Board Leadership
          </h2>

          <p className="text-slate-300 text-xs sm:text-[0.95rem] leading-relaxed">
            Directing transformative ventures across EdTech, Cognitive AI, <br /> Angel Investment, Regional Incubators, and Cultural Heritage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {VENTURES.map((venture, idx) => {
            const Icon = venture.icon;
            return (
              <ParallaxLayer
                key={idx}
                targetRef={sectionRef}
                offset={getParallaxOffset(idx)}
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
                    
                    <CardHeader className="p-4 pb-2 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="p-2 rounded-lg bg-white/10 border border-white/10 text-emerald-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <Badge variant="secondary" className="bg-white/5 border border-white/10 text-slate-300 font-normal text-[10px] truncate max-w-[180px]">
                          {venture.category}
                        </Badge>
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-emerald-400 block">
                          {venture.role}
                        </span>
                        <CardTitle className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                          {venture.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="px-4 py-1 text-xs text-slate-300 leading-relaxed flex-grow">
                      {venture.description}
                    </CardContent>

                    <CardFooter className="p-4 pt-3 border-t border-white/10 flex flex-col items-start space-y-1.5 text-[11px]">
                      {venture.metric && (
                        <div className="flex items-start gap-1.5 text-slate-200">
                          <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{venture.metric}</span>
                        </div>
                      )}

                      {venture.focus && (
                        <div className="text-slate-300">
                          <strong className="text-slate-200 font-semibold">Key Focus:</strong> {venture.focus}
                        </div>
                      )}

                      {venture.footnote && (
                        <div className="text-slate-400 italic">
                          * {venture.footnote}
                        </div>
                      )}

                      {venture.location && (
                        <div className="flex items-center gap-1 text-slate-400 pt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          <span>{venture.location}</span>
                        </div>
                      )}
                    </CardFooter>

                  </Card>
                </motion.div>
              </ParallaxLayer>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;