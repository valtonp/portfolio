import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {BookOpen, CheckCircle, Wrench} from "lucide-react";
import Image from "next/image";
import {ProjectInfoInterface} from "@/data/projects/projects-infos";
import {Skill} from "@/data/skills";
import SkillBadge from "@/components/ui/skill-badge";
import { useState } from "react";
import {CarouselModal} from "@/components/layout/carousel-modal";

interface ProjectInfoProps {
    info: ProjectInfoInterface;
    title: string;
    skills: Skill[];
}

export default function ProjectInfo({info, title, skills}: ProjectInfoProps) {
    const [openCarousel, setOpenCarousel] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    const launchCarousel = (selectedImage: string) => {
        setCurrentImage(selectedImage);
        setOpenCarousel(true);
    };

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

                {/* Carrousel d'Images */}
                {info.images ? (
                    <div className="flex gap-3 overflow-x-auto py-4">
                        {info.images.map((img, index) => (
                            <div key={index} className="relative w-80 h-52 flex-shrink-0">
                                <Image
                                    src={img}
                                    alt={`Image ${index + 1} du projet`}
                                    layout="fill"
                                    className="rounded-lg border shadow hover:scale-105 hover:opacity-80 cursor-pointer object-cover"
                                    onClick={() => launchCarousel(img)}
                                />
                            </div>
                        ))}
                        <CarouselModal open={openCarousel} setOpen={setOpenCarousel} currentImage={currentImage} images={info.images} />
                    </div>

                ) : (
                        <p className="italic opacity-60">Aucune image pour se projet</p>

                    )}

                {/* Fonctionnalités */}
                {info.features.length > 0 && (
                    <div>
                        <h3 className="text-lg font-semibold mt-4 mb-1 underline">Fonctionnalités principales</h3>
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
                {info.challenges.length > 0 && (
                    <div>
                        <h3 className="text-lg font-semibold mt-4 mb-1 underline">Défis techniques</h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                            {info.challenges.map((challenge, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <Wrench className="text-green-500 w-4 h-4"/>
                                    {challenge}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}


                {/* Technologies utilisées */}
                {skills.length > 0 && (
                    <div>
                        <h3 className="text-lg font-semibold mt-4 mb-2 underline">Stack technique et outils</h3>
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
