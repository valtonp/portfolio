import Image from 'next/image'
import { ArrowLeftIcon, ExternalLinkIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

export default function NeptuneDiveProject() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">NeptuneDive</h1>
                <Button variant="outline" asChild>
                    <Link href="/projects">
                        <ArrowLeftIcon className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Aperçu du projet</CardTitle>
                    <CardDescription>Application web de gestion de sortie de plongée</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-lg mb-4">
                        Ce projet consiste à concevoir une application web en mode SaaS pour centraliser la gestion des activités des clubs de plongée. Actuellement, ces clubs utilisent une variété d’outils disparates, comme HelloAsso pour les paiements, Spond pour organiser les sorties, et des fichiers Excel pour gérer les finances. L’objectif principal est de regrouper ces fonctionnalités sur une plateforme unique, accessible à plusieurs clubs, afin de simplifier leurs opérations quotidiennes.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <Badge>React</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>Node.js</Badge>
                        <Badge>MySQL</Badge>
                        <Badge>Symphony</Badge>
                        <Badge>API REST</Badge>
                        <Badge>Méthodes Agiles</Badge>
                    </div>
                    <div className="flex space-x-4">
                        <Button asChild>
                            <a href="https://neptunedive.vercel.app/" target="_blank" rel="noopener noreferrer">
                                Accès au site
                                <ExternalLinkIcon className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Fonctionnalités principales</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><b>Gestion des adhérents :</b> Stockage des informations telles que les coordonnées, licences, certificats médicaux, niveaux, et cotisations.</li>
                        <li><b>Suivi des formations :</b> Création et partage de fiches de suivi entre les moniteurs pour suivre la progression des plongeurs en formation.</li>
                        <li><b>Fiches de sécurité :</b> Simplification et automatisation de la création de fiches obligatoires pour chaque plongée, en conformité avec la réglementation.</li>
                        <li><b>Centralisation des outils :</b> Intégration des fonctionnalités de paiement (comme HelloAsso), d&apos;organisation des sorties (comme Spond), et de gestion financière (remplaçant les fichiers Excel).</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Screenshots</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Image
                            src="/ecotrack-dashboard.png"
                            alt="Dashboard"
                            width={500}
                            height={300}
                            className="rounded-lg object-cover w-full"
                        />
                        <Image
                            src="/ecotrack-recommendations.png"
                            alt="Recommendations"
                            width={500}
                            height={300}
                            className="rounded-lg object-cover w-full"
                        />
                    </div>
                </CardContent>
            </Card>

            {/*<Card>*/}
            {/*    <CardHeader>*/}
            {/*        <CardTitle>Technical Challenges</CardTitle>*/}
            {/*    </CardHeader>*/}
            {/*    <CardContent>*/}
            {/*        <p className="mb-4">*/}
            {/*            During the development of EcoTrack, we faced several technical challenges:*/}
            {/*        </p>*/}
            {/*        <ul className="list-disc pl-6 space-y-2">*/}
            {/*            <li>Implementing real-time data processing for energy consumption tracking</li>*/}
            {/*            <li>Developing accurate machine learning models for personalized recommendations</li>*/}
            {/*            <li>Ensuring data privacy and security for user information</li>*/}
            {/*            <li>Optimizing performance for handling large datasets and concurrent users</li>*/}
            {/*        </ul>*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}

            {/*<Card>*/}
            {/*    <CardHeader>*/}
            {/*        <CardTitle>Lessons Learned</CardTitle>*/}
            {/*    </CardHeader>*/}
            {/*    <CardContent>*/}
            {/*        <p className="mb-4">*/}
            {/*            The development of EcoTrack provided valuable insights and learning experiences:*/}
            {/*        </p>*/}
            {/*        <ul className="list-disc pl-6 space-y-2">*/}
            {/*            <li>Importance of user-centered design in promoting sustainable behaviors</li>*/}
            {/*            <li>Challenges and opportunities in integrating IoT devices with web applications</li>*/}
            {/*            <li>Balancing feature richness with application performance and simplicity</li>*/}
            {/*            <li>Effective strategies for motivating users through gamification and social features</li>*/}
            {/*        </ul>*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}
        </div>
    )
}

