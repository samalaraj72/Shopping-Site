'use client' ;
import ProductDetails from "@/components/ProductDetails";
import { useParams, useSearchParams } from "next/navigation";



 export default function ProductPage(){
    const searchParams = useSearchParams();
    const Params=useParams();
    const id= searchParams.get('id')?.toUpperCase();
    const gender=Params.gender as string;
        // <p>Product page</p>
        //<ProductDetails contentId="da91623f-f644-4214-870d-23753db634a7" />
        console.log({gender},{id});
        if(!id) return <div>invalid product</div>
        return <ProductDetails deliveryKey={id}  routeGender={gender}/>;
        
    }