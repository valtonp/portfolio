'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <nav className="w-64 bg-blue-900 text-blue-100 p-6 space-y-8">
            <div className="text-2xl font-bold mb-8">Your Name</div>
            <ul className="space-y-4">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            href={item.href}
                            className={`block py-2 px-4 rounded transition-colors ${
                                pathname === item.href
                                    ? 'bg-blue-800 text-white'
                                    : 'hover:bg-blue-800 hover:text-white'
                            }`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

