"use client";

import { useState } from "react";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductInfoProps {
    product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            alert("Please select size and color");
            return;
        }
        console.log("Added to cart", { product, selectedSize, selectedColor });
        alert("Added to cart!");
    };

    return (
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.title}</h1>

            <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">{product.currency} {product.price.toFixed(2)}</p>
            </div>

            <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6 text-base text-gray-700">
                    <p>{product.description}</p>
                </div>
            </div>

            <div className="mt-6">
                {/* Colors */}
                <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900">Color</h3>
                    <div className="mt-2 flex items-center space-x-3">
                        {product.colors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={cn(
                                    "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400",
                                    selectedColor === color ? "ring ring-offset-1" : ""
                                )}
                            >
                                <span className="sr-only">{color}</span>
                                <span
                                    aria-hidden="true"
                                    className={cn("h-8 w-8 rounded-full border border-black border-opacity-10", {
                                        'bg-white': color === 'White',
                                        'bg-black': color === 'Black',
                                        'bg-blue-600': color === 'Blue' || color === 'Navy',
                                        'bg-pink-500': color === 'Pink',
                                        'bg-gray-500': color === 'Grey',
                                    })}
                                    style={{ backgroundColor: color.toLowerCase() }}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sizes */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                        <a href="#" className="text-sm font-medium text-navy-900 hover:underline">Size guide</a>
                    </div>
                    <div className="mt-2 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={cn(
                                    "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1",
                                    selectedSize === size ? "border-transparent bg-navy-900 text-white hover:bg-navy-800" : "border-gray-200 text-gray-900",
                                )}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <Button
                    size="lg"
                    className="w-full bg-navy-900 hover:bg-navy-800"
                    onClick={handleAddToCart}
                    disabled={!selectedSize || !selectedColor}
                >
                    Add to bag
                </Button>
            </div>
        </div>
    );
}
