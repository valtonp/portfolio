import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface CarouselModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    currentImage: string | null;
    images: string[];
}

export function CarouselModal({ open, setOpen, currentImage, images }: CarouselModalProps) {
    const sortedImages = currentImage ? [currentImage, ...images.filter(img => img !== currentImage)] : images;

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <VisuallyHidden>
                        <DialogTitle>Image Gallery</DialogTitle>
                    </VisuallyHidden>
                </DialogHeader>
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {sortedImages.map((img, index) => (
                            <CarouselItem key={index} className="flex justify-center">
                                <Image src={img} alt={`Image ${index + 1}`} width={1280} height={900} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </DialogContent>
        </Dialog>
    );
}
