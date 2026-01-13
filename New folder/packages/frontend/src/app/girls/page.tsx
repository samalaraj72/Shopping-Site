import { Hero } from "@/components/hero";
import { AmplienceproductcategoriesList } from "@/components/amplienceproductcategories";
import { AmplienceProductGirls } from "@/components/amplienceproductgirls";
import { Promo } from "@/components/promo";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        <Hero />
        <AmplienceproductcategoriesList />
        <AmplienceProductGirls/>
        <Promo />
        <Newsletter />
      </main>
    </div>
  );
}
