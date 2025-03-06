import {Github, Linkedin, Mail, MapPin} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Sidebar(){

    const skills = ["Git", "Docker", "React", "Next.js", "Java", "JavaScript", "TypeScript", "Vue.js", "PHP",
        "Symfony", "SQL", "NoSQL","Tailwind CSS", "Méthodes Agiles (SCRUM)"]

    return (
        <aside className="m-10 basis-1/4 bg-background rounded-xl shadow-sm border md:sticky md:top-6 md:max-h-screen
        md:overflow-y-auto">

        <div className="flex flex-col items-center space-y-4 p-6">
                {/* Profile Picture */}
                <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                        <img src="/placeholder.svg?height=128&width=128" alt="Profile" className="w-full h-full
                        object-cover" />
                    </div>
                </div>

                {/* Name and Title */}
                <div className="text-center space-y-1">
                    <h1 className="text-2xl font-bold">Paul Valton</h1>
                    <p className="text-muted-foreground">Full Stack Developer</p>
                    <div className="flex items-center justify-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Montpellier, Lattes</span>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                    <Link href="https://github.com/valtonp" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/paul-valton-5617a3230/" target="_blank" rel="noopener
                    noreferrer">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Button>
                    </Link>
                    <Link href="mailto:paul.valton@icloud.com">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </Button>
                    </Link>
                </div>

                {/* About Me */}
                <div className="space-y-3 w-full">
                    <h2 className="text-lg font-semibold border-b pb-1">À propos de moi</h2>
                    <p className="text-sm text-muted-foreground">
                        Étudiant de 3ème année de BUT Informatique, spécialité Réalisation d’Applications (RACDV),
                        je suis passionné par le développement web et la création d’applications modernes et intuitives.
                        Curieux et déterminé, je cherche constamment à améliorer
                        mes compétences techniques et à relever de nouveaux défis dans un domaine en constante évolution.
                    </p>
                </div>

                {/* Skills */}
                <div className="space-y-3 w-full">
                    <h2 className="text-lg font-semibold border-b pb-1">Compétences</h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span key={skill} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Hobbies */}
                <div className="space-y-3 w-full">
                    <h2 className="text-lg font-semibold border-b pb-1">Centres d&#39;intérêt</h2>
                    <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Musculation</li>
                        <li>• Cliff diving</li>
                        <li>• Blockchain</li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}