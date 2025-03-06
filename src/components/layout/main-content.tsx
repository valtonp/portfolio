import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function MainContent() {
    return (
        <div
            className="m-10 basis-3/4 bg-white w-full overflow-hidden rounded-xl shadow-lg border border-t-0 border-r-0">
            <div className="w-full flex flex-col">
                <Tabs defaultValue="qualifications" className="w-full">
                    <div className="flex justify-end">
                        <TabsList className="flex rounded-t-lg bg-gray-200 border-b pl-0 pr-0">
                            <TabsTrigger
                                value="qualifications"
                                className="px-6 py-3 text-xl font-semibold hover:bg-gray-400 focus:outline-none
                                 transition duration-300 data-[state=active]:bg-[#212121] data-[state=active]:text-white"
                            >
                                Qualifications
                            </TabsTrigger>
                            <TabsTrigger
                                value="projects"
                                className="px-6 py-3 text-xl font-semibold hover:bg-gray-400 focus:outline-none
                                 transition duration-300 data-[state=active]:bg-[#212121] data-[state=active]:text-white"
                            >
                                Projets
                            </TabsTrigger>
                            <TabsTrigger
                                value="cv"
                                className="px-6 py-3 text-xl font-semibold hover:bg-gray-400 focus:outline-none
                                 transition duration-300 data-[state=active]:bg-[#212121] data-[state=active]:text-white"
                            >
                                CV
                            </TabsTrigger>
                            <TabsTrigger
                                value="contact"
                                className="px-6 py-3 text-xl font-semibold hover:bg-gray-400 focus:outline-none
                                 transition duration-300 data-[state=active]:bg-[#212121] data-[state=active]:text-white"
                            >
                                Contact
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="projects" className="p-6">
                        <h2 className="text-2xl font-bold mb-4">Projects Section</h2>
                        <p className="text-lg">Here are my projects...</p>
                    </TabsContent>
                    <TabsContent value="cv" className="p-6">
                        <h2 className="text-2xl font-bold mb-4">CV Section</h2>
                        <p className="text-lg">Here is my CV...</p>
                    </TabsContent>
                    <TabsContent value="contact" className="p-6">
                        <h2 className="text-2xl font-bold mb-4">Contact Section</h2>
                        <p className="text-lg">Here is my contact info...</p>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
