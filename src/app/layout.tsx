import type React from "react"
import "./globals.css"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import {ThemeProvider} from "@/components/layout/theme-provider"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Paul Valton | Développeur Full Stack",
    description: "Portfolio de Paul Valton, développeur full stack",
    keywords: "Paul Valton, Développeur Full Stack, Next.js, NestJS, JavaScript, TypeScript, Portfolio",
    openGraph: {
        title: "Paul Valton | Développeur Full Stack",
        description: "Découvrez mon portfolio de développeur full stack spécialisé en Next.js, NestJS et Tailwind.",
        url: "https://mypaulfolio.vercel.app/",
        siteName: "Paul Valton Portfolio",
        type: "website",
    },
    verification: {
        google: "I0QFD6knafI1oiz1KnSRPCUslRVonYJfAft1-JY7oN8"
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}

