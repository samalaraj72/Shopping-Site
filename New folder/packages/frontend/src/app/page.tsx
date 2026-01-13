import { Hero } from "@/components/hero";
import { AmplienceproductcategoriesList } from "@/components/amplienceproductcategories";
import { AmplienceProductBoys } from "@/components/amplienceproductboys";
import { AmplienceProductGirls } from "@/components/amplienceproductgirls";
import { AmplienceProductMen } from "@/components/amplienceproductmen";
import { AmplienceProductWomen } from "@/components/amplienceproductwomen";
import { Promo } from "@/components/promo";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        <Hero />
        <AmplienceproductcategoriesList/>
        <AmplienceProductBoys/>
        <AmplienceProductGirls/>
        <AmplienceProductMen/>
        <AmplienceProductWomen/>
        <Promo />
        <Newsletter />
      </main>
    </div>
  );
}
