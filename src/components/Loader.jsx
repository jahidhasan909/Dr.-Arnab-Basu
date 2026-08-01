"use client";

import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#1c2833] to-[#0a0f1b] px-4">
      <div className="flex flex-col items-center gap-1.5 text-center">
        <h1 className="text-lg sm:text-xl font-bold tracking-wider uppercase text-white">
          Dr. Arnab Basu
        </h1>

        <p className="text-[11px] sm:text-xs tracking-widest uppercase text-slate-300">
          MIT Sloan PhD · Ex-McKinsey
        </p>

        
        <div className="w-28 sm:w-36 h-1 bg-white/10 rounded-full overflow-hidden mt-3 relative">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;