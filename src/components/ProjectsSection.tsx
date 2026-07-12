"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import ScrollAnimation from "./ScrollAnimation";

export default function ProjectsSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} delay={index * 100}>
              <div className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 max-md:opacity-100 max-md:bg-slate-900/40 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.githubUrl && (
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
                    )}
                    {project.liveUrl && (
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
                    )}
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-violet-600 text-white text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-lg group-hover:text-violet-500 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

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
    </section>
  );
}
