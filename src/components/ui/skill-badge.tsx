import {Skill, skillCategories} from "@/data/skills"
import {Badge} from "@/components/ui/badge";
interface SkillProps{
    skill: Skill
}

export default function SkillBadge({skill}: SkillProps){
    return (
        <Badge
            key={skill.name}
            variant="outline"
            className={`${skillCategories[skill.category as keyof typeof skillCategories]}
                                     text-xs hover:scale-105 transition-transform duration-200`}
        >
            {skill.name}
        </Badge>
    )
}