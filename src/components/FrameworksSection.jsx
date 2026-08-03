'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles,
    Lightbulb,
    ShieldAlert,
    Users,
    Zap,
    Brain,
    Target,
    BookOpen,
    Layers,
    ArrowUpRight
} from 'lucide-react';

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ParallaxLayer from '@/components/ui/ParallaxLayer';

const PUBLICATIONS = [
    {
        type: "Commercial Book · May 2024",
        title: "Mastering the Thinking Cap: A Fun-Filled Journey into Critical Thinking for Kids",
        publisher: "Story.com (May 24, 2024)",
        summary: "A story-driven narrative guiding young minds through critical thinking, problem-solving logic, and maze-solving heuristics.",
        tag: "Early Childhood Cognition & Life Skills",
        icon: BookOpen
    },
    {
        type: "Commercial Book · Jan 2023",
        title: "Productivity Code",
        publisher: "Polonius Enterprises (Jan 11, 2023)",
        summary: "An actionable operational manual for eliminating procrastination, streamlining personal workflows, and implementing process re-engineering principles in daily operations.",
        tag: "Operational Efficiency & Time Management",
        icon: Target
    },
    {
        type: "Academic Research · Dec 2023",
        title: "HR Lessons from Epics: Strategic Human Resource Paradigms",
        publisher: "International Journal of HRM Cases and Research (Co-authored with Smart Society USA)",
        summary: "Academic research paper analyzing timeless strategic human resource principles derived from ancient Indian literature applied to modern organizational behavior.",
        tag: "Strategic HRM & Ancient Wisdom",
        icon: Layers
    }
];

const FrameworksSection = () => {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} id="frameworks" className="relative py-16 md:py-20 lg:py-24 px-4 max-w-[1309px] mx-auto text-white overflow-hidden">
            <div className="space-y-12">

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    className="text-center space-y-3 max-w-3xl mx-auto"
                >
                    <Badge
                        variant="outline"
                        className="bg-white/10 text-white px-3 sm:px-3.5 py-1.5 sm:py-2 border-white/10 text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase rounded-full backdrop-blur-md inline-flex items-center justify-center gap-1.5 max-w-full leading-tight text-center whitespace-normal"
                    >
                        <Sparkles className="w-3 sm:h-3.5 sm:w-3.5 h-3 shrink-0" />
                        <span>Thought Leadership & Intellectual Property</span>
                    </Badge>

                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                        Proprietary Frameworks & Publications
                    </h2>

                    <p className="text-slate-300 text-xs sm:text-[0.95rem] leading-relaxed">
                        Quantifying cognitive agility, founder mindset, and structuring AI <br /> adoption  models for enterprise human empowerment.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full"
                >
                    <Tabs defaultValue="opportunity-lens" className="w-full">

                        <div className="flex justify-center mb-6 px-2">
                            <TabsList className="bg-white/10 border border-white/10 backdrop-blur-md p-8 rounded-md sm:rounded-full flex md:p-1.5 flex-col sm:flex-row gap-1 w-full sm:w-auto h-auto">
                                <TabsTrigger
                                    value="opportunity-lens"
                                    className="w-full sm:w-auto text-slate-300 bg-transparent hover:text-white hover:bg-white/5 data-[state=active]:bg-white/20 data-[state=active]:text-white data-[state=active]:shadow-sm text-xs sm:text-sm font-medium px-5 py-2.5 rounded-xl sm:rounded-full transition-all cursor-pointer text-center"
                                >
                                    The Opportunity Lens Framework™
                                </TabsTrigger>
                                <TabsTrigger
                                    value="founder-first"
                                    className="w-full sm:w-auto text-slate-300 bg-transparent hover:text-white hover:bg-white/5 data-[state=active]:bg-white/20 data-[state=active]:text-white data-[state=active]:shadow-sm text-xs sm:text-sm font-medium px-5 py-2.5 rounded-xl sm:rounded-full transition-all cursor-pointer text-center"
                                >
                                    Yancha Founder First Framework™
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="opportunity-lens" className="focus-visible:outline-none">
                            <Card className="bg-white/10 border-white/15 text-white backdrop-blur-xl p-5 sm:p-8 rounded-2xl overflow-hidden relative group">
                                <ParallaxLayer
                                    targetRef={sectionRef}
                                    offset={[-40, 40]}
                                    className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none hidden sm:block"
                                >
                                    <Lightbulb className="w-64 h-64 text-white" />
                                </ParallaxLayer>

                                <CardHeader className="p-0 mb-6 relative z-10">
                                    <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                                        <Brain className="w-4 h-4 text-white" />
                                        <span>Strategic AI Integration Model</span>
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl font-bold text-white">
                                        The Opportunity Lens Framework™
                                    </CardTitle>
                                    <CardDescription className="text-slate-300 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
                                        Dr. Basu’s strategic framework for evaluating enterprise technology adoption and generative AI integration along three operational trajectories.
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="p-0 grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                                    <div className="p-4 sm:p-5 rounded-xl bg-red-500/10 border border-red-500/20 space-y-2 hover:bg-red-500/15 transition-all">
                                        <div className="p-2 w-fit rounded-lg bg-red-500/20 text-red-400">
                                            <ShieldAlert className="w-4 h-4" />
                                        </div>
                                        <h4 className="text-sm font-bold text-red-200">AI as a FOE</h4>
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-red-400 block">
                                            Passive Surrender
                                        </span>
                                        <p className="text-xs text-slate-300 leading-relaxed">
                                            Uncritical reliance on automation that leads to cognitive atrophy, loss of critical judgment, and strategic vulnerability.
                                        </p>
                                    </div>

                                    <div className="p-4 sm:p-5 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-2 hover:bg-blue-500/15 transition-all">
                                        <div className="p-2 w-fit rounded-lg bg-blue-500/20 text-blue-400">
                                            <Users className="w-4 h-4" />
                                        </div>
                                        <h4 className="text-sm font-bold text-blue-200">AI as a FRIEND</h4>
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-400 block">
                                            Democratization
                                        </span>
                                        <p className="text-xs text-slate-300 leading-relaxed">
                                            Using AI as an accessible tool to democratize foundational literacy, technical skills, and domain knowledge across underserved sectors.
                                        </p>
                                    </div>

                                    <div className="p-4 sm:p-5 rounded-xl bg-white/10 border border-white/20 space-y-2 hover:bg-white/15 transition-all">
                                        <div className="p-2 w-fit rounded-lg bg-white/20 text-white">
                                            <Zap className="w-4 h-4" />
                                        </div>
                                        <h4 className="text-sm font-bold text-white">AI as a FORCE MULTIPLIER</h4>
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-300 block">
                                            Augmented Human Agility
                                        </span>
                                        <p className="text-xs text-slate-300 leading-relaxed">
                                            Structured human intelligence directs, audits, and compounds AI outputs to achieve exponential productivity gains without losing strategic agency.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="founder-first" className="focus-visible:outline-none">
                            <Card className="bg-white/10 border-white/15 text-white backdrop-blur-xl p-5 sm:p-8 rounded-2xl overflow-hidden">
                                <CardHeader className="p-0 mb-6">
                                    <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                                        <Target className="w-4 h-4 text-white" />
                                        <span>Behavioral Architecture</span>
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl font-bold text-white">
                                        Yancha Founder First Framework™
                                    </CardTitle>
                                    <CardDescription className="text-slate-300 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
                                        A 2-layered systematic blueprint for scaling venture capability by aligning internal conviction with operational leverage.
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
                                        <div className="border-b border-white/10 pb-2 flex items-center justify-between">
                                            <h4 className="text-sm font-bold text-white">Layer 1: Founder Mindset</h4>
                                            <Badge variant="outline" className="text-[10px] text-slate-300 border-white/20">
                                                Inner Clarity
                                            </Badge>
                                        </div>
                                        <ul className="space-y-2 text-xs text-slate-300">
                                            <li className="flex items-start gap-2">
                                                <span className="text-white font-bold">•</span>
                                                <span><strong className="text-white">The Awakening:</strong> Clarifying inner purpose (&ldquo;Your Real WHY&rdquo;).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-white font-bold">•</span>
                                                <span><strong className="text-white">Opportunity Eye:</strong> Identifying market whitespace others miss.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-white font-bold">•</span>
                                                <span><strong className="text-white">Customer Truth:</strong> Interacting with real human needs over abstract buyer personas.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-white font-bold">•</span>
                                                <span><strong className="text-white">Planning North Star:</strong> Utilizing 5 Whys for strategic alignment.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-white font-bold">•</span>
                                                <span><strong className="text-white">Financial Intelligence:</strong> Unit economics before top-line revenue.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
                                        <div className="border-b border-white/10 pb-2 flex items-center justify-between">
                                            <h4 className="text-sm font-bold text-white">Layer 2: Founder Skills</h4>
                                            <Badge variant="outline" className="text-[10px] text-slate-300 border-white/20">
                                                Outer Impact
                                            </Badge>
                                        </div>
                                        <ul className="space-y-2 text-xs text-slate-300">
                                            <li className="flex items-start gap-2">
                                                <span className="text-white font-bold">•</span>
                                                <span><strong className="text-white">Creativity:</strong> Overcoming operational bottlenecks.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-white font-bold">•</span>
                                                <span><strong className="text-white">Leadership:</strong> Building belief and team alignment.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-white font-bold">•</span>
                                                <span><strong className="text-white">Systems:</strong> Scaling trust through repeatable processes.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-white font-bold">•</span>
                                                <span><strong className="text-white">Execution:</strong> Eagle&apos;s Nest mindset for high-level and detailed execution.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-white font-bold">•</span>
                                                <span><strong className="text-white">Resilience:</strong> Complete ownership of venture outcomes.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </motion.div>

                <div className="space-y-4">
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-lg sm:text-xl font-bold text-slate-200 flex items-center gap-2"
                    >
                        <BookOpen className="w-5 h-5 text-emerald-400" />
                        Publications & Books
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {PUBLICATIONS.map((pub, idx) => {
                            const Icon = pub.icon;
                            const offsetValue = idx === 1 ? [-25, 25] : [-15, 15];

                            return (
                                <ParallaxLayer
                                    key={idx}
                                    targetRef={sectionRef}
                                    offset={offsetValue}
                                    className="h-full"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: -40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            duration: 0.5,
                                            delay: idx * 0.1,
                                            ease: [0.25, 1, 0.5, 1]
                                        }}
                                        className="h-full"
                                    >
                                        <Card className="h-full flex flex-col justify-between bg-white/10 border-white/10 text-white backdrop-blur-md hover:border-white/25 hover:bg-white/[0.12] transition-all duration-300 p-0 overflow-hidden group">

                                            <CardHeader className="p-4 pb-2 space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[10px] font-semibold tracking-wider text-emerald-400 uppercase">
                                                        {pub.type}
                                                    </span>
                                                    <div className="p-1.5 rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:text-emerald-300 transition-colors">
                                                        <Icon className="w-3.5 h-3.5" />
                                                    </div>
                                                </div>

                                                <CardTitle className="text-base font-bold group-hover:text-emerald-300 transition-colors leading-snug flex items-start gap-1">
                                                    <span>{pub.title}</span>
                                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5 text-emerald-400" />
                                                </CardTitle>

                                                <p className="text-[11px] text-slate-400 italic">
                                                    {pub.publisher}
                                                </p>
                                            </CardHeader>

                                            <CardContent className="px-4 py-2 text-xs text-slate-300 leading-relaxed flex-grow">
                                                {pub.summary}
                                            </CardContent>

                                            <div className="p-4 pt-2 border-t border-white/10">
                                                <Badge variant="secondary" className="bg-white/5 border border-white/10 text-slate-300 font-normal text-[10px] truncate max-w-full">
                                                    {pub.tag}
                                                </Badge>
                                            </div>

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

export default FrameworksSection;