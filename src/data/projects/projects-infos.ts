export interface ProjectInfoInterface {
    id: number;
    longDescription: string;
    images?: string[];
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
            "Suivi des sorties",
            "Planification et gestion des sorties",
            "Paiement en ligne via HelloAsso",
            "Tableau de bord pour les moniteurs",
        ],
    },

    {
        id: 2,
        longDescription:
            "Stagia est une application web dédiée à la gestion des stages et des alternances pour l'IUT. Elle remplace trois outils : Google Drive pour les offres, PStage pour les conventions et Studea pour les contrats d'alternance. Les étudiants ont accès à un répertoire d'offres de stage et d'alternance et peuvent créer leurs conventions plus facilement en liant une offre pour bénéficier d'une autocomplétion. Les professeurs peuvent suivre les étudiants, valider ou refuser une convention avec un motif, et vérifier quels étudiants ont trouvé un stage ou une alternance. Ce projet a été développé avec une squad de six personnes, et j’ai occupé le rôle de Product Owner.",
        challenges: [
            "Lire, extraire et enregistrer les données d'un fichier Excel en PHP.",
            "Adapter dynamiquement l'affichage de l'application en respectant le cahier des charges."
        ],
        features: [
            "Design responsive",
            "Importation et exportation des données",
            "Recherche d'offres",
            "Création d'une convention ou d'un contrat",
            "Suivi des étudiants",
        ],
    },
];

export default function getProjectInfo(id: number | undefined): ProjectInfoInterface | undefined{
    if(!id) return undefined
    return projectsInfo.find((infos) => infos.id === id)
}
