import { ExternalLinkIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
    { name: 'Project 1', description: 'A brief description of Project 1', link: '#' },
    { name: 'Project 2', description: 'A brief description of Project 2', link: '#' },
    { name: 'Project 3', description: 'A brief description of Project 3', link: '#' },
]

export default function Projects() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">My Projects</h1>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <Card key={project.name}>
                        <CardHeader>
                            <CardTitle>{project.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{project.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="outline">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

