import {Card, CardContent, CardHeader} from "@/components/ui/card"
import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function CV() {
    return (
        <div className="max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <Button asChild>
                        <a href="/CV.png" download>Télécharger mon CV</a>
                    </Button>
                </CardHeader>
                <CardContent>
                    <Image src="/CV.png" alt="CV" height={600} width={400} layout="responsive"/>
                </CardContent>
            </Card>
        </div>


    )
}

