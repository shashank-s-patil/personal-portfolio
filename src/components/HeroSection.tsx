"use client";

import Image from "next/image";
import { ArrowDown, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[length:4rem_4rem] bg-[image:linear-gradient(90deg,#8080800a_1px,transparent_1px),linear-gradient(#8080800a_1px,transparent_1px)] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollAnimation className="order-2 lg:order-1">
            <div className="space-y-6 sm:space-y-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet-500">
                  Hi, I&apos;m Shashank Patil
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
                <span className="bg-linear-to-r from-violet-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
                  Creative
                </span>{" "}
                Frontend Developer
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                I build fast, accessible, and visually polished web experiences
                using React and Next.js. Currently expanding into full-stack
                development.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={() => scrollTo("projects")}
                  className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 active:scale-[0.97] transition-all duration-200 shadow-lg"
                >
                  View Projects
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <a
                  href="/Shashank_Patil_Resume.pdf"
                  download
                  className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-violet-500 hover:text-violet-500 dark:hover:border-violet-500 active:scale-[0.97] transition-all duration-200"
                >
                  Download CV
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="flex items-center gap-3 pt-1">
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
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200} className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-orange-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-violet-500/10 rounded-full blur-2xl" />
              <div className="relative">
                <Image
                  src="/profile-pic.png"
                  alt="Shashank Patil"
                  width={320}
                  height={320}
                  className="rounded-full ring-4 ring-slate-200/50 dark:ring-slate-700/50 shadow-2xl object-cover w-[240px] sm:w-[288px] lg:w-[320px] h-[240px] sm:h-[288px] lg:h-[320px]"
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
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
