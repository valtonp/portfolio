import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '../components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Portfolio',
    description: 'A simple and original portfolio with cold colors',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-slate-100 text-slate-800`}>
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-8">{children}</main>
        </div>
        </body>
        </html>
    )
}

