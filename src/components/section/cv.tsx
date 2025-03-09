import Image from "next/image";
import {TabsContent} from "@/components/ui/tabs";

export default function CV(){
    return (
        <TabsContent value="cv" className="mt-0 flex flex-col items-center">
            <div className="w-full max-w-xl p-6">
                <Image
                    src="/images/CV_valton_paul.png"
                    alt="CV"
                    width={800}
                    height={1280}
                    className="w-full rounded-lg shadow-md"
                />
            </div>
        </TabsContent>
    )
}