import Link from "next/link";
import { CartItem } from "@/types";
import { X, Minus, Plus } from "lucide-react";

interface CartItemListProps {
    items: CartItem[];
}

export function CartItemList({ items }: CartItemListProps) {
    if (items.length === 0) {
        return (
            <div className="py-12 text-center">
                <h2 className="text-lg font-medium text-gray-900">Your bag is empty</h2>
                <p className="mt-1 text-sm text-gray-500">
                    Calculated at checkout.
                </p>
                <div className="mt-6">
                    <Link href="/" className="text-sm font-medium text-navy-900 hover:text-navy-800">
                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {items.map((product, productIdx) => (
                <li key={product.id + productIdx} className="flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                        <div className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48 bg-gray-200 flex items-center justify-center text-gray-500">
                            {/* Image placeholder */}
                            <span>Img</span>
                        </div>
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-sm">
                                        <Link href={`/product/${product.id}`} className="font-medium text-gray-700 hover:text-gray-800">
                                            {product.title}
                                        </Link>
                                    </h3>
                                </div>
                                <div className="mt-1 flex text-sm">
                                    <p className="text-gray-500">{product.selectedColor}</p>
                                    {product.selectedSize ? (
                                        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.selectedSize}</p>
                                    ) : null}
                                </div>
                                <p className="mt-1 text-sm font-medium text-gray-900">{product.currency} {product.price.toFixed(2)}</p>
                            </div>

                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                                    Quantity, {product.title}
                                </label>
                                <div className="flex items-center gap-2">
                                    <button className="p-1 text-gray-400 hover:text-gray-500">
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="text-gray-900 font-medium w-6 text-center">{product.quantity}</span>
                                    <button className="p-1 text-gray-400 hover:text-gray-500">
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>

                                <div className="absolute top-0 right-0">
                                    <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Remove</span>
                                        <X className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
