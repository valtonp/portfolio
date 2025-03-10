import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {Project} from "@/data/projects";
import SkillBadge from "@/components/ui/skill-badge";
import ProjectInfo from "@/components/layout/project-info";

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {

    return (
        <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 group h-full
         flex flex-col">
            <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                        <SkillBadge key={index} skill={tech} />
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex gap-2">
                <ProjectInfo />
            </CardFooter>
        </Card>
    )
}

