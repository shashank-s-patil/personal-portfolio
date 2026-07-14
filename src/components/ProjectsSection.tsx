"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ExternalLink, Clock, X, ZoomIn } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import ScrollAnimation from "./ScrollAnimation";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const tagVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

function TiltCard({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      card.style.transform = `perspective(1000px) rotateX(${
        (y - centerY) / 12
      }deg) rotateY(${(centerX - x) / 12}deg)`;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      style={{ transition: "transform 0.15s ease-out" }}
    >
      {children}
    </div>
  );
}

function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[50vh] sm:h-[70vh]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-white/70 text-sm">{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-violet-500">
              What I&apos;ve built
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </ScrollAnimation>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants} className="h-full">
              <TiltCard className="h-full">
                <div className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 max-md:opacity-100 max-md:bg-slate-900/40 transition-opacity duration-300 flex items-center justify-center gap-3">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200 text-white"
                          aria-label={`View ${project.title} source code`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      ) : (
                        <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 text-white/70 text-xs font-medium backdrop-blur-sm border border-white/20">
                          <Clock className="w-3.5 h-3.5" />
                          Source coming soon
                        </div>
                      )}
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200 text-white"
                          aria-label={`View ${project.title} live demo`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      ) : (
                        <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 text-white/70 text-xs font-medium backdrop-blur-sm border border-white/20">
                          <Clock className="w-3.5 h-3.5" />
                          Live soon
                        </div>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxProject(project);
                        }}
                        className="p-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200 text-white"
                        aria-label={`View ${project.title} full image`}
                      >
                        <ZoomIn className="w-5 h-5" />
                      </button>
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-violet-600 text-white text-xs font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-5 space-y-3 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg group-hover:text-violet-500 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <motion.span
                          key={tag}
                          custom={i}
                          variants={tagVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20 font-medium"
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <ScrollAnimation className="text-center mt-12">
          <a
            href="https://github.com/shashank-s-patil"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-violet-500 hover:text-violet-500 dark:hover:border-violet-500 transition-all duration-200"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </ScrollAnimation>
      </div>

      <AnimatePresence>
        {lightboxProject && (
          <Lightbox
            project={lightboxProject}
            onClose={() => setLightboxProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
