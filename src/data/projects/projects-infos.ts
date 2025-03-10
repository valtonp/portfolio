export interface ProjectInfoInterface {
    id: number;
    longDescription: string;
    involvement: string;
    images: string[];
    features: string[];
}

export const projectsInfo: ProjectInfoInterface[] = [
    {
        id: 1,
        longDescription:
            "Neptunedive est une plateforme SaaS dédiée aux clubs de plongée, permettant la gestion des adhérents, des sorties et des réservations en toute simplicité.",
        involvement: "La",
        images: [
            "/images/neptunedive-1.png",
            "/images/neptunedive-2.png",
            "/images/neptunedive-3.png",
        ],
        features: [
            "Gestion des adhérents",
            "Planification des sorties",
            "Paiement en ligne",
            "Tableau de bord administrateur",
        ],

    },
    {
        id: 2,
        longDescription:
            "Mon portfolio personnel, conçu avec Next.js et Tailwind CSS, mettant en avant mes projets et compétences.",
        involvement: "La",
        images: [
            "/images/portfolio-1.png",
            "/images/portfolio-2.png"
        ],
        features: [
            "Design responsive",
            "Animations avec Framer Motion",
            "Intégration de ShadCN UI",
        ],
    },
];

export default function getProjectInfo(id: number | undefined): ProjectInfoInterface | undefined{
    if(!id) return undefined
    return projectsInfo.find((infos) => infos.id === id)
}
