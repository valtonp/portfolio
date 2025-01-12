import { ExternalLinkIcon } from 'lucide-react'

const projects = [
    { name: 'Project 1', description: 'A brief description of Project 1', link: '#' },
    { name: 'Project 2', description: 'A brief description of Project 2', link: '#' },
    { name: 'Project 3', description: 'A brief description of Project 3', link: '#' },
]

export default function Projects() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-blue-900">My Projects</h1>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <div key={project.name} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2 text-blue-800">{project.name}</h2>
                        <p className="text-slate-600 mb-4">{project.description}</p>
                        <a
                            href={project.link}
                            className="inline-flex items-center text-blue-700 hover:text-blue-900"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                            <ExternalLinkIcon className="ml-1 h-4 w-4" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

