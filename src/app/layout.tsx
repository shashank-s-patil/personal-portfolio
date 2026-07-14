import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shashank Patil | Software Developer — Full-Stack (MERN)",
  description:
    "Full-stack software developer specializing in React, Next.js, Node.js & MongoDB. I build web applications that drive business growth. Open for freelance & full-time.",
  authors: [{ name: "Shashank Patil", url: "https://shashank-portfolio.vercel.app" }],
  keywords: [
    "Software Developer",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Freelance Web Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Web Application Development",
    "Freelance Developer India",
    "Shashank Patil",
  ],
  creator: "Shashank Patil",
  robots: "index, follow",
  openGraph: {
    title: "Shashank Patil | Software Developer",
    description:
      "Full-stack software developer building web applications that drive business growth. React, Next.js, Node.js, MongoDB.",
    url: "https://shashank-portfolio.vercel.app",
    siteName: "Shashank Patil Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@shashankpatil",
    title: "Shashank Patil | Software Developer",
    description:
      "Full-stack software developer building web applications that drive business growth.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shashank Patil",
  url: "https://shashank-portfolio.vercel.app",
  jobTitle: "Software Developer",
  description:
    "Full-stack software developer specializing in MERN stack — React, Next.js, Node.js, MongoDB. Building web solutions that drive business growth.",
  image: "https://shashank-portfolio.vercel.app/profile-pic.png",
  sameAs: [
    "https://github.com/shashank-s-patil",
    "https://linkedin.com/in/shashank-s-patil",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Full-Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
                document.documentElement.classList.add(t);
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 animate-page-load">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-violet-500 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
