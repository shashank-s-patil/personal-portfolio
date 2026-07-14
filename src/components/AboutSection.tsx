"use client";

import { useRef } from "react";
import Image from "next/image";
import { Globe, Mail, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import AnimatedCounter from "./AnimatedCounter";
import ResumeButton from "./ResumeButton";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeSlide = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <ScrollAnimation className="lg:col-span-2">
            <motion.div
              className="relative max-w-xs mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="absolute -inset-4 bg-violet-500/10 dark:bg-violet-500/5 rounded-3xl blur-2xl" />
              <Image
                src="/profile-pic.png"
                alt="Shashank Patil"
                width={300}
                height={300}
                className="relative rounded ring-4 ring-slate-200/50 dark:ring-slate-700/50 shadow-xl object-cover w-full aspect-square"
              />
              <div className="relative mt-4 text-center">
                <div className="text-lg font-bold">Shashank Patil</div>
                <div className="text-sm text-violet-500 font-medium">
                  Software Developer
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation delay={150} className="lg:col-span-3">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-500/20">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-violet-500">
                  Get to know me
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                About Me
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I&apos;m a software developer who builds full-stack web
                applications using the MERN stack. I focus on creating digital
                solutions that help businesses grow — from responsive frontends
                to solid backend systems — all crafted with clean code and a
                strong focus on user experience.
              </p>

              <motion.div
                ref={ref}
                variants={stagger}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch"
              >
                <motion.div variants={fadeSlide} className="flex items-start gap-3 p-4 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-violet-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Maharashtra, India
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={fadeSlide} className="flex items-start gap-3 p-4 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400 uppercase tracking-wider">
                      Email
                    </div>
                    <a
                      href="mailto:shashankpatil297@gmail.com"
                      className="text-sm font-medium text-slate-700 dark:text-slate-200 break-all hover:text-violet-500 transition-colors"
                    >
                      shashankpatil297@gmail.com
                    </a>
                  </div>
                </motion.div>
                <motion.div variants={fadeSlide} className="flex items-start gap-3 p-4 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">
                      Availability
                    </div>
                    <div className="text-sm font-medium text-green-500">
                      Open to opportunities
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <div className="grid grid-cols-3 gap-6 py-6 border-y border-slate-200 dark:border-slate-800">
                <AnimatedCounter end={2} suffix="+" label="Projects Done" />
                <AnimatedCounter
                  end={2}
                  suffix="+"
                  label="Happy Clients"
                  delay={150}
                />
                <AnimatedCounter
                  end={100}
                  suffix="%"
                  label="On Time Delivery"
                  delay={300}
                />
              </div>

              <ResumeButton
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 active:scale-[0.97] transition-all duration-200 shadow-lg disabled:opacity-60"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
