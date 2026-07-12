export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 2,
    title: "Shopingo",
    slug: "shopingo",
    description:
      "An E-Commerce web application, built with React JS and a real-time backend.",
    image: "/shopingo-img.png",
    tags: ["React 19", "Tailwind", "Node JS", "MongoDB"],
    featured: true,
    githubUrl: "https://github.com/shashank-s-patil",
    liveUrl: "https://shashank-patil-portfolio-beige.vercel.app",
  },

  {
    id: 3,
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    description:
      "My first portfolio website — a mobile-first, performance-optimized showcase of projects and skills.",
    image: "/portfolio-img.png",
    tags: ["Mobile-First", "Perf Optimized", "SEO"],
    featured: false,
    githubUrl: "https://github.com/shashank-s-patil",
    liveUrl: "https://shashank-patil-portfolio-beige.vercel.app",
  },

    {
    id: 1,
    title: "Bloom Bakery",
    slug: "bloom-bakery",
    description:
      "A full-featured e-commerce bakery platform with real-time inventory, Stripe payments, and an admin dashboard.",
    image: "https://cdn.sanity.io/images/makoyr9k/production/8396ad4cf272c87a5d56812c103534bdcef2c232-1024x607.png?rect=0,48,1024,512&w=800&h=400",
    tags: ["Next.js 16", "TypeScript", "Sanity", "Prisma", "Stripe"],
    featured: true,
    githubUrl: "https://github.com/shashank-s-patil",
    liveUrl: "https://shashank-patil-portfolio-beige.vercel.app",
  },

];
