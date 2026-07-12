import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiCss,
  SiGit,
  SiBootstrap,
} from "react-icons/si";
import { TbApi, TbCode } from "react-icons/tb";
import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  level: "Advanced" | "Intermediate" | "Learning";
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: "Advanced",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    level: "Intermediate",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    level: "Advanced",
  },
  {
    name: "CSS3",
    icon: SiCss,
    color: "#2965F1",
    level: "Advanced",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    level: "Intermediate",
  },
  {
    name: "REST APIs",
    icon: TbApi,
    color: "#8d54ff",
    level: "Intermediate",
  },
  {
    name: "VS Code",
    icon: TbCode,
    color: "#007ACC",
    level: "Advanced",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
    level: "Intermediate",
  },
];
