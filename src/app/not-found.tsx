"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[length:4rem_4rem] bg-[image:linear-gradient(90deg,#8080800a_1px,transparent_1px),linear-gradient(#8080800a_1px,transparent_1px)]" />

      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-2xl"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="relative flex items-center justify-center mb-8">
          <motion.div
            className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-violet-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-violet-400/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-violet-500/10 blur-3xl animate-pulse" />

          <motion.h1
            className="relative text-8xl sm:text-9xl font-black leading-none tracking-tighter select-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              4
            </span>
            <motion.span
              className="inline-block bg-linear-to-r from-violet-500 via-violet-500 to-purple-600 bg-clip-text text-transparent"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              0
            </motion.span>
            <span className="bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              4
            </span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Oops! Page Not Found
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            But don&apos;t worry &mdash; I&apos;m still here to help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border border-slate-200 dark:border-slate-800 max-w-sm mx-auto"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Have a question or need something? Let&apos;s talk.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:shashankpatil297@gmail.com"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-medium hover:bg-violet-500 hover:text-white transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://wa.me/8007014483"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium hover:bg-emerald-500 hover:text-white transition-all duration-200"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 active:scale-[0.97] transition-all duration-200 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
