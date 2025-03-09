import SkillBadge from "@/components/ui/skill-badge";
import { skills } from "@/data/skills";

export default function SkillsList(){
    return (
        <div className="space-y-2 w-full">
            <h2 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-2
                         flex items-center">
                Compétences
            </h2>
            <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                    <SkillBadge skill={skill} key={skill.name}/>
                ))}
            </div>
        </div>
    )
}