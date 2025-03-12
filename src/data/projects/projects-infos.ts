export interface ProjectInfoInterface {
    id: number;
    longDescription: string;
    images: string[];
    challenges: string[];
    features: string[];
}

export const projectsInfo: ProjectInfoInterface[] = [
    {
        id: 1,
        longDescription:
            "Neptunedive est une application web SaaS dédiée à l'organisation et la gestion d'un club de plongée. Son objectif est d'unifier plusieurs outils en une seule plateforme et de simplifier l'inscription aux sorties. Le projet a été développé avec une squad de 4 développeurs.",
        challenges: [
            "Permettre la gestion de plusieurs clubs sur une seule application (SaaS)",
            "Optimiser les performances des appels API pour un grand volume d'adhérents",
        ],
        images: [
            "/images/projects/neptunedive/landingPage.png",
            "/images/projects/neptunedive/diverList.png",
            "/images/projects/neptunedive/profil.png",
            "/images/projects/neptunedive/createSortie.png",
            "/images/projects/neptunedive/ficheDeSecu.png",
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
            "Stagia",
        challenges: [
            "Permettre la gestion de plusieurs clubs sur une seule application",
            "Optimiser les performances des appels API pour un grand volume d'adhérents",
            "Implémenter un système de paiement sécurisé pour les sorties",
        ],
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
