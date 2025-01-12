'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'CV', href: '/cv' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <nav className="w-64 bg-card text-card-foreground border-r">
            <ScrollArea className="h-full py-6">
                <div className="px-3 py-2">
                    <h2 className="mb-8 px-4 text-2xl font-semibold tracking-tight">
                        Your Name
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
            </ScrollArea>
        </nav>
    )
}

