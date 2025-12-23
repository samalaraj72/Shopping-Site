import { getProduct } from "@/lib/data";
import { ProductImageGallery } from "@/components/product/ProductImageGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { notFound } from "next/navigation";

export default async function ProductPage({
    params,
}: {
    params: { id: string };
}) {
    const product = await getProduct(params.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    {/* Image gallery */}
                    <ProductImageGallery images={product.images} />

                    {/* Product info */}
                    <ProductInfo product={product} />
                </div>
            </div>
        </div>
    );
}
