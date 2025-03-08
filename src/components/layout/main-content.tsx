"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Calendar,
    Code,
    ExternalLink,
    FileText,
    Github,
    GraduationCap,
    Mail,
    MapPin,
    Send,
    Linkedin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import ProjectCard from "@/components/layout/project-card"
import TimelineItem from "@/components/layout/timeline-item"

export default function MainContent() {
    const [activeTab, setActiveTab] = useState("qualifications")

    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description:
                "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
            image: "/placeholder.svg?height=300&width=500&text=E-commerce+Platform",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            demoUrl: "#",
            githubUrl: "#",
            featured: true,
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "A responsive portfolio website showcasing projects and skills with a modern design.",
            image: "/placeholder.svg?height=300&width=500&text=Portfolio+Website",
            technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
            demoUrl: "#",
            githubUrl: "#",
            featured: true,
        },
        {
            id: 3,
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates and team features.",
            image: "/placeholder.svg?height=300&width=500&text=Task+Management",
            technologies: ["React", "Firebase", "Material UI"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false,
        },
        {
            id: 4,
            title: "Weather Dashboard",
            description: "An interactive weather dashboard displaying forecasts and historical weather data.",
            image: "/placeholder.svg?height=300&width=500&text=Weather+Dashboard",
            technologies: ["JavaScript", "Chart.js", "Weather API"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false,
        },
    ]

    const education = [
        {
            id: 1,
            title: "BUT Informatique",
            institution: "IUT de Montpellier-Sète",
            date: "2021 - 2024",
            description: "Spécialité Réalisation d'Applications : Conception, Développement, Validation (RACDV)",
            icon: <GraduationCap className="h-5 w-5" />,
        },
        {
            id: 2,
            title: "Baccalauréat Général",
            institution: "Lycée Jean Monnet, Montpellier",
            date: "2018 - 2021",
            description: "Spécialités Mathématiques et Numérique et Sciences Informatiques (NSI)",
            icon: <GraduationCap className="h-5 w-5" />,
        },
    ]

    const experience = [
        {
            id: 1,
            title: "Développeur Full Stack",
            company: "Entreprise XYZ",
            date: "Juin 2023 - Août 2023",
            description:
                "Stage de développement web. Conception et développement d'une application web avec React et Node.js.",
            icon: <Code className="h-5 w-5" />,
        },
        {
            id: 2,
            title: "Développeur Front-end",
            company: "Startup ABC",
            date: "Juin 2022 - Août 2022",
            description: "Stage d'été. Développement d'interfaces utilisateur avec Vue.js et intégration d'API REST.",
            icon: <Code className="h-5 w-5" />,
        },
    ]

    return (
        <Card className="lg:w-2/3 xl:w-3/4 bg-white dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
            <Tabs defaultValue="qualifications" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <TabsList className="w-full justify-start rounded-none bg-transparent border-b-0 p-0">
                        <TabsTrigger
                            value="qualifications"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-base font-medium transition-all"
                        >
                            Qualifications
                        </TabsTrigger>
                        <TabsTrigger
                            value="projects"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-base font-medium transition-all"
                        >
                            Projets
                        </TabsTrigger>
                        <TabsTrigger
                            value="cv"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-base font-medium transition-all"
                        >
                            CV
                        </TabsTrigger>
                        <TabsTrigger
                            value="contact"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-base font-medium transition-all"
                        >
                            Contact
                        </TabsTrigger>
                    </TabsList>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <TabsContent value="qualifications" className="p-6 mt-0">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                                        Parcours académique et professionnel
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Education Timeline */}
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                                <GraduationCap className="h-5 w-5 text-primary" />
                                                Formation
                                            </h3>
                                            <div className="space-y-6">
                                                {education.map((item) => (
                                                    <TimelineItem
                                                        key={item.id}
                                                        title={item.title}
                                                        subtitle={item.institution}
                                                        date={item.date}
                                                        description={item.description}
                                                        icon={item.icon}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Experience Timeline */}
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                                <Code className="h-5 w-5 text-primary" />
                                                Expérience
                                            </h3>
                                            <div className="space-y-6">
                                                {experience.map((item) => (
                                                    <TimelineItem
                                                        key={item.id}
                                                        title={item.title}
                                                        subtitle={item.company}
                                                        date={item.date}
                                                        description={item.description}
                                                        icon={item.icon}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Certifications */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-primary" />
                                        Certifications
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Card>
                                            <CardHeader className="pb-2">
                                                <CardTitle className="text-base">AWS Certified Developer</CardTitle>
                                                <CardDescription>Amazon Web Services, 2023</CardDescription>
                                            </CardHeader>
                                            <CardFooter className="pt-2">
                                                <Button variant="outline" size="sm" className="gap-1">
                                                    <ExternalLink className="h-3.5 w-3.5" />
                                                    <span>Voir le certificat</span>
                                                </Button>
                                            </CardFooter>
                                        </Card>

                                        <Card>
                                            <CardHeader className="pb-2">
                                                <CardTitle className="text-base">React Developer Certification</CardTitle>
                                                <CardDescription>Meta, 2022</CardDescription>
                                            </CardHeader>
                                            <CardFooter className="pt-2">
                                                <Button variant="outline" size="sm" className="gap-1">
                                                    <ExternalLink className="h-3.5 w-3.5" />
                                                    <span>Voir le certificat</span>
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="projects" className="p-6 mt-0">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                                        Projets en vedette
                                    </h2>
                                    <div className="grid grid-cols-1 gap-8">
                                        {projects
                                            .filter((p) => p.featured)
                                            .map((project) => (
                                                <ProjectCard key={project.id} project={project} featured />
                                            ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                                        Autres projets
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {projects
                                            .filter((p) => !p.featured)
                                            .map((project) => (
                                                <ProjectCard key={project.id} project={project} />
                                            ))}
                                    </div>
                                </div>

                                <div className="flex justify-center mt-8">
                                    <Button variant="outline" className="gap-2">
                                        <Github className="h-4 w-4" />
                                        <span>Voir plus sur GitHub</span>
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="cv" className="p-6 mt-0">
                            <div className="space-y-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                                        Curriculum Vitae
                                    </h2>
                                    <Button className="gap-2">
                                        <FileText className="h-4 w-4" />
                                        <span>Télécharger CV</span>
                                    </Button>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                                    <div className="space-y-8">
                                        {/* Personal Info */}
                                        <div>
                                            <h3 className="text-xl font-semibold mb-4">Informations personnelles</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex items-start gap-2">
                                                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                                                    <div>
                                                        <p className="font-medium">Email</p>
                                                        <p className="text-gray-600 dark:text-gray-300">paul.valton@icloud.com</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                                    <div>
                                                        <p className="font-medium">Localisation</p>
                                                        <p className="text-gray-600 dark:text-gray-300">Montpellier, Lattes, France</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                                                    <div>
                                                        <p className="font-medium">Disponibilité</p>
                                                        <p className="text-gray-600 dark:text-gray-300">Disponible dès Juillet 2024</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <Github className="h-5 w-5 text-primary mt-0.5" />
                                                    <div>
                                                        <p className="font-medium">GitHub</p>
                                                        <p className="text-gray-600 dark:text-gray-300">github.com/valtonp</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Education */}
                                        <div>
                                            <h3 className="text-xl font-semibold mb-4">Formation</h3>
                                            <div className="space-y-4">
                                                {education.map((item) => (
                                                    <div key={item.id} className="border-l-2 border-primary/50 pl-4 py-1">
                                                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                                                            <h4 className="font-medium">{item.title}</h4>
                                                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                                                        </div>
                                                        <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Experience */}
                                        <div>
                                            <h3 className="text-xl font-semibold mb-4">Expérience professionnelle</h3>
                                            <div className="space-y-4">
                                                {experience.map((item) => (
                                                    <div key={item.id} className="border-l-2 border-primary/50 pl-4 py-1">
                                                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                                                            <h4 className="font-medium">{item.title}</h4>
                                                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                                                        </div>
                                                        <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Skills */}
                                        <div>
                                            <h3 className="text-xl font-semibold mb-4">Compétences techniques</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium mb-2">Développement Front-end</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {["HTML/CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "Tailwind CSS"].map(
                                                            (skill) => (
                                                                <Badge
                                                                    key={skill}
                                                                    variant="outline"
                                                                    className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                                                >
                                                                    {skill}
                                                                </Badge>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="font-medium mb-2">Développement Back-end</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {["Node.js", "Java", "PHP", "Symfony", "Express", "REST API", "GraphQL"].map((skill) => (
                                                            <Badge
                                                                key={skill}
                                                                variant="outline"
                                                                className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                                            >
                                                                {skill}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="font-medium mb-2">Base de données</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"].map((skill) => (
                                                            <Badge
                                                                key={skill}
                                                                variant="outline"
                                                                className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                                                            >
                                                                {skill}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="font-medium mb-2">Outils & Méthodologies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {["Git", "Docker", "CI/CD", "Agile/Scrum", "Jira", "Figma"].map((skill) => (
                                                            <Badge
                                                                key={skill}
                                                                variant="outline"
                                                                className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                                                            >
                                                                {skill}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Languages */}
                                        <div>
                                            <h3 className="text-xl font-semibold mb-4">Langues</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-medium">Français</span>
                                                        <span className="text-sm text-gray-500 dark:text-gray-400">Natif</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                                        <div className="bg-primary h-1.5 rounded-full w-full"></div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-medium">Anglais</span>
                                                        <span className="text-sm text-gray-500 dark:text-gray-400">Courant (C1)</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                                        <div className="bg-primary h-1.5 rounded-full w-[85%]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="contact" className="p-6 mt-0">
                            <div className="space-y-8">
                                <h2 className="text-2xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                                    Me contacter
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Je suis ouvert aux opportunités de stage, d&#39;alternance ou d&#39;emploi. N&#39;hésitez pas à me contacter
                                            pour discuter de vos projets ou pour toute autre question.
                                        </p>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="bg-primary/10 p-2 rounded-full text-primary">
                                                    <Mail className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">Email</h3>
                                                    <p className="text-gray-600 dark:text-gray-300">paul.valton@icloud.com</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <div className="bg-primary/10 p-2 rounded-full text-primary">
                                                    <MapPin className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">Localisation</h3>
                                                    <p className="text-gray-600 dark:text-gray-300">Montpellier, France</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <div className="bg-primary/10 p-2 rounded-full text-primary">
                                                    <Linkedin className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">LinkedIn</h3>
                                                    <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/paul-valton-5617a3230</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <form className="space-y-4">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Nom</Label>
                                                    <Input id="name" placeholder="Votre nom" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input id="email" type="email" placeholder="Votre email" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="subject">Sujet</Label>
                                                <Input id="subject" placeholder="Sujet de votre message" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="message">Message</Label>
                                                <Textarea id="message" placeholder="Votre message" rows={5} />
                                            </div>
                                            <Button type="submit" className="w-full gap-2">
                                                <Send className="h-4 w-4" />
                                                <span>Envoyer</span>
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </motion.div>
                </AnimatePresence>
            </Tabs>
        </Card>
    )
}

