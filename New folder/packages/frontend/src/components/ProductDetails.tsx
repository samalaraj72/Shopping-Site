'use client' ;

import { useEffect, useState } from "react";
import { fetchProductById } from "../../lib/productService";
import { fetchProductByKey } from "../../lib/productService";
import { useRouter } from "next/navigation";

type ProductDetailsProps ={
  deliveryKey: string;
  routeGender: string;
};

export default function ProductDetails ({deliveryKey, routeGender}:ProductDetailsProps){
    const [product, setProduct]=useState<any>(null);
    const[loading, setLoading]= useState(true);
    const router=useRouter();

    useEffect(()=>{
        async function loadProduct() {
            try{
                //const res=await fetchProductById(contentId);
                const res=await fetchProductByKey(deliveryKey);
                const data=await res.toJSON();
                if(!data){
                  router.replace("/404");
                  return;
                }
                const raw= typeof data==="string"?JSON.parse(data):data;

                 if(raw.Category.toLowerCase()!=routeGender.toLowerCase()){   
                    
                    router.replace("/404");
                    return;
                  }
                setProduct(data);
            }
            catch (error){
                console.error(error);
            }
            finally{
                setLoading(false);
            }            
        }
        loadProduct();
    },[deliveryKey, routeGender]);

    if (loading) return <p>Loading...</p>;
    if(!product) return <p> Product not available.</p>
   
    function Accordion ({ title, children}:{title:string; children:React.ReactNode}){
      return(
        <details className="border-t pt-4">
          <summary className="cursor-pointer font-medium">{title}</summary>
          <div className="mt-2 text-sm text-gray-600 leading-relaxed">{children}</div>
        </details>
      );
    }

    return(
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-2 grid-rows-3 gap-4">
            {
              product.images.map((image:any, index:number)=>{
                const imgUrl= `https://${image.defaultHost}/i/${image.endpoint}/${image.name}`;
                return(
                  <div
                  key={index}
                  className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block bg-gray-100">
                  <img
                  src={imgUrl}
                  alt={product.productName}
                  className="h-full w-full object-cover object-center" />
                  </div>
                );
              })
            }
          </div>
          <div className="sticky top-20 h-fit space-y-6">

            <h1 className="text-2xl font-semibold">{product.productName}</h1>

            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg line-through text-gray-500">${product.price}</div>
                <div className="text-xl font-semibold text-red-600">${product.discountedPrice}</div>
              </div>
              <div className="text-right">
                <div className="text-sm">*****</div>
                <div className="text-xs text-gray-500">{product.ratingCount}</div>
              </div>              
            </div>

            <p className="text-red-600 font-medium">{product.discountText}</p>

            <div>
              <h3 className="font-medium">Color</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((color:any)=>(
                  <button 
                    key={color}
                    title={color}
                    className="h-8 w-8 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:rig-black" 
                    style={{backgroundColor:color}}/>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium">Size</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((size:string)=>(
                  <button 
                    key={size}
                    className="border px-4 py-2 text-sm hover:border-black" >
                      {size}
                    </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 text-sm font-medium hover:bg-gray-900"> Add to bag</button>

            <Accordion title ="Product Details">{product.productDetails}</Accordion>
            <Accordion title ="Size & Fit">{product.sizeAndFit}</Accordion>
            <Accordion title ="Fabric & Care">{product.fabricCare}</Accordion>
            <Accordion title ="Shipping and Returns">{product.shippingReturns}</Accordion>

          </div>

        </div>
      </div>    

  );
}