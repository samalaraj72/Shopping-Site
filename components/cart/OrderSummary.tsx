import { Button } from "@/components/ui/button";
import { Cart } from "@/types";

interface OrderSummaryProps {
    cart: Cart;
}

export function OrderSummary({ cart }: OrderSummaryProps) {
    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                Order summary
            </h2>

            <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">${cart.total.toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="flex items-center text-sm text-gray-600">
                        <span>Shipping estimate</span>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="flex text-sm text-gray-600">
                        <span>Tax estimate</span>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">$8.32</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                    <dd className="text-base font-medium text-gray-900">${(cart.total + 13.32).toFixed(2)}</dd>
                </div>
            </dl>

            <div className="mt-6">
                <Button size="lg" className="w-full bg-navy-900 hover:bg-navy-800">
                    Checkout
                </Button>
            </div>
        </section>
    );
}
