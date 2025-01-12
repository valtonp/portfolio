import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CV() {
    return (
        <div className="max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>My CV</CardTitle>
                    <CardDescription>View or download my curriculum vitae</CardDescription>
                </CardHeader>
                <CardContent>
                    <iframe
                        src="../../../public/CV.pdf"
                        className="w-full h-[calc(100vh-300px)] border-none"
                    />
                </CardContent>
                <CardFooter>
                    <Button asChild>
                        <a href="../../../public/CV.pdf" download>Télécharger CV</a>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

