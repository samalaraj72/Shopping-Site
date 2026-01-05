import { Hero } from "@/components/home/Hero";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { PromoSection } from "@/components/home/PromoSection";
import { FeaturedCarousel } from "@/components/home/FeaturedCarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedCarousel />
      <CategoryTiles />
      <PromoSection />
    </div>
  );
}
