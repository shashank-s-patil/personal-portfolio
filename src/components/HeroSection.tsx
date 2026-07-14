"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import ResumeButton from "./ResumeButton";

const fadeUp = (delay?: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: delay ?? 0 },
});

const typewriterText = "Full Stack Developer";
const TYPING_SPEED = 60;

function TypewriterBadge() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(typewriterText.slice(0, i));
      if (i >= typewriterText.length) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 400);
      }
    }, TYPING_SPEED);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      {...fadeUp(0.1)}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-500/20"
    >
      <motion.span
        className="w-2 h-2 rounded-full bg-violet-500"
        animate={{ scale: done ? [1, 1.3, 1] : 1 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
      />
      <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet-500">
        {displayed}
        {!done && (
          <span className="inline-block w-[2px] h-3 bg-violet-500 ml-0.5 animate-pulse" />
        )}
      </span>
    </motion.div>
  );
}

const headlineText = "Turn Ideas Into Digital Reality";
const GRADIENT_START = 15;

function HeadlineTypewriter() {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting" | "idle">("typing");

  useEffect(() => {
    if (phase === "typing") {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(headlineText.slice(0, i));
        if (i >= headlineText.length) {
          clearInterval(interval);
          setPhase("pause");
        }
      }, 70);
      return () => clearInterval(interval);
    }
    if (phase === "pause") {
      const timeout = setTimeout(() => setPhase("deleting"), 3000);
      return () => clearTimeout(timeout);
    }
    if (phase === "deleting") {
      let i = headlineText.length;
      const interval = setInterval(() => {
        i--;
        setDisplayed(headlineText.slice(0, i));
        if (i <= 0) {
          clearInterval(interval);
          setPhase("idle");
        }
      }, 35);
      return () => clearInterval(interval);
    }
    if (phase === "idle") {
      const timeout = setTimeout(() => {
        setDisplayed("");
        setPhase("typing");
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  const normalPart = displayed.slice(0, GRADIENT_START);
  const gradientPart = displayed.slice(GRADIENT_START);
  const showCursor = phase !== "idle";

  return (
    <div className="relative text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
      <span className="invisible pointer-events-none" aria-hidden="true">
        {headlineText}
      </span>
      <span className="absolute inset-0">
        <span>{normalPart}</span>
        {gradientPart && (
          <span className="bg-linear-to-r from-violet-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
            {gradientPart}
          </span>
        )}
        {showCursor && (
          <span className="inline-block w-[3px] h-[0.8em] bg-violet-500 ml-0.5 animate-pulse align-middle" />
        )}
      </span>
    </div>
  );
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-dvh flex items-center bg-[length:4rem_4rem] bg-[image:linear-gradient(90deg,#8080800a_1px,transparent_1px),linear-gradient(#8080800a_1px,transparent_1px)] pt-16 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 w-full relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ScrollAnimation className="order-2 lg:order-1">
            <div className="space-y-5 sm:space-y-6">
              <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet-500">
                  Hi, I&apos;m Shashank Patil
                </span>
              </motion.div>

              <HeadlineTypewriter />

              <motion.p {...fadeUp(0.3)} className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                You bring the vision. I build the solution.
                <br />
                From pixel-perfect frontends to powerful backends &mdash;
                <br />
                I craft full-stack applications that drive growth and deliver results.
              </motion.p>

              <TypewriterBadge />

              <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 sm:gap-4 pt-1">
                <button
                  onClick={() => scrollTo("projects")}
                  className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 active:scale-[0.97] transition-all duration-200 shadow-lg"
                >
                  View Projects
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <ResumeButton
                  className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-violet-500 hover:text-violet-500 dark:hover:border-violet-500 active:scale-[0.97] transition-all duration-200 disabled:opacity-60"
                />
              </motion.div>

              <motion.div {...fadeUp(0.45)} className="flex items-center gap-3 pt-1">
                <a
                  href="https://github.com/shashank-s-patil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 hover:scale-110 active:scale-100 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-s-patil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#0A66C2] hover:text-white hover:scale-110 active:scale-100 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/8007014483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#25D366] hover:text-white hover:scale-110 active:scale-100 transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200} className="order-1 lg:order-2 flex justify-center lg:justify-end self-center">
            <motion.div
              className="relative flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full border-2 border-violet-500/15"
                style={{ borderImage: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(168,85,247,0.1)) 1" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] rounded-full border border-violet-400/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-violet-500/10 blur-3xl animate-pulse" />
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-orange-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-violet-500/10 rounded-full blur-2xl" />
              <div className="relative">
                <Image
                  src="/profile-pic.png"
                  alt="Shashank Patil — Software Developer & Full Stack Developer"
                  width={320}
                  height={320}
                  className="rounded-full ring-4 ring-slate-200/50 dark:ring-slate-700/50 shadow-2xl object-cover w-[200px] sm:w-[260px] lg:w-[320px] h-[200px] sm:h-[260px] lg:h-[320px]"
                  priority
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Available for work
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  2+ Year Exp.
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
