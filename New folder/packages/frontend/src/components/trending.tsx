const products = [
  {
    id: 1,
    name: 'Essential Cotton Tee',
    href: '/products/essential-cotton-tee',
    imageSrc: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    imageAlt: 'White cotton t-shirt',
    price: '$32',
    color: 'White',
  },
  {
    id: 2,
    name: 'Classic Denim Jacket',
    href: '/products/classic-denim-jacket',
    imageSrc: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
    imageAlt: 'Blue denim jacket',
    price: '$89',
    color: 'Blue',
  },
  {
    id: 3,
    name: 'Soft Knit Cardigan',
    href: '/products/soft-knit-cardigan',
    imageSrc: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
    imageAlt: 'Beige knit cardigan',
    price: '$65',
    color: 'Beige',
  },
  {
    id: 4,
    name: 'Slim Fit Chinos',
    href: '/products/slim-fit-chinos',
    imageSrc: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop',
    imageAlt: 'Khaki chino pants',
    price: '$58',
    color: 'Khaki',
  },
  {
    id: 5,
    name: 'Cozy Hoodie',
    href: '/products/cozy-hoodie',
    imageSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
    imageAlt: 'Gray hoodie sweatshirt',
    price: '$48',
    color: 'Gray',
  },
  {
    id: 6,
    name: 'Chambray Shirt',
    href: '/products/chambray-shirt',
    imageSrc: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop',
    imageAlt: 'Light blue chambray shirt',
    price: '$52',
    color: 'Light Blue',
  },
  {
    id: 7,
    name: 'Straight Leg Jeans',
    href: '/products/straight-leg-jeans',
    imageSrc: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop',
    imageAlt: 'Dark wash denim jeans',
    price: '$72',
    color: 'Dark Wash',
  },
  {
    id: 8,
    name: 'Crewneck Sweater',
    href: '/products/crewneck-sweater',
    imageSrc: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop',
    imageAlt: 'Navy blue crewneck sweater',
    price: '$68',
    color: 'Navy',
  },
]

export const Trending = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>

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
