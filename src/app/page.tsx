import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
            <p className="text-lg mb-8 text-muted-foreground">
                A passionate developer creating elegant solutions to complex problems.
            </p>
            <Button asChild>
                <Link href="/projects">
                    View My Projects
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
    )
}

