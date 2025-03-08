import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Github, Linkedin, Mail} from "lucide-react";

export default function MediaButton(){
    return (
        <div className="flex gap-2">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="https://github.com/valtonp" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon" className="rounded-full">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>GitHub</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="https://www.linkedin.com/in/paul-valton-5617a3230/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" size="icon" className="rounded-full">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>LinkedIn</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="mailto:paul.valton@icloud.com">
                            <Button variant="outline" size="icon" className="rounded-full">
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                            </Button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Email</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}