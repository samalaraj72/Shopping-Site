import { Hero } from "@/components/home/Hero";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { PromoSection } from "@/components/home/PromoSection";
import { FeaturedCarousel } from "@/components/home/FeaturedCarousel";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedCarousel />
      <CategoryTiles />
      <PromoSection />
      <Analytics />
    </div>
  );
}
