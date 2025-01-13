import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <section>
                <h1 className="text-4xl font-bold mb-4">Paul Valton</h1>
                <h2 className="text-2xl text-muted-foreground mb-6">Full Stack Developer</h2>
            </section>

            <Card>
                <CardHeader>
                    <CardTitle>Biographie</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg leading-relaxed">
                        Étudiant en BUT Informatique, spécialité Réalisation d’Applications : Conception et Développement (RACDV),
                        je suis passionné par le développement web et la création d’applications modernes et intuitives.
                        Curieux et déterminé, je cherche constamment à améliorer mes compétences techniques et à relever de nouveaux défis
                        dans un domaine en constante évolution.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                        En parallèle, j’explore des technologies innovantes comme la blockchain,
                        qui offrent des opportunités passionnantes pour façonner l’avenir numérique.
                        Mon objectif est de contribuer à des projets ambitieux tout en continuant à apprendre et à perfectionner mes connaissances.                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Mon parcours</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[300px] pr-4">
                        <ul className="space-y-10">
                            <li>
                                <h3 className="text-lg font-semibold">Bachelor Universitaire de Technologie</h3>
                                <p className="text-muted-foreground">IUT de Montpellier</p>
                                <p className="text-sm text-muted-foreground">2021 - 2025</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    <Badge variant="secondary">Développement Web</Badge>
                                    <Badge variant="secondary">Programmation Orientée Objet</Badge>
                                    <Badge variant="secondary">Bases de Données</Badge>
                                    <Badge variant="secondary">Conception Logicielle</Badge>
                                    <Badge variant="secondary">Gestion de Projet (Agile)</Badge>
                                </div>
                            </li>
                            <li>
                                <h3 className="text-lg font-semibold">Baccalauréat STI2D option SIN</h3>
                                <p className="text-muted-foreground">Lycée Jean-François Champollion</p>
                                <p className="text-sm text-muted-foreground">2018 - 2021</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    <Badge variant="secondary">Systèmes Numériques</Badge>
                                    <Badge variant="secondary">Électronique</Badge>
                                    <Badge variant="secondary">Programmation</Badge>
                                </div>
                            </li>
                        </ul>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )
}

