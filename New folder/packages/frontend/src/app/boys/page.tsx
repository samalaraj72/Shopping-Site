import { Hero } from "@/components/hero";
import { AmplienceproductcategoriesList } from "@/components/amplienceproductcategories";
import { AmplienceProductBoys } from "@/components/amplienceproductboys";
import { Promo } from "@/components/promo";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        <Hero />
        <AmplienceproductcategoriesList />
        <AmplienceProductBoys/>
        <Promo />
        <Newsletter />
      </main>
    </div>
  );
}
