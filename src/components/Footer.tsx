"use client";

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <footer
        aria-label="Site footer"
        className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div className="flex flex-col gap-4">
              <button
                onClick={scrollToTop}
                className="text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200 w-fit"
              >
                Shashank<span className="text-violet-500">.</span>
              </button>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Software Developer building full-stack web solutions that
                drive business growth.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/shashank-s-patil"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Shashank Patil on GitHub"
                  className="group relative w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 overflow-hidden transition-all duration-200"
                >
                  <span className="absolute inset-0 bg-[#333] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <FaGithub className="relative z-10 w-4 h-4 transition-colors duration-200 group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-s-patil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Shashank Patil on LinkedIn"
                  className="group relative w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 overflow-hidden transition-all duration-200"
                >
                  <span className="absolute inset-0 bg-[#0A66C2] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <FaLinkedinIn className="relative z-10 w-4 h-4 transition-colors duration-200 group-hover:text-white" />
                </a>
                <a
                  href="https://wa.me/8007014483"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Shashank Patil on WhatsApp"
                  className="group relative w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 overflow-hidden transition-all duration-200"
                >
                  <span className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <FaWhatsapp className="relative z-10 w-4 h-4 transition-colors duration-200 group-hover:text-white" />
                </a>
                <a
                  href="mailto:shashankpatil297@gmail.com"
                  aria-label="Send email to Shashank Patil"
                  className="group relative w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 overflow-hidden transition-all duration-200"
                >
                  <span className="absolute inset-0 bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="relative z-10 w-4 h-4 transition-colors duration-200 group-hover:text-white"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-widest">
                Quick Links
              </h4>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-col gap-2">
                  {["About", "Skills", "Services", "Projects", "Contact"].map(
                    (link) => (
                      <li key={link}>
                        <button
                          onClick={() =>
                            scrollToSection(`#${link.toLowerCase()}`)
                          }
                          className="group relative text-sm text-slate-500 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200"
                        >
                          {link}
                          <span className="absolute -bottom-0.5 left-1/2 w-0 h-px bg-violet-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-widest">
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:shashankpatil297@gmail.com"
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200 w-fit"
                >
                  shashankpatil297@gmail.com
                </a>
                <a
                  href="https://wa.me/8007014483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200 w-fit"
                >
                  +91 8007014483
                </a>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="text-violet-500 shrink-0"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                  </svg>
                  <span>Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400 dark:text-slate-500">
              &copy; {currentYear} Shashank Patil. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 dark:text-slate-500">
              Built with{" "}
              <span className="text-violet-500 font-medium">Next.js </span>
              &amp;{" "}
              <span className="text-violet-500 font-medium">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-violet-500 text-white shadow-lg hover:bg-violet-600 active:scale-95 transition-all duration-200 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
