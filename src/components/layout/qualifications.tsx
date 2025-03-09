import {Code, ExternalLink, FileText, GraduationCap} from "lucide-react";
import TimelineItem from "@/components/layout/timeline-item";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {TabsContent} from "@/components/ui/tabs";

const education = [
    {
        id: 1,
        title: "BUT Informatique",
        institution: "IUT de Montpellier-Sète",
        date: "2021 - 2024",
        description: "Spécialité Réalisation d'Applications : Conception, Développement, Validation (RACDV)",
        icon: <GraduationCap className="h-5 w-5" />,
    },
    {
        id: 2,
        title: "Baccalauréat Général",
        institution: "Lycée Jean Monnet, Montpellier",
        date: "2018 - 2021",
        description: "Spécialités Mathématiques et Numérique et Sciences Informatiques (NSI)",
        icon: <GraduationCap className="h-5 w-5" />,
    },
]

const experience = [
    {
        id: 1,
        title: "Développeur Full Stack",
        company: "Entreprise XYZ",
        date: "Juin 2023 - Août 2023",
        description:
            "Stage de développement web. Conception et développement d'une application web avec React et Node.js.",
        icon: <Code className="h-5 w-5" />,
    },
    {
        id: 2,
        title: "Développeur Front-end",
        company: "Startup ABC",
        date: "Juin 2022 - Août 2022",
        description: "Stage d'été. Développement d'interfaces utilisateur avec Vue.js et intégration d'API REST.",
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">AWS Certified Developer</CardTitle>
                                <CardDescription>Amazon Web Services, 2023</CardDescription>
                            </CardHeader>
                            <CardFooter className="pt-2">
                                <Button variant="outline" size="sm" className="gap-1">
                                    <ExternalLink className="h-3.5 w-3.5"/>
                                    <span>Voir le certificat</span>
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">React Developer Certification</CardTitle>
                                <CardDescription>Meta, 2022</CardDescription>
                            </CardHeader>
                            <CardFooter className="pt-2">
                                <Button variant="outline" size="sm" className="gap-1">
                                    <ExternalLink className="h-3.5 w-3.5"/>
                                    <span>Voir le certificat</span>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </TabsContent>

    )
}