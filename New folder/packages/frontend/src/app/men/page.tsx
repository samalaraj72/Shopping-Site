import { Hero } from "@/components/hero";
import { AmplienceproductcategoriesList } from "@/components/amplienceproductcategories";
import { AmplienceProductMen } from "@/components/amplienceproductmen";
import { Promo } from "@/components/promo";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        <Hero />
        <AmplienceproductcategoriesList />
        <AmplienceProductMen/>
        <Promo />
        <Newsletter />
      </main>
    </div>
  );
}
