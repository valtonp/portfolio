"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { Card } from "@/components/ui/card"
import { Tabs } from "@/components/ui/tabs"
import Menu from "@/components/section/menu";
import Qualifications from "@/components/layout/qualifications";
import Projects from "@/components/section/projects";
import Contact from "@/components/section/contact"
import CV from "@/components/section/cv";

export default function MainContent() {
    const [activeTab, setActiveTab] = useState("parcours")

    return (
        <Card className="lg:w-2/3 xl:w-3/4 bg-white dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl
         transition-all duration-300 overflow-hidden h-full">
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

                        <Projects />

                        <CV />

                        <Contact />

                    </motion.div>
                </AnimatePresence>
            </Tabs>
        </Card>
    )
}

