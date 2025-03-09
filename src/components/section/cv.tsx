import Image from "next/image";
import {TabsContent} from "@/components/ui/tabs";

export default function CV(){
    return (
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
    )
}