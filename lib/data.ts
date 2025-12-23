import { Product, Category } from "@/types";

const MOCK_CATEGORIES: Category[] = [
    { id: "women", slug: "women", name: "Women", description: "Shop the latest trends in women's fashion." },
    { id: "men", slug: "men", name: "Men", description: "Essential styles for men." },
    { id: "kids", slug: "kids", name: "Kids", description: "Comfortable and durable clothes for kids." },
    { id: "baby", slug: "baby", name: "Baby", description: "Softest fabrics for your little one." },
];

const MOCK_PRODUCTS: Product[] = [
    {
        id: "p1",
        title: "Vintage Soft Hoodie",
        price: 49.95,
        currency: "USD",
        images: ["/placeholder.jpg"],
        description: "Our softest hoodie yet, made with a special washing process.",
        category: "women",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Navy", "Grey", "Pink"],
        isNew: true,
    },
    {
        id: "p2",
        title: "Classic Straight Jeans",
        price: 59.95,
        currency: "USD",
        images: ["/placeholder.jpg"],
        description: "The pair of jeans you will want to wear every day.",
        category: "men",
        sizes: ["30x30", "32x32", "34x34"],
        colors: ["Blue", "Black"],
    },
    // Add more mock products as needed
];

export async function getCategories(): Promise<Category[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    return MOCK_CATEGORIES;
}

export async function getProducts(categorySlug?: string): Promise<Product[]> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    if (categorySlug) {
        if (categorySlug === 'new') return MOCK_PRODUCTS.filter(p => p.isNew);
        return MOCK_PRODUCTS.filter((p) => p.category === categorySlug);
    }
    return MOCK_PRODUCTS;
}

export async function getProduct(id: string): Promise<Product | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return MOCK_PRODUCTS.find((p) => p.id === id);
}
