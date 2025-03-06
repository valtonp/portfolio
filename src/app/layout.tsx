import type React from "react"
import "./globals.css"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import IntroAnimation from "@/components/animation/intro-animation";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Paulfolio",
    description: "Personal portfolio of Valton Paul, Full Stack Developer",
}

export default function RootLayout({children}: { children: React.ReactNode })
{
    return (
        <html lang="fr">
        <body className={inter.className}>
        {/*<IntroAnimation/>*/}
        {children}
        </body>
        </html>
    )
}

