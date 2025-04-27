export enum SkillCategory {
    Frontend = "frontend",
    Backend = "backend",
    Database = "database",
    Methodology = "methodology",
    SoftSkill = "softskill",
    Tools = "tools",
}

export interface Skill {
    name: string;
    category: SkillCategory;
}

export const skills = [
    { name: "Rigeur", category: SkillCategory.SoftSkill },
    { name: "Typescript", category: SkillCategory.Frontend },
    { name: "MySQL", category: SkillCategory.Database },
    { name: "Agile", category: SkillCategory.Methodology },
    { name: "Qualité de code", category: SkillCategory.Methodology },
    { name: "Autonomie", category: SkillCategory.SoftSkill },
    { name: "Git", category: SkillCategory.Tools },
    { name: "Communication", category: SkillCategory.SoftSkill },
    { name: "Docker", category: SkillCategory.Tools },
    { name: "Adaptabilité", category: SkillCategory.SoftSkill },
    { name: "Symfony", category: SkillCategory.Backend },
    { name: "Next.js", category: SkillCategory.Frontend },
    { name: "Java", category: SkillCategory.Backend },
]

export const skillCategories = {
    frontend: "bg-purple-300 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    backend: "bg-green-300 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    database: "bg-amber-300 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    methodology: "bg-pink-300 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
    tools: "bg-slate-400 text-slate-800 dark:bg-slate-600/30 dark:text-slate-300",
    softskill: "bg-sky-300 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
}