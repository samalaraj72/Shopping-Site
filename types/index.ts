export interface Product {
    id: string;
    title: string;
    price: number;
    currency: string;
    images: string[]; // URLs
    description: string;
    category: string;
    sizes: string[];
    colors: string[];
    isNew?: boolean;
    discountPercentage?: number;
}

export interface Category {
    id: string;
    slug: string;
    name: string;
    description?: string;
    image?: string;
}

export interface CartItem extends Product {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

export interface Cart {
    items: CartItem[];
    total: number;
}
