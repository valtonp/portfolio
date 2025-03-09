import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import MediaButton from "@/components/section/media-button";

interface ImageLinkProps{
    link: string
}

export default function DownloadButton({link} : ImageLinkProps){
    return (
        <div className="flex gap-4 w-full items-center justify-center">
            <a href={link} className="max-w-64 " download>
                <Button className="flex-1 gap-2 w-full mr-3" size="sm">
                    <Download className="h-4 w-4" />
                    <span>CV</span>
                </Button>
            </a>
            <MediaButton />
        </div>
    )
}