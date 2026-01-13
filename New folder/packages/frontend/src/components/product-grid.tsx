const products = [
  {
    id: 1,
    name: 'Essential Cotton Tee',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    imageAlt: 'White cotton t-shirt',
    price: '$32',
    color: 'White',
  },
  {
    id: 2,
    name: 'Classic Denim',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop',
    imageAlt: 'Blue denim jeans',
    price: '$78',
    color: 'Blue',
  },
  {
    id: 3,
    name: 'Knit Cardigan',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
    imageAlt: 'Beige cardigan sweater',
    price: '$65',
    color: 'Beige',
  },
  {
    id: 4,
    name: 'Graphic Hoodie',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
    imageAlt: 'Gray hoodie',
    price: '$48',
    color: 'Gray',
  },
  {
    id: 5,
    name: 'Denim Jacket',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
    imageAlt: 'Blue denim jacket',
    price: '$89',
    color: 'Blue',
  },
  {
    id: 6,
    name: 'Slim Chinos',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop',
    imageAlt: 'Khaki chino pants',
    price: '$58',
    color: 'Khaki',
  },
  {
    id: 7,
    name: 'Chambray Shirt',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop',
    imageAlt: 'Light blue shirt',
    price: '$52',
    color: 'Light Blue',
  },
  {
    id: 8,
    name: 'Cable Sweater',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop',
    imageAlt: 'Navy sweater',
    price: '$68',
    color: 'Navy',
  },
  {
    id: 9,
    name: 'Jogger Pants',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop',
    imageAlt: 'Black jogger pants',
    price: '$55',
    color: 'Black',
  },
  {
    id: 10,
    name: 'Oxford Shirt',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=800&fit=crop',
    imageAlt: 'White oxford shirt',
    price: '$62',
    color: 'White',
  },
  {
    id: 11,
    name: 'Bomber Jacket',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
    imageAlt: 'Olive bomber jacket',
    price: '$125',
    color: 'Olive',
  },
  {
    id: 12,
    name: 'Polo Shirt',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=600&h=800&fit=crop',
    imageAlt: 'Navy polo shirt',
    price: '$42',
    color: 'Navy',
  },
]

export const ProductGrid = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
                    <a href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
