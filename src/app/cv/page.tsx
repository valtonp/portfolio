import { Card, CardContent} from "@/components/ui/card"
import Image from "next/image";

export default function CV() {
    return (
        <div className="max-w-4xl mx-auto">
            <Card>
                <CardContent className={"pt-6"}>
                    <Image src="/CV.png" alt="CV" height={600} width={400} layout="responsive"/>
                </CardContent>
            </Card>
        </div>

    )
}

