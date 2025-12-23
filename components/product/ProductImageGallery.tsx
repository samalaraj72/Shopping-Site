"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductImageGalleryProps {
    images: string[];
}

export function ProductImageGallery({ images }: ProductImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={cn(
                            "relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-md bg-gray-100 uppercase hover:bg-gray-50 focus:outline-none",
                            selectedImage === image ? "ring-2 ring-navy-900 ring-offset-2" : "ring-1 ring-transparent ring-offset-1 hover:ring-gray-300"
                        )}
                    >
                        {/* Placeholder for real image */}
                        <span className="text-xs text-gray-500">Img {index + 1}</span>
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 lg:w-full">
                <div className="h-full w-full flex items-center justify-center text-gray-400">
                    {/* Use next/image in production */}
                    <span>Selected Image View</span>
                </div>
            </div>
        </div>
    );
}
