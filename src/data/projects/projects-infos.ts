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
            "NeptuneDive est une application web SaaS conçue pour l'organisation et la gestion d'un club de plongée. Son principal objectif est d'unifier plusieurs outils en une seule plateforme et de simplifier l'enregistrement des participants aux différentes sorties. Le projet a été réalisé au sein d'une squad de 4 développeurs.",
        involvement: "Au début du projet, j'ai mis en place Docker Compose afin de simplifier la gestion des environnements entre les différentes machines de l'équipe. Par la suite, sur le Backend, j'ai créé plusieurs entités avec API Platform. J'ai également implémenté un MultipartDecoder pour permettre l'envoi d'images à l'API en utilisant le format Multipart plutôt que JSON. En collaboration avec un autre développeur, nous avons travaillé sur le SaaS de l'application pour permettre la gestion de plusieurs clubs et des appels de la base de données en fonction de l'URL.",
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
