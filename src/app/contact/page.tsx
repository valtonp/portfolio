import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function Contact() {
    return (
        <div className="max-w-xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Contact Me</CardTitle>
                    <CardDescription>Fill out the form below to get in touch.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" placeholder="Your name" required />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" placeholder="Your email" required />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" name="message" placeholder="Your message" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">Send Message</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

