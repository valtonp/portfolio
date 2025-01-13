'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {Button} from "@/components/ui/button"
import {Github, Linkedin} from 'lucide-react'

const navItems = [
    {name: 'Accueil', href: '/'},
    {name: 'Projets', href: '/projects'},
    {name: 'CV', href: '/cv'},
    {name: 'Contact', href: '/contact'},
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <nav className="w-64 bg-card text-card-foreground border-r">
            <div className="px-3 py-2">
                <h2 className="mb-8 px-4 text-2xl font-semibold tracking-tight">
                    Paul Valton
                </h2>
                <div className="space-y-1">
                    {navItems.map((item) => (
                        <Button
                            key={item.name}
                            asChild
                            variant={pathname === item.href ? "secondary" : "ghost"}
                            className="w-full justify-start"
                        >
                            <Link href={item.href}>{item.name}</Link>
                        </Button>
                    ))}
                </div>
            </div>
            <div className="mt-auto pt-4 px-4">
                <div className="flex justify-center space-x-2">
                    <Button variant="outline" size="icon" asChild>
                        <a href="https://www.linkedin.com/in/paul-valton-5617a3230" target="_blank"
                           rel="noopener noreferrer">
                            <Linkedin className="h-6 w-6"/>
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <a href="https://github.com/valtonp" target="_blank" rel="noopener noreferrer">
                            <Github className="h-6 w-6"/>
                            <span className="sr-only">GitHub</span>
                        </a>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

