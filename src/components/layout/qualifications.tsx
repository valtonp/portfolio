import {Code, FileText, GraduationCap} from "lucide-react";
import TimelineItem from "@/components/layout/timeline-item";
import {TabsContent} from "@/components/ui/tabs";

const education = [
    {
        id: 1,
        title: "BUT Informatique",
        institution: "IUT de Montpellier-Sète",
        date: "2021 - 2025",
        description: "Spécialité Réalisation d'Applications : Conception, Développement, Validation (RACDV)",
        icon: <GraduationCap className="h-5 w-5" />,
    },
    {
        id: 2,
        title: "Baccalauréat Technologie",
        institution: "Lycée Jean-François Champollion, Montpellier",
        date: "2021",
        description: "STI2D, Spécialités Systèmes d'Information et Numérique (SIN)",
        icon: <GraduationCap className="h-5 w-5" />,
    },
]

const experience = [
    {
        id: 2,
        title: "Stage Développeur Full-Stack",
        company: "Crédit Agricole Group Infrastructure Platform (CA-GIP)",
        date: "Avril 2025 - Août 2025",
        description:
            "Mise en place d'une application sous k8s pour automatiser et vérifier des informations pour les DevOps",
        icon: <Code className="h-5 w-5" />,
    },
    {
        id: 1,
        title: "Stage Conception de processus métier",
        company: "Nexecur",
        date: "Avril 2024 - Juin 2024",
        description:
            "Amélioration de l’organisation de l’entreprise par la conception\n" +
            "et mise en œuvre de process métiers automatisés.",
        icon: <Code className="h-5 w-5" />,
    },
]

export default function Qualifications() {
    return (
        <TabsContent value="parcours" className="p-6 mt-0">
            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                        Parcours académique et professionnel
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Education Timeline */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-primary"/>
                                Formation
                            </h3>
                            <div className="space-y-6">
                                {education.map((item) => (
                                    <TimelineItem
                                        key={item.id}
                                        title={item.title}
                                        subtitle={item.institution}
                                        date={item.date}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Experience Timeline */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <Code className="h-5 w-5 text-primary"/>
                                Expérience
                            </h3>
                            <div className="space-y-6">
                                {experience.map((item) => (
                                    <TimelineItem
                                        key={item.id}
                                        title={item.title}
                                        subtitle={item.company}
                                        date={item.date}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Certifications */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary"/>
                        Certifications
                    </h3>
                    {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-4">*/}
                    {/*    <Card>*/}
                    {/*        <CardHeader className="pb-2">*/}
                    {/*            <CardTitle className="text-base">AWS Certified Developer</CardTitle>*/}
                    {/*            <CardDescription>Amazon Web Services, 2023</CardDescription>*/}
                    {/*        </CardHeader>*/}
                    {/*        <CardFooter className="pt-2">*/}
                    {/*            <Button variant="outline" size="sm" className="gap-1">*/}
                    {/*                <ExternalLink className="h-3.5 w-3.5"/>*/}
                    {/*                <span>Voir le certificat</span>*/}
                    {/*            </Button>*/}
                    {/*        </CardFooter>*/}
                    {/*    </Card>*/}

                    {/*    <Card>*/}
                    {/*        <CardHeader className="pb-2">*/}
                    {/*            <CardTitle className="text-base">React Developer Certification</CardTitle>*/}
                    {/*            <CardDescription>Meta, 2022</CardDescription>*/}
                    {/*        </CardHeader>*/}
                    {/*        <CardFooter className="pt-2">*/}
                    {/*            <Button variant="outline" size="sm" className="gap-1">*/}
                    {/*                <ExternalLink className="h-3.5 w-3.5"/>*/}
                    {/*                <span>Voir le certificat</span>*/}
                    {/*            </Button>*/}
                    {/*        </CardFooter>*/}
                    {/*    </Card>*/}
                    {/*</div>*/}
                </div>
            </div>
        </TabsContent>

    )
}
