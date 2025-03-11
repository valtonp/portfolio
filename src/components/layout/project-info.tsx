import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {BookOpen, CheckCircle} from "lucide-react";
import Image from "next/image";
import {ProjectInfoInterface} from "@/data/projects/projects-infos";
import {Skill} from "@/data/skills";
import SkillBadge from "@/components/ui/skill-badge";

interface ProjectInfoProps {
    info: ProjectInfoInterface;
    title: string;
    skills: Skill[];
}

export default function ProjectInfo({info, title, skills}: ProjectInfoProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                    <BookOpen className="w-4 h-4"/>
                    Voir plus
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl pt-3 space-y-2 overflow-auto max-h-[100vh]">
                    {/* Titre du projet */}
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center underline mt-2">{title}</DialogTitle>
                    </DialogHeader>

                    {/* Description Longue */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{info.longDescription}</p>

                    {/* Mon implication */}
                    <div>
                        <h3 className="text-lg font-semibold mt-4">Mon implication</h3>
                        <p className="text-gray-700 dark:text-gray-300">{info.involvement}</p>
                    </div>

                    {/* Carrousel d'Images */}
                    {info.images.length > 0 && (
                        <div className="flex gap-3 overflow-x-auto py-4">
                            {info.images.map((img, index) => (
                                <div key={index} className="relative w-40 h-28 flex-shrink-0">
                                    <Image
                                        src={img}
                                        alt={`Image ${index + 1} du projet`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg border shadow"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Fonctionnalités */}
                    {info.features.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mt-4">Fonctionnalités principales</h3>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                {info.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <CheckCircle className="text-primary w-4 h-4"/>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Technologies utilisées */}
                    {skills.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mt-4">Stack technique et outils</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {skills.map((skill, index) => (
                                    <SkillBadge key={index} skill={skill}/>
                                ))}
                            </div>
                        </div>
                    )}
            </DialogContent>
        </Dialog>
    );
}
