import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

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

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
    if (featured) {
        return (
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 relative overflow-hidden">
                        <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="w-full h-full object-cover aspect-video md:aspect-auto group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-between">
                        <div className="space-y-4">
                            <CardHeader className="p-0">
                                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                                <CardDescription className="text-base mt-2">{project.description}</CardDescription>
                            </CardHeader>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="hover:bg-primary/20 transition-colors">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <CardFooter className="flex gap-3 p-0 pt-4">
                            <Button variant="default" size="sm" className="gap-1" asChild>
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4" />
                                    <span>Demo</span>
                                </a>
                            </Button>
                            <Button variant="outline" size="sm" className="gap-1" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4" />
                                    <span>Code</span>
                                </a>
                            </Button>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        )
    }

    return (
        <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
            <div className="relative overflow-hidden aspect-video">
                <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
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
                        <span>Demo</span>
                    </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5" />
                        <span>Code</span>
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}

