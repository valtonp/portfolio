import { TabsContent } from "@/components/ui/tabs";
import { Linkedin, Mail, MapPin } from "lucide-react";
import {ElementType} from "react";

export default function Contact() {
    return (
        <TabsContent value="contact" className="pt-0 p-6 mt-0">
            <div className="space-y-8">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                    Me contacter
                </h2>

                <p className="text-gray-600 dark:text-gray-300">
                    Je suis ouvert aux opportunités de stage, d&#39;alternance ou d&#39;emploi. N&#39;hésitez pas
                    à me contacter pour discuter de vos projets ou pour toute autre question.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <ContactItem icon={Mail} title="Email" content="paul.valton@icloud.com" />
                            <ContactItem icon={MapPin} title="Localisation" content="Montpellier, France" />
                            <ContactItem icon={Linkedin} title="LinkedIn" content="linkedin.com/in/paul-valton-5617a3230" />
                        </div>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md">
                        <iframe
                            title="Montpellier, France"
                            className="w-full h-[200px] md:h-[300px] rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11634.845478391784!2d3.8767164!3d43.6107692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af0b19246a8f%3A0x6b297e58e05b8a97!2sMontpellier%2C%20France!5e0!3m2!1sen!2sfr!4v1700000000000"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </TabsContent>
    );
}

const ContactItem = ({ icon: Icon, title, content }: { icon: ElementType; title: string; content: string }) => (
    <div className="flex items-start gap-3">
        <div className="bg-primary/10 p-2 rounded-full text-primary">
            <Icon className="h-5 w-5" />
        </div>
        <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{content}</p>
        </div>
    </div>
);
