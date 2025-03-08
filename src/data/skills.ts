enum SkillCategory {
    Frontend = "frontend",
    Backend = "backend",
    Database = "database",
    Tools = "tools",
    Methodology = "methodology",
}

export interface Skill {
    name: string;
    category: SkillCategory;
}

export const skills = [
    { name: "Git", category: SkillCategory.Tools },
    { name: "Docker", category: SkillCategory.Tools },
    { name: "React", category: SkillCategory.Frontend },
    { name: "Next.js", category: SkillCategory.Frontend },
    { name: "MySQL", category: SkillCategory.Database },
    { name: "Java", category: SkillCategory.Backend },
    { name: "JavaScript", category: SkillCategory.Frontend },
    { name: "TypeScript", category: SkillCategory.Frontend },
    { name: "Vue.js", category: SkillCategory.Frontend },
    { name: "PHP", category: SkillCategory.Backend  },
    { name: "Symfony", category: SkillCategory.Backend  },
    { name: "MongoDB", category: SkillCategory.Database },
    { name: "Cassandra", category: SkillCategory.Database },
    { name: "Tailwind CSS", category: SkillCategory.Frontend },
    { name: "Méthodes Agiles (SCRUM)", category: SkillCategory.Methodology },
]

export const skillCategories = {
    frontend: "bg-black-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    backend: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    database: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    tools: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    methodology: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
}