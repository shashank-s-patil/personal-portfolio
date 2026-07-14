"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeButtonProps {
  className?: string;
}

export default function ResumeButton({ className = "" }: ResumeButtonProps) {
  const [loading, setLoading] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    if (!showComingSoon) return;
    const timeout = setTimeout(() => setShowComingSoon(false), 3000);
    return () => clearTimeout(timeout);
  }, [showComingSoon]);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch("/Shashank_Patil_Resume.pdf", { method: "HEAD" });
      if (!res.ok) throw new Error("Not found");
      const blobRes = await fetch("/Shashank_Patil_Resume.pdf");
      const blob = await blobRes.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Shashank_Patil_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      setShowComingSoon(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inline-flex items-center gap-3">
      <button onClick={handleClick} disabled={loading} className={className}>
        {loading ? "Checking..." : (
          <>
            Download CV
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </>
        )}
      </button>
      <AnimatePresence>
        {showComingSoon && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm font-medium text-violet-500 dark:text-violet-400 whitespace-nowrap"
          >
            Coming soon
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
