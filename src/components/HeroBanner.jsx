'use client'
import { Award, BookOpen, Briefcase, Calendar, ChevronRight, GraduationCap, Rocket, Users } from 'lucide-react';
import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroBanner = () => {
    const BADGES = [
        {
            icon: GraduationCap,
            text: "MIT Sloan PhD",
            detail: "Business Model Innovation & Analytics",
            highlightColor: "text-amber-400"
        },
        {
            icon: Award,
            text: "IIM Calcutta",
            detail: "Gold Medalist",
            highlightColor: "text-yellow-400"
        },
        {
            icon: Briefcase,
            text: "Ex-McKinsey & Co.",
            detail: "Management Consulting",
            highlightColor: "text-blue-400"
        },
        {
            icon: Rocket,
            text: "Co-Founder & CEO",
            detail: "@ Yancha EdTech",
            highlightColor: "text-emerald-400"
        }
    ];

    const METRICS = [
        {
            icon: Briefcase,
            value: "7+",
            label: "Active Board & Venture Roles",
            accentColor: "text-emerald-400"
        },
        {
            icon: Users,
            value: "2,780+",
            label: "Executive & Global Network",
            accentColor: "text-blue-400"
        },
        {
            icon: BookOpen,
            value: "2",
            label: "Authored Books Published",
            accentColor: "text-amber-400"
        },
        {
            icon: GraduationCap,
            value: "PhD",
            label: "MIT Sloan Credentials",
            accentColor: "text-purple-400"
        }
    ];

 
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <motion.section 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className='mt-35 relative flex justify-center flex-col items-center'
        >
            
            <motion.div variants={itemVariants} className="inline-flex z-50 items-center gap-2.5 px-4 py-1 w-md mx-auto rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-lg shadow-emerald-950/30">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
                    Behavioral Intelligence Architect &amp; Executive Strategist
                </span>
            </motion.div>

           
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center -mt-87"
            >
                <span className="text-[14vw] sm:text-[11vw] font-black tracking-tighter uppercase leading-none block text-transparent bg-clip-text bg-gradient-to-b from-white/3 via-white/3 to-transparent whitespace-nowrap opacity-40">
                    Dr. Arnab Basu
                </span>
            </motion.div>

           
            <motion.div variants={itemVariants} className='text-center flex flex-col justify-center items-center text-white py-9'>
                <h1 className='text-4xl font-bold'>
                    Measuring &amp; Scaling Human Irreplaceability <br /> in the AI Age
                </h1>
                <p className=' mt-2.5 w-[600px]'>
                    {" Bridging Cognitive Artificial Intelligence, Behavioral Science, and Business Model Innovation to resolve the critical 'Behavioral Architecture Crisis' in modern talent, leadership, and education."}
                </p>
            </motion.div>

            
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 py-4">
                {BADGES.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={idx}
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-white text-xs lg:text-sm font-medium transition-all duration-200 shadow-sm"
                        >
                            <div className="p-2 rounded-lg bg-white/5 shrink-0">
                                <Icon className={`w-4 h-4 ${item.highlightColor}`} />
                            </div>
                            <span className='flex flex-col'>
                                <strong className="font-semibold text-white">{item.text}</strong>
                                {item.detail && (
                                    <span className="text-white/70 font-normal"> ({item.detail})</span>
                                )}
                            </span>
                        </div>
                    );
                })}
            </motion.div>

          
            <motion.div variants={itemVariants} className='flex gap-3 py-4'>
                <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-white text-black hover:bg-white/90 font-semibold rounded-full px-7 py-6 shadow-lg shadow-white/5 transition-all duration-300"
                >
                    <Link href="#ventures" className="flex items-center justify-center gap-2">
                        Explore Portfolio &amp; IP
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </Button>

                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto bg-white/16 hover:bg-white/20 text-white border-white/20 hover:border-white/40 font-medium rounded-full px-7 py-6 backdrop-blur-md transition-all duration-300"
                >
                    <Link href="#contact" className="flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        Book Executive Advisory
                    </Link>
                </Button>
            </motion.div>

          
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-lg bg-white/10 border border-white/10 mt-10">
                {METRICS.map((metric, idx) => {
                    const Icon = metric.icon;

                    return (
                        <div
                            key={idx}
                            className={`flex flex-col items-center sm:items-start text-center sm:text-left p-3 rounded-xl transition-all duration-300 hover:bg-white/[0.03]
          ${idx !== METRICS.length - 1 ? "md:border-r md:border-white/10" : ""}
        `}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                                    <Icon className={`w-4 h-4 ${metric.accentColor}`} />
                                </div>

                                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                                    {metric.value}
                                </span>
                            </div>

                            <p className="text-xs sm:text-sm font-medium text-slate-400 leading-snug">
                                {metric.label}
                            </p>
                        </div>
                    );
                })}
            </motion.div>
        </motion.section>
    );
};

export default HeroBanner;