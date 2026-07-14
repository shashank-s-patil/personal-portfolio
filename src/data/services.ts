import { Monitor, Layout, Code, Smartphone, Bug } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    number: "01",
    icon: Monitor,
    title: "Responsive Web Development",
    description:
      "Pixel-perfect, mobile-first websites that look stunning on every device — from phones to ultrawide monitors.",
    features: [
      "Cross-browser compatibility",
      "Fluid layouts & breakpoints",
      "Performance optimized",
    ],
  },
  {
    id: 2,
    number: "02",
    icon: Layout,
    title: "UI/UX Implementation",
    description:
      "Turn Figma designs, wireframes, or conceptual ideas into fully functional, accessible interfaces.",
    features: [
      "Pixel-perfect conversions",
      "Accessibility (a11y) audits",
      "Micro-interactions",
    ],
  },
  {
    id: 3,
    number: "03",
    icon: Code,
    title: "Full-Stack Web Development (MERN)",
    description:
      "End-to-end application development using MongoDB, Express, React, and Node.js — from database design to deploy-ready APIs.",
    features: [
      "RESTful APIs & backend architecture",
      "Database design (MongoDB)",
      "Full-stack deployment & scaling",
    ],
  },
  {
    id: 4,
    number: "04",
    icon: Smartphone,
    title: "Performance Optimization",
    description:
      "Audit, analyze, and improve Core Web Vitals — Lighthouse scores, load times, and runtime efficiency.",
    features: [
      "Image & font optimization",
      "Code splitting",
      "Bundle analysis",
    ],
  },
  {
    id: 5,
    number: "05",
    icon: Bug,
    title: "Maintenance & Support",
    description:
      "Ongoing support for existing projects — bug fixes, feature updates, dependency upgrades, and more.",
    features: [
      "Bug fixing & debugging",
      "Dependency updates",
      "Code reviews",
    ],
  },
];
