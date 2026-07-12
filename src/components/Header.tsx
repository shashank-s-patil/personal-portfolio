"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Sun, Moon } from "lucide-react";
import ScrollProgressBar from "./ScrollProgressBar";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const darkMode = useSyncExternalStore(
    (onStoreChange) => {
      const observer = new MutationObserver(() => onStoreChange());
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      return () => observer.disconnect();
    },
    () => document.documentElement.classList.contains("dark"),
    () => false
  );

  const toggleDarkMode = () => {
    const newDark = !darkMode;
    localStorage.setItem("theme", newDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDark);
  };

  const scrollToSection = useCallback((href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen || hireModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, hireModalOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100/50 dark:border-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl sm:text-2xl font-bold tracking-tight hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200"
            >
              Shashank<span className="text-violet-500">.</span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-3 py-2 text-sm lg:text-base font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-violet-500 text-white"
                      : "text-slate-600 dark:text-slate-300 hover:text-violet-500 hover:bg-violet-50 dark:hover:bg-violet-500/10"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setHireModalOpen(true)}
                className="hidden sm:inline-flex px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 active:from-violet-700 active:to-purple-700 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-violet-500/25"
              >
                Hire Me
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <ScrollProgressBar />
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-0 left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="flex items-center justify-between h-16 px-4">
              <span className="text-xl font-bold tracking-tight">
                Shashank<span className="text-violet-500">.</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <nav className="px-4 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-violet-50 dark:hover:bg-violet-500/10 hover:text-violet-500 transition-all duration-200"
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4" />
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setHireModalOpen(true);
                }}
                className="w-full mt-4 px-5 py-3.5 text-sm font-semibold rounded-xl text-white bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 active:from-violet-700 active:to-purple-700 transition-all duration-200 shadow-lg"
              >
                Hire Me
              </button>
            </nav>
          </div>
        </div>
      )}

      {hireModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setHireModalOpen(false)}
          />
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <button
              onClick={() => setHireModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Quick Links
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => {
                        scrollToSection(link.href);
                        setHireModalOpen(false);
                      }}
                      className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-violet-500/10 hover:text-violet-500 transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-100 dark:bg-slate-800" />

              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Contact Info
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:shashankpatil297@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500 transition-colors">
                      <Mail className="w-4 h-4 text-violet-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">
                        Email
                      </div>
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        shashankpatil297@gmail.com
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/8007014483"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                      <Phone className="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">
                        Phone
                      </div>
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        +91 8007014483
                      </div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 p-3 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-500/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">
                        Location
                      </div>
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        Maharashtra, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100 dark:bg-slate-800" />

              <div className="text-xs text-slate-400 space-y-1">
                <p>Built with Next.js & Tailwind CSS</p>
                <p>&copy; 2026 Shashank Patil. All rights reserved.</p>
                <p className="text-slate-500 font-medium">
                  Open to freelance &amp; full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
