export async function fetchAmplienceContent<T>(contentId: string): Promise<T> {
    const baseUrl = "https://jeanstag.cdn.content.amplience.net/content/id";
    const url = `${baseUrl}/${contentId}?depth=all&format=inlined`;

    try {
        const res = await fetch(url, { next: { revalidate: 60 } });

        if (!res.ok) {
            throw new Error(`Failed to fetch content from Amplience: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(`Error fetching Amplience content (${contentId}):`, error);
        throw error;
    }
}
