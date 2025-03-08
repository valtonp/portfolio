import type { ReactNode } from "react"

interface TimelineItemProps {
    title: string
    subtitle: string
    date: string
    description: string
    icon: ReactNode
}

export default function TimelineItem({ title, subtitle, date, description, icon }: TimelineItemProps) {
    return (
        <div className="relative pl-8 pb-4 group">
            <div className="absolute left-0 top-0 bg-primary/20 dark:bg-primary/10 border-2 border-primary rounded-full p-1 group-hover:scale-110 transition-transform duration-200">
                <div className="text-primary">{icon}</div>
            </div>
            <div className="absolute left-[19px] top-10 h-full w-[2px] bg-primary/20 dark:bg-primary/10"></div>
            <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <h4 className="font-medium">{title}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </div>
        </div>
    )
}

