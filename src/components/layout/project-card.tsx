import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {Project} from "@/data/projects";
import SkillBadge from "@/components/ui/skill-badge";

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
                <Button variant="default" size="sm" className="gap-1" asChild>
                    <a href={""} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Voir plus</span>
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}

