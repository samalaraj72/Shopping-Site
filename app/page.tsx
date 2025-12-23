import { Hero } from "@/components/home/Hero";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { PromoSection } from "@/components/home/PromoSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CategoryTiles />
      <PromoSection />
    </div>
  );
}
