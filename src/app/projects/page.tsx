import { ExternalLinkIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const projects = [
    {
        name: 'NeptuneDive',
        description: 'Une application web de gestion de sortie de plongée',
        link: '/projects/neptunedive',
        isInternal: true
    },
    {
        name: 'Project 2',
        description: 'A brief description of Project 2',
        link: '#',
        isInternal: true
    },
    {
        name: 'Project 3',
        description: 'A brief description of Project 3',
        link: '#',
        isInternal: true
    },
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
                                {project.isInternal ? (
                                    <Link href={project.link}>
                                        Voir le projet
                                        <ExternalLinkIcon className="ml-2 h-4 w-4" />
                                    </Link>
                                ) : (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Voir le projet
                                        <ExternalLinkIcon className="ml-2 h-4 w-4" />
                                    </a>
                                )}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

