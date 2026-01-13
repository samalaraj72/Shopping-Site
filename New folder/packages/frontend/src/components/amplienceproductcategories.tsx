'use client';
import { useState, useEffect } from 'react';
import {ContentClient} from 'dc-delivery-sdk-js';
import {product, img} from '../app/types/interface';
import { fetchProductByKey } from '../../lib/productService';

const client = new ContentClient({
hubName:'Jeanstag',
});

export  const AmplienceproductcategoriesList = () => {

const [Products, setProducts] = useState<product[]>([]);

useEffect(() => {
    async function GetAmplienceAPIData() {
    const response = await fetchProductByKey("CategoryList");
    const result = await response.toJSON();
    setProducts(result.propertyName1);
    };
GetAmplienceAPIData();
  },[]);

 return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            {Products.map((product) => (
              <div key={product.title} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={'https://'+ product.image.defaultHost +'/i/'+product.image.endpoint+'/'+product.image.name}
                    alt={product.imageText}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={'/'+ product.category.toLowerCase()}>
                    <span className="absolute inset-0" />
                    {product.title}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{product.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
