import { Card, CardContent } from "@/components/ui/card"
import ProfileHeader from "@/components/section/profile-header";
import SkillsList from "@/components/section/skills-list";
import Languages from "@/components/section/languages";
import DownloadButton from "@/components/ui/download-button";

export default function Sidebar() {
    return (
        <Card className="basis-1/4 xl:w-1/4 bg-white dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl
         transition-all duration-300 lg:sticky lg:top-8 self-start h-auto">
        <CardContent className="p-5">
                <div className="flex flex-col items-center space-y-4">

                    <ProfileHeader />

                    <DownloadButton link="/images/CV_valton_paul.pdf"/>

                    {/* About Me */}
                    <div className="space-y-3 w-full">
                        <h2 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-2
                         flex items-center">
                            À propos de moi
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Étudiant de 3ème année de BUT Informatique, spécialité Réalisation d&#39;Applications
                            (RACDV), je suis passionné par le développement web et la création d&#39;applications
                            modernes et intuitives. Curieux et déterminé, je cherche constamment à améliorer mes
                            compétences techniques et à relever de nouveaux défis dans un domaine en constante évolution.
                        </p>
                    </div>

                    <SkillsList />

                    <Languages />
                </div>
            </CardContent>
        </Card>
    )
}

