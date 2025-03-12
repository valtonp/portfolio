import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
            <DialogContent className="max-w-5xl w-full h-fit">
                <DialogHeader>
                    <VisuallyHidden>
                        <DialogTitle>Image Gallery</DialogTitle>
                    </VisuallyHidden>
                </DialogHeader>
                <Carousel className="w-full pl-6 pr-6">
                    <CarouselContent className="w-full">
                        {sortedImages.map((img, index) => (
                            <CarouselItem key={index} className="flex justify-center w-full">
                                <Image
                                    src={img}
                                    alt={`Image ${index + 1}`}
                                    width={1920}
                                    height={1080}
                                    layout="intrinsic"
                                    className="object-fill"
                                />
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
