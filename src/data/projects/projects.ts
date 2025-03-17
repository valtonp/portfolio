import { Skill, SkillCategory } from "@/data/skills";

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: Skill[];
    onGoing: boolean,
    infoId?: number,
}

/**
 *      Order by index of projects
 */
export const projects: Project[] = [
    {
        id: 5,
        title: "FinRecords",
        description:
            "Application web et mobile de gestion des dépenses et de wallet.",
        technologies: [
            { name: "Next.js", category: SkillCategory.Frontend },
            { name: "NestJS", category: SkillCategory.Backend },
            { name: "SQLite", category: SkillCategory.Database },
            { name: "Tailwind", category: SkillCategory.Frontend },
            { name: "GitHub", category: SkillCategory.Tools },
        ],
        onGoing : true,
    },
    {
        id: 1,
        title: "Neptunedive",
        description:
            "Application web SaaS permettant aux clubs de plongée de gérer leurs sorties et leurs adhérents.",
        technologies: [
            { name: "Next.js", category: SkillCategory.Frontend },
            { name: "Docker", category: SkillCategory.Tools },
            { name: "Symfony", category: SkillCategory.Backend },
            { name: "MySQL", category: SkillCategory.Database },
            { name: "Tailwind CSS", category: SkillCategory.Frontend },
            { name: "SCRUM", category: SkillCategory.Methodology },
            { name: "GitLab", category: SkillCategory.Tools },
        ],
        onGoing : false,
        infoId: 1,
    },
    {
        id: 2,
        title: "Portfolio",
        description: "Portfolio web interactif mettant en avant mes projets et compétences à travers des interfaces modernes et dynamiques.",
        technologies: [
            { name: "Next.js", category: SkillCategory.Frontend },
            { name: "Tailwind CSS", category: SkillCategory.Frontend },
            { name: "GitHub", category: SkillCategory.Tools },
        ],
        onGoing : false,
    },
    {
        id: 3,
        title: "Stagia",
        description:
            "Application web de gestion de stage et d'alternance pour l'université.",
        technologies: [
            { name: "HTML/CSS", category: SkillCategory.Frontend },
            { name: "PHP", category: SkillCategory.Backend },
            { name: "MySQL", category: SkillCategory.Database },
            { name: "Bootstrap", category: SkillCategory.Frontend },
            { name: "SCRUM", category: SkillCategory.Methodology },
            { name: "GitLab", category: SkillCategory.Tools },
        ],
        onGoing : false,
        infoId: 2,
    },
    {
        id: 4,
        title: "Les Aventuriers du Rail - Autour du Monde",
        description:
            "Jeux de société",
        technologies: [
            { name: "JavaFX", category: SkillCategory.Frontend },
            { name: "Java", category: SkillCategory.Backend },
            { name: "GitLab", category: SkillCategory.Tools },
        ],
        onGoing : false,
        infoId: 3,
    },

];