import {TabsContent} from "@/components/ui/tabs";
import {projects} from "@/data/projects";
import ProjectCard from "@/components/layout/project-card";

export default function Projects(){
    return (
        <TabsContent value="projects" className="p-6 mt-0">

            <div>
                <h2 className="text-2xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                    Mes projets
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects
                        .filter((p) => !p.featured)
                        .map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                </div>
            </div>
        </TabsContent>
    )
}