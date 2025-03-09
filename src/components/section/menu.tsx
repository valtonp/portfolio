import {TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function Menu(){
    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <TabsList className="w-full justify-end rounded-none bg-transparent border-b-0 p-0">
                <TabsTrigger
                    value="parcours"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-base font-medium transition-all"
                >
                    Parcours
                </TabsTrigger>
                <TabsTrigger
                    value="projects"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-base font-medium transition-all"
                >
                    Projets
                </TabsTrigger>
                <TabsTrigger
                    value="cv"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-base font-medium transition-all"
                >
                    CV
                </TabsTrigger>
                <TabsTrigger
                    value="contact"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-base font-medium transition-all"
                >
                    Contact
                </TabsTrigger>
            </TabsList>
        </div>
    )
}