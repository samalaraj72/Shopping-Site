import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <div className="relative w-full">
            {/* Background Image Placeholder - using a div for now or an actual image if we had one */}
            <div className="relative h-[500px] w-full bg-gray-200 sm:h-[600px] lg:h-[700px]">
                {/* In production, use next/image here */}
                <img
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
                    alt="New Arrivals"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
                    THE NEW COLLECTION
                </h1>
                <p className="mt-4 text-xl text-white max-w-lg drop-shadow-md font-medium">
                    Fresh styles for the season. Comfort meets modern.
                </p>
                <div className="mt-8 flex gap-4">
                    <Button asChild size="lg" className="bg-white text-navy-900 override:text-navy-900 hover:bg-gray-100 font-semibold">
                        <Link href="/category/women">Shop Women</Link>
                    </Button>
                    <Button asChild size="lg" className="bg-white text-navy-900 override:text-navy-900 hover:bg-gray-100 font-semibold">
                        <Link href="/category/men">Shop Men</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
