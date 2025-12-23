import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PromoSection() {
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
                    <Button asChild size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold">
                        <Link href="/category/new">Shop the Sale</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
