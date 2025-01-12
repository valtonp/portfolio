import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8 text-slate-600">
          A passionate developer creating elegant solutions to complex problems.
        </p>
        <Link
            href="/projects"
            className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors"
        >
          View My Projects
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
  )
}

