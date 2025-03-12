import { useState } from "react";

export function useCarousel() {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [images, setImages] = useState<string[]>([]);

    const launchCarousel = (selectedImage: string, imageList: string[]) => {
        setCurrentImage(selectedImage);
        setImages(imageList);
        setOpen(true);
    };

    return { open, setOpen, currentImage, images, launchCarousel };
}
