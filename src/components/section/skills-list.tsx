import {skillCategories, skills} from "@/data/skills";
import {Badge} from "@/components/ui/badge";

export default function SkillsList(){
    return (
        <div className="space-y-2 w-full">
            <h2 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-2
                         flex items-center">
                Compétences
            </h2>
            <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                    <Badge
                        key={skill.name}
                        variant="outline"
                        className={`${skillCategories[skill.category as keyof typeof skillCategories]}
                                     text-xs hover:scale-105 transition-transform duration-200`}
                    >
                        {skill.name}
                    </Badge>
                ))}
            </div>
        </div>
    )
}