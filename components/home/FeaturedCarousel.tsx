import { FeaturedCarouselClient, CarouselItemData } from "./FeaturedCarouselClient";


interface AmplienceCarouselItem {
    title: string;
    link: string;
    image: {
        defaultHost: string;
        endpoint: string;
        name: string;
    };
}

interface AmplienceResponse {
    content: {
        items: AmplienceCarouselItem[];
    };
}

async function getCarouselContent(): Promise<CarouselItemData[]> {
    try {
        const url = "https://jeanstag.cdn.content.amplience.net/content/id/e6945ea0-a3cf-4dbb-be1c-fe3997aa7d39?depth=all&format=inlined";

        const res = await fetch(url, { next: { revalidate: 60 } });

        if (!res.ok) {
            throw new Error(`Failed to fetch content from Amplience: ${res.statusText}`);
        }

        const data: AmplienceResponse = await res.json();

        return data.content.items.map((item, index) => {
            const imageUrl = `https://${item.image.defaultHost}/i/${item.image.endpoint}/${item.image.name}`;
            return {
                id: `amplience-${index}`,
                title: item.title,
                image: imageUrl,
                link: item.link,
            };
        });

    } catch (error) {
        console.error("Error fetching carousel content:", error);
        return [];
    }
}

export async function FeaturedCarousel() {
    const items = await getCarouselContent();
    return <FeaturedCarouselClient items={items} />;
}
