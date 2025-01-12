import './globals.css'
import {Inter} from 'next/font/google'
import {ThemeProvider} from "next-themes"
import Sidebar from '../components/sidebar'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Cold Portfolio',
    description: 'A simple and original portfolio with cold colors',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <div className="flex min-h-screen">
                <Sidebar/>
                <main className="flex-1 p-8">{children}</main>
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}

