import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    demoUrl: string
    githubUrl: string
    featured: boolean
}

interface ProjectCardProps {
    project: Project
    featured?: boolean
}

export default function ProjectCard({ project }: ProjectCardProps) {

    return (
        <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
            <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex gap-2">
                <Button variant="default" size="sm" className="gap-1" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>More</span>
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}

