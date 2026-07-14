"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  label,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const count = useSpring(0, {
    stiffness: 60,
    damping: 20,
  });

  const rounded = useTransform(count, (v) => Math.round(v));

  if (started) {
    count.set(end);
  }

  return (
    <div ref={ref} className="text-center">
      <motion.div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
        {started ? (
          <motion.span>{rounded}</motion.span>
        ) : (
          <span>0</span>
        )}
        <span>{suffix}</span>
      </motion.div>
      <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
        {label}
      </div>
    </div>
  );
}
