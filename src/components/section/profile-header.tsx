import {MapPin} from "lucide-react";
import Image from "next/image";


export default function ProfileHeader(){
    return (
        <div className="flex flex-col items-center gap-3">
            {/* Profile Picture with animated border */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-600 rounded-full
                         opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-500"></div>
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white
                         dark:border-gray-800">
                    <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="Picture"
                        className="w-full h-full object-cover"
                        width={128}
                        height={128}
                        priority
                    />
                </div>
            </div>

            {/* Name and Title */}
            <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                    Paul Valton
                </h1>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Full Stack Developer</p>
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Montpellier, Lattes</span>
                </div>
            </div>
        </div>
    )
}