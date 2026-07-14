"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/skills";
import ScrollAnimation from "./ScrollAnimation";

const levelColors = {
  Advanced: "bg-green-500/10 text-green-700 dark:text-green-400",
  Intermediate: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  Learning: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-violet-500">
              What I work with
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Skills &amp; Technologies
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Technologies I use to build full-stack solutions that scale.
          </p>
        </ScrollAnimation>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={cardVariants}>
              <div className="group p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-violet-500/50 hover:shadow-md hover:shadow-violet-500/5 transition-all duration-200">
                <div className="flex flex-col items-center text-center gap-3">
                  <skill.icon
                    className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                  <div>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {skill.name}
                    </div>
                    <span
                      className={`inline-block mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        levelColors[skill.level]
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
