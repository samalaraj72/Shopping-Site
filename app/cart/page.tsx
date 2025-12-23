import { CartItemList } from "@/components/cart/CartItemList";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { Cart } from "@/types";

// Mock Cart Data
const MOCK_CART: Cart = {
    items: [
        {
            id: "p1",
            title: "Vintage Soft Hoodie",
            price: 49.95,
            currency: "USD",
            images: ["/placeholder.jpg"],
            description: "Our softest hoodie yet.",
            category: "women",
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Navy", "Grey", "Pink"],
            quantity: 1,
            selectedSize: "M",
            selectedColor: "Navy",
        },
        {
            id: "p2",
            title: "Classic Straight Jeans",
            price: 59.95,
            currency: "USD",
            images: ["/placeholder.jpg"],
            description: "The pair of jeans you will want to wear every day.",
            category: "men",
            sizes: ["30x30", "32x32"],
            colors: ["Blue"],
            quantity: 1,
            selectedSize: "32x32",
            selectedColor: "Blue",
        }
    ],
    total: 109.90,
};

export default function CartPage() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Bag</h1>

                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>

                        <CartItemList items={MOCK_CART.items} />
                    </section>

                    {/* Order summary */}
                    <OrderSummary cart={MOCK_CART} />
                </form>
            </div>
        </div>
    );
}
