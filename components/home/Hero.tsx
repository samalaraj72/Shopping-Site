import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";


interface AmplienceImage {
    defaultHost: string;
    endpoint: string;
    name: string;
}

interface SlotContentItem {
    heading: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    backgroudImage: AmplienceImage;
}

interface AmplienceContent {
    content: {
        slotContent: SlotContentItem[];
    };
}

async function getHeroContent(): Promise<AmplienceContent> {
    const url = "https://jeanstag.cdn.content.amplience.net/content/id/a36798ed-dd79-464b-bb43-8861c389d5da?depth=all&format=inlined";

    const res = await fetch(url, { next: { revalidate: 60 } });

    if (!res.ok) {
        throw new Error(`Failed to fetch content from Amplience: ${res.statusText}`);
    }

    return res.json();
}

export async function Hero() {
    let heroItem: SlotContentItem;

    try {
        const data = await getHeroContent();
        // Access the first item in slotContent
        heroItem = data.content.slotContent[0];
    } catch (error) {
        console.error("Error fetching hero content:", error);

        heroItem = {
            heading: "THE NEW COLLECTION",
            description: "Fresh styles for the season. Comfort meets modern.",
            ctaText: "Shop Collection",
            ctaLink: "/category/women",
            backgroudImage: {
                defaultHost: "images.unsplash.com",
                endpoint: "",
                name: ""
            }
        };
    }

    // Since we are not re-fetching in the try-catch block for the 'happy path' variable assignment
    // (which was a bit redundant in previous code), we just use heroItem directly.

    // If we want to strictly follow the previous pattern of re-fetching for the "happy path" (though inefficient),
    // we can do so, but better to just use the data we have.
    // However, to keep it simple and robust, let's use the fetched data if available.

    // NOTE: The previous code re-fetched `data` after the try-catch block. 
    // I will optimize this to use the `heroItem` derived above.

    const { heading, description, ctaText, ctaLink, backgroudImage } = heroItem;

    const imageUrl = `https://${backgroudImage.defaultHost}/i/${backgroudImage.endpoint}/${backgroudImage.name}`;

    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="relative h-[500px] w-full bg-gray-200 sm:h-[600px] lg:h-[700px]">
                <img
                    src={imageUrl}
                    alt={heading}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
                    {heading}
                </h1>
                <p className="mt-4 text-xl text-white max-w-lg drop-shadow-md font-medium">
                    {description}
                </p>
                <div className="mt-8 flex gap-4">
                    <Link
                        href={ctaLink}
                        className={cn(buttonVariants({ size: "lg" }), "bg-white text-navy-900 hover:bg-gray-100 font-semibold")}
                    >
                        {ctaText}
                    </Link>
                </div>
            </div>
        </div>
    );
}
