import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { FeaturedCarousel } from "@/components/home/FeaturedCarousel";
import { Analytics } from "@vercel/analytics/next";
import { getCategories } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getCarouselContent } from "@/lib/amplience";

async function CategoryTiles() {
  const categories = await getCategories();

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-8">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="group relative block overflow-hidden rounded-lg bg-gray-100 hover:opacity-90 transition-opacity"
          >
            <div className="aspect-[3/4] w-full bg-gray-200">
              {/* Placeholder for category image */}
              <div className="flex h-full w-full items-center justify-center text-gray-400 bg-gray-200">
                {/* In real app, next/image */}
                <span className="text-lg font-medium text-gray-500">{category.name}</span>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <span className="text-lg font-bold text-white">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function PromoSection() {
  return (
    <section className="bg-navy-900 py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          LIMITED TIME ONLY
        </h2>
        <p className="mt-4 text-xl font-medium">
          40% OFF EVERYTHING
        </p>
        <p className="mt-2 text-base text-gray-300">
          Exclusions apply. Prices as marked.
        </p>
        <div className="mt-8">
          <Link
            href="/category/new"
            className={cn(buttonVariants({ size: "lg" }), "bg-white text-navy-900 hover:bg-gray-100 font-semibold")}
          >
            Shop the Sale
          </Link>
        </div>
      </div>
    </section>
  );
}

export default async function Home() {
  const carouselItems = await getCarouselContent();

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedCarousel items={carouselItems} />
      <CategoryTiles />
      <PromoSection />
      <Analytics />
    </div>
  );
}
