import { getProducts } from "@/lib/data";
import { FilterSidebar } from "@/components/product/FilterSidebar";
import { ProductGrid } from "@/components/product/ProductGrid";

export default async function CategoryPage({
    params,
}: {
    params: { slug: string };
}) {
    const products = await getProducts(params.slug);

    return (
        <div className="bg-white">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pt-8 pb-6">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 capitalize">
                        {params.slug}
                    </h1>
                    {/* Sort Menu Placeholder */}
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-700">Sort</span>
                    </div>
                </div>

                <section aria-labelledby="products-heading" className="pt-6 pb-24">
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        {/* Filters */}
                        <FilterSidebar />

                        {/* Product grid */}
                        <div className="lg:col-span-3">
                            <ProductGrid products={products} />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
