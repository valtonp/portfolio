import {Button} from "@/components/ui/button";
import {ExternalLink} from "lucide-react";

export default function ProjectInfo() {
    return (
        <div>
            <Button>
                <ExternalLink className="h-3.5 w-3.5"/>
                Voir plus
            </Button>
        </div>
    )
}