const products = [
  {
    id: 1,
    name: 'Vintage Denim Jacket',
    href: '/products/vintage-denim-jacket',
    imageSrc: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
    imageAlt: 'Classic blue denim jacket',
    price: '$89',
    color: 'Blue',
  },
  {
    id: 2,
    name: 'Organic Cotton Tee',
    href: '/products/organic-cotton-tee',
    imageSrc: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    imageAlt: 'White organic cotton t-shirt',
    price: '$32',
    color: 'White',
  },
  {
    id: 3,
    name: 'Relaxed Fit Jeans',
    href: '/products/relaxed-fit-jeans',
    imageSrc: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop',
    imageAlt: 'Medium wash relaxed fit jeans',
    price: '$78',
    color: 'Medium Wash',
  },
  {
    id: 4,
    name: 'Cable Knit Sweater',
    href: '/products/cable-knit-sweater',
    imageSrc: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop',
    imageAlt: 'Navy cable knit sweater',
    price: '$85',
    color: 'Navy',
  },
  {
    id: 5,
    name: 'Linen Blend Shirt',
    href: '/products/linen-blend-shirt',
    imageSrc: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop',
    imageAlt: 'Light blue linen shirt',
    price: '$62',
    color: 'Light Blue',
  },
  {
    id: 6,
    name: 'Quilted Bomber',
    href: '/products/quilted-bomber',
    imageSrc: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
    imageAlt: 'Olive quilted bomber jacket',
    price: '$125',
    color: 'Olive',
  },
  {
    id: 7,
    name: 'Crew Neck Sweatshirt',
    href: '/products/crew-neck-sweatshirt',
    imageSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
    imageAlt: 'Gray crew neck sweatshirt',
    price: '$48',
    color: 'Gray',
  },
  {
    id: 8,
    name: 'Skinny Fit Chinos',
    href: '/products/skinny-fit-chinos',
    imageSrc: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop',
    imageAlt: 'Khaki skinny fit chinos',
    price: '$68',
    color: 'Khaki',
  },
]

export const Featured = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
