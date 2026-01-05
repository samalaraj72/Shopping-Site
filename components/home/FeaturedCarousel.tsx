import { FeaturedCarouselClient, CarouselItemData } from "./FeaturedCarouselClient";
import { fetchAmplienceContent } from "@/lib/amplience";

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
        const data = await fetchAmplienceContent<AmplienceResponse>("8422e8ee-0e65-446b-b49e-518187a31faf");

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
