export default function Languages(){
    return (
        <div className="space-y-3 w-full">
            <h2 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center">
                Langues
            </h2>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Français</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Natif</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full w-full"></div>
                </div>

                <div className="flex justify-between items-center mt-3">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Anglais</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">B1</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full w-[60%]"></div>
                </div>
            </div>
        </div>
    )
}