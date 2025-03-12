import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {Project} from "@/data/projects/projects";
import SkillBadge from "@/components/ui/skill-badge";
import ProjectInfo from "@/components/layout/project-info";
import getProjectInfo from "@/data/projects/projects-infos";

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {

    const informations = getProjectInfo(project.infoId)

    return (
        <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 group h-full
         flex flex-col">
            <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                        <SkillBadge key={index} skill={tech} />
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex gap-2">
                {informations && project.title !== "Portfolio" ? (
                    <ProjectInfo info={informations} title={project.title} skills={project.technologies}/>
                ) : (
                    <p></p>
                )
                }
            </CardFooter>
        </Card>
    )
}

