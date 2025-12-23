import Link from "next/link";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div className="aspect-[3/4] bg-gray-200 sm:aspect-none sm:h-96 relative">
                {/* Placeholder for image */}
                <div className="h-full w-full object-cover object-center sm:h-full sm:w-full bg-gray-100 flex items-center justify-center text-gray-400">
                    {/* Use next/image in production */}
                    <span>{product.title}</span>
                </div>
                {product.isNew && (
                    <div className="absolute top-2 left-2 bg-navy-900 text-white text-xs font-bold px-2 py-1">
                        NEW
                    </div>
                )}
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                    <Link href={`/product/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                    </Link>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                    <p className="text-base font-medium text-gray-900">
                        {product.currency} {product.price.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
}
