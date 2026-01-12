"use client";

import * as React from "react";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export interface CarouselItemData {
    id: string;
    title: string;
    image: string;
    link: string;
}

interface FeaturedCarouselProps {
    items: CarouselItemData[];
}

export function FeaturedCarousel({ items }: FeaturedCarouselProps) {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div className="w-full py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-10">
                <h2 className="text-3xl font-bold text-center text-navy-900">Featured Collections</h2>
            </div>

            <div className="w-full px-16 relative">
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                        slidesToScroll: 4,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {items.map((item) => (
                            <CarouselItem key={item.id} className="pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <div className="h-full">
                                    <Link href={item.link} className="block h-full transition-opacity hover:opacity-95">
                                        <Card className="border-0 shadow-lg overflow-hidden group h-full rounded-none sm:rounded-lg">
                                            <CardContent className="flex flex-col items-center justify-center p-0 relative aspect-[3/4]">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                                <h3 className="absolute bottom-6 text-2xl font-bold text-white z-10">{item.title}</h3>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="h-12 w-12 bg-white/90 hover:bg-white border-none shadow-lg [&_svg]:h-6 [&_svg]:w-6 text-navy-900" />
                        <CarouselNext className="h-12 w-12 bg-white/90 hover:bg-white border-none shadow-lg [&_svg]:h-6 [&_svg]:w-6 text-navy-900" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
