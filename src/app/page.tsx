"use client"

import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import Sidebar from "@/components/layout/sidebar"
import MainContent from "@/components/layout/main-content"

export default function Portfolio() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900
        dark:to-gray-800 transition-colors duration-300">
            {/* Theme toggle */}
            {mounted && (
                <div className="fixed top-4 right-4 z-50">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md
                        hover:shadow-lg transition-all duration-300"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {theme === "dark" ? (
                            <SunIcon className="h-5 w-5 text-yellow-500" />
                        ) : (
                            <MoonIcon className="h-5 w-5 text-gray-700" />
                        )}
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            )}

            <div className="w-full pt-6 md:px-4 lg:px-8 max-w-[95rem] mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    <Sidebar />
                    <MainContent />
                </div>
            </div>
        </div>
    )
}

