"use client";

import { services } from "@/data/services";
import ScrollAnimation from "./ScrollAnimation";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-violet-500">
              What I offer
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            From landing pages to full React applications — I build what your
            business needs.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={service.id} delay={index * 100}>
              <div className="group relative p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-violet-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-slate-200 dark:text-slate-800 group-hover:text-violet-500/30 transition-colors duration-300 leading-none ml-auto select-none">
                    {service.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-auto">
                  {service.description}
                </p>
                <div className="mt-6 h-px bg-slate-100 dark:bg-slate-800 group-hover:bg-violet-500/30 transition-colors duration-300" />
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
