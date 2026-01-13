import { Hero } from "@/components/hero";
import { AmplienceproductcategoriesList } from "@/components/amplienceproductcategories";
import { AmplienceProductWomen } from "@/components/amplienceproductwomen";
import { Promo } from "@/components/promo";
import { Newsletter } from "@/components/newsletter";

export default function Women() {
  return (
    <div className="bg-white">
      <main>
        <Hero />
        <AmplienceproductcategoriesList />
        <AmplienceProductWomen/>
        <Promo />
        <Newsletter />
      </main>
    </div>
  );
}
