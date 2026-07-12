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
    liveUrl: "https://shopingo.vercel.app",
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
    githubUrl: "https://github.com/shashank-s-patil/personal-portfolio",
    liveUrl: "https://shashank-personal-portfolio.vercel.app",
  },

    {
    id: 1,
    title: "Delight To Serve",
    slug: "delight-to-serve",
    description:
      "It's an Food web application, built with React JS and a real-time backend.",
    image: "/delight-to-serve.png",
    tags: ["Next.js 16", "TypeScript", "Mobile-First"],
    featured: true,
    githubUrl: "https://github.com/shashank-s-patil",
    liveUrl: "https://delight-to-serve.vercel.app",
  },

];
