"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Mail,
    MapPin,
    Send,
    Linkedin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Menu from "@/components/section/menu";
import Qualifications from "@/components/layout/qualifications";
import Image from "next/image";
import {projects} from "@/data/projects";
import ProjectCard from "@/components/layout/project-card";

export default function MainContent() {
    const [activeTab, setActiveTab] = useState("parcours")

    return (
        <Card className="lg:w-2/3 xl:w-3/4 bg-white dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
            <Tabs defaultValue="parcours" value={activeTab} onValueChange={setActiveTab} className="w-full">

                <Menu />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >

                        <Qualifications />

                        <TabsContent value="projects" className="p-6 mt-0">

                                <div>
                                    <h2 className="text-2xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                                        Autres projets
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {projects
                                            .filter((p) => !p.featured)
                                            .map((project) => (
                                                <ProjectCard key={project.id} project={project} />
                                            ))}
                                    </div>
                                </div>
                        </TabsContent>

                        <TabsContent value="cv" className="p-6 mt-0 flex flex-col items-center gap-4">
                            <div className="w-full max-w-xl">
                                <Image
                                    src="/images/CV_valton_paul.png"
                                    alt="CV"
                                    width={800}
                                    height={1130}
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </div>
                        </TabsContent>


                        <TabsContent value="contact" className="p-6 mt-0">
                            <div className="space-y-8">
                                <h2 className="text-2xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                                    Me contacter
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Je suis ouvert aux opportunités de stage, d&#39;alternance ou d&#39;emploi. N&#39;hésitez pas à me contacter
                                            pour discuter de vos projets ou pour toute autre question.
                                        </p>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="bg-primary/10 p-2 rounded-full text-primary">
                                                    <Mail className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">Email</h3>
                                                    <p className="text-gray-600 dark:text-gray-300">paul.valton@icloud.com</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <div className="bg-primary/10 p-2 rounded-full text-primary">
                                                    <MapPin className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">Localisation</h3>
                                                    <p className="text-gray-600 dark:text-gray-300">Montpellier, France</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <div className="bg-primary/10 p-2 rounded-full text-primary">
                                                    <Linkedin className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">LinkedIn</h3>
                                                    <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/paul-valton-5617a3230</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <form className="space-y-4 ">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Nom</Label>
                                                    <Input id="name" placeholder="Votre nom" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input id="email" type="email" placeholder="Votre email" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="subject">Sujet</Label>
                                                <Input id="subject" placeholder="Sujet de votre message" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="message">Message</Label>
                                                <Textarea id="message" placeholder="Votre message" rows={5} />
                                            </div>
                                            <Button type="submit" className="w-full gap-2">
                                                <Send className="h-4 w-4" />
                                                <span>Envoyer</span>
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </motion.div>
                </AnimatePresence>
            </Tabs>
        </Card>
    )
}

