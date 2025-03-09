import { Skill, SkillCategory } from "@/data/skills";

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: Skill[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Neptunedive",
        description:
            "Application web SaaS permettant aux clubs de plongée de gérer leurs sorties et leurs adhérents.",
        image: "/placeholder.svg?height=300&width=500&text=E-commerce+Platform",
        technologies: [
            { name: "Next.js", category: SkillCategory.Frontend },
            { name: "Docker", category: SkillCategory.Tools },
            { name: "Symfony", category: SkillCategory.Backend },
            { name: "MySQL", category: SkillCategory.Database },
            { name: "Tailwind", category: SkillCategory.Frontend },
            { name: "SCRUM", category: SkillCategory.Methodology },
            { name: "GitLab", category: SkillCategory.Tools },
        ],
    },
    {
        id: 2,
        title: "Portfolio",
        description: "Portfolio web interactif mettant en avant mes projets et compétences à travers des interfaces modernes et dynamiques.",
        image: "/placeholder.svg?height=300&width=500&text=Portfolio+Website",
        technologies: [
            { name: "Next.js", category: SkillCategory.Frontend },
            { name: "Tailwind CSS", category: SkillCategory.Frontend },
            { name: "GitHub", category: SkillCategory.Methodology },
        ],
    },
];
