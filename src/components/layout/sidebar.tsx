import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Sidebar() {
    const skills = [
        { name: "Git", category: "tools" },
        { name: "Docker", category: "tools" },
        { name: "React", category: "frontend" },
        { name: "Next.js", category: "frontend" },
        { name: "Java", category: "backend" },
        { name: "JavaScript", category: "frontend" },
        { name: "TypeScript", category: "frontend" },
        { name: "Vue.js", category: "frontend" },
        { name: "PHP", category: "backend" },
        { name: "Symfony", category: "backend" },
        { name: "SQL", category: "database" },
        { name: "NoSQL", category: "database" },
        { name: "Tailwind CSS", category: "frontend" },
        { name: "Méthodes Agiles (SCRUM)", category: "methodology" },
    ]

    const skillCategories = {
        frontend: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        backend: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
        database: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
        tools: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
        methodology: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
    }

    return (
        <Card className="basis-1/4 xl:w-1/4 bg-white dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl
         transition-all duration-300 lg:sticky lg:top-8 h-auto">
            <CardContent className="p-5">
                <div className="flex flex-col items-center space-y-4">
                    {/* Profile Picture with animated border */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-600 rounded-full
                         opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-500"></div>
                        <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white
                         dark:border-gray-800">
                            <Image
                                src="/placeholder.svg?height=128&width=128"
                                alt="Picture"
                                className="w-full h-full object-cover"
                                width={128}
                                height={128}
                                priority
                            />
                        </div>
                    </div>

                    {/* Name and Title */}
                    <div className="text-center space-y-2">
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                            Paul Valton
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">Full Stack Developer</p>
                        <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>Montpellier, Lattes</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 w-full items-center justify-center">
                        <Button className="flex-1 gap-2 max-w-32 mr-3" size="sm">
                            <Download className="h-4 w-4" />
                            <span>CV</span>
                        </Button>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link href="https://github.com/valtonp" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Github className="h-5 w-5" />
                                            <span className="sr-only">GitHub</span>
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>GitHub</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="https://www.linkedin.com/in/paul-valton-5617a3230/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Linkedin className="h-5 w-5" />
                                            <span className="sr-only">LinkedIn</span>
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>LinkedIn</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link href="mailto:paul.valton@icloud.com">
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Mail className="h-5 w-5" />
                                            <span className="sr-only">Email</span>
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Email</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>

                    {/* About Me */}
                    <div className="space-y-3 w-full">
                        <h2 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-2
                         flex items-center">
                            À propos de moi
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Étudiant de 3ème année de BUT Informatique, spécialité Réalisation d&#39;Applications
                            (RACDV), je suis passionné par le développement web et la création d&#39;applications
                            modernes et intuitives. Curieux et déterminé, je cherche constamment à améliorer mes
                            compétences techniques et à relever de nouveaux défis dans un domaine en constante évolution.
                        </p>
                    </div>

                    {/* Skills */}
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

                    {/* Languages */}
                    <div className="space-y-3 w-full">
                        <h2 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
                            Langues
                        </h2>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600 dark:text-gray-300">Français</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">Natif</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                <div className="bg-primary h-1.5 rounded-full w-full"></div>
                            </div>

                            <div className="flex justify-between items-center mt-3">
                                <span className="text-sm text-gray-600 dark:text-gray-300">Anglais</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">B1</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                <div className="bg-primary h-1.5 rounded-full w-[60%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

